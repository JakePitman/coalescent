type LanguageOptionProps = {
  id: string;
  name: string;
  value: string;
};
const LanguageOption = ({ id, value }: LanguageOptionProps) => {
  return (
    <div>
      <input type="radio" id={id} name="selected-language" value={value} />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export const LanguageSettings = () => {
  return (
    <div className="flex flex-col">
      <LanguageOption id="english" name="language" value="english" />
      <LanguageOption id="japanese" name="language" value="japanese" />
    </div>
  );
};
