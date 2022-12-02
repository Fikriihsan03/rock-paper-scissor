
import SinglePlayerBoard from "../components/SinglePlayerBoard";

const SinglePlayer = () => {
  return (
    <div className="w-[90%] my-0 mx-auto">
      <div className="h-[50px] bg-red-500">
        <h1>{`< back`}</h1>
      </div>
      {/* main board */}
      <SinglePlayerBoard />
      <div className="flex justify-center items-center gap-4 my-12">
        <button className="rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white">
          Gunting
        </button>
        <button className="rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white">
          Batu
        </button>
        <button className="rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white">
          Kertas
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
