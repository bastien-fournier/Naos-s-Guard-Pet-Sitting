import { useLoaderData } from "react-router-dom";

import ShowReview from "../components/ShowReview/ShowReview";
import FormReview from "../components/FormReview/FormReview";
import NavBar from "../components/NavBar/NavBar";

export default function ReviewPage() {
  const reviews = useLoaderData();

  return (
    <div>
      <NavBar />
      <div>
        {reviews.map((review) => (
          <ShowReview
            key={review.id}
            rate={review.rate}
            comment={review.comment}
          />
        ))}
      </div>
      <div>
        <FormReview />
      </div>
    </div>
  );
}
