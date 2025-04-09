import React from 'react'
import Book1 from '../images/book1.png';
import { FaCartPlus } from "react-icons/fa";// Add to cart Icon
import { BsCartDashFill } from "react-icons/bs"; // Remove from cart icon


export default function Card() {
  return (
    <div className='container text-center'>
        <div className = 'card card-dark me-auto shadow-lg'
                style = {{ width : '300px',
                            cursor : "pointer",}}
                >
            <div className = ' card-header fs-xl '>
                {/* <AiFillSmile /> */}
                <small> DogyDog </small>
                
            </div>

            <img src = { Book1 } style = {{ height : '300px' }} onDoubleClick = '' />

            <div className = 'card-footer fs-xl d-flex' style = {{ display : 'flex',
                justifyContent : 'space-between' }}>
            
                <span> Add <FaCartPlus style = {{height: '50px',width:'50px' }} /> </span> 
                {""}
                {/* <FaCartPlus style = {{height: '60px', }} /> {""} */}
                {/* { like ? (<AiFillHeart className = 'text-danger' onClick={ toggleLike } />) : (<AiOutlineHeart onClick={ toggleLike }/>)} */}

                <span> Remove <BsCartDashFill style = {{height: '50px',width:'50px' }} /> </span> 


            </div>

        </div>
    </div>
  )
}



// import { FaCartPlus } from "react-icons/fa6";

// <FaCartPlus />