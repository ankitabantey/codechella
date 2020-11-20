import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../Pages/Home'
import EventPage from '../Pages/Event.js'
import NewEvent from '../Pages/NewEvent'
import EventManager from '../Pages/EventManager'


export default function Navigation() {
    return (
        <Switch>
            <Route path='/' component={Home}/>
            <Route path='/events/:eventID' component={EventPage}/>
            <Route path='/manage' component={EventManager}/>
            <Route path='/new' component={NewEvent}/>
            <Redirect to='/'/>
        </Switch>    
    )
}
