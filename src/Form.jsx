import React, {useState} from 'react';
import s from './Form.module.css'
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Input, InputD } from '../src/controls/FormControls'
import store from './store'


function submit(values) {
    console.log(values)
}


const SignUpForm = props => {

const [page, setPage] = useState(0)
const [gender, setGender] = useState('')

const selected = {backgroundColor: 'rgb(74,144,226)', color: 'white'}
const unselected = {backgroundColor: 'white', color: 'black'}

//console.log(store.getState().form.signup.values)

return <div className={s.formStyle}>    
    <form onSubmit={props.handleSubmit(submit)}>

        {page == 0 && (
        <div className={s.frame}>
        <div className={s.formHead}>
            <div>
                <h2>Signup</h2>
            </div>            
            <Progressbar width={33.3}/>
        </div>

        <div className={s.formBody}>
            <div>
                <Field name={"email"} description={"EMAIL"} err={"EMAIL IS REQUIRED"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} description={"PASSWORD"} err={"PASSWORD IS REQUIRED"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={"confirm_password"} description={"CONFIRM PASSWORD"} err={"CONFIRM PASSWORD IS REQUIRED"} component={Input} validate={[required]}/>
            </div>
        </div>
        
        <div className={s.navButtons}>
            <div></div>
            <button onClick={() => setPage(1)} disabled={false}>NEXT🡢</button>
        </div>
        </div>
        )}

        {page === 1 && (
            <div className={s.frame}>
            <div className={s.formHead}>
                <div>
                    <h2>Signup</h2>
                </div>            
                <Progressbar width={66.6}/>
            </div>
            <div className={s.formBody}>
                <div>
                    <h3>DATE OF BIRTH</h3>
                </div>                
                <div className={s.block}>
                    <div>
                        <Field placeholder={"DD"} name={"DD"} component={InputD}/>                                        
                        <Field placeholder={"MM"} name={"MM"} component={InputD}/>
                        <Field placeholder={"YYYY"} name={"YYYY"} component={InputD}/>
                    </div>  
                </div>                   
                
                <div>
                    <h3>GENDER</h3>
                </div>

                <div className={s.block}>
                    <div>
                    <button onClick={() => setGender('male')} style={gender === 'male' ? selected : unselected}>MALE</button>
                    <button onClick={() => setGender('female')} style={gender === 'female' ? selected : unselected}>FEMALE</button>
                    <button onClick={() => setGender('unspecified')} style={gender === 'unspecified' ? selected : unselected}>UNSPECIFIED</button> 
                    </div>
                </div>
            
                <div>
                    <h3>WHERE DID YOU HEAR ABOUT IS?</h3>
                </div>                
                <div>
                <select name="how_hear_about_us">
                    <option value="" selected></option>
                    <option value="friends">Friends</option>
                    <option value="advertising" >Advertising</option>
                    <option value="social medis">Social media</option>
                    <option value="other" label="Лариса">other...</option>
                </select>     
                </div>                
                </div>
                <div className={s.navButtons}>                
                        <button onClick={() => setPage(0)}>🡠BACK</button>                
                        <button onClick={() => setPage(2)}>NEXT🡢</button>                                
                </div>
            </div>
        )}

        {page === 2 && (

        <div className={s.frame}>
            <div className={s.formHead}>
                <div>
                    <h2>Thank you!</h2>
                </div>
                <Progressbar width={100}/>
            </div>
            <div className={s.formBody}>
                <div className={s.check}>✔</div>
                <div>
                    <button className={s.submit}>Go to Dashboard🡢</button>
                </div>
            </div>
            <div className={s.navButtons}>            
                    <button onClick={() => setPage(1)}>🡠BACK</button>           
                    <div></div>                            
            </div>
        </div>
        )}         
    </form>
</div>

};



const Progressbar = props => {
    const wd = props.width + "%"
    const style = {width: wd}
    return(
    <div className={s.progressbar}>
       <div className={s.pbar_item} style={style}></div>                
    </div>
    )
}

// VALIDATORS -----------------------------------

const required = value => {
    if(value) return undefined;
    return "Field is required"
}

// ------------------------------------------------

const SignupReduxForm = reduxForm({ form: 'signup' })(SignUpForm)

const Form = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)        
    }

    return(
        <SignupReduxForm onSubmit={onSubmit} / >
    )

}

export default Form