import { PageTitle } from "../common"
import { expertImg } from "../images"

const Expert = () => {
  return (
    <div>
        <div className="mt-[99px]">
            <PageTitle title={'Experts Agree'} />
            <div className="px-[20px]">
                <img src={expertImg} alt="img" className="mt-[52px] object-cover mx-auto" />
            </div>
        </div>
    </div>
  )
}

export default Expert