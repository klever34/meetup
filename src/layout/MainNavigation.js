import React from "react";
import { Link } from "react-router-dom";
import classes from './cssfolder/MainNavigation.module.css';

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
         <div className={classes.logo}> 
             React Meetups
         </div>
        <nav>
          <ul>
            <li>
              <Link to="/">all meet-ups</Link>
            </li>
            <li>
              <Link to="/new-meetup">New meet-ups</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
