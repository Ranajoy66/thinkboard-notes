import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  ShieldCheck,
} from "lucide-react";

import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";
import api from "../lib/axios";
import Reveal from "../components/Reveal";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  /* ================= CHANGE HANDLER ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error once user starts correcting the form
    if (error) {
      setError("");
    }
  };


  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await api.post(
        "/auth/login",
        formData
      );

      login(
        res.data.token,
        res.data.user
      );

      navigate("/dashboard");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Unable to sign in. Please check your credentials."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to your notes"
    >

      <Reveal>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* =====================================================
              ERROR MESSAGE
          ===================================================== */}

          {error && (

            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">

              {error}

            </div>

          )}


          {/* =====================================================
              EMAIL
          ===================================================== */}

          <div>

            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Email Address
            </label>


            <div className="relative group">

              <Mail
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  w-5
                  h-5
                  text-slate-500
                  transition-colors
                  group-focus-within:text-pink-400
                "
              />


              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                disabled={loading}
                className="
                  w-full
                  h-14
                  pl-12
                  pr-4
                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  text-white
                  placeholder:text-slate-600

                  outline-none

                  transition-all
                  duration-200

                  hover:border-white/20

                  focus:border-pink-500/60
                  focus:ring-2
                  focus:ring-pink-500/10

                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              />

            </div>

          </div>


          {/* =====================================================
              PASSWORD
          ===================================================== */}

          <div>

            <div className="flex items-center justify-between mb-2">

              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-300"
              >
                Password
              </label>


              {/* Forgot password */}

              <button
                type="button"
                className="
                  text-xs
                  text-pink-400
                  hover:text-pink-300
                  transition
                "
              >
                Forgot password?
              </button>

            </div>


            <div className="relative group">

              <Lock
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  w-5
                  h-5
                  text-slate-500
                  transition-colors
                  group-focus-within:text-violet-400
                "
              />


              <input
                id="password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                disabled={loading}
                className="
                  w-full
                  h-14
                  pl-12
                  pr-12
                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  text-white
                  placeholder:text-slate-600

                  outline-none

                  transition-all
                  duration-200

                  hover:border-white/20

                  focus:border-violet-500/60
                  focus:ring-2
                  focus:ring-violet-500/10

                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              />


              {/* Eye toggle */}

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                disabled={loading}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2

                  text-slate-500
                  hover:text-white

                  transition

                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
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


          {/* =====================================================
              SECURITY INFO
          ===================================================== */}

          <div className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl

            border
            border-white/5

            bg-white/[0.02]

            text-xs
            text-slate-500
          ">

            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />

            <span>
              Your account and notes are protected.
            </span>

          </div>


          {/* =====================================================
              SUBMIT
          ===================================================== */}

          <button
            type="submit"
            disabled={loading}
            className="
              group

              w-full
              h-14

              flex
              items-center
              justify-center
              gap-2

              rounded-xl

              bg-gradient-to-r
              from-pink-500
              to-violet-500

              text-white
              font-semibold

              shadow-lg
              shadow-violet-500/20

              hover:shadow-violet-500/30
              hover:scale-[1.01]

              active:scale-[0.99]

              transition-all
              duration-200

              disabled:opacity-60
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >

            {loading ? (

              <>
                <Loader2 className="w-5 h-5 animate-spin" />

                Signing in...
              </>

            ) : (

              <>
                Sign In

                <ArrowRight
                  className="
                    w-4
                    h-4

                    group-hover:translate-x-1

                    transition-transform
                  "
                />

              </>

            )}

          </button>


          {/* =====================================================
              REGISTER
          ===================================================== */}

          <div className="
            pt-3
            text-center
            text-sm
            text-slate-500
          ">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                font-medium
                text-pink-400
                hover:text-pink-300
                transition
              "
            >
              Create one
            </Link>

          </div>

        </form>

      </Reveal>

    </AuthLayout>
  );
};

export default LoginPage;