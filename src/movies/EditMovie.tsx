import MovieForm from "./MovieForm";

export default function EditMovie(){
    return (
        <>
        <h3>Edit Movie</h3>
        <MovieForm model={{title: '', inTheaters: false, trailer: ''}}
                onSubmit={values => console.log(values)}
         />
        </>
    )
}