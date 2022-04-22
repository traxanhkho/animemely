import React, { useContext, useEffect, useState } from "react";
import { getHistory } from "../../services/fakeUserService";
import Heading from "../common/Heading";
import MovieContext from "../../context/movieContext";
import CardHistory from "../common/CardHistory";
import "../../style/history.css";

function History() {
  const { currentUser } = useContext(MovieContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const history = getHistory(currentUser);
      setHistory(history);
    }
  }, []);

  if (!currentUser) {
    return (
      <div className="follow-section">
        <h2>Vui lòng đăng nhập để xem lịch sử phim đã xem.</h2>
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="history-section">
        <Heading name="lịch sử đã xem" />
        <h2>Cảm ơn bạn, Danh sách lịch sử đang trống.</h2>
      </div>
    );
  }

  return (
    <div className="history-section">
      <Heading name="lịch sử đã xem" />
      <div className="history-list">
        {history.map((item) => (
          <CardHistory key={item._id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default History;
