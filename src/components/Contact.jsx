import { PageTitle } from "../common";
import { mobile } from "../images";

const Contact = () => {
  return (
    <div>
      <div className="block lg:flex gap-[30px] mt-[176px] justify-center" id="/pricing">
        <div className="block p-[33px] pb-0 bg-[#0D0D0D] w-[370px] md:w-[570px] lg:w-[670px] mx-auto">
          <h3 className="text-green-light text-[20px] md:text-[30px]">
            One Link
          </h3>
          <h1 className="mt-[24px] text-[50px] md:text-[70px] leading-[60px] md:leading-[90px] font-bold">
            <span className="text-chernel">ALL You Create.</span> <br /> One
            Link
          </h1>
          <img
            src={mobile}
            className="mt-[14px] w-[500px] ml-[80px] md:ml-[112px] lg:ml-[122px] lg:w-[600px]"
            alt="mobile img"
          />
        </div>
        <div className="block p-[33px] bg-[#0D0D0D] w-[370px] md:w-[570px] lg:w-[670px] mt-[30px] lg:mt-0 mx-auto">
          <h3 className="text-green-light text-[20px] md:text-[30px]">
            Collect Subscribers
          </h3>
          <h1 className="mt-[24px] text-[50px] md:text-[70px] leading-[60px] md:leading-[90px] font-bold">
            <span className="text-chernel">
              Emails. <br /> Phone #s.
            </span>{" "}
            <br />
            All Yours.
          </h1>
        </div>
      </div>
      <div className="mt-[189px]">
        <p className="text-center font-bold text-primary uppercase">Step 3</p>
        <PageTitle title={"Send Emails & Text Messages"} />
        <p className="text-kulrang text-[20px] md:text-[30px] leading-[30px] md:leading-[45px] text-center">
          No more going through a social platform. Reach and engage <br /> your
          audience directly over email and text massage.
        </p>
      </div>
    </div>
  );
};

export default Contact;
