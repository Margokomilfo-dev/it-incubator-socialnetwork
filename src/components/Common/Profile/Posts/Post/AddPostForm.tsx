import {Field, Form} from "react-final-form";
import s from "../Posts.module.css";
import React from "react";

export type FormPropsType = {
    PostText: string
}
type AddPostFormPropsType = {
    addPost: (values: FormPropsType) => void
}
export const AddPostForm = (props: AddPostFormPropsType) => {
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