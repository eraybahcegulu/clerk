export interface IClassModel {
    name: string;
}

export interface IStudentModel {
    name: string;
    surname: string;
    no: string;
}

export interface IClassStudentModel {
    class: IClassModel;
    student: IStudentModel;
}

declare global {
    namespace Express {
        export interface Request {
            user?: any;
        }
    }
}

declare module "express-serve-static-core" {
    interface Request {
        signal?: AbortSignal;
    }
}