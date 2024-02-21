import Button from "../micro/button";

const Header = () => {
  return (
    <header className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:place-items-center w-full lg:px-10 px-5 gap-8 lg:pt-44 pt-36">
      <div>
        <h1 className="text-dark-blue max-w-2xl font-bold text-2xl sm:text-4xl xl:text-5xl">
          Money transfer with a personal touch{" "}
        </h1>

        <p className="pt-5 text-justify leading-7">
          Money transfers shouldn't be a hassle. At{" "}
          <span className="font-bold">Leeds Money Transfer</span>, we make it
          easy by offering fast, secure, and affordable way to meet your
          remittance needs, so you can focus on what matters. With our
          user-friendly platform and transparent fees, you can send money with
          confidence, knowing your recipients will receive every penny in no
          time.
        </p>
        <a href="#offers">
          <Button className="mt-5 w-40">Explore our Offers</Button>
        </a>
      </div>
      <div className="flex justify-center lg:justify-normal">
        <img src="/7.jpeg" alt="consultation" className="rounded-md" />
      </div>
    </header>
  );
};

export default Header;
