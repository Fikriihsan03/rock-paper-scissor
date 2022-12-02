import batu from "../../assets/batu.png";
import heart from "../../assets/health.png";
const LeftPlayer = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="self-start">
        Health :{" "}
        <span>
          <img alt="healthbar" src={heart} width="20" height="20" />
        </span>
      </p>
      <img src={batu} alt="icon" />
      <p>player 01</p>
    </div>
  );
};

export default LeftPlayer;
