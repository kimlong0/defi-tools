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
      <Navbar />
      <main className='h-screen bg-amber-100'>
        <div className='max-w-7xl m-auto flex flex-col'>
          <div className='mx-6'>
            <div className='mt-12 mb-3'>
              <h1 className='text-4xl font-semibold'>ETH-X Vault</h1>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 my-3'>
              <p>Current Price <span className='font-bold'>$1621.05</span></p>
              <p>Next Price <span className='font-bold'>$1645.41</span></p>
            </div>

            <div className='flex gap-4'>
              <p>Collateral Locked <span>$0.00</span></p>
              <p>Min. Collateral Ratio <span>$0.00</span></p>
              <p>X Borrowed <span>$0.00</span></p>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-6 my-6'>
              <div className='h-80 rounded-3xl bg-white p-6'>
                <div className='w-full pt-3 pb-6'>
                  <h2 className='font-semibold'>Overview</h2>
                </div>
                <div>
                  <h3>Liquidation Price</h3>
                  <p>$0.00</p>
                </div>
                <div>
                  <h3>Collateralization Ratio</h3>
                  <p>$0.00</p>
                </div>
              </div>
              <div className='h-80 grow rounded-3xl bg-white p-6'>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
