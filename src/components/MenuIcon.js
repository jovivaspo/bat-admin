import * as React from "react"

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-align-right"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="rgb(0, 138, 209)"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M4 6h16M10 12h10M6 18h14" />
  </svg>
)

export default MenuIcon