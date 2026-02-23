import { useState, useEffect, useCallback } from 'react';

const WakeLockToggle = () => {
  const [wakeLock, setWakeLock] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isSupported] = useState(() => 'wakeLock' in navigator);

  const requestWakeLock = useCallback(async () => {
    try {
      const lock = await navigator.wakeLock.request('screen');
      setWakeLock(lock);
      setIsActive(true);
      lock.addEventListener('release', () => {
        setIsActive(false);
        setWakeLock(null);
      });
    } catch (err) {
      console.warn('Wake lock request failed:', err);
    }
  }, []);

  const releaseWakeLock = useCallback(async () => {
    if (wakeLock) {
      await wakeLock.release();
    }
  }, [wakeLock]);

  const toggle = useCallback(() => {
    if (isActive) {
      releaseWakeLock();
    } else {
      requestWakeLock();
    }
  }, [isActive, requestWakeLock, releaseWakeLock]);

  // Re-acquire wake lock if page becomes visible again (e.g. tab switch back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isActive && !wakeLock) {
        requestWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isActive, wakeLock, requestWakeLock]);

  // Release on unmount
  useEffect(() => {
    return () => {
      if (wakeLock) wakeLock.release();
    };
  }, [wakeLock]);

  if (!isSupported) return null;

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 border ${
        isActive
          ? 'bg-indigo-600 dark:bg-cyan-600 text-white border-indigo-600 dark:border-cyan-600'
          : 'bg-white dark:bg-neutral-700 text-neutral-500 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600 hover:border-indigo-400 dark:hover:border-cyan-500'
      }`}
      aria-label={isActive ? 'Screen lock: on (tap to turn off)' : 'Screen lock: off (tap to keep screen on)'}
      title={isActive ? 'Screen will stay on — tap to disable' : 'Tap to keep screen on while cooking'}
    >
      {/* Phone/screen icon */}
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      {isActive ? 'Screen on' : 'Keep screen on'}
    </button>
  );
};

export default WakeLockToggle;
