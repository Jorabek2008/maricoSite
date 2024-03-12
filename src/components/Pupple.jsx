import { puppleImg } from "../images"

const Pupple = () => {
  return (
    <div>
        <div className="mt-[188px] relative">
            <img src={puppleImg} alt="pupples img" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-center text-[20px] font-bold sm:text-[23px] w-[300px] sm:w-full 2sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[65px]">We&apos;ve helped over 1,000 creatorsre claim control of their audience.</h1>
            </div>
        </div>
    </div>
  )
}

export default Pupple