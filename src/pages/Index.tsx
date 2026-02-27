import { useState } from 'react';
import Header from '@/components/Header';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import SoundPlayer from '@/components/SoundPlayer';
import Disclaimer from '@/components/Disclaimer';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { sleepSounds, type SleepSound } from '@/data/sleepSounds';
import { Moon, Sparkles } from 'lucide-react';

const Index = () => {
  const [selectedSound, setSelectedSound] = useState<SleepSound | null>(sleepSounds[0]);

  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Moon className="w-8 h-8 text-indigo-400" />
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DeepSleep
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Drift into peaceful slumber with calming sounds and gentle visuals. 
            Set your timer and let the relaxation begin.
          </p>
        </div>

        {/* Sound Player */}
        <SoundPlayer 
          selectedSound={selectedSound} 
          onSoundSelect={setSelectedSound} 
        />

        {/* Disclaimer */}
        <Disclaimer />

        {/* Footer */}
        <div className="mt-16 text-center space-y-4">
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500 mb-4">
              Designed for better sleep and relaxation
            </p>
            <MadeWithApplaa />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;