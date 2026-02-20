import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-bold">
          Start Securing Your
          <span className="text-red-500"> Identity Stack</span>
        </h2>
        <p className="mt-6 text-xl text-gray-400">
          Open-source demo platform built for developers and security engineers. 
          Deploy in minutes, scale infinitely.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/register" 
            className="group bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all hover:shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-2"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link 
            href="/contact" 
            className="border border-gray-700 px-8 py-4 rounded-lg text-lg hover:bg-gray-900 transition"
          >
            Contact Sales
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
}