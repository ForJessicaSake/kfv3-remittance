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
          Why choose Kiakia?
        </h2>
        <div className="pt-5 space-y-5 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            corrupti perferendis temporibus recusandae earum maxime dolorum
            dolor pariatur ab debitis consectetur quam tempora, dolore
            accusantium?
          </p>
          <p>
            Here are some reasons why your business should forge a partnership
            with us:
          </p>
          <ul className="space-y-5 px-5">
            <li className="list-disc">
              <span className="font-bold sm:text-lg text-base">lorem: </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              neque rerum quae culpa reiciendis doloribus!
            </li>
            <li className="list-disc">
              <span className="font-bold sm:text-lg text-base">lorem: </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              neque rerum quae culpa reiciendis doloribus!
            </li>
            <li className="list-disc">
              <span className="font-bold sm:text-lg text-base">lorem: </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              neque rerum quae culpa reiciendis doloribus!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
