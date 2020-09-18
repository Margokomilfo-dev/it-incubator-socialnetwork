import s from "./Post.module.css";
import React from "react";
import mainPhoto from "../../../../../img/mainPhoto.jpg";

type PostType = {
    likesCount: number
    content: string | number
}
function Post(props: PostType) {
    return (
        <div className={s.added_posts}>
            <div className={s.post_user_photo}>
                <img className={s.post_user_photo_img} src={mainPhoto} alt="post_user_photo"/>
            </div>
            <div className={s.post_content}>
                <div>{props.content}</div>
                <div><span>likes: {props.likesCount}</span></div>
            </div>
        </div>
    )
}

export default Post
