import Header from '@/components/Header';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Card } from '@/components/ui/card';
import { Moon, Music, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-slate-200">About DeepSleep</h1>
            <p className="text-lg text-slate-400">
              Your companion for peaceful nights and restful sleep
            </p>
          </div>

          <Card className="p-6 bg-slate-900/80 backdrop-blur-xl border-slate-800">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-200 mb-4">Our Mission</h2>
                <p className="text-slate-400 leading-relaxed">
                  DeepSleep was created to help people achieve better sleep through the power of sound. 
                  We believe that quality rest is essential for overall well-being, and sometimes all 
                  we need is the right ambient sounds to drift into peaceful slumber.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <Music className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="font-semibold text-slate-200">Curated Sounds</h3>
                  </div>
                  <p className="text-sm text-slate-400 pl-13">
                    Hand-picked ambient sounds from nature and beyond
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-slate-200">Smart Timer</h3>
                  </div>
                  <p className="text-sm text-slate-400 pl-13">
                    Auto fade-out timer for uninterrupted sleep
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Moon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-slate-200">Night Mode</h3>
                  </div>
                  <p className="text-sm text-slate-400 pl-13">
                    Calming dark interface designed for nighttime use
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-pink-400" />
                    </div>
                    <h3 className="font-semibold text-slate-200">Made with Care</h3>
                  </div>
                  <p className="text-sm text-slate-400 pl-13">
                    Built with love for your peaceful nights
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="border-t border-slate-800 pt-8 text-center">
            <MadeWithApplaa />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;