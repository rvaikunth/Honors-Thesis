import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom"; 

import DisplayPhotos from "./DisplayPhotos";
// import {Routes, Route} from 'react-router-dom';

// const showPhotos = (tag) => {
//     console.log(tag)
//     return (
//         <div>
//             <DisplayPhotos data={tag}/>
//         </div>
//     )
// }

const TagList = () => {
    const [tags, setTags] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect( () => {
        async function fetchData() {
            let response = await axios.get('http://localhost:4000/getTags');
            setTags(response.data);
        }
        fetchData();
        }, []);

    const TagButtons = () => {
        return Object.keys(tags).map((res, i) => {
            // console.log(photos[res.photo]);
            return (
                <div>
                    {/* <Link to="/#/DisplayPhotos" className="btn btn-primary">{res}</Link> */}
                    <button key={res} variant="danger" size="1g" block="block" onClick={() => setOpen(!open)}>
                        {res}
                    </button>
                    
                    {open && <DisplayPhotos data={res}/>}
                    {/* <Routes>
                        <Route path="/DisplayPhotos" element={<DisplayPhotos data={res}/>} />
                    </Routes> */}
                </div>
               
            )
        });
    };

    return (
        <div className="d-flex flex-column flex-wrap justify-content-between">
            {<TagButtons/>}
        </div>
    
    );
};

export default TagList;