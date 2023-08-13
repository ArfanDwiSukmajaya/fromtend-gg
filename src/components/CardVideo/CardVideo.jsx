import React from "react";
import "./CardVideo.scss";
import { Link } from "react-router-dom";

export default function CardVideo(props) {
  const { title, thumbnail, videoID } = props;
  return (
    <div className="short-card">
      <Link to={`/video/${videoID}`}>
        <img src={thumbnail} alt="Short Video 2" />
        <div className="watch">
          <span className="live">LIVE</span>
        </div>

        <div className="badge">
          <span className="title1">Hanya saat live</span>
          <br />
          <span className="diskon">Kejar Dsikon</span>
        </div>

        <div className="short-details">
          <div className="short-title">{title}</div>
          <div className="short-creator">Gadgedin Store</div>
        </div>
      </Link>
    </div>
  );
}
