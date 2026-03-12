import { User, CreateUserCommand, UpdateUserCommand } from './types';

const API_URL = 'http://localhost:8080/api/users';

export const userService = {
    async getAll(): Promise<User[]> {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
    },

    async getById(id: string): Promise<User> {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('User not found');
        return response.json();
    },

    async create(command: CreateUserCommand): Promise<User> {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(command),
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create user');
        }
        return response.json();
    },

    async update(id: string, command: UpdateUserCommand): Promise<User> {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(command),
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update user');
        }
        return response.json();
    }
};
