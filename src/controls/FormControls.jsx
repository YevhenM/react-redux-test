import React from "react";
import s from "../controls/FormControls.module.css"
import { Field, reduxForm } from 'redux-form';



export const Input = ({input, meta, ...props}) => {    

    let hasError = (meta.touched && meta.error)
    let textError = meta.error
    return (
        <div className={s.formControl + " " + ( hasError? s.error: "")}>
            <div>
                <div className={s.description} style={hasError ? {color: 'red'} : {}}>{hasError ? props.err: props.description}</div>
                <input {...input} {...props}/>
            </div>            
        </div>
    )
}

export const InputD = ({input, meta, ...props}) => {
    
    let hasError = (meta.touched && meta.error && !meta.active)
    let textError = meta.error
    return (
        <div className={s.inpD}>
            <div>                
                <input {...input} {...props}/>
            </div>            
        </div>
    )
}

export const ListBox = ({input, meta, ...props}) => {
    
    let hasError = (meta.touched && meta.error && !meta.active)
    let textError = meta.error
    return (
        <div className={s.inpD}>
            <div>                
                <input {...input} {...props}/>
            </div>            
        </div>
    )
}

