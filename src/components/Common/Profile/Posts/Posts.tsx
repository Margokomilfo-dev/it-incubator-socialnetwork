import s from "./Posts.module.css"
import React, {ChangeEvent, useState} from "react"
import Post from "./Post/Post"
import {ProfilePageType} from "../../../../redux/profileReduser"

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: (value: string) => void
    onChangeNewPostText: (value: string) => void
}

function Posts(props: PostsPropsType) {
    let [value, setValue] = useState<string>('')

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (value: string) => {
        props.addPost(value)
        setValue('')
    }
    let changeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={s.posts}>
            <div className={s.postTextarea}>
                <textarea ref={newPostElement} className={s.textarea_post}
                          value={value}
                          onChange={changeNewPostText}>New post</textarea>
                <button className='postBtn' onClick={() => {onAddPost(value)}}>add</button>
            </div>
            {
                props.profilePage.posts.map(p => <Post content={p.content} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    )
}

export default Posts
