/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import ReactPlayer from "react-player";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  // 1) arama parametresine erişim için kurulum
  const [searchParams] = useSearchParams();

  // 2. adım url den v isimli arama parametresini al
  const id = searchParams.get("v");

  // 3. adım id si bilene videonın bilgileri api den al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);
  console.log(video);

  return (
    <div className="detail-page h-screen overflow-auto p-5">
      {/* video içeriği */}
      <div>
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          height={"50vh"}
          light
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        ></ReactPlayer>

        {!video ? (
          <p> yükleniyor</p>
        ) : (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <div className="flex justify-between">
              {/* kanal bilgileri */}
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                  alt=""
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>

              {/* sağ */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-2 px-4 border-r">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            {/* video bilgileri */}
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} Görüntüleme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>
      {/* alakalı içerikler */}
      <div className="flex flex-col gap-5 p-1 md:p-6 max-md:mt-6">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            // eslint-disable-next-line react/jsx-key
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};
export default VideoDetail;
