import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// Put background_image.png in your project's /src/assets (or /public) folder
// and update the import/path below to match your project structure.

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
const [isSignup, setIsSignup] = useState(false);

const [name, setName] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("rayamor-user"));

  if (!user) {
    return alert("No account found. Please create an account.");
  }

  if (
    email === user.email &&
    password === user.password
  ) {

    alert("Login Successful!");

    // Navigate wherever you want
    // navigate("/dashboard");

  } else {
    alert("Invalid Email or Password");
  }
};

  const handleSignup = (e) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    return alert("Please fill all fields.");
  }

  if (password !== confirmPassword) {
    return alert("Passwords do not match.");
  }

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("rayamor-user", JSON.stringify(user));

  alert("Account created successfully!");

  setIsSignup(false);

  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
};

  return (
   <div
  className=" w-full flex items-center justify-end bg-cover bg-center relative px-6 md:px-16 py-12 min-h-screen"
  style={{ backgroundImage: "url('/backgroundimage.png')" }}
>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Brand + Lumi intro (left side) */}
      <div className="relative z-10 hidden lg:flex flex-col justify-between h-full flex-1 max-w-lg self-start pt-4">
        <div>
         
          <h2 className="text-2xl font-serif tracking-[0.3em] text-amber-300 mt-1">
            RAY AMOR
          </h2>
          <p className="text-xs tracking-[0.1em] text-amber-100/80 mt-2">
            AI MIND ORGANIZING ROUTINE
          </p>
        </div>

        <div className="mt-90 mb-4 ml-10 bg-black/60 border border-amber-500/40 rounded-2xl p-6 w-60 backdrop-blur-sm">
          <p className="text-amber-300 text-lg font-medium">
            Hi, I&apos;m Lumi <span className="align-middle">✨</span>
          </p>
          <p className="text-amber-400 text-sm font-semibold mt-1">
            Your AI Concierge
          </p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            Welcome to Ray Amor.
            <br />
            Let&apos;s make today legendary.
          </p>
        </div> 
      </div>

      {/* Login card (right side) */}
      <div className="relative z-10 w-full max-w-md bg-black/70 border border-amber-500/30 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
       <h2 className="text-3xl font-serif text-amber-400 text-center">
{isSignup ? "Create Account" : "Welcome Back"}
</h2>
        <p className="text-gray-300 text-sm text-center mt-2">
          Sign in to continue your journey with Ray Amor.
        </p>

       <form onSubmit={isSignup ? handleSignup : handleSubmit} className="mt-8 space-y-5">
       {isSignup && (
<div>
<label className="block text-sm text-gray-200 mb-1.5">
Full Name
</label>

<div className="relative">

<input
type="text"
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Enter your full name"
className="w-full bg-black/50 border border-amber-500/30 rounded-lg py-2.5 px-4 text-sm text-gray-100"
/>

</div>
</div>
)}
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-200 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-black/50 border border-amber-500/30 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500/60 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-black/50 border border-amber-500/30 rounded-lg py-2.5 pl-10 pr-10 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500/60 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-400 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
{isSignup && (

<div>

<label className="block text-sm text-gray-200 mb-1.5">
Confirm Password

</label>

<input
type={showPassword ? "text" : "password"}
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
placeholder="Confirm Password"
className="w-full bg-black/50 border border-amber-500/30 rounded-lg py-2.5 px-4 text-sm text-gray-100"
/>

</div>

)}
          {/* Remember me / Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-amber-500/50 bg-black/50 accent-amber-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-amber-400 hover:text-amber-300 transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 transition shadow-lg shadow-amber-500/20"
          >
       {isSignup ? "Create Account" : "Sign In"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex-1 h-px bg-gray-600/50" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-600/50" />
          </div>
{!isSignup && (
<>
          {/* Social buttons */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border border-gray-600/50 bg-black/40 text-gray-100 text-sm hover:bg-black/60 transition"
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border border-gray-600/50 bg-black/40 text-gray-100 text-sm hover:bg-black/60 transition"
          >
            <AppleIcon />
            Continue with Apple
          </button>
          </>
)}

<p className="text-center text-sm text-gray-400 pt-2">

{isSignup ? (
<>
Already have an account?{" "}

<button
type="button"
onClick={()=>setIsSignup(false)}
className="text-amber-400 font-medium"
>
Sign In
</button>

</>
) : (
<>
Don't have an account?{" "}

<button
type="button"
onClick={()=>setIsSignup(true)}
className="text-amber-400 font-medium"
>
Create Account
</button>

</>
)}

</p>
        </form>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
      <path d="M16.365 1.43c0 1.14-.417 2.187-1.106 2.98-.744.86-1.98 1.53-3.09 1.44-.135-1.09.407-2.24 1.096-2.99.755-.85 2.02-1.48 3.1-1.43zm3.35 17.16c-.31.71-.68 1.4-1.15 2.05-.63.87-1.15 1.47-1.55 1.79-.62.53-1.28.8-1.98.81-.5 0-1.11-.14-1.83-.44-.72-.29-1.38-.43-1.99-.43-.63 0-1.31.14-2.03.43-.72.3-1.31.46-1.75.47-.68.03-1.37-.25-2.06-.83-.44-.34-.98-.97-1.63-1.87-.7-.97-1.27-2.1-1.72-3.4-.47-1.4-.71-2.75-.71-4.06 0-1.5.32-2.79.97-3.88.51-.86 1.19-1.55 2.03-2.05.85-.5 1.76-.76 2.74-.78.53 0 1.22.16 2.07.48.85.32 1.4.48 1.64.48.18 0 .78-.19 1.79-.56 1-.36 1.83-.5 2.52-.43 1.86.15 3.26.88 4.19 2.2-1.66 1.01-2.48 2.42-2.47 4.24.01 1.42.52 2.6 1.53 3.55.46.43.97.76 1.53 1-.12.36-.26.71-.4 1.05z" />
    </svg>
  );
}