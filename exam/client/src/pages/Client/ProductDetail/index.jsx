import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/services/productapi";
import { Helmet } from 'react-helmet-async';
const Detail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data) {
      setProduct(data.data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div>
      {product && <Helmet>
        <title>{product.title}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>}
      {product ? (
        <div>
          <img src={product.imageUrl} alt="" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Detail;
