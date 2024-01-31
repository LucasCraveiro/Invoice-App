import { ChangeEvent } from "react";
import classes from "./TextInput.module.css";

type TextInputProps = {
  inline?: boolean;
  required?: boolean;
  label?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  type?:
    | "text"
    | "search"
    | "submit"
    | "password"
    | "number"
    | "email"
    | "date"
    | "week"
    | "url"
    | "radio";
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  renderLabel?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  label = "",
  type = "text",
  disabled = false,
  renderLabel = true,
  required = false,
  placeholder = "",
  name = "",
  value = "",
  id = "",
  inline = false,
  onChange,
}) => {
  return (
    <div className={classes.single_wrapper}>
      {renderLabel && <label htmlFor={id}>{label}</label>}

      <input
        className={`${classes.text_input} ${inline ? classes.inline : ""}`}
        id={id}
        required={required}
        name={name}
        value={value}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
