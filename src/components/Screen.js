import PropTypes from 'prop-types';

function Screen({ next, operation, total }) {
  return (
    <div className="col-span-4 bg-gray-700 px-2 flex justify-end items-center text-white">
      <span>{total}</span>
      <span>{operation}</span>
      <span>{!next && !operation && !total ? 0 : next}</span>
    </div>
  );
}

Screen.propTypes = {
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default Screen;
