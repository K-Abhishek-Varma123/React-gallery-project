import { useEffect, useState } from "react";
import './Cssfiles/Gallery.css';

function Gallery()
{
    const [store,setStore] = useState([]);
    useEffect(()=>{
        fetch("https://api.unsplash.com/photos/random?query=nature&count=10&client_id=LVcYAVRtG7ZoIQIa1VgRdARC7p6trGSLS6Vp34042oM")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const storage = data.map(items=>({
                image:items.urls.regular,
                matter:items.alt_description||"No Description"
            }));
            console.log(storage);
            setStore(storage);
        })

    },[])
    return(
        <div className="gallery-outer" >
            <div className="gallery-container" >
                {/* complete gallery will be locate here */}
                {store.map((item,index)=>(
                    <div key={index} className="images-container">
                        <img src={item.image} className="images"/>
                        <p className="images-description">{item.matter}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Gallery