import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Alert } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react';

const MyPosts = (props) => {
    let postsElements = props.postsData
        .map(post => <Post like={post.like} message={post.message} id={post.id} key={post.id}/>);

    let newPostElement = React.createRef();

    let AddPost = () => {
        props.onAddPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myPosts}>
           
            <Alert success>My posts</Alert>
            <div>
                <textarea color='black'
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    cols="40" rows="2" />
                <Button success outline onClick={AddPost}>Add post</Button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}




export default MyPosts;