
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployee from "./components/UpdateEmployee";


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route index element={<ListEmployeeComponent />} />
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/employeeList" element={<ListEmployeeComponent />} />
          <Route path="/addEmployee" element={<CreateEmployeeComponent />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;