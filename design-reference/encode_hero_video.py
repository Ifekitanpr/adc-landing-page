from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent
source=root/'design-reference/original-media/Fabric_animating_in_breeze_5e97058f_1080p.mp4'
for width,height,quality in [(1920,1080,25),(960,540,26)]:
    # Start at 0.75s; blend the final 0.75s into the opening segment so the
    # last encoded frame leads directly back to the first frame.
    filters=f'[0:v]fps=24,scale={width}:{height}:flags=lanczos,setsar=1,format=yuv420p,split=2[main][head];[main]trim=start=0.75:end=7.916667,setpts=PTS-STARTPTS[body];[head]trim=start=0:end=0.75,setpts=PTS-STARTPTS[intro];[body][intro]xfade=transition=fade:duration=0.75:offset=6.416667,format=yuv420p[v]'
    output=root/f'public/assets/video/adc-fabric-loop-{height}p.mp4'
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(source),'-filter_complex',filters,'-map','[v]','-an','-c:v','libx264','-preset','slow','-crf',str(quality),'-profile:v','high','-level:v','4.1','-pix_fmt','yuv420p','-g','48','-movflags','+faststart','-map_metadata','-1',str(output)],check=True)
    print(output.name,output.stat().st_size,flush=True)
