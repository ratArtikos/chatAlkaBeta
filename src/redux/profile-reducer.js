const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initializationState = {


    postsData: [
        { id: 1, message: 'Why are you ignor me? I wont to tell you about my new work...', like: 11 },
        { id: 2, message: 'PLeaseee, check your sms', like: 23 },
        { id: 3, message: 'Go away', like: 15 },
        { id: 4, message: 'How a U?', like: 9 },
        { id: 5, message: 'The weather is nice', like: 4 },
        { id: 6, message: 'Tarararararra', like: 1 },
        { id: 7, message: 'Black Lives Metter', like: 80 },
    ],
    newPostText: ''
}

const profileReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [{
                    id: 10,
                    message: state.newPostText,
                    like: 500
                }, ...state.postsData]
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () =>
    ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;