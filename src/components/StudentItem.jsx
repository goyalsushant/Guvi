const StudentItem = ({student, onDelete}) => {
    return(
        <div>
            {student.name} - {student.email}
            <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
    )
}

export default StudentItem