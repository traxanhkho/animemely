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
    const history = getHistory(currentUser);
    setHistory(history);
  }, []);

  
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
