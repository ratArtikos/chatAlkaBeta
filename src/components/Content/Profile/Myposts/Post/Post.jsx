import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (

        <div className={s.item}>
            <img src='https://w-dog.ru/wallpapers/4/16/460266478066695/starik-portret-trubka-shlyapa.jpg' />
            {props.message}
            <div>
                <span>
               <button> {props.like} like </button>
                </span>
            </div>
        </div>
    )
}


export default Post;