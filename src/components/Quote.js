import PropTypes from "prop-types";

function Quote({ quote, author }) {
  return (
    <figure className="max-w-screen-md bg-slate-400 py-2 px-4 rounded-md">
      <blockquote>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          {quote}
        </p>
      </blockquote>
      <figcaption className="flex items-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt={author}
        />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            {author}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}

export default Quote;

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
