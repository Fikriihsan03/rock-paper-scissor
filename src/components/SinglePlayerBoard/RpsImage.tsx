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
  }, [isRpsSelected,imageSrc]);

  useEffect(() => {
    // console.log(show)
    console.log("render")
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);
    
    // console.log("render");
   return ()=>clearTimeout(timeout);
  }, [show]);
  if (!show) return null;

  return <img className="animate-fade-in-down" src={imageSrc} alt="icon" />;
};

export default RpsImage;
