import { createContext, useEffect, useState } from "react";
import { categories } from "./../constants/index";
import { getData } from "./../helpers/getData";
//context temelini oluştur.
export const VideoContext = createContext();

//Sağlayıcı tanımla

// eslint-disable-next-line react/prop-types
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [videos, setVideos] = useState(null);
  console.log(selectedCategory);

  //categori her değiştiğinde api den veriyi al
  useEffect(() => {
    //menu seçildiyse fonksiyonu durdur
    if (selectedCategory.type === "menu") return;
    //önceki kategorinin verileri temizle
    setVideos(null);
    //kategori home eşit ise home enpoidine istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }
    //kategori trending ise home enpoidine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }
    //tyepe i category ise o zaman search enpoidine istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);
  return (
    <VideoContext.Provider
      value={{ videos, selectedCategory, setSelectedCategory }}
    >
      {children}
    </VideoContext.Provider>
  );
};
