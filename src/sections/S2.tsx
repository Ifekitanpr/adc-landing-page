import {capabilities,capabilityIconAssets} from "../capabilities";
import {useScrollChoreography} from "../motion/useScrollChoreography";
const imgElements1 = "/assets/figma/8404-26601-imgElements1.svg";
const imgElements2 = "/assets/figma/8404-26601-imgElements2.svg";
const imgElements3 = "/assets/figma/8404-26601-imgElements3.svg";
const imgGroup1000002286 = "/assets/figma/8404-26601-imgGroup1000002286.svg";
const imgUnion = "/assets/figma/8404-26601-imgUnion.svg";

export default function CapabilityArchitecture() {
 const sceneRef=useScrollChoreography("dial");
 const icons=capabilityIconAssets;
 const select=(index:number)=>{const scene=sceneRef.current?.closest<HTMLElement>('.scroll-scene');if(!scene||scene.dataset.scrollEnabled!=='true')return;const nav=document.querySelector('.desktop-nav-surface')?.getBoundingClientRect().height||72;const r=scene.getBoundingClientRect(),stage=scene.querySelector('.scroll-scene-stage')!.getBoundingClientRect();window.scrollTo({top:scrollY+r.top-nav+(r.height-stage.height)*[0,.36,.64,.96][index],behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})};
 return (<div ref={sceneRef} className="capability-story" data-node-id="8404:26601" data-motion-native>
  <div className="capability-story-layout" data-node-id="8404:26605">
   <div className="capability-story-copy">
    <div className="capability-story-heading" data-node-id="8404:26602">
     <p data-node-id="8404:26603">FOUR CAPABILITIES. ONE CONNECTED ENGINE.</p>
     <h2 data-node-id="8404:26604">Build the capability<br/>to move forward.</h2>
    </div>
    <div className="capability-focus-window" aria-label="Four connected capabilities">
     <div className="capability-focus-track" data-node-id="8404:26606">
      {capabilities.map((item,i)=>{return <button type="button" className="capability-focus-item" key={item.name} data-node-id={`8404:${[26607,26614,26621,26628][i]}`} onClick={()=>select(i)} onFocus={e=>{if(e.currentTarget.matches(':focus-visible'))select(i)}}>
       <span className="capability-focus-title"><span className="capability-matched-icon" aria-hidden="true" style={{maskImage:`url("${icons[i]}")`,WebkitMaskImage:`url("${icons[i]}")`}}/><span>{item.title}</span></span>
       <span className="capability-focus-body">{item.body}</span>
      </button>})}
     </div>
    </div>
   </div>
        <div className="u2e53f24 u99c483e u0ff40b7 u6c747e7" data-node-id="8404:26635">
          <div className="udc4d53a uede77a5 u552f94f u185ad9e" data-node-id="8404:26636">
            <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgGroup1000002286} />
          </div>
          <div className="udc4d53a u167641a u24144d1 u9dca06c ue24830f" data-node-id="8404:26641" data-name="Union">
            <div className="udc4d53a u4419bc0">
              <img alt="" className="u14511f2 u1a5895b u36113fd" src={imgUnion} />
            </div>
          </div>
          <div className="ub9d61ad ua3c9421 u9bf4565 udc4d53a u897a779 uf66bad4 u268b44a u4b730cd ub0e090e ud1551c4 uff9932c u3bd70e0 u59700f3 u70dfd13 u9a2929b u4a97909" data-node-id="8404:26644">
            <p className="u1333167">CAPABILITY LOOP</p>
          </div>
          <div className="ub9d61ad ua3c9421 udc4d53a u80e3751 uef6007d u670933b uaa437b7" data-node-id="8404:26645" data-name="bulb">
            <div className="udc4d53a ue4dadf7" data-node-id="I8404:26645;8:14019" data-name="elements">
              <div className="udc4d53a u94a2489">
                <img alt="" className="u14511f2 u1a5895b u36113fd" src="/assets/figma/8404-26601-imgElements-inactive.svg" style={{filter:"brightness(0) invert(1)"}} />
              </div>
            </div>
          </div>
          <div className="ub9d61ad ua3c9421 udc4d53a u0f2a688 uef6007d u670933b uff475cd" data-node-id="8404:26646" data-name="ai-brain-04">
            <div className="udc4d53a u55120ea" data-node-id="I8404:26646;8:27142" data-name="elements">
              <div className="udc4d53a ue121ab5">
                <img alt="" className="u14511f2 u1a5895b u36113fd" src={imgElements1} />
              </div>
            </div>
          </div>
          <div className="ub9d61ad ua3c9421 udc4d53a u282acac uef6007d u670933b u685d956" data-node-id="8404:26647" data-name="flow-connection">
            <div className="udc4d53a u743002f" data-node-id="I8404:26647;8:7902" data-name="elements">
              <div className="udc4d53a uf3875f1">
                <img alt="" className="u14511f2 u1a5895b u36113fd" src={imgElements2} />
              </div>
            </div>
          </div>
          <div className="ub9d61ad ua3c9421 udc4d53a u10a9146 uef6007d u670933b ued22753" data-node-id="8404:26648" data-name="target-02">
            <div className="udc4d53a u743002f" data-node-id="I8404:26648;8:23284" data-name="elements">
              <div className="udc4d53a uf3875f1">
                <img alt="" className="u14511f2 u1a5895b u36113fd" src={imgElements3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

