//La interfaz Todo y el tipo ListOfTodos 
// aseguran que los datos tengan la forma esperada.

//Si se pasa un prop que no cumple con la 
// interfaz Props (en el componente Todos.jsx), TypeScript lanza un error.

//Creamos el contrato de los props que se le pasan al componente
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}


//se define un alias para el tipo de dato que se espera recibir
export type ListOfTodos = Todo[];