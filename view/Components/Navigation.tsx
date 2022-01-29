import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic from "../Ressources/doom-eternal-pc-ps4-xone-switch-35158d3f.jpg"

const Navigation = (props:{navItems:string[], authenticated:boolean}) => {
    return (
        <nav className=' px-10 flex justify-between items-center fixed top-0 w-screen h-24 bg-black text-white shadow' >
            <div>
                <h1 className='md:text-6xl text-3xl'>IT</h1>
            </div>
            <div className=''>
                <ul className=' min-w-max flex justify-between items-center'>
                    {props.navItems.map((Element,index) => (
                        <li key={index} className='mr-12'><Link href={`/${Element}`}>{Element}</Link></li>
                    ))}
                    {props.authenticated
                    ?
                     <>
                    <div className="relative w-14 h-14">
                    <Image
                    className="rounded-full"
                     src={pic} alt="user image"   
                     width={56}
                     height={56}
      />
                      <div className="absolute h-4 w-4 my-1 rounded-full bg-red-500 z-2" style={{"top":"-5px","left":"-5px"}}></div>
                    </div>  
                    </>           
                    :<>
                    <li className='mr-12'><Link href="/login"> Login</Link></li>
                    <li className='py-2 px-6 bg-blue-800 rounded-md'><Link href="/signup"> Sign up</Link></li>
                    </>
                    }                                                                                   
                </ul>        
                <div>                    
                </div>      
            </div>
        </nav>
    )
}

export default Navigation
