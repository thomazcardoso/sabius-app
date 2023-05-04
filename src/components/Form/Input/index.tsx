import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StylledInput } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  id?: string;
}

const Input = forwardRef(
  (
    { label, error, id, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <StylledInput>
      
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} ref={ref} {...rest} />
      {error ? (
        <p>{error.message}</p>
      ) : null}
    </StylledInput>
  )
);

export default Input;