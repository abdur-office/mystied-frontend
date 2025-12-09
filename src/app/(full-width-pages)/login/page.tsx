"use client";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";
import SignUpCarousel from "../sign-up/_components/SignUpCarousel";
import { SocialSignUp } from "../sign-up/_components/SocialSignUp";
import { SignInForm } from "./_components/SignInForm";

export default function AuroSignUp() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#131215] text-white">
      {/* Left Sidebar - Sign Up Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-[45%]">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="absolute top-6 left-6">
            <Logo />
          </div>

          {/* Form Header */}
          <div className="mt-10 mb-10 lg:mt-28">
            <h1 className="font-univaNova mb-4 text-[32px] font-semibold text-white">
              Log in
            </h1>
            <p className="text-paragraph text-base font-normal">
              User-friendly login page ensures easy access for all.
            </p>
          </div>

          {/* Social Login Buttons */}
          <SocialSignUp />

          {/* Form */}
          <SignInForm />

          {/* Sign Up Link */}
          <p className="mt-11 text-center text-sm text-[#8494A4]">
            Already have an account?{" "}
            <Link
              href="/sign-up"
              className="text-[#0193F9] hover:text-blue-400"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Sidebar - Feature Showcase */}
      <div className="relative hidden flex-1 flex-col justify-between space-y-16 bg-[#1C1A1F] pt-24 pl-12 backdrop-blur-[28px] lg:flex lg:w-[55%]">
        <SignUpCarousel />
        {/* Header */}

        {/* Dashboard Preview Image */}
        <div className="relative flex-1 overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="https://i.ibb.co.com/bgDhb3nW/Dashboard.png"
            alt="Dashboard Preview"
            fill
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
