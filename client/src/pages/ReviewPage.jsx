import { useLoaderData } from "react-router-dom";

import ShowReview from "../components/ShowReview/ShowReview";
import FormReview from "../components/FormReview/FormReview";

export default function ReviewPage() {
  const reviews = useLoaderData();

  return (
    <div>
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
