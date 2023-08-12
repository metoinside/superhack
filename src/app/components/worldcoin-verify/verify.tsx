"use client"
import { CredentialType, IDKitWidget } from "@worldcoin/idkit";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";


export default function VerifyID(props:{nav:string}) {
    const router=useRouter()
    const {isConnected}= useAccount()
    function onSuccess() {
       
       router.push(props.nav)

    }

    function handleVerify() {
        
    }

    if (isConnected) {
        return (
            <IDKitWidget
                app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
                action="vote_1" // this is your action name from the Developer Portal
                onSuccess={onSuccess} // callback when the modal is closed
                handleVerify={handleVerify} // optional callback when the proof is received
                credential_types={[CredentialType.Orb]} // optional, defaults to ['orb']
                enableTelemetry // optional, defaults to false
            >
                {({ open }) => <button className="btn btn-s text-white bg-accent space-y-24" onClick={open}>Create event for charities</button>}
            </IDKitWidget>)
    }
    else {
        return (<button className="btn btn-s text-white bg-error space-y-24">Please connect your wallet!</button>)
    }
    
}