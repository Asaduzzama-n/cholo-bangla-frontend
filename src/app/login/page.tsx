/* eslint-disable react/no-unescaped-entities */
"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import Link from "next/link";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validationSchemas";
import AuthProvider, { useAuth } from "@/app/context/AuthContext";
import { isLoggedIn } from "@/helpers/auth.helpers";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login, error } = useAuth();

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen md:w-1/3 lg:w-1/5 mx-auto my-auto mt-40 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <h3 className="text-center text-3xl  font-semibold mb-5">LOGIN</h3>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <Input {...register("email")}></Input>
            <p className="text-sm text-red-400 mt-2">
              {errors.email?.message as string}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <Input className="" {...register("password")}></Input>
            <p className="text-sm text-red-400 mt-2">
              {errors.password?.message as string}
            </p>
          </div>
        </div>
        <div className="my-4">
          <Link className="text-sm font-semibold" href="/user/registration">
            Don't have an account? <span className="underline">Create one</span>
          </Link>
        </div>
        <button
          className="bg-black/15 dark:bg-white/15 dark:hover:bg-white/25 hover:bg-black/25  backdrop:blur w-full py-2 font-bold"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
