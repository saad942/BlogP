import Footer from "./footer/footer";
import Nav from "./nav/nav";
import Home from "./home/home";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
     <Footer/>
    </div>
  );
}
// import React, { useState } from "react";
// import './aaa.css';

// function App() {
//   const [color, setColor] = useState(true);
//   const [name, setName] = useState('')
//   const [namesList, setNamesList] = useState([]);
//   const [colore,setColore]=useState()


//   const handleClick = () => {
//     setColor(false);
//     test();
//   }

//   const test = () => {

//     document.body.style.backgroundColor = 'white';
//   }
//   const add = (e) => {
//     e.preventDefault();
//     setNamesList([...namesList, name])

//   }
//   const delet = (index) => {
//     const updatedNamesList = [...namesList];
//     updatedNamesList.splice(index, 1);
//     setNamesList(updatedNamesList);
//   };
  



//   return (
//     <div className="aaa">
//       {color ? (
//         <div>


//           <button onClick={handleClick}>tvt</button>
//         </div>
//       ) : (
//         <div>
//              <input type="text" onChange={(e) => setName(e.target.value)} />
//           <button onClick={add}>Add</button>
//           <h1>{name}</h1>
//           <ul>
//             {namesList.map((name, index) => (
//               <li key={index}>{name} <button onClick={()=>delet(index)}>delete</button></li> 
//             ))}
//           </ul>

//           <div id="brd" style={{ backgroundColor: colore, width: "100px", height: "100px" }}></div>

//           <select value={colore} onChange={(e)=>setColore(e.target.value)}>
//           <option value="">Select Color</option>
//         <option value="red">Red</option>
//         <option value="blue">Blue</option>
//         <option value="black">Black</option>
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }

export default App;



