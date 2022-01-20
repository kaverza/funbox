import styles from './styles.module.scss';
import cn from 'classnames';

const Hint = (props) => {
  const {
    isSelected,
    isDisabled,
    defaultText,
    disabledText,
    selectedText,
    onSelect
  } = props;

  return (
    <div className={cn(styles.hint, {
      [styles['hint--disabled']]: isDisabled
    })}>
      {!isSelected && !isDisabled && (
        <>
          {defaultText + ' '}
          <a
            href={false}
            className={cn(styles['hint__button'])}
            onClick={onSelect}
          >
            <span>купи</span>.
          </a>
        </>
      )}

      {isSelected && !isDisabled && selectedText}

      {isDisabled && disabledText}
    </div>
  )
}

export default Hint;
