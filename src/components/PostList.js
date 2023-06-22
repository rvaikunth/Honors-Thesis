import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect( () => {
        async function fetchData() {
            let response = await axios.get('http://localhost:4000/getPosts');
            setPosts(response.data);
            let response2 = await axios.get('http://localhost:4003/getPhotos');
            console.log('response2')
            console.log(response2.data)
            setPhotos(response2.data); 
        }
        fetchData();
        }, []);

    const PostTable = () => {
        return Object.values(posts).map((res, i) => {
            console.log(photos[res.photo]);
            return (
                <div
                    className="card headline"
                    style={{ width: '50%', marginBottom: '20px' }}
                    key={res.id}
                >
                    <div className="card-body headline">
                        <div>
                            <h3 className="headline"
                                style={{
                                    textAlign: "center"
                                }}
                            >
                                {res.title}
                            </h3>
                            <text
                                style={{
                                    textAlign: "right"
                                }}>
                                {res.date}
                            </text>
                        </div>
                        <hr
                            style={{
                            background: "#47B5FF",
                            height: "2px",
                            border: "none",
                            }}
                        />
                        <text>{res.content}</text>
                        <br/>
                        <center><img width={100} height={100} src={photos[res.photo]} alt=''/></center>
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="d-flex flex-column flex-wrap justify-content-between">
            {<PostTable/>}
        </div>
        // <div className="table-wrapper">
        //     <Table striped hover>
        //         <tbody>
        //             <tr>
        //                 <th>Title</th>
        //                 <th>Content</th>
        //                 <th>Photo</th>
        //                 <th>Tag</th>
        //             </tr>
        //         </tbody>
        //         <tbody>{<PostTable/>}</tbody>
        //     </Table>
        // </div>
    );
};

export default PostList;