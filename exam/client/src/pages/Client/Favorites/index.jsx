import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => {
    return state.wishlist.items;
  });
  console.log(wishlist);

  return (
    
    <>
    <Helmet>
        <title>Wishlist</title>
        <link rel="icon" type="image/svg+xml" link="../../../assets/download.png"/>      </Helmet>
    <div>
      
      <div className={styles.allDiv} >
        {wishlist &&
          wishlist.map((p) => (
            <div  className={styles.card} key={p._id}>
              <div>
                <button
                  onClick={() => {
                    dispatch(toggleFavorites(p));
                  }}
                  
                >
                    
                    <FaHeart />

                </button>
              </div>
              <div>
                <img src={p.imageUrl} alt="" />
              </div>
              <div>
                <p className={styles.title}> {p.title}</p>
              </div>
              <div>
                <h1 className={styles.price}> {p.price}</h1>
              </div>
            </div>
          ))}
      </div>
    </div></>
  );
};

export default Wishlist;
