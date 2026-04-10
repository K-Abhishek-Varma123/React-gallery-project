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
        .catch(()=>{
            return alert("Fetching failed");
        })
    },[])
    const [info,setInfo] = useState(null);
    function showMessage(item)
    {
        setInfo(item);
    }

    return(
        <div className="gallery-outer" >
            <div className="gallery-container" >
                {/* complete gallery will be locate here */}
                {store.map((item,index)=>(
                    <div key={index} className="images-container">
                        <img src={item.image} className="images" onClick={()=>showMessage(item)} />
                        {/* <img src={item.image} className="images" onClick={()=>setInfo(item)} />  also valid but to show we can send the parameters in react by using => fun*/}
                        {/* Any popups for displaying some thing */}
                        {info===item&&(
                            <div className="message-popup" onClick={()=>setInfo(null)}>
                                <p className="popup-message" onClick={(e)=>e.stopPropagation()}>{info.matter}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Gallery