// import React, { useState } from "react"

// function Dropdown({ title, companies, multiSelect = false }) {
//   const [open, setOpen] = useState(false)
//   const [selection, setSelection] = useState([])
//   const toggle = () => setOpen(!open)

//   function handleOnClick(company) {}

//   return (
//     <div className="dd-wrapper">
//       <div
//         tabIndex={0}
//         className="dd-header"
//         role="button"
//         onKeyPress={() => toggle(!open)}
//         onClick={() => toggle(!open)}
//       >
//         <div className="dd-header__title">
//           <p className="dd-header__title--bold">{title}</p>
//         </div>
//         <div className="dd-header__action">
//           <p>{open ? "Close" : "Open"}</p>
//         </div>
//       </div>
//       {open && (
//         <ul className="dd-list">
//           {companies.map((company) => (
//             <li className="dd-list-item" key={company.id}>
//               <button type="button" onClick={() => handleOnClick(company)}>
//                 <span>{company.name}</span>
//                 <span>Selected ...</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// // export default Dropdown
