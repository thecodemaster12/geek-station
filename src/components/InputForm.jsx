const InputForm = ({label, placeholder, type, name}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-jetmono text-sm" htmlFor={name}>{label}</label>
      <input
        className="border border-white rounded-md focus:outline-0 focus:border-cyan-500 py-3 px-6 font-jetmono"
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
};

export default InputForm;
