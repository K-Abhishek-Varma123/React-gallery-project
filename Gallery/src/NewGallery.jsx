import { useState } from "react";
import './Cssfiles/NewGallery.css';

function NewGallery()
{
    const [picture,setPicture] = useState([]);
    const [popup,setPopup] = useState(null);
    return(
        <div className="newGallery-outer" >
            <div className="operation-container">
                <button className="newGallery" onClick={()=>setPopup("add")}>Add</button>
                <button className="newGallery" onClick={()=>setPopup("delete")}>Delete</button>
            </div>
            {popup==="add"&&(
                <div className="add-popup-outer" onClick={()=>setPopup(null)}>
                    <div className="add-popup-inner" onClick={(e)=>e.stopPropagation()}>
                        <h1>Details of the Image</h1>
                        <input type="url" placeholder="Image URL" className="image-url" />
                        <textarea placeholder="Type Description" className="image-description" rows="4"></textarea>
                        {/* write logic for storing of this two url and description store in one thing and display it one here
                        find solution for how to store permanently */}
                    </div>
                </div>
            )};
            {popup==="delete"&&(
                // <div className="delete-popup">delete the item provide the id(number 1,2,3...) of the picture write onclick to iterate and delete it.</div>
                <div onClick={()=>setPopup(null)} className="delete-popup">
                    <div onClick={(e)=>e.stopPropagation()} className="delete-popup-inner">
                        <h1>provide Id</h1>
                        <input  />
                    </div>
                </div>
            )}
            <div>
                {/* all the pictures that you are created. */}
            </div>
        </div>
    );
}

export default NewGallery