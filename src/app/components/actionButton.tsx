"use client";
import { Web3Button, Web3Modal, Web3NetworkSwitch } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { ethereumClient, projectId, chains, wagmiConfig } from '@/app/components/walletConnect/config'

import Link from "next/link";

export default function ActionButton() {
    return (
        <>

            <Web3Button/>

        </>
    );
}
