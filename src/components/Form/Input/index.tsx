import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

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
    <div>
      <div>
        <input id={id} ref={ref} {...rest} />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
      {error ? (
        <p>{error.message}</p>
      ) : null}
    </div>
  )
);

export default Input;