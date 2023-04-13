import { Routes, Route, Navigate  } from "react-router-dom";
import { lazy, Suspense  } from 'react';


const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<div>User</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>

  )
}

export default App;
