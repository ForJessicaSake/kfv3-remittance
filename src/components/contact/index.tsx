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
          Send me a message, and tell me more about your financial goals and
          needs. I will get back to you soon to schedule a consultation. Our
          availability is Monday to Friday from 9am to 5pm, and Saturdays by
          appointment. However, please note that we are is closed on Sundays.
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
    </div>
  );
};

export default Contact;
