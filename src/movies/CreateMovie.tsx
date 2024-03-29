import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie(){

    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}, {id: 2, name: 'Drama'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Apollo Solaris'},
     {id: 2, name: 'Apollo Ulemiste'}]


    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm model={{title: '', inTheaters: false, trailer: ''}}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]}
                
            />
        </>
    )
}