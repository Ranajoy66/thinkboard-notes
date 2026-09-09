import { Link } from "react-router-dom";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* ================= NAVBAR ================= */}
            <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="h-20 flex items-center justify-between">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-3"
                        >

                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/20">

                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 20h9"
                                    />

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 3.5a2.121 2.121 0 013 3L8 18l-4 1 1-4 11.5-11.5z"
                                    />
                                </svg>

                            </div>

                            <span className="text-xl font-bold tracking-tight">
                                ThinkBoard
                            </span>

                        </Link>


                        {/* Back Home */}
                        <Link
                            to="/"
                            className="
                            group relative inline-flex items-center gap-2
                            overflow-hidden rounded-lg
                            border border-slate-700
                            px-3 py-2
                            text-sm text-slate-400
                            transition-all duration-300
                            hover:border-slate-400
                            hover:text-white
                            hover:shadow-[0_0_20px_rgba(148,163,184,0.18)]
                            "
                        >
                            {/* Hover background */}
                            <span
                                className="
                                absolute inset-0
                                -translate-x-full
                                bg-gradient-to-r from-slate-800/0 via-slate-700/30 to-slate-800/0
                                transition-transform duration-500
                                group-hover:translate-x-full
                                "
                            />

                            <ArrowLeft
                                size={17}
                                className="
                                relative z-10
                                transition-transform duration-300
                                group-hover:-translate-x-1
                                "
                            />

                            <span className="relative z-10">
                                Home
                            </span>
                        </Link>

                    </div>

                </div>
            </nav>


            {/* ================= MAIN ================= */}
            <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16 overflow-hidden">

                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">

                    <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/15 blur-[130px]" />

                    <div className="absolute top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[130px]" />

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-blue-500/10 blur-[120px]" />

                </div>


                <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">


                    {/* ================= LEFT CONTENT ================= */}
                    <div className="hidden lg:block">

                        <div className="max-w-lg">

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300">

                                <Sparkles className="w-4 h-4 text-pink-400" />

                                Your ideas deserve a home

                            </div>


                            <h1 className="mt-7 text-5xl xl:text-6xl font-bold tracking-tight leading-[1.05]">

                                Think clearly.
                                <br />

                                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                                    Create freely.
                                </span>

                            </h1>


                            <p className="mt-7 text-lg text-slate-400 leading-relaxed">
                                Capture your thoughts, organize your ideas,
                                and keep everything important in one
                                simple workspace.
                            </p>


                            {/* Benefits */}
                            <div className="mt-10 space-y-5">

                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                        <Check className="w-5 h-5 text-emerald-400" />
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            Simple and organized
                                        </p>

                                        <p className="text-sm text-slate-500">
                                            Keep your thoughts in one place.
                                        </p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-violet-400" />
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            Private workspace
                                        </p>

                                        <p className="text-sm text-slate-500">
                                            Your notes stay in your account.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= AUTH CARD ================= */}
                    <div className="w-full max-w-md mx-auto">

                        <div className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/30 p-7 sm:p-9">

                            {/* Mobile Logo */}
                            <div className="lg:hidden flex justify-center mb-7">

                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">

                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 20h9"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 3.5a2.121 2.121 0 013 3L8 18l-4 1 1-4 11.5-11.5z"
                                        />
                                    </svg>

                                </div>

                            </div>


                            {/* Heading */}
                            <div className="text-center">

                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                    {title}
                                </h2>

                                <p className="mt-3 text-slate-400">
                                    {subtitle}
                                </p>

                            </div>


                            {/* Form */}
                            <div className="mt-8">
                                {children}
                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default AuthLayout;