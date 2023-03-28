import { ReactElement } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: actorsProps){
    const actors: actorMovieDTO[] = [{
        id: 1, name: "Matthew McConaughey", character: "Rust Cohle", picture: "https://upload.wikimedia.org/wikipedia/en/0/01/Rust_Cohle_2012.jpg"},
        {id: 2, name: "Woody Harrelson", character: "Martin Hart", picture: "https://www.theedgesusu.co.uk/wp-content/uploads/2016/06/martin-hart.jpg"},
        {id: 3, name: "Michelle Monaghan", character: "Maggie Hart", picture: "https://i.pinimg.com/originals/27/c3/46/27c34692714ea867b730326711b99ed9.jpg"}]

        const selected: actorMovieDTO[] = [];

    return (
    <div className="mb-3">
        <label>{props.displayName}</label>
        <Typeahead
            id="typeahead"
            onChange={actors => {
                // @ts-ignore
                if(props.actors.find(x => x.id === actors[0].id) === -1){
                    // @ts-ignore
                    props.onAdd([...props.actors, actors[0]])
                }
            }}
            options={actors}
            labelKey="name"
            filterBy={['name']}
            placeholder="Write the name of actor"
            minLength={1}
            selected={selected}
            />

        <ul className="list-group">
            {props.actors.map(actor => 
                <li key ={actor.id} className="list-group-item list-group-item-action">
                    {props.listUI(actor)}
                    <span className="badge badge-primary badge-pill pointer text-dark"
                    style={{marginLeft: '0.5rem' }}
                    onClick={() => {props.onRemove(actor)}}
                    ></span>
                </li>)}
        </ul>
    </div>
    )
}

interface actorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}