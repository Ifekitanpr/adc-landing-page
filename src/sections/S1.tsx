import {useRef} from "react";
import {motion,useInView,useReducedMotion} from "motion/react";
import BalanceResult from "../BalanceResult";
import PendulumScene from "../motion/PendulumScene";
const imgEllipse = "/assets/figma/8417-27809-imgEllipse.svg";

export default function CapabilityAdvantagePeopleAndSystemsInBalance() {
  const contributors=useRef<HTMLDivElement>(null);
  const seen=useInView(contributors,{once:true,amount:.25});
  const reduced=useReducedMotion();
  return (
    <div className="u11418b4 u99c483e u36113fd" data-node-id="8417:27809" data-name="Capability advantage / People and systems in balance">
      <PendulumScene/>
      <div className="u9bf4565 udc4d53a ufc3627b u897a779 uf66bad4 u54183fb u0a9f3e3 uff9932c uef6007d u81841dd u70dfd13 u13db97b u23b00e3" data-node-id="8417:27845" data-name="Title / Capability in balance">
        <p className="u29c2093 u3164ded u99c483e u0ff40b7 u50dd1f1 u23b00e3" data-node-id="8417:27846">
          Your ambition needs
        </p>
        <p className="udd48970 uea58f04 u99c483e u0ff40b7 u2b4e6b5 u23b00e3" data-node-id="8417:27847">
          more than skills.
        </p>
        <p className="balance-supporting">Don’t just adopt AI. Build the capability to transform with it.</p>
      </div>

      <p className="ub9d61ad u9bf4565 udc4d53a ua342888 u79188bd u7353fb5 uff9932c u81841dd u3eb3769 u70dfd13 uea6fb47 u3bc5a23" data-node-id="8417:27850">
        THE ADC CAPABILITY ADVANTAGE
      </p>
      <div className="udc4d53a ufc3627b u897a779 u769dc70 u79b704d u8332a74 uef6007d ua67e79f uf18e781" data-node-id="8417:27851" data-name="Copy / People and systems" ref={contributors}>
        <motion.div className="ufc3627b u897a779 uf66bad4 u7d29f20 u769dc70 uef6007d u99c483e u0ff40b7 u83b2269" data-node-id="8417:27852" data-name="Copy / Capable People" data-motion-native initial={reduced?false:{opacity:0,x:-28}} animate={{opacity:seen||reduced?1:0,x:seen||reduced?0:-28}} transition={{duration:.85,delay:0,ease:[.22,1,.36,1]}}>
          <div className="ufc3627b u897a779 u43f6a22 u54183fb uef6007d u99c483e u0ff40b7" data-node-id="8417:27853" data-name="Copy / Pillar label">
            <div className="u99c483e u0ff40b7 uc1ae788" data-node-id="8417:27854" data-name="Ellipse">
              <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgEllipse} />
            </div>
            <p className="u9bf4565 ua342888 u559f244 uff9932c u99c483e u0ff40b7 u81841dd u0ddd995 u9ce157d" data-node-id="8417:27855">
              CAPABLE PEOPLE
            </p>
          </div>
          <p className="u9bf4565 ua342888 ufed33c2 uff9932c u99c483e u0ff40b7 u81841dd uc79a763 u83b2269" data-node-id="8417:27856">
            Build the knowledge, skills and confidence to turn ideas into meaningful action. We help people grow into capable leaders who create lasting impact across industries.
          </p>
        </motion.div>
        <motion.div className="ufc3627b u897a779 uf66bad4 u7d29f20 u0f4296e uef6007d u99c483e u0ff40b7 u83b2269" data-node-id="8417:27857" data-name="Copy / Integrated Systems" data-motion-native initial={reduced?false:{opacity:0,x:28}} animate={{opacity:seen||reduced?1:0,x:seen||reduced?0:28}} transition={{duration:.85,delay:0.14,ease:[.22,1,.36,1]}}>
          <div className="ufc3627b u897a779 u43f6a22 u54183fb uef6007d u99c483e u0ff40b7" data-node-id="8417:27858" data-name="Copy / Pillar label">
            <p className="u9bf4565 ua342888 u559f244 uff9932c u99c483e u0ff40b7 u81841dd u0ddd995 uabec368 u9ce157d" data-node-id="8417:27859">
              INTEGRATED SYSTEMS
            </p>
            <div className="u99c483e u0ff40b7 uc1ae788" data-node-id="8417:27860" data-name="Ellipse">
              <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgEllipse} />
            </div>
          </div>
          <p className="u9bf4565 ua342888 ufed33c2 uff9932c u99c483e u0ff40b7 u81841dd uc79a763 uabec368 u83b2269" data-node-id="8417:27861">
            Connect people, processes and technology so progress becomes repeatable. We help organisations streamline workflows, improve efficiency and deliver consistent results.
          </p>
        </motion.div>
      </div>
      <BalanceResult ready={seen} delay={1.02} nodeId="8404:26667"/>
    </div>
  );
}

