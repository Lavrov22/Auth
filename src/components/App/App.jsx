import { Routes, Route, Navigate  } from "react-router-dom";
import { lazy, Suspense, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { refreshing } from "../../redux/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "../Loader/Loader";

const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const UserPage = lazy(() => import('../../pages/UserPage'));

function App() {
  const isRefreshing = useSelector(state => state.isRefreshing);
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshing())
  }, [dispatch])
  
  return isRefreshing ? <Loader /> : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={
          isLoading ? <Loader /> :
            <RestrictedRoute component={Login} redirectTo='/user' />
        } />
        <Route path="/register" element={
          isLoading ? <Loader /> :
            <RestrictedRoute component={Register} redirectTo='/user' />} />
        <Route path="/user" element={
          isLoading ? <Loader /> :
            <PrivateRoute component={UserPage} redirectTo="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )

}

export default App;
