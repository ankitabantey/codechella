
import { loadModules } from "esri-loader";
import { WebMapView } from "../components/WebMapView";
import { Grid, Center, GridItem, Box, Flex, Spacer } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import TweetList from "../components/TweetList";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button } from "@material-ui/core";
import EventInfo from '../components/EventInfo'
import EventProvider, { EventContext } from '../providers/EventProvider.js';

export default function Home() {
  const [events, setEvents] = React.useState(null);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const eventContext = useContext(EventContext);

  async function getEvents() {
    const res = await axios.get('/getEvents')
    setEvents(res.data.events)
  }



    

  React.useEffect(() => {
    getEvents();
  }, []);

  if (!events) return (<Box p={30}><Center><Spinner /></Center></Box>);


  return (
    <Box p={10}>
      <Flex>
        <Box w="15vw" h="100vh" bg="transparent" mr="10px">

            <Box className="sidebar">
              {/* Twitter Icon */}
              <TwitterIcon className="siderbar__twitterIcon" />
              <SidebarOption Icon={HomeIcon} text="Home" />
              <SidebarOption Icon={SearchIcon} text="Explore" />
              <SidebarOption active Icon={SearchIcon} text="Events" />
              <SidebarOption
                Icon={NotificationsNoneIcon}
                text="Notifications"
              />
              <SidebarOption Icon={MailOutlineIcon} text="Messages" />
              <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
              <SidebarOption Icon={ListAltIcon} text="Lists" />
              <SidebarOption Icon={PermIdentityIcon} text="Profile" />
              <SidebarOption Icon={MoreHorizIcon} text="More" />
              {/* Button -> Tweet */}
              <Button variant="outlined" className="siderbar__tweet" fullWidth>
                TWEET
              </Button>
            </Box>
          
        </Box>
        <Grid
          h="100vh"
          w="80vw"
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={5} colSpan={6} bg="GhostWhite">
            <WebMapView geocodes={events.map((event) => event.location)} />
          </GridItem>
          <GridItem rowSpan={10} colSpan={2} bg="ghostWhite">
            <EventInfo />
          </GridItem>
          <GridItem rowSpan={5} colSpan={6}>
            <TweetList
              events={events}
              onEventSelect={(event) => setSelectedEvent(event)}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
