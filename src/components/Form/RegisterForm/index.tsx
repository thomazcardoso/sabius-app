import Input from "../Input";
import { useContext, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerFormShema } from "../../../validations/registerFormSchema";
import { UserContext } from "../../../providers/UserContext";
import { StylledRegisterForm } from "./style";
import { CadasterButton } from "../../../styles/buttons";

export const RegisterForm = () => {
  const { registerUser, loading, setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormShema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    setLoading(true)
    registerUser(formData);
  };
  return (
    <StylledRegisterForm>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis</p>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          type="name"
          placeholder="Seu nome"
          {...register("name")}
          id="name"
          disabled={loading}
          error={errors.name}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Seu email"
          {...register("email")}
          id="email"
          disabled={loading}
          error={errors.email}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Senha"
          {...register("password")}
          id="password"
          disabled={loading}
          error={errors.password}
        />
        <Input
          label="Confirme a sua senha"
          type="password"
          placeholder="Confirmar senha"
          {...register("confirm")}
          id="confirmPassword"
          disabled={loading}
          error={errors.confirm}
        />
        <Input
          label="URL da imagem"
          type="text"
          placeholder="Coloque sua URL"
          {...register("image")}
          id="image"
          disabled={loading}
          error={errors.image}
        />
        <CadasterButton
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </CadasterButton>
      </form>
    </StylledRegisterForm>

  );
};
