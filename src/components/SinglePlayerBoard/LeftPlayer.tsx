import { useEffect } from "react";
import heart from "../../assets/health.png";

interface IProps {
  image: JSX.Element;
  health: number;
}
const LeftPlayer = ({ image, health }: IProps) => {
  useEffect(() => {}, [image]);
  return (
    <div className="flex flex-col items-center gap-4">
      <div style={{ height: 180 }}>{image}</div>
      <p>player 01</p>
      <p className="self-start">
        Health :
        <span>
          {[...Array(health)].map((_, i) => {
            return (
              <img
                key={i}
                className="inline mx-[3px]"
                alt="healthbar"
                src={heart}
                width="20"
                height="20"
              />
            );
          })}
        </span>
      </p>
    </div>
  );
};

export default LeftPlayer;
