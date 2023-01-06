import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[100vh] gap-8">
        <h1 className="text-2xl font-semibold">Rock Paper Scissor Game</h1>
        <Link to="/singleplayer">
          <button className="rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white">
            Single Player
          </button>
        </Link>
        <Link to="/multiplayer">
          <button disabled className=" rounded-lg p-4 border-2 border-black">
            Multi Player
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
