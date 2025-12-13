"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      alert("Fill all the credentials");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don’t match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5"
    >
      <h2 className="text-3xl font-semibold text-center text-green-600">
        Create Account
      </h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-green-500"
      />

      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-green-500"
      />

      {/* DOB */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">
          Date of Birth
        </label>

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
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
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

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-green-500"
      />

      <input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-green-500"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Sign Up
      </button>

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
