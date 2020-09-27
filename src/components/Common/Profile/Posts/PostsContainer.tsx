import {addPostAC, changeNewPostTextAC} from "../../../../redux/profileReduser";
import Posts from "./Posts";
import {connect} from "react-redux";


// function PostsContainer(props: PostsPropsType) {
//     debugger
//     let addPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//     let onChangeNewPostText = (value: string) => {
//         props.store.dispatch(changeNewPostTextAC(value))
//     }
//
//     return <Posts addPost={addPost} onChangeNewPostText={onChangeNewPostText}
//                   profilePage={props.store.getState().profilePage}/>
// }

let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangeNewPostText: (value: string) => {
            dispatch(changeNewPostTextAC(value))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
