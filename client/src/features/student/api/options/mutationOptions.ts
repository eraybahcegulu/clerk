import { MutationConfig } from "@/lib/react-query";
import { createStudentService, deleteStudentService } from "../services";

export type ICreateStudentMutationOptions = {
    config?: MutationConfig<typeof createStudentService>;
};

export type IDeleteStudentMutationOptions = {
    config?: MutationConfig<typeof deleteStudentService>;
};