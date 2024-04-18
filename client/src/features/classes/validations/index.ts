import * as z from 'zod';

export const createClassValidation = z.object({
    className: z.string().min(1, 'Required'),
});