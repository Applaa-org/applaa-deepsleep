import { Link } from '@tanstack/react-router';
import { Moon, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Moon className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              DeepSleep
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">
              Sounds
            </Link>
            <Link to="/about" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/tips" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">
              Sleep Tips
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-slate-300">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}