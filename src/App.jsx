import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import Workers from "./components/Workers";
import WorkerCreate from "./components/workerCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="workers" element={<Workers/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="create" element={<WorkerCreate/>}/>
      </Routes>
    </Router>
  );
}

export default App;
