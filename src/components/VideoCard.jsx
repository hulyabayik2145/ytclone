/* eslint-disable react/prop-types */
import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const VideoCard = ({ video, isRow }) => {
  "merhaba";
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  console.log(video);

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      {/* resim alanı */}
      <div>
        <img
          className="v-pic rounded-lg w-full h-full"
          // eslint-disable-next-line react/prop-types
          src={
            // eslint-disable-next-line react/prop-types
            isHover && video.richThumbnail
              ? // eslint-disable-next-line react/prop-types
                video.richThumbnail[0].url
              : // eslint-disable-next-line react/prop-types
                video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="video banner"
        />
      </div>
      {/* alt detay alanı */}

      <div className="flex gap-4 mt-5">
        <img
          // eslint-disable-next-line react/prop-types
          src={video.channelThumbnail[0].url}
          className="c-pic w-14 h-14 rounded-full"
          alt="channel picture"
        />

        <div>
          <h4
            className={`${isRow ? "line-clamp-1" : "line-clamp-2"} font-bold`}
          >
            {video.title}
          </h4>
          <p>{video.channelTitle}</p>
          <div className="detail flex gap-2">
            <p>
              <span>{millify(video.viewCount)}</span> <span>Görüntülenme</span>
            </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
