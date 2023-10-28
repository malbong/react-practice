import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

type Props = {
  items: Todo[];
  onDeleteTodo: (todoID: string) => void;
};

const Todos = (props: Props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
