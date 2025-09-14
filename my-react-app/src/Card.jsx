import PropTypes from "prop-types";


function Card({
    name = "Guest",
    age = 20,
    isStudent = false,
    hobbies = ["X","Y","Z"]
}){

    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Student: {isStudent? "Yes" : "No"}</p>
        <p>Hobbies: {hobbies && hobbies.length > 0 && hobbies.join(",")}</p>
        </>   
    );
};

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    hobbies: PropTypes.string,
};


export default Card