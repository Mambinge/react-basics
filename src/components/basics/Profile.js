function Profile(props) {

    //destructuring props
const {name, lastname} = props

    return (
        <h1>
            {/* Name: {props.name} {props.surname} */}
            Name: {name} {lastname}
        </h1>
       
    );

}

export default Profile;