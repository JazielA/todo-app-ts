// importo el tipo ListOfTodos de types.d.ts para separarlo como declaraciones de tipos.
import { type ListOfTodos } from "../types";

//La interfaz Props define las props que el componente Todos va a recibir.
interface Props {
  todos: ListOfTodos;
}
//aqui defino que las props que recibe el componente
//Todos deben ser de tipo ListOfTodos
//(valores de la interfaz Todo en types.d.ts)
export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
