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
};

const TextInput: React.FC<TextInputProps> = ({
  label = "",
  type = "text",
  disabled = false,
  renderLabel = true,
  required = false,
  placeholder = "",
  name = "",
}) => {
  return (
    <>
      {renderLabel && <label>{label}</label>}

      <input
        className={classes.text_input}
        required={required}
        name={name}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;
