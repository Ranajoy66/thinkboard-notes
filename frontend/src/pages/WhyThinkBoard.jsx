import { Link } from "react-router-dom";
import {
    CheckCircle,
    ArrowRight,
    Sparkles,
    Lock,
    Rocket
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const WhyThinkBoard = () => {

    const reasons = [
        {
            icon: Sparkles,
            title: "Simple by Design",
            desc: "No unnecessary complexity."
        },
        {
            icon: Lock,
            title: "Private Workspace",
            desc: "Your notes stay inside your account."
        },
        {
            icon: Rocket,
            title: "Built for Productivity",
            desc: "Capture ideas and keep moving."
        },
        {
            icon: CheckCircle,
            title: "Focused Experience",
            desc: "Write first. Everything else comes second."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-20 sm:py-24">

                <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[140px]" />

                <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

                <Reveal>

                    <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">

                        <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-pink-400">
                            WHY THINKBOARD?
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold">
                            Because your thoughts
                            <span className="block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                                deserve a home.
                            </span>
                        </h1>

                        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
                            ThinkBoard creates a calm, organized space where
                            your ideas can take shape.
                        </p>

                    </div>

                </Reveal>

            </section>


            {/* Reasons */}

            <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-20">

                <div className="grid sm:grid-cols-2 gap-6">

                    {reasons.map((reason, i) => {

                        const Icon = reason.icon;

                        return (

                            <Reveal key={i} delay={i * 120}>

                                <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all">

                                    <Icon className="w-10 h-10 text-pink-400" />

                                    <h3 className="mt-5 text-xl font-semibold">
                                        {reason.title}
                                    </h3>

                                    <p className="mt-3 text-slate-400">
                                        {reason.desc}
                                    </p>

                                </div>

                            </Reveal>

                        );
                    })}

                </div>

            </section>


            {/* Quote */}

            <Reveal>

                <section className="border-y border-white/10 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10">

                    <div className="max-w-4xl mx-auto px-5 py-20 text-center">

                        <div className="text-5xl text-white/20">“</div>

                        <blockquote className="mt-4 text-3xl sm:text-4xl font-semibold leading-relaxed">

                            Don't let good ideas disappear.

                            <span className="text-violet-400">
                                {" "}Write them down.
                            </span>

                        </blockquote>

                    </div>

                </section>

            </Reveal>


            {/* Comparison */}

            <section className="max-w-6xl mx-auto px-5 sm:px-6 py-20">

                <Reveal>

                    <div className="text-center">

                        <h2 className="text-3xl sm:text-4xl font-bold">
                            The ThinkBoard Difference
                        </h2>

                    </div>

                </Reveal>


                <div className="mt-12 grid md:grid-cols-2 gap-6">

                    <Reveal direction="left">

                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">

                            <h3 className="font-semibold text-slate-300">
                                Without ThinkBoard
                            </h3>

                            <ul className="mt-6 space-y-3 text-slate-400">

                                <li>✕ Scattered notes</li>
                                <li>✕ Forgotten ideas</li>
                                <li>✕ Too much clutter</li>

                            </ul>

                        </div>

                    </Reveal>


                    <Reveal direction="right">

                        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-8">

                            <h3 className="font-semibold text-violet-300">
                                With ThinkBoard
                            </h3>

                            <ul className="mt-6 space-y-3 text-slate-300">

                                <li>✓ One organized workspace</li>
                                <li>✓ Easy access to ideas</li>
                                <li>✓ Simple and focused</li>

                            </ul>

                        </div>

                    </Reveal>

                </div>

            </section>


            {/* CTA */}

            <Reveal>

                <section className="px-5 pb-24">

                    <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/15 via-violet-500/15 to-blue-500/15 px-8 py-20 text-center">

                        <h2 className="text-3xl sm:text-5xl font-bold">
                            Start thinking on paper.
                            <span className="block text-violet-400">
                                Digitally.
                            </span>
                        </h2>

                        <p className="mt-5 text-slate-400">
                            Create your free ThinkBoard account today.
                        </p>

                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-xl bg-white text-slate-950 font-semibold"
                        >

                            Get Started

                            <ArrowRight className="w-4 h-4" />

                        </Link>

                    </div>

                </section>

            </Reveal>

            <Footer />

        </div>
    );
};

export default WhyThinkBoard;