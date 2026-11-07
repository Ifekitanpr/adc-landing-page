import HeroBackgroundVideo from "../HeroBackgroundVideo";
const imgCourseThumbnail = "/assets/figma/8427-25121-imgCourseThumbnail.webp";
const imgStar = "/assets/figma/8427-25121-imgStar.svg";
const imgBackgroundFlowingAdcBlue = "/assets/figma/8427-25121-imgBackgroundFlowingAdcBlue.webp";
const imgCourseThumbnail1 = "/assets/figma/8427-25121-imgCourseThumbnail1.webp";
const imgCourseThumbnail2 = "/assets/figma/8427-25121-imgCourseThumbnail2.webp";
const imgCourseThumbnail3 = "/assets/figma/8427-25121-imgCourseThumbnail3.webp";
const imgCourseThumbnail4 = "/assets/figma/8427-25121-imgCourseThumbnail4.webp";
const imgCourseThumbnail5 = "/assets/figma/8427-25121-imgCourseThumbnail5.webp";
const imgVuesaxOutlineBook = "/assets/figma/8427-25121-imgVuesaxOutlineBook.svg";
const imgFrame = "/assets/figma/8427-25121-imgFrame.svg";
const imgFrame1 = "/assets/figma/8427-25121-imgFrame1.svg";

type AdcPopularCourseCardMpciStyleProps = {
  className?: string;
  courseTitle?: string;
};

function AdcPopularCourseCardMpciStyle({ className, courseTitle = "Fundamentals of AI & Data Analytics for Innovation" }: AdcPopularCourseCardMpciStyleProps) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col h-[465px] items-start overflow-clip relative rounded-[10px] w-[302.75px]"} data-node-id="8427:25103" data-name="ADC / Popular course card / MPCI style">
      <div className="u43dbf85 u99c483e u0ff40b7 u79a26d1" data-node-id="8427:25104" data-name="Course thumbnail">
        <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgCourseThumbnail} />
      </div>
      <div className="ufc3627b u897a779 uf66bad4 ua735275 u769dc70 u79b704d uef6007d u90a7b04 u99c483e u0ff40b7 u79a26d1" data-node-id="8427:25105" data-name="Course details">
        <p className="u9bf4565 u46abc35 uc50bcaf uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u8b75fb3" data-node-id="8427:25106">
          AGILE DIGITAL COLLEGE
        </p>
        <p className="u9bf4565 u29c2093 u69d8562 uf0580de uff9932c u99c483e u0ff40b7 u07b4d55 u27bd7e4 u8b75fb3" data-node-id="8427:25107">
          {courseTitle}
        </p>
        <div className="ufc3627b u897a779 u54183fb u79b704d u99c483e u0ff40b7 ud486f79" data-node-id="8427:25108" data-name="Course rating and enrolment">
          <div className="ufc3627b u897a779 ud29bbd1 u54183fb u99c483e u0ff40b7" data-node-id="8427:25109" data-name="Rating">
            <div className="u99c483e u0ff40b7 ue685d54" data-node-id="8427:25110" data-name="Star">
              <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgStar} />
            </div>
            <p className="u9bf4565 ua342888 u1333167 uff9932c u99c483e u0ff40b7 u2b690cb u58f475c u65ba8f0" data-node-id="8427:25111">
              5.0
            </p>
          </div>
          <div className="u9bf4565 ufc3627b u897a779 u54183fb u4b730cd u1333167 uff9932c u99c483e u0ff40b7 u58f475c u65ba8f0" data-node-id="8427:25112">
            <p className="u46abc35 u99c483e u0ff40b7 u2b690cb" data-node-id="8427:25113">
              15.7K
            </p>
            <p className="ua342888 u99c483e u0ff40b7 u4c816df" data-node-id="8427:25114">{` Students`}</p>
          </div>
        </div>
        <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e uee648ef u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e u9d37e5a u0ff40b7 u8b75fb3" data-node-id="8427:25118" data-name="View course">
          <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8427:25118;11:1470">
            <p className="u1333167">View course</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularCoursesMpciInspiredCurriculumStyle() {
  return (
    <div className="u4efc18c ufc3627b u897a779 uf66bad4 u769dc70 u14b6390 u99c483e u36113fd" data-node-id="8427:25121" data-name="Popular courses / MPCI-inspired curriculum style">
      <div className="u4691f1b u8362d61 uef6007d u99c483e u2d98b14 u0ff40b7 ufe01ae4" data-node-id="8427:25122" data-name="Courses / Rounded blue panel">
        <div className="udc4d53a u8362d61 uc0d02ad u91359c3 ufe01ae4" data-node-id="8427:25123" data-name="Background / Flowing ADC blue">
          <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgBackgroundFlowingAdcBlue} /><HeroBackgroundVideo poster={imgBackgroundFlowingAdcBlue}/>
        </div>
        <div className="udc4d53a u2ca9415 u8362d61 uc0d02ad u91359c3 ufe01ae4" data-node-id="8427:25124" data-name="Background / Contrast veil" />
        <div className="udc4d53a ufc3627b u897a779 uf66bad4 u86b6719 u769dc70 u3b9c115 uef6007d ubab6246 uabf0f60" data-node-id="8427:25125" data-name="Courses / Heading and introduction">
          <div className="ufc3627b u897a779 u43f6a22 u54183fb uef6007d u99c483e u0ff40b7" data-node-id="8427:25126" data-name="Courses / Eyebrow">
            <div className="u36cb88a uef6007d u99c483e u1963165 u0ff40b7 ub06c139" data-node-id="8427:25127" data-name="Courses / Book icon">
              <div className="udc4d53a u1a28e72 uc6a1446 ud4b1100" data-node-id="8427:25128" data-name="vuesax/outline/book">
                <div className="udc4d53a u98bf7d8 u5f1cffc" data-node-id="I8427:25128;11:9639" data-name="vuesax/outline/book">
                  <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgVuesaxOutlineBook} />
                </div>
              </div>
            </div>
            <p className="u9bf4565 u46abc35 ub665f71 uff9932c u99c483e u0ff40b7 u0c0c71c u0ddd995 uc6685b4" data-node-id="8427:25136">
              POPULAR COURSES
            </p>
          </div>
          <p className="u9bf4565 u268b44a u7ba6676 uff9932c u99c483e u0ff40b7 ub647584 uc3fcf5c uabf0f60" data-node-id="8427:25137">
            Explore courses for your next advantage.
          </p>
          <div className="ufc3627b u897a779 uf66bad4 u8fc3b2e u769dc70 uef6007d u99c483e u0ff40b7" data-node-id="8427:25138" data-name="Courses / Highlighted introduction">
            <div className="ufc3627b u897a779 u8fc3b2e u54183fb uef6007d u99c483e u0ff40b7" data-node-id="8427:25139" data-name="Introduction / Highlighted topics">
              <p className="u9bf4565 ua342888 u70bd85c uff9932c u99c483e u0ff40b7 u27bd7e4 uc3fcf5c uf3d801e" data-node-id="8427:25140">
                Build capability in
              </p>
              <div className="u36cb88a ufc3627b u897a779 u769dc70 uef6007d u942cc98 u7e36e2c u99c483e ubbfca9d u0ff40b7" data-node-id="8427:25141" data-name="Topic / innovation">
                <p className="u9bf4565 ua342888 ucfea2bd uff9932c u99c483e u0ff40b7 u27bd7e4 uc3fcf5c u65ba8f0" data-node-id="8427:25142">
                  innovation
                </p>
              </div>
              <div className="u36cb88a ufc3627b u897a779 u769dc70 uef6007d u942cc98 u7e36e2c u99c483e ubbfca9d u0ff40b7" data-node-id="8427:25143" data-name="Topic / communication">
                <p className="u9bf4565 ua342888 ucfea2bd uff9932c u99c483e u0ff40b7 u27bd7e4 uc3fcf5c u65ba8f0" data-node-id="8427:25144">
                  communication
                </p>
              </div>
              <div className="u36cb88a ufc3627b u897a779 u769dc70 uef6007d u942cc98 u7e36e2c u99c483e ubbfca9d u0ff40b7" data-node-id="8427:25145" data-name="Topic / product growth">
                <p className="u9bf4565 ua342888 ucfea2bd uff9932c u99c483e u0ff40b7 u27bd7e4 uc3fcf5c u65ba8f0" data-node-id="8427:25146">
                  product growth
                </p>
              </div>
              <div className="u36cb88a ufc3627b u897a779 u769dc70 uef6007d u942cc98 u7e36e2c u99c483e ubbfca9d u0ff40b7" data-node-id="8427:25147" data-name="Topic / AI">
                <p className="u9bf4565 ua342888 ucfea2bd uff9932c u99c483e u0ff40b7 u27bd7e4 uc3fcf5c u65ba8f0" data-node-id="8427:25148">
                  AI
                </p>
              </div>
            </div>
            <p className="u9bf4565 ua342888 u70bd85c uff9932c u99c483e u0ff40b7 u27bd7e4 uc3fcf5c uabf0f60" data-node-id="8427:25149">
              Choose a course, explore the details and take your next step.
            </p>
          </div>
        </div>
        <div className="udc4d53a u603f864 u3b9c115 u4246864 uc958da2 uc81e64e uabf0f60" data-node-id="8427:25150" data-name="Courses / Horizontal carousel">
          <div className="udc4d53a ufc3627b u897a779 u9ee33b4 u769dc70 uc0d02ad uef6007d u91359c3" data-node-id="8427:25151" data-name="Courses / All six course cards">
            <AdcPopularCourseCardMpciStyle className="u4efc18c ufc3627b u897a779 uf66bad4 u603f864 u769dc70 uef6007d u99c483e u19492b2 u0ff40b7 u79a26d1" />
            <div className="u4efc18c ufc3627b u897a779 uf66bad4 u603f864 u769dc70 uef6007d u99c483e u19492b2 u0ff40b7 u79a26d1" data-node-id="8427:25172" data-name="Course / Design Thinking and Disruptive Thinking for Innovation Course">
              <div className="u43dbf85 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25172;8427:25104" data-name="Course thumbnail">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgCourseThumbnail1} />
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua735275 u769dc70 u79b704d uef6007d u90a7b04 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25172;8427:25105" data-name="Course details">
                <p className="u9bf4565 u46abc35 uc50bcaf uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u8b75fb3" data-node-id="I8427:25172;8427:25106">
                  AGILE DIGITAL COLLEGE
                </p>
                <p className="u9bf4565 u29c2093 u69d8562 uf0580de uff9932c u99c483e u0ff40b7 u07b4d55 u27bd7e4 u8b75fb3" data-node-id="I8427:25172;8427:25107">
                  Design Thinking and Disruptive Thinking for Innovation Course
                </p>
                <div className="ufc3627b u897a779 u54183fb u79b704d u99c483e u0ff40b7 ud486f79" data-node-id="I8427:25172;8427:25108" data-name="Course rating and enrolment">
                  <div className="ufc3627b u897a779 ud29bbd1 u54183fb u99c483e u0ff40b7" data-node-id="I8427:25172;8427:25109" data-name="Rating">
                    <div className="u99c483e u0ff40b7 ue685d54" data-node-id="I8427:25172;8427:25110" data-name="Star">
                      <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgStar} />
                    </div>
                    <p className="u9bf4565 ua342888 u1333167 uff9932c u99c483e u0ff40b7 u2b690cb u58f475c u65ba8f0" data-node-id="I8427:25172;8427:25111">
                      5.0
                    </p>
                  </div>
                  <div className="u9bf4565 ufc3627b u897a779 u54183fb u4b730cd u1333167 uff9932c u99c483e u0ff40b7 u58f475c u65ba8f0" data-node-id="I8427:25172;8427:25112">
                    <p className="u46abc35 u99c483e u0ff40b7 u2b690cb" data-node-id="I8427:25172;8427:25113">
                      15.7K
                    </p>
                    <p className="ua342888 u99c483e u0ff40b7 u4c816df" data-node-id="I8427:25172;8427:25114">{` Students`}</p>
                  </div>
                </div>
                <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e uee648ef u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e u9d37e5a u0ff40b7 u8b75fb3" data-node-id="I8427:25172;8427:25118" data-name="View course">
                  <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8427:25172;8427:25118;11:1470">
                    <p className="u1333167">View course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u4efc18c ufc3627b u897a779 uf66bad4 u603f864 u769dc70 uef6007d u99c483e u19492b2 u0ff40b7 u79a26d1" data-node-id="8427:25191" data-name="Course / Product Growth & Innovation Essentials Course">
              <div className="u43dbf85 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25191;8427:25104" data-name="Course thumbnail">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgCourseThumbnail2} />
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua735275 u769dc70 u79b704d uef6007d u90a7b04 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25191;8427:25105" data-name="Course details">
                <p className="u9bf4565 u46abc35 uc50bcaf uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u8b75fb3" data-node-id="I8427:25191;8427:25106">
                  AGILE DIGITAL COLLEGE
                </p>
                <p className="u9bf4565 u29c2093 u69d8562 uf0580de uff9932c u99c483e u0ff40b7 u07b4d55 u27bd7e4 u8b75fb3" data-node-id="I8427:25191;8427:25107">{`Product Growth & Innovation Essentials Course`}</p>
                <div className="ufc3627b u897a779 u54183fb u79b704d u99c483e u0ff40b7 ud486f79" data-node-id="I8427:25191;8427:25108" data-name="Course rating and enrolment">
                  <div className="ufc3627b u897a779 ud29bbd1 u54183fb u99c483e u0ff40b7" data-node-id="I8427:25191;8427:25109" data-name="Rating">
                    <div className="u99c483e u0ff40b7 ue685d54" data-node-id="I8427:25191;8427:25110" data-name="Star">
                      <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgStar} />
                    </div>
                    <p className="u9bf4565 ua342888 u1333167 uff9932c u99c483e u0ff40b7 u2b690cb u58f475c u65ba8f0" data-node-id="I8427:25191;8427:25111">
                      5.0
                    </p>
                  </div>
                  <div className="u9bf4565 ufc3627b u897a779 u54183fb u4b730cd u1333167 uff9932c u99c483e u0ff40b7 u58f475c u65ba8f0" data-node-id="I8427:25191;8427:25112">
                    <p className="u46abc35 u99c483e u0ff40b7 u2b690cb" data-node-id="I8427:25191;8427:25113">
                      15.7K
                    </p>
                    <p className="ua342888 u99c483e u0ff40b7 u4c816df" data-node-id="I8427:25191;8427:25114">{` Students`}</p>
                  </div>
                </div>
                <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e uee648ef u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e u9d37e5a u0ff40b7 u8b75fb3" data-node-id="I8427:25191;8427:25118" data-name="View course">
                  <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8427:25191;8427:25118;11:1470">
                    <p className="u1333167">View course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u4efc18c ufc3627b u897a779 uf66bad4 u603f864 u769dc70 uef6007d u99c483e u19492b2 u0ff40b7 u79a26d1" data-node-id="8427:25210" data-name="Course / Impactful Business Communication & Presentation">
              <div className="u43dbf85 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25210;8427:25104" data-name="Course thumbnail">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgCourseThumbnail3} />
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua735275 u769dc70 u79b704d uef6007d u90a7b04 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25210;8427:25105" data-name="Course details">
                <p className="u9bf4565 u46abc35 uc50bcaf uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u8b75fb3" data-node-id="I8427:25210;8427:25106">
                  AGILE DIGITAL COLLEGE
                </p>
                <p className="u9bf4565 u29c2093 u69d8562 uf0580de uff9932c u99c483e u0ff40b7 u07b4d55 u27bd7e4 u8b75fb3" data-node-id="I8427:25210;8427:25107">{`Impactful Business Communication & Presentation`}</p>
                <div className="ufc3627b u897a779 u54183fb u79b704d u99c483e u0ff40b7 ud486f79" data-node-id="I8427:25210;8427:25108" data-name="Course rating and enrolment">
                  <div className="ufc3627b u897a779 ud29bbd1 u54183fb u99c483e u0ff40b7" data-node-id="I8427:25210;8427:25109" data-name="Rating">
                    <div className="u99c483e u0ff40b7 ue685d54" data-node-id="I8427:25210;8427:25110" data-name="Star">
                      <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgStar} />
                    </div>
                    <p className="u9bf4565 ua342888 u1333167 uff9932c u99c483e u0ff40b7 u2b690cb u58f475c u65ba8f0" data-node-id="I8427:25210;8427:25111">
                      5.0
                    </p>
                  </div>
                  <div className="u9bf4565 ufc3627b u897a779 u54183fb u4b730cd u1333167 uff9932c u99c483e u0ff40b7 u58f475c u65ba8f0" data-node-id="I8427:25210;8427:25112">
                    <p className="u46abc35 u99c483e u0ff40b7 u2b690cb" data-node-id="I8427:25210;8427:25113">
                      15.7K
                    </p>
                    <p className="ua342888 u99c483e u0ff40b7 u4c816df" data-node-id="I8427:25210;8427:25114">{` Students`}</p>
                  </div>
                </div>
                <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e uee648ef u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e u9d37e5a u0ff40b7 u8b75fb3" data-node-id="I8427:25210;8427:25118" data-name="View course">
                  <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8427:25210;8427:25118;11:1470">
                    <p className="u1333167">View course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u4efc18c ufc3627b u897a779 uf66bad4 u603f864 u769dc70 uef6007d u99c483e u19492b2 u0ff40b7 u79a26d1" data-node-id="8427:25229" data-name="Course / Peak Productivity and High Performance at the Workplace">
              <div className="u43dbf85 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25229;8427:25104" data-name="Course thumbnail">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgCourseThumbnail4} />
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua735275 u769dc70 u79b704d uef6007d u90a7b04 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25229;8427:25105" data-name="Course details">
                <p className="u9bf4565 u46abc35 uc50bcaf uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u8b75fb3" data-node-id="I8427:25229;8427:25106">
                  AGILE DIGITAL COLLEGE
                </p>
                <p className="u9bf4565 u29c2093 u69d8562 uf0580de uff9932c u99c483e u0ff40b7 u07b4d55 u27bd7e4 u8b75fb3" data-node-id="I8427:25229;8427:25107">
                  Peak Productivity and High Performance at the Workplace
                </p>
                <div className="ufc3627b u897a779 u54183fb u79b704d u99c483e u0ff40b7 ud486f79" data-node-id="I8427:25229;8427:25108" data-name="Course rating and enrolment">
                  <div className="ufc3627b u897a779 ud29bbd1 u54183fb u99c483e u0ff40b7" data-node-id="I8427:25229;8427:25109" data-name="Rating">
                    <div className="u99c483e u0ff40b7 ue685d54" data-node-id="I8427:25229;8427:25110" data-name="Star">
                      <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgStar} />
                    </div>
                    <p className="u9bf4565 ua342888 u1333167 uff9932c u99c483e u0ff40b7 u2b690cb u58f475c u65ba8f0" data-node-id="I8427:25229;8427:25111">
                      5.0
                    </p>
                  </div>
                  <div className="u9bf4565 ufc3627b u897a779 u54183fb u4b730cd u1333167 uff9932c u99c483e u0ff40b7 u58f475c u65ba8f0" data-node-id="I8427:25229;8427:25112">
                    <p className="u46abc35 u99c483e u0ff40b7 u2b690cb" data-node-id="I8427:25229;8427:25113">
                      15.7K
                    </p>
                    <p className="ua342888 u99c483e u0ff40b7 u4c816df" data-node-id="I8427:25229;8427:25114">{` Students`}</p>
                  </div>
                </div>
                <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e uee648ef u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e u9d37e5a u0ff40b7 u8b75fb3" data-node-id="I8427:25229;8427:25118" data-name="View course">
                  <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8427:25229;8427:25118;11:1470">
                    <p className="u1333167">View course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u4efc18c ufc3627b u897a779 uf66bad4 u603f864 u769dc70 uef6007d u99c483e u19492b2 u0ff40b7 u79a26d1" data-node-id="8427:25248" data-name="Course / Emotional Intelligence and Political Intelligence at the Workplace">
              <div className="u43dbf85 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25248;8427:25104" data-name="Course thumbnail">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgCourseThumbnail5} />
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua735275 u769dc70 u79b704d uef6007d u90a7b04 u99c483e u0ff40b7 u79a26d1" data-node-id="I8427:25248;8427:25105" data-name="Course details">
                <p className="u9bf4565 u46abc35 uc50bcaf uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u8b75fb3" data-node-id="I8427:25248;8427:25106">
                  AGILE DIGITAL COLLEGE
                </p>
                <p className="u9bf4565 u29c2093 u69d8562 uf0580de uff9932c u99c483e u0ff40b7 u07b4d55 u27bd7e4 u8b75fb3" data-node-id="I8427:25248;8427:25107">
                  Emotional Intelligence and Political Intelligence at the Workplace
                </p>
                <div className="ufc3627b u897a779 u54183fb u79b704d u99c483e u0ff40b7 ud486f79" data-node-id="I8427:25248;8427:25108" data-name="Course rating and enrolment">
                  <div className="ufc3627b u897a779 ud29bbd1 u54183fb u99c483e u0ff40b7" data-node-id="I8427:25248;8427:25109" data-name="Rating">
                    <div className="u99c483e u0ff40b7 ue685d54" data-node-id="I8427:25248;8427:25110" data-name="Star">
                      <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgStar} />
                    </div>
                    <p className="u9bf4565 ua342888 u1333167 uff9932c u99c483e u0ff40b7 u2b690cb u58f475c u65ba8f0" data-node-id="I8427:25248;8427:25111">
                      5.0
                    </p>
                  </div>
                  <div className="u9bf4565 ufc3627b u897a779 u54183fb u4b730cd u1333167 uff9932c u99c483e u0ff40b7 u58f475c u65ba8f0" data-node-id="I8427:25248;8427:25112">
                    <p className="u46abc35 u99c483e u0ff40b7 u2b690cb" data-node-id="I8427:25248;8427:25113">
                      15.7K
                    </p>
                    <p className="ua342888 u99c483e u0ff40b7 u4c816df" data-node-id="I8427:25248;8427:25114">{` Students`}</p>
                  </div>
                </div>
                <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e uee648ef u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e u9d37e5a u0ff40b7 u8b75fb3" data-node-id="I8427:25248;8427:25118" data-name="View course">
                  <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8427:25248;8427:25118;11:1470">
                    <p className="u1333167">View course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="udc4d53a u4df7ccf u14511f2 ud44c62e ubf9f47c uef6007d u52d3a0c ufaa23b4 u23f090d" data-node-id="8427:25267" data-name="Carousel / Previous">
          <div className="udc4d53a uc0d02ad ufaa23b4 u91359c3" data-node-id="8427:25268" data-name="Frame">
            <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgFrame} />
          </div>
        </button>
        <button className="udc4d53a u4df7ccf u14511f2 ud44c62e ue4940fe uef6007d u52d3a0c ufaa23b4 u23f090d" data-node-id="8427:25271" data-name="Carousel / Next">
          <div className="udc4d53a uc0d02ad ufaa23b4 u91359c3" data-node-id="8427:25272" data-name="Frame">
            <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}

