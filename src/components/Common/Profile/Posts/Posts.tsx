import s from "./Posts.module.css"
import React from "react"
import Post from "./Post/Post"
import {ProfilePageType} from "../../../../redux/profileReduser"
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength, minMaxLength, required} from "../../../ValidateForm"

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: (value: { postText: string }) => void
}

export function Posts(props: PostsPropsType) {

    const onSubmit = (values: FormValuesType): void => {
        props.addPost({postText: values.postText})
    }
    return (
        <div className={s.posts}>
            <div className={s.textAreaBlock}>
                <AddPostForm onSubmit={onSubmit}  />
            </div>
            {
                props.profilePage.posts.map(p => <Post content={p.content} likesCount={p.likesCount} key={p.id}/>)
            }
        </div>
    )
}

export type FormValuesType = {
    postText: string
}
type LoginFormPropsType = {
    onSubmit: (values: FormValuesType) => void
}
export const AddPostForm = (props: any) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className={s.postTextarea}>
                    <div>
                        <Field name="postText" validate={composeValidators(required, maxLength(300))}>
                            {
                                ({input, meta}) => (
                                    <div>
                                        <textarea {...input}  placeholder="enter your post text"
                                               className={s.textarea_post}/>
                                        {meta.error && meta.touched && <div className={s.error}>{meta.error}</div>}
                                    </div>
                                )}
                        </Field>
                    </div>
                        <button type="submit" className='postBtn'>LogIn</button>
                </form>
            )}
        </Form>
    )
}