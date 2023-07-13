import PropTypes from 'prop-types';

function Button({ value, classextend }) {
  return (
    <div
      className={`border flex items-center justify-center border-white bg-slate-200 text-black font-bold text-xl ${classextend} `}
    >
      {value}
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classextend: PropTypes.string,
};

Button.defaultProps = {
  classextend: null,
};

export default Button;
