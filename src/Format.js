// import React from 'react'
// import { useState } from 'react';

// const Format = () => {

//     const [data,setFullData] = useState({
//         Name:"",
//         Lname:"",
//         Mobile:"",
//         Email:"",
//     });
  
  
//     const handleChange = (e) => {
//       const {name,value} = e.target;
//       // console.log(e.target.value);
//       setFullData((prevdata)=>({
//         ...prevdata,[name]:value,
//       }))
//     }
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(data);
//     //   setFullData(data)
//     }
//     return (
//       <div>
//         <div>Temprature converter</div>
//         <form onSubmit={handleSubmit}>
//         <div>
//           <label >Name:</label>
//           <input type="text" name="Name" value={data.Name} onChange={handleChange}/>
//           {/* <button onClick={handleSubmit}>submit</button> */}
//         </div>
//         <div>
//           <label >LName:</label>
//           <input type="text" name="LName" value={data.Lname} onChange={handleChange}/>
//         </div>
//         <div>
//           <label >Mobile:</label>
//           <input type="number" name="Mobile" value={data.Mobile} onChange={handleChange}/>
//         </div>
//         <div>
//           <label >Email:</label>
//           <input type="email" name="Email" value={data.Email} onChange={handleChange}/>
//         </div>

//         <button onClick={handleSubmit}>submit</button>
// </form>
//       </div>
//     )
//   }

// export default Format
