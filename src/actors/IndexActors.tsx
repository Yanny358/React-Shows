import { Link } from "react-router-dom";

export default function IndexActors(){
    return (
        <>
        <h3>Actors</h3>
        <Link to="/actors/create" className="btn btn-primary">Create actor</Link>
        </>
    )
}