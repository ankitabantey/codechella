import React from 'react';
import { loadModules } from 'esri-loader';
import './components.css'; 
import { Box, Flex, Spacer, Button, ButtonGroup } from "@chakra-ui/react";
import CreateEvent from './CreateEvent.js';

export class HashtagDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
   
  }

  render() {
    return (
        
        <Box className="fullsize" >
          <CreateEvent />
        </Box>

    );
  }
}