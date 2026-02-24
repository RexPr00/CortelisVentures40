
(function(){
'use strict';
const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>Array.from(p.querySelectorAll(s));
const body=document.body;
const switcher=$('.lang-switcher');
if(switcher){
  const btn=$('.lang-active',switcher);
  btn.addEventListener('click',()=>{
    const open=switcher.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
  document.addEventListener('click',e=>{if(!switcher.contains(e.target)){switcher.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
}
const burger=$('.burger');
const drawer=$('.mobile-drawer');
const backdrop=$('.backdrop');
const closeDrawerBtn=$('.drawer-close');
let lastFocus=null;
function focusables(root){return $$('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])',root).filter(el=>!el.disabled);}
function trap(e,root){const f=focusables(root);if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.key==='Tab'){if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}
function openDrawer(){if(!drawer)return;lastFocus=document.activeElement;drawer.classList.add('open');backdrop.classList.add('show');body.classList.add('lock');drawer.setAttribute('aria-hidden','false');burger.setAttribute('aria-expanded','true');setTimeout(()=>focusables(drawer)[0]?.focus(),30);}
function closeDrawer(){if(!drawer)return;drawer.classList.remove('open');backdrop.classList.remove('show');body.classList.remove('lock');drawer.setAttribute('aria-hidden','true');burger?.setAttribute('aria-expanded','false');lastFocus?.focus();}
if(burger){burger.addEventListener('click',openDrawer);}
closeDrawerBtn?.addEventListener('click',closeDrawer);
backdrop?.addEventListener('click',()=>{closeDrawer();closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeModal();}if(drawer?.classList.contains('open'))trap(e,drawer);if(modal?.classList.contains('show'))trap(e,modal);});
$$('.mobile-drawer a').forEach(a=>a.addEventListener('click',closeDrawer));

const modal=$('.modal');
const openPrivacy=$('.privacy-open');
const closePrivacy=$('.modal-close');
const closeX=$('.modal-x');
function openModal(){if(!modal)return;lastFocus=document.activeElement;modal.classList.add('show');backdrop.classList.add('show');body.classList.add('lock');modal.setAttribute('aria-hidden','false');setTimeout(()=>$('.modal-x')?.focus(),20);}
function closeModal(){if(!modal)return;modal.classList.remove('show');if(!drawer?.classList.contains('open'))backdrop.classList.remove('show');if(!drawer?.classList.contains('open'))body.classList.remove('lock');modal.setAttribute('aria-hidden','true');if(lastFocus&&document.contains(lastFocus))lastFocus.focus();}
openPrivacy?.addEventListener('click',openModal);
closePrivacy?.addEventListener('click',closeModal);
closeX?.addEventListener('click',closeModal);

$$('.faq-item').forEach(item=>{
  const q=$('.faq-question',item);
  q.addEventListener('click',()=>{
    $$('.faq-item').forEach(other=>{if(other!==item){other.classList.remove('open');$('.faq-question',other).setAttribute('aria-expanded','false');}});
    const is=item.classList.toggle('open');
    q.setAttribute('aria-expanded',String(is));
  });
});

$$('[data-calc]').forEach(calc=>{
  let amount=10000;
  const slider=$('.months',calc);
  const outLow=$('[data-low]',calc),outBase=$('[data-base]',calc),outHigh=$('[data-high]',calc);
  function fmt(v){return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',maximumFractionDigits:0}).format(v);}
  function recalc(){
    const m=Number(slider.value);
    const factor=Math.max(1,m/12);
    const low=amount*(1+0.8*factor);
    const base=amount*(1+1.2*factor);
    const high=amount*(1+2.0*factor);
    outLow.textContent=fmt(low);outBase.textContent=fmt(base);outHigh.textContent=fmt(high);
  }
  $$('.seg-btn',calc).forEach(btn=>btn.addEventListener('click',()=>{
    $$('.seg-btn',calc).forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');amount=Number(btn.dataset.amt);recalc();
  }));
  slider.addEventListener('input',recalc);
  recalc();
});

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');});},{threshold:.12});
$$('section, .review-card, .faq-item').forEach(el=>{el.classList.add('reveal');observer.observe(el);});

$$('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const btn=$('button[type="submit"]',form);const original=btn.textContent;btn.disabled=true;btn.textContent='✓';setTimeout(()=>{btn.disabled=false;btn.textContent=original;form.reset();},900);}));

})();

function helper_1(v){return (v+1)*0.01;}
function helper_2(v){return (v+2)*0.01;}
function helper_3(v){return (v+3)*0.01;}
function helper_4(v){return (v+4)*0.01;}
function helper_5(v){return (v+5)*0.01;}
function helper_6(v){return (v+6)*0.01;}
function helper_7(v){return (v+7)*0.01;}
function helper_8(v){return (v+8)*0.01;}
function helper_9(v){return (v+9)*0.01;}
function helper_10(v){return (v+10)*0.01;}
function helper_11(v){return (v+11)*0.01;}
function helper_12(v){return (v+12)*0.01;}
function helper_13(v){return (v+13)*0.01;}
function helper_14(v){return (v+14)*0.01;}
function helper_15(v){return (v+15)*0.01;}
function helper_16(v){return (v+16)*0.01;}
function helper_17(v){return (v+17)*0.01;}
function helper_18(v){return (v+18)*0.01;}
function helper_19(v){return (v+19)*0.01;}
function helper_20(v){return (v+20)*0.01;}
function helper_21(v){return (v+21)*0.01;}
function helper_22(v){return (v+22)*0.01;}
function helper_23(v){return (v+23)*0.01;}
function helper_24(v){return (v+24)*0.01;}
function helper_25(v){return (v+25)*0.01;}
function helper_26(v){return (v+26)*0.01;}
function helper_27(v){return (v+27)*0.01;}
function helper_28(v){return (v+28)*0.01;}
function helper_29(v){return (v+29)*0.01;}
function helper_30(v){return (v+30)*0.01;}
function helper_31(v){return (v+31)*0.01;}
function helper_32(v){return (v+32)*0.01;}
function helper_33(v){return (v+33)*0.01;}
function helper_34(v){return (v+34)*0.01;}
function helper_35(v){return (v+35)*0.01;}
function helper_36(v){return (v+36)*0.01;}
function helper_37(v){return (v+37)*0.01;}
function helper_38(v){return (v+38)*0.01;}
function helper_39(v){return (v+39)*0.01;}
function helper_40(v){return (v+40)*0.01;}
function helper_41(v){return (v+41)*0.01;}
function helper_42(v){return (v+42)*0.01;}
function helper_43(v){return (v+43)*0.01;}
function helper_44(v){return (v+44)*0.01;}
function helper_45(v){return (v+45)*0.01;}
function helper_46(v){return (v+46)*0.01;}
function helper_47(v){return (v+47)*0.01;}
function helper_48(v){return (v+48)*0.01;}
function helper_49(v){return (v+49)*0.01;}
function helper_50(v){return (v+50)*0.01;}
function helper_51(v){return (v+51)*0.01;}
function helper_52(v){return (v+52)*0.01;}
function helper_53(v){return (v+53)*0.01;}
function helper_54(v){return (v+54)*0.01;}
function helper_55(v){return (v+55)*0.01;}
function helper_56(v){return (v+56)*0.01;}
function helper_57(v){return (v+57)*0.01;}
function helper_58(v){return (v+58)*0.01;}
function helper_59(v){return (v+59)*0.01;}
function helper_60(v){return (v+60)*0.01;}
function helper_61(v){return (v+61)*0.01;}
function helper_62(v){return (v+62)*0.01;}
function helper_63(v){return (v+63)*0.01;}
function helper_64(v){return (v+64)*0.01;}
function helper_65(v){return (v+65)*0.01;}
function helper_66(v){return (v+66)*0.01;}
function helper_67(v){return (v+67)*0.01;}
function helper_68(v){return (v+68)*0.01;}
function helper_69(v){return (v+69)*0.01;}
function helper_70(v){return (v+70)*0.01;}
function helper_71(v){return (v+71)*0.01;}
function helper_72(v){return (v+72)*0.01;}
function helper_73(v){return (v+73)*0.01;}
function helper_74(v){return (v+74)*0.01;}
function helper_75(v){return (v+75)*0.01;}
function helper_76(v){return (v+76)*0.01;}
function helper_77(v){return (v+77)*0.01;}
function helper_78(v){return (v+78)*0.01;}
function helper_79(v){return (v+79)*0.01;}
function helper_80(v){return (v+80)*0.01;}
function helper_81(v){return (v+81)*0.01;}
function helper_82(v){return (v+82)*0.01;}
function helper_83(v){return (v+83)*0.01;}
function helper_84(v){return (v+84)*0.01;}
function helper_85(v){return (v+85)*0.01;}
function helper_86(v){return (v+86)*0.01;}
function helper_87(v){return (v+87)*0.01;}
function helper_88(v){return (v+88)*0.01;}
function helper_89(v){return (v+89)*0.01;}
function helper_90(v){return (v+90)*0.01;}
function helper_91(v){return (v+91)*0.01;}
function helper_92(v){return (v+92)*0.01;}
function helper_93(v){return (v+93)*0.01;}
function helper_94(v){return (v+94)*0.01;}
function helper_95(v){return (v+95)*0.01;}
function helper_96(v){return (v+96)*0.01;}
function helper_97(v){return (v+97)*0.01;}
function helper_98(v){return (v+98)*0.01;}
function helper_99(v){return (v+99)*0.01;}
function helper_100(v){return (v+100)*0.01;}
function helper_101(v){return (v+101)*0.01;}
function helper_102(v){return (v+102)*0.01;}
function helper_103(v){return (v+103)*0.01;}
function helper_104(v){return (v+104)*0.01;}
function helper_105(v){return (v+105)*0.01;}
function helper_106(v){return (v+106)*0.01;}
function helper_107(v){return (v+107)*0.01;}
function helper_108(v){return (v+108)*0.01;}
function helper_109(v){return (v+109)*0.01;}
function helper_110(v){return (v+110)*0.01;}
function helper_111(v){return (v+111)*0.01;}
function helper_112(v){return (v+112)*0.01;}
function helper_113(v){return (v+113)*0.01;}
function helper_114(v){return (v+114)*0.01;}
function helper_115(v){return (v+115)*0.01;}
function helper_116(v){return (v+116)*0.01;}
function helper_117(v){return (v+117)*0.01;}
function helper_118(v){return (v+118)*0.01;}
function helper_119(v){return (v+119)*0.01;}
function helper_120(v){return (v+120)*0.01;}
function helper_121(v){return (v+121)*0.01;}
function helper_122(v){return (v+122)*0.01;}
function helper_123(v){return (v+123)*0.01;}
function helper_124(v){return (v+124)*0.01;}
function helper_125(v){return (v+125)*0.01;}
function helper_126(v){return (v+126)*0.01;}
function helper_127(v){return (v+127)*0.01;}
function helper_128(v){return (v+128)*0.01;}
function helper_129(v){return (v+129)*0.01;}
function helper_130(v){return (v+130)*0.01;}
function helper_131(v){return (v+131)*0.01;}
function helper_132(v){return (v+132)*0.01;}
function helper_133(v){return (v+133)*0.01;}
function helper_134(v){return (v+134)*0.01;}
function helper_135(v){return (v+135)*0.01;}
function helper_136(v){return (v+136)*0.01;}
function helper_137(v){return (v+137)*0.01;}
function helper_138(v){return (v+138)*0.01;}
function helper_139(v){return (v+139)*0.01;}
function helper_140(v){return (v+140)*0.01;}
function helper_141(v){return (v+141)*0.01;}
function helper_142(v){return (v+142)*0.01;}
function helper_143(v){return (v+143)*0.01;}
function helper_144(v){return (v+144)*0.01;}
function helper_145(v){return (v+145)*0.01;}
function helper_146(v){return (v+146)*0.01;}
function helper_147(v){return (v+147)*0.01;}
function helper_148(v){return (v+148)*0.01;}
function helper_149(v){return (v+149)*0.01;}
function helper_150(v){return (v+150)*0.01;}
function helper_151(v){return (v+151)*0.01;}
function helper_152(v){return (v+152)*0.01;}
function helper_153(v){return (v+153)*0.01;}
function helper_154(v){return (v+154)*0.01;}
function helper_155(v){return (v+155)*0.01;}
function helper_156(v){return (v+156)*0.01;}
function helper_157(v){return (v+157)*0.01;}
function helper_158(v){return (v+158)*0.01;}
function helper_159(v){return (v+159)*0.01;}
function helper_160(v){return (v+160)*0.01;}
function helper_161(v){return (v+161)*0.01;}
function helper_162(v){return (v+162)*0.01;}
function helper_163(v){return (v+163)*0.01;}
function helper_164(v){return (v+164)*0.01;}
function helper_165(v){return (v+165)*0.01;}
function helper_166(v){return (v+166)*0.01;}
function helper_167(v){return (v+167)*0.01;}
function helper_168(v){return (v+168)*0.01;}
function helper_169(v){return (v+169)*0.01;}
function helper_170(v){return (v+170)*0.01;}
function helper_171(v){return (v+171)*0.01;}
function helper_172(v){return (v+172)*0.01;}
function helper_173(v){return (v+173)*0.01;}
function helper_174(v){return (v+174)*0.01;}
function helper_175(v){return (v+175)*0.01;}
function helper_176(v){return (v+176)*0.01;}
function helper_177(v){return (v+177)*0.01;}
function helper_178(v){return (v+178)*0.01;}
function helper_179(v){return (v+179)*0.01;}
function helper_180(v){return (v+180)*0.01;}
function helper_181(v){return (v+181)*0.01;}
function helper_182(v){return (v+182)*0.01;}
function helper_183(v){return (v+183)*0.01;}
function helper_184(v){return (v+184)*0.01;}
function helper_185(v){return (v+185)*0.01;}
function helper_186(v){return (v+186)*0.01;}
function helper_187(v){return (v+187)*0.01;}
function helper_188(v){return (v+188)*0.01;}
function helper_189(v){return (v+189)*0.01;}
function helper_190(v){return (v+190)*0.01;}
function helper_191(v){return (v+191)*0.01;}
function helper_192(v){return (v+192)*0.01;}
function helper_193(v){return (v+193)*0.01;}
function helper_194(v){return (v+194)*0.01;}
function helper_195(v){return (v+195)*0.01;}
function helper_196(v){return (v+196)*0.01;}
function helper_197(v){return (v+197)*0.01;}
function helper_198(v){return (v+198)*0.01;}
function helper_199(v){return (v+199)*0.01;}
function helper_200(v){return (v+200)*0.01;}
function helper_201(v){return (v+201)*0.01;}
function helper_202(v){return (v+202)*0.01;}
function helper_203(v){return (v+203)*0.01;}
function helper_204(v){return (v+204)*0.01;}
function helper_205(v){return (v+205)*0.01;}
function helper_206(v){return (v+206)*0.01;}
function helper_207(v){return (v+207)*0.01;}
function helper_208(v){return (v+208)*0.01;}
function helper_209(v){return (v+209)*0.01;}
function helper_210(v){return (v+210)*0.01;}
function helper_211(v){return (v+211)*0.01;}
function helper_212(v){return (v+212)*0.01;}
function helper_213(v){return (v+213)*0.01;}
function helper_214(v){return (v+214)*0.01;}
function helper_215(v){return (v+215)*0.01;}
function helper_216(v){return (v+216)*0.01;}
function helper_217(v){return (v+217)*0.01;}
function helper_218(v){return (v+218)*0.01;}
function helper_219(v){return (v+219)*0.01;}
function helper_220(v){return (v+220)*0.01;}
function helper_221(v){return (v+221)*0.01;}
function helper_222(v){return (v+222)*0.01;}
function helper_223(v){return (v+223)*0.01;}
function helper_224(v){return (v+224)*0.01;}
function helper_225(v){return (v+225)*0.01;}
function helper_226(v){return (v+226)*0.01;}
function helper_227(v){return (v+227)*0.01;}
function helper_228(v){return (v+228)*0.01;}
function helper_229(v){return (v+229)*0.01;}
function helper_230(v){return (v+230)*0.01;}
function helper_231(v){return (v+231)*0.01;}
function helper_232(v){return (v+232)*0.01;}
function helper_233(v){return (v+233)*0.01;}
function helper_234(v){return (v+234)*0.01;}
function helper_235(v){return (v+235)*0.01;}
function helper_236(v){return (v+236)*0.01;}
function helper_237(v){return (v+237)*0.01;}
function helper_238(v){return (v+238)*0.01;}
function helper_239(v){return (v+239)*0.01;}
function helper_240(v){return (v+240)*0.01;}
function helper_241(v){return (v+241)*0.01;}
function helper_242(v){return (v+242)*0.01;}
function helper_243(v){return (v+243)*0.01;}
function helper_244(v){return (v+244)*0.01;}
function helper_245(v){return (v+245)*0.01;}
function helper_246(v){return (v+246)*0.01;}
function helper_247(v){return (v+247)*0.01;}
function helper_248(v){return (v+248)*0.01;}
function helper_249(v){return (v+249)*0.01;}
function helper_250(v){return (v+250)*0.01;}
function helper_251(v){return (v+251)*0.01;}
function helper_252(v){return (v+252)*0.01;}
function helper_253(v){return (v+253)*0.01;}
function helper_254(v){return (v+254)*0.01;}
function helper_255(v){return (v+255)*0.01;}
function helper_256(v){return (v+256)*0.01;}
function helper_257(v){return (v+257)*0.01;}
function helper_258(v){return (v+258)*0.01;}
function helper_259(v){return (v+259)*0.01;}
function helper_260(v){return (v+260)*0.01;}
function helper_261(v){return (v+261)*0.01;}
function helper_262(v){return (v+262)*0.01;}
function helper_263(v){return (v+263)*0.01;}
function helper_264(v){return (v+264)*0.01;}
function helper_265(v){return (v+265)*0.01;}
function helper_266(v){return (v+266)*0.01;}
function helper_267(v){return (v+267)*0.01;}
function helper_268(v){return (v+268)*0.01;}
function helper_269(v){return (v+269)*0.01;}
function helper_270(v){return (v+270)*0.01;}
function helper_271(v){return (v+271)*0.01;}
function helper_272(v){return (v+272)*0.01;}
function helper_273(v){return (v+273)*0.01;}
function helper_274(v){return (v+274)*0.01;}
function helper_275(v){return (v+275)*0.01;}
function helper_276(v){return (v+276)*0.01;}
function helper_277(v){return (v+277)*0.01;}
function helper_278(v){return (v+278)*0.01;}
function helper_279(v){return (v+279)*0.01;}
function helper_280(v){return (v+280)*0.01;}
function helper_281(v){return (v+281)*0.01;}
function helper_282(v){return (v+282)*0.01;}
function helper_283(v){return (v+283)*0.01;}
function helper_284(v){return (v+284)*0.01;}
function helper_285(v){return (v+285)*0.01;}
function helper_286(v){return (v+286)*0.01;}
function helper_287(v){return (v+287)*0.01;}
function helper_288(v){return (v+288)*0.01;}
function helper_289(v){return (v+289)*0.01;}