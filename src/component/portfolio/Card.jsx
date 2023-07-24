import React,{ useState } from 'react';
import { FcRight } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

const Card = ({img, category, content , content1, content2, title}) => {
    const[modal,setModal] =useState(false);
    const toggleModal = () =>{
        setModal(!modal);
    }
    
    return (
        <>
        <div className="po-box btn-shadow card">
           <div className="img">
                <img src={img} alt= {img} onClick={toggleModal}/>
           </div>
           <div className="categpry d-flex">
                <span>
                    {category}
                </span>

           </div>
           <div className="title">
                <h2>{title}</h2>
                <a href="#popup" className='arrow' onClick={toggleModal}>
                    <FcRight />
                </a>
           </div>
        </div>
        {modal &&( 
        <div className="modal overlay">
            <div className="modal-content d-flex">
                <div className="modal-img left">
                    <img src= {img}  alt= {img} />
                </div>
                <div className="modal-text right">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <p>{content1}</p>
                    <p>{content2}</p>
                    <button className="btn-shadow close-modal"onClick={toggleModal}>
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default Card;