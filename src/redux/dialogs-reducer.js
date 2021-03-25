const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initializationState = {
        dialogsData: [
            { id: 1, name: 'Igor' },
            { id: 2, name: 'Vanya' },
            { id: 3, name: 'Roma' },
            { id: 4, name: 'Danya' },
            { id: 5, name: 'Artem' },
            { id: 6, name: 'Dima' },
        ],

        messagesData: [
            { id: 1, message: 'HI' },
            { id: 2, message: 'Mdaaaa' },
            { id: 3, message: 'hALLO' },
            { id: 4, message: 'hOW A U' },
            { id: 5, message: 'wELL' },
            { id: 6, message: 'Who i' },
        ],

        newMessageText: ''
    }

const dialogsReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {...state, 
                newMessageText : '',
                messagesData: [...state.messagesData, {id:10, message: state.newMessageText}]
            }; 
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {...state,
                newMessageText: action.newText
            };
            
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = () =>
    ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;