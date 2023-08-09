import { CredentialType, IDKitWidget } from "@worldcoin/idkit";

export default function VerifyID() {

    function onSuccess() {

    }

    function handleVerify() {
        alert("Verify is handled");
    }

    return (
        <IDKitWidget
            app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
            action="vote_1" // this is your action name from the Developer Portal
            onSuccess={onSuccess} // callback when the modal is closed
            handleVerify={handleVerify} // optional callback when the proof is received
            credential_types={[CredentialType.Orb]} // optional, defaults to ['orb']
            enableTelemetry // optional, defaults to false
        >
            {({ open }) => <button className="text-white bg-[#3F9BFB] border-sky-500 border rounded-lg font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={open}>Verify with World ID</button>}
        </IDKitWidget>)
}