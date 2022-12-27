import { useEffect, useState } from "react";

interface IProps {
  imageSrc: any;
  isRpsSelected: boolean;
  resetSelectButtonClicked: () => void;
}
const RpsImage = ({
  imageSrc,
  isRpsSelected,
  resetSelectButtonClicked,
}: IProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    resetSelectButtonClicked();
  }, [isRpsSelected]);

  useEffect(() => {
    console.log("render");
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [show]);

  if (!show) return null;

  return <img className="animate-fade-in-down" src={imageSrc} alt="icon" />;
};

export default RpsImage;
