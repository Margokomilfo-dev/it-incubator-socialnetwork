import s from "./Posts.module.css"
import React from "react"
import Post from "./Post/Post"
import {ProfilePageType} from "../../../../redux/profileReduser";


type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    onChangeNewPostText: (value: string) => void
}


function Posts(props: PostsPropsType) {
    debugger
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
    }
    let changeNewPostText = () => {
        // @ts-ignore
        props.onChangeNewPostText(newPostElement.current.value)
    }

    return (
        <div className={s.posts}>
            <div className={s.postTextarea}>
                <textarea ref={newPostElement} className={s.textarea_post}
                          value={props.profilePage.newPostText}
                          onChange={changeNewPostText}>New post</textarea>
                <button className='postBtn' onClick={onAddPost}>add</button>
            </div>
            {
                props.profilePage.posts.map(p => <Post content={p.content} likesCount={p.likesCount}/>)
            }
        </div>
    )
}

export default Posts
