import {Form, Formik, FormikHelpers} from 'formik'
import { movieCreationDTO } from './movies.model'
import * as Yup from 'yup';
import Button from '../utils/Button';
import { Link } from "react-router-dom";
import DateField from '../forms/DateField';
import TextField from '../forms/TextField';
import ImageField from '../forms/ImageField';
import CheckBoxField from '../forms/CheckBoxFields';
import MultipleSelector, { multipleSelectorModel } from '../forms/MultipleSelector';
import { useState } from 'react';
import { genreDTO } from '../genres/genres.model';
import { movieTheaterDTO } from '../movieTheaters/movieTheater.model';
import TypeAheadActors from '../forms/TypeAheadActors';
import { actorMovieDTO } from '../actors/actors.model';


export default function MovieForm(props: movieForm) {

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = 
        useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSlectedMovieTheaters] = 
        useState(mapToModel(props.nonSelectedMovieTheaters));

   // const [selectedActors, setSelectedActors] = useState(props.selectedActors);

    function mapToModel(items: {id: number, name: string}[]): multipleSelectorModel[] {
        return items.map(item => {
            return {key: item.id, value: item.name}
        })
    }

    return (
    <Formik
        initialValues={props.model}
        onSubmit={(values, actions) => {
            values.genresIds = selectedGenres.map(item => item.key);
            values.movieTheatersIds = selectedMovieTheaters.map(item => item.key);
            props.onSubmit(values, actions)
        }}
        validationSchema={Yup.object({
            title: Yup.string().required("This field is required").firstLetterUppercase()
        })}
        >
        {(formikProps) => (
            <Form>
                    <TextField field="title" displayName="Title" />
                    <CheckBoxField displayName="In Theaters" field="inTheaters" />
                    <TextField field="trailer" displayName="Trailer" />
                    <DateField field="releaseDate" displayName="Release Date" />
                    <ImageField  field="poster" displayName="Poster" imageURL={props.model.posterURL}/>
                    <MultipleSelector 
                        displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                        <MultipleSelector 
                        displayName="Movie Theater"
                        nonSelected={nonSelectedMovieTheaters}
                        selected={selectedMovieTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelectedMovieTheaters(selected);
                            setNonSlectedMovieTheaters(nonSelected);
                        }}
                    />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save changes</Button>
                    <Link to='/genres' className="btn btn-secondary">Cancel</Link>
            </Form>
        )}
    </Formik>
    )
}

interface movieForm {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    //selectedActors: actorMovieDTO[];
}
