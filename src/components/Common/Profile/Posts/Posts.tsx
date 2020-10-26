import s from "./Posts.module.css"
import React, {ChangeEvent, useState} from "react"
import Post from "./Post/Post"
import {ProfilePageType} from "../../../../redux/profileReduser"
import {Field, Form} from "react-final-form";

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: (value: { postText: string }) => void
}

export function Posts(props: PostsPropsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (values: FormPropsType): void => {
        props.addPost(values)
        console.log(values)
        //props.addPost(value)
    }
    // let onChangeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setValue(e.currentTarget.value)
    // }
    return (
        <div className={s.posts}>
            <div className={s.textAreaBlock}>
                {/*<textarea ref={newPostElement} className={s.textarea_post}*/}
                {/*          value={value}*/}
                {/*          onChange={onChangeNewPostText}>New post</textarea>*/}
                {/*<button className='postBtn' onClick={() => {onAddPost(value)}}>add</button>*/}
                <AddPostForm addPost={onAddPost}  />
            </div>
            {
                props.profilePage.posts.map(p => <Post content={p.content} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    )
}

type FormPropsType = {
    postText: string
}
type AddPostFormPropsType = {
    addPost: (values: FormPropsType) => void
}
const AddPostForm = (props: AddPostFormPropsType) => {
    return (
        <Form  onSubmit={props.addPost}>
            {({ handleSubmit}) =>  (
                <form onSubmit={handleSubmit} className={s.postTextarea} >
                    <div><Field name="postText"
                                component="textarea"
                                placeholder="enter your post text"
                                className={s.textarea_post}
                    /></div>
                    <div><button type="submit" className='postBtn'>LogIn</button></div>
                </form>
            )}
        </Form>
    )

}
