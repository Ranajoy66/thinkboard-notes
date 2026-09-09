import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FileText,
    LogOut,
    Menu,
    UserRound,
    X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);


    const handleLogout = () => {
        logout();
        setMenuOpen(false);
        navigate("/");
    };


    const closeMenu = () => {
        setMenuOpen(false);
    };


    // Get first name
    const firstName = user?.name?.split(" ")[0];


    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* =====================================================
                    TOP NAVBAR
                ===================================================== */}

                <div className="h-16 sm:h-20 flex items-center justify-between">


                    {/* ================= LOGO ================= */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-3 shrink-0"
                    >

                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/20">

                            <FileText className="w-5 h-5 text-white" />

                        </div>

                        <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                            ThinkBoard
                        </span>

                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <div className="hidden md:flex items-center gap-7 lg:gap-8 text-sm">

                        <Link
                            to="/features"
                            className="text-slate-300 hover:text-white transition"
                        >
                            Features
                        </Link>

                        <Link
                            to="/about"
                            className="text-slate-300 hover:text-white transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/why-thinkboard"
                            className="text-slate-300 hover:text-white transition"
                        >
                            Why ThinkBoard?
                        </Link>

                    </div>


                    {/* =================================================
                        DESKTOP AUTH SECTION
                    ================================================= */}

                    <div className="hidden md:flex items-center gap-3">

                        {user ? (

                            <>
                                {/* User */}

                                <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03]">

                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">

                                        <UserRound className="w-4 h-4 text-white" />

                                    </div>

                                    <div className="leading-tight">

                                        <p className="text-xs text-slate-500">
                                            Welcome
                                        </p>

                                        <p className="text-sm font-medium text-white">
                                            {firstName}
                                        </p>

                                    </div>

                                </div>


                                {/* Logout */}

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition"
                                >

                                    <LogOut className="w-4 h-4" />

                                    Logout

                                </button>
                            </>

                        ) : (

                            <>
                                {/* Login */}

                                <Link
                                    to="/login"
                                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition"
                                >
                                    Login
                                </Link>


                                {/* Register */}

                                <Link
                                    to="/register"
                                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:scale-[1.03] transition"
                                >
                                    Get Started
                                </Link>
                            </>

                        )}

                    </div>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/5 transition"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                    >

                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}

                    </button>

                </div>


                {/* =====================================================
                    MOBILE MENU
                ===================================================== */}

                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                        menuOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >

                    <div className="pb-5 pt-3 border-t border-white/10">

                        {/* ================= NAV LINKS ================= */}

                        <div className="flex flex-col gap-1">

                            <Link
                                to="/features"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                            >
                                Features
                            </Link>

                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                            >
                                About
                            </Link>

                            <Link
                                to="/why-thinkboard"
                                onClick={closeMenu}
                                className="px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                            >
                                Why ThinkBoard?
                            </Link>

                        </div>


                        {/* =================================================
                            MOBILE AUTH
                        ================================================= */}

                        <div className="mt-4 pt-4 border-t border-white/10">

                            {user ? (

                                <div className="space-y-3">

                                    {/* ================= USER INFO ================= */}

                                    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03]">

                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shrink-0">

                                            <UserRound className="w-5 h-5 text-white" />

                                        </div>

                                        <div className="leading-tight">

                                            <p className="text-xs text-slate-500">
                                                Welcome
                                            </p>

                                            <p className="text-sm font-semibold text-white mt-0.5">
                                                {firstName}
                                            </p>

                                        </div>

                                    </div>


                                    {/* ================= LOGOUT ================= */}

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition"
                                    >

                                        <LogOut className="w-4 h-4" />

                                        Logout

                                    </button>

                                </div>

                            ) : (

                                <div className="grid grid-cols-2 gap-3">

                                    {/* Login */}

                                    <Link
                                        to="/login"
                                        onClick={closeMenu}
                                        className="flex items-center justify-center px-4 py-3 rounded-xl border border-white/10 text-sm font-medium text-slate-200 hover:bg-white/5 transition"
                                    >
                                        Login
                                    </Link>


                                    {/* Register */}

                                    <Link
                                        to="/register"
                                        onClick={closeMenu}
                                        className="flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-violet-500/20"
                                    >
                                        Get Started
                                    </Link>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;