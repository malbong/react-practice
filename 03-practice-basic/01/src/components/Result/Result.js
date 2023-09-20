import styles from './Result.module.css';
import ResultHeader from './ResultHeader';
import ResultBody from './ResultBody';

const Result = (props) => {
  if (props.results.length === 0)
    return <h1 className={styles['no-data']}>Before Calculate</h1>;

  return (
    <table className={styles.result}>
      <ResultHeader />
      {props.results.map((result) => {
        return <ResultBody key={result.year} data={result}></ResultBody>;
      })}
    </table>
  );
};

export default Result;
