import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie(){
    const nonSelectedGenres: genreDTO[] = [ {id: 2, name: 'Drama'}]
    const selectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Apollo Solaris'}]
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 2, name: 'Apollo Ulemiste'}]

    return (
        <>
        <h3>Edit Movie</h3>
        <MovieForm model={{title: '', inTheaters: false, trailer: ''}}
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}
         />
        </>
    )
}