import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Contato</Link>
        </li>
        <li>
          <a href='sobre'>Sobre nós</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;