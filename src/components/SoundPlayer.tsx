import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { sleepSounds, timerPresets, type SleepSound } from '@/data/sleepSounds';
import { cn } from '@/lib/utils';

interface SoundPlayerProps {
  selectedSound: SleepSound | null;
  onSoundSelect: (sound: SleepSound) => void;
}

export default function SoundPlayer({ selectedSound, onSoundSelect }: SoundPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentVolume, setCurrentVolume] = useState(0.7);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selectedSound && audioRef.current) {
      audioRef.current.src = selectedSound.audioUrl;
      audioRef.current.volume = volume;
    }
  }, [selectedSound, volume]);

  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  const togglePlay = () => {
    if (!selectedSound) return;
    
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    setCurrentVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (currentVolume > 0) {
      setVolume(0);
      setCurrentVolume(0);
      if (audioRef.current) audioRef.current.volume = 0;
    } else {
      setVolume(0.7);
      setCurrentVolume(0.7);
      if (audioRef.current) audioRef.current.volume = 0.7;
    }
  };

  const startTimer = (minutes: number) => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    
    setTimerMinutes(minutes);
    setTimeRemaining(minutes * 60);
    setIsFadingOut(false);

    if (minutes === 0) {
      // Timer off - just play
      return;
    }

    // Start countdown
    timerIntervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Start fade out when 10 seconds remaining
          startFadeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startFadeOut = () => {
    setIsFadingOut(true);
    const fadeDuration = 10000; // 10 seconds
    const fadeSteps = 50;
    const stepDuration = fadeDuration / fadeSteps;
    const volumeStep = currentVolume / fadeSteps;

    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      currentStep++;
      const newVolume = Math.max(0, currentVolume - (volumeStep * currentStep));
      
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }

      if (currentStep >= fadeSteps) {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        
        audioRef.current?.pause();
        setIsPlaying(false);
        setIsFadingOut(false);
        setTimerMinutes(0);
        setTimeRemaining(0);
        setVolume(0.7);
        setCurrentVolume(0.7);
      }
    }, stepDuration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Sound Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sleepSounds.map((sound) => (
          <Card
            key={sound.id}
            className={cn(
              "p-4 cursor-pointer transition-all hover:scale-105 border-2",
              selectedSound?.id === sound.id
                ? "border-indigo-500 bg-indigo-950/30 shadow-lg shadow-indigo-500/20"
                : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
            )}
            onClick={() => onSoundSelect(sound)}
          >
            <div className="text-center space-y-2">
              <div className={cn(
                "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br shadow-lg",
                sound.color
              )}>
                {sound.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">{sound.name}</h3>
                <Badge variant="outline" className="text-xs mt-1 border-slate-700 text-slate-400">
                  {sound.category}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Player Controls */}
      {selectedSound && (
        <Card className="p-6 bg-slate-900/80 backdrop-blur-xl border-slate-800">
          <div className="space-y-6">
            {/* Now Playing */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br",
                  selectedSound.color
                )}>
                  {selectedSound.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-200">{selectedSound.name}</h3>
                  <p className="text-sm text-slate-400">{selectedSound.description}</p>
                </div>
              </div>
              
              <Button
                size="lg"
                onClick={togglePlay}
                disabled={isFadingOut}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/30"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="text-slate-400 hover:text-slate-200"
              >
                {currentVolume > 0 ? (
                  <Volume2 className="w-5 h-5" />
                ) : (
                  <VolumeX className="w-5 h-5" />
                )}
              </Button>
              <Slider
                value={[volume]}
                onValueChange={handleVolumeChange}
                max={1}
                step={0.01}
                className="flex-1"
              />
              <span className="text-sm text-slate-400 w-12 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>

            {/* Timer Controls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Sleep Timer</span>
                {timeRemaining > 0 && (
                  <Badge variant="outline" className="border-indigo-500/50 text-indigo-400">
                    {isFadingOut ? "Fading out..." : formatTime(timeRemaining)}
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {timerPresets.map((preset) => (
                  <Button
                    key={preset.value}
                    variant={timerMinutes === preset.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => startTimer(preset.value)}
                    disabled={isFadingOut}
                    className={cn(
                      timerMinutes === preset.value
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : "border-slate-700 text-slate-300 hover:bg-slate-800"
                    )}
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      <audio ref={audioRef} loop />
    </div>
  );
}