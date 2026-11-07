import {useLayoutEffect,useRef} from "react";
import CountUp from "../motion/CountUp";
import RevealWords from "../motion/RevealWords";
import HeroBackgroundVideo from "../HeroBackgroundVideo";
const imgBackgroundAdcFlowingFabric = "/assets/figma/8404-26515-imgBackgroundAdcFlowingFabric.webp";
const imgImageProfessionalLearningWorkshop = "/assets/figma/8404-26515-imgImageProfessionalLearningWorkshop.webp";
const imgGroup = "/assets/figma/8404-26515-imgGroup.svg";
const imgGroup1 = "/assets/figma/8404-26515-imgGroup1.svg";
const imgVuesaxOutlineArrowDown = "/assets/figma/8404-26515-imgVuesaxOutlineArrowDown.svg";
const imgLine10 = "/assets/figma/8404-26515-imgLine10.svg";

export default function HeroAdcMidnightAmbient() {
  const heroRef=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{const node=heroRef.current;if(!node)return;const update=()=>{const zoom=node.getBoundingClientRect().width/node.offsetWidth||1;node.style.setProperty('--hero-viewport',`${Math.max(650,innerHeight)/zoom}px`);node.style.setProperty('--hero-scale',String(Math.min(1,(Math.max(650,innerHeight)/zoom)/1198)))};update();window.addEventListener('resize',update);return()=>window.removeEventListener('resize',update)},[]);
  return (
    <div className="ufc3627b u897a779 uf66bad4 u769dc70 u99c483e u36113fd" ref={heroRef} data-node-id="8404:26515" data-name="HERO — ADC / Midnight ambient">
      <div className="u07480db u99c483e u0ff40b7 uf662077" data-node-id="8404:27044"><div className="hero-scaled-scene">
        <div className="udc4d53a u98bf7d8 uc0d02ad u91359c3" data-node-id="8404:27045">
          <div className="udc4d53a u4691f1b u4aab415 uc0d02ad u342e61f uf662077" data-node-id="8404:27046" data-name="HERO">
            <div className="ub9d61ad ua3c9421 udc4d53a u4aab415 u80e3751 ua4d410f uf662077" data-node-id="8404:27047" data-name="Hero / ADC brand geometry composition">
              <div className="udc4d53a u6bf6af1 uc0d02ad u205889a uf662077" data-node-id="8404:27048" data-name="Background / ADC flowing fabric">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u36113fd" src={imgBackgroundAdcFlowingFabric} /><HeroBackgroundVideo/>
              </div>
              <div className="udc4d53a uf632ec6 u4aab415 uc0d02ad u91359c3 ue1de439" data-node-id="8404:27049" />
            </div>
            <div className="udc4d53a ufc3627b u897a779 uf66bad4 uf111d0f u54183fb u4b730cd ubf204ea uf34f488 ue88c894" data-node-id="8404:27050">
              <div className="ufc3627b u897a779 uf66bad4 u86b6719 u54183fb uef6007d u99c483e u0ff40b7 u37e0cd2" data-node-id="8404:27051" data-name="Hero / Centred message">
                <h1 className="u9bf4565 u268b44a u1333167 ud14ce54 uff9932c u99c483e u0ff40b7 ueb61158 u70dfd13 uc3fcf5c u6fcd191" data-node-id="8404:27052" data-motion-native>
                  <RevealWords highlight="Top 1%" text="Join the Top 1% of your industry and thrive in an AI-driven world."/>
                </h1>
                <p className="u9bf4565 ua342888 u70bd85c uff9932c u99c483e u0ff40b7 u34a3b77 u27bd7e4 u70dfd13 u90bcf49" data-node-id="8404:27053">
                  For 15+ years, ADC has helped organizations innovate, transform intelligently, adapt rapidly, execute exceptionally and make progress visible.
                </p>
                <div className="ufc3627b u897a779 u43f6a22 u54183fb u99c483e u0ff40b7" data-node-id="8404:27054">
                  <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e u6e85ef8 u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e ud84f400 u0ff40b7 uaaa59ad" data-node-id="8404:27055" data-name="Button">
                    <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 uabec368 uc3fcf5c u65ba8f0" data-node-id="I8404:27055;11:1470">
                      <p className="u1333167">Browse all programmes</p>
                    </div>
                  </div>
                  <div className="u4efc18c ufc3627b u897a779 u8fc3b2e u6e85ef8 u54183fb u4b730cd uef6007d u3dcf3a8 uf1f2588 u99c483e ud84f400 u0ff40b7 uaaa59ad" data-node-id="8404:27056" data-name="Button">
                    <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u3bd70e0 u0ddd995 u65ba8f0" data-node-id="I8404:27056;11:1560">
                      <p className="u1333167">Explore Services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u513db8e u99c483e u73a213f u0ff40b7 ud486f79" data-node-id="8404:27057" data-name="Image / Professional learning workshop">
                <img alt="" className="udc4d53a u5f1cffc u1a5895b ub8dda64 u08f3d9d u73a213f u36113fd" src={imgImageProfessionalLearningWorkshop} />
              </div>
            </div>
            <div className="udc4d53a u4efc18c u2de42fb u2bb4530 u419aa8f ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 ube3fc0b uef6007d ub296a06 u73a213f u95d1755 u83b2269" data-node-id="8404:27058" data-motion-native data-name="Featured course / Innovation Foundations">
              <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u65ba8f0" data-node-id="8404:27059">
                <p className="u559f244">FREE MINI-COURSE</p>
              </div>
              <p className="u9bf4565 u268b44a u70bd85c uff9932c u99c483e u0ff40b7 u07b4d55 u87c4267 ub2b67db" data-node-id="8404:27060">
                Innovation Foundations
              </p>
              <button type="button" data-action="course" data-title="Innovation Foundations" className="u4df7ccf ufc3627b u897a779 u769dc70 uef6007d ua00f400 uc6f0d86 u99c483e u1963165 u0ff40b7" data-node-id="8404:27062" data-name="Announcement / Start free">
                <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u773d8f9 uc3fcf5c u65ba8f0" data-node-id="8404:27063">
                  <p className="u559f244">START FREE!</p>
                </div>
              </button>
              <p className="u9bf4565 ua342888 ub665f71 uff9932c u99c483e u0ff40b7 uf23e4c8 u0ddd995 ub2b67db" data-node-id="8404:27061">
                90 minutes to find where your innovation breaks.
              </p>
            </div>
          </div>

        </div>
      </div>
      </div><div className="u9bf4565 u4efc18c ufc3627b u897a779 u9852651 u769dc70 uff9932c uef6007d u942cc98 u55368a9 u99c483e u1963165 u0ff40b7 u70dfd13 uf662077" data-node-id="8404:26563" data-name="Metrics / Simple proof strip">
        <div className="ufc3627b u897a779 uf66bad4 u3243a75 ucf79d72 u54183fb u4b730cd uef6007d u0c5f68f u99c483e u0ff40b7 ubead940" data-node-id="8404:26564" data-name="Metric / 15+">
          <p className="u29c2093 u51792c0 u99c483e u0ff40b7 u81841dd u4262a5c ud486f79" data-node-id="8404:26565">
            <CountUp value={15} suffix="+"/>
          </p>
          <p className="ua342888 ub665f71 u99c483e u0ff40b7 uf23e4c8 u0ddd995 ud486f79" data-node-id="8404:26566">
            years building leaders
          </p>
        </div>
        <div className="ufc3627b u897a779 uf66bad4 u3243a75 ucf79d72 u54183fb u4b730cd uef6007d u0c5f68f u99c483e u0ff40b7 ubead940" data-node-id="8404:26567" data-name="Metric / 50,000+">
          <p className="u29c2093 u51792c0 u99c483e u0ff40b7 u81841dd u4262a5c ud486f79" data-node-id="8404:26568">
            <CountUp value={50000} suffix="+"/>
          </p>
          <p className="ua342888 ub665f71 u99c483e u0ff40b7 uf23e4c8 u0ddd995 ud486f79" data-node-id="8404:26569">
            professionals trained
          </p>
        </div>
        <div className="ufc3627b u897a779 uf66bad4 u3243a75 ucf79d72 u54183fb u4b730cd uef6007d u0c5f68f u99c483e u0ff40b7 ubead940" data-node-id="8404:26570" data-name="Metric / 1,000+">
          <p className="u29c2093 u51792c0 u99c483e u0ff40b7 u81841dd u4262a5c ud486f79" data-node-id="8404:26571">
            <CountUp value={1000} suffix="+"/>
          </p>
          <p className="ua342888 ub665f71 u99c483e u0ff40b7 uf23e4c8 u0ddd995 ud486f79" data-node-id="8404:26572">
            projects delivered
          </p>
        </div>
        <div className="ufc3627b u897a779 uf66bad4 u3243a75 ucf79d72 u54183fb u4b730cd uef6007d u0c5f68f u99c483e u0ff40b7 ubead940" data-node-id="8404:26573" data-name="Metric / 98%">
          <p className="u29c2093 u51792c0 u99c483e u0ff40b7 u81841dd u4262a5c ud486f79" data-node-id="8404:26574">
            <CountUp value={98} suffix="%"/>
          </p>
          <p className="ua342888 ub665f71 u99c483e u0ff40b7 uf23e4c8 u0ddd995 ud486f79" data-node-id="8404:26575">
            client rating
          </p>
        </div>
      </div>
    </div>
  );
}

