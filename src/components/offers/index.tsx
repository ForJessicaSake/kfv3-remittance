const Offers = () => {
  return (
    <section
      className="container mx-auto md:mt-28 mt-14 lg:px-10 px-5 scroll-mt-40 "
      id="offers"
    >
      <h1 className="text-center flex justify-center items-center text-dark-blue font-bold text-2xl sm:text-4xl xl:text-5xl">
        What we offer
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 mt-14">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" h-64 w-64">
            <img src="/fast.png" alt="money" className="h-full w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-dark-blue font-bold text-lg">
              Fast and Reliable Transfers
            </h2>
            <p className="text-sm pt-2 leading-7">
              Say goodbye to money transfer hassle. Kiakia's global network
              makes sending seamless, no matter the destination. Get your funds
              to your recipients quickly and securely, with peace of mind
              guaranteed. No distance is too far, you can send money just
              anywhere and anytime.
            </p>
          </div>{" "}
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" h-64 w-64">
            <img src="/14.jpeg" alt="money" className="h-full w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-dark-blue font-bold text-lg">
              Competitive Rates
            </h2>
            <p className="text-sm pt-2 leading-7">
              Get the most out of your money on every transfer. Kiakia offers
              competitive exchange rates, ensuring you get the right value of
              what you send. Plus, our transparent fee structure means no hidden
              costs – you see exactly what you'll pay before you send. Send with
              kiakia today, knowing you're getting the best value.
            </p>
          </div>{" "}
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" h-64 w-64">
            <img src="/lock.png" alt="money" className="h-full w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-dark-blue font-bold text-lg">Security</h2>
            <p className="text-sm pt-2 leading-7">
              At Kiakia, your money's security is our top priority. We utilize
              industry-leading encryption technology and multi-factor
              authentication to safeguard your funds at every step. Our robust
              compliance platform adheres to international security standards,
              including PCI DSS, giving you the best service.
            </p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Offers;
