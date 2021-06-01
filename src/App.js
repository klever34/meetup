import React from 'react';
import {Route,Switch} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from  "./pages/Favorites";
import MainNavigation from './layout/MainNavigation'



function App() {
  return (
    <div>
      
     <Switch> 
     <Route exact path="/"> 
       <AllMeetupsPage/>
     </Route>
     <Route path="/favorites">
       <FavoritePage/>
     </Route>
     <Route path="/new-meetup">
       <NewMeetupPage/>
     </Route>
     </Switch>
    </div>
  );
}

export default App;
