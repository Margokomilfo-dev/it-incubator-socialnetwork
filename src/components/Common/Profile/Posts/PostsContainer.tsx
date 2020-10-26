import {addPost} from "../../../../redux/profileReduser"
import {Posts} from "./Posts"
import {connect} from "react-redux"


let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}

const PostsContainer = connect(mapStateToProps, {addPost})(Posts)

export default PostsContainer
