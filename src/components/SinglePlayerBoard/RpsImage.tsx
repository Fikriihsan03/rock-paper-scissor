import { useEffect } from "react";

interface IProps {
  imageShow: boolean;
  imageSrc: any;
  isRpsSelected: boolean;
  resetSelectButtonClicked: () => void;
}
const RpsImage = ({
  imageShow,
  imageSrc,
  isRpsSelected,
  resetSelectButtonClicked,
}: IProps) => {

  useEffect(() => {
    resetSelectButtonClicked();
  }, [isRpsSelected, imageSrc]);

  if (!imageShow) return null;

  return <img className="animate-fade-in-down" src={imageSrc} alt="icon" />;
};

export default RpsImage;
