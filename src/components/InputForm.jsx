// 1. Add onChange to the destructured arguments
const InputForm = ({ label, placeholder, type, name, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-jetmono text-sm" htmlFor={name}>{label}</label>
      <input
        className="border border-white rounded-md focus:outline-0 focus:border-cyan-500 py-3 px-6 font-jetmono"
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange} // 2. Bind it to the native input element
      />
    </div>
  );
};

export default InputForm;