/* eslint-disable react/no-unescaped-entities */
"use client";
import { useAuth } from "@/app/context/AuthContext";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { Input } from "@/components/ui/input";
import { registrationSchema } from "@/lib/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
  confirmPassword: string;
  role: "user" | "organizer";
};

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(registrationSchema),
  });

  const { register: registerUser, error } = useAuth();

  const onSubmit = async (data: FormValues) => {
    const { confirmPassword, ...userData } = data;
    try {
      await registerUser(userData);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  return (
    <div className="min-h-screen md:w-1/3 lg:w-1/5 mx-auto my-auto mt-40 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <h3 className="text-center text-3xl font-semibold mb-5">
            Registration
          </h3>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <Input {...register("email")} />
            <p className="text-sm text-red-400 mt-2">{errors.email?.message}</p>
          </div>
          <div className="my-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <Input {...register("firstName")} />
                <p className="text-sm text-red-400 mt-2">
                  {errors.firstName?.message}
                </p>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Input {...register("lastName")} />
                <p className="text-sm text-red-400 mt-2">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <Input type="password" {...register("password")} />
            <p className="text-sm text-red-400 mt-2">
              {errors.password?.message}
            </p>
          </div>
          <div className="my-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Passwords don't match",
              })}
            />
            <p className="text-sm text-red-400 mt-2">
              {errors.confirmPassword?.message}
            </p>
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <label htmlFor="role">Create account as :</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="user"
                {...register("role", { required: "Role is required" })}
                className="mx-2 rounded-square "
              />
              User
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="organizer"
                {...register("role", { required: "Role is required" })}
                className="mx-2   "
              />
              Organizer
            </label>
          </div>
        </div>
        <p className="text-sm text-red-400 mt-2 text-center font-semibold">
          {errors.role?.message}
        </p>
        <div className="my-4">
          <Link href="/user/login" className="text-sm font-semibold">
            Already have an account? <span className="underline">Log in</span>
          </Link>
        </div>

        <button
          className="bg-black/15 dark:bg-white/15 dark:hover:bg-white/25 hover:bg-black/25 backdrop:blur w-full py-2 font-bold"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
