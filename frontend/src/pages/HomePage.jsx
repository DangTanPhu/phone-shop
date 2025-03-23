import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { getProducts } from '../services/api';

const imageUrl = (img) => {

  if (!img) return '/images/placeholder-image.jpg';
  if (img.startsWith('http')) return img;
  return `${process.env.REACT_APP_API_URL}/uploads/${img}`;
};
const newsItems = [
  {
    title: "Xiaomi HyperOS 2",
    description: "Trải nghiệm người dùng tối ưu kết nối thông minh liền mạch , nhấn mạnh cải tiến vượt trội",
    image: "https://i02.appmifile.com/793_operator_vn/19/11/2024/616aafe8521b56e5c14689bf6d190031.jpg?thumb=1&w=660&f=webp&q=85",
    link: "https://www.mi.com/vn/hyperos/"
  },
  {
    title: "Thiết kế huyền thoại , hình ảnh kiệt tác",
    description: "Ống kính quang học Leica Summilux tái tạo hình ảnh siêu thực đậm chất nghệ thuật trên Xiaomi 14 Ultra",
    image: "https://i02.appmifile.com/350_operator_vn/07/06/2024/8ac1a6f3509474d2ee6377348d9c2cd4.jpg?thumb=1&w=660&f=webp&q=85",
    link:"https://i02.appmifile.com/764_operatorx_operatorx_xm/07/06/2024/0fa9dff302dadee645bb0542526ab521.mp4"
  },
  {
    title: "Chụp ảnh thiêú sáng cùng với Xiaomi 14T Pro",
    description: "Với ông kính sắc nối , có thể chụp ảnh bất kỳ ở đâu với ánh sáng như nào",
    image: "https://i02.appmifile.com/693_operator_vn/15/11/2024/2feec50cde971da7acc38475bcc9f650.jpg?thumb=1&w=660&f=webp&q=85",
    link:"https://www.mi.com/vn/discover/article?id=3870"
  },
];

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await getProducts(); 
      if (response && Array.isArray(response)) {
        const sortedProducts = response.sort((a, b) => b.sales - a.sales);
        setFeaturedProducts(sortedProducts.slice(0, 4));
      } else {
        console.error('Unexpected response format:', response);
        setFeaturedProducts([]);
      }
    } catch (error) {
      console.error('Error fetching featured products:', error);
      setFeaturedProducts([]);
    }
  };

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="https://cdn.alsgp0.fds.api.mi-img.com/e-commerce/N8/pc-new.mp4?GalaxyAccessKeyId=5151729087601&Expires=9223372036854775807&Signature=09awt1AAs3tLYI%2BjuyT2n8i1n%2BM%3D" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}>
          <h1 className={styles.glitchSlogan}>
            <span className={styles.brand}>PomDu</span>
            <div className={styles.sloganContainer}>
              <span className={styles.sloganText}>Ôm Trọn Bản Sắc</span>
              <span className={styles.sloganText}>Phong Cách Hiện Đại</span>
            </div>
          </h1>
          <Link to="/products" className={styles.ctaButton}>Mua Ngay</Link>
        </div>
      </section>

      {/* <section className={styles.categoriesGrid}>
        <div className={`${styles.categoryItem} ${styles.large}`}>
          <img src="/assets/1_MENS-BIGWIG.jpg" alt="Bộ Sưu Tập Nam" />
          <div className={styles.categoryOverlay}>
            <h2>Bộ Sưu Tập Nam</h2>
            <Link to="/category/men" className={styles.categoryLink}>Khám Phá</Link>
          </div>
        </div>
        <div className={`${styles.categoryItem} ${styles.medium}`}>
          <img src="/assets/women.jpg" alt="Bộ Sưu Tập Nữ" />
          <div className={styles.categoryOverlay}>
            <h2>Bộ Sưu Tập Nữ</h2>
            <Link to="/category/women" className={styles.categoryLink}>Khám Phá</Link>
          </div>
        </div>
        <div className={`${styles.categoryItem} ${styles.small}`}>
          <img src="/assets/3_PRINTABLES.jpg" alt="Áo Thun Họa Tiết" />
          <div className={styles.categoryOverlay}>
            <h2>Áo Thun Họa Tiết</h2>
            <Link to="/category/graphic-tees" className={styles.categoryLink}>Khám Phá</Link>
          </div>
        </div>
        <div className={`${styles.categoryItem} ${styles.small}`}>
          <img src="/assets/4_SHEPARD_COLLECTION.jpg" alt="Bộ Sưu Tập Shepard Fairey" />
          <div className={styles.categoryOverlay}>
            <h2>Bộ Sưu Tập Shepard Fairey</h2>
            <Link to="/category/shepard-fairey" className={styles.categoryLink}>Khám Phá</Link>
          </div>
        </div>
      </section> */}
       <section className={styles.valueAndNewsSection}>
      <div className={styles.featuredValues}>
        <h2>Giá Trị Nổi Bật</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueItem}>
            <img src="/assets/icons8-quality-50.png" alt="" />
            <p>Đảm bảo chất lượng</p>
          </div>
          <div className={styles.valueItem}>
            <img src="/assets/icons8-check-mark-48.png" alt="" />
            <p>Hàng chính hãng</p>
          </div>
          <div className={styles.valueItem}>
            <img src="/assets/icons8-change-48.png" alt="" />
            <p>Thua mua đổi trọn đời</p>
          </div>
          <div className={styles.valueItem}>
            <img src="/assets/icons8-truck-48.png" alt="" />
            <p>Giao hàng tận nơi</p>
          </div>
        </div>
      </div>
     </section>


     <section className={styles.featuredProducts}>
      <div className={styles.headerSection}>
        <h2>SẢN PHẨM BÁN CHẠY</h2>
        <Link to="/products" className={styles.browseAll}>Browse All</Link>
      </div>
      <div className={styles.productGrid}>
        {featuredProducts.map((product) => (
          <div key={product._id} className={styles.productCard}>
            <div className={styles.discountBadge}>{product.discount}%</div>
            <div className={styles.imageContainer}>
              <img 
                src={`http://localhost:7070/uploads/${product.image}`} 
                alt={product.name} 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/images/placeholder-image.jpg';
                }}
              />
            </div>
            <p className={styles.category}>{product.category.toUpperCase()}</p>
            <h3>{product.name}</h3>
            <p className={styles.originalPrice}>{product.originalPrice.toLocaleString('vi-VN')} VND</p>
            <p className={styles.discountedPrice}>{product.price.toLocaleString('vi-VN')} VND</p>
            <Link to={`/product/${product.slug}`} className={styles.shopButton}>MUA NGAY</Link>
          </div>
        ))}
      </div>
    </section>

      <section className={styles.aboutUs}>
        <h2>Một câu chuyện hài hước</h2>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <p>PomDu khởi nguồn là một thương hiệu bán điện thoại nổi tiếng, được thành lập với sứ mệnh mang đến cho người tiêu dùng những sản phẩm công nghệ chất lượng cao và dịch vụ chăm sóc khách hàng tận tâm. 
              Ban đầu, PomDu tập trung vào phân phối các dòng điện thoại thông minh của các hãng uy tín, nhằm đáp ứng nhu cầu ngày càng tăng về thiết bị di động trong đời sống hiện đại. Với mục tiêu xây dựng niềm tin và sự hài lòng của khách hàng,
              PomDu không chỉ chú trọng đến việc lựa chọn sản phẩm uy tín, mà còn phát triển dịch vụ hậu mãi vượt trội, bao gồm bảo hành, sửa chữa và hỗ trợ kỹ thuật tận tình. Đến nay, 
              PomDu đã mở rộng thành chuỗi cửa hàng bán lẻ và kênh mua sắm trực tuyến, giúp khách hàng dễ dàng tiếp cận các sản phẩm mới nhất và chất lượng hàng đầu trên thị trường.</p>
            <Link to="/about" className={styles.learnMoreButton}>Tìm hiểu thêm</Link>
          </div>
          <div className={styles.storyImage}>
            <img src="https://pm1.narvii.com/6389/9179ede0bbbf6bd449453ffe8dc2a763e7ac2ff5_hq.jpg"  />
          </div>
        </div>
      </section>
      <section className={styles.valueAndNewsSection}>
    

    {/* Tin tức mới nhất */}
    <div className={styles.latestNews}>
  <h2>Latest News</h2>
  <div className={styles.newsGrid}>
    {newsItems.map((item, index) => (
      <div key={index} className={styles.newsItem}>
        <img src={item.image} alt={item.title} />
        <h3>
          <a href={item.link} className={styles.newsLink}>
            {item.title}
          </a>
        </h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</div>
  </section>

     
    </div>
  );
};

export default HomePage;