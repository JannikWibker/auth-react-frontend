import React from 'react'

export default ({ color='currentColor', strokeWidth=2, width='24', height='24' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)