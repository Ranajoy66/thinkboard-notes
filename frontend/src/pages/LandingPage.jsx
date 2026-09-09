import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import {
    ArrowRight,
    Check,
    FileText,
    Lightbulb,
    Lock,
    Menu,
    Rocket,
    X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

import Footer from "../components/Footer";
import Reveal from "../components/Reveal";


const LandingPage = () => {

    const { isAuthenticated } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);


    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }


    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                    <div className="h-18 sm:h-20 flex items-center justify-between">

                        {/* ================= LOGO ================= */}

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="flex items-center gap-3 shrink-0"
                        >

                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/20">

                                <FileText className="w-5 h-5 text-white" />

                            </div>

                            <span className="text-lg sm:text-xl font-bold tracking-tight">
                                ThinkBoard
                            </span>

                        </Link>


                        {/* ================= DESKTOP NAV ================= */}

                        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-sm text-slate-300">

                            <Link
                                to="/features"
                                className="hover:text-white transition"
                            >
                                Features
                            </Link>

                            <Link
                                to="/about"
                                className="hover:text-white transition"
                            >
                                About
                            </Link>

                            <Link
                                to="/why-thinkboard"
                                className="hover:text-white transition"
                            >
                                Why ThinkBoard?
                            </Link>

                        </div>


                        {/* ================= DESKTOP AUTH ================= */}

                        <div className="hidden sm:flex items-center gap-3">

                            <Link
                                to="/login"
                                className="px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:scale-[1.03] transition"
                            >
                                Get Started
                            </Link>

                        </div>


                        {/* ================= MOBILE MENU BUTTON ================= */}

                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="sm:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/5 transition"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >

                            {menuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}

                        </button>

                    </div>


                    {/* ================= MOBILE MENU ================= */}

                    <div
                        className={`sm:hidden overflow-hidden transition-all duration-300 ${
                            menuOpen
                                ? "max-h-96 opacity-100 pb-5"
                                : "max-h-0 opacity-0"
                        }`}
                    >

                        <div className="pt-4 border-t border-white/10 flex flex-col gap-2">

                            <a
                                href="#features"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                            >
                                Features
                            </a>

                            <a
                                href="#about"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                            >
                                About
                            </a>

                            <a
                                href="#why"
                                onClick={closeMenu}
                                className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                            >
                                Why ThinkBoard?
                            </a>


                            <div className="grid grid-cols-2 gap-3 pt-3">

                                <Link
                                    to="/login"
                                    onClick={closeMenu}
                                    className="py-3 rounded-xl border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={closeMenu}
                                    className="py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-center text-sm font-semibold"
                                >
                                    Get Started
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </nav>


            {/* =====================================================
                HERO
            ===================================================== */}

            <main>

                <section className="relative min-h-[calc(100vh-72px)] flex items-center py-20 sm:py-24 lg:py-0">

                    {/* Background effects */}

                    <div className="absolute inset-0 overflow-hidden pointer-events-none">

                        <div className="absolute -top-32 -left-32 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-pink-500/20 blur-[100px] sm:blur-[120px]" />

                        <div className="absolute top-1/4 -right-32 w-80 sm:w-[600px] h-80 sm:h-[600px] rounded-full bg-violet-600/20 blur-[110px] sm:blur-[140px]" />

                        <div className="absolute bottom-0 left-1/3 w-72 sm:w-[400px] h-60 sm:h-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

                    </div>


                    {/* Grid */}

                    <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">

                        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">


                            {/* ================= HERO CONTENT ================= */}

                            <Reveal direction="left">

                                <div className="max-w-2xl">

                                    {/* Badge */}

                                    <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-slate-300">

                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                                        Your ideas. Your space. Your board.

                                    </div>


                                    {/* Heading */}

                                    <h1 className="mt-6 sm:mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">

                                        Think clearly.

                                        <br />

                                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">

                                            Create freely.

                                        </span>

                                    </h1>


                                    {/* Description */}

                                    <p className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">

                                        A simple and secure place to capture
                                        your thoughts, organize your tasks,
                                        and turn scattered ideas into
                                        meaningful work.

                                    </p>


                                    {/* CTA */}

                                    <div className="mt-8 sm:mt-9 flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4">

                                        <Link
                                            to="/register"
                                            className="group px-6 sm:px-7 py-3.5 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 transition flex items-center justify-center gap-2"
                                        >

                                            Start taking notes

                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />

                                        </Link>


                                        <Link
                                            to="/login"
                                            className="px-6 sm:px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold transition text-center"
                                        >
                                            Sign in
                                        </Link>

                                    </div>


                                    {/* Trust */}

                                    <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">

                                        <div className="flex items-center gap-2">

                                            <Check className="w-4 h-4 text-emerald-400" />

                                            Simple to use

                                        </div>


                                        <div className="flex items-center gap-2">

                                            <Check className="w-4 h-4 text-emerald-400" />

                                            Secure

                                        </div>


                                        <div className="flex items-center gap-2">

                                            <Check className="w-4 h-4 text-emerald-400" />

                                            Always organized

                                        </div>

                                    </div>

                                </div>

                            </Reveal>


                            {/* =================================================
                                DASHBOARD MOCKUP
                            ================================================= */}

                            <Reveal
                                direction="right"
                                delay={150}
                            >

                                <div className="relative">

                                    {/* Glow */}

                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 blur-3xl" />


                                    <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/40 overflow-hidden">

                                        {/* Browser header */}

                                        <div className="h-11 sm:h-12 px-4 sm:px-5 border-b border-white/10 flex items-center justify-between">

                                            <div className="flex gap-1.5 sm:gap-2">

                                                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400/80" />

                                                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400/80" />

                                                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400/80" />

                                            </div>

                                            <div className="text-[10px] sm:text-xs text-slate-500">
                                                ThinkBoard
                                            </div>

                                            <div className="w-5" />

                                        </div>


                                        {/* Dashboard */}

                                        <div className="p-4 sm:p-6">

                                            <div className="flex justify-between items-center mb-5 sm:mb-6">

                                                <div>

                                                    <p className="text-[10px] sm:text-xs text-slate-500">
                                                        MY WORKSPACE
                                                    </p>

                                                    <h3 className="text-lg sm:text-xl font-semibold mt-1">
                                                        My Notes
                                                    </h3>

                                                </div>


                                                <button className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-lg">
                                                    +
                                                </button>

                                            </div>


                                            <div className="grid grid-cols-2 gap-3 sm:gap-4">


                                                {/* Note 1 */}

                                                <div className="p-3.5 sm:p-5 rounded-xl bg-pink-500/10 border border-pink-400/10">

                                                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-pink-500/20 flex items-center justify-center mb-3 sm:mb-4">

                                                        <FileText className="w-4 h-4 text-pink-400" />

                                                    </div>

                                                    <h4 className="text-sm sm:text-base font-semibold">
                                                        Project Ideas
                                                    </h4>

                                                    <p className="text-[10px] sm:text-xs text-slate-500 mt-2 leading-relaxed">
                                                        Ideas for my next project
                                                        and things I want to build.
                                                    </p>

                                                </div>


                                                {/* Note 2 */}

                                                <div className="p-3.5 sm:p-5 rounded-xl bg-violet-500/10 border border-violet-400/10">

                                                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-violet-500/20 flex items-center justify-center mb-3 sm:mb-4">

                                                        <Lightbulb className="w-4 h-4 text-violet-400" />

                                                    </div>

                                                    <h4 className="text-sm sm:text-base font-semibold">
                                                        Learning
                                                    </h4>

                                                    <p className="text-[10px] sm:text-xs text-slate-500 mt-2 leading-relaxed">
                                                        Concepts and resources to
                                                        explore later.
                                                    </p>

                                                </div>


                                                {/* Note 3 */}

                                                <div className="p-3.5 sm:p-5 rounded-xl bg-blue-500/10 border border-blue-400/10">

                                                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">

                                                        <Rocket className="w-4 h-4 text-blue-400" />

                                                    </div>

                                                    <h4 className="text-sm sm:text-base font-semibold">
                                                        Goals
                                                    </h4>

                                                    <p className="text-[10px] sm:text-xs text-slate-500 mt-2 leading-relaxed">
                                                        Things I want to accomplish
                                                        this month.
                                                    </p>

                                                </div>


                                                {/* Note 4 */}

                                                <div className="p-3.5 sm:p-5 rounded-xl bg-emerald-500/10 border border-emerald-400/10">

                                                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3 sm:mb-4">

                                                        <Check className="w-4 h-4 text-emerald-400" />

                                                    </div>

                                                    <h4 className="text-sm sm:text-base font-semibold">
                                                        Tasks
                                                    </h4>

                                                    <p className="text-[10px] sm:text-xs text-slate-500 mt-2 leading-relaxed">
                                                        Important tasks and
                                                        reminders.
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Reveal>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    QUOTE
                ===================================================== */}

                <Reveal>

                    <section
                        id="quote"
                        className="relative border-y border-white/10 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10"
                    >

                        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-20 sm:py-24 lg:py-28 text-center">

                            <div className="text-5xl sm:text-6xl text-white/20 mb-3">
                                "
                            </div>

                            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-relaxed">

                                Ideas become powerful when you give them

                                <span className="text-pink-400">
                                    {" "}a place to grow.
                                </span>

                            </blockquote>

                            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-500">
                                — The ThinkBoard philosophy
                            </p>

                        </div>

                    </section>

                </Reveal>


                {/* =====================================================
                    FEATURES
                ===================================================== */}

                <section
                    id="features"
                    className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28"
                >

                    <Reveal>

                        <div className="text-center max-w-2xl mx-auto">

                            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-pink-400">
                                Everything in one place
                            </p>

                            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
                                Built for your thoughts
                            </h2>

                            <p className="mt-4 sm:mt-5 text-slate-400 text-base sm:text-lg">
                                ThinkBoard keeps your notes organized
                                without getting in the way of your creativity.
                            </p>

                        </div>

                    </Reveal>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">


                        {/* Feature 1 */}

                        <Reveal delay={0}>

                            <div className="h-full group p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300">

                                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5 sm:mb-6">

                                    <FileText className="w-5 sm:w-6 h-5 sm:h-6" />

                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Capture Ideas
                                </h3>

                                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                                    Quickly write down ideas, thoughts,
                                    reminders, and everything else worth
                                    remembering.
                                </p>

                            </div>

                        </Reveal>


                        {/* Feature 2 */}

                        <Reveal delay={120}>

                            <div className="h-full group p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300">

                                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-5 sm:mb-6">

                                    <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6" />

                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Stay Organized
                                </h3>

                                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                                    Keep your thoughts organized and find
                                    exactly what you need without unnecessary
                                    complexity.
                                </p>

                            </div>

                        </Reveal>


                        {/* Feature 3 */}

                        <Reveal delay={240}>

                            <div className="h-full group p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">

                                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 sm:mb-6">

                                    <Lock className="w-5 sm:w-6 h-5 sm:h-6" />

                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold">
                                    Keep It Private
                                </h3>

                                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                                    Your personal notes stay in your account,
                                    giving you a private space for your thoughts.
                                </p>

                            </div>

                        </Reveal>

                    </div>

                </section>


                {/* =====================================================
                    WHY THINKBOARD
                ===================================================== */}

                <section
                    id="why"
                    className="border-y border-white/10 bg-white/[0.015]"
                >

                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


                            <Reveal direction="left">

                                <div>

                                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-400">
                                        Why ThinkBoard?
                                    </p>

                                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                        Less clutter.
                                        <br />
                                        <span className="text-violet-400">
                                            More thinking.
                                        </span>
                                    </h2>

                                    <p className="mt-5 text-slate-400 text-base sm:text-lg leading-relaxed">
                                        You shouldn't need to fight with your
                                        note-taking app just to write something
                                        down. ThinkBoard is designed to stay
                                        simple, focused, and out of your way.
                                    </p>

                                </div>

                            </Reveal>


                            <div className="space-y-4">

                                <Reveal direction="right" delay={0}>

                                    <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex gap-4">

                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">

                                            <Check className="w-5 h-5 text-pink-400" />

                                        </div>

                                        <div>

                                            <h3 className="font-semibold">
                                                Simple by design
                                            </h3>

                                            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                                                No unnecessary features or
                                                complicated workflows.
                                            </p>

                                        </div>

                                    </div>

                                </Reveal>


                                <Reveal direction="right" delay={120}>

                                    <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex gap-4">

                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">

                                            <Lock className="w-5 h-5 text-violet-400" />

                                        </div>

                                        <div>

                                            <h3 className="font-semibold">
                                                Your private workspace
                                            </h3>

                                            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                                                Your notes belong to you and
                                                stay inside your account.
                                            </p>

                                        </div>

                                    </div>

                                </Reveal>


                                <Reveal direction="right" delay={240}>

                                    <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex gap-4">

                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">

                                            <Rocket className="w-5 h-5 text-blue-400" />

                                        </div>

                                        <div>

                                            <h3 className="font-semibold">
                                                Built to keep you moving
                                            </h3>

                                            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                                                Capture an idea quickly and
                                                get back to what matters.
                                            </p>

                                        </div>

                                    </div>

                                </Reveal>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ABOUT / CTA
                ===================================================== */}

                <section
                    id="about"
                    className="px-5 sm:px-6 py-20 sm:py-24 lg:py-28"
                >

                    <Reveal>

                        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/20 via-violet-500/20 to-blue-500/20">

                            <div className="absolute -top-32 -right-32 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-violet-500/20 blur-3xl" />

                            <div className="absolute -bottom-32 -left-32 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-pink-500/20 blur-3xl" />


                            <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 text-center">

                                <p className="text-sm font-medium text-pink-300">
                                    START WITH ONE IDEA
                                </p>

                                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">

                                    Your next great idea

                                    <br />

                                    starts with a note.

                                </h2>

                                <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">

                                    Create your free ThinkBoard account and
                                    start turning your thoughts into something
                                    meaningful.

                                </p>


                                <Link
                                    to="/register"
                                    className="inline-flex items-center gap-2 mt-8 px-7 sm:px-8 py-3.5 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 hover:scale-[1.02] transition"
                                >

                                    Create your account

                                    <ArrowRight className="w-4 h-4" />

                                </Link>

                            </div>

                        </div>

                    </Reveal>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </div>
    );
};

export default LandingPage;