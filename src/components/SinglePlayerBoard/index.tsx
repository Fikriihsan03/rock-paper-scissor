import LeftPlayer from "./LeftPlayer";
import RightPlayer from "./RightPlayer";

const SinglePlayerBoard = () => {
  return (
    <div className="grid grid-cols-3 gap-8 [&>div]:border-4 [&>div]:min-h-[50vh] my-12">
      <LeftPlayer />
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-3xl">Round 3</h1>
        <p>Vs</p>
        <p className="justify-self-end mb-4">
          defeated computer : <span>1</span>
        </p>
      </div>
      <RightPlayer />
    </div>
  );
};

export default SinglePlayerBoard;
