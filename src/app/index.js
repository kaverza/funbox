import styles from './styles.module.css';
import Card from "../components/card";
import cn from "classnames";
import { products } from "../products";

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>

      <div className={cn(styles['card-list'])}>
        {products.map(({id, ...props}) => (<Card {...props} key={id} />))}
      </div>
    </div>
  );
}

export default App;
