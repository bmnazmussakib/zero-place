"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid credentials. Please try again.");
      } else {
        toast.success("Login successful!");
        router.push("/admin");
        router.refresh();
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black font-heading text-slate-900 mb-2">Admin Portal</h1>
          <p className="text-slate-500 font-medium">Please sign in to manage your content</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-slate-700">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full rounded-xl bg-slate-50 border-slate-200 focus:border-[#6c46fd] focus:ring-1 focus:ring-[#6c46fd] transition-all"
              placeholder="admin@zeroplace.com"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-slate-700">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full rounded-xl bg-slate-50 border-slate-200 focus:border-[#6c46fd] focus:ring-1 focus:ring-[#6c46fd] transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full rounded-xl bg-[#6c46fd] border-none hover:bg-[#5b3bdb] text-white font-bold h-12 shadow-lg shadow-[#6c46fd]/30 transition-all ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Zero Place Admin System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
