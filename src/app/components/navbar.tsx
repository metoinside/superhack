import ActionButton from "./actionButton";



export default function Navbar2(props: any) {
    return (
        <div>

            <div className="navbar bg-base-100">
                <a href="http://localhost:3000/" className="btn btn-ghost normal-case text-xl">{props.title}</a>
            </div>

            <div className="absolute top-1 right-0">
                <ul className="menu menu-horizontal px-4">
                    <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">About us</button>
                    <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact</button>
                    <ActionButton />
                </ul>
            </div>




        </div>

    )
}