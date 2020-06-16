import React from "react";
import { LoginButton } from "../LoginButton";
import { Input } from "../../Input/Input";



export const Form = ()=> {
    return (
        <form>
            <Input label="Username" id="username"/>
            <Input label="Password" id="password"/>
            <LoginButton/>
        </form>
    )
}