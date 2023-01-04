import { useEffect, useState } from "react";

import LeftPlayer from "./LeftPlayer";
import RightPlayer from "./RightPlayer";
import rock from "../../assets/batu.png";
import scissor from "../../assets/gunting.png";
import paper from "../../assets/kertas.png";
import RpsImage from "./RpsImage";
import ChoiceButton from "./ChoiceButton";
import { getBattleResult } from "../../utils/rpsBattleResult";
import ResultText from "./ResultText";

const SinglePlayerBoard = () => {
  const [resultData, setResultData] = useState({
    p1: "",
    p1Health: 3,
    totalP1Win: 0,
    p2: "",
    result: "",
    round: 0,
  });
  const [isRpsSelected, setIsRpsSelected] = useState(false);
  const [isCompShow, setIsCompShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCompShow(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isCompShow]);

  const getRpsImage = (image: string): JSX.Element => {
    let imageSrc;

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
      default:
        imageSrc = rock;
    }

    const rpsImageComp = (
      <RpsImage
        imageShow={isCompShow}
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
    setIsCompShow(false);
    setIsRpsSelected(false);
  };

  const selectedOptions = (selected: string) => {
    setIsRpsSelected(true);
    const leftPlayerName = "Player 1";
    const rightPlayerName = "V8 Engine";
    const randomIndex = getRandomInt();
    const p1Choice = selected;
    const p2Choice = rpsOptions[randomIndex];
    const result = getBattleResult(
      selected,
      rpsOptions[randomIndex],
      leftPlayerName,
      rightPlayerName
    );

    setResultData((prevResultData)=>({
      ...prevResultData,
      p1: p1Choice,
      totalP1Win:
        result === `${leftPlayerName} win`
          ? (prevResultData.totalP1Win += 1)
          : prevResultData.totalP1Win,
      p1Health:
        result === `${rightPlayerName} win`
          ? prevResultData.p1Health - 1
          : prevResultData.p1Health,
      p2: p2Choice,
      result,
      round: prevResultData.round + 1,
    }));
  };
  return (
    <div>
      <div className="flex justify-center min-h-[100px]">
        <ResultText resultShow={isCompShow} resultText={resultData.result} />
      </div>
      <div className="grid grid-cols-3 gap-8 [&>div]:border- [&>div]:min-h-[50vh] my-12">
        <LeftPlayer
          health={resultData.p1Health}
          image={getRpsImage(resultData.p1)}
        />
        <div className="flex flex-col justify-center items-center">
          {/* <h1 className="text-3xl">Round {resultData.round}</h1> */}
          <p>Vs</p>
        </div>
        <RightPlayer image={getRpsImage(resultData.p2)} />
      </div>
      <ChoiceButton selectedOptions={selectedOptions} />
    </div>
  );
};

export default SinglePlayerBoard;
