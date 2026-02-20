// app/(auth)/register/page.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Create your account
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
          Start securing your application with AI-powered identity protection
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4 sm:space-y-5">
        <div>
          <label className="text-xs sm:text-sm text-gray-300 block mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-black/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition"
          />
        </div>

        <div>
          <label className="text-xs sm:text-sm text-gray-300 block mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            className="w-full bg-black/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition"
          />
        </div>

        <div>
          <label className="text-xs sm:text-sm text-gray-300 block mb-1.5">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full bg-black/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition"
          />
        </div>

        {/* Password Requirements */}
        <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-gray-800">
          <p className="text-xs text-gray-400 mb-2">Password must contain:</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-gray-600" />
              <span className="text-xs text-gray-500">8+ characters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-gray-600" />
              <span className="text-xs text-gray-500">One number</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-gray-600" />
              <span className="text-xs text-gray-500">Uppercase letter</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-gray-600" />
              <span className="text-xs text-gray-500">Special character</span>
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            id="terms" 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 bg-black border-gray-700 rounded focus:ring-red-500" 
          />
          <label htmlFor="terms" className="text-xs text-gray-400">
            I agree to the{" "}
            <Link href="/terms" className="text-red-500 hover:text-red-400 transition">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-red-500 hover:text-red-400 transition">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-500 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:from-red-500 hover:to-red-400 transition-all hover:shadow-lg hover:shadow-red-600/25 flex items-center justify-center gap-2 group"
        >
          Create Account
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition" />
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6 sm:my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-4 bg-gray-900 text-gray-500">or sign up with</span>
        </div>
      </div>

      {/* Social Sign Up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-black/50 border border-gray-800 rounded-lg hover:bg-gray-800 transition text-sm">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-black/50 border border-gray-800 rounded-lg hover:bg-gray-800 transition text-sm">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span>GitHub</span>
        </button>
      </div>

      {/* Sign In Link */}
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8">
        Already have an account?{" "}
        <Link href="/login" className="text-red-500 hover:text-red-400 transition font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
}