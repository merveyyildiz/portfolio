import Head from 'next/head'
import React from 'react'
import Header from "./Header";

const Layout = ({ title, description, children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <meta property='og:site_name' content='Portfolio' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />

        </Head>
        <div className='min-h-screen px-3 pt-4 bg-primary-light antialiased font-istok dark:bg-gray-900 dark:text-white'>
            <div className='w-full h-full'>
                <Header />
                {children}
            </div>

        </div>
   
    </>
  )
}

export default Layout