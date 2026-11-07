import FlowConnections from "../motion/FlowConnections";
import {motion as m,LayoutGroup,useReducedMotion} from "motion/react";
import {Gauge,PadiPreview} from "../PlatformPreview";
import {useState,useEffect,useRef,useId} from "react";
const imgStrategyPreview = "/assets/figma/platforms-imgStrategyPreview.webp";
const imgGoToStrategy = "/assets/figma/platforms-imgGoToStrategy.svg";
const imgGoToPeople = "/assets/figma/platforms-imgGoToPeople.svg";
const imgGoToWork = "/assets/figma/platforms-imgGoToWork.svg";
const imgFlowConnections = "/assets/figma/platforms-imgFlowConnections.svg";
const imgFlowConnections1 = "/assets/figma/platforms-imgFlowConnections1.svg";
const imgFlowConnections2 = "/assets/figma/platforms-imgFlowConnections2.svg";
const imgFlowConnections3 = "/assets/figma/platforms-imgFlowConnections3.svg";
const imgFlowConnections4 = "/assets/figma/platforms-imgFlowConnections4.svg";
const imgFlowConnections5 = "/assets/figma/platforms-imgFlowConnections5.svg";
const imgGaugeEditableProgress = "/assets/figma/platforms-imgGaugeEditableProgress.svg";
const imgGaugeEditableProgress1 = "/assets/figma/platforms-imgGaugeEditableProgress1.svg";

type AdcPadiworksThumbnailCarouselProps = {
  className?: string;
  slide?: "Strategy";
};

type AdcConsultingSoftwareProps = {
  className?: string;
  step?: "4";
  tab?: "Consulting" | "Platforms";
};

function AdcConsultingSoftware({ className, step = "4", tab = "Consulting" }: AdcConsultingSoftwareProps) {
  const motionId=useId();const reduced=useReducedMotion();
  const [activeTab,setActiveTab]=useState(tab); const isPlatformsAnd4 = activeTab === "Platforms"; const isConsultingAnd4 = !isPlatformsAnd4;
  const workflowRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{const node=workflowRef.current;if(!node)return;node.classList.remove('in-view');const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){node.classList.add('in-view');io.disconnect()}},{threshold:.2});io.observe(node);return()=>io.disconnect()},[activeTab]);
  return (
    <div className={className || "u4efc18c ufc3627b u897a779 uf66bad4 u79a9361 u54183fb uc9eb0fa u06a2463 uf26d867 u99c483e uf662077"} onClick={e=>{const t=(e.target as HTMLElement).closest("[data-name=\"ADC Platforms\"],[data-name=\"ADC Consulting\"]");if(t?.getAttribute("data-name")==="ADC Platforms")setActiveTab("Platforms");if(t?.getAttribute("data-name")==="ADC Consulting")setActiveTab("Consulting");}} id={isPlatformsAnd4 ? "node-8436_25388" : "node-8436_25326"}>
      <div className="u9bf4565 ufc3627b u897a779 uf66bad4 u79afcd6 u54183fb uff9932c uef6007d u99c483e u0ff40b7 u70dfd13 uf8e8435" id={isPlatformsAnd4 ? "node-8436_25389" : "node-8436_25327"} data-name="Section heading">
        <p className="u46abc35 u79188bd u99c483e u0ff40b7 u81841dd u3734498 uf069ea8 u3239c51" id={isPlatformsAnd4 ? "node-8436_25390" : "node-8436_25328"}>{`CONSULTING & SOFTWARE`}</p>
        <div className="u268b44a ub0e090e u99c483e u0ff40b7 u07b4d55 u162f188 u3239c51" id={isPlatformsAnd4 ? "node-8436_25391" : "node-8436_25329"}>
          <p className="u0467cb0 u64ac74f">Stop renting capability.</p>
          <p className="u0467cb0">Start owning it.</p>
        </div>
        <p className="ua342888 ufed33c2 u99c483e u0ff40b7 u07b4d55 u6fa110a u3239c51" id={isPlatformsAnd4 ? "node-8436_25392" : "node-8436_25330"}>
          We deliver alongside your teams, then leave the capability with them.
        </p>
      </div>
      <LayoutGroup id={motionId}><div className="consulting-motion-tabs" data-name="Consulting / Platforms tabs" role="tablist" aria-label="ADC consulting and platforms">{(["Consulting","Platforms"] as const).map(t=><button key={t} className="consulting-tab" role="tab" aria-selected={activeTab===t} data-name={`ADC ${t}`} onClick={()=>setActiveTab(t)}>{activeTab===t&&<m.span className="consulting-active-pill" layoutId="active-service-tab" transition={{type:"spring",stiffness:330,damping:34}}/>}ADC {t}</button>)}</div></LayoutGroup>
      <m.div key={activeTab} data-motion-native initial={reduced?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5,ease:[.22,1,.36,1]}} className="ufc3627b u897a779 u34509d5 u54183fb uef6007d u34f204a u99c483e u4547e33 u0ff40b7 uf8e8435" id={isPlatformsAnd4 ? "node-8436_25398" : "node-8436_25336"} style={isPlatformsAnd4 ? { backgroundImage: "linear-gradient(132.82049732990595deg, rgb(18, 63, 150) 10.156%, rgb(7, 59, 156) 47.656%, rgb(0, 43, 121) 88.281%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1240 484' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(49.733 2.5882 -12.894 17.255 626.26 240.53)'><stop stop-color='rgba(128,95,207,0.22)' offset='0'/><stop stop-color='rgba(7,76,222,0.06)' offset='0.65'/><stop stop-color='rgba(7,76,222,0)' offset='1'/></radialGradient></defs></svg>\")" } : { backgroundImage: "linear-gradient(132.82049732990595deg, rgb(255, 243, 230) 10.156%, rgb(255, 224, 189) 49.219%, rgb(255, 197, 143) 88.281%), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1240 484' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(49.733 2.5882 -12.894 17.255 626.26 240.53)'><stop stop-color='rgba(255,137,1,0.22)' offset='0'/><stop stop-color='rgba(255,137,1,0.06)' offset='0.65'/><stop stop-color='rgba(255,137,1,0)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Featured capability panel">
        <div className="u9bf4565 ufc3627b u897a779 uf66bad4 u9ee33b4 u769dc70 uff9932c uef6007d u99c483e u0ff40b7 u60a52e8" id={isPlatformsAnd4 ? "node-8436_25399" : "node-8436_25337"} data-name="Panel introduction">
          <p className={`u219462a u42841ae u99c483e u0ff40b7 u3eb3769 u60a52e8 ${isPlatformsAnd4 ? "u17449fe" : "u81841dd"}`} id={isPlatformsAnd4 ? "node-8436_25400" : "node-8436_25338"}>
            {isPlatformsAnd4 ? "SOFTWARE THAT ENABLES EXECUTION" : "EXPERTISE THAT STAYS WITH YOU"}
          </p>
          <div className={`u2b7427e ub0e090e u99c483e u0ff40b7 u29325b7 u60a52e8 ${isPlatformsAnd4 ? "uc3fcf5c" : "u07b4d55"}`} id={isPlatformsAnd4 ? "node-8436_25401" : "node-8436_25339"}>
            <p className="u901a1d5 u64ac74f">{isPlatformsAnd4 ? "Connect strategy." : "Solve today."}</p>
            <p className="u901a1d5">{isPlatformsAnd4 ? "Enable execution." : "Build for tomorrow."}</p>
          </div>
          <p className={`udab3ffd u94eceb8 u99c483e u0ff40b7 u58f475c u082318f ${isPlatformsAnd4 ? "uc3fcf5c" : "u07b4d55"}`} id={isPlatformsAnd4 ? "node-8436_25402" : "node-8436_25340"}>
            {isPlatformsAnd4 ? "Platforms that connect your work, build confidence and bring performance into focus." : "From product delivery to AI adoption, build lasting capability while solving your most important challenges."}
          </p>
        </div>
        <div className="u6b11df6 u99c483e ude1340e u0ff40b7 uce750a2" id={isPlatformsAnd4 ? "node-8436_25403" : "node-8436_25341"} data-name="ADC capability workflow" ref={workflowRef} key={activeTab}>
          <div className="udc4d53a u6b11df6 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25422" : "node-8440_25393"} data-name="Reveal stage 1">
            <div className={`u9bf4565 udc4d53a ufc3627b u897a779 udab3ffd u08e85b9 u769dc70 ub0e090e uc0d02ad uff9932c uef6007d u1963165 u3eb3769 u70dfd13 u91359c3 uce750a2 ${isPlatformsAnd4 ? "u551d914 uc3fcf5c" : "ue13432a u81841dd"}`} id={isPlatformsAnd4 ? "node-8440_25426" : "node-8440_25397"} data-name="Four-stage progress">
              <div className="u897a779 uf66bad4 u6c96220 u4b730cd u99c483e u0ff40b7 ue1af307" id={isPlatformsAnd4 ? "node-8440_25427" : "node-8440_25398"}>
                <p className="u0d97f34 u8eec228">{isPlatformsAnd4 ? "01   ALIGN" : "01   DISCOVER"}</p>
              </div>
              <div className="u897a779 uf66bad4 u6c96220 u4b730cd u99c483e u0ff40b7 ue1af307" id={isPlatformsAnd4 ? "node-8440_25428" : "node-8440_25399"}>
                <p className="u0d97f34 u8eec228">{isPlatformsAnd4 ? "02   CONNECT" : "02   DESIGN"}</p>
              </div>
              <div className="u897a779 uf66bad4 u6c96220 u4b730cd u99c483e u0ff40b7 ue1af307" id={isPlatformsAnd4 ? "node-8440_25429" : "node-8440_25400"}>
                <p className="u0d97f34 u8eec228">{isPlatformsAnd4 ? "03   EXECUTE" : "03   DELIVER"}</p>
              </div>
              <div className="u897a779 uf66bad4 u6c96220 u4b730cd u99c483e u0ff40b7 ue1af307" id={isPlatformsAnd4 ? "node-8440_25430" : "node-8440_25401"}>
                <p className="u0d97f34 u8eec228">{isPlatformsAnd4 ? "04   IMPROVE" : "04   TRANSFER"}</p>
              </div>
            </div>
            {isConsultingAnd4 && (
              <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u3585463 uef6007d u942cc98 ua584871 u1963165 u7a08f13 uc0d0cbf" data-node-id="8440:25402" data-name="Business challenge">
                <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25403">
                  Business challenge
                </p>
              </div>
            )}
            {isPlatformsAnd4 && (
              <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u3585463 uef6007d u942cc98 ua584871 u1963165 u7a08f13 uc0d0cbf" data-node-id="8440:25431" data-name="Strategy & priorities">
                <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25432">{`Strategy & priorities`}</p>
              </div>
            )}
          </div>
          <div className="udc4d53a u6b11df6 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25423" : "node-8440_25394"} data-name="Reveal stage 2">
            <div className="udc4d53a u729d231 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25433" : "node-8440_25404"} data-name="Flow connections">
              <FlowConnections className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={isPlatformsAnd4 ? imgFlowConnections3 : imgFlowConnections}/>
            </div>
            {isConsultingAnd4 && (
              <>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u2e11252 uef6007d u942cc98 ua584871 u1963165 u659011e u0be5d04" data-node-id="8440:25406" data-name="Discover & diagnose">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 uc0d0cbf" data-node-id="8440:25407">{`Discover & diagnose`}</p>
                </div>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd ua955227 uef6007d u942cc98 ua584871 u1963165 u659011e u0be5d04" data-node-id="8440:25408" data-name="Define the roadmap">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 uc0d0cbf" data-node-id="8440:25409">
                    Define the roadmap
                  </p>
                </div>
              </>
            )}
            {isPlatformsAnd4 && (
              <>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u2e11252 uef6007d u942cc98 ua584871 u1963165 u659011e u0be5d04" data-node-id="8440:25435" data-name="Work & delivery">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u70dfd13 uc0d0cbf" data-node-id="8440:25436">{`Work & delivery`}</p>
                </div>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd ua955227 uef6007d u942cc98 ua584871 u1963165 u659011e u0be5d04" data-node-id="8440:25437" data-name="People & performance">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u70dfd13 uc0d0cbf" data-node-id="8440:25438">{`People & performance`}</p>
                </div>
              </>
            )}
          </div>
          <div className="udc4d53a u6b11df6 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25424" : "node-8440_25395"} data-name="Reveal stage 3">
            <div className="udc4d53a u729d231 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25439" : "node-8440_25410"} data-name="Flow connections">
              <FlowConnections className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={isPlatformsAnd4 ? imgFlowConnections4 : imgFlowConnections1}/>
            </div>
            {isConsultingAnd4 && (
              <>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u380b76b uef6007d u942cc98 ua584871 u1963165 ua012d38 uc0d0cbf" data-node-id="8440:25412" data-name="Products & projects">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25413">{`Products & projects`}</p>
                </div>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u8d6b69f uef6007d u942cc98 ua584871 u1963165 ua012d38 uc0d0cbf" data-node-id="8440:25414" data-name="AI & innovation">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25415">{`AI & innovation`}</p>
                </div>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd uf25f67e uef6007d u942cc98 ua584871 u1963165 ua012d38 uc0d0cbf" data-node-id="8440:25416" data-name="Digital academies">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25417">
                    Digital academies
                  </p>
                </div>
              </>
            )}
            {isPlatformsAnd4 && (
              <>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u380b76b uef6007d u942cc98 ua584871 u1963165 ua012d38 uc0d0cbf" data-node-id="8440:25441" data-name="PadiworksAI">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25442">
                    PadiworksAI
                  </p>
                </div>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u8d6b69f uef6007d u942cc98 ua584871 u1963165 ua012d38 uc0d0cbf" data-node-id="8440:25443" data-name="CertSprints">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25444">
                    CertSprints
                  </p>
                </div>
                <div className="udc4d53a u4efc18c ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd uf25f67e uef6007d u942cc98 ua584871 u1963165 ua012d38 uc0d0cbf" data-node-id="8440:25445" data-name="Performance systems">
                  <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 u70dfd13 uec298cf" data-node-id="8440:25446">
                    Performance systems
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="udc4d53a u6b11df6 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25425" : "node-8440_25396"} data-name="Reveal stage 4">
            <div className="udc4d53a u729d231 uc0d02ad u91359c3 uce750a2" id={isPlatformsAnd4 ? "node-8440_25447" : "node-8440_25418"} data-name="Flow connections">
              <FlowConnections className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={isPlatformsAnd4 ? imgFlowConnections5 : imgFlowConnections2}/>
            </div>
            {isConsultingAnd4 && (
              <div className="udc4d53a u1fceac7 ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u034cd48 uef6007d u942cc98 ua584871 u1963165 u8a16747 ufb3fb73" data-node-id="8440:25420" data-name="Capability your team owns">
                <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 u262a031" data-node-id="8440:25421">
                  Capability your team owns
                </p>
              </div>
            )}
            {isPlatformsAnd4 && (
              <div className="udc4d53a u1fceac7 ufc3627b u897a779 uf66bad4 u08e85b9 u54183fb u4b730cd u034cd48 uef6007d u942cc98 ua584871 u1963165 u8a16747 ufb3fb73" data-node-id="8440:25449" data-name="Clear insight. Stronger execution.">
                <p className="u9bf4565 ua342888 u0d97f34 uff9932c u99c483e u0ff40b7 u07b4d55 u3eb3769 u70dfd13 u262a031" data-node-id="8440:25450">
                  Clear insight. Stronger execution.
                </p>
              </div>
            )}
          </div>
        </div>
      </m.div>
      <div className={`ufc3627b u897a779 uf66bad4 u769dc70 uef6007d u99c483e u0ff40b7 uf8e8435 ${isPlatformsAnd4 ? "" : "u9bf4565 u895282e uff9932c"}`} id={isPlatformsAnd4 ? "node-8436_25418" : "node-8436_25356"} data-name="Services and platforms">
        <div className="ufc3627b u897a779 u79a9361 u769dc70 uef6007d u99c483e u0ff40b7 u17dfa3e" id={isPlatformsAnd4 ? "node-8436_25419" : "node-8436_25357"} data-name="Capability row 0">
          {isConsultingAnd4 && (
            <>
              <div className="u7505904 u419aa8f u22d4915 ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 uef6007d u0c440ce u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25358" data-name="Product Delivery">
                <p className="u46abc35 u42841ae u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25359">
                  01
                </p>
                <p className="u268b44a u6c6b43c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25360">
                  Product Delivery
                </p>
                <p className="ua342888 ubf77387 u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25361">
                  Discover, build, launch and scale AI-enabled products people actually use.
                </p>
              </div>
              <div className="u7505904 u419aa8f u22d4915 ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 uef6007d u0c440ce u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25362" data-name="Project Delivery">
                <p className="u46abc35 u42841ae u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25363">
                  02
                </p>
                <p className="u268b44a u6c6b43c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25364">
                  Project Delivery
                </p>
                <p className="ua342888 ubf77387 u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25365">
                  PMO and EPMO set-up, project management as a service and portfolio recovery.
                </p>
              </div>
              <div className="u7505904 u419aa8f u22d4915 ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 uef6007d u0c440ce u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25366" data-name="Innovation Consulting">
                <p className="u46abc35 u42841ae u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25367">
                  03
                </p>
                <p className="u268b44a u6c6b43c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25368">
                  Innovation Consulting
                </p>
                <p className="ua342888 ubf77387 u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25369">
                  The SHIFT™ framework for new business models and growth.
                </p>
              </div>
            </>
          )}
          {isPlatformsAnd4 && (
            <>
              <div className="ufc3627b u897a779 uf66bad4 ua74128c u769dc70 uef6007d u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25420" data-name="PadiworksAI">
                <div className="ud8e166b ufc3627b u897a779 uf66bad4 u0d94519 u54183fb u4b730cd uef6007d u99c483e u9447911 u0ff40b7 ud0aa5bd" data-node-id="8451:25418" data-name="PadiworksAI thumbnail">
                  <PadiPreview/>
                </div>
                <p className="u9bf4565 u46abc35 u42841ae uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25421">
                  01
                </p>
                <p className="u9bf4565 u268b44a u6c6b43c uff9932c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25422">
                  PadiworksAI
                </p>
                <p className="u9bf4565 ua342888 ubf77387 uff9932c u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25423">
                  The Execution Intelligence OS. Now you’ll know why.
                </p>
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua74128c u769dc70 uef6007d u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25424" data-name="CertSprints">
                <div className="ud8e166b ufc3627b u897a779 uf66bad4 u0d94519 u54183fb u4b730cd uef6007d u99c483e u9447911 u0ff40b7 ud0aa5bd" data-node-id="8451:25420" data-name="CertSprints thumbnail">
                  <div className="u4efc18c ua6374d9 u1689c4c u419aa8f u3a1f637 uef6007d u99c483e u52c1972 u0ff40b7 u6268fa3" data-node-id="8455:25515" data-name="CertSprints / Ready 97% / editable">
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d udffe595 ud419d20 uff9932c u45eaceb uc7724b6 u70dfd13 ud730f87 u9db79a2" data-node-id="8455:25516">
                      Exam Readiness
                    </p>
                    <div className="udc4d53a u50117c7 u66bf623 u8cc4d5e ub94ce1a" data-node-id="8455:25517" data-name="Gauge / editable progress">
                      <Gauge value={97}/>
                    </div>
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d u0b4c682 ud419d20 uff9932c u45eaceb ud66c298 u70dfd13 u001aa3c u5e301bf" data-node-id="8455:25520">
                      97%
                    </p>
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d udcc9a9a ud419d20 uff9932c u4c0299f u6b17377 u70dfd13 u3c9d826 u4c2bf70" data-node-id="8455:25521">
                      Ready 🎉
                    </p>
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d u16ef2c5 ud419d20 uff9932c ue4e00dd uee928d4 u70dfd13 u47290c8 u9db79a2" data-node-id="8455:25522">
                      Pro Tip
                    </p>
                    <p className="ub9d61ad u9bf4565 udc4d53a ue1bcec0 uafaced7 u16ef2c5 ud419d20 uff9932c ue4e00dd uee928d4 u70dfd13 u1c51c1f u829ccaf" data-node-id="8455:25523">
                      You are ready to sit your exam. Focus on recovery exercise to retain knowledge.
                    </p>
                  </div>
                </div>
                <p className="u9bf4565 u46abc35 u42841ae uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25425">
                  02
                </p>
                <p className="u9bf4565 u268b44a u6c6b43c uff9932c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25426">
                  CertSprints
                </p>
                <p className="u9bf4565 ua342888 ubf77387 uff9932c u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25427">
                  Know you’re ready before you book the exam.
                </p>
              </div>
              <div className="ufc3627b u897a779 uf66bad4 ua74128c u769dc70 uef6007d u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25428" data-name="Strategy-to-Execution & Performance Systems">
                <div className="ud8e166b ufc3627b u897a779 uf66bad4 u0d94519 u54183fb u4b730cd uef6007d u99c483e u9447911 u0ff40b7 ud0aa5bd" data-node-id="8451:25482" data-name="Strategy systems thumbnail">
                  <div className="u4efc18c ua6374d9 u1689c4c u419aa8f u3a1f637 uef6007d u99c483e u52c1972 u0ff40b7 u5296901" data-node-id="8455:25524" data-name="Strategy confidence / Strong 92% / editable">
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d u35bfaf3 u6ff6598 uff9932c u45eaceb ufa307bc u70dfd13 ud730f87 u91f4f85" data-node-id="8455:25525">
                      AI Strategy Confidence Score
                    </p>
                    <div className="udc4d53a u50117c7 u141dbdc u8cc4d5e ub94ce1a" data-node-id="8455:25526" data-name="Gauge / editable progress">
                      <Gauge value={92}/>
                    </div>
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d u0b4c682 u6ff6598 uff9932c u45eaceb ud66c298 u70dfd13 u001aa3c ua7c7f40" data-node-id="8455:25529">
                      92%
                    </p>
                    <p className="ub9d61ad u9bf4565 udc4d53a udd7023e u1db892d udcc9a9a u6ff6598 uff9932c u4c0299f u6b17377 u70dfd13 u3c9d826 u09f691d" data-node-id="8455:25530">
                      Strong strategy
                    </p>
                    <p className="ub9d61ad u9bf4565 udc4d53a ue1bcec0 uafaced7 u73bdf5e u6ff6598 uff9932c ue4e00dd uf0e761d u70dfd13 u1163d3a u0283d68" data-node-id="8455:25531">
                      Clear priorities. Confident execution.
                    </p>
                  </div>
                </div>
                <p className="u9bf4565 u46abc35 u42841ae uff9932c u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25429">
                  03
                </p>
                <p className="u9bf4565 u268b44a u6c6b43c uff9932c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25430">{`Strategy-to-Execution & Performance Systems`}</p>
                <p className="u9bf4565 ua342888 ubf77387 uff9932c u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25431">
                  Strategy, work and people performance in one line of sight.
                </p>
              </div>
            </>
          )}
        </div>
        {isConsultingAnd4 && (
          <div className="ufc3627b u897a779 u79a9361 u769dc70 uef6007d u99c483e u0ff40b7 u17dfa3e" data-node-id="8436:25370" data-name="Capability row 1">
            <div className="u7505904 u419aa8f u22d4915 ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 uef6007d u0c440ce u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25371" data-name="Agile-Digital Transformation">
              <p className="u46abc35 u42841ae u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25372">
                04
              </p>
              <p className="u268b44a u6c6b43c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25373">
                Agile-Digital Transformation
              </p>
              <p className="ua342888 ubf77387 u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25374">
                From projects to products. From plans to working results.
              </p>
            </div>
            <div className="u7505904 u419aa8f u22d4915 ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 uef6007d u0c440ce u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25375" data-name="AI & Generative AI">
              <p className="u46abc35 u42841ae u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25376">
                05
              </p>
              <p className="u268b44a u6c6b43c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25377">{`AI & Generative AI`}</p>
              <p className="ua342888 ubf77387 u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25378">
                From pilots to production: governed, measured and valuable.
              </p>
            </div>
            <div className="u7505904 u419aa8f u22d4915 ufc3627b u897a779 uf66bad4 u43f6a22 u769dc70 uef6007d u0c440ce u99c483e u0ff40b7 ud0aa5bd" data-node-id="8436:25379" data-name="E-learning as a Service">
              <p className="u46abc35 u42841ae u99c483e u0ff40b7 u81841dd u3eb3769 uf01cca6" data-node-id="8436:25380">
                06
              </p>
              <p className="u268b44a u6c6b43c u99c483e u0ff40b7 u07b4d55 uc285508 uf01cca6" data-node-id="8436:25381">
                E-learning as a Service
              </p>
              <p className="ua342888 ubf77387 u99c483e u0ff40b7 u07b4d55 u0ddd995 uf01cca6" data-node-id="8436:25382">
                Your own branded academy, from content to platform.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="ufc3627b u897a779 u54183fb u79b704d uef6007d u99c483e u0ff40b7 uf8e8435" id={isPlatformsAnd4 ? "node-8436_25432" : "node-8436_25383"} data-name="Capability diagnostic CTA">
        <div className="u9bf4565 u268b44a ub0e090e uff9932c u99c483e u0ff40b7 u07b4d55 uc285508 u5e4d583" id={isPlatformsAnd4 ? "node-8436_25433" : "node-8436_25384"}>
          <p className="u6c6b43c u64ac74f">End every engagement owning</p>
          <p className="u6c6b43c">capability you used to rent.</p>
        </div>
        <div className="u4df7ccf ufc3627b u897a779 u8fc3b2e u1888d6f u54183fb u4b730cd uef6007d u562ffa2 uf92336e u99c483e ubbfca9d u0ff40b7 ucfe420c" id={isPlatformsAnd4 ? "node-8436_25434" : "node-8436_25385"} data-name="Button">
          <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u0ddd995 u74e2b43 u70dfd13 u65ba8f0" id={isPlatformsAnd4 ? "node-I8436_25434-11_1470" : "node-I8436_25385-11_1470"}>
            <p className="ub665f71">Book a free capability diagnostic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Consulting(){return <AdcConsultingSoftware className="consulting-section"/>}
