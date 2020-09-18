import s from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";

type PostsType = {
    likesCount: number
    content: string | number
}

function Posts(){
    return (
        <div className={s.posts}>
            <div className={s.postTextarea}>
                <textarea className={s.textarea_post}>New post</textarea>
                <button className='postBtn'>add</button>
            </div>
            <Post content = 'Hello! This is my first post!' likesCount= {25}/>
            <Post content = 'Hello! This is my second post!' likesCount = {15}/>
            <Post content = 'Hello! This is my third post!' likesCount = {20}/>
        </div>
    )
}

export default Posts
