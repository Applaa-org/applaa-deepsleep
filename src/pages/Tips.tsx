import Header from '@/components/Header';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Tips = () => {
  const tips = [
    {
      title: "Stick to a Schedule",
      description: "Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.",
      icon: "🕐",
      category: "Routine"
    },
    {
      title: "Create a Restful Environment",
      description: "Keep your bedroom dark, quiet, and cool. Consider using room-darkening shades, earplugs, or a white noise machine.",
      icon: "🛏️",
      category: "Environment"
    },
    {
      title: "Limit Screen Time",
      description: "Avoid screens for at least an hour before bed. The blue light emitted by phones and computers can disrupt your sleep cycle.",
      icon: "📱",
      category: "Habits"
    },
    {
      title: "Watch Your Caffeine",
      description: "Avoid caffeine in the afternoon and evening. It can stay in your system for hours and affect sleep quality.",
      icon: "☕",
      category: "Diet"
    },
    {
      title: "Exercise Regularly",
      description: "Regular physical activity can help you fall asleep faster and enjoy deeper sleep. Don't exercise too close to bedtime.",
      icon: "🏃",
      category: "Activity"
    },
    {
      title: "Practice Relaxation",
      description: "Try deep breathing, meditation, or gentle stretching before bed to calm your mind and prepare for sleep.",
      icon: "🧘",
      category: "Wellness"
    }
  ];

  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-slate-200">Sleep Tips</h1>
            <p className="text-lg text-slate-400">
              Expert advice for better rest and rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card 
                key={index} 
                className="p-6 bg-slate-900/80 backdrop-blur-xl border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{tip.icon}</div>
                    <Badge variant="outline" className="border-slate-700 text-slate-400">
                      {tip.category}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-indigo-950/30 border-indigo-800/50">
            <div className="text-center space-y-3">
              <p className="text-indigo-300 font-medium">
                💡 Pro Tip: Combine these habits with DeepSleep sounds for the best results
              </p>
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

export default Tips;