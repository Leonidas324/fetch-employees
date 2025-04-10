import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  EmployeeCard from './components/EmployeeCard';


const oneEmployee = {  

name: {  
   first: "Eric",
   last:"Mauer",

},
email: "eric.mauer@example.com",
picture: {
      medium:  " https://randomuser.me/api/portraits/men/78.jpg",
},

};





function App() {
  const [employee, setEmployee] = useState(oneEmployee);

 const getEmployee = () => {
  // Send the request
  fetch("https://randomuser.me/api?nat=en")
       .then((response) => response.json())
       .then((data) => {
         console.log;setEmployee(data.results[0]);

 });
};




  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  )
}

export default App
