import Head from 'next/head'
import Image from 'next/image'

// Components
import Navbar from '@/components/navbar'

import { useState } from 'react'

export default function Home() {

const [collateralPrice, setCollateralPrice] = useState(1580.00);
const [nextCollateralPrice, setNextCollateralPrice] = useState(1581.50);
const [collateralLocked, setCollateralLocked] = useState(42.4320);
const [ltv, setLtv] = useState(0.85);
const [stablesBorrowed, setStablesBorrowed] = useState(31201.3405);

let collateralValue = collateralPrice * collateralLocked;
let liquidationPrice = ((stablesBorrowed / ltv) / collateralLocked).toFixed(2);

console.log(liquidationPrice);

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
            <div className='mt-12 mb-6'>
              <h1 className='text-4xl font-semibold'>ETH-X Vault</h1>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 my-3'>
              <p>Current Price <span className='font-bold'>${collateralPrice}</span></p>
              <p>Next Price <span className='font-bold'>${nextCollateralPrice}</span></p>
            </div>

            <div className='flex gap-4'>
              <p>Collateral Locked <span>ETH: {collateralLocked}</span></p>
              <p>Min. LTV <span>{ltv * 100}%</span></p>
              <p>Stables Borrowed <span>${stablesBorrowed}</span></p>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-6 my-6'>
              <div className='rounded-3xl bg-white p-6 basis-80'>
                <div className='w-full pt-3 pb-8 border-b-2 border-slate-200'>
                  <h2 className='font-semibold'>Overview</h2>
                </div>
                <div className='flex flex-col gap-12 my-12'>
                  <div className=''>
                    <h3 className='mb-1'>Liquidation Price</h3>
                    <p className='text-3xl font-medium'>${liquidationPrice}</p>
                  </div>
                  <div className=''>
                    <h3 className='mb-1'>LTV</h3>
                    <p className='text-3xl font-medium'>$0.00</p>
                  </div>
                </div>
              </div>
              <div className='grow rounded-3xl bg-white p-6'>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
