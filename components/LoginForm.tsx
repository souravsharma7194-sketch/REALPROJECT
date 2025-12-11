"use client"; 
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full 
          max-w-md 
          bg-white 
          p-8 
          sm:p-10 
          rounded-3xl 
          shadow-xl 
          border border-gray-100 
          flex 
          flex-col 
          gap-6
          animate-[fadeIn_0.6s_ease]
        "
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent text-center">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              p-3 
              border border-gray-300 
              rounded-xl
              text-base
              focus:ring-2 
              focus:ring-blue-400 
              outline-none
              transition
            "
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              p-3 
              border border-gray-300 
              rounded-xl
              text-base
              focus:ring-2 
              focus:ring-blue-400 
              outline-none
              transition
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full 
            bg-blue-600 
            hover:bg-blue-700 
            text-white 
            font-semibold 
            py-3 
            rounded-xl
            text-base 
            transition 
            shadow-md
          "
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
