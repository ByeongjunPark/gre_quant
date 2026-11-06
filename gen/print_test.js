const {buildTest}=require(process.cwd()+'/gen/build.js');
const n=+process.argv[2];const {examData,exp}=buildTest(n);
const strip=s=>String(s||'').replace(/<sup>(.*?)<\/sup>/g,'^$1').replace(/<br>/g,' / ').replace(/<\/tr>/g,' | ').replace(/<[^>]+>/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
for(const s of examData.sections){console.log('=== Section',s.number);for(const q of s.questions){
 console.log(`\n[${q.id}] ${q.type} ${q.template}`);
 if(q.type==='QC'){console.log('  info:',strip(q.stimulus));console.log('  A:',strip(q.qa),' || B:',strip(q.qb));}
 else{ if(q.diGroup&&q.id.endsWith(q.id)) {} console.log('  ',strip(q.diGroup? '' : q.stimulus&&q.type!=='MC'&&q.type!=='NE'&&q.type!=='MA'?q.stimulus:''), strip(q.questionText)); if(q.choices&&q.type!=='QC')console.log('   choices:',q.choices.map(c=>c.label+') '+strip(c.text)).join('  '));}
 console.log('  ANSWER:',q.answer.join(','), q.ne?('value='+q.ne.value+(q.ne.fraction?' (frac)':'')):'');
 console.log('  steps:',exp[q.id].stepByStep.map(x=>strip(x.desc)).join(' → ').slice(0,400));
}}
