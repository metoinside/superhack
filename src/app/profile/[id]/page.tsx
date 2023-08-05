import Table from "@/app/components/table";

export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <p className="text-4xl">Welcome 
            <span className="p-1 rounded bg-orange-500 text-black">{params.id}</span>
            <hr/>
            </p>
            <p className="text-4xl">My Purchases 
            <Table/>
            </p>
        </div>

    )
}