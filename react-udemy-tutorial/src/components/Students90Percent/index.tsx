import React from "react";
import { StudentGradeContext } from "../StudentGrade";

export const Students90Percent: React.FC = () => {
    return (
        <>
            <h1>Studens with 90% and Above</h1>
            <StudentGradeContext.Consumer>
                {data => data.filter(studentsDetails => studentsDetails.grade >= 90 )
                    .map(({ name, grade }) => <li>{name} - {grade}</li>)
                }
            </StudentGradeContext.Consumer>
        </>
    )
}