"use client"
import Image from "next/image"
import logo from '../../../../assets/main_logo.png'
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import MobileMenu from "../icons/MobileMenu"
import { useState } from "react"
import Footer from "./Footer"

function AuthLinks({status, userName}) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-black rounded-full text-white px-8 py-2">
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'} className="hover:text-gray-700 hover:text-xl">Login</Link>
        <Link href={'/register'} className="bg-black rounded-full text-white px-8 py-2  hover:text-lg">
          Register
        </Link>
      </>
    );
  }
}

export default function  Header(){

  
 const [moblieNav ,setMobileNav] = useState(false)
  const session = useSession()
  // console.log(session)
  const status = session?.status
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if(userName && userName.includes(' ')){
    userName =userName.split(' ')[0]
  }

    return (
        <>
    <header className=" ">
         {/* for mobilelogo */}
      <div className=" flex md:hidden   justify-between items-center">
    <Link href={"/"}><Image src={logo}  alt="logo" height={100}className="md:w-10"></Image></Link>
    <button className="border p-2" onClick={() =>setMobileNav(prev => !prev)}>
      <MobileMenu/>
    </button>
        
      </div>
  {/*for mobile */}
  {
    moblieNav &&(
<div className="md:hidden p-4 bg-gray-300 rounded-lg mt-2 flex flex-col gap-3 font-semibold text-center"
onClick={()=>setMobileNav(false)}

>

  <Link href={'/'} className="hover:text-gray-700 hover:text-xl">Home</Link>
          <Link href={'/menupage'} className="hover:text-gray-700 hover:text-xl">Menu</Link>
          <Link href={'/#about'} className="hover:text-gray-700 hover:text-xl">About</Link>
          <Link href={'/#contact'} className="hover:text-gray-700 hover:text-xl">Contact</Link>
          <AuthLinks status={status} userName={userName}/>
  
</div>
    )
  }



    {/* nav bar */}
    
    <div className="hidden md:flex items-center justify-between">
    <nav className="flex items-center gap-10 text-gray-500 font-semibold">
    <Link href={"/"}><Image src={logo}  alt="logo" height={150}className=""></Image></Link>
    
    


    <Link href={'/'}  className="hover:text-gray-700 hover:text-lg">Home</Link>
          <Link href={'/menupage'} className="hover:text-gray-700 hover:text-lg">Menu</Link>
          <Link href={'/#about'} className="hover:text-gray-700 hover:text-lg">About</Link>
          <Link href={'/#contact'} className="hover:text-gray-700 hover:text-lg">Contact</Link>

    
      

    </nav>
    <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      <AuthLinks status={status} userName={userName}/>


    </nav>
      </div>
  </header>

  </>

    );
}
