import React from "react"

import TextField from '@material-ui/core/TextField';

export const Input = (props) => {
    return(
        <TextField required label={props.label} id={props.id}/>
    )
}