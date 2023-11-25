import InformationTips from "../InformationTips/InformationTips";
import "./CommonNumberInput.css";

const CommonNumberInput = ({ label, unit, incomeValue, info }) => {
  const onInput = (event) => (incomeValue.value = Number(event.target.value));

  return (
    <label className="income-input-container">
      {label}
      <input type="number" value={incomeValue.value || ""} onInput={onInput} />
      {unit}
      <InformationTips children={info} />
    </label>
  );
};

export default CommonNumberInput;
