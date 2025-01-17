import React from "react";
import { useFormik } from "formik";

import Swal from "sweetalert2";
import styles from "./index.module.scss";
import { usePostNewProdMutation } from "../../../redux/services/productapi";
import { AddProductSchema } from "../../../validations/validationFormik";

export const AddProduct = () => {
  const [postNewProduct] = usePostNewProdMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      imageUrl: "",
      price: "",
    },
    validationSchema: AddProductSchema,
    onSubmit: async (values) => {
      try {
        await postNewProduct(values);
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="title"> Title </label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && formik.touched.title && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.title}
        </p>
      )}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && formik.touched.price && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.price}
        </p>
      )}
      <label htmlFor="imageUrl">image Url</label>
      <input
        id="imageUrl"
        name="imageUrl"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.imageUrl}
      />
      {formik.errors.imageUrl && formik.touched.imageUrl && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.imageUrl}
        </p>
      )}
       <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik.errors.description && formik.touched.description && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.description}
        </p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
