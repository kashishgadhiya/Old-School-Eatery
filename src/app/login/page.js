"use client"
import { useState } from "react"
import Image from 'next/image';
import google from '../../../assets/google.png';
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
  
    async function handleFormSubmit(ev) {
      ev.preventDefault();
      setLoginInProgress(true);
  
      await signIn('credentials', {email, password, callbackUrl: '/'});
  
      setLoginInProgress(false);
    }
    
    return (
      <section className="lg:mt-8 lg:pb-28  pb-80 mt-32">
        <h1 className="text-center text-black text-4xl  font-semibold mt-10 pb- ">
          Login
        </h1>
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input type="email" name="email" placeholder="email" value={email}
                 disabled={loginInProgress}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password" name="password" placeholder="password" value={password}
                 disabled={loginInProgress}
                 onChange={ev => setPassword(ev.target.value)}/>
          <button disabled={loginInProgress} type="submit">Login</button>
          <div className="my-4 text-center text-gray-500 ">
            or login with provider
          </div>
          <button type="button" 
          className="block w-full text-gray-700 font-semibold
          border border-gray-400 rounded-xl px-6 py-2 mt-3 flex justify-center items-center gap-4"
          onClick={() => signIn('google', {callbackUrl: '/'})}>
            <Image src={google} alt={''} width={24} height={24} />
            Login with google
          </button>
        </form>
      </section>
    );
  }





  