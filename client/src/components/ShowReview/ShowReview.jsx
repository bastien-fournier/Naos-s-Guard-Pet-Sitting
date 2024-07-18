import PropTypes from "prop-types";
// import styles from "./ShowRreview.module.css";

export default function ShowReview({ rate, comment }) {
  return (
    <div className="flex flex-col items-center mt-5 ">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-xs md:max-w-lg lg:max-w-xl">
        <div className="mb-2">
          <p className="text-gray-800 font-semibold">Note:{rate}</p>
        </div>
        <div>
          <p className="text-gray-700">Commentaire:{comment}</p>
        </div>
      </div>
    </div>
  );
}

ShowReview.propTypes = {
  rate: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};
