"use client";
import Image from "next/image";
import google from "../../../assets/google.png";
import { signIn } from "next-auth/react";

import { useState } from "react";
import Link from "next/link";
export default function RegsiterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <>
      <section className="lg:mt-4 mt-28  mx-50    pb-56 lg:pb-8 ">
        <h1 className="text-center text-4xl font-semibold mt-10   ">
          Register
        </h1>
        {/*  msg */}
        {userCreated && (
          <div className="my-4 text-center font-semibold">
            User created.<br></br>Now you can login{" "}
            <Link href={"/login"} className="underline">
              {" "}
              Login &raquo;
            </Link>
          </div>
        )}
        {/* error */}
        {error && (
          <div className="my-4 text-center text-red-600 ">
            An error has ocuured. <br></br>
            please try again later
          </div>
        )}

        {/* form */}
        <form
          action=""
          className="block max-w-xs mx-auto"
          onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            disabled={creatingUser}
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            disabled={creatingUser}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
          <button type="submit" disabled={creatingUser}>
            Register Now
          </button>
          {/* log in with google */}
          <div className="my-4 text-center text-gray-600">
            or login with provider
          </div>
          {/*           
                <button    type = "button" className="block w-full text-gray-700 font-semibold
 border border-gray-400 rounded-xl px-6 py-2 mt-3 flex justify-center items-center gap-4">
                  <Image src={google} height={32} width={24} alt='logwith google' onClick={()=> signIn('google',{callbackUrl:'/'})}
                  
                  
                  ></Image>  Login with Google
                </button> */}
          <button
            type="button"
            className="block w-full text-gray-700 font-semibold
          border border-gray-400 rounded-xl px-6 py-2 mt-3 flex justify-center items-center gap-4"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <Image src={google} alt={""} width={24} height={24} />
            Login with google
          </button>

          <div className="my-4  text-center text-gray-700 border-t pt-4">
            Existing account ?{" "}
            <Link href={"/login"} className="font-semibold underline">
              {" "}
              Login here &raquo;
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
