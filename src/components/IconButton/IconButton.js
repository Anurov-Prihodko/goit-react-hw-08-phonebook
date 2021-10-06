import PropTypes from 'prop-types';
import s from './IconButton.module.css';

export default function IconButton({
  children = null,
  onClick = () => null,
  ...otherProps
}) {
  return (
    <div className={s.block}>
      <span className={s.span}> Add: </span>
      <button
        type="button"
        className={s.button}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
