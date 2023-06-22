import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import axios from "axios";

const PostCreate = (props) => {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required'),
        content: Yup.string(),
        photo: Yup.mixed(),
        tag: Yup.string()
    });
    const [image, setImage] = useState("");

    const convertToBase64 = (e) => {
        // console.log(e.target.files[0].name);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        
        reader.onload = () => {
            // console.log(JSON.stringify(reader.result))
            setImage(reader.result);
            const photoObject = {
                name: e.target.files[0].name,
                photo: reader.result
            }
            // console.log(photoObject)
            axios.post('http://localhost:4003/photos', photoObject)
            .then(res => {
                if (res.status === 201) {
                    alert('Photo successfully created')
                } else {
                    Promise.reject()
                }
            }).catch(err => alert('Something went wrong'));
        };
    }
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema = {validationSchema}>
                <Form>
                    <FormGroup>
                        <Field name="title" type="text" className="form-control"/>
                        <ErrorMessage name="title" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="content" type="text" className="form-control"/>
                        <ErrorMessage name="content" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <FormGroup onChange={convertToBase64}>
                        <Field name="photo" type="file"  className="form-control" />
                        {(image === "")? "": <img width={100} height={100} alt="im" src={image}/>}
                        <ErrorMessage name="photo" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    {/* <input
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    /> */}
                    <FormGroup>
                        <Field name="tag" type="text" className="form-control"/>
                        <ErrorMessage name="tag" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <Button variant="danger" size="1g" block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default PostCreate;