// import React, { useState } from "react";
// import { Collapse } from "reactstrap";

// const Accordion = ({ title, content }) => {
//   const [toggleQuestion, setToggequestion] = useState(false);

//   return (
//     <div className="accordion-item py-2">
//       <div
//         className="w-100 cursor-pointer d-flex justify-content-between"
//         onClick={() => setToggequestion(!toggleQuestion)}
//       >
//         <span className="primary-color">{title}</span>
//         <span className="primary-color">
//           {toggleQuestion ? "v" : ">"}
//         </span>
//       </div>
//       <Collapse isOpen={toggleQuestion}>
//         <p className="py-2">{content}</p>
//       </Collapse>
//     </div>
//   );
// };

// export default Accordion;