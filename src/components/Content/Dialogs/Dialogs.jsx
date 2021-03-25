import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messege/Message';

const Dialogs = (props) => {

let state = props.messagesPage;

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = state.messagesData
        .map(message => <Message message={message.message} id={message.id} key={message.id}/>);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textArea}>
                    <textarea
                        placeholder='Enter your message'
                        onChange={onMessageChange}
                        value={state.newMessageText}
                        cols="20" rows="2" />
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;