import PropTypes from "prop-types";

export default function ShowReview({ rate, comment }) {
  return (
    <div>
      <p>{rate}</p>
      <p>{comment}</p>
    </div>
  );
}

ShowReview.propTypes = {
  rate: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};
