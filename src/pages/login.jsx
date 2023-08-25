import React, { useState } from "react";
import './login.css';

import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const Login = () => {

    const [userName, setUserName] = useState();

    return (
        <>
            <div className="fieldset">
            <Fieldset  legend="Chat com Spring e Reactjs">
                <p className="m-0">
                    Nome de usuario
                </p>
                <div className="p-inputgroup">
                        <InputText placeholder="Nome de Usuario" onChange={(e) => setUserName(e.target.value)} />
                    <Button label="Entrar" />
                </div>
            </Fieldset>
            </div>
        </>

    )

}
export default Login;