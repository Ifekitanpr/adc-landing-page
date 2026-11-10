export type Programme={title:string;images:string[];format:string;cta:string;metadata?:string};
const course=(title:string,image:string):Programme=>({title,images:[image],format:'AGILE DIGITAL COLLEGE',cta:'View course'});
const ai=course('Fundamentals of AI & Data Analytics for Innovation','400f7.webp');
const design=course('Design Thinking and Disruptive Thinking for Innovation Course','e9977.webp');
const product=course('Product Growth & Innovation Essentials Course','4ccde.webp');
const communication=course('Impactful Business Communication & Presentation','8ea5c.webp');
const productivity=course('Peak Productivity and High Performance at the Workplace','196f6.webp');
const emotional=course('Emotional Intelligence and Political Intelligence at the Workplace','c418f.webp');
const agile={...course('Agile Business Analysis | Agile Project Management | Agile ...','2c62d.webp'),images:['43fde.webp','8ea5c.webp','2c62d.webp']};
const workshop=(title:string,images:string[],format='TRANSFORMATION LEADERSHIP'):Programme=>({title,images,format,cta:'View workshop'});
export const programmeCategories=[
 {name:'Popular',summary:'A few favourites to get you started.',cta:'Browse all programmes',courses:[ai,design,product,communication,productivity,emotional]},
 {name:'Innovation Practice',summary:'Build practical innovation skills you can apply in your work.',cta:'Explore all practice courses',courses:[design,ai,product,agile]},
 {name:'Innovation Leadership',summary:'Strengthen the people and leadership skills that make innovation happen.',cta:'Explore all leadership courses',courses:[communication,productivity,emotional]},
 {name:'Workshops',summary:'Explore a selection of transformation leadership and public-sector workshops.',cta:'Explore all workshops',courses:[
 workshop('Agile Performance Management and Objectives & Key Results (OKR) for Leaders',['dbd36.webp']),
 workshop('Agile-Digital Leadership and Innovation Mastery',['43fde.webp','8ea5c.webp','d4258.webp','46c83.webp']),
 workshop('Project Leadership and Business Driven PMO',['43fde.webp','8ea5c.webp','d4258.webp','46c83.webp']),
 workshop("Integrated Contract and Commercial Management in Public Sector Organizations + WorldCC's CCMP Workshop",['3b466.webp'],'PUBLIC SECTOR'),
 workshop("Strategic Project Risk Appraisal and Management of Public Sector Projects + PMI's RMP Workshop",['567a8.webp'],'PUBLIC SECTOR'),
 workshop('Modern Performance Management and Development for Managers and Supervisors in Public Sector Organizations...',['879ac.webp'],'PUBLIC SECTOR')]},
 {name:'Executive Academy',summary:'Sector programmes for leaders, with an action blueprint and consulting support.',cta:'Explore Executive Academy',courses:[{title:'Executive Academy',format:'EXECUTIVE PROGRAMME',images:['4ccde.webp'],metadata:'10h consulting support',cta:'View programme'}]},
 {name:'Bootcamps',summary:'Intensive career programmes in data analysis and product management.',cta:'Explore all bootcamps',courses:[{title:'Data Analysis Bootcamp',format:'BOOTCAMP',images:['dbd36.webp'],metadata:'16 weeks',cta:'View programme'},{title:'Product Management Bootcamp',format:'BOOTCAMP',images:['43fde.webp','8ea5c.webp','d4258.webp','46c83.webp'],metadata:'16 weeks',cta:'View programme'}]}
];
