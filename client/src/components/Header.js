import React from "react";
import { Box, Heading, Flex, Text, Button, Avatar } from "@chakra-ui/react";
import {useUser} from '../providers/UserProvider'
import {useHistory} from 'react-router-dom'

const MenuItems = ({ children, onClick }) => (
  <Text onClick={onClick} cursor='pointer' mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const history = useHistory()
  const {user, isSignedIn, signIn, signOut} = useUser()

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="brand.700"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          TwitterTogether
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        justifyContent='flex-start'
        ml='50px'
        mr='20vw'
        flexGrow={1}
      >
        <MenuItems as='a' onClick={() => history.push('/new')}>Create Event</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {isSignedIn ?
        <Avatar as='button' onClick={signOut} name={user.name} src={user.imageUrl}/>
        :
        <Button bg="transparent" border="1px" onClick={signIn}>
          Login With Twitter
        </Button>}
      </Box>
    </Flex>
  );
};

export default Header;