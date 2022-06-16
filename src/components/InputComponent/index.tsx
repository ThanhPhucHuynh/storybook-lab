import React from "react";

export interface IInputComponentProps {
  dataTestid?: string;
  placeholder?: string;
  label: string;
  isUpperCase?: boolean;
}

const InputComponent: React.FC<IInputComponentProps> = (props) => {
  const [value, setValue] = React.useState("");

  return (
    <div
      style={{
        display: "grid",
      }}
    >
      {props.label}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          if (props.isUpperCase) {
            setValue(e.target.value.toUpperCase());
            return;
          }
          setValue(e.target.value);
        }}
        placeholder={props.placeholder}
        data-testid={props.dataTestid}
        name={props.dataTestid}
      />
    </div>
  );
};

export default InputComponent;
