import PropTypes from 'prop-types';

function Button({ value, classextend, handleClick }) {
  return (
    <button
      type="button"
      className={`border flex items-center justify-center border-white font-bold text- rounded-md ${classextend} `}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classextend: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  classextend: 'bg-slate-200 text-black',
};

export default Button;
