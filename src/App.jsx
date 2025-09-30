// App.jsx (or your top-level layout)
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/login/loginSlice';
import { userInfo } from './api/user.api'; 
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const { data } = await userInfo(); 
        if (isMounted) dispatch(login(data));
      } catch (e) {
        if (isMounted) dispatch(logout());
      }
    })();

    return () => { isMounted = false; };
  }, [dispatch]);

  return (
    <></>
  );
}
