export type IStudent = {
    _id: string;
    name: string;
    surname: string;
    no: string;
}

export type IGetStudent = {
    data: {
        _id: string;
        name: string;
        surname: string;
        no: string;
    }
}

export type IDeleteStudent = {
    studentId: string;
}

export type ICreateStudent = {
    data: {
        name: string;
        surname: string;
        no: string;
    };
};