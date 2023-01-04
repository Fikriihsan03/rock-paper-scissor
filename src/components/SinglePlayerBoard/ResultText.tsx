interface IProps {
  resultShow: boolean;
  resultText: string;
}
const ResultText = ({ resultShow, resultText }: IProps) => {
  if (!resultShow) return null;

  return (
    <p className="animate-fade-in-down result-text font-baloo-tama text-[60px] p-[5px] font-extrabold">
      {resultText}
    </p>
  );
};

export default ResultText;
