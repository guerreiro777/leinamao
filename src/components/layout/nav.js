import React from 'react';
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul >
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/">Quem somos</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
