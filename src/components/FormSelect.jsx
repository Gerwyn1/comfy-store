const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="fieldset-label capitalize">
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};
export default FormSelect;
