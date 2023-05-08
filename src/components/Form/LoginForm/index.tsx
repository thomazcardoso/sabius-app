import { useContext, useState } from "react";
import Input from "../Input";
import { UserContext } from "../../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "../../../validations/loginFormSchema";
import { StylledLoginForm } from "./style";
import { CadasterLinkButton, LoginButton } from "../../../styles/buttons";

export const LoginForm = () => {

  const { login, loading, setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });
  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    setLoading(true)
    login(formData)
  };

  return (
    <StylledLoginForm>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="email"
          id="email"
          label="E-mail"
          {...register("email")}
          disabled={loading}
          error={errors.email}
        />
        <Input
          type="password"
          id="senha"
          label="Senha"
          {...register("password")}
          disabled={loading}
          error={errors.password}
        />
        <LoginButton
          disabled={loading}
        >
          {loading ? "Logando..." : "Logar"}
        </LoginButton>
      </form>
      <p>Crie sua conta aqui abaixo</p>
      <CadasterLinkButton to="/register">Cadastrar</CadasterLinkButton>
    </StylledLoginForm>
  );
};
