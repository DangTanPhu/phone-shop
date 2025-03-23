import React from 'react';
import styles from './style.component/ShippingPolicy.module.css';

const ShippingPolicy = () => {
  return (
    <div className={styles.shippingPolicy}>
      <h1>Chính Sách Giao Hàng</h1>

      <section>
        <h2>1. Phạm Vi Giao Hàng</h2>
        <p>
          Chúng tôi cung cấp dịch vụ giao hàng trên toàn quốc, bao gồm các thành phố lớn và các khu vực nông thôn. Tuy nhiên, một số địa điểm xa hoặc khó tiếp cận có thể phải trả phí vận chuyển cao hơn hoặc có thể bị giới hạn về thời gian giao hàng.
        </p>
      </section>

      <section>
        <h2>2. Thời Gian Giao Hàng</h2>
        <p>
          Thời gian giao hàng phụ thuộc vào vị trí của bạn và phương thức giao hàng. Thông thường, đơn hàng sẽ được giao trong vòng 3-7 ngày làm việc đối với các khu vực thành phố và 7-10 ngày đối với các khu vực nông thôn.
        </p>
      </section>

      <section>
        <h2>3. Phí Vận Chuyển</h2>
        <p>
          Phí vận chuyển sẽ được tính tự động khi bạn thanh toán, dựa trên địa chỉ giao hàng và trọng lượng của sản phẩm. Cửa hàng thường xuyên có các chương trình miễn phí vận chuyển hoặc giảm giá cho các đơn hàng đạt mức tối thiểu.
        </p>
      </section>

      <section>
        <h2>4. Phương Thức Giao Hàng</h2>
        <p>
          Chúng tôi sử dụng các đối tác vận chuyển uy tín như Giao Hàng Nhanh, Viettel Post, và các dịch vụ giao hàng khác để đảm bảo sản phẩm được giao nhanh chóng và an toàn. Bạn sẽ nhận được mã theo dõi để tra cứu tình trạng đơn hàng.
        </p>
      </section>

      <section>
        <h2>5. Đơn Hàng Quốc Tế</h2>
        <p>
          Hiện tại, cửa hàng chỉ hỗ trợ giao hàng trong lãnh thổ Việt Nam. Các đơn hàng quốc tế sẽ không được xử lý tại thời điểm này.
        </p>
      </section>

      <section>
        <h2>6. Xác Nhận Đơn Hàng</h2>
        <p>
          Sau khi bạn đặt hàng, chúng tôi sẽ gửi email xác nhận đơn hàng cùng với các chi tiết cần thiết như số đơn hàng, phương thức thanh toán, và dự kiến thời gian giao hàng. Nếu có bất kỳ sự thay đổi nào về đơn hàng, chúng tôi sẽ liên hệ lại với bạn.
        </p>
      </section>

      <section>
        <h2>7. Chính Sách Giao Hàng Lỗi</h2>
        <p>
          Nếu sản phẩm bị lỗi do vận chuyển (hư hỏng, thiếu sản phẩm, sai sản phẩm), khách hàng có quyền yêu cầu đổi sản phẩm hoặc hoàn tiền. Bạn cần thông báo cho chúng tôi trong vòng 24 giờ kể từ khi nhận hàng.
        </p>
      </section>

      <section>
        <h2>8. Liên Hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về chính sách giao hàng hoặc gặp vấn đề khi nhận hàng, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại hỗ trợ khách hàng.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
