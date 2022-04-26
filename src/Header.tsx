import React from 'react';

interface PropT {
  children: React.ReactNode
}

function Header({ children }: PropT) {
  return (
    <header>
      {children}
    </header>
  )
}

export default Header;