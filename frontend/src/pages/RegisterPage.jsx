import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

import Reveal from "../components/Reveal";
import AuthLayout from "../components/AuthLayout";

import api from "../lib/axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      console.log(formData);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start managing your notes today"
    >

      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Full Name */}
          <div>

            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Full Name
            </label>

            <div className="relative">

              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
              />

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 outline-none transition focus:border-pink-500/60 focus:ring-2 focus:ring-pink-500/10 hover:border-white/20"
              />

            </div>

          </div>


          {/* Email */}
          <div>

            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Email Address
            </label>

            <div className="relative">

              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10 hover:border-white/20"
              />

            </div>

          </div>


          {/* Password */}
          <div>

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <div className="relative">

              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
              />


              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="w-full h-14 pl-12 pr-12 rounded-xl border border-white/10 bg-white/[0.04] text-white placeholder:text-slate-600 outline-none transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10 hover:border-white/20"
              />


              {/* Eye Button */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >

                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}

              </button>

            </div>

          </div>


          {/* Terms */}
          <p className="text-xs text-slate-500 leading-relaxed">
            By creating an account, you agree to use ThinkBoard
            responsibly and keep your account credentials secure.
          </p>


          {/* Submit */}
          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.01] active:scale-[0.99] transition"
          >
            Create Account
          </button>


          {/* Login */}
          <div className="pt-3 text-center text-sm text-slate-500">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-medium text-pink-400 hover:text-pink-300 transition"
            >
              Login
            </Link>

          </div>

        </form>
      </Reveal>

    </AuthLayout>
  );
};

export default RegisterPage;