import StudentItem from "./StudentItem"

const StudentList = ({studentList, deleteHandler}) => {

    

    return(
        <>
            <h2>Students</h2>

            {
                studentList.map((student) =>(<StudentItem student={student} key={student.id} onDelete={deleteHandler}/>))
            }
        </>
    )
}

export default StudentList