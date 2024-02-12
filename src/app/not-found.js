import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='w-[100vw] h-[70vh] grid grid-cols-1 place-items-center'>
        <Image src={require('../../public/404.jpg')} width={600} height={500} alt="404 error"/>
        
        <Link href={'/'}><button className='bg-green-500 text-black px-3 py-2'>Get back to portfolio</button></Link>
    </div>
  )
}
