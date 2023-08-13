import React, { useEffect } from "react";
import CardVideo from "../components/CardVideo/CardVideo";
import api from "../config/api";
import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const [data, setData] = React.useState([]);

  async function fetchData() {
    try {
      const res = await api.get("/videos");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="shorts-container">
        {data.map((item, index) => {
          return <CardVideo key={index} videoID={item.videoID} title={item.title} thumbnail={item.thumbnail} />;
        })}
      </div>
    </>
  );
}
