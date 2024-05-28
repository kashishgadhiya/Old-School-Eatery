"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import UserTabs from "../components/layout/UserTabs";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const [profilesaved, setprofilesaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [sTate, setSTate] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetch,setProfileFetch] =useState(false)
  const { status } = session;


  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
     fetch('/api/profile').then(response =>{
        response.json().then(data =>{
            setAddress(data.Address)
            setPhone(data.phone)
            setPincode(data.pincode)
            setCity(data.city)
            setSTate(data.sTate )
            setIsAdmin(data.admin)
            setProfileFetch(true)

        })
     })
    }
  }, [session, status]);

  async function handleProfileInfo(ev) {
    ev.preventDefault();
    setprofilesaved(false);
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         name: userName,
         phone,
         Address,
         pincode,
         sTate,
         city

        
        }),
    });
    setIsSaving(false);

    if (response.ok) {
      setprofilesaved(true);
    }

    if (status === "loading" || !profileFetch) {
      return "Loading....";
    }
    if (status === "unauthenticated") {
      return redirect("/login");
    }
  }

  const userImage = session.data?.user.image;

  return (
      <section>
     <UserTabs  isAdmin={isAdmin} ></UserTabs>
      <h1 className="text-center text-4xl font-semibold mt-10">Profile</h1>
      <div className="max-w-md mx-auto">
        {profilesaved && (
          <h2 className="text-center mt-3 font-bold  bg-green-200 p-4  rounded-lg border-1 border-green-300">
            Profile saved !
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center mt-3 font-bold  bg-blue-200 p-4  rounded-lg border-1 border-blue-300">
            Saving...
          </h2>
        )}
      </div>

      {/* form */}

      <div className="max-w-md mx-auto ">
        <div className="md:flex   gap-4 ">
          <div>
            <div className=" p-2 rounded-lg relative">
              <Image
                src={userImage}
                alt={"User img"}
                width={80}
                height={80}
                className="rounded-lg"
              ></Image>
            </div>
          </div>
          {/* right */}
          <form className="grow" onSubmit={handleProfileInfo}>
          

            <input
              type="text"
              placeholder="Full name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
              ></input>

            <input
              type="text"
              value={session.data?.user.email}
              disabled={true}
              placeholder="Email"
            ></input>
            <input
              type="tel"
              placeholder="Phone no"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Address"
              value={Address}
              onChange={(ev) => setAddress(ev.target.value)}
            ></input>
            <div className="flex gap-2">
              <input
                style={{'margin' :'0'}}
                type="text"
                placeholder="City"
                value={city}
                onChange={(ev) => setCity(ev.target.value)}
                ></input>
              <input
                style={{'margin' :'0'}}
              className="my-0"
                type="text"
                placeholder="State"
                value={sTate}
                onChange={(ev) => setSTate(ev.target.value)}
              ></input>
            </div>
            <input
              type="text"
        
              placeholder="Pin code"
              value={pincode}
              onChange={(ev) => setPincode(ev.target.value)}
            ></input>
            <button type="submit"> Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
