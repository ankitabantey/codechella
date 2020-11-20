import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../Pages/Home'
import EventPage from '../Pages/Event.js'
import NewEvent from '../Pages/NewEvent'
import EventManager from '../Pages/EventManager'


export default function Navigation() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/events/:eventID' component={EventPage}/>
            <Route exact path='/manage' component={EventManager}/>
            <Route exact path='/new' component={NewEvent}/>
            <Redirect to='/'/>
        </Switch>    
    )
}
