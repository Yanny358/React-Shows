import {Form, Formik, FormikHelpers} from 'formik'
import { movieCreationDTO } from './movies.model'
import * as Yup from 'yup';
import Button from '../utils/Button';
import { Link } from "react-router-dom";
import DateField from '../forms/DateField';
import TextField from '../forms/TextField';
import ImageField from '../forms/ImageField';
import CheckBoxField from '../forms/CheckBoxFields';


export default function MovieForm(props: movieForm) {
    return (
    <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
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
}
