import { Routes, Route, Navigate  } from "react-router-dom";
import { lazy, Suspense, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { refreshing } from "../../redux/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const UserPage = lazy(() => import('../../pages/UserPage'));

function App() {
  const isRefreshing = useSelector(state => state.isRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshing())
  }, [dispatch])
  
  return isRefreshing ? <div>Loading...</div> : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={
          <RestrictedRoute component={Login} redirectTo='/user' />} />
        <Route path="/register" element={
          <RestrictedRoute component={Register} redirectTo='/user' />} />
        <Route path="/user" element={
          <PrivateRoute component={UserPage} redirectTo="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>

  )
}

export default App;
