import React from "react";
import { StudentGradeProps, StudentGradeState } from "./interface";

class StudentGrade extends React.Component<StudentGradeProps, StudentGradeState> {
    constructor(props: StudentGradeProps) {
        super(props);

        this.state = {
            students: ['Carlos'],
            newStudent: {
                name: 'Carlos',
                grade: 90
            }
        }
    }

    handleStudentOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            
        })
    }
    
    addHandleClick = () => {
        this.setState({
            students: [this.state.newStudent.name, ...this.state.students]
        })
    }

    render() {
        const { students, newStudent } = this.state;

        const studentsUI = students.map(student => {
            return <li key={student}><span>{student}</span></li>
        })
        return(
            <div>
                <h1>Students Grade</h1>
                <ul>
                    {studentsUI}
                </ul>
                <form onSubmit={(event) => event.preventDefault()}>
                    {/* Enter Student Name */}
                    <p>Stundet Name</p>
                    <input value={newStudent} onChange={this.handleInputOnChange} type="text" />
                    {/* Enter Student Grade */}
                    <p>Grade</p>
                    <input type="text" />
                    <br/>
                    <button onClick={this.addHandleClick}>Add Student</button>
                </form>
            </div>
        )
    }
}

export default StudentGrade;