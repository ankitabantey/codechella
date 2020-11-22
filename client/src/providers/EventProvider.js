import React, { Component, useState, useContext } from 'react';


const initialValue = null; // you may change this

const EventContext = React.createContext(initialValue);


class EventProvider extends Component {
        state = {
            event: null
        };

    
   selectEvent = async (selectedEvent) => {
        await this.setState({event: selectedEvent});
        console.log(this.state.event);
    }
    
    render() {
    return (
        <EventContext.Provider value={{state:this.state, selectEvent: this.selectEvent}}>
            {this.props.children}
        </EventContext.Provider>
    )
    }
}
const useEvent = () => useContext(EventContext);

export { useEvent, EventContext }
export default EventProvider
