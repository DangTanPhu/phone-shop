import React from 'react';
import styles from './style.component/ReturnPolicy.module.css';

const ReturnPolicy = () => {
  return (
    <div className={styles.returnPolicy}>
      <h1>Chính Sách Đổi Trả</h1>

      <section>
        <h2>1. Điều Kiện Đổi Trả</h2>
        <p>
          Khách hàng có quyền đổi hoặc trả sản phẩm trong vòng 14 ngày kể từ ngày nhận hàng nếu sản phẩm gặp phải các lỗi từ nhà sản xuất, không đúng sản phẩm đã đặt hoặc bị hư hỏng trong quá trình vận chuyển.
        </p>
      </section>

      <section>
        <h2>2. Sản Phẩm Được Đổi Trả</h2>
        <p>
          Các sản phẩm được đổi trả phải còn nguyên vẹn, chưa qua sử dụng, đầy đủ tem mác và bao bì. Sản phẩm không được chấp nhận đổi trả nếu đã bị sử dụng hoặc hư hỏng do lỗi của khách hàng.
        </p>
      </section>

      <section>
        <h2>3. Phương Thức Đổi Trả</h2>
        <p>
          Để đổi hoặc trả sản phẩm, khách hàng cần liên hệ với bộ phận hỗ trợ khách hàng qua email hoặc số điện thoại. Chúng tôi sẽ hướng dẫn các bước cần thiết để bạn thực hiện việc đổi trả sản phẩm.
        </p>
      </section>

      <section>
        <h2>4. Chi Phí Đổi Trả</h2>
        <p>
          Các chi phí vận chuyển trong trường hợp đổi trả sản phẩm sẽ được cửa hàng chịu nếu lý do đổi trả là do lỗi từ cửa hàng hoặc sản phẩm bị hư hỏng trong quá trình vận chuyển. Nếu khách hàng yêu cầu đổi trả vì lý do cá nhân, khách hàng sẽ phải tự chi trả chi phí vận chuyển.
        </p>
      </section>

      <section>
        <h2>5. Quy Trình Đổi Trả</h2>
        <p>
          Khi yêu cầu đổi trả được xác nhận, chúng tôi sẽ gửi cho bạn hướng dẫn cụ thể về việc gửi trả sản phẩm và thời gian hoàn tiền (nếu có). Thời gian hoàn tất quá trình đổi trả có thể mất từ 5-7 ngày làm việc.
        </p>
      </section>

      <section>
        <h2>6. Các Trường Hợp Không Được Đổi Trả</h2>
        <p>
          Các sản phẩm đã qua sử dụng, bị hư hỏng do lỗi của khách hàng, hoặc các sản phẩm không còn nguyên bao bì, tem mác sẽ không được chấp nhận đổi trả. Các sản phẩm giảm giá hoặc khuyến mãi cũng không áp dụng chính sách đổi trả.
        </p>
      </section>

      <section>
        <h2>7. Hoàn Tiền</h2>
        <p>
          Trong trường hợp khách hàng yêu cầu hoàn tiền thay vì đổi sản phẩm, chúng tôi sẽ tiến hành hoàn trả tiền vào tài khoản ngân hàng của khách hàng trong vòng 7 ngày làm việc kể từ khi nhận sản phẩm trả lại.
        </p>
      </section>

      <section>
        <h2>8. Liên Hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về chính sách đổi trả hoặc gặp khó khăn trong quá trình đổi trả, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại hỗ trợ khách hàng.
        </p>
      </section>
    </div>
  );
};

export default ReturnPolicy;
