import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import { Flex, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Box, Link } from "@chakra-ui/react";

import Login from '../components/Basic/Login'
import Header from "../components/Basic/Header";


import BuyAvax from '../components/Interact/BuyAvax'
import TradeAvax from '../components/Interact/TradeAvax'
import InvestUsdc from '../components/Interact/InvestUsdc'

export default function Home() {
  const { isAuthenticated, user, isAuthenticating, authenticate, logout, isLoggingOut } = useMoralis();
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Gain10X</title>
        </Head>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgColor="aliceblue">
          <Text class="text-7xl" fontWeight="bold" color="dark">Welcome to Gain10X First Auction.</Text>
          <Login />
          <Link fontSize="3xl" fontWeight="bold" color="black" href="https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche" target="_blank">Add avalanche to MetaMask</Link>
        </Flex>

      </>
    )
  }
  return (
    <>
      <Head>
        <title>Gain10X</title>
      </Head>
      <Flex direction="column" justifyContent="center" width="100vw" height="100vh" bgColor="aliceblue">
        <Header isAuthenticated={isAuthenticated} isAuthenticating={isAuthenticating} user={user} authenticate={authenticate} logout={logout} isLoggingOut={isLoggingOut} />
        <Box flex="1" bg="aliceblue" px="52" py="20">
          <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
            <TabList>
              <Tab fontWeight="bold">Buy</Tab>
              <Tab fontWeight="bold">Trade</Tab>
              <Tab fontWeight="bold">Invest</Tab>

            </TabList>
            <TabPanels>
              <TabPanel>
                <BuyAvax />
              </TabPanel>
              <TabPanel>
                <TradeAvax />
              </TabPanel>
              <TabPanel>
                <InvestUsdc user={user}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  )
}
