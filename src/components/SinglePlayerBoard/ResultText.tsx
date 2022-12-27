import { useEffect, useLayoutEffect, useState } from "react";

interface IProps {
  resultText: string;
  isRpsSelected: boolean;
}
const ResultText = ({ resultText, isRpsSelected }: IProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [isRpsSelected,resultText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [show]);

  if (!show) return null;

  return (
    <p className="animate-fade-in-down result-text font-baloo-tama text-[60px] p-[5px] font-extrabold">
      {resultText}
    </p>
  );
};

export default ResultText;
