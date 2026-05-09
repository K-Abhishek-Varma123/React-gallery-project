import { useEffect, useState } from "react";
import './Cssfiles/NewGallery.css';

function NewGallery()
{
    const [popup,setPopup] = useState(null);
    const [id,setId] = useState("");
    const [url,setUrl] = useState("");
    const [description,setDescription] = useState("");
    const [allData,setallData] = useState([]);
    //if still we use type as number it will take as string by react.
    const [deleteId,setdeleteId] = useState("");

    function handleSave()
    {
        if(id===""||url===""||description==="")
        {
            return alert("Missing one of the details.")
        }
        const data = {
            id,
            url,
            description,
        };
        //get old pictures
        const oldData = JSON.parse(localStorage.getItem("products"))||[];
        //unique id.write

        //now add new data
        const newData = [...oldData,data];

        //save to loal storage
        localStorage.setItem("products",JSON.stringify(newData));
        //handling aftre the save must needed otherwise bug arrives.
        setPopup(null);
        setId("");
        setUrl("");
        setDescription("");
    }
    function handleDelete(itemId)
    {
        if(itemId==="")
        {
            return alert("Enter ID");
        }
        const productData = JSON.parse(localStorage.getItem("products"))||[];
        const updatedData = productData.filter((product)=>{
            if(product.id !== itemId)
            {
                alert("Image Found");
            }
            return product.id !== itemId;
        });
        localStorage.setItem("products",JSON.stringify(updatedData));
        setPopup(null);
        setdeleteId("");
    }
    useEffect(()=>{
        const val = JSON.parse(localStorage.getItem("products"))||[];
        //Try to write automatically rendering images after saving.
        setallData(val);
    },[popup])
    return(
        <div className="newGallery-outer" >
            <div className="operation-container">
                <button className="newGallery" onClick={()=>setPopup("add")}>Add</button>
                <button className="newGallery" onClick={()=>setPopup("delete")}>Delete</button>
            </div>
            {popup==="add"&&(
                //The state is storing when the clicked out side the popup.
                <div className="add-popup-outer" onClick={()=>setPopup(null)}>
                    <div className="add-popup-inner" onClick={(e)=>e.stopPropagation()}>
                        <h1>Details of the Image</h1>

                        <input type="number" placeholder="Image ID" className="image-id" onChange={(e)=>setId(e.target.value)}/>
                        <input type="url" placeholder="Image URL" className="image-url" onChange={(e)=>setUrl(e.target.value)}/>
                        <textarea placeholder="Type Description" className="image-description" rows="4" onChange={(e)=>setDescription(e.target.value)}></textarea>

                        {console.log(id,url,description)}

                        <button onClick={handleSave} className="productButton">Save</button>
                        {/* write logic for storing of this two url and description store in one thing and display it one here
                        find solution for how to store permanently */}
                    </div>
                </div>
            )}
            {popup==="delete"&&(
                // <div className="delete-popup">delete the item provide the id(number 1,2,3...) of the picture write onclick to iterate and delete it.</div>
                <div onClick={()=>setPopup(null)} className="delete-popup">
                    <div onClick={(e)=>e.stopPropagation()} className="delete-popup-inner">
                        <h1>Provide Id</h1>
                        <input type="number" placeholder="TypeID"  className="input-delete" onChange={(e)=>setdeleteId(e.target.value)}/>
                        <button onClick={()=>handleDelete(deleteId)} className="delete">Delete</button>
                    </div>
                </div>
            )}
            <div className="our-images">
                {/* all the pictures that you are created. */}
                {
                    allData.map((iteam,idx)=>(
                        <div className="allData-from-localstorage" key={idx}>
                            <div className="allData-image">
                                <img src={iteam.url} className="images"></img>
                            </div>
                            <div className="id-des">
                                <span className="id">ID: {iteam.id}</span>
                                <p className="description">{iteam.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NewGallery