import Button from "../micro/button";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto md:mt-28 mt-14 lg:px-10 px-5 flex flex-col text-center items-center justify-center scroll-mt-40"
    >
      <h1 className="xl:text-5xl sm:text-4xl text-2xl font-bold">
        Request a consultation
      </h1>
      <div className="max-w-3xl">
        <p className="py-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          nemo dolore, consequatur quasi quidem architecto, corrupti minus
          cupiditate molestiae, alias earum nesciunt.
        </p>
        <div className="flex md:flex-row flex-col items-center justify-between md:space-y-0 space-y-2">
          <div>
            <p>Speak to a specialist on: </p>
            <p className="font-medium lg:text-3xl text-xl text-dark-blue">
              +447877835123
            </p>
          </div>
          <p className="font-bold">OR</p>

          <a href="mailto:contactus@kiakiafx.uk">
            <Button className="text-base">Send A Message </Button>
          </a>
        </div>
      </div>

      {/* <form className="flex flex-col max-w-xl w-full space-y-7">
        <label>
          <input
            className="border-b rounded-sm border-dark-blue placeholder:text-dark-blue placeholder:font-semibold w-full p-2"
            placeholder="First Name*"
            type="text"
          ></input>
        </label>
        <label>
          <input
            className="border-b rounded-sm border-dark-blue placeholder:text-dark-blue placeholder:font-semibold w-full p-2"
            placeholder="Last Name*"
            type="text"
          ></input>
        </label>
        <label>
          <input
            className="border-b rounded-sm border-dark-blue placeholder:text-dark-blue placeholder:font-semibold w-full p-2"
            placeholder="Phone Number*"
            type="number"
          ></input>
        </label>

        <label>
          <input
            className="border-b rounded-sm border-dark-blue placeholder:text-dark-blue placeholder:font-semibold w-full p-2"
            placeholder="Email Address*"
            required
            type="email"
          ></input>
        </label>
        <label>
          <textarea
            className="border-b rounded-sm border-dark-blue placeholder:text-dark-blue placeholder:font-semibold w-full p-2"
            placeholder="Tell us about your financial goal"
          ></textarea>
        </label>
        <div className="flex justify-center items-center">
          <Button className="text-base w-48 p-5 rounded-full">
            Send A Request{" "}
          </Button>
        </div>
      </form> */}
    </div>
  );
};

export default Contact;
