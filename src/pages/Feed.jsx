import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/videoContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const { videos } = useContext(VideoContext);
  return (
    <div className="flex">
      <Sidebar />
      <div className="videos">
        {!videos ? (
          <Loader />
        ) : (
          videos.map(
            (item) =>
              // eslint-disable-next-line react/jsx-key

              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};
export default Feed;
