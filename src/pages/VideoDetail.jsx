import React, { useEffect, useState } from "react";
import "./VideoDetail.scss";
import { useParams, useNavigate } from "react-router-dom";
import api from "../config/api";

export default function VideoDetail() {
  const { slug } = useParams();
  const [data, setData] = React.useState([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const res = await api.get(`/videos/${slug}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [slug]);

  async function handleSubmitComment() {
    const commentData = {
      videoID: slug,
      username,
      comment,
    };
    const res = await api.post("/comments", commentData);
    // console.log("Comment submitted successfully!", res.data);
    setUsername("");
    setComment("");
  }

  return (
    <div className="container">
      <div id="sidebar-left">
        <h2 className="product">Product List</h2>
        {data.products &&
          data.products.map((product) => (
            <div key={product.productID} className="product-item">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            </div>
          ))}
      </div>
      <div id="content">
        {data && (
          <>
            <button className="btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <h1>{data.title}</h1>
            <iframe id="youtube-iframe" src={`https://www.youtube.com/embed/${slug}?rel=0&amp;autoplay=1`} frameBorder="0" allowFullScreen></iframe>
          </>
        )}
      </div>
      <div id="sidebar-right">
        <div id="comment-section">
          <h2>Comments</h2>
          <ul id="comment-list">
            {data.comments &&
              data.comments.map((comment) => (
                <li key={comment.commentID}>
                  <p className="username">{comment.username}</p>
                  <p className="comment">{comment.comment}</p>
                </li>
              ))}
            <hr />
          </ul>
          <input type="text" id="username-input" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <textarea id="comment-input" placeholder="Enter your comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          <button className="btn" id="submit-comment" onClick={handleSubmitComment}>
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
}
