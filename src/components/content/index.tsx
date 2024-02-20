const Content = () => {
  return (
    <div
      id="about"
      className="container mx-auto md:mt-28 mt-14 grid grid-cols-1 lg:grid-cols-2 place-items-center lg:px-10 px-5 gap-10 scroll-mt-40 "
    >
      {/* <div className="w-96 h-96">

        </div> */}
      <img src="/16.jpeg" alt="consultation" className="w-full rounded-md" />
      <div>
        <h2 className="xl:text-5xl sm:text-4xl text-2xl font-bold max-w-3xl">
          Why Leeds?
        </h2>
        <div className="pt-5 space-y-5 text-justify">
          <p>
            We understand the importance of seamless and secure money transfers
            for individuals and businesses across borders. As a leading
            remittance company, we are committed to providing efficient,
            reliable, and cost-effective solutions that meet your international
            money transfer needs. Here are some reasons why your business should
            forge a partnership with us:
          </p>
          <ul className="space-y-5 px-5">
            <li className="list-disc">
              <span className="font-bold sm:text-lg text-base">
                Extensive network:{" "}
              </span>
              With our extensive network spanning across key global regions, we
              ensure that your money reaches its destination swiftly and
              securely.
            </li>
            <li className="list-disc">
              <span className="font-bold sm:text-lg text-base">
                Dedicated customer service:{" "}
              </span>
              Our customer service team is highly trained and dedicated to
              providing personalized assistance, ensuring that your queries are
              addressed promptly and efficiently.
            </li>
            <li className="list-disc">
              <span className="font-bold sm:text-lg text-base">
                Fast and secure transfers:{" "}
              </span>
              We guarantee fast and secure transfers, giving you peace of mind
              with every transaction.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
