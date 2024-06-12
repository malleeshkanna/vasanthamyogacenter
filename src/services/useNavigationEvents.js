import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useNavigationEvents = (onStart, onEnd) => {
  const location = useLocation();

  useEffect(() => {
    if (onStart) onStart();

    // Use a timeout to simulate navigation end event after route change
    const timeoutId = setTimeout(() => {
      if (onEnd) onEnd();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location, onStart, onEnd]);
};

export default useNavigationEvents;
