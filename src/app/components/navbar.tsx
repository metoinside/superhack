"use client"

import Link from 'next/link'
import ActionButton from './actionButton'
import VerifyID from './worldcoin-verify/verify'

export default function Navbar() {
    return (
        <div className="navbar bg-accent text-base-200">
            <div className="flex-1">

                <a href='/' className="btn btn-ghost normal-case text-xl">BuyTicket</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <VerifyID />
                    
                    <ActionButton />
                </ul>
            </div>

        </div>
    )
}