import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, getCategories } from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import styles from "./style.component/CreateProduct.module.css";
import { SIZE_GUIDES } from "../constants/sizeGuides";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    stock: "",
    sizes: "",
    colors: "",
    sizeGuideType: "",
  });
  const [image, setImage] = useState(null);
  const [detailImages, setDetailImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Không thể tải danh sách danh mục");
      }
    };

    fetchCategories();
  }, []);

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDetailImagesChange = (e) => {
    setDetailImages(Array.from(e.target.files));
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    if (image) formData.append("image", image);
    detailImages.forEach((img) => formData.append(`detailImages`, img));

    try {
      await createProduct(formData);
      navigate("/admin/products");
    } catch (error) {
      setError(error.response?.data?.message || "Có lỗi xảy ra khi tạo sản phẩm");
    }
  };

  const renderCategories = (categories, level = 0) => {
    return categories.flatMap((category) => [
      <option key={category._id} value={category._id} style={{ paddingLeft: `${level * 10}px` }}>
        {"-".repeat(level)} {category.name}
      </option>,
      ...(category.children ? renderCategories(category.children, level + 1) : []),
    ]);
  };

  if (!user || user.role !== "admin") {
    return <div>Bạn không có quyền truy cập trang này</div>;
  }

  return (
    <div className={styles.createProduct}>
      <h2>Tạo sản phẩm mới</h2>
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleProductSubmit} className={styles.formContainer}>
        {/* Thông tin chung */}
        <div className={styles.formGroup}>
          <label>Tên sản phẩm:</label>
          <input type="text" name="name" value={product.name} onChange={handleProductChange} required />
        </div>

        <div className={styles.formGroup}>
          <label>Mô tả:</label>
          <textarea name="description" value={product.description} onChange={handleProductChange} required />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Giá (VNĐ):</label>
            <input type="number" name="price" value={product.price} onChange={handleProductChange} required min="0" step="0.01" />
          </div>

          <div className={styles.formGroup}>
            <label>Số lượng trong kho:</label>
            <input type="number" name="stock" value={product.stock} onChange={handleProductChange} required min="0" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Danh mục:</label>
          <select name="categoryId" value={product.categoryId} onChange={handleProductChange} required>
            <option value="">Chọn danh mục</option>
            {renderCategories(categories)}
          </select>
        </div>

        {/* Tùy chọn sản phẩm */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Kích thước:</label>
            <input type="text" name="sizes" value={product.sizes} onChange={handleProductChange} required placeholder="S, M, L..." />
          </div>

          <div className={styles.formGroup}>
            <label>Màu sắc:</label>
            <input type="text" name="colors" value={product.colors} onChange={handleProductChange} required placeholder="Đỏ, Xanh..." />
          </div>
        </div>

        {/* Hướng dẫn size */}
        <div className={styles.formGroup}>
          <label>Hướng dẫn kích cỡ:</label>
          <select name="sizeGuideType" value={product.sizeGuideType} onChange={handleProductChange} required>
            <option value="">Chọn</option>
            {Object.entries(SIZE_GUIDES).map(([key, guide]) => (
              <option key={key} value={key}>
                {guide.name}
              </option>
            ))}
          </select>
        </div>

        {product.sizeGuideType && (
          <div className={styles.sizeGuidePreview}>
            <img src={SIZE_GUIDES[product.sizeGuideType].image} alt={SIZE_GUIDES[product.sizeGuideType].name} />
          </div>
        )}

        {/* Hình ảnh */}
        <div className={styles.formGroup}>
          <label>Ảnh đại diện:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
          {image && <img src={URL.createObjectURL(image)} alt="Preview" className={styles.previewImage} />}
        </div>

        <div className={styles.formGroup}>
          <label>Ảnh chi tiết:</label>
          <input type="file" multiple onChange={handleDetailImagesChange} accept="image/*" />
          <div className={styles.detailImagesPreview}>
            {detailImages.map((img, index) => (
              <img key={index} src={URL.createObjectURL(img)} alt="Detail Preview" />
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Tạo sản phẩm</button>
      </form>
    </div>
  );
};

export default CreateProduct;
