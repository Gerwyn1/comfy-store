const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <label className="fieldset-label capitalize">{label}</label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </fieldset>
  );
};
export default FormInput;