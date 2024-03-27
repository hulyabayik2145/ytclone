//istek için gerekli alanları yt-api sayfasından aldık

import axios from "axios";

const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "60d9e600a3msh1475c4a4c947c1fp1c3d62jsn6b4dee0347c6",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

//yapılan bütün isteklerin ortak başlangıç kısmını belirle
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// parametre olarak aldığı url e istek atıp
// geriye elde ettiği verileri donduren bir fonk

export const getData = async (endpoint) => {
  try {
    //api isteği at
    const res = await axios.get(endpoint, options);
    // fonsiyonun çağrıldığı yere veriyi döndürüyoruz
    return res.data;
  } catch (err) {
    console.log("verileri çekerken hata oluştu", err);
  }
};
