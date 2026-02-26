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
    if (wakeLock) await wakeLock.release();
  }, [wakeLock]);

  const toggle = useCallback(() => {
    if (isActive) releaseWakeLock();
    else requestWakeLock();
  }, [isActive, requestWakeLock, releaseWakeLock]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isActive && !wakeLock) {
        requestWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isActive, wakeLock, requestWakeLock]);

  useEffect(() => {
    return () => { if (wakeLock) wakeLock.release(); };
  }, [wakeLock]);

  if (!isSupported) return null;

  return (
    <button
      onClick={toggle}
      className={`text-xs px-2 py-1 transition-colors duration-150 ${
        isActive
          ? 'text-green-700 dark:text-green-400'
          : 'text-stone-400 dark:text-neutral-500 hover:text-stone-700 dark:hover:text-neutral-300'
      }`}
      aria-label={isActive ? 'Screen on — tap to disable' : 'Keep screen on'}
      title={isActive ? 'Screen will stay on — tap to disable' : 'Tap to keep screen on while cooking'}
    >
      {isActive ? 'Screen on' : 'Screen on?'}
    </button>
  );
};

export default WakeLockToggle;
