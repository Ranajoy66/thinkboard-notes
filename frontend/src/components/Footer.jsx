import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-white/10">

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                <div className="py-12 sm:py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">


                    {/* ================= BRAND ================= */}

                    <div className="lg:col-span-2">

                        <Link
                            to="/"
                            className="flex items-center gap-3 w-fit"
                        >

                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">

                                <FileText className="w-4 h-4" />

                            </div>

                            <span className="font-bold text-lg">
                                ThinkBoard
                            </span>

                        </Link>


                        <p className="mt-4 text-sm text-slate-500 max-w-md leading-relaxed">

                            A simple space to capture your ideas,
                            organize your thoughts, and keep moving
                            forward.

                        </p>

                    </div>


                    {/* ================= LINKS ================= */}

                    <div className="grid grid-cols-2 gap-8 sm:gap-12">

                        {/* Product */}

                        <div>

                            <h4 className="font-semibold text-sm">
                                Product
                            </h4>

                            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

                                <a
                                    href="#features"
                                    className="hover:text-white transition"
                                >
                                    Features
                                </a>

                                <Link
                                    to="/register"
                                    className="hover:text-white transition"
                                >
                                    Get Started
                                </Link>

                                <Link
                                    to="/login"
                                    className="hover:text-white transition"
                                >
                                    Login
                                </Link>

                            </div>

                        </div>


                        {/* ThinkBoard */}

                        <div>

                            <h4 className="font-semibold text-sm">
                                ThinkBoard
                            </h4>

                            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">

                                <a
                                    href="#about"
                                    className="hover:text-white transition"
                                >
                                    About
                                </a>

                                <a
                                    href="#why"
                                    className="hover:text-white transition"
                                >
                                    Why ThinkBoard?
                                </a>

                                <a
                                    href="#quote"
                                    className="hover:text-white transition"
                                >
                                    Philosophy
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM ================= */}

                <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs sm:text-sm text-slate-600">

                    <p>
                        © {new Date().getFullYear()} ThinkBoard. All rights reserved.
                    </p>

                    <p>
                        Built for ideas that matter.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;