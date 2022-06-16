import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

export interface IButtonComponentProps extends ButtonProps {
    child?: React.ReactNode
}

const ButtonComponent: React.FC<IButtonComponentProps> = (props) => {
  return (
    <React.Fragment>
      <Button {...props}>{props.child}</Button>
    </React.Fragment>
  );
};

export default ButtonComponent;
