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

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="floating-label-input">
      { type === 'textarea' ? (
        <textarea
          id={'input-'+ name}
          className={inputValue ? 'filled' : ''} 
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
          className={inputValue ? 'filled' : ''} 
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
          className={inputValue ? 'filled' : ''}
        >
          {label}
        </label>
      )}
    </div>
  )
}