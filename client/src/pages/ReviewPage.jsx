import { useLoaderData } from "react-router-dom";

import ShowReview from "../components/ShowReview/ShowReview";
import FormReview from "../components/FormReview/FormReview";
// import NavBar from "../components/NavBar/NavBar";

import styles from "./ReviewPage.module.css";
import Logo from "../components/Logo/Logo";

export default function ReviewPage() {
  const reviews = useLoaderData();

  return (
    <div>
      <div className="md:hidden">
        <Logo />
      </div>
      <div className="flex justify-center">
        <div className={styles.divReviewContainer}>
          {reviews.map((review) => (
            <ShowReview
              key={review.id}
              rate={review.rate}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
      <div>
        <FormReview />
      </div>
    </div>
  );
}
