import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Home from "./components/Home";
import CreateEmp from "./components/CreateEmp";
import EditEmployee from "./components/EditEmployee";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import EditProject from "./components/EditProject";
import Tickets from "./components/Tickets";
import CreateTicket from "./components/CreateTicket";
import EditTicket from "./components/EditTicket";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/employee" element={<Employee />} />
          <Route path="" element={<Home />} />
          <Route path="/create" element={<CreateEmp />} />
          <Route path="/employeeEdit/:id" element={<EditEmployee />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/createProject" element={<CreateProject />} />
          <Route path="/projectEdit/:id" element={<EditProject />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/createTicket" element={<CreateTicket />} />
          <Route path="/ticketEdit/:id" element={<EditTicket />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
