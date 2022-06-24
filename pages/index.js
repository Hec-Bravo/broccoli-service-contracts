import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'


import FirstAuctionRead from '../components/FirstAuctionRead'
import Account from '../components/Account'


export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();


  return (
    <div className="grid place-items-center h-screen bg-blue-500">
      {isAuthenticated ?
        <>
          <div className='px-10 py-3 bg-white rounded-lg flex-col'>
            <button type="button" onClick={logout} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Disconnect</button>
          </div>

          <FirstAuctionRead /> 
          <Account user={user}/>
           

        </>
        :
        <Login />
      }
    </div>
  )
}
