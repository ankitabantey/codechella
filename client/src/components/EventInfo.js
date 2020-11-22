import React, {useState, useContext} from 'react';
import { loadModules } from 'esri-loader';
import './components.css'; 
import { Box, Flex, Link, Spacer, Button, ButtonGroup, Grid, GridItem, Center, Heading } from "@chakra-ui/react";
import CreateEvent from './CreateEvent.js';
import selectedEvent from '../Pages/Home.js';
import EventProvider, {EventContext} from '../providers/EventProvider.js';



export default function EventInfo() {
  //const [selectedEvent, setSelectedEvent] = React.useState(null);
  const eventContext = useContext(EventContext);

  if (eventContext.state.event == null) {
    return (
      <Box className="fullsize" backgroundColor="white">
      <Box h="80%" backgroundColor="white">
        <Box p={5} backgroundColor="GhostWhite" borderRadius="16px" >
        <Center>
          <p>Select an event to view the details</p>
        </Center>
        
        
          
        </Box>
      
      </Box>
      <Box h="20%">
      <Center h="100%" w="100%" backgroundColor="white">
        <Button class="twitterButton" >Create Event</Button>
      </Center>
      
      
      
      </Box>
      
    </Box>
    );
    
  } else if (eventContext.state.event.virtual){
    
    var link = eventContext.state.event.url;
    
  
  return (
        
        <Box className="fullsize" backgroundColor="white">
          <Box h="45%" backgroundColor="white">
            <Box p={5} backgroundColor="GhostWhite" borderRadius="16px" >
            <Heading>{eventContext.state.event.name}</Heading>
            <p>{eventContext.state.event.description}</p>
            <p>{eventContext.state.event.date}</p>
            <p>{eventContext.state.event.time}</p>
            <Link href={link} class="link">Join the virtual event</Link>
            <p>#{eventContext.state.event.hashtags}</p>
            
              
            </Box>
          
          </Box>
          <Box h="20%" >
          <Center h="0%" w="100%" backgroundColor="white">
            <Button class="twitterButton" >Create Event</Button>
          </Center>
          
          
          
          </Box>
          
        </Box>

    );
  } else {

    <Box className="fullsize" backgroundColor="white">
          <Box h="80%" backgroundColor="white">
            <Box p={5} backgroundColor="GhostWhite" borderRadius="16px" >
            <Heading>{eventContext.state.event.name}</Heading>
            <p>{eventContext.state.event.description}</p>
            <p>{eventContext.state.event.date} {eventContext.state.event.time}</p>
            <p>{eventContext.state.event.hashtags}</p>
            
            
              
            </Box>
          
          </Box>
          <Box h="20%" >
          <Center h="100%" w="100%" backgroundColor="white">
            <Button class="twitterButton" >Create Event</Button>
          </Center>
          
          
          
          </Box>
          
        </Box>
  
  }

} 

