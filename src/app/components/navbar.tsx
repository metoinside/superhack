"use client"

import Link from 'next/link'
import ActionButton from './actionButton'

export default function Navbar() {
    return (
        <div className="navbar bg-accent text-base-200">
            <div className="flex-1">

                <a className="btn btn-ghost normal-case text-xl">Donate</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">


                    <button className="btn btn-s text-accent bg-base-200 space-y-24">About Us</button>
                    <ActionButton />
                </ul>
            </div>

        </div>
    )
}