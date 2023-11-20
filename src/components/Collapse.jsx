// import { useState } from 'react'

// import arrow from '../assets/arrow_back.svg'

// function Collapse({ title, text }) {

// const {isOpen, setIsOpen } = useState(false);

//   return (
//     <div className="collapse">
//       <div className="collapseTitle" onClick={ () => setIsOpen(!isOpen) }>
//         <p>{ title }</p>
//         <img src={ arrow } alt="arrow" />
//       </div>
//       <div className="collapseText">
//         <p>{ text }</p>
//       </div>
//     </div>
//   )
// }

// export default Collapse

///////////////////////
import React, { useState } from 'react'
import arrow from '../assets/arrow_back.svg'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <img src={arrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className="collapseText">
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
