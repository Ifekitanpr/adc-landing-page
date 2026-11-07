import json, pathlib, subprocess, concurrent.futures
root=pathlib.Path(__file__).resolve().parents[1]
assets=json.loads((root/'design-reference/assets.json').read_text())
def get(a):
    out=root/'public/assets/figma'/a['file']
    r=subprocess.run(['curl','-fsSL','--retry','2','--max-time','60',a['url'],'-o',str(out)],capture_output=True)
    return (a['file'],r.returncode, out.stat().st_size if out.exists() else 0)
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
    results=list(pool.map(get,assets))
print(json.dumps({'total':len(results),'failed':[r for r in results if r[1] or not r[2]]}))
