import styles from './TodoItem.module.css';

type Props = {
  text: string;
  onDeleteTodo: () => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.item} onClick={props.onDeleteTodo}>
      {props.text}
    </li>
  );
};
export default TodoItem;
