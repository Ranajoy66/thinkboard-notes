import { Link } from "react-router-dom";
import {
    FileText,
    Lightbulb,
    Search,
    ShieldCheck,
    Zap,
    Rocket,
    ArrowRight
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const Features = () => {

    const features = [
        {
            icon: FileText,
            title: "Create Notes",
            desc: "Capture thoughts, reminders, project ideas and everything worth remembering.",
            color: "pink"
        },
        {
            icon: Lightbulb,
            title: "Stay Organized",
            desc: "Keep your notes neatly organized without unnecessary complexity.",
            color: "violet"
        },
        {
            icon: Search,
            title: "Quick Search",
            desc: "Find important notes instantly whenever you need them.",
            color: "blue"
        },
        {
            icon: ShieldCheck,
            title: "Private Workspace",
            desc: "Your notes stay securely inside your account.",
            color: "emerald"
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            desc: "A distraction-free experience built for speed and focus.",
            color: "amber"
        },
        {
            icon: Rocket,
            title: "Boost Productivity",
            desc: "Turn scattered thoughts into meaningful work.",
            color: "cyan"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-20 sm:py-24">

                <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[130px]" />

                <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-pink-500/15 blur-[120px]" />

                <Reveal>

                    <div className="relative max-w-5xl mx-auto px-5 sm:px-6 text-center">

                        <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-pink-400">
                            THINKBOARD FEATURES
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold">
                            Everything you need to
                            <span className="block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                                organize your thoughts
                            </span>
                        </h1>

                        <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                            ThinkBoard gives you a clean workspace to capture,
                            organize and revisit the ideas that matter.
                        </p>

                    </div>

                </Reveal>

            </section>


            {/* Feature Cards */}

            <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-24">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <Reveal key={index} delay={index * 120}>

                                <div className="group h-full p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all">

                                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-6`}>

                                        <Icon className={`w-6 h-6 text-${feature.color}-400`} />

                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-slate-400 leading-relaxed">
                                        {feature.desc}
                                    </p>

                                </div>

                            </Reveal>

                        );
                    })}

                </div>

            </section>


            {/* CTA */}

            <Reveal>

                <section className="px-5 sm:px-6 pb-24">

                    <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-blue-500/10 px-8 py-20 text-center">

                        <h2 className="text-3xl sm:text-5xl font-bold">
                            Ready to organize your thoughts?
                        </h2>

                        <p className="mt-5 text-slate-400">
                            Start your ThinkBoard workspace today.
                        </p>

                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 transition"
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

export default Features;