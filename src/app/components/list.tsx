"use client"
import axios from "axios"
import react, { useEffect, useState } from "react"
import { useAccount, useContractWrite } from "wagmi"
import contractArtifact from "../../../artifacts/contracts/EventTicket.sol/CrowdfundingProject.json";



export default function List() {
    const [masa,setMasa]=react.useState([])

    const {address, isConnected} = useAccount()    


    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: "0x8fB46b2285703B2420E99d3A762e0FeCA615d80F",
        abi: contractArtifact.abi,
        functionName:"makeDonation",
        account: address
    })

    const buyTicket =  () => {
        write();
    }




    const loadData = async () => {
        const response = await axios.get('/api/users/createvent')
        console.log(response)
        setMasa(response.data.props.allData)
        

    }

    useEffect(() => {
        loadData()
    }, []

    )
    return (

        <div className="overflow-x-auto">
        


            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-base-200 text-xl">Event</th>
                        <th className="text-base-200 text-xl">Event Detail</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {masa.map((m: any)=> {
                return(
                    <tr>
                    <th> </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://img.icons8.com/?size=512&id=112289&format=png" />
                                </div>
                            </div>
                            <div>
                                <div className="text-base-200/80 font-bold">{m.eventName}</div>
                                <div className="text-base-200/50">{m.respOrg}</div>
                            </div>

                        </div>

                    </td>
                    <td className="text-base-200/80">
                        {m.eventDetails}
                        <br />
                        <span className="badge badge-ghost badge-sm bg-accent border-accent">{m.targetGroup}</span>
                    </td>


                    <th>
                        <button onClick={buyTicket} className="btn btn-xs bg-accent border-accent text-base-200 space-y-24">Buy Ticket</button>
                    </th>
                </tr>
                )
            }
            )}
<div>Transactions : {JSON.stringify(data)}</div>
                </tbody>
                {/* foot */}

            </table>
        </div>

    )
}
