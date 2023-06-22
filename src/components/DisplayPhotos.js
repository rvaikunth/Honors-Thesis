import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayPhotos = (tag) => {
    const [tags, setTags] = useState([]);
    const [photos, setPhotos] = useState([]);
    console.log("tag")
    console.log(tag)

    useEffect( () => {
        async function fetchData() {
            let response = await axios.get('http://localhost:4000/getTags');
            setTags(response.data);
            let response2 = await axios.get('http://localhost:4003/getPhotos');
            // console.log('response2')
            // console.log(response2.data)
            setPhotos(response2.data); 
        }
        fetchData();
        }, []);
    
    const PhotoList = () => {
        const photoArr = tags[tag];
        console.log("tags")
        console.log(tags)

        console.log('here3')
        console.log(photoArr)

        return photoArr.forEach(photo => {
            return (
                <div
                    className="card headline"
                    style={{ width: '50%', marginBottom: '20px' }}
                    key={photo}
                >
                     <div className="card-body headline">
                        <center><img width={100} height={100} src={photos[photo]} alt=''/></center>
                    </div>
                </div>
                
            );
        });
    }

    return (
        <div className="d-flex flex-column flex-wrap justify-content-between">
            {<PhotoList/>}
        </div>
    )
}

export default DisplayPhotos;