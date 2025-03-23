import React from 'react';
import styles from './style.component/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <h1>Chính Sách Bảo Mật</h1>
      
      <section>
        <h2>1. Thu Thập Thông Tin Cá Nhân</h2>
        <p>
          Cửa hàng sẽ thu thập thông tin cá nhân như tên, địa chỉ email, số điện thoại, địa chỉ giao hàng, thông tin thanh toán khi khách hàng đăng ký tài khoản, mua hàng hoặc liên hệ.
          Thông tin này thường được sử dụng để xử lý đơn hàng, liên hệ hỗ trợ khách hàng, gửi thông tin khuyến mãi hoặc cập nhật về sản phẩm, và cải thiện chất lượng dịch vụ.
        </p>
      </section>

      <section>
        <h2>2. Sử Dụng Thông Tin Cá Nhân</h2>
        <p>
          Chỉ những nhân viên hoặc bên thứ ba được ủy quyền mới có quyền truy cập thông tin cá nhân của khách hàng.
          Cửa hàng chỉ sử dụng thông tin cá nhân của khách hàng cho các mục đích cụ thể như đã được nêu, không sử dụng cho mục đích khác nếu không có sự đồng ý của khách hàng.
        </p>
      </section>

      <section>
        <h2>3. Bảo Mật Thông Tin Cá Nhân</h2>
        <p>
          Cửa hàng sẽ áp dụng các biện pháp bảo mật kỹ thuật (như mã hóa SSL cho giao dịch trực tuyến) và hành chính để bảo vệ thông tin cá nhân khỏi việc truy cập trái phép, tiết lộ hoặc thay đổi.
          Khách hàng được khuyến khích giữ bảo mật mật khẩu tài khoản và không chia sẻ với người khác.
        </p>
      </section>

      <section>
        <h2>4. Cookie Và Công Nghệ Theo Dõi</h2>
        <p>
          Cửa hàng có thể sử dụng cookie để theo dõi hành vi người dùng trên website, giúp cải thiện trải nghiệm mua sắm và cung cấp các quảng cáo phù hợp.
          Khách hàng có quyền từ chối hoặc xóa cookie trong trình duyệt, tuy nhiên điều này có thể ảnh hưởng đến việc sử dụng một số tính năng trên website.
        </p>
      </section>

      <section>
        <h2>5. Chia Sẻ Thông Tin Cá Nhân</h2>
        <p>
          Thông tin cá nhân có thể được chia sẻ với các đối tác dịch vụ như nhà cung cấp vận chuyển, ngân hàng để xử lý thanh toán, hoặc bên cung cấp dịch vụ tiếp thị.
          Các bên thứ ba này phải cam kết bảo mật và chỉ sử dụng thông tin theo yêu cầu của cửa hàng.
        </p>
      </section>

      <section>
        <h2>6. Quyền Của Khách Hàng</h2>
        <p>
          Khách hàng có quyền truy cập và chỉnh sửa thông tin cá nhân của mình bất cứ lúc nào qua tài khoản cá nhân.
          Có thể yêu cầu cửa hàng xóa hoặc ngừng sử dụng thông tin cá nhân bằng cách liên hệ với bộ phận hỗ trợ khách hàng.
        </p>
      </section>

      <section>
        <h2>7. Lưu Trữ Dữ Liệu</h2>
        <p>
          Thông tin cá nhân của khách hàng sẽ được lưu trữ trong khoảng thời gian cần thiết để phục vụ các mục đích đã nêu trong chính sách bảo mật hoặc theo yêu cầu của pháp luật.
          Sau khi thông tin không còn cần thiết hoặc theo yêu cầu của khách hàng, cửa hàng sẽ tiến hành xóa hoặc vô hiệu hóa dữ liệu đó.
        </p>
      </section>

      <section>
        <h2>8. Thay Đổi Chính Sách Bảo Mật</h2>
        <p>
          Cửa hàng có quyền cập nhật chính sách bảo mật mà không cần thông báo trước. Khách hàng nên thường xuyên kiểm tra lại chính sách này để cập nhật thông tin mới.
          Nếu có thay đổi lớn trong chính sách, cửa hàng sẽ thông báo qua email hoặc hiển thị thông báo trên website.
        </p>
      </section>

      <section>
        <h2>9. Liên Hệ</h2>
        <p>
          Nếu khách hàng có bất kỳ thắc mắc nào về chính sách bảo mật, có thể liên hệ qua email, số điện thoại, hoặc đến trực tiếp cửa hàng.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
