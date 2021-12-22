import React from 'react'
import Link from 'next/link'


const Navigation = (props:{navItems:string[], authenticated:boolean}) => {
    return (
        <nav className=' px-10 flex justify-between items-center fixed top-0 w-screen h-24 bg-black text-white shadow' >
            <div>
                <h1 className='md:text-6xl text-3xl'>IT</h1>
            </div>
            <div className=''>
                <ul className=' min-w-max flex justify-between items-center'>
                    {props.navItems.map((Element,index) => (
                        <li key={index} className='mr-12'><Link href="/">{Element}</Link></li>
                    ))}
                    {props.authenticated
                    ?
                     <>
                    <div className="relative w-14 h-14">
                      <img className="w-full h-full rounded-full" src="https://d3isma7snj3lcx.cloudfront.net/images/gallery/33/338017/doom-eternal-pc-ps4-xone-switch-35158d3f.jpg" alt="user image" />
                      <div className="absolute h-4 w-4 my-1 rounded-full bg-red-500 z-2" style={{"top":"-5px","left":"-5px"}}></div>
                    </div>  
                    </>           
                    :<>
                    <li className='mr-12'><Link href="/login"> Login</Link></li>
                    <li className='py-2 px-6 bg-blue-800 rounded-md'><Link href="/"> Sign up</Link></li>
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
