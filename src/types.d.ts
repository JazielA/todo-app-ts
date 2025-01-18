//La interfaz Todo y el tipo ListOfTodos 
// aseguran que los datos tengan la forma esperada.

//Si se pasa un prop que no cumple con la 
// interfaz Props, TypeScript lanza un error.

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type ListOfTodos = Todo[];