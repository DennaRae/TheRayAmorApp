import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Moon, Compass, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RIGHT_PANEL_ITEMS = [
  { icon: Moon, label: "Evening Reflection" },
  { icon: Compass, label: "Guided Focus" },
  { icon: HeartHandshake, label: "Concierge Support" },
];

export default function LuxuryHeroIntro() {
  const navigate = useNavigate();

  // stage: entering → intro → tour
  const [stage, setStage] = useState("entering");

  useEffect(() => {
    const toIntro = setTimeout(() => setStage("intro"), 1800);
    const toTour = setTimeout(() => setStage("tour"), 4200);
    return () => {
      clearTimeout(toIntro);
      clearTimeout(toTour);
    };
  }, []);

  const handleEnterTour = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative w-full h-screen min-h-[680px] overflow-hidden bg-black select-none">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <motion.img
        src="/background.png"
        alt="Ray Amor Estate"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        animate={{
          scale: stage === "entering" ? 1.12 : 1.04,
        }}
        transition={{
          duration: stage === "entering" ? 1.8 : 2.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* DARK CINEMATIC OVERLAY */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background:
            stage === "entering"
              ? "rgba(0,0,0,0.72)"
              : stage === "intro" || stage === "tour"
              ? "rgba(0,0,0,0.25)"
              : "rgba(0,0,0,0.35)",
        }}
        transition={{ duration: 1.4 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

      {/* GOLDEN LIGHT SWEEP */}
      <AnimatePresence>
        {stage === "entering" && (
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-[35%] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(251,191,36,0.25), rgba(255,230,150,0.5), transparent)",
              filter: "blur(25px)",
              transform: "skewX(-15deg)",
            }}
          />
        )}
      </AnimatePresence>

      {/* GOLD PARTICLES */}
      <AnimatePresence>
        {stage === "entering" && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(28)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-amber-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: "0 0 12px rgba(251,191,36,0.9)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -80 - Math.random() * 100],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  delay: Math.random() * 0.7,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* CINEMATIC CENTER TRANSITION (RA monogram) */}
      <AnimatePresence>
        {stage === "entering" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, filter: "blur(15px)" }}
              animate={{
                scale: [0.5, 1.15, 1],
                opacity: [0, 1, 1],
                filter: "blur(0px)",
              }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif text-amber-200 tracking-[0.2em] drop-shadow-[0_0_30px_rgba(251,191,36,0.7)]"
            >
              RAY AMOR
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BRANDING */}
      <AnimatePresence>
        {(stage === "intro" || stage === "tour") && (
          <motion.div
            initial={{ opacity: 0, y: -35, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-6 md:top-10 inset-x-0 z-20 flex flex-col items-center text-center pointer-events-none"
          >
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.35em" }}
              animate={{ opacity: 1, letterSpacing: "0.15em" }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="text-2xl md:text-4xl font-serif text-[#f4d089] uppercase drop-shadow-[0_2px_12px_rgba(244,208,137,0.45)]"
            >
              Ray Amor
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-sm md:text-xl font-serif text-[#ebd6ad] tracking-wider uppercase mt-1"
            >
              AI Mind Organizing
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="text-sm md:text-xl font-serif text-[#ebd6ad] tracking-wider uppercase"
            >
              Routine
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LUMI CARD */}
      <AnimatePresence>
        {(stage === "intro" || stage === "tour") && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              absolute z-20 pointer-events-auto
              w-[72%] left-[6%]
              md:w-auto md:left-[33%]
              top-[46%] md:top-[40%]
              mt-0 md:mt-24 md:ml-10
              max-w-[230px]
              backdrop-blur-xl
              bg-black/55
              border border-amber-300/30
              rounded-xl
              p-3.5
              shadow-[0_8px_30px_rgba(0,0,0,0.6)]
            "
          >
            <div className="flex gap-1 text-[#f9df9e] font-medium text-sm tracking-wide">
              <span>Hi, I'm Lumi</span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}
                className="text-amber-300 text-xs"
              >
                ✦
              </motion.span>
            </div>

            <div className="text-amber-200/80 text-xs font-light mt-1 leading-snug">
              Your personal concierge throughout the experience.
            </div>

            <div className="mt-2 pt-2 border-t border-amber-200/15 text-stone-200 text-xs leading-snug font-light">
              Welcome to Ray Amor. Enjoy!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          RIGHT SIDE STACK — panel + CTA now live inside ONE
          flex column container so they stack top-to-bottom
          in normal flow. This is what fixes the overlap: the
          button's position is no longer a hardcoded top-[62%]
          fighting against the panel's real rendered height —
          it simply comes after the panel with a gap.
      ====================================================== */}
      <div
        className="
          absolute z-20
          right-4 md:right-14
          top-[14%] md:top-[12%]
          w-[88%] max-w-[300px]
          md:w-[360px] md:max-w-none
          flex flex-col items-stretch gap-5
          max-h-[78vh] overflow-y-auto
          pr-1
          [scrollbar-width:none]
        "
      >
        {/* CINEMATIC TOUR PANEL */}
        <AnimatePresence>
          {(stage === "intro" || stage === "tour") && (
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.94, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative pointer-events-auto"
            >
              {/* Golden glow */}
              <motion.div
                aria-hidden
                className="
                  absolute -inset-8
                  rounded-[40px]
                  pointer-events-none
                  bg-[radial-gradient(circle,rgba(251,191,36,0.18),transparent_65%)]
                  blur-2xl
                "
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.04, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main glass panel */}
              <motion.div
                className="
                  relative overflow-hidden
                  rounded-[26px]
                  border border-amber-200/25
                  bg-black/45
                  backdrop-blur-2xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.65)]
                  p-5 md:p-7
                "
              >
                {/* Moving shine */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-amber-100/10 to-transparent"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                />

                {/* Top gold line */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "70px", opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-4"
                />

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35, duration: 0.7 }}
                  className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-amber-300/80 mb-3"
                >
                  <Sparkles className="w-3 h-3" />
                  Your Ray Amor Journey
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="relative text-xl md:text-2xl font-serif text-[#f8dfaa] leading-tight"
                >
                  Your journey
                  <br />
                  begins here.
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.65, duration: 0.8 }}
                  className="relative mt-3 text-xs md:text-sm leading-relaxed text-stone-300/80 font-light"
                >
                  Step into your personal space where clarity, focus and
                  intention come together.
                </motion.p>

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-amber-300/30 via-amber-200/10 to-transparent" />

                {/* STEP 01 */}
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9, duration: 0.8 }}
                  className="flex gap-3 items-start mb-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-300/30 bg-amber-200/5 shrink-0">
                    <span className="text-[10px] text-amber-300">01</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-serif text-amber-100">
                      Discover your space
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-stone-400">
                      Explore your personalized dashboard and your daily
                      experience.
                    </p>
                  </div>
                </motion.div>

                {/* STEP 02 */}
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.15, duration: 0.8 }}
                  className="flex gap-3 items-start mb-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-300/30 bg-amber-200/5 shrink-0">
                    <span className="text-[10px] text-amber-300">02</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-serif text-amber-100">
                      Meet Lumi
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-stone-400">
                      Your personal concierge will guide you throughout the
                      experience.
                    </p>
                  </div>
                </motion.div>

                {/* STEP 03 */}
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4, duration: 0.8 }}
                  className="flex gap-3 items-start"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-amber-300/30 bg-amber-200/5 shrink-0">
                    <span className="text-[10px] text-amber-300">03</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-serif text-amber-100">
                      Begin your experience
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-stone-400">
                      Enter the mansion and make Ray Amor part of your daily
                      routine.
                    </p>
                  </div>
                </motion.div>

                {/* Bottom message */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 1 }}
                  className="mt-5 pt-3 border-t border-amber-200/10 flex items-center justify-between"
                >
                  <span className="text-[10px] uppercase tracking-[0.18em] text-amber-200/60">
                    Your space awaits
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </motion.div>
                </motion.div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ENTER THE DASHBOARD — now a normal-flow sibling below
            the panel, so it can never overlap it. */}
        <AnimatePresence>
          {stage === "tour" && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center pointer-events-auto"
            >
              {/* Breathing glow ring behind the button */}
              <motion.div
                aria-hidden
                className="absolute -inset-2 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(251,191,36,0.35), transparent 70%)",
                  filter: "blur(10px)",
                }}
                animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.96, 1.05, 0.96] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Idle floating bob */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.button
                  onClick={handleEnterTour}
               
                  whileTap={{ scale: 0.95 }}
                  className="
                    group relative
                    px-6 py-3
                    rounded-full
                    bg-gradient-to-r from-amber-200/20 to-amber-400/10
                    backdrop-blur-xl
                    border border-amber-300/50
                    text-amber-100
                    text-xs md:text-sm
                    tracking-[0.18em]
                    uppercase
                    font-medium
                    shadow-[0_8px_30px_rgba(0,0,0,0.5)]
                    flex items-center gap-2.5
                    overflow-hidden
                    whitespace-nowrap
                  "
                >
                  {/* Traveling shine */}
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Orbiting spark */}
                  <motion.span
                    aria-hidden
                    className="absolute w-1 h-1 rounded-full bg-amber-200 cursor-pointer"
                    style={{ boxShadow: "0 0 8px rgba(251,191,36,0.9)" }}
                    animate={{
                      x: [0, 50, 0, -50, 0],
                      y: [0, -12, 0, 12, 0],
                      opacity: [0, 1, 1, 1, 0],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <Sparkles className="relative w-3.5 h-3.5 text-amber-300" />
                  <span className="relative cursor-pointer">Enter the Dashboard</span>
                  <motion.span
                    className="relative"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FINAL GOLDEN GLOW */}
      <AnimatePresence>
        {stage === "tour" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.35, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
            className="
              absolute inset-0 pointer-events-none
              bg-[radial-gradient(circle_at_75%_75%,rgba(251,191,36,0.18),transparent_40%)]
            "
          />
        )}
      </AnimatePresence>
    </div>
  );
}