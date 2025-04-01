import Marquee from "react-fast-marquee";

const HeaderMarquee = () => {
  const statements = [
    "Next Day Delivery",
    "15+ Years Experience",
    "Worldwide Shipping",
    "700+ E-Bikes In Stock",
    "Best Advice & Support",
    "Access To Spares",
    "0% Finance Available",
    "20,000+ Happy Riders",
    "Free Test Rides",
    "Expert Support",
    "Trusted by Thousands",
    "Fast & Secure Checkout",
    "Premium Quality",
    "Top E-Bike Supplier",
    "Award-Winning Support",
    "Easy Returns",
    "Eco-Friendly Transport",
    "Exclusive Discounts",
    "Pro Assembly Service",
    "Ride Now, Pay Later",
  ];

  return (
    <div className="flex justify-between font-body">
      <Marquee autoFill speed={25}>
        {statements.map((state: string, idx: number) => (
          <span key={idx} className="mr-28">+{state}</span>
        ))}
      </Marquee>
      <div className="flex flex-1/5 gap-4 px-4">
        <p>+8801749888339</p>
        <p className="">Service & support</p>
      </div>
    </div>
  );
};

export default HeaderMarquee;
