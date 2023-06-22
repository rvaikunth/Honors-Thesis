import React, { useState } from "react";
import axios from 'axios';
import PostCreate from "./PostCreate";

const CreatePost = () => {
    const [postValues] = useState({title: "", content: "", photo: "", tag: ""});

    const onSubmit = postObject => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedToday = mm + '/' + dd + '/' + yyyy;
        postObject['date'] = formattedToday;
        postObject['photo'] = postObject['photo'].replace('C:\\fakepath\\', "")
        console.log(postObject)
        // postObject['photo'] = URL.createObjectURL(postValues.photo);
        axios.post('http://localhost:4000/posts', postObject)
        .then(res => {
            if (res.status === 201) {
                alert('Post successfully created')
            } else {
                Promise.reject()
            }
        }).catch(err => alert('Something went wrong'));
    };

    return (
        <PostCreate initialValues={postValues} onSubmit={onSubmit} enableReinitialize>
            Create Post
        </PostCreate>
    );
};

export default CreatePost;