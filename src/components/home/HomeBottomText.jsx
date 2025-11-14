import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-5">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-22 flex items-center px-6 border-white rounded-full uppercase">
        <Link className="text-[6.5vw] mt-4" to="/projects">
          Projets
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-22 flex items-center px-6 border-white rounded-full uppercase">
        <Link className="text-[6.5vw] mt-4" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
