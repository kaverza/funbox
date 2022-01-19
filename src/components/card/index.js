import styles from './styles.module.scss';
import cn from 'classnames';
import { ReactComponent as CardMask } from '../../assets/images/card.svg';

const Card = ({ isSelected, isDisabled, data = {} }) => {
  const {
    preTitle,
    title,
    subTitle,
    description,
    weight
  } = data;

  return (
    <>
      <CardMask />
      <div className={cn(styles.card, {
        [styles['card--selected']]: isSelected,
        [styles['card--disabled']]: isDisabled
      })}>
        <div className={cn(styles['card__wrap'])}>
          <div className={cn(styles['card__inner'])}>
            <div className={cn(styles['card__pre-title'])}>
              {preTitle}
            </div>
            <h2 className={cn(styles['card__title'])}>
              {title}
              {subTitle && <span>{subTitle}</span>}
            </h2>
            {description && (
              <div className={cn(styles['card__description'])}>
                {description}
              </div>
            )}
            <div className={cn(styles['card__weight'])}>
              {weight.toString().replace('.',',')} <span>кг</span>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Card;
