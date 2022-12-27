import SinglePlayerBoard from "../components/SinglePlayerBoard";

const SinglePlayer = () => {
  return (
    <div className="w-[90%] my-0 mx-auto">
      <div className="h-[50px] bg-red-500">
        <h1>{`< back`}</h1>
      </div>
      <SinglePlayerBoard />
    </div>
  );
};

export default SinglePlayer;
