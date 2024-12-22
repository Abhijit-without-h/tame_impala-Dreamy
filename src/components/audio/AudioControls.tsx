import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onPlayPause: () => void;
  onMute: () => void;
  onVolumeChange: (value: number) => void;
}

export const AudioControls = ({ 
  isPlaying, 
  isMuted, 
  volume,
  onPlayPause, 
  onMute,
  onVolumeChange 
}: AudioControlsProps) => (
  <div className="flex items-center gap-2">
    <button
      onClick={onPlayPause}
      className="p-2 rounded-full hover:bg-white/10 transition-colors touch-manipulation"
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? (
        <Pause className="w-6 h-6 text-white" />
      ) : (
        <Play className="w-6 h-6 text-white" />
      )}
    </button>
    <button
      onClick={onMute}
      className="p-2 rounded-full hover:bg-white/10 transition-colors touch-manipulation"
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-white" />
      ) : (
        <Volume2 className="w-6 h-6 text-white" />
      )}
    </button>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
      className="w-20 md:w-24 h-2 bg-white/20 rounded-full appearance-none cursor-pointer touch-manipulation"
      style={{
        backgroundImage: `linear-gradient(to right, white ${volume * 100}%, transparent ${volume * 100}%)`
      }}
      aria-label="Volume"
    />
  </div>
);