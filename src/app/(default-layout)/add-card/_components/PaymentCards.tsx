/* eslint-disable @next/next/no-img-element */
import CstCard from "@/components/ui/CstCard";
import { InfoCircle, Warning2 } from "iconsax-reactjs";

const paymentMethods = [
  {
    id: 1,
    image: "/images/payment-methods/1.png",
    title: "skrill",
  },
  {
    id: 2,
    image: "/images/payment-methods/2.png",
    title: "stripe",
  },
  {
    id: 3,
    image: "/images/payment-methods/3.png",
    title: "pay",
  },
  {
    id: 4,
    image: "/images/payment-methods/4.png",
    title: "discover",
  },
  {
    id: 5,
    image: "/images/payment-methods/5.png",
    title: "maestro",
  },
  {
    id: 6,
    image: "/images/payment-methods/6.png",
    title: "mastercard",
  },
  {
    id: 7,
    image: "/images/payment-methods/7.png",
    title: "visa",
  },
];

const PaymentCards = () => {
  return (
    <CstCard className="min-h-[350px]">
      <h6 className="border-b border-black/10 px-5 py-3 text-lg font-semibold uppercase dark:border-white/10">
        Payment cards
      </h6>

      <div className="p-5">
        <div className="border-theme-danger-3/30 relative mb-5 overflow-hidden rounded-[10px] border px-3 py-3.5">
          <div className="bg-theme-danger-3/20 absolute top-0 left-0 h-full w-7 rounded-tl-[10px] rounded-bl-[10px]" />
          <div className="flex items-center gap-2">
            <Warning2 size={18} className="text-theme-danger-3" />{" "}
            <span>
              Please <span className="text-theme-blue">add a new card</span> to
              subscribe to other user or recharge your wallet.
            </span>
          </div>
        </div>

        <p className="mb-2.5 capitalize">
          we are fully compliant with payment card industry data security
          standards.
        </p>

        <div className="border-theme-blue/30 relative mb-5 overflow-hidden rounded-[10px] border px-3 py-3.5">
          <div className="bg-theme-blue/20 absolute top-0 left-0 h-full w-7 rounded-tl-[10px] rounded-bl-[10px]" />
          <div className="flex items-center gap-2">
            <InfoCircle
              size={18}
              variant="Broken"
              className="text-theme-blue"
            />{" "}
            <span>
              The charge on your credit card statement will appear as only fans
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 pb-4">
          {paymentMethods?.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-medium text-black/40 uppercase dark:text-white/40">
          address
        </p>
      </div>
    </CstCard>
  );
};

export default PaymentCards;
