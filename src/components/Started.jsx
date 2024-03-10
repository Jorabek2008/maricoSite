import { Button } from "../common"
import { dot, maricoStarted } from "../images"

const Started = () => {
  return (
    <div>
        <div className="mt-[188px] text-center">
            <img src={maricoStarted} alt="page logo medium" className="mx-auto" />
            <h1 className="text-[40px] sm:text-[60px] lg:text-[100px] font-bold mt-[20px]">Get Started Now</h1>
            <p className="text-[23px] sm:text-[30px] lg:text-[43px]">Setup is easy and takes under 5 minutes.</p>
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