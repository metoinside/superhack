"use client"

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useAccount } from "wagmi";



export default function EventCreate() {
    const {address}= useAccount();
    const [isCreated, setisCreated]= React.useState(false)
    const router = useRouter();
    const [user, setUser] = React.useState({

        eventName: "",
        eventDetails: "",
        targetGroup: "",
        respOrg: "",
        address:"",
        
    })

    async function onCreate() {
        try {
           user.address=address || ""
            const response = await axios.post("/api/users/createvent", user)
            setisCreated(true)
        } catch (error: any) {
            
            console.log("Event creation failed", error.message);
            setisCreated(false)

        }

    }
    return (

        <div className="flex flex-col justify-top items-center min-h-screen py-20">
            <h1 className="text-center text-2xl py-2">Event Creation</h1>
            <hr />
            <input
                className="text-center p-3 border border-white rounded-lg mb-4 focus:outline-none focus:border-white"
                id="eventName"
                type="text"
                value={user.eventName}
                onChange={(e) => setUser({ ...user, eventName: e.target.value })}
                placeholder="Event Name"
            />

            <input
                className="text-center p-3 border border-white rounded-lg mb-4 focus:outline-none focus:border-white"
                id="eventDetails"
                type="text"
                value={user.eventDetails}
                onChange={(e) => setUser({ ...user, eventDetails: e.target.value })}
                placeholder="Event Details"
            />

            <input
                className="text-center p-3 border border-white rounded-lg mb-4 focus:outline-none focus:border-white"
                id="targetGroup"
                type="text"
                value={user.targetGroup}
                onChange={(e) => setUser({ ...user, targetGroup: e.target.value })}
                placeholder="Target Group"
            />

            <input
                className="text-center p-3 border border-white rounded-lg mb-4 focus:outline-none focus:border-white"
                id="respOrg"
                type="text"
                value={user.respOrg}
                onChange={(e) => setUser({ ...user, respOrg: e.target.value })}
                placeholder="Responsible Organization"
            />

            <button onClick={onCreate} className="self-center p-3 rounded-lg mb-4 bg-accent text-base-200 focus:outline-none focus:bg-accent focus:text-base-200">Create Event</button>
           
            {isCreated? <div>Creation successfull</div>: "" }


        </div>

    )

}