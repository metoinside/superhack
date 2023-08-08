"use client"

import React from "react";
export default function EventCreate() {

    const [user, setUser] = React.useState({
        eventName: "",
        eventDetails: "",
        targetGroup: "",
        respOrg: "",
    })
    const onCreate = async () => {

    }
    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl">EventCreate</h1>
            <hr />
            <input
                className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500"
                id="eventName"
                type="text"
                value={user.eventName}
                onChange={(e) => setUser({ ...user, eventName: e.target.value })}
                placeholder="Event Name"
            />

            <input
                className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500"
                id="eventDetails"
                type="text"
                value={user.eventDetails}
                onChange={(e) => setUser({ ...user, eventDetails: e.target.value })}
                placeholder="Event Details"
            />

            <input
                className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500"
                id="targetGroup"
                type="text"
                value={user.targetGroup}
                onChange={(e) => setUser({ ...user, targetGroup: e.target.value })}
                placeholder="Target Group"
            />

            <input
                className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500"
                id="respOrg"
                type="text"
                value={user.respOrg}
                onChange={(e) => setUser({ ...user, respOrg: e.target.value })}
                placeholder="Responsible Organization"
            />

<button onClick={onCreate} className="p-3 border border-pink-500 rounded-lg mb-4 focus:outline-none focus:border-pink-500">Create Event</button>
        </div>

    )
}