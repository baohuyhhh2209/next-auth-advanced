import { CardWrapper } from "./card-wrapper";
import { CircleAlert } from "lucide-react";
const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Something went wrong"
      backButtonLabel="Back to login page"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        <CircleAlert className="w-16 h-16 text-red-500" />
      </div>
    </CardWrapper>
  );
};
export default ErrorCard;
