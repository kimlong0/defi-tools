import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// Components
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DEFI-Tools</title>
        <meta name="description" content="CDP dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black h-screen'>
        <Navbar />
        <div className='flex justify-center items-center'>
          <div className='h-80 rounded-lg max-w-xl bg-white p-6 grow'>
            <div className='w-full'>
              <h2>Overview</h2>
            </div>
            
          </div>
        </div>
      </main>
    </>
  )
}
