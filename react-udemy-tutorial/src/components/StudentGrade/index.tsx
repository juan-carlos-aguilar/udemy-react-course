import React from "react";
import { StudentGradeProps, StudentGradeState } from "./interface";

class StudentGrade extends React.Component<StudentGradeProps, StudentGradeState> {
    constructor(props: StudentGradeProps) {
        super(props);

        this.state = {
            students: ['Carlos'],
            grade: 5
        }
    }

    addHandleClick = () => {
        this.setState({

        })
    }

    render() {
        return(
            <div>
                <h1>Students Grade</h1>
                <form onSubmit={(event) => event.preventDefault()} action="">
                    {/* Enter Student Name */}
                    <p>Stundet Name</p>
                    <input type="text" />
                    {/* Enter Student Grade */}
                    <p>Grade</p>
                    <input type="text" />
                    <button onClick={addHandleClick()}></button>
                </form>
            </div>
        )
    }
}

export default StudentGrade;