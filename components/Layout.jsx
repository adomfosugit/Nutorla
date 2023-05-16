import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <div className=  'p-2 bg-gradient-to-r from-slate-100 from-10% via-slate-400 via-30% to-blue-200 to-70% ... '>
    
        <Head >
            <title >
               NURTOLA 
            </title>
        </Head>
        <header >
            <Navbar />
        </header>
        <main className='main-container'>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>

    </div>
  )
}

export default Layout