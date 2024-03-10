import { Button } from "../common";
import { dot } from "../images";

const Hero = () => {
  return (
    <div className="pt-[128px]" id="/">
      <div className="text-center">
        <h1 className="text-[50px] md:text-[80px] leading-[60px] md:leading-[90px] font-bold">
          Own your audience. <br />{" "}
          <span className="bg-gradient-to-r from-[#FE6783] via-[#FFBF84] bg-clip-text to-[#FFBF84] text-transparent">
            So you don&apos;t lose them.
          </span>
        </h1>
        <h3 className="mt-[136px] text-[28px] leading-[40px]">
          Turn your audience into email and <br /> text message subscribers.
        </h3>
        <div className="flex mt-[50px] justify-center gap-[26px]">
          <Button text={"Get Started Now"} size={"md"} />
          <Button
            text={"View A Demo"}
            size={"md"}
            href={"/view"}
            className={"border"}
          />
        </div>
        <div className="flex items-center justify-center mt-[21px] gap-[9px]">
          <img src={dot} alt="dot img" />
          <p className="text-kulrang">
            <span className="font-bold text-white">1000+ </span>creators have
            already started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
