import Logo from "../../assets/logo.png";


export default function Footer() {
  return (
    <div className="container mx-auto px-5 lg:px-0 md:mt-28 mt-14 mb-5 flex flex-col">
      <div className="h-[1px] bg-gray-600 my-5" />
      <div className=" my-16 flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col sm:flex-row gap-8 w-[100%] justify-between lg:px-10">
          <a href="/">
            <img
              src={Logo}
              alt="App Logo"
              className="h-auto w-full max-h-16 max-w-24 inline"
            />
          </a>

          <div>
            <p className="text-dark-blue text-lg mb-2 font-medium">Contact</p>
            <a href="mailto:contactus@kiakiafx.uk">
              <p className="w-52 text-gray-900">contactus@kiakiafx.uk</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 w-[100%] justify-between md:justify-around">
          <div>
            <p className="text-dark-blue text-lg mb-2 font-medium">London</p>
            <p className="w-36 text-gray-900">
              <a
                href="https://maps.google.com/?q=128 City Road, London, United Kingdom"
                target="_blank"
                rel="noopener noreferrer"
              >
                128 City Road, London, United Kingdom. Postal Code: EC1V 2NX
                Tel: +447877835123
              </a>
            </p>
          </div>

          <p className="w-52 text-gray-900 font-medium">
            <p>© {new Date().getFullYear()} KiaKia. All Right Reserved</p>
          </p>
        </div>
      </div>
    </div>
  );
}
