export interface StudentGradeProps {}

export interface StudentGradeState {
    students: string[];
    newStudent: {
        name: string,
        grade: number
    }
}