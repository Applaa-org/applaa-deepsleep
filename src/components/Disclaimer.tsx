import { AlertCircle } from 'lucide-react';
import { Card } from './ui/card';

export default function Disclaimer() {
  return (
    <Card className="p-4 bg-amber-950/20 border-amber-800/50 mt-8">
      <div className="flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-amber-200">Disclaimer</p>
          <p className="text-xs text-amber-300/80">
            This app is for educational and relaxation purposes only. It is not intended to diagnose, treat, cure, or prevent any medical condition. If you have persistent sleep problems, please consult a healthcare professional.
          </p>
        </div>
      </div>
    </Card>
  );
}