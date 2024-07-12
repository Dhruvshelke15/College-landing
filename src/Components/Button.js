import React from 'react'

const Button = ({ backgroundColor = '#292967', color = 'white' }) => {
    const mybutton = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "54px",
        width: "185.49px",
        borderRadius: '27.08px', 
        backgroundColor: backgroundColor, 
        color: color, 
        border: 'none', 
        cursor: 'pointer', 
        padding: '8px 16px',
        fontweight: "700px",
        fontsize: "16px",
        fontstyle: "santoshi"
        
    }
  return (
    <button style={mybutton}>Enquiry Now 
    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6" width="34"
    >
    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  </button>
  )
}

export default Button;