export type IClass = {
    _id: string;
    className: string;
}

export type IDeleteClass = {
    classId: string;
}

export type ISuccessCreate = {
    message: string;
}

export type ICreateClass = {
    data: {
        className: string;
    };
};