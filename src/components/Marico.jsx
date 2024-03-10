import { Button, PageTitle } from "../common";
import { smile, smile1, smile2 } from "../images";

const Marico = () => {
  return (
    <div>
      <div className="mt-[188px]">
        <PageTitle title={"Why Creators Love Marico"} />
      </div>
      <div className="flex items-center justify-center gap-[107px] flex-wrap">
        <div>
          <div className="flex items-center justify-center gap-[8px]">
            <img src={smile} alt="smile img" />
            <h3 className="text-[20px] font-bold">Reduced Anxiety</h3>
          </div>
          <p className="text-kulrang mt-[10px]">
            Never worry about losing your audience.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-[8px]">
            <img src={smile1} alt="smile img" />
            <h3 className="text-[20px] font-bold">Lower Workload</h3>
          </div>
          <p className="text-kulrang mt-[10px]">
            Just share one link. We&apos;ll handle the rest.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-[8px]">
            <img src={smile2} alt="smile img" />
            <h3 className="text-[20px] font-bold">More Time</h3>
          </div>
          <p className="text-kulrang mt-[10px]">
            Spend less time on marketing tools
          </p>
        </div>
      </div>

      <div className="mt-[162px]">
        <p className="text-center font-bold text-primary uppercase">Step 1</p>
        <PageTitle title={"Connect Your Content"} />
        <p className="text-kulrang text-[20px] md:text-[30px] leading-[30px] md:leading-[45px] text-center">
          Bring all of your content together and get a Homepage that <br />{" "}
          automatically updates whenever you create anywhere online.
        </p>
        <div className="text-center">
          <Button
            className={"mt-[34px] border"}
            href={"/view"}
            text={"View Avaliable Sources"}
            size={"sm"}
          />
        </div>
      </div>
    </div>
  );
};

export default Marico;
