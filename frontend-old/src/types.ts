export type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateUserCommand = {
    name: string;
    email: string;
}

export type UpdateUserCommand = {
    id: string;
    name: string;
    email: string;
}
