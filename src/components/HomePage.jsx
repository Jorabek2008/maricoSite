import { bir, ikki, step1 } from "../images";
import { Button, PageTitle } from "../common";

const HomePage = () => {
  return (
    <>
      <div className="ml-[20px] sm:ml-[60px] md:ml-[70px] lg:ml-[120px] xl:ml-[152px] mt-[182px]" id="/about">
        <div className="block lg:flex items-center justify-between">
          <div className="block">
            <h3 className="text-[20px] md:text-[30px] leading-[30px] md:leading-[45px]">
              Your Homepage
            </h3>
            <h1 className="mt-[40px] md:mt-[80px] text-[50px] md:text-[75px] font-bold leading-[75px] md:leading-[100px]">
              Your Content. <br /> All in{" "}
              <span className="text-primary">One spot</span>
            </h1>
            <div>
              <div className="flex items-center gap-[12px] mt-[27px]">
                <img src={bir} alt="one number" />
                <p className="text-[18px] md:text-[23px]">
                  Bring all of your content together into one homepage.
                </p>
              </div>
              <div className="flex items-center gap-[12px] mt-[12px]">
                <img src={ikki} alt="two number" />
                <p className="text-[18px] md:text-[23px]">
                  Your page automatically updates whenever you create.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-[24px] mt-[66px]">
              <Button text={"Get Started Now"} size={"sm"} />
              <Button
                text={"View A Demo"}
                size={"sm"}
                href={"/view"}
                className={"border"}
              />
            </div>
          </div>
          <div className="w-[400px] sm:w-[560px] mx-auto md:w-[670px] mt-[60px] lg:w-[700px]">
            <img
              src={step1}
              alt="step-1 img"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="mt-[162px]">
        <p className="text-center font-bold text-primary uppercase">Step 2</p>
        <PageTitle title={"Share Your Homepage"} />
        <p className="text-kulrang text-[20px] md:text-[30px] leading-[30px] md:leading-[45px] text-center">
          Share your Wavium homepage link with your followers, and <br />{" "}
          we&apos;ll handle the rest.
        </p>
      </div>
    </>
  );
};

export default HomePage;
