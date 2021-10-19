import {
    Badge,
    chakra,
    Code,
    Heading,
    List,
    ListItem,
    OrderedList,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Link } from 'react-router-dom'
  import { Layout } from '../components/Layout'
  
  export default function Homepage() {
    return (
      <Layout>
        <Heading>Home page</Heading>
        {/* <Text my={6}>{currentUser?.email}</Text> */}
  
        <Heading>
          Firebase Authentication
         
          <Badge
            fontWeight='black'
            fontSize='4xl'
            mx={2}
            px={2}
            colorScheme='green'
          >
          keerthana API
          </Badge>
        </Heading>
        
        <Heading size='md' mt={8}>
           links (only for reference):
        </Heading>
        <List>
          <ListItem>
            <Link to='/reset-password'>reset page</Link>
          </ListItem>
          <ListItem>
            <Link to='/forgot-password'>forgot page</Link>
          </ListItem>
          <ListItem>
            <Link to='/test'>test page</Link>
          </ListItem>
        </List>
      </Layout>
    )
  }
