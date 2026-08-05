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
  Building2,
  Sparkles,
  
  Megaphone,
  Share2,
  PartyPopper,
  Heart,
  Zap,
  Wand2,
  MoreVertical,
} from "lucide-react";

// ---------- Static data (swap with real data / API later) ----------

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Organization", icon: Building2 },
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

const todaySchedule = [
  {
    time: "08:00 AM",
    title: "World History",
    meta: "Period 1 · Room 204",
    dot: "bg-purple-400",
  },
  {
    time: "09:15 AM",
    title: "English Language Arts",
    meta: "Period 2 · Room 118",
    dot: "bg-sky-400",
  },
  {
    time: "10:30 AM",
    title: "Advisory",
    meta: "Period 3 · Room 118",
    dot: "bg-emerald-400",
  },
  {
    time: "12:00 PM",
    title: "Planning Time",
    meta: "Free period",
    dot: "bg-gray-500",
  },
  {
    time: "01:00 PM",
    title: "Civics & Government",
    meta: "Period 4 · Room 210",
    dot: "bg-amber-400",
  },
    {
    time: "01:00 PM",
    title: "Civics & Government",
    meta: "Period 4 · Room 210",
    dot: "bg-amber-400",
  },
    {
    time: "01:00 PM",
    title: "Civics & Government",
    meta: "Period 4 · Room 210",
    dot: "bg-amber-400",
  },
    {
    time: "01:00 PM",
    title: "Civics & Government",
    meta: "Period 4 · Room 210",
    dot: "bg-amber-400",
  },
   
];

const communityPosts = [
  {
    name: "Ms. Johnson",
    time: "2h ago",
    text:
      'Our students crushed the "Passport Pals" challenge! So proud of their teamwork and creativity! 🎉',
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Mr. Davis",
    time: "5h ago",
    text:
      "Great discussion today in Civics about leadership and responsibility. The future is bright! ⭐",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Ms. Martinez",
    time: "1d ago",
    text:
      "Loving how my class is using the new ELA resources! Engagement is off the charts! 📚",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80",
  },
];

const lumiSuggestions = [
  { icon: Wand2, label: "Generate a lesson idea" },
  { icon: BookOpen, label: "Find classroom resources" },
  { icon: Star, label: "Analyze class progress" },
];

const announcements = [
  {
    icon: BookOpen,
    title: "New Resource Added",
    desc: '"Women in History" lesson pack is now available.',
    time: "2h ago",
  },
  {
    icon: GraduationCap,
    title: "Professional Learning",
    desc: "Join our webinar: Student Engagement Strategies.",
    time: "1d ago",
  },
  {
    icon: Settings,
    title: "System Update",
    desc: "New assessment tools are now live!",
    time: "2d ago",
  },
];

const upcomingEvents = [
  {
    month: "MAY",
    day: "15",
    title: "Curriculum Planning Meeting",
    meta: "May 15 · 3:30 PM · Virtual",
  },
  {
    month: "MAY",
    day: "20",
    title: "End of Unit Assessments",
    meta: "May 20 – May 24 · All Classes",
  },
];

const quickActions = [
  { icon: ClipboardCheck, label: "Create Assignment" },
  { icon: UploadCloud, label: "Upload Resource" },
  { icon: CalendarCheck, label: "Take Attendance" },
  { icon: MessageSquare, label: "Send Message" },
];



// ---------- Reusable pieces ----------
const user = JSON.parse(localStorage.getItem("rayamor-user"));

const classOverview = [
  {
    icon: BookOpen,
    iconBg: "bg-purple-500/20 text-purple-300",
    title: "World History",
    meta: "Period 1 • 28 Students",
    progress: 85,
  },
  {
    icon: BookOpen,
    iconBg: "bg-blue-500/20 text-blue-300",
    title: "English Language Arts",
    meta: "Period 2 • 26 Students",
    progress: 78,
  },
  {
    icon: Landmark,
    iconBg: "bg-amber-500/20 text-[#D4AF37]",
    title: "Civics & Government",
    meta: "Period 4 • 27 Students",
    progress: 90,
  },
  {
    icon: Users,
    iconBg: "bg-green-500/20 text-green-300",
    title: "Advisory",
    meta: "Period 3 • 28 Students",
    progress: 88,
  },
];
// ---------- Main dashboard ----------

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-[#D4AF37]/20 flex flex-col justify-between py-6 px-4 hidden lg:flex">
        <div>
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

        {/* Quick Access */}
        <div className="space-y-3">
          <div className="rounded-xl border border-[#D4AF37]/20 bg-white/[0.03] p-3">
            <div className="flex items-center gap-2 px-1 mb-2 text-[#D4AF37] text-sm font-semibold">
              <Zap className="w-4 h-4" />
              Quick Access
            </div>
            <div className="space-y-1">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-[#D4AF37] transition"
                >
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>

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
              <img src="avtar.png" classname="h-5 w-5 " />
            </div>
            <div className="text-sm">
              <p className="font-medium leading-tight">{user?.name} </p>
              <p className="text-gray-400 text-xs leading-tight">Teacher</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <button className=" rounded-lg text-sm text-gray-300 hover:bg-white/5 transition">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left column */}
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

                    <p className="text-[#D4AF37] text-2xl font-bold">{s.value}</p>
                  </div>

                  {/* Label */}
                  <p className="text-md text-gray-400">{s.label}</p>

                  {/* Subtitle */}
                  <p className={`text-xs mt-1 font-medium ${s.subColor}`}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Today's Schedule + Class Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Today's Schedule */}
              <div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#D4AF37] flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Today's Schedule
                  </h3>
                  <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1">
                    View Full Calendar <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="relative pl-4">
                  <div className="absolute left-[7px] top-1 bottom-1 w-px bg-white/10" />
                  <div className="space-y-4">
                    {todaySchedule.map((item, i) => (
                      <div key={i} className="relative flex items-center justify-between gap-3">
                        <span
                          className={`absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full ${item.dot} ring-4 ring-[#0a0a0a]`}
                        />
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs text-gray-500 w-16 shrink-0">{item.time}</span>
                          <div>
                            <p className="text-sm font-medium text-gray-100">{item.title}</p>
                            <p className="text-xs text-gray-400">{item.meta}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Class Overview */}
            {/* Class Overview */}
<div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5 flex flex-col">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-[#D4AF37]">
      Class Overview
    </h3>

    <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1">
      View All Classes
      <ArrowRight className="w-3 h-3" />
    </button>
  </div>

  <div className="space-y-3 flex-1">
    {classOverview.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-3 hover:bg-white/[0.04] transition"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.iconBg}`}
          >
            <item.icon className="w-5 h-5" />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              {item.title}
            </p>

            <p className="text-xs text-gray-400">
              {item.meta}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="w-10 h-10 rounded-full border-[4px] border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#D4AF37]">
            {item.progress}
          </div>

          <p className="text-[11px] text-gray-400 mt-1">
            Avg. Progress
          </p>
        </div>
      </div>
    ))}
  </div>

  
</div>
            </div>

            {/* Community Wall */}
         {/* ================= Community Wall ================= */}
<div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5 mt-6">
  {/* Header */}
  <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
    <div className="flex items-center gap-2">
      <Users className="w-5 h-5 text-[#D4AF37]" />
      <h3 className="text-lg font-semibold text-[#D4AF37]">
        Community Wall
      </h3>
    </div>

    <div className="flex items-center gap-3">
      <button className="px-4 py-1.5 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-sm">
        All Posts
      </button>

      <button className="px-4 py-1.5 rounded-lg border border-white/10 text-gray-300 text-sm hover:border-[#D4AF37]/30">
        School
      </button>

      <button className="px-4 py-1.5 rounded-lg border border-white/10 text-gray-300 text-sm hover:border-[#D4AF37]/30">
        Teachers
      </button>

      <div className="h-6 w-px bg-white/10" />

      <button className="flex items-center gap-1 text-sm text-[#D4AF37]">
        Sort: Recent
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  </div>

  {/* Posts */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    {communityPosts.map((post, i) => (
      <div
        key={i}
        className="rounded-xl border border-[#D4AF37]/20 bg-white/[0.02] p-4 hover:border-[#D4AF37]/40 transition"
      >
        {/* Top */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <p className="text-white font-medium text-sm">{post.name}</p>
              <p className="text-xs text-gray-500">{post.time}</p>
            </div>
          </div>

          <button className="text-[#D4AF37]">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex gap-3 mt-4">
          <div className="flex-1">
            <p className="text-sm text-gray-300 leading-6">
              {post.text}
            </p>
          </div>

          {post.image && (
            <img
              src={post.image}
              alt=""
              className="w-28 h-24 rounded-lg object-cover"
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-5 mt-4 text-sm">
          <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300">
            <Share2 className="w-4 h-4" />
            Share
          </button>

          <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300">
            <PartyPopper className="w-4 h-4" />
            Celebrate
          </button>

          <button className="flex items-center gap-1 text-pink-400 hover:text-pink-300">
            <Heart className="w-4 h-4" />
            Support
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Bottom */}
  <div className="flex justify-center mt-6">
    <button className="flex items-center gap-2 text-[#D4AF37] hover:text-yellow-300 font-medium">
      See more posts
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Lumi AI Assistant */}
            <div className="bg-gradient-to-b from-amber-500/10 to-white/[0.03] border border-[#D4AF37]/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="font-semibold text-[#D4AF37]">Lumi</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4">Your Teaching Assistant</p>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Good morning! Here are a few things I can help you with today.
              </p>

              <div className="space-y-2">
                {lumiSuggestions.map((s, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-2 text-left px-3 py-2.5 rounded-lg border border-[#D4AF37]/20 bg-white/[0.02] text-sm text-gray-200 hover:border-[#D4AF37]/40 hover:bg-amber-500/5 transition"
                  >
                    <s.icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {s.label}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-4">How else can I assist you?</p>
            </div>

            {/* Announcements */}
            <div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#D4AF37] flex items-center gap-2">
                  <Megaphone className="w-4 h-4" />
                  Announcements
                </h3>
                <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1">
                  View All <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-3">
                {announcements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                      <a.icon className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-100">{a.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{a.desc}</p>
                      <p className="text-[11px] text-gray-500 mt-1">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white/[0.03] border border-[#D4AF37]/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#D4AF37]">Upcoming Events</h3>
                <button className="text-[#D4AF37] text-xs font-medium flex items-center gap-1">
                  View Calendar <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((e, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/[0.02] rounded-lg p-3">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-semibold text-[#D4AF37] leading-none">{e.month}</span>
                      <span className="text-base font-bold text-gray-100 leading-tight">{e.day}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-100 truncate">{e.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{e.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}