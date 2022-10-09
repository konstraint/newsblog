type User = {
    id?: number,
    username?: string,
    password: string
    email: string,
};

type UserState = {
    user: User | null
}

export type { User, UserState };