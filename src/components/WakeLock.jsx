import { useState, useEffect, useRef } from 'react';

const WakeLock = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSupported] = useState(() => 'wakeLock' in navigator);
  const lockRef = useRef(null);

  const request = async () => {
    try {
      lockRef.current = await navigator.wakeLock.request('screen');
      lockRef.current.addEventListener('release', () => {
        lockRef.current = null;
        setIsActive(false);
      });
      setIsActive(true);
    } catch {
      setIsActive(false);
    }
  };

  const release = async () => {
    if (lockRef.current) {
      await lockRef.current.release();
      lockRef.current = null;
      setIsActive(false);
    }
  };

  // Re-acquire when the page becomes visible again (required by the Wake Lock API spec)
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isActive && !lockRef.current) {
        request();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [isActive]);

  // Always release on unmount
  useEffect(() => {
    return () => { if (lockRef.current) lockRef.current.release(); };
  }, []);

  if (!isSupported) return null;

  return (
    <button
      onClick={isActive ? release : request}
      title={isActive ? 'Screen will stay on' : 'Tap to keep screen on while cooking'}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold
        border transition-all duration-200 select-none
        ${isActive
          ? 'bg-terra-500 border-terra-600 text-white shadow-sm'
          : 'bg-white dark:bg-forest-900 border-forest-200 dark:border-forest-700 text-neutral-500 dark:text-cream/60 hover:border-terra-300 hover:text-terra-600 dark:hover:text-terra-300'
        }
      `}
    >
      {/* Screen / brightness icon */}
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isActive ? (
          // Solid eye — screen is being kept on
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        ) : (
          // Eye with slash — screen may sleep
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        )}
      </svg>
      {isActive ? 'Screen on' : 'Keep screen on'}
    </button>
  );
};

export default WakeLock;
