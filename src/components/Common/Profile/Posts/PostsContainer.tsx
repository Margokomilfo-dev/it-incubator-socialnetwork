import {addPost} from "../../../../redux/reducers/profileReduser"
import {Posts} from "./Posts"
import {connect} from "react-redux"
import {getProfilePageReducer} from "../../../../redux/selectors";


let mapStateToProps = (state: any) => {
    return {
        profilePage: getProfilePageReducer(state)
    }
}

const PostsContainer = connect(mapStateToProps, {addPost})(Posts)

export default PostsContainer
