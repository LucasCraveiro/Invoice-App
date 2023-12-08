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
  id = "",
  inline = false,
}) => {
  return (
    <div className={classes.single_wrapper}>
      {renderLabel && <label htmlFor={id}>{label}</label>}

      <input
        className={`${classes.text_input} ${inline ? classes.inline : ""}`}
        id={id}
        required={required}
        name={name}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
