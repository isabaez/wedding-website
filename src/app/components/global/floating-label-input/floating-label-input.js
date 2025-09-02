import { useState } from "react";
import styles from "@components/global/floating-label-input/floating-label-input.module.scss";

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
    <div className={styles.floatingLabelGroup}>
      { type === 'textarea' ? (
        <textarea
          id={'input-'+ name}
          className={inputValue ? styles.filled : ''} 
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
          className={inputValue ? styles.filled : ''} 
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
          className={inputValue ? styles.filled : ''}
        >
          {label}
        </label>
      )}
    </div>
  )
}