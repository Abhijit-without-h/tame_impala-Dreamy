import { AudioControls } from './audio/AudioControls';
import { useAudioPlayer } from './audio/useAudioPlayer';

export const BackgroundMusic = () => {
  const { audioRef, isPlaying, isMuted, volume, togglePlay, toggleMute, handleVolumeChange } = useAudioPlayer();

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-black/30 backdrop-blur-sm p-3 rounded-full">
      <audio
        ref={audioRef}
        src="/Let It Happen Tame Impala.mp3"
        loop
      />
      <AudioControls
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        onPlayPause={togglePlay}
        onMute={toggleMute}
        onVolumeChange={handleVolumeChange}
      />
      <div className="text-white/80 text-sm whitespace-nowrap">
        Let It Happen - Tame Impala
      </div>
    </div>
  );
};