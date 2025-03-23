import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";
import styles from "./style.component/ProductEditForm.css"; // Import CSS

const ProductEditForm = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:7070/api/products/${productId}`);
      const product = response.data;
      Object.keys(product).forEach((key) => setValue(key, product[key]));
      setPreviewImage(`http://localhost:7070/uploads/${product.image}`);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:7070/api/products/${productId}`, data);
      navigate("/admin/products");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Tên sản phẩm */}
        <div>
          <label className="block text-gray-700 font-semibold">Tên sản phẩm</label>
          <input type="text" {...register("name", { required: "Tên sản phẩm không được để trống" })} className={styles.input} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Giá */}
        <div>
          <label className="block text-gray-700 font-semibold">Giá</label>
          <input type="number" {...register("price", { required: "Giá không được để trống" })} className={styles.input} />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Hình ảnh */}
        <div>
          <label className="block text-gray-700 font-semibold">Hình ảnh</label>
          <input type="text" {...register("image")} onChange={(e) => setPreviewImage(e.target.value)} className={styles.input} />
          {previewImage && <img src={previewImage} alt="Preview" className="mt-2 w-40 h-auto border rounded-lg" />}
        </div>

        {/* Nút hành động */}
        <div className="flex justify-between">
          <button type="submit" className={`${styles.button} ${styles.saveButton}`}>
            <FaSave className="mr-2" /> Lưu
          </button>
          <button type="button" onClick={() => navigate("/admin/products")} className={`${styles.button} ${styles.cancelButton}`}>
            <FaTimes className="mr-2" /> Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
