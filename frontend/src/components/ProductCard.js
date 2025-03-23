import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.component/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const imageUrl = (img) => {
    // Log the result of the image URL function to see what's being generated
    const url = img ? (img.startsWith('https') ? img : `http://localhost:7070/uploads/${img}`) : '/images/placeholder-image.jpg';
    console.log('Generated Image URL:', url);  // Log the final image URL here
    return url;
  };

  // Kiểm tra sản phẩm mới (ví dụ: trong vòng 7 ngày)
  const isNew = () => {
    const productDate = new Date(product.createdAt);
    const now = new Date();
    const diffTime = Math.abs(now - productDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  // Kiểm tra sản phẩm giảm giá
  const isOnSale = product.salePrice && product.salePrice < product.price;

  return (
    <article className={styles.productCard}>
      <Link to={`/product/${product.slug}`} className={styles.productLink}>
        <div className={styles.imageWrapper}>
          {isNew() && (
            <span className={`${styles.badge} ${styles.newBadge}`}>New</span>
          )}
          {isOnSale && (
            <span className={`${styles.badge} ${styles.saleBadge}`}>
              {Math.round((1 - product.salePrice / product.price) * 100)}% Off
            </span>
          )}
          <img 
            src={imageUrl(product.image)}  // Use the imageUrl function to set the image source
            alt={product.name} 
            className={styles.productImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/placeholder-image.jpg';  // Fallback image in case of error
            }}
          />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productPrice}>
            {product.price.toLocaleString('vi-VN')} đ
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
