import { useState } from "react";
import BookingConfirm from "~/components/bookingConfirm/BookingConfirm";
import BookingFill from "~/components/bookingFill/BookingFill";
import "./booking.scss";

export default function Booking() {
  const [part, setPart] = useState({
    number: 1,
    title: "THÔNG TIN KHÁM BỆNH",
  });
  const [booking, setBooking] = useState({ date: new Date() });
  const [payModal, setPayModal] = useState(false);

  const handleNext = () => {
    setPart({ number: 2, title: "XÁC NHẬN THÔNG TIN" });
  };
  const handleBack = () => {
    setPart({
      number: 1,
      title: "THÔNG TIN KHÁM BỆNH",
    });
  };

  return (
    <div className="bookingPage">
      <div className="bookingBanner">
        <h1 className="title">Đăng ký khám</h1>
      </div>
      <div className="bookingBlock">
        <h2 className="bookingStep">{part.title}</h2>
        {part.number === 1 && (
          <BookingFill booking={booking} setBooking={setBooking} />
        )}
        {part.number === 2 && <BookingConfirm booking={booking} />}
        <div className="bookingDirection">
          {part.number === 1 && <button onClick={handleNext}>TIẾP TỤC</button>}
          {part.number === 2 && (
            <>
              <button onClick={handleBack}>QUAY LẠI</button>
              <button onClick={() => setPayModal(true)}>THANH TOÁN</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}