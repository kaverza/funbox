import styles from './styles.module.css';
import cn from 'classnames';
import { ReactComponent as CardMask } from '../../assets/images/card.svg';

const Card = ({isSelected, isDisabled}) => {
  return (
    <>
      <CardMask />
      <div className={cn(styles.card, {
        [styles['card--selected']]: isSelected,
        [styles['card--disabled']]: isDisabled
      })}>
        <div className={cn(styles['card__wrap'])}>
          <div className={cn(styles['card__inner'])}>

          </div>
        </div>
      </div>

    </>

  );
}

export default Card;
