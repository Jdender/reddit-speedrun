import { object, string, InferType } from 'yup';

export const Post = object()
    .required()
    .shape({
        title: string().required().trim().min(2).max(30),
        content: string().required().trim().min(2).max(200),
    });
export type Post = InferType<typeof Post>;
