import { Link } from "react-router-dom";
import { Brain, CheckCircle, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const About = () => {

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-20 sm:py-24">

                <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

                <Reveal>

                    <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">

                        <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-violet-400">
                            ABOUT THINKBOARD
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold">
                            A place where
                            <span className="block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                                ideas grow.
                            </span>
                        </h1>

                        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
                            We believe keeping your thoughts organized should
                            be simple, intuitive and distraction-free.
                        </p>

                    </div>

                </Reveal>

            </section>


            {/* Story */}

            <section className="max-w-6xl mx-auto px-5 sm:px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <Reveal direction="left">

                        <div>

                            <p className="text-sm uppercase tracking-widest text-pink-400 font-semibold">
                                Our Story
                            </p>

                            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                                Give your mind
                                <span className="text-slate-500"> a place to think.</span>
                            </h2>

                            <div className="mt-6 space-y-5 text-slate-400 leading-relaxed">

                                <p>
                                    Every day we collect ideas, reminders,
                                    plans and inspiration.
                                </p>

                                <p>
                                    ThinkBoard helps you keep them together
                                    without overwhelming your workflow.
                                </p>

                                <p>
                                    We focus on simplicity because the best
                                    productivity tools disappear into the
                                    background.
                                </p>

                            </div>

                        </div>

                    </Reveal>


                    <Reveal direction="right">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 relative overflow-hidden">

                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10 blur-3xl" />

                            <div className="relative">

                                <Brain className="w-14 h-14 text-pink-400" />

                                <h3 className="mt-6 text-2xl font-semibold">
                                    Think. Write. Grow.
                                </h3>

                                <p className="mt-4 text-slate-400 leading-relaxed">
                                    A simple workspace that helps your ideas
                                    become meaningful work.
                                </p>

                                <div className="mt-8 space-y-3">

                                    {[
                                        "Simple interface",
                                        "Focused experience",
                                        "Beautiful dark theme"
                                    ].map((item, i) => (

                                        <div key={i} className="flex items-center gap-3">

                                            <CheckCircle className="w-5 h-5 text-emerald-400" />

                                            <span>{item}</span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>


            {/* Quote */}

            <Reveal>

                <section className="border-y border-white/10 bg-white/[0.02]">

                    <div className="max-w-4xl mx-auto px-5 py-20 text-center">

                        <div className="text-5xl text-white/20">"</div>

                        <blockquote className="mt-4 text-3xl sm:text-4xl font-semibold leading-relaxed">

                            Great ideas don't always arrive at the right time.

                            <span className="text-pink-400">
                                {" "}Keep them safe.
                            </span>

                        </blockquote>

                    </div>

                </section>

            </Reveal>


            {/* CTA */}

            <Reveal>

                <section className="py-20 text-center px-5">

                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Give your ideas a home.
                    </h2>

                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 font-semibold"
                    >

                        Create Your ThinkBoard

                        <ArrowRight className="w-4 h-4" />

                    </Link>

                </section>

            </Reveal>

            <Footer />

        </div>
    );
};

export default About;