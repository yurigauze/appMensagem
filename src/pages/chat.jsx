import React, { useState } from "react";

import './chat.css';

import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';


const Chat = ({ userName }) => {

    return (
        <>
            <div className="fieldset">

                <Fieldset className="fieldMaior" legend="Chat com Spring e Reactjs">
                    <div className="chatList">
                        <Card className="listChat" title="Chats Disponiveis" >
                            <p className="m-0">
                                Card que irá servir de lista de pessoas no chat
                            </p>
                        </Card>

                        <Fieldset className="fieldChat" legend="Nome do Usuario do chat">
                            <p className="m-0">
                                {userName}
                            </p>
                            <Card className="chat" >
                                <p className="m-0">
                                    Card que irá servir de lista de pessoas no chat
                                </p>
                                <div className="Input">
                                    <InputText placeholder="Digite a mensagem   " />
                                    <Button label="Enviar" />
                                </div>
                            </Card>

                        </Fieldset>
                    </div>
                </Fieldset >
            </div >
        </>

    )

}
export default Chat;