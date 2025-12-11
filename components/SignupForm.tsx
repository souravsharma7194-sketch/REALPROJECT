"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupForm: React.FC = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !firstName ||
      !surname ||
      !email ||
      !password ||
      !confirmPassword ||
      !day ||
      !month ||
      !year
    ) {
      alert("fill all the credentials");
      return;
    }

    if (password !== confirmPassword) {
      alert("passwords doesnt match");
      return;
    }

    router.push("/login");




    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5"
    >
      <h2 className="text-3xl font-semibold text-center text-green-600">
        Create Account
      </h2>

      {/* First Name */}
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />

      {/* Surname */}
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />

      {/* DOB */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Date of Birth</label>

        <div className="grid grid-cols-3 gap-2">
          {/* Day */}
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Month */}
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
          >
            <option value="">Month</option>
            {[
              "Jan","Feb","Mar","Apr","May","Jun",
              "Jul","Aug","Sep","Oct","Nov","Dec",
            ].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* Year */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
          >
            <option value="">Year</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={2025 - i} value={2025 - i}>
                {2025 - i}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Sign Up
      </button>

      {/* Login Link */}
      <p className="text-xs text-center text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="text-blue-600 font-medium hover:underline"
        >
          Log in
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
