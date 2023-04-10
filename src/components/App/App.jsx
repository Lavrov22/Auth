import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';


const Login = lazy(() => import('../../pages/Login'));

function App() {
  return (

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<div>Register</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

  );
}

export default App;
