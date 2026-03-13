export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateUserCommand {
    name: string;
    email: string;
}

export interface UpdateUserCommand {
    id: string;
    name: string;
    email: string;
}
