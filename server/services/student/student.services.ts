import Student from "../../models/student.model";

export async function createStudentService(data: any) {
    try {

        const newStudent = new Student({
            createdBy: data.createdBy,
            name: data.name,
            surname: data.surname,
            no: data.no
        });

        await newStudent.save();

    } catch (error) {
        console.error('Error creating student:', error);
    }
}