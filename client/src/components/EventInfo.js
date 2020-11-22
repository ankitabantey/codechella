import React from 'react';
import { loadModules } from 'esri-loader';
import './components.css'; 
import { Box, Flex, Spacer, Button, ButtonGroup, Grid, GridItem, Center } from "@chakra-ui/react";
import CreateEvent from './CreateEvent.js';

export class EventInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
   
  }

  render() {
    return (
        
        <Box className="fullsize" backgroundColor="white">
          <Box h="80%" backgroundColor="white">
            <Box p={5} backgroundColor="GhostWhite" borderRadius="16px" >
            <h1>Event Details</h1>
            <p>Event Title</p>
            <p>Description</p>
            <p>Location</p>
            <p>URL</p>
            
            
              
            </Box>
          
          </Box>
          <Box h="20%" backgroundColor="tomato">
          <Center h="100%" w="100%" backgroundColor="white">
            <Button class="twitterButton" >Create Event</Button>
          </Center>
          
          
          
          </Box>
          
        </Box>

    );
  }
}

export default EventInfo;