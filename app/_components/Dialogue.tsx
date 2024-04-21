type Props = {
  /*
   * The text that will be displayed in the dialogue box
   */
  text: string;
};

export const Dialogue = ({ text }: Props) => {
  return (
    <div className="bg-blue-800">
      <p className="text-white">{text}</p>
    </div>
  );
};
