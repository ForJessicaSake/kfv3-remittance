const Offers = () => {
  return (
    <section
      className="container mx-auto md:mt-28 mt-14 lg:px-10 px-5 scroll-mt-40 "
      id="offers"
    >
      <h1 className="text-center flex justify-center items-center text-dark-blue font-bold text-2xl sm:text-4xl xl:text-5xl">
        What we offer
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 gap-10 mt-14">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" h-64 w-64">
            <img src="/security.webp" alt="money" className="h-full w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-dark-blue font-bold text-lg">
              Reliability and Security
            </h2>
            <p className="text-sm pt-2 leading-7">
              We prioritize the safety and security of your funds, utilizing
              advanced encryption and fraud prevention measures. Our robust
              compliance framework ensures adherence to international
              regulations, giving you peace of mind.
            </p>
          </div>{" "}
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" h-64 w-64">
            <img src="/globe.webp" alt="money" className="h-full w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-dark-blue font-bold text-lg">Global Network</h2>
            <p className="text-sm pt-2 leading-7">
              With our vast network of trusted partners and financial
              institutions worldwide, we ensure a wide coverage for money
              transfers.You can rely on us to reach even the most remote
              locations, ensuring your funds reach the intended recipients
              promptly.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className=" h-64 w-64">
            <img src="/ratesimg.webp" alt="money" className="h-full w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-dark-blue font-bold text-lg">
              Competitive Rates
            </h2>
            <p className="text-sm pt-2 leading-7">
              We offer competitive exchange rates, ensuring that you get the
              most value for your money. Our transparent fee structure means no
              hidden charges, providing full visibility into the costs
              associated with your transfers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
