
import { MutationConfig } from "@/lib/react-query";
import { createClassService, deleteClassService } from "../services";


export type ICreateClassMutationOptions = {
    config?: MutationConfig<typeof createClassService>;
};

export type IDeleteClassMutationOptions = {
    config?: MutationConfig<typeof deleteClassService>;
};