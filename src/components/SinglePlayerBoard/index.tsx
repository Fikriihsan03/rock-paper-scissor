import LeftPlayer from "./LeftPlayer";
import RightPlayer from "./RightPlayer";
import rock from "../../assets/batu.png";
import scissor from "../../assets/gunting.png";
import paper from "../../assets/kertas.png";
import RpsImage from "./RpsImage";
import ChoiceButton from "./ChoiceButton";
import { useEffect, useState } from "react";
import { getBattleResult } from "../../utils/rpsBattleResult";

interface IProps {}

const SinglePlayerBoard = ({}: IProps) => {
  const [resultData, setResultData] = useState({
    p1: "",
    p1Health: 3,
    p2: "",
    result: "",
    round: 0,
  });
  const [isRpsSelected, setIsRpsSelected] = useState(false);

  const getRpsImage = (image: string): JSX.Element => {
    let imageSrc = rock;
    switch (image) {
      case "SCISSORS":
        imageSrc = scissor;
        break;
      case "PAPER":
        imageSrc = paper;
        break;
      case "ROCK":
        imageSrc = rock;
        break;
    }
    const rpsImageComp = (
      <RpsImage
        imageSrc={imageSrc}
        isRpsSelected={isRpsSelected}
        resetSelectButtonClicked={resetClickedButtonState}
      />
    );
    return rpsImageComp;
  };

  const [rpsOptions] = useState(["ROCK", "PAPER", "SCISSORS"]);

  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  const resetClickedButtonState = () => {
    setIsRpsSelected(false);
  };

  const selectedOptions = (selected: string) => {
    setIsRpsSelected(true);
    const randomIndex = getRandomInt();
    const p1Choice = selected;
    const p2Choice = rpsOptions[randomIndex];
    const result = getBattleResult(selected, rpsOptions[randomIndex]);

    setResultData({
      ...resultData,
      p1: p1Choice,
      p1Health:
        result === "p2 wins" ? resultData.p1Health - 1 : resultData.p1Health,
      p2: p2Choice,
      result,
      round: resultData.round + 1,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 [&>div]:border- [&>div]:min-h-[50vh] my-12">
        <LeftPlayer
          health={resultData.p1Health}
          image={getRpsImage(resultData.p1)}
        />
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-3xl">Round {resultData.round}</h1>
          <p>Vs</p>
          <p className="justify-self-end mb-4">
            defeated computer : <span>1</span>
          </p>
        </div>
        <RightPlayer image={getRpsImage(resultData.p2)} />
      </div>
      <ChoiceButton selectedOptions={selectedOptions} />
    </div>
  );
};

export default SinglePlayerBoard;
