import { getAnalytics, isSupported } from 'firebase/analytics';
import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';
import { Auth, getAuth } from 'firebase/auth';

const useAnalytics = () => {
  const [auth, setAuth] = useState<Auth>();  
  const firebase = useFirebase();
  useEffect(() => {
    if (firebase) {
      setAuth(getAuth(firebase));
    }
  }, [firebase]);

  return auth;
};

export default useAnalytics;