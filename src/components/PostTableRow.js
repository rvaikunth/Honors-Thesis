import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PostTableRow = (props) => {
    const { _id, title, content, photo, tag } = props.obj;

    return (
        <tr>
            <td>{title}</td>
            <td>{content}</td>
            <td>{photo}</td>
            <td>{tag}</td>
        </tr>
    );
};

export default PostTableRow;