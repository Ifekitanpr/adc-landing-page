import {useFallingPills} from "../motion/useFallingPills";
import CinematicStatement from "../motion/CinematicStatement";
import {useScrollChoreography} from "../motion/useScrollChoreography";
const imgVector45 = "/assets/figma/8404-26805-imgVector45.svg";

export default function Frame1686553281() {
  const sceneRef=useScrollChoreography("chevron");
  useFallingPills(sceneRef);
  return (
    <div ref={sceneRef} className="u11418b4 ufc3627b u897a779 uf66bad4 u54183fb u4c221fe u955c596 u99c483e u36113fd" data-node-id="8404:26805">
      <div className="udc4d53a u5706e78 uc0d02ad u91359c3 u7d07271" data-node-id="8404:26806">
        <img alt="" className="udc4d53a u14511f2 u5f1cffc u1a5895b u36113fd" src={imgVector45} />
      </div>
      <div className="ufc3627b u897a779 uf66bad4 u54183fb u4b730cd u99c483e u0ff40b7 ud486f79" data-node-id="8404:26807">
        <div className="u9bf4565 u897a779 uf66bad4 u268b44a u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 u3bd70e0 u8ef75b1 u70dfd13 ud486f79 u8eec228" data-node-id="8404:26808">
          <CinematicStatement scrollDriven/>
        </div>
      </div>
      <div className="udc4d53a u33ffa55 u60fef1d u8ed7877 u3f8a6aa" data-node-id="8429:28114">
        <div className="udc4d53a u897a779 ud9aca91 u54183fb u4b730cd uc0d02ad uc17e659 u148a102" data-node-id="8429:28115">
          <div className="u7e040ad u0839a10">
            <div className="u4efc18c ufc3627b u897a779 u54183fb u4b730cd u5d3f0a3 u99c483e u73a213f u592efaf">
              <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 uf23e4c8 u58f475c u70dfd13 u65ba8f0" data-node-id="8429:28116">
                <p className="ufed33c2">Applied</p>
              </div>
            </div>
          </div>
        </div>
        <div className="udc4d53a u897a779 u783e1f2 u54183fb u4b730cd u54f37b4 ue412ccb u1b033f8" data-node-id="8429:28117">
          <div className="u7e040ad u0839a10">
            <div className="u4efc18c ufc3627b u897a779 u54183fb u4b730cd u5d3f0a3 u99c483e u73a213f u8369165">
              <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 uf23e4c8 u58f475c u70dfd13 u296e685" data-node-id="8429:28118">
                <p className="ufed33c2">Measured</p>
              </div>
            </div>
          </div>
        </div>
        <div className="udc4d53a u897a779 u3d1d7fc u54183fb u4b730cd ua95cdf1 u91359c3 u3014f38" data-node-id="8429:28119">
          <div className="u7e040ad u6913da4">
            <div className="u4efc18c ufc3627b u897a779 u54183fb u4b730cd u5d3f0a3 u99c483e u73a213f u8369165">
              <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 uf23e4c8 u58f475c u70dfd13 u65ba8f0" data-node-id="8429:28120">
                <p className="ufed33c2">Credentialed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="udc4d53a u897a779 u3d1d7fc u54183fb u4b730cd ue3a24e6 uea3022b u3014f38" data-node-id="8429:28121">
          <div className="u7e040ad u6913da4">
            <div className="u4efc18c ufc3627b u897a779 u54183fb u4b730cd u5d3f0a3 u99c483e u73a213f u8369165">
              <div className="u9bf4565 u897a779 uf66bad4 ua342888 u4b730cd ub0e090e uff9932c u99c483e u0ff40b7 uf23e4c8 u58f475c u70dfd13 u65ba8f0" data-node-id="8429:28122">
                <p className="ufed33c2">Connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

