export interface SleepSound {
  id: number;
  name: string;
  description: string;
  category: string;
  duration: string;
  icon: string;
  color: string;
  audioUrl: string;
}

export const sleepSounds: SleepSound[] = [
  {
    id: 1,
    name: "Ocean Waves",
    description: "Gentle rolling waves on a peaceful beach at sunset",
    category: "Nature",
    duration: "∞",
    icon: "🌊",
    color: "from-blue-500 to-cyan-400",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2266/2266-preview.mp3"
  },
  {
    id: 2,
    name: "Rainfall",
    description: "Soft rain falling on leaves and roof tiles",
    category: "Nature",
    duration: "∞",
    icon: "🌧️",
    color: "from-slate-500 to-blue-400",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2491/2491-preview.mp3"
  },
  {
    id: 3,
    name: "Forest Night",
    description: "Crickets and gentle wind through pine trees",
    category: "Nature",
    duration: "∞",
    icon: "🌲",
    color: "from-green-600 to-emerald-500",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2500/2500-preview.mp3"
  },
  {
    id: 4,
    name: "Thunderstorm",
    description: "Distant thunder with steady rain",
    category: "Nature",
    duration: "∞",
    icon: "⛈️",
    color: "from-purple-600 to-indigo-500",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/1150/1150-preview.mp3"
  },
  {
    id: 5,
    name: "White Noise",
    description: "Consistent static sound for blocking distractions",
    category: "Synthetic",
    duration: "∞",
    icon: "📻",
    color: "from-gray-500 to-slate-400",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2532/2532-preview.mp3"
  },
  {
    id: 6,
    name: "Wind Chimes",
    description: "Soft metallic chimes in a gentle breeze",
    category: "Instrumental",
    duration: "∞",
    icon: "🎐",
    color: "from-amber-400 to-orange-300",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2533/2533-preview.mp3"
  },
  {
    id: 7,
    name: "Bamboo Forest",
    description: "Peaceful bamboo grove with rustling leaves",
    category: "Nature",
    duration: "∞",
    icon: "🎋",
    color: "from-lime-500 to-green-400",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2531/2531-preview.mp3"
  },
  {
    id: 8,
    name: "Fireplace",
    description: "Crackling fire on a cozy winter evening",
    category: "Nature",
    duration: "∞",
    icon: "🔥",
    color: "from-orange-500 to-red-400",
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2534/2534-preview.mp3"
  }
];

export const timerPresets = [
  { label: "15 min", value: 15 },
  { label: "30 min", value: 30 },
  { label: "45 min", value: 45 },
  { label: "60 min", value: 60 },
  { label: "90 min", value: 90 },
  { label: "Off", value: 0 }
];