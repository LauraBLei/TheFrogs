import { Link } from "react-router-dom";

export const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center mb-5">
      <div>
        <img src="/leapingFrog.png" alt="" />
      </div>
      <p className="text-3xl font-bold text-brand-black mt-[-80px]">
        Frog-tastic!
      </p>
      <p className="text-3xl my-5 font-bold text-brand-black text-center">
        Your order has successfully hopped through!
      </p>
      <Link
        className="bg-brand-black text-brand-white p-4 shadow-2xl mt-5 cursor-pointer hover-effect"
        to="/"
      >
        Discover more items!
      </Link>
    </div>
  );
};
