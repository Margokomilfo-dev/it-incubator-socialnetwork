import {addPostAC, ProfilePageType, changeNewPostTextAC} from "../../../../redux/profileReduser";
import Posts from "./Posts";
import React from "react";

type PostsPropsType = {
    store: any
}


function PostsContainer(props: PostsPropsType) {
debugger
    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onChangeNewPostText = (value: string) => {
        props.store.dispatch(changeNewPostTextAC(value))
    }


    return <Posts addPost={addPost} onChangeNewPostText={onChangeNewPostText} profilePage={props.store.getState().profilePage}/>
}

export default PostsContainer
