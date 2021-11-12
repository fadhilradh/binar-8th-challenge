import PropTypes from 'prop-types'

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
    <div className="flex col gap-1">
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

InputField.PropTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
}
