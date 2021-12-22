import type { NextPage } from 'next'
import Navigation from '../Components/Navigation'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-900 flex justify-center items-center'>
      <Navigation navItems={["Home","Blog","Portfolio","Contact"]} authenticated={false}/>
     <h1 className='text-4xl text-white '>I am the  main page</h1>
    </div>
  )
}

export default Home
