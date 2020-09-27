import s from "./Posts.module.css"
import React from "react"
import Post from "./Post/Post"
import {addPostAC, changeNewPostTextAC, ProfilePageType} from "../../../../redux/profileReduser";


type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: Object) => void
}


function Posts(props: PostsPropsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostAC())
    }
    let onChangeNewPostText = () => {
        // @ts-ignore
        props.dispatch(changeNewPostTextAC(newPostElement.current.value))
    }

    return (
        <div className={s.posts}>
            <div className={s.postTextarea}>
                <textarea ref={newPostElement} className={s.textarea_post}
                          value={props.profilePage.newPostText}
                          onChange={onChangeNewPostText}>New post</textarea>
                <button className='postBtn' onClick={addPost}>add</button>
            </div>
            {
                props.profilePage.posts.map(p => <Post content={p.content} likesCount={p.likesCount}/>)
            }
        </div>
    )
}

export default Posts
