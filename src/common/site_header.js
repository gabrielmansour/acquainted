import React from 'react';
import { Link } from 'react-router';

export default class SiteHeader extends React.Component {
  render () {
    return (
        <header className="centered-navigation" role="banner">
          <div className="centered-navigation-wrapper">
            <nav role="navigation">
              <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
                <li className="nav-link"><Link to="/">Play!</Link></li>
                <li className="nav-link logo">
                  <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image" />
                </li>
                <li className="nav-link"><Link to="/everyone">List Everyone</Link></li>
              </ul>
            </nav>
          </div>
        </header>
    )
  }
}
