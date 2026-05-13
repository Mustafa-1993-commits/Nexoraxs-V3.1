"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SplashScreen } from "./SplashScreen";
import { CoreIllustration } from "./CoreIllustration";

export default function Hero() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <section
        id="hero"
        className="relative overflow-hidden px-4 py-16 md:px-6 md:py-20 lg:min-h-[calc(100vh-76px)] lg:py-28"
      >
        <div
          className="glow-blob -left-28 top-8 h-72 w-72 bg-blue-500"
          aria-hidden="true"
        />
        <div
          className="glow-blob -bottom-24 right-0 h-80 w-80 bg-purple-500"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: splashDone ? 1 : 0, x: splashDone ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-chip inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-cyan-200">
              // platform
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Business operations, connected by one{" "}
              <span className="gradient-text">modular core</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              NexoraXS is an MVP-stage modular SaaS platform for workspaces,
              shared authentication, app launching, and future business apps
              built around a single platform shell.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#pricing"
                className="btn-primary rounded-2xl px-6 py-3 font-semibold text-white"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/85 transition-colors hover:border-white/25 hover:bg-white/8 hover:text-white"
              >
                See Features
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Modular SaaS architecture",
                "Workspace-based platform",
                "Built for future apps",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: splashDone ? 1 : 0,
              scale: splashDone ? 1 : 0.95,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex md:justify-center lg:justify-end"
          >
            <CoreIllustration />
          </motion.div>
        </div>
      </section>
    </>
  );
}
