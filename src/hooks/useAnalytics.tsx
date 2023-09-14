import { getAnalytics, isSupported } from 'firebase/analytics';
import { useEffect } from 'react';
import useFirebase from './useFirebase';

const useAnalytics = () => {
  const firebase = useFirebase();
  useEffect(() => {
    if (firebase) {
      isSupported().then((isSupported) => {
        if (isSupported) {
          getAnalytics(firebase);
        }
      });
    }
  }, [firebase]);
};

export default useAnalytics;