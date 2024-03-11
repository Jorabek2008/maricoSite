import { Button } from "../common"
import { dot, maricoStarted } from "../images"

const Started = () => {
  return (
    <div>
        <div className="mt-[188px] text-center">
            <img src={maricoStarted} alt="page logo medium" className="mx-auto w-[100px] sm:w-[130px] 2sm:w-[164px]" />
            <h1 className="text-[30px] sm:text-[40px] 2sm:text-[60px] lg:text-[100px] font-bold mt-[20px]">Get Started Now</h1>
            <p className="text-[17px] leading-[20px] md:text-[20px] lg:text-[30px] md:leading-[30px] lg:leading-[45px] text-center px-[20px] mb-4">Setup is easy and takes under 5 minutes.</p>
            <Button size={'md'} text={'Get Started Now'} />
            <div className="flex items-center justify-center mt-[21px] gap-[9px]">
                <img src={dot} alt="dot img" />
                <p className="text-kulrang text-[20px] md:text-[38px]">
                    <span className="font-bold text-white">1000+ </span>creators have already started
                </p>
            </div>
        </div>
    </div>
  )
}

export default Started