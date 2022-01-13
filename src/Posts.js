import React, { useState } from 'react'


const initialState = useState({
    block: "",
    test: ""
})
const [state, setstate] = useState(initialState)


 const onChangeHandler = () => {
     setstate({
         ...state
     })
 }



const Posts = () => {
    return (
        <div>
            oooooppppp
            <input placeholder='Name' type={"text"} onChangeHandler = {onChangeHandler} ></input>
        </div>
    )
}

export default Posts;
