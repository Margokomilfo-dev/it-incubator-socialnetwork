import React from "react";

type MessagePropsType = {
    message: string
}


function Message(props: MessagePropsType) {
    return (
        <div>
            {props.message}
        </div>
    )
}


export default Message