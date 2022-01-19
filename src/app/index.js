import styles from './styles.module.css';
import Card from "../components/card";
import cn from "classnames";

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>

      <div className={cn(styles['card-list'])}>
        <Card />
        <Card isSelected={true} />
        <Card isDisabled={true} />
      </div>
    </div>
  );
}

export default App;
