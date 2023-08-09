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
            credential_types={['orb']} // optional, defaults to ['orb']
            enableTelemetry // optional, defaults to false
        >
            {({ open }) => <button onClick={open}>Verify with World ID</button>}
        </IDKitWidget>)
}