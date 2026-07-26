import React from "react";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Monitor,
  FileText,
  ClipboardCheck,
  Users,
  Mail,
  Calendar,
  Settings,
  ChevronDown,
  Bell,
  Star,
  Clock,
  ArrowRight,
  FlaskConical,
  Landmark,
  
  UploadCloud,
  MessageSquare,
  CalendarCheck,
  Crown,
  Building2 ,
  Sparkles,
} from "lucide-react";

// ---------- Static data (swap with real data / API later) ----------

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  {label:"Organization", icon: Building2},
  { label: "Classroom Resources", icon: BookOpen },
  { label: "Digital Resources", icon: Monitor },
  { label: "Lesson Materials", icon: FileText },
  { label: "Assignments & Activities", icon: ClipboardCheck },
  { label: "Student Progress", icon: Users },
  { label: "Messages", icon: Mail },
  { label: "Calendar", icon: Calendar },
];

const stats = [
 
  {
    icon: Users,
    value: "24",
    label: "Total Students",
    sub: "↑ 4 this month",
    subColor: "text-emerald-400",
  },
  {
    icon: BookOpen,
    value: "8",
    label: "Active Classes",
    sub: "View all",
    subColor: "text-[#D4AF37]",
  },
  {
    icon: ClipboardCheck,
    value: "15",
    label: "Assignments",
    sub: "3 Pending Review",
    subColor: "text-[#D4AF37]",
  },
  {
    icon: Star,
    value: "92%",
    label: "Class Progress",
    sub: "↑ 6% this month",
    subColor: "text-emerald-400",
  },
];

const teachingTools = [
  {
    icon: Building2 ,
    title: "Organization",
    desc: "Access and manage teaching resources.",
    cta: "Explore",
  },
  {
    icon: BookOpen,
    title: "Classroom Resources",
    desc: "Access and manage teaching resources.",
    cta: "Explore",
  },
  {
    icon: Monitor,
    title: "Digital Resources",
    desc: "Explore digital content and learning tools.",
    cta: "Explore",
  },
  {
    icon: FileText,
    title: "Lesson Materials",
    desc: "Create and organize your lesson plans.",
    cta: "Create New",
  },
  {
    icon: ClipboardCheck,
    title: "Assignments & Activities",
    desc: "Create assignments and engaging activities.",
    cta: "Manage",
  },
  {
    icon: Users,
    title: "Student Progress",
    desc: "Track and analyze student performance.",
    cta: "View Progress",
  },
];

const upcomingClasses = [
  {
    icon: BookOpen,
    iconBg: "bg-purple-500/20 text-purple-300",
    title: "Grade 5A - Mathematics",
    subject: "Fractions and Decimals",
    time: "09:00 AM",
  },
  {
    icon: FlaskConical,
    iconBg: "bg-emerald-500/20 text-emerald-300",
    title: "Grade 6B - Science",
    subject: "Life Cycles in Nature",
    time: "11:00 AM",
  },
  {
    icon: Landmark,
    iconBg: "bg-amber-500/20 text-[#D4AF37]",
    title: "Grade 7C - Social Studies",
    subject: "The Ancient Civilizations",
    time: "01:30 PM",
  },
];

const recentActivity = [
  {
    icon: ClipboardCheck,
    text: 'You assigned "Math Worksheet 1" to Grade 5A',
    time: "2 hours ago",
  },
  {
    icon: Users,
    text: 'John Doe submitted "Science Project"',
    time: "5 hours ago",
  },
  {
    icon: FileText,
    text: 'You created a new lesson "Fractions and Decimals"',
    time: "1 day ago",
  },
  
  
];

const quickActions = [
  { icon: ClipboardCheck, label: "Create Assignment" },
  { icon: UploadCloud, label: "Upload Resource" },
  { icon: CalendarCheck, label: "Take Attendance" },
  { icon: MessageSquare, label: "Send Message" },
];

const progressBreakdown = [
  { label: "Completed", value: "92%", color: "bg-emerald-500", dot: "bg-emerald-400" },
  { label: "In Progress", value: "6%", color: "bg-amber-500", dot: "bg-amber-400" },
  { label: "Not Started", value: "2%", color: "bg-red-500", dot: "bg-red-400" },
];

// ---------- Reusable pieces ----------
const user = JSON.parse(localStorage.getItem("rayamor-user"));
function ProgressRing({ percent = 92 }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#3f3f46"
          strokeWidth="12"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.94}
          strokeLinecap="round"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.98}
          strokeLinecap="round"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-white">{percent}%</span>
        <span className="text-xs text-gray-400 mt-1">Overall Progress</span>
      </div>
    </div>
  );
}

// ---------- Main dashboard ----------

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-[#D4AF37]/20 flex flex-col justify-between py-6 px-4 hidden lg:flex">
        <div>
          <div className="px-2 mb-8">
            
            <h2 className="text-sm font-serif tracking-[0.25em] text-[#D4AF37]">
              RAY AMOR
            </h2>
            <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] mt-1">
              AI MIND ORGANIZING ROUTINE
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 mb-4 text-[#D4AF37] text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            EDUCATION HUB
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  item.active
                    ? "bg-[#D4AF37]/10 border bg-[#D4AF37]/40 text-[#D4AF37] font-medium"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-white/5 transition">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border border-[#D4AF37]/20 text-sm text-[#D4AF37]">
            <span className="flex items-center gap-2">
              <Crown className="w-4 h-4" />
              Teacher Account
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-end gap-4">
          <button className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            <Bell className="w-5 h-5 text-gray-300" />
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center gap-3 pl-3 border-l border-white/10">
            <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-[#D4AF37] font-semibold">
              <img src="avtar.png" classname='h-5 w-5 ' />
            </div>
            <div className="text-sm">
              <p className="font-medium leading-tight">{user?.name} </p>
              <p className="text-gray-400 text-xs leading-tight">Teacher</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         
          <div className="xl:col-span-2 space-y-6">
            <div
  className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 p-15 bg-cover bg-center"
  style={{
    backgroundImage: "url('teacherback.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-lg">
    <p className="text-gray-200 text-lg">Welcome back,</p>

    <h2 className="text-4xl font-serif font-bold text-[#D4AF37] mt-1">
      {user?.name}
    </h2>

    <p className="text-gray-300 mt-3">
      Empowering classrooms, inspiring minds.
    </p>
  </div>
</div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{stats.map((s) => (
  <div
    key={s.label}
    className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-4"
  >
    {/* Icon + Value */}
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
        <s.icon className="w-4 h-4 text-[#D4AF37]" />
      </div>

      <p className="text-[#D4AF37] text-2xl font-bold">
        {s.value}
      </p>
    </div>

    {/* Label */}
    <p className="text-md text-gray-400">{s.label}</p>

    {/* Subtitle */}
    <p className={`text-xs mt-1 font-medium ${s.subColor}`}>
      {s.sub}
    </p>
  </div>
))}
            </div>

            {/* Teaching tools */}
            {/* <div>
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                Your Teaching Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {teachingTools.map((tool) => (
                  <div
                    key={tool.title}
                    className="bg-white/[0.03] border border-[#D4AF37]/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#D4AF37]/30 transition"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                        <tool.icon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <p className="font-semibold text-sm">{tool.title}</p>
                      <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                    <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                      {tool.cta} <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Recent activity */}
            <div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#D4AF37]">
                  Recent Activity
                </h3>
                <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1">
                  View All Activity <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-3">
                {recentActivity.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <a.icon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <p className="text-sm text-gray-200">{a.text}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-3">
                      {a.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Upcoming classes */}
            <div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#D4AF37]">
                  Upcoming Classes
                </h3>
                <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1">
                  View Calendar <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-3">
                {upcomingClasses.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-start gap-3 bg-white/[0.02] rounded-lg p-3"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${c.iconBg}`}
                    >
                      <c.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium truncate">
                          {c.title}
                        </p>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {c.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {c.subject}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Class overview */}
            <div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-8">
              <h3 className="font-semibold text-[#D4AF37] mb-4">
                Class Overview
              </h3>
              <div className="flex items-center gap-4">
                <ProgressRing percent={92} />
                <div className="space-y-2 flex-1">
                  {progressBreakdown.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-gray-300">
                        <span className={`w-2 h-2 rounded-full ${p.dot}`} />
                        {p.label}
                      </span>
                      <span className="text-[#D4AF37]  font-medium">
                        {p.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            <button
  className="w-full mt-4 py-2.5 rounded-lg text-black font-semibold transition-all duration-300"
  style={{
    background: "linear-gradient(90deg, #8B6A1E 0%, #C99A2E 45%, #8B6A1E 100%)",
  }}
>
  View Detailed Report →
</button>
            </div>

            {/* Quick actions */}
            {/* <div className="bg-white/[0.03] border border-[#D4AF37]/10 rounded-xl p-5">
              <h3 className="font-semibold text-[#D4AF37] mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((q) => (
                  <button
                    key={q.label}
                    className="flex flex-col items-center justify-center gap-2 py-4 rounded-lg border border-[#D4AF37]/10 bg-white/[0.02] hover:bg-amber-500/10 hover:border-[#D4AF37]/30 transition text-xs font-medium text-[#D4AF37]"
                  >
                    <q.icon className="w-5 h-5" />
                    {q.label}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}