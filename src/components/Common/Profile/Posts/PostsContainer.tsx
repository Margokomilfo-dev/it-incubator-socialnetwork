import {addPostAC, changeNewPostTextAC} from "../../../../redux/profileReduser";
import Posts from "./Posts";
import {connect} from "react-redux";


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
