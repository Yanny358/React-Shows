import ActorForm from "./ActorForm"

export default function EditActor(){
    return(
        <>
        <h3>Edit actor</h3>
        <ActorForm model={{name: 'Bryan Cranston',
        dateOfBirth: new Date('1962-03-04T00:00:00'),
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bryan_Cranston_at_the_2018_Berlin_Film_Festival_%282%29.jpg/440px-Bryan_Cranston_at_the_2018_Berlin_Film_Festival_%282%29.jpg'
        }}
            onSubmit={values => console.log(values)
            }/>
        </>
    )
}