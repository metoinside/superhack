"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function SignupPage() {

    const [user, setUser] = React.useState({

        username: "",
    })
    const onSignup = async () => {

    }
    const worldID = async () => {

    }
    return (
        <div>
            <h1 className="text-left text-2xl">Hello hello! Welcome on board!</h1>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                
                <input
                    className="p-3 border border-green-500 rounded-lg mb-4 focus:outline-none focus:border-green-500"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Type a username here.."
                />


                <button onClick={onSignup} className="p-3 border border-green-500 rounded-lg mb-4 focus:outline-none focus:border-green-500">Save</button>
                
                <button onClick={worldID} className="p-3 border border-green-500 rounded-lg mb-4 focus:outline-none focus:border-green-500">Verify with WorldID</button>

            </div>
        </div>

    )
}