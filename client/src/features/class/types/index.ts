export type IClass = {
    _id: string;
    className: string;
}

export type IGetClass = {
    data: {
        _id: string;
        name: string;
    }
}

export type IDeleteClass = {
    classId: string;
}


export type ICreateClass = {
    data: {
        className: string;
    };
};