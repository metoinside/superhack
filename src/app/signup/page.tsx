"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function SignupPage() {

    const [user, setUser] = React.useState({
        
        username: "",
    })
    const onSignup = async () => {

    }

    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl">Hello hello! Welcome on board!</h1>
            <hr />
            
            
            <input
                className="p-3 border border-green-500 rounded-lg mb-4 focus:outline-none focus:border-green-500"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Type a username here.."
            />

            
            <button onClick={onSignup} className="p-3 border border-green-500 rounded-lg mb-4 focus:outline-none focus:border-green-500">Save</button>
            

        </div>
    )
}