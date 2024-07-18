import { useLoaderData } from "react-router-dom";

import ShowReview from "../components/ShowReview/ShowReview";
import FormReview from "../components/FormReview/FormReview";

import Logo from "../components/Logo/Logo";

export default function ReviewPage() {
  const reviews = useLoaderData();

  return (
    <div>
      <div className="md:hidden">
        <Logo />
      </div>
      <div className="flex justify-center">
        <div>
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
