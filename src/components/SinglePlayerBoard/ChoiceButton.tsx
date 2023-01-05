interface IProps {
  selectedOptions: (option:string) => void;
}

const ChoiceButton = ({ selectedOptions }: IProps) => {
  return (
    <div className="flex justify-center items-center gap-4 my-12">
      <button
        onClick={() => selectedOptions("SCISSORS")}
        className="flex-1 rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white"
      >
        Gunting
      </button>
      <button
        onClick={() => selectedOptions("ROCK")}
        className="flex-1 rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white"
      >
        Batu
      </button>
      <button
        onClick={() => selectedOptions("PAPER")}
        className="flex-1 rounded-lg p-4 border-2 border-black hover:bg-blue-500 hover:border-transparent hover:text-white"
      >
        Kertas
      </button>
    </div>
  );
};

export default ChoiceButton;
