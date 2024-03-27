import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // form gönderilince tetiklenir
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputa girilen veri
    const text = e.target[0].value;

    //kullanıcıyı sonuçlar sayfasına yçnlendir
    //search_query parametresi olarak aratılan terimi ekle
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube-logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-[rgb(123,123,123)] rounded-[20px] overflow-hidden"
      >
        <input
          className="outline-none bg-black text-white px-3 py-1 rounded-[10px]"
          type="search"
        />
        <button className="border-1 px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex-gap-3 text-x1 cursor-pointer">
        <FaBell className="hover:text-gray-400 transition-[400]" />

        <IoVideocam />
      </div>
    </div>
  );
};
export default Header;
