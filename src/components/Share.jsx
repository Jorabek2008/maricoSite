import { bir, ikki, step3 } from "../images";
import Button from './../common/Button';

const Share = () => {
  return (
    <div>
      <div
        className="ml-[20px] sm:ml-[60px] md:ml-[70px] lg:ml-[120px] xl:ml-[152px] mt-[182px]"
        id="/blog"
      >
        <div className="block lg:flex items-center justify-between">
          <div className="block">
            <h3 className="2sm:text-[20px] md:text-[30px] leading-[30px] md:leading-[45px]">
              Create & Share
            </h3>
            <h1 className="mt-[40px] md:mt-[80px] text-[30px] 2sm:text-[50px] xl:text-[75px] font-bold leading-[40px] 2sm:leading-[75px] xl:leading-[100px]">
              Reach Your <br /> Audience
              <span className="text-primary">Directly.</span>
            </h1>
            <div>
              <div className="flex items-center gap-[12px] mt-[27px]">
                <img src={bir} alt="one number" />
                <p className="text-[14px] 2sm:text-[19px] md:text-[23px]">
                  Embed content or create something new to share.
                </p>
              </div>
              <div className="flex items-center gap-[12px] mt-[12px]">
                <img src={ikki} alt="two number" />
                <p className="text-[14px] 2sm:text-[19px] md:text-[23px]">
                  Share content over email, text message or your homepage.
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
          <div className="w-[300px] 2sm:w-[560px] mx-auto md:w-[670px] mt-[60px] lg:w-[700px]">
            <img src={step3} alt="step-1 img" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
