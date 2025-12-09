"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Key, Profile, Sms } from "iconsax-reactjs";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Form validation schema
const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberPassword: z.boolean(),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      rememberPassword: false,
    },
  });

  function onSubmit(values: SignUpFormData) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="auto-fill-white-text space-y-6 text-white"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-base font-normal">
                Full Name
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Profile className="text-paragraph absolute top-1/2 left-4 -translate-y-1/2 rounded-[10px]" />
                  <Input
                    placeholder="Enter Your Name"
                    {...field}
                    className="bg-dark-1-card placeholder:text-paragraph h-[52px] rounded-[10px] px-14 placeholder:text-base"
                    autoComplete="off"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-base font-normal">
                Email Address
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Sms className="text-paragraph absolute top-1/2 left-4 -translate-y-1/2 rounded-[10px]" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    {...field}
                    className="bg-dark-1-card placeholder:text-paragraph h-[52px] rounded-[10px] px-14 placeholder:text-base"
                    autoComplete="email"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="mb-2 text-base font-normal">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Key className="text-paragraph absolute top-1/2 left-4 -translate-y-1/2 rounded-[10px]" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className="bg-dark-1-card placeholder:text-paragraph h-[52px] rounded-[10px] px-14 placeholder:text-base"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-sm text-gray-400 hover:text-white"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberPassword"
          render={({ field }) => (
            <FormItem>
              <div className="mb-2 flex items-center space-x-3">
                <FormControl>
                  <span
                    className={`h-5 w-5 rounded-full border-2 ${field.value ? "bg-theme-blue border-white" : "border-paragraph"}`}
                    onClick={() => field.onChange(!field.value)}
                  ></span>
                </FormControl>
                <FormLabel
                  onClick={() => field.onChange(!field.value)}
                  className="text-paragraph text-sm font-normal"
                >
                  Remember Password
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="h-12 w-full rounded-[10px] text-base font-semibold"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Creating account..."
            : "Create account"}
        </Button>
      </form>
    </Form>
  );
}
