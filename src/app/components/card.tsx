export default function Card(props: {image: string, title: string, description: string, button: string}): JSX.Element {
    return(
    <div className="card w-96 glass">
        <figure><img src={props.image} alt="car!" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-s text-white bg-blue-700 space-y-24">{props.button}</button>
            </div>
        </div>
    </div>
    )
}