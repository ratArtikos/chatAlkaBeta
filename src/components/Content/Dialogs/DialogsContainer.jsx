import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(addMessageActionCreator()) },
        updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)



export default DialogsContainer;