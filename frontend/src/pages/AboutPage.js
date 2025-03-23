import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import biểu tượng mũi tên trái
import { Link } from "react-router-dom"; // Để tạo đường link về trang chủ
import styles from "./AboutPage.module.css"; // Import CSS

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Thêm biểu tượng mũi tên quay về trang chủ */}
      <Link to="/" className={styles.homeLink}>
        <FaArrowLeft className={styles.homeIcon} />
        Về Trang Chủ
      </Link>

      <section className={styles.heroSection}>
        <h1>Lịch sử PomDu</h1>
        <div className={styles.heroImage}>
          <img
            src="https://mega.com.vn/media/news/2707_anh-nen-lich-su-dep-lam-slide2.jpg"
            alt="PomDu Brand Story"
            width="100%"
          />
        </div>
      </section>

      <section className={styles.brandStory}>
        <div className={styles.storyContent}>
          <h2>Lịch sử hình thành</h2>
          <p>
            PomDu được thành lập từ 5 thành viên đến từ các tỉnh thành khác
            nhau, với sứ mệnh mang đến cho người tiêu dùng những sản phẩm công
            nghệ chất lượng cao và dịch vụ chăm sóc khách hàng tận tâm. PomDu
            tập trung vào phân phối các dòng điện thoại thông minh của các hãng
            uy tín, nhằm đáp ứng nhu cầu ngày càng tăng về thiết bị di động trong
            đời sống hiện đại.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2>Giá trị cốt lõi</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Thiết kế</h3>
            <p>
              Thiết kế điện thoại hiện đại không chỉ tập trung vào hình thức mà
              còn chú trọng đến trải nghiệm người dùng và tính tiện lợi. Các yếu
              tố như chất liệu cao cấp, màn hình không viền, camera đa chức năng,
              và thiết kế thân thiện với người sử dụng đã tạo ra những sản phẩm
              có thể đáp ứng mọi nhu cầu từ công việc, giải trí đến tính thẩm mỹ.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Công nghệ</h3>
            <p>
              Công nghệ tiên tiến như 5G, AI, AR, cùng cải tiến về bảo mật và
              pin, giúp điện thoại trở thành công cụ mạnh mẽ trong cuộc sống.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Nhu cầu</h3>
            <p>
              Người tiêu dùng hiện nay tìm kiếm những chiếc điện thoại đáp ứng
              nhiều nhu cầu như hiệu suất, bảo mật và tính bền vững với môi
              trường.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <h2>Lịch sử hình thành</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3>Tháng 8 - 2024</h3>
            <p>5 thành viên gặp gỡ và làm quen</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>Tháng 9 - 2024</h3>
            <p>Công ty được thành lập</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>Tháng 10 - 2024</h3>
            <p>PomDu Mobile ra mắt chính thức</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>Hiện Tại</h3>
            <p>PomDu trở thành cửa hàng bán điện thoại hàng đầu tại Việt Nam</p>
          </div>
        </div>
      </section>

      <section className={styles.brandStory}>
        <div className={styles.storyContent}>
          <h2>Tầm nhìn của chúng tôi</h2>
          <p>
            Trong thời đại công nghệ, việc có một cửa hàng bán điện thoại online
            không chỉ là xu hướng mà là yêu cầu tất yếu đối với doanh nghiệp.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
