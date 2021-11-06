const InputField = ({
  id,
  label,
  type,
  placeholder,
  handleChange,
  value,
  pattern,
  title,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-primary">
        {label}
      </label>
      <input
        id={id}
        required
        type={type}
        placeholder={placeholder}
        className="base-input"
        onChange={handleChange}
        value={value}
        pattern={pattern}
        title={title}
      />
    </div>
  )
}

export default InputField
