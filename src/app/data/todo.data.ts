export interface ToDo {
    id: number;
    content: string;
};

export interface ToDosState {
    todos: ToDo[];
    error: string | null;
    status: 'Pending' | 'Success' | 'Loading' | 'Failure';
};

export interface AppState {
    todos: ToDosState;
}