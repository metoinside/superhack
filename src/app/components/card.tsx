export default function Card(props: {image: string, title: string, description: string, button: string}): JSX.Element {
    return(
    <div className="card w-96 glass bg-accent/20 border-accent">
        <figure><img src={props.image} alt="car!" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-s text-white bg-accent space-y-24">{props.button}</button>
            </div>
        </div>
    </div>
    )
}