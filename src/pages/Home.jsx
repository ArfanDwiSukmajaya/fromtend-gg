import React, { useEffect, useState } from "react";
import CardVideo from "../components/CardVideo/CardVideo";
import api from "../config/api";
import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    const filtered = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [data, searchTerm]);

  return (
    <>
      <Navbar />
      <div className="search-container">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="shorts-container">
        {filteredData.map((item, index) => (
          <CardVideo key={index} videoID={item.videoID} title={item.title} thumbnail={item.thumbnail} />
        ))}
      </div>
    </>
  );
}
