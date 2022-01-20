import {useCallback, memo} from "react";
import styles from './styles.module.scss';
import cn from 'classnames';
import {useMemo, useState} from "react";
import Hint from "../hint";

const Card = ({ isSelected, isDisabled, data = {} }) => {
  const {
    title,
    subTitle,
    composition,
    features,
    image,
    weight
  } = data;

  const [selected, setSelected] = useState(isSelected);
  const [isMouseLeave, setIsMouseLeave] = useState(isSelected);
  const [isHover, setIsHover] = useState(false);


  console.log('render');

  //console.log({selected, isHover, isMouseLeave});
  const onSelectedHandler = (selected) => {
    if (isDisabled) {
      return;
    }

    if (!selected) {
      setIsHover(selected);
    }

    setSelected(selected);
    setIsMouseLeave(selected);
  }
  const onMouseEnterHandler = () => isMouseLeave && setIsHover(true);
  const onMouseLeaveHandler = () => selected && setIsHover(false);

  return (
      <div
        className={cn(styles['card'])}
      >
        <div
          className={cn(styles['card__wrap'], {
            [styles['card__wrap--selected']]: selected,
            [styles['card__wrap--disabled']]: isDisabled
          })}
          onClick={() => onSelectedHandler(!selected)}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div className={cn(styles['card__content'])}>
            <div className={cn(styles['card__pre-title'], {
              [styles['card__pre-title--cl-red']]: isHover
            })}>
              {isHover ? <>Котэ не одобряет?</> : <>Сказочное заморское яство</>}
            </div>
            <h2 className={cn(styles['card__title'])}>
              {title}
              {subTitle && <span>{subTitle}</span>}
            </h2>
            {features.length && (
              <div className={cn(styles['card__features'])}>
                {features.map((item, index) => (<p key={index} dangerouslySetInnerHTML={{__html: item}} />))}
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
        <Hint
          isSelected={selected}
          isDisabled={isDisabled}
          onSelect={() => onSelectedHandler(!selected)}

          defaultText="Чего сидишь? Порадуй котэ,"
          selectedText={composition}
          disabledText={`Печалька, ${subTitle} закончился.`}
        />
      </div>
  );
}

export default memo(Card);
