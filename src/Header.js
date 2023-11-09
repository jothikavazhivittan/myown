import React from 'react'

const Header = ({title}) => {
  return (
    <main>
    <header>{title}</header>
    </main>
  )
}
Header.defaultProps={
  title:'Jothika Become'
}

export default Header