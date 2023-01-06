import { useNavigate } from "react-router-dom";
import SinglePlayerBoard from "../components/SinglePlayerBoard";

const SinglePlayer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] my-0 mx-auto min-h-[100vh]">
      <div className="h-[50px]">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer decoration-red-600"
        >Exit</h1>
      </div>
      <SinglePlayerBoard />
    </div>
  );
};

export default SinglePlayer;
