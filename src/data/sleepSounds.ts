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
    audioUrl: "https://cdn.pixabay.com/audio/2022/03/24/audio_07b5775530.mp3"
  },
  {
    id: 2,
    name: "Rainfall",
    description: "Soft rain falling on leaves and roof tiles",
    category: "Nature",
    duration: "∞",
    icon: "🌧️",
    color: "from-slate-500 to-blue-400",
    audioUrl: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3"
  },
  {
    id: 3,
    name: "Forest Night",
    description: "Crickets and gentle wind through pine trees",
    category: "Nature",
    duration: "∞",
    icon: "🌲",
    color: "from-green-600 to-emerald-500",
    audioUrl: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
  },
  {
    id: 4,
    name: "Thunderstorm",
    description: "Distant thunder with steady rain",
    category: "Nature",
    duration: "∞",
    icon: "⛈️",
    color: "from-purple-600 to-indigo-500",
    audioUrl: "https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3"
  },
  {
    id: 5,
    name: "White Noise",
    description: "Consistent static sound for blocking distractions",
    category: "Synthetic",
    duration: "∞",
    icon: "📻",
    color: "from-gray-500 to-slate-400",
    audioUrl: "https://cdn.pixabay.com/audio/2022/03/15/audio_24215f5e8c.mp3"
  },
  {
    id: 6,
    name: "Wind Chimes",
    description: "Soft metallic chimes in a gentle breeze",
    category: "Instrumental",
    duration: "∞",
    icon: "🎐",
    color: "from-amber-400 to-orange-300",
    audioUrl: "https://cdn.pixabay.com/audio/2022/03/09/audio_5b3279659c.mp3"
  },
  {
    id: 7,
    name: "Bamboo Forest",
    description: "Peaceful bamboo grove with rustling leaves",
    category: "Nature",
    duration: "∞",
    icon: "🎋",
    color: "from-lime-500 to-green-400",
    audioUrl: "https://cdn.pixabay.com/audio/2022/01/26/audio_6b52865766.mp3"
  },
  {
    id: 8,
    name: "Fireplace",
    description: "Crackling fire on a cozy winter evening",
    category: "Nature",
    duration: "∞",
    icon: "🔥",
    color: "from-orange-500 to-red-400",
    audioUrl: "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3"
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