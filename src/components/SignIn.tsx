import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';

interface SignInProps {
  onSignIn: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-[#fff7ff] via-[#f6e9ff] to-[#eedcff] min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
    >
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-container/20 blur-[120px]" />
      <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] rounded-full bg-secondary-container/30 blur-[100px]" />

      <main className="w-full max-w-[440px] relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="mb-4">
            <span className="text-4xl font-headline font-extrabold tracking-tighter text-primary">Ethereal</span>
          </div>
          <h1 className="text-3xl font-headline font-bold text-on-surface">Welcome Back</h1>
          <p className="text-on-surface-variant mt-2 font-medium">Reconnect with your community</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="group">
              <label className="block text-sm font-label font-semibold text-on-surface-variant ml-4 mb-2">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="hello@lumina.com"
                  className="w-full h-14 px-6 rounded-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary/30 transition-all outline-none text-on-surface placeholder:text-outline/50 font-medium"
                />
                <div className="absolute inset-y-0 right-5 flex items-center text-outline/40 group-focus-within:text-primary/50 transition-colors">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-label font-semibold text-on-surface-variant ml-4 mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full h-14 px-6 rounded-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary/30 transition-all outline-none text-on-surface placeholder:text-outline/50 font-medium"
                />
                <div className="absolute inset-y-0 right-5 flex items-center cursor-pointer text-outline/40 hover:text-primary transition-colors">
                  <Eye size={20} />
                </div>
              </div>
            </div>

            <div className="flex justify-end px-4">
              <button className="text-sm font-label font-semibold text-primary hover:text-primary-dim transition-colors">Forgot Password?</button>
            </div>
          </div>

          <button 
            onClick={onSignIn}
            className="w-full h-14 primary-gradient rounded-full text-on-primary font-label font-bold tracking-[0.05em] uppercase shadow-[0_12px_40px_rgba(104,52,235,0.2)] hover:shadow-[0_12px_45px_rgba(104,52,235,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Sign In <ArrowRight size={20} />
          </button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-outline-variant/10" />
            <span className="flex-shrink mx-4 text-xs font-label font-bold text-outline-variant/60 uppercase tracking-widest">Or continue with</span>
            <div className="flex-grow border-t border-outline-variant/10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 h-14 rounded-full bg-surface-container-low hover:bg-surface-container-highest transition-colors font-label font-semibold text-on-surface-variant border border-outline-variant/10">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 h-14 rounded-full bg-surface-container-low hover:bg-surface-container-highest transition-colors font-label font-semibold text-on-surface-variant border border-outline-variant/10">
              <span className="font-bold">Apple</span>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-on-surface-variant font-medium">
            New to Ethereal? 
            <button className="text-primary font-bold hover:underline ml-1">Create an Account</button>
          </p>
        </div>
      </main>

      <footer className="fixed bottom-8 w-full text-center px-6">
        <div className="max-w-md mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2">
          {['Privacy Policy', 'Terms of Service', 'Help Center'].map(link => (
            <button key={link} className="text-[11px] font-label font-medium uppercase tracking-widest text-outline-variant hover:text-primary transition-colors">{link}</button>
          ))}
        </div>
      </footer>
    </motion.div>
  );
};
