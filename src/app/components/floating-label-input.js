import { useState } from "react";
import "@styles/floating-label-input.scss";

export default function FloatingLabelInput({
  type,
  label,
  name,
  value,
  required = false,
  rows
 }) {
  const [inputValue, setInputValue] = useState(value || '');

  const fieldClassName = (modifier) => [
    'floating-label-input__field',
    modifier && `floating-label-input__field--${modifier}`,
    inputValue && 'floating-label-input__field--filled',
  ].filter(Boolean).join(' ');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div className="floating-label-input">
      { type === 'textarea' ? (
        <textarea
          id={'input-'+ name}
          className={fieldClassName('textarea')}
          name={name}
          value={inputValue} 
          onChange={handleInputChange} 
          { ...(required && { required: true }) }
          { ...(rows && { 'rows': rows }) }
        > 
        </textarea>
      ) : (
        <input 
          id={'input-'+ name}
          className={fieldClassName()}
          type={type} 
          name={name}
          value={inputValue} 
          onChange={handleInputChange} 
          { ...(required && { required: true }) }
        />
      )}

      { label && (
        <label 
          htmlFor={'input-'+ name}
          className="floating-label-input__label"
        >
          {label}
        </label>
      )}
    </div>
  )
}