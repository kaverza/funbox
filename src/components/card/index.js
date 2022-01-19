import styles from './styles.module.scss';
import cn from 'classnames';

const Card = ({ isSelected, isDisabled, data = {} }) => {
  const {
    preTitle,
    title,
    subTitle,
    description,
    image,
    weight
  } = data;

  return (
    <>
      <div className={cn(styles.card, {
        [styles['card--selected']]: isSelected,
        [styles['card--disabled']]: isDisabled
      })}>
        <div className={cn(styles['card__wrap'])}>
          <div className={cn(styles['card__content'])}>
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
            <img
              src={image.default}
              srcSet={image.retina + ' 1.25x'}
              alt={title + subTitle}
              className={cn(styles['card__image'])}
              width={261}
              height={269}
            />
          </div>
        </div>
      </div>
    </>

  );
}

export default Card;
