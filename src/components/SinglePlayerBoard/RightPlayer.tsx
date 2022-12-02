import gunting from "../../assets/gunting.png";

const RightPlayer = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p></p>
      <img src={gunting} alt="icon" />
      <p>Computer</p>
    </div>
  );
};

export default RightPlayer;
