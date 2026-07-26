import React from "react";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Trophy,
  Award,
  Crown,
  Globe2,
  Settings,
  ChevronDown,
  Bell,
  Star,
  Flame,
  Target,
  ArrowRight,
  Shield,
  Check,
} from "lucide-react";

const GOLD = "#D4AF37";

// ---------- Static data (swap with real data / API later) ----------

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Learning Activities", icon: BookOpen },
  { label: "Challenges", icon: Trophy },
  { label: "Achievements", icon: Award },
  { label: "Manners in the Monarch", icon: Crown },
  { label: "Passport Pals", icon: Globe2 },
];

const stats = [
  { icon: BookOpen, value: "12", label: "Learning Activities" },
  { icon: Trophy, value: "5", label: "Challenges Completed" },
  { icon: Award, value: "8", label: "Achievements Earned" },
  { icon: Flame, value: "7", label: "Day Learning Streak" },
  
];

const featureCards = [
  {
    image: "/book.png",
    title: "Learning Activities",
    desc: "Explore lessons and keep learning new things.",
    cta: "Start Learning",
    enabled: true,
  },
  {
    image: "/trophy.png",
    title: "Challenges",
    desc: "Take on exciting challenges and test your skills.",
    cta: "View Challenges",
    enabled: true,
  },
  {
    image: "/medal.png",
    title: "Achievements",
    desc: "Earn badges and celebrate your progress.",
    cta: "View Achievements",
    enabled: true,
  },
];

const comingSoonCards = [
  {
    image: "/castle.png",
    title: "Manners in the Monarch",
    desc: "Learn kindness, respect, leadership, and royal values.",
  },
  {
    image: "/globe.png",
    title: "Passport Pals",
    desc: "Meet friends from around the world and explore different cultures.",
  },
];

const weekDays = [
  { day: "M", done: true },
  { day: "T", done: true },
  { day: "W", done: true },
  { day: "T", done: true },
  { day: "F", done: true },
  { day: "S", done: true },
  { day: "S", done: true },
];

// ---------- Progress ring ----------

function ProgressRing({ percent = 72 }) {
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#2a2a2a" strokeWidth="10" />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={GOLD}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-white">{percent}%</span>
      </div>
    </div>
  );
}

// ---------- Image frame ----------
// Every image tile now gets the SAME fixed square size, clipped with
// overflow-hidden + object-cover so mismatched image dimensions can't
// blow out the card height, and a subtle dark backing so the square
// edges of the artwork blend into the card instead of looking "boxed in".

function ImageFrame({ src, alt, size = "md" }) {
  const dims =
    size === "lg"
      ? "w-40 h-40 sm:w-48 sm:h-48"
      : "w-28 h-28 sm:w-32 sm:h-32";

  return (
    <div
      className={`relative ${dims}  shrink-0 mx-auto overflow-hidden rounded-xl  flex items-center justify-center group/frame`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full cursor-pointer object-cover transition-transform duration-300 group-hover/frame:scale-105"
      />
    </div>
  );
}

// ---------- Main dashboard ----------

export default function StudentDashboard() {
  // ---------- Reusable pieces ----------
  const user =
    typeof window !== "undefined" && localStorage.getItem("rayamor-user")
      ? JSON.parse(localStorage.getItem("rayamor-user"))
      : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-[#D4AF37]/10 flex flex-col justify-between py-6 px-4 hidden lg:flex">
        <div>
          <div className="px-2 mb-8 text-center">
            
            <h2 className="text-sm font-serif tracking-[0.25em]" style={{ color: GOLD }}>
              RAY AMOR
            </h2>
            <p className="text-[10px] tracking-[0.2em] text-[#D4AF37]/60 mt-1">
              AI MIND ORGANIZING ROUTINE
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 mb-4 text-sm font-medium" style={{ color: GOLD }}>
            <GraduationCap className="w-4 h-4" />
            EDUCATION HUB
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  item.active ? "bg-[#D4AF37]/10 border font-medium" : "text-gray-300 hover:bg-white/5"
                }`}
                style={item.active ? { borderColor: `${GOLD}66`, color: GOLD } : undefined}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-white/5 transition">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <div
            className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border text-sm"
            style={{ borderColor: `${GOLD}33`, color: GOLD }}
          >
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-xs font-semibold">
                A
              </div>
              <span className="flex flex-col leading-tight text-left">
                <span className="text-white text-sm">{user?.name}</span>
                <span className="text-gray-400 text-xs">Student</span>
              </span>
            </span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-end gap-4">
          <button className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            <Bell className="w-5 h-5 text-gray-300" />
            <span
              className="absolute -top-1 -right-1 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: GOLD }}
            >
              3
            </span>
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: `${GOLD}44` }}>
            <Star className="w-4 h-4" style={{ color: GOLD }} />
            <span className="text-sm font-semibold">240</span>
          </div>

          <div className="flex items-center gap-3 pl-3 border-l border-white/10">
            <div className="w-9 h-9 rounded-full  flex items-center justify-center text-[#D4AF37] font-semibold overflow-hidden">
              <img src="/manavtar.png" alt="Avatar" className="h-9 w-9" />
            </div>
            <div className="text-sm">
              <p className="font-medium leading-tight">{user?.name}</p>
              <p className="text-gray-400 text-xs leading-tight">Student</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left + center column */}
          <div className="xl:col-span-2 space-y-6">
            {/* Hero banner with background image */}
            <div
              className="relative overflow-hidden rounded-2xl border p-8 min-h-[240px] bg-cover bg-center flex items-center"
              style={{
                borderColor: `${GOLD}33`,
                backgroundImage: `linear-gradient(
  90deg,
  rgba(0,0,0,0.85) 25%,
  rgba(0,0,0,0.2) 70%
), url('/child.png')`,
              }}
            >
              <div className="relative z-10 max-w-md">
                <h2 className="text-3xl font-serif font-bold flex items-center gap-2">
                  Hello, {user?.name} <span>👋</span>
                </h2>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  Let&apos;s learn, grow, and become extraordinary.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/[0.03] border rounded-xl p-4" style={{ borderColor: `${GOLD}1A` }}>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${GOLD}1A` }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white/[0.03] border rounded-xl p-6 flex flex-col
                  items-center text-center transition hover:bg-white/[0.05] h-full"
                  style={{ borderColor: `${GOLD}1A` }}
                >
                  <ImageFrame
                    src={card.image}
                    alt={card.title}
                    size="lg"
                  />

                  <h3 className="font-semibold text-lg mt-5">{card.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed flex-1">{card.desc}</p>
                  <button
                    className="mt-5 flex cursor-pointer items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-black transition hover:opacity-90"
                    style={{ backgroundColor: GOLD }}
                  >
                    {card.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Coming soon cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {comingSoonCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white/[0.03] border rounded-xl p-6 flex items-center gap-5"
                  style={{ borderColor: `${GOLD}1A` }}
                >
                  <ImageFrame src={card.image} alt={card.title} size="md" />

                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{card.desc}</p>
                    <button className="mt-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-gray-300 cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Today's progress */}
            <div
              className="bg-white/[0.03] border rounded-xl p-5 flex flex-col items-center text-center"
              style={{ borderColor: `${GOLD}1A` }}
            >
              <h3 className="font-semibold self-start flex items-center gap-1.5 mb-2" style={{ color: GOLD }}>
                Today&apos;s Progress <Star className="w-3.5 h-3.5" />
              </h3>
              <ProgressRing percent={72} />
              <p className="text-sm text-gray-400 mt-2">Keep it up! You&apos;re doing great.</p>
            </div>

            {/* Daily goal */}
            <div className="bg-white/[0.03] border rounded-xl p-5" style={{ borderColor: `${GOLD}1A` }}>
              <h3 className="font-semibold flex items-center gap-2 mb-3" style={{ color: GOLD }}>
                <Target className="w-4 h-4" />
                Daily Goal
              </h3>
              <p className="text-sm text-gray-300 mb-3">Complete 1 Learning Activity</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "100%", backgroundColor: GOLD }} />
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">1/1</span>
              </div>
            </div>

            {/* Latest achievement */}
            <div className="bg-white/[0.03] border rounded-xl p-5" style={{ borderColor: `${GOLD}1A` }}>
              <h3 className="font-semibold mb-4" style={{ color: GOLD }}>
                Latest Achievement
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37] flex items-center justify-center shrink-0">
                  <Shield className="w-7 h-7 text-black/50" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Quick Learner</p>
                  <p className="text-xs text-gray-400 mt-0.5">Completed 5 activities</p>
                  <p className="text-xs text-gray-400">Keep going!</p>
                </div>
              </div>
            </div>

            {/* Learning streak */}
            <div className="bg-white/[0.03] border rounded-xl p-5" style={{ borderColor: `${GOLD}1A` }}>
              <h3 className="font-semibold mb-3" style={{ color: GOLD }}>
                Learning Streak
              </h3>
              <p className="text-2xl font-bold flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6" style={{ color: GOLD }} />
                7 Days
              </p>
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <span className="text-xs text-gray-400">{d.day}</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: d.done ? GOLD : "#2a2a2a" }}
                    >
                      {d.done && <Check className="w-3.5 h-3.5 text-black" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div
  className="bg-white/[0.03] border rounded-xl p-7"
  style={{ borderColor: `${GOLD}1A` }}
>
  <h3 className="font-semibold mb-5" style={{ color: GOLD }}>
    Today's Progress
  </h3>

  <div className="space-y-4">
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">Lessons</span>
        <span className="text-white font-medium">3 / 5</span>
      </div>

      <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: "60%", backgroundColor: GOLD }}
        />
      </div>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">Quizzes</span>
        <span className="text-white font-medium">2 / 3</span>
      </div>

      <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: "67%", backgroundColor: GOLD }}
        />
      </div>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">Activities</span>
        <span className="text-white font-medium">4 / 6</span>
      </div>

      <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: "70%", backgroundColor: GOLD }}
        />
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </main>
    </div>
  );
}