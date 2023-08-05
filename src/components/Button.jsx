import PropTypes from "prop-types";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
