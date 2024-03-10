import { PageTitle } from "../common"
import { puppleImg } from "../images"

const Pupple = () => {
  return (
    <div>
        <div className="mt-[188px] relative">
            <img src={puppleImg} alt="pupples img" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <PageTitle title={'We\'ve helped over 1,000 creatorsre claim control of their audience.'} />
            </div>
        </div>
    </div>
  )
}

export default Pupple