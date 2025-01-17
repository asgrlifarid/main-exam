import React, { useEffect, useState } from "react";
import { useGetProdQuery } from "../../../redux/services/productapi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss"
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const ClientProducts = () => {
  const { data, isLoading, isError, refetch } = useGetProdQuery();
  console.log(data);

  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const wishlist = useSelector((state) => state.wishlist.items);
  console.log(wishlist);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.data) {
      setFiltered(data.data);
    }
  }, [data]);

  const handleChange = (e) => {
    const sortOrder = e.target.value;
    let sortedProds = [...filtered];

    if (sortOrder === "asc") {
      sortedProds.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      sortedProds.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "default") {
      setFiltered(data.data);
      return;
    }

    setFiltered(sortedProds);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = filtered.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
     <div className={styles.ascDescSearch}>
     <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      
      />

      <select onChange={handleChange}>
        <option value="default">DEFAULT</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
     </div>
     <div className={styles.allDiv}>
     {isLoading && <h1>Loading ...</h1>}
      {isError && <h1>Some Error Taken ...</h1>}
      {filteredProducts.map((p) => (
          <div key={p._id} className={styles.card}>
            <div>
              <button
                onClick={() => {
                  dispatch(toggleFavorites(p));
                }}
              >
                {wishlist?.find((q) => q._id === p._id) ? (
                  <FaHeart />
                ) : (
                  <CiHeart />
                )}
              </button>
              <Link to={`/products/${p._id}`}>
              <IoMdInformationCircleOutline />
              </Link>
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
    </div>
  );
};

export default ClientProducts;
