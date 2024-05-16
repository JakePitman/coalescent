const Sighting = () => {
  return <div className="w-[30%] h-auto aspect-square outline ml-[3%]"></div>;
};

type Props = {
  title: string;
  text: string;
  isReadyToRender: boolean;
};

export const InterestsGroup = ({ title, text, isReadyToRender }: Props) => {
  return (
    <div className="w-full">
      <h2 className="w-full text-xl border-b-2 border-sky-800 mb-2 pb-2 font-bold text-sky-500">
        {title}
      </h2>
      <div className="flex">
        <p className="w-5/12 pr-2 text-sm">{text}</p>
        <div className="flex w-7/12 bg-sky-200/30">
          <Sighting />
          <Sighting />
          <Sighting />
        </div>
      </div>
    </div>
  );
};
