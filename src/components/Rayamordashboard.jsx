import React, { useState, useEffect } from "react";
import {
  Home,
  GraduationCap,
  MapPin,
  Plane,
  Landmark,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  User,
  Settings,
  HelpCircle,
  Search,
  Bell,
  ChevronRight,
  Presentation,
  FileText,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  FileSearch,
  BarChart3,
  Calendar,
  Search as SearchIcon,
  Utensils,
  Scissors,
  Wrench,
  ShoppingBag,
  PartyPopper,
  Tag,
  Heart,
  Store,
  Bed,
  Compass,
  Car,
  Globe,
  ShieldCheck,
  CircleDollarSign,
  Briefcase,
  Luggage,
  TrendingUp,
  Handshake,
  Gauge,
  PieChart,
  PiggyBank,
  FileBarChart,
  Gamepad2,
  HeartPulse,
  Building2,
  ShoppingCart,
  Ticket,
  HandHeart,
  Bot,
  Bitcoin,
  MoreHorizontal,
  Crown,
} from "lucide-react";

// ---- Slide content for the hero banner (style borrowed from image 2) ----
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Let's make today",
    highlight: "legendary.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Your world,",
    highlight: "one tap away.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Build the life",
    highlight: "you're imagining.",
  },
];

// ---- Sidebar nav (image 1 structure) ----
const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Education Hub", icon: GraduationCap },
  { label: "Black Map", icon: MapPin },
  { label: "Travel", icon: Plane },
  { label: "Finance", icon: Landmark },
];

const navItemsSecondary = [
  { label: "Rewards", icon: Gift },
  { label: "Subscriptions", icon: CreditCard },
  { label: "Wallet", icon: Wallet },
  { label: "Transactions", icon: Receipt },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Help & Support", icon: HelpCircle },
];


const user = JSON.parse(localStorage.getItem("rayamor-user"));
// ---- Section data (image 1 layout: full row of buttons per section) ----
const sections = [
  {
    key: "education",
    title: "Education Hub",
    subtitle: "Empowering educators and students for a better tomorrow.",
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",
    accentBorder: "hover:border-amber-400/50",
    icon: GraduationCap,
    items: [
      { label: "Teacher Dashboard", icon: Presentation },
      { label: "Student Dashboard", icon: GraduationCap },
      { label: "Resources", icon: FileText },
      { label: "Digital Library", icon: BookOpen },
      { label: "Attendance", icon: CalendarCheck },
      { label: "Assignments", icon: ClipboardList },
      { label: "Exams", icon: FileSearch },
      { label: "Results", icon: BarChart3 },
      { label: "Timetable", icon: Calendar },
      { label: "Fee Management", icon: Wallet },
    ],
  },
  {
    key: "blackmap",
    title: "Black Map",
    subtitle: "Discover and support Black-owned businesses.",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentBorder: "hover:border-emerald-400/50",
    icon: MapPin,
    items: [
      { label: "Nearby", icon: MapPin },
      { label: "Search", icon: SearchIcon },
      { label: "Restaurants", icon: Utensils },
      { label: "Beauty", icon: Scissors },
      { label: "Services", icon: Wrench },
      { label: "Shops", icon: ShoppingBag },
      { label: "Events", icon: PartyPopper },
      { label: "Deals", icon: Tag },
      { label: "Favorites", icon: Heart },
      { label: "Add Listing", icon: Store },
    ],
  },
//   {
//     key: "travel",
//     title: "Travel",
//     subtitle: "Explore the world with ease.",
//     accent: "text-sky-400",
//     accentBg: "bg-sky-400/10",
//     accentBorder: "hover:border-sky-400/50",
//     icon: Plane,
//     items: [
//       { label: "Flights", icon: Plane },
//       { label: "Hotels", icon: Bed },
//       { label: "Activities", icon: Compass },
//       { label: "Car Rentals", icon: Car },
//       { label: "Travel Guide", icon: Globe },
//       { label: "Visa", icon: FileText },
//       { label: "Insurance", icon: ShieldCheck },
//       { label: "Currency", icon: CircleDollarSign },
//       { label: "Packages", icon: Briefcase },
//       { label: "My Trips", icon: Luggage },
//     ],
//   },
//   {
//     key: "finance",
//     title: "Finance",
//     subtitle: "Manage your money, grow your wealth.",
//     accent: "text-violet-400",
//     accentBg: "bg-violet-400/10",
//     accentBorder: "hover:border-violet-400/50",
//     icon: Landmark,
//     items: [
//       { label: "Bank Transfer", icon: Landmark },
//       { label: "Investments", icon: TrendingUp },
//       { label: "Bills", icon: FileText },
//       { label: "Loans", icon: Handshake },
//       { label: "Insurance", icon: ShieldCheck },
//       { label: "Credit Score", icon: Gauge },
//       { label: "Tax Filing", icon: Receipt },
//       { label: "Budget", icon: PieChart },
//       { label: "Savings", icon: PiggyBank },
//       { label: "Reports", icon: FileBarChart },
//     ],
//   },
  {
    key: "more",
    title: "More Services",
    subtitle: "All-in-one services for your daily life.",
    accent: "text-gray-300",
    accentBg: "bg-white/5",
    accentBorder: "hover:border-white/30",
    icon: MoreHorizontal,
    badge: "Coming Soon",
    items: [
      { label: "Games", icon: Gamepad2 },
      { label: "Health", icon: HeartPulse },
      { label: "Real Estate", icon: Building2 },
      { label: "Marketplace", icon: ShoppingCart },
      { label: "Jobs", icon: Briefcase },
      { label: "Tickets", icon: Ticket },
      { label: "Donations", icon: HandHeart },
      { label: "AI Tools", icon: Bot },
      { label: "Crypto", icon: Bitcoin },
      { label: "More", icon: MoreHorizontal },
    ],
  },
];

function IconButton({ label, Icon, accent }) {
  return (
    <button
      className="group flex flex-col items-center gap-2 rounded-xl px-3 py-3 w-[92px] shrink-0 border border-transparent hover:bg-white/[0.04] hover:border-white/10 transition-all"
      onClick={() => console.log(`${label} clicked`)}
    >
      <span
        className={`flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] ${accent} group-hover:scale-105 transition-transform`}
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="text-[11.5px] leading-tight text-gray-300 text-center">
        {label}
      </span>
    </button>
  );
}

function SectionRow({ section }) {
  const Icon = section.icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] px-5 pt-4 pb-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span
            className={`w-9 h-9 rounded-full flex items-center justify-center ${section.accentBg} ${section.accent}`}
          >
            <Icon size={18} strokeWidth={1.75} />
          </span>
          <div>
            <h3 className={`font-semibold text-[15px] ${section.accent}`}>
              {section.title}
            </h3>
            <p className="text-xs text-gray-500">{section.subtitle}</p>
          </div>
        </div>
        {section.badge ? (
          <span className="text-[11px] text-gray-400 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1">
            {section.badge}
          </span>
        ) : (
          <button className={`text-xs font-medium ${section.accent} flex items-center gap-1 hover:gap-1.5 transition-all`}>
            View All <ChevronRight size={14} />
          </button>
        )}
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
        {section.items.map((item) => (
          <IconButton
            key={item.label}
            label={item.label}
            Icon={item.icon}
            accent={section.accent}
          />
        ))}
      </div>
    </div>
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <div className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === active ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-md">
          {slide.eyebrow}{" "}
          <span className="text-amber-400">{slide.highlight}</span>
        </h2>
        <button className="mt-5 w-fit flex items-center gap-2 border border-amber-400/70 text-amber-400 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-amber-400 hover:text-black transition-colors">
          Explore Ecosystem <ChevronRight size={16} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-amber-400" : "w-1.5 bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RayAmorDashboard() {
  const user = JSON.parse(localStorage.getItem("rayamor-user"));
  return (

    <div className="min-h-screen w-full bg-[#08080a] text-white flex">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-white/10 bg-[#0a0a0c] px-4 py-6">
        <div className="mb-8 px-2">
          
          <p className="text-sm font-semibold tracking-[0.15em] text-amber-400 mt-1">
            RAY AMOR
          </p>
          <p className="text-[10px] tracking-[0.15em] text-gray-500 mt-0.5">
            AI MIND ORGANIZING ROUTINE
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    item.active
                      ? "bg-amber-400/10 text-amber-400 font-medium"
                      : "text-gray-300 hover:bg-white/[0.04]"
                  }`}
                >
                  <item.icon size={18} strokeWidth={1.75} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-px bg-white/10 my-4" />

          <ul className="space-y-1">
            {navItemsSecondary.map((item) => (
              <li key={item.label}>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-white/[0.04] transition-colors">
                  <item.icon size={18} strokeWidth={1.75} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
            <Crown size={14} /> PREMIUM MEMBER
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active Member
          </div>
          <p className="text-[11px] text-gray-500 mt-0.5">Valid till Aug 18, 2025</p>
          <button className="w-full mt-3 flex items-center justify-center gap-1 text-xs font-medium text-black bg-amber-400 rounded-lg py-2 hover:bg-amber-300 transition-colors">
            Manage Membership <ChevronRight size={14} />
          </button>
        </div>
      </aside>

      {/* ---------------- MAIN ---------------- */}
      <main className="flex-1 min-w-0 px-5 md:px-8 py-6 space-y-5 overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">  
            <div>
            
               <h1 className="text-2xl md:text-3xl font-bold">
            Welcome back, <span className="text-amber-400">{user?.name}</span>
          </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="relative text-gray-300 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <div className="w-9 h-9 rounded-full border border-amber-400/60 text-amber-400 flex items-center justify-center text-sm font-semibold">
 <img src="avtar.png" classname='h-5 w-5 ' />         
    </div>
          </div>
        </div>

        {/* Welcome line (image 1 style) */}
        <div>
          
          <p className="text-sm text-gray-500 mt-1">
            Explore your dashboard and continue your journey.
          </p>
        </div>

        {/* Hero image slider — borrowed from image 2 */}
        <HeroSlider />

        {/* Sections — full button-row layout, borrowed from image 1 */}
        <div className="space-y-4">
          {sections.map((section) => (
            <SectionRow key={section.key} section={section} />
          ))}
        </div>
      </main>
    </div>
  );
}