import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full fixed">
        <Video />
      </div>

      <div className="h-screen w-full relative flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
