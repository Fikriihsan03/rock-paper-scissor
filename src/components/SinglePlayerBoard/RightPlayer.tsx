import { useEffect } from "react";

// import gunting from "../../assets/gunting.png";
interface IProps {
  image: JSX.Element;
}

const RightPlayer = ({ image }: IProps) => {
  useEffect(() => {}, [image]);
  return (
    <div className="flex flex-col items-center gap-4">
      <div style={{ height: 180 }}>{image}</div>
      <p>Computer</p>
    </div>
  );
};

export default RightPlayer;
