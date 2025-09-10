import PropTypes from "prop-types";
function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isstudent ?"Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropType.number,
}
Student.defaultProps = {
    name: "Guest",
    age: 2,
    isstudent: false,
}

export default Student