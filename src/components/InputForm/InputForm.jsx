import "./InputForm.css";

const InputForm = ({
  label,
  children,
  showForm,
  onClickForm,

  ...props
}) => {
  return (
    <section className="income-type-form">
      <div className="label" onClick={onClickForm}>
        <h3>{label}</h3>
      </div>

      {showForm && <div className="form-container">{children}</div>}
    </section>
  );
};

export default InputForm;
