const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <fieldset className="fieldset items-center">
      <label
        htmlFor={name}
        className="fieldset-label capitalize cursor-pointer"
      >
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </fieldset>
  );
};
export default FormCheckbox;
