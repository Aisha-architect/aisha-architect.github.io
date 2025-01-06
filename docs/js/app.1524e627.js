(function(){"use strict";var e={122:function(e,t,r){var o=r(5130),s=r(6768);function a(e,t){const r=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(r)}var n=r(1241);const l={},i=(0,n.A)(l,[["render",a]]);var c=i,p=r(1387),u=r(144),d=r(4232);const j={class:"w-full flex justify-center items-center flex-col overflow-hidden p-3 md:p-10 md:px-16 text-center"},g={class:"welcome flex flex-col justify-center items-center p-10 gap-4"},v={class:"font-serif text-2xl md:text-5xl"};var m=(0,s.pM)({__name:"PageHeader",props:{title:{}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",j,[t[0]||(t[0]=(0,s.Lk)("div",{class:"w-3/4 border-t-[1px] border-divider upper-line h-1"},null,-1)),(0,s.Lk)("div",g,[(0,s.Lk)("p",v,(0,d.v_)(e.title),1),(0,s.RG)(e.$slots,"default")]),t[1]||(t[1]=(0,s.Lk)("div",{class:"w-3/4 border-t-[1px] border-divider bottom-line h-1"},null,-1))]))}});const f=(0,n.A)(m,[["__scopeId","data-v-7f565334"]]);var h=f,x=(0,s.pM)({__name:"FadeUp",props:{open:{type:Boolean}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,d.C4)("w-full transition-all duration-500 "+(e.open?"open":"closed"))},[(0,s.RG)(e.$slots,"default")],2))}});const b=(0,n.A)(x,[["__scopeId","data-v-63877ede"]]);var w=b,y=(0,s.pM)({__name:"ElementObserver",setup(e){const t=(0,u.KR)(),r=(0,u.KR)(!1),o=(0,s.WQ)("scroll");return(0,s.nT)((()=>{r.value=(t.value?.offsetTop??250)-(o?.value??0)<250})),(e,o)=>((0,s.uX)(),(0,s.CE)("div",{class:"",ref_key:"element",ref:t},[(0,s.RG)(e.$slots,"default",{visible:r.value})],512))}});const k=y;var R=k;const T={class:"flex justify-center items-center h-[85vh] bg-surface-300/40 rounded-md border-gray-300 border-[1px]"};var _=(0,s.pM)({__name:"PageSection",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(R,{class:"w-full"},{default:(0,s.k6)((({visible:t})=>[(0,s.bF)(w,{open:t},{default:(0,s.k6)((()=>[(0,s.Lk)("div",T,[(0,s.RG)(e.$slots,"default")])])),_:2},1032,["open"])])),_:3}))}});const M=_;var V=M;r(8992),r(3949);const L=Object.freeze({"my name":{ar:"أهلا, انا :name",en:"Hi, I am :name"},welcome_message:{ar:"مرحبًا بكم. هنا، يمكنكم استكشاف مجموعة من مشاريعي المعمارية، والتعرف على سيرتي الذاتية عبر صفحة معلوماتي الشخصية، حيث ستجدون أيضًا تفاصيل الاتصال الخاصة بي. كل مشروع يمثل جزءًا من رؤيتي الإبداعية والتزامي بالجودة. أنا هنا لخدمتكم—لنبدأ بالتواصل واستكشاف فرص التعاون معًا!",en:"Welcome. Here, you can explore a collection of my architectural projects and learn more about my background through the 'About Me' page, where you will also find my contact details. Each project represents a part of my creative vision and commitment to quality. I am here to assist you—let's connect and explore opportunities for collaboration!"},en:{ar:"الانجليزية",en:"English"},ar:{ar:"العربية",en:"Arabic"},home:{ar:"الرئيسية",en:"Home"},projects:{ar:"مشاريعي",en:"Projects"},about:{ar:"ملفي الشخصي",en:"About me"},projects_title:{ar:"أعمالي و مشاريعي",en:"My work and projects"},projects_message:{ar:"هنا يمكنكم استكشاف مجموعة من الأعمال المعمارية التي قمت بتصميمها وتنفيذها، حيث يعكس كل مشروع شغفي بالتفاصيل واهتمامي بتلبية احتياجات العملاء. أتمنى أن تنال هذه الأعمال إعجابكم وتكون مصدر إلهام لكم في مشاريعكم المستقبلية",en:"Here, you can explore a collection of architectural works that I have designed and executed, each reflecting my passion for detail and my commitment to meeting client needs. I hope these projects inspire you and earn your admiration for your future endeavors"},call_me:{ar:"أتصل بي",en:"Call me"},"For my information and CV":{ar:"للاتصال بي و لمشاهدة معلوماتي الشخصية",en:"For my information and CV"},"Or take a look at my projects":{ar:"أو يمكنك النظر في بعض مشاريعي من هنا",en:"Or take a look at my projects"},"TO MY INFORMATION":{ar:"الى صفحة المعلومات",en:"TO MY INFORMATION"},"MY PROJECT":{ar:"مشاريعي و اعمالي",en:"MY PROJECTS"},Name:{ar:"الأسم",en:"Name"},"Mobile number":{ar:"رقم الهاتف",en:"Mobile number"},Email:{ar:"البريد الالكتروني",en:"Email"},Address:{ar:"العنوان",en:"Address"},cv:{ar:"السيرة الذاتية",en:"My CV"}});function q(e,t,r){try{if("object"==typeof e)return e[t];let o=L[e][t]??e;return r&&Object.keys(r)?.forEach((e=>{o=o.replace(":name",r[e])})),o}catch{return"string"==typeof e?e:e["en"]}}const F=()=>(0,s.WQ)("text",(e=>"string"==typeof e?e:e["en"])),C={class:"root w-full max-w-[1400px] px-4"};function E(e,t){return(0,s.uX)(),(0,s.CE)("div",C,[(0,s.RG)(e.$slots,"default",{},void 0,!0)])}const P={},A=(0,n.A)(P,[["render",E],["__scopeId","data-v-74369fbf"]]);var Z=A;const G={name:{en:"Aisha Sakka",ar:"عائشة سقى"},email:"aesha.alsakka@gmail.com",number:"0544680147",summary:{en:"Accomplished Architectural Designer with a strong background in creating detailed architectural plans, realistic 3D models, and high-quality renderings. Proficient in interior design, exterior facades, and landscape design. Skilled in advanced visualization and video production tools to deliver comprehensive design solutions. Adept at transforming 2D architectural concepts into visually stunning presentations that effectively communicate design intent.",ar:"مصممة معمارية متميزة تتمتع بخبرة قوية في إعداد الخطط المعمارية التفصيلية، والنماذج ثلاثية الأبعاد الواقعية، والتصاميم عالية الجودة. بارعة في تصميم الديكورات الداخلية، والواجهات الخارجية، وتصميم المناظر الطبيعية. ماهرة في استخدام أدوات التصور المتقدمة وإنتاج الفيديو لتقديم حلول تصميم شاملة. متمكن من تحويل المفاهيم المعمارية ثنائية الأبعاد إلى عروض تقديمية بصرية مذهلة تعبر بفعالية عن أهداف التصميم."},address:{en:"Riyadh, Saudi Arabia",ar:"المملكة العربية السعودية,الرياض"},education:{en:"Bachelor’s Degree in Architectural Engineering",ar:"درجة البكالوريوس في الهندسة المعمارية"},resume:{en:"./resume_en.pdf",ar:"./resume_ar.pdf"}},X={class:"w-fit bg-primary-200/20 hover:opacity-75 hover:bg-primary-500/25 select-none rounded-md flex justify-center transition-all items-center cursor-pointer p-2 border-[1px] border-surface-900 gap-5"},B={key:1};var O=(0,s.pM)({__name:"Button",props:{title:{},icon:{}},setup(e){const t=F();return(e,r)=>((0,s.uX)(),(0,s.CE)("div",X,[e.icon?((0,s.uX)(),(0,s.Wv)((0,s.$y)(e.icon),{key:0,class:"text-primary"})):(0,s.Q3)("",!0),e.title?((0,s.uX)(),(0,s.CE)("p",B,(0,d.v_)((0,u.R1)(t)(e.title)),1)):(0,s.Q3)("",!0)]))}});const I=O;var $=I;const W={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor"};function H(e,t){return(0,s.uX)(),(0,s.CE)("svg",W,t[0]||(t[0]=[(0,s.Lk)("path",{d:"M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"},null,-1)]))}const z={},K=(0,n.A)(z,[["render",H]]);var S=K;const Y={class:"w-full font-extrabold text-primary/75 text-sm md:text-xl"},N={class:"text-divider"},Q={class:"text-divider"},D={class:"text-divider"},J={class:"text-divider"},U={class:"min-h-[75vh] w-full"},ee={class:"flex flex-col gap-5 p-10"},te={class:"font-mono text-divider text-sm md:text-xl backdrop-blur-xl"},re={class:"font-extrabold text-primary/75 text-sm md:text-xl backdrop-blur-xl"},oe={class:"w-full flex justify-center items-center"},se=["href"];var ae=(0,s.pM)({__name:"AboutView",setup(e){const t=F();return(e,r)=>{const o=(0,s.g2)("P");return(0,s.uX)(),(0,s.Wv)(Z,null,{default:(0,s.k6)((()=>[(0,s.bF)(h,{title:(0,u.R1)(t)("call_me")},{default:(0,s.k6)((()=>[(0,s.Lk)("div",Y,[(0,s.Lk)("p",null,[(0,s.eW)((0,d.v_)((0,u.R1)(t)("Name"))+": ",1),(0,s.Lk)("span",N,(0,d.v_)((0,u.R1)(t)((0,u.R1)(G).name)),1)]),(0,s.Lk)("p",null,[(0,s.eW)((0,d.v_)((0,u.R1)(t)("Mobile number"))+": ",1),(0,s.Lk)("span",Q,(0,d.v_)((0,u.R1)(G).number),1)]),(0,s.Lk)("p",null,[(0,s.eW)((0,d.v_)((0,u.R1)(t)("Email"))+": ",1),(0,s.Lk)("span",D,(0,d.v_)((0,u.R1)(G).email),1)]),(0,s.Lk)("p",null,[(0,s.eW)((0,d.v_)((0,u.R1)(t)("Address"))+": ",1),(0,s.Lk)("span",J,(0,d.v_)((0,u.R1)(t)((0,u.R1)(G).address)),1)])])])),_:1},8,["title"]),(0,s.bF)(V,{class:"mb-10"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",U,[(0,s.Lk)("div",ee,[(0,s.bF)(o,{class:"font-extrabold text-primary/90 text-2xl md:text-4xl w-fit backdrop-blur-xl"},{default:(0,s.k6)((()=>[(0,s.eW)((0,d.v_)((0,u.R1)(t)((0,u.R1)(G).name)),1)])),_:1}),(0,s.Lk)("p",te,(0,d.v_)((0,u.R1)(t)((0,u.R1)(G).education)),1),(0,s.Lk)("p",re,(0,d.v_)((0,u.R1)(t)((0,u.R1)(G).summary)),1)]),(0,s.Lk)("div",oe,[(0,s.Lk)("a",{class:"w-fit",href:(0,u.R1)(t)((0,u.R1)(G).resume)},[(0,s.bF)($,{icon:S,title:(0,u.R1)(t)("cv")},null,8,["title"])],8,se)])])])),_:1})])),_:1})}}});const ne=ae;var le=ne;const ie={class:"fixed inset-0 bg-surface-0"};var ce=(0,s.pM)({__name:"AppBackground",setup(e){const t=(0,u.KR)({x:0,y:0});return(0,s.sV)((()=>{const e=e=>{t.value={x:e.clientX,y:e.clientY}};window.addEventListener("mousemove",e),(0,s.hi)((()=>{window.removeEventListener("mousemove",e)}))})),(e,r)=>((0,s.uX)(),(0,s.CE)("div",ie,[(0,s.Lk)("div",{class:"background mask w-[600px] h-[600px] absolute opacity-10",style:(0,d.Tr)({top:t.value.y-300+"px",left:t.value.x-300+"px",backgroundPosition:`${-t.value.x}px ${-t.value.y}px`})},null,4),r[0]||(r[0]=(0,s.Lk)("div",{class:"background w-full h-full absolute opacity-[0.03]"},null,-1))]))}});const pe=(0,n.A)(ce,[["__scopeId","data-v-0e7acd99"]]);var ue=pe,de=(e=0,t=[],r=[])=>{if(e<t[0])return r[0];for(let o=1;o<t.length;++o)if(e<=t[o])return(r[o]-r[o-1])*((e-t[o-1])/(t[o]-t[o-1]))+r[o-1];return r[r.length-1]};const je={class:"h-full select-none hover:shadow-2xl hover:shadow-surface-900 flex justify-center transition-all items-center cursor-pointer p-2 hover:mx-2 hover:border-x-[1px] border-surface-900 gap-2"};var ge=(0,s.pM)({__name:"AppBarItem",props:{title:{},icon:{}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",je,[e.icon?((0,s.uX)(),(0,s.Wv)((0,s.$y)(e.icon),{key:0,class:"text-primary"})):(0,s.Q3)("",!0),e.title?((0,s.uX)(),(0,s.CE)("p",{key:1,class:(0,d.C4)(e.icon?"hidden md:block":"")},(0,d.v_)(e.title),3)):(0,s.Q3)("",!0)]))}});const ve=ge;var me=ve;const fe={xmlns:"http://www.w3.org/2000/svg",height:"30px",viewBox:"0 -960 960 960",width:"30px",fill:"currentColor"};function he(e,t){return(0,s.uX)(),(0,s.CE)("svg",fe,t[0]||(t[0]=[(0,s.Lk)("path",{d:" M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90\r\n        63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20\r\n        5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"},null,-1)]))}const xe={},be=(0,n.A)(xe,[["render",he]]);var we=be;const ye={xmlns:"http://www.w3.org/2000/svg",height:"30px",viewBox:"0 -960 960 960",width:"30px",fill:"currentColor"};function ke(e,t){return(0,s.uX)(),(0,s.CE)("svg",ye,t[0]||(t[0]=[(0,s.Lk)("path",{d:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"},null,-1)]))}const Re={},Te=(0,n.A)(Re,[["render",ke]]);var _e=Te;const Me={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor"};function Ve(e,t){return(0,s.uX)(),(0,s.CE)("svg",Me,t[0]||(t[0]=[(0,s.Lk)("path",{d:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"},null,-1)]))}const Le={},qe=(0,n.A)(Le,[["render",Ve]]);var Fe=qe;const Ce={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor"};function Ee(e,t){return(0,s.uX)(),(0,s.CE)("svg",Ce,t[0]||(t[0]=[(0,s.Lk)("path",{d:"M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"},null,-1)]))}const Pe={},Ae=(0,n.A)(Pe,[["render",Ee]]);var Ze=Ae;const Ge={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor"};function Xe(e,t){return(0,s.uX)(),(0,s.CE)("svg",Ge,t[0]||(t[0]=[(0,s.Lk)("path",{d:"M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z"},null,-1)]))}const Be={},Oe=(0,n.A)(Be,[["render",Xe]]);var Ie=Oe,$e=(0,s.pM)({__name:"AppBar",props:{theme:{},lang:{}},emits:["themeChange","langChange"],setup(e){const t=(0,u.KR)(0),r=F();return(0,s.sV)((()=>{const e=()=>{t.value=window.scrollY};window.addEventListener("scroll",e),(0,s.hi)((()=>{window.removeEventListener("scroll",e)}))})),(e,o)=>{const a=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)("nav",{class:"w-full sticky top-0 z-20",style:(0,d.Tr)({padding:`${(0,u.R1)(de)(t.value,[0,200],[30,0])}px`})},[(0,s.Lk)("div",{class:"w-full rounded-xl border-black h-14 bg-surface-200 border-divider border-[1px] flex justify-center items-center",style:(0,d.Tr)({borderRadius:`${(0,u.R1)(de)(t.value,[0,200],[.75,0])}rem`,borderWidth:`${(0,u.R1)(de)(t.value,[50,200],[.5,0])}px`,transform:`translateY(${(0,u.R1)(de)(t.value,[330,550],[0,-100])}%)`})},[(0,s.bF)(a,{to:"/",class:"h-full"},{default:(0,s.k6)((()=>[(0,s.bF)(me,{icon:Fe,title:(0,u.R1)(r)("home")},null,8,["title"])])),_:1}),(0,s.bF)(a,{to:"/projects",class:"h-full"},{default:(0,s.k6)((()=>[(0,s.bF)(me,{icon:Ie,title:(0,u.R1)(r)("projects")},null,8,["title"])])),_:1}),(0,s.bF)(a,{to:"/about",class:"h-full"},{default:(0,s.k6)((()=>[(0,s.bF)(me,{icon:Ze,title:(0,u.R1)(r)("about")},null,8,["title"])])),_:1}),o[2]||(o[2]=(0,s.Lk)("div",{class:"h-full border-divider/20 border-[1px]"},null,-1)),(0,s.bF)(me,{onClick:o[0]||(o[0]=t=>e.$emit("langChange")),title:(0,u.R1)(r)("ar"==e.lang?"en":"ar")},null,8,["title"]),(0,s.bF)(me,{onClick:o[1]||(o[1]=t=>e.$emit("themeChange")),icon:"light"==e.theme?we:_e},null,8,["icon"])],4)],4)}}});const We=(0,n.A)($e,[["__scopeId","data-v-33fcf4c4"]]);var He=We;const ze=["dir"],Ke={class:"w-full flex flex-col items-center"};var Se=(0,s.pM)({__name:"AppLayout",setup(e){const t=(0,u.KR)("dark"),r=(0,u.KR)("en"),o=(0,u.KR)(0),a=()=>{t.value="dark"==t.value?"light":"dark"};(0,s.sV)((()=>{const e=()=>{o.value=window.scrollY};window.addEventListener("scroll",e),(0,s.hi)((()=>{window.removeEventListener("scroll",e)}))}));const n=()=>{r.value="ar"==r.value?"en":"ar"};return(0,s.Gt)("text",((e,t)=>q(e,r.value,t))),(0,s.Gt)("lang",r.value),(0,s.Gt)("scroll",o),(e,o)=>{const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",{class:(0,d.C4)(`${t.value} text-primary`),dir:"ar"==r.value?"rtl":"ltr"},[(0,s.bF)(ue,{class:"-z-10"}),(0,s.bF)(He,{onThemeChange:a,theme:t.value,onLangChange:n,lang:r.value,class:"app-bar"},null,8,["theme","lang"]),(0,s.Lk)("div",Ke,[(0,s.bF)(l)])],10,ze)}}});const Ye=(0,n.A)(Se,[["__scopeId","data-v-04fdd570"]]);var Ne=Ye,Qe=[{name:{ar:"منتجع سياحي",en:"Tourist Resort"},description:{ar:"تصميم وتحليل هيكلي شامل لمنتجع سياحي حديث، يدمج بين تقنيات البناء المبتكرة والمواد المستدامة. يتميز المشروع بمزيج من أماكن الإقامة الفاخرة والمرافق الترفيهية والمساحات الخضراء، مما يحقق التوازن بين الجمال والوظائف مع الالتزام بمعايير السلامة والبيئة.",en:"A comprehensive structural design and analysis for a modern tourist resort, incorporating innovative construction techniques and sustainable materials. The project features a blend of luxurious accommodations, recreational facilities, and green spaces, ensuring both functionality and aesthetic appeal while adhering to safety and environmental standards."},images:["/projects/TouristResort/1.jpg","/projects/TouristResort/2.jpg","/projects/TouristResort/3.jpg","/projects/TouristResort/4.jpg","/projects/TouristResort/5.jpg","/projects/TouristResort/6.jpg","/projects/TouristResort/7.jpg","/projects/TouristResort/8.jpg","/projects/TouristResort/9.jpg","/projects/TouristResort/10.jpg","/projects/TouristResort/11.jpg","/projects/TouristResort/12.jpg","/projects/TouristResort/13.jpg","/projects/TouristResort/14.jpg","/projects/TouristResort/15.jpg","/projects/TouristResort/16.jpg","/projects/TouristResort/17.jpg","/projects/TouristResort/18.jpg","/projects/TouristResort/19.jpg","/projects/TouristResort/20.jpg","/projects/TouristResort/21.jpg","/projects/TouristResort/22.jpg","/projects/TouristResort/23.jpg","/projects/TouristResort/24.jpg","/projects/TouristResort/25.jpg","/projects/TouristResort/26.jpg","/projects/TouristResort/27.jpg","/projects/TouristResort/28.jpg","/projects/TouristResort/29.jpg","/projects/TouristResort/30.jpg","/projects/TouristResort/31.jpg","/projects/TouristResort/32.jpg"]},{name:{ar:"مرافق",en:"Facilities"},description:{ar:"الهندسة والتصميم الإنشائي لمجموعة متنوعة من المرافق بما في ذلك المساحات التجارية والترفيهية والخدمية. ركز المشروع على إنشاء هياكل متعددة الاستخدامات ومتينة وفعالة، مع تحسين الوظائف وراحة المستخدم، وضمان الامتثال لجميع معايير البناء والسلامة.",en:"Structural engineering and design for a range of facilities, including commercial, recreational, and utility spaces. The project focused on creating versatile, durable, and efficient structures, optimized for high functionality and user comfort, while ensuring compliance with all relevant safety and building regulations."},images:["/projects/Facilities/1.png","/projects/Facilities/2.png","/projects/Facilities/3.jpg","/projects/Facilities/4.png","/projects/Facilities/5.png","/projects/Facilities/6.jpg","/projects/Facilities/7.jpg","/projects/Facilities/8.jpg","/projects/Facilities/9.jpg","/projects/Facilities/10.png","/projects/Facilities/11.jpg","/projects/Facilities/12.jpg","/projects/Facilities/13.jpg","/projects/Facilities/14.jpg","/projects/Facilities/15.jpg","/projects/Facilities/16.jpg","/projects/Facilities/17.jpg","/projects/Facilities/18.jpg","/projects/Facilities/19.jpg"]},{name:{ar:"منتجعات بها ملاعب و حمامات سباحة",en:"Resorts with playgrounds and swimming pools"},description:{ar:"تصميم إنشائي وتطوير لمنتجعات تضم ملاعب وأحواض سباحة متكاملة. ركز المشروع على السلامة والمتانة باستخدام تقنيات هندسية متقدمة لإنشاء بيئات عائلية آمنة وممتعة. يوفر التصميم توازناً بين الجماليات والوظائف، مع مساحات ترفيهية مريحة وآمنة للضيوف.",en:"Structural design and development of resorts featuring integrated playgrounds and swimming pools. This project emphasized safety and durability, utilizing advanced engineering techniques to create family-friendly environments. The design balances aesthetics with functionality, providing guests with enjoyable and secure recreational spaces."},images:["/projects/GraduationProject/1.jpg","/projects/GraduationProject/2.png","/projects/GraduationProject/3.jpg","/projects/GraduationProject/4.jpg","/projects/GraduationProject/5.jpg","/projects/GraduationProject/6.jpg","/projects/GraduationProject/7.jpg","/projects/GraduationProject/8.jpg","/projects/GraduationProject/9.jpg","/projects/GraduationProject/10.jpg","/projects/GraduationProject/11.jpg","/projects/GraduationProject/12.jpg","/projects/GraduationProject/13.jpg","/projects/GraduationProject/14.jpg","/projects/GraduationProject/15.jpg","/projects/GraduationProject/16.jpg","/projects/GraduationProject/17.jpg","/projects/GraduationProject/18.jpg","/projects/GraduationProject/19.jpg","/projects/GraduationProject/20.jpg","/projects/GraduationProject/21.jpg","/projects/GraduationProject/22.jpg","/projects/GraduationProject/23.jpg","/projects/GraduationProject/24.jpg","/projects/GraduationProject/25.jpg","/projects/GraduationProject/26.jpg"]},{name:{ar:"متحف",en:"Museum"},description:{ar:"الهندسة والتصميم الإنشائي لمتحف حديث يركز على الوظائف والتعبير الفني. شمل المشروع إنشاء صالات عرض واسعة، ومساحات عرض متخصصة، وأنظمة دعم قوية لاستيعاب المعروضات الكبيرة. تم مراعاة السلامة والمتانة والدمج السلس للعناصر المعمارية مع الرسالة الثقافية والتعليمية للمتحف.",en:"Structural engineering and design for a modern museum, prioritizing both functionality and artistic expression. The project involved creating spacious galleries, specialized display areas, and robust support systems to accommodate large exhibits. Careful consideration was given to safety, durability, and the seamless integration of architectural elements with the museum's cultural and educational mission."},images:["/projects/Museum/1.jpg","/projects/Museum/2.png","/projects/Museum/3.jpg","/projects/Museum/4.png","/projects/Museum/5.png","/projects/Museum/6.png","/projects/Museum/7.png","/projects/Museum/8.png","/projects/Museum/9.png","/projects/Museum/10.png","/projects/Museum/11.png","/projects/Museum/12.png","/projects/Museum/13.png","/projects/Museum/14.png","/projects/Museum/15.png","/projects/Museum/16.png","/projects/Museum/17.png","/projects/Museum/18.png","/projects/Museum/19.png","/projects/Museum/20.png","/projects/Museum/21.png"]},{name:{ar:"المباني السكنية",en:"Residential Buildings"},description:{ar:"تصميم وتطوير هيكلي للمباني السكنية مع التركيز على المتانة والوظائف ومعايير الحياة العصرية. يشمل المشروع استخدام مواد مبتكرة وتقنيات بناء فعالة لإنشاء مساحات معيشية آمنة ومريحة وجذابة بصرياً، مع ضمان الامتثال لجميع القوانين واللوائح.",en:"Structural design and development of residential buildings, focusing on durability, functionality, and modern living standards. The project includes the use of innovative materials and efficient construction techniques to create safe, comfortable, and aesthetically pleasing living spaces, while ensuring compliance with all building codes and regulations."},images:["/projects/ResidentialBuildings/1.jpg","/projects/ResidentialBuildings/2.jpg","/projects/ResidentialBuildings/3.jpg","/projects/ResidentialBuildings/4.jpg","/projects/ResidentialBuildings/5.jpg","/projects/ResidentialBuildings/6.jpg","/projects/ResidentialBuildings/7.jpg","/projects/ResidentialBuildings/8.jpg","/projects/ResidentialBuildings/9.png","/projects/ResidentialBuildings/10.png","/projects/ResidentialBuildings/11.jpg","/projects/ResidentialBuildings/12.jpg","/projects/ResidentialBuildings/13.jpg","/projects/ResidentialBuildings/14.jpg"]},{name:{ar:"فيلا",en:"Villa"},description:{ar:"الهندسة والتصميم الإنشائي لفيلا فاخرة تجمع بين الأناقة والعملية. يتميز المشروع بحلول هيكلية مبتكرة لدعم العناصر المعمارية الفريدة، مما يضمن السلامة والمتانة والاندماج السلس مع البيئة المحيطة. تم التركيز على خلق تجربة معيشية مريحة، فسيحة وجذابة بصرياً.",en:"Structural engineering and design for a luxurious villa, combining elegance with practicality. The project features innovative structural solutions to support unique architectural elements, ensuring safety, durability, and seamless integration with the surrounding environment. Emphasis was placed on creating a comfortable, spacious, and aesthetically appealing living experience."},images:["/projects/Villa/1.jpg","/projects/Villa/2.jpg","/projects/Villa/3.jpg","/projects/Villa/4.jpg","/projects/Villa/5.jpg","/projects/Villa/6.jpg","/projects/Villa/7.jpg","/projects/Villa/8.jpg","/projects/Villa/9.jpg","/projects/Villa/10.jpg","/projects/Villa/11.jpg","/projects/Villa/12.jpg","/projects/Villa/13.jpg","/projects/Villa/14.jpg","/projects/Villa/15.jpg","/projects/Villa/16.jpg","/projects/Villa/17.jpg","/projects/Villa/18.jpg","/projects/Villa/19.jpg","/projects/Villa/20.jpg","/projects/Villa/21.jpg","/projects/Villa/22.jpg","/projects/Villa/23.jpg","/projects/Villa/24.jpg","/projects/Villa/25.jpg"]},{name:{ar:"فيلا 2",en:"Villa 2"},description:{ar:"تصميم وتطوير هيكلي لفيلا عصرية مع التركيز على العمارة الحديثة والاستخدام الأمثل للمساحة. يدمج المشروع مواد عالية الجودة وتقنيات هندسية متقدمة لتحقيق توازن بين الفخامة والوظائف وسلامة الهيكل، مع توفير إقامة آمنة وأنيقة.",en:"Design and structural development of a contemporary villa, emphasizing modern architecture and efficient use of space. The project incorporates high-quality materials and advanced engineering techniques to ensure a balance between luxury, functionality, and structural integrity, providing a safe and elegant residence."},images:["/projects/Villa2/1.jpg","/projects/Villa2/2.jpg","/projects/Villa2/3.jpg","/projects/Villa2/4.jpg","/projects/Villa2/5.jpg","/projects/Villa2/6.jpg","/projects/Villa2/7.jpg","/projects/Villa2/8.jpg","/projects/Villa2/9.jpg","/projects/Villa2/10.jpg","/projects/Villa2/11.jpg","/projects/Villa2/12.jpg","/projects/Villa2/13.jpg","/projects/Villa2/14.jpg","/projects/Villa2/15.jpg","/projects/Villa2/16.jpg","/projects/Villa/17.jpg","/projects/Villa2/18.jpg","/projects/Villa2/19.jpg","/projects/Villa2/20.jpg","/projects/Villa2/21.jpg","/projects/Villa2/22.jpg","/projects/Villa2/23.jpg","/projects/Villa2/24.jpg","/projects/Villa2/26.jpg","/projects/Villa2/27.jpg","/projects/Villa2/28.jpg","/projects/Villa2/29.jpg"]}];const De={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor"};function Je(e,t){return(0,s.uX)(),(0,s.CE)("svg",De,t[0]||(t[0]=[(0,s.Lk)("path",{d:"M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"},null,-1)]))}const Ue={},et=(0,n.A)(Ue,[["render",Je]]);var tt=et;const rt={class:"font-extrabold text-gray-500 text-sm md:text-xl"},ot={class:"relative h-full w-full 4 flex flex-col md:flex-row"},st={class:"flex-1 z-50 pointer-events-auto"},at={class:"absolute inset-0 max-w-2xl flex flex-col p-10"},nt={class:"flex-1 flex flex-col gap-5"},lt={class:"flex-1 flex flex-col gap-5"},it={class:"font-extrabold text-gray-200 text-2xl md:text-4xl backdrop-blur-2xl w-fit"},ct=["src"];var pt=(0,s.pM)({__name:"HomeView",setup(e){const t=F(),r=(0,u.KR)(0);return(e,o)=>{const a=(0,s.g2)("P"),n=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.Wv)(Z,null,{default:(0,s.k6)((()=>[(0,s.bF)(h,{title:(0,u.R1)(t)("my name",{name:(0,u.R1)(t)((0,u.R1)(G).name)})},{default:(0,s.k6)((()=>[(0,s.Lk)("p",rt,(0,d.v_)((0,u.R1)(t)("welcome_message")),1)])),_:1},8,["title"]),(0,s.bF)(V,{class:"mb-10"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",ot,[(0,s.Lk)("div",st,[(0,s.Lk)("div",at,[(0,s.Lk)("div",nt,[(0,s.bF)(a,{class:"font-extrabold text-gray-200 text-2xl md:text-4xl backdrop-blur-2xl w-fit"},{default:(0,s.k6)((()=>[(0,s.eW)((0,d.v_)((0,u.R1)(t)("For my information and CV")),1)])),_:1}),(0,s.bF)(n,{to:"/about"},{default:(0,s.k6)((()=>[(0,s.bF)($,{icon:tt,title:"TO MY INFORMATION"})])),_:1})]),(0,s.Lk)("div",lt,[(0,s.Lk)("h2",it,(0,d.v_)((0,u.R1)(t)("Or take a look at my projects")),1),(0,s.bF)(n,{to:"/projects"},{default:(0,s.k6)((()=>[(0,s.bF)($,{icon:tt,title:"MY PROJECT"})])),_:1})])])]),(0,s.Lk)("div",{class:"flex-[2] h-full flex flex-wrap overflow-hidden",style:{perspective:"1000px"},onMouseover:o[0]||(o[0]=e=>r.value=200),onMouseout:o[1]||(o[1]=e=>r.value=0)},[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(25,(e=>(0,s.Lk)("div",{key:e,style:(0,d.Tr)({transition:"all 2s",transform:`translateZ(-${(0,u.R1)(de)(e%6,[1,6],[800-r.value,10])}px)`,filter:`brightness(${(0,u.R1)(de)(e%6,[1,6],[.6+r.value/5e3,.9])})`,zIndex:e%6}),class:"w-[20%] h-[20%] flex justify-center items-center overflow-hidden shadow-2xl"},[(0,s.Lk)("img",{src:(0,u.R1)(Qe)[0].images[e],class:"flex w-full h-full object-cover"},null,8,ct)],4))),64))],32)])])),_:1})])),_:1})}}});const ut=pt;var dt=ut;const jt={class:"relative h-full w-full 4 flex flex-col md:flex-row"},gt=["src"],vt={class:"flex-1 md:flex-[2] overflow-auto z-30 pointer-events-none"},mt={class:"flex flex-col gap-5 p-10"},ft={class:"font-extrabold text-gray-500 text-sm md:text-xl backdrop-blur-xl"},ht=["onMouseover","onClick"],xt=["src"];var bt=(0,s.pM)({__name:"ProjectItem",props:{project:{}},setup(e){const t=(0,u.KR)(0),r=(0,u.KR)(null),o=(0,u.KR)(null),a=(0,u.KR)(20),n=F(),l=e;(0,s.sV)((()=>{a.value=Math.min(l.project.images.length,20)}));const i=()=>{t.value=0,r.value=null},c=e=>{t.value=200,r.value=e},p=e=>{const o=Math.floor((e-1)%a.value),s=(t.value,0),n=r.value==e?0:t.value?50:100,l=t.value?400:600;return`translate3d(\n                     ${de(o,[1,a.value],[s,0])}px, \n                     ${de(o,[1,a.value],[n,0])}px, \n                    -${de(o,[1,a.value],[l,0])}px)`},j=e=>{o.value=null==o.value?e:null};return(e,r)=>{const l=(0,s.g2)("P");return(0,s.uX)(),(0,s.Wv)(V,{class:"mb-10"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",jt,[o.value?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"bg-surface-700/95 absolute inset-0 z-50",onClick:r[0]||(r[0]=e=>o.value=null)},[(0,s.Lk)("img",{src:e.project.images[o.value],class:"flex object-contain w-full h-full"},null,8,gt)])):(0,s.Q3)("",!0),(0,s.Lk)("div",vt,[(0,s.Lk)("div",mt,[(0,s.bF)(l,{class:"font-extrabold text-primary/75 text-2xl md:text-4xl w-fit backdrop-blur-xl"},{default:(0,s.k6)((()=>[(0,s.eW)((0,d.v_)((0,u.R1)(n)(e.project.name)),1)])),_:1}),(0,s.Lk)("p",ft,(0,d.v_)((0,u.R1)(n)(e.project.description)),1)])]),(0,s.Lk)("div",{class:"flex-1 md:flex-[3] h-full flex flex-wrap overflow-hidden",style:{perspective:"800px"},onMouseout:i},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,(r=>((0,s.uX)(),(0,s.CE)("div",{key:r,style:(0,d.Tr)({transition:"all 500ms",transform:p(r),filter:`brightness(${(0,u.R1)(de)((r-1)%a.value,[1,a.value],[t.value?.7:.5,.9])})`,zIndex:r%a.value}),class:"bg-surface-400 w-[25%] h-[20%] md:w-[20%] md:h-[25%] flex justify-center items-center overflow-hidden shadow-2xl cursor-pointer border-white/75 border-[1px]",onMouseover:e=>c(r),onClick:e=>j(r)},[(0,s.Lk)("img",{src:e.project.images[r],class:"flex object-cover w-full h-full"},null,8,xt)],44,ht)))),128))],32)])])),_:1})}}});const wt=bt;var yt=wt;const kt={class:"font-extrabold text-gray-500 text-sm md:text-xl"};var Rt=(0,s.pM)({__name:"ProjectsView",setup(e){const t=F();return(e,r)=>((0,s.uX)(),(0,s.Wv)(Z,null,{default:(0,s.k6)((()=>[(0,s.bF)(h,{title:(0,u.R1)(t)("projects_title")},{default:(0,s.k6)((()=>[(0,s.Lk)("p",kt,(0,d.v_)((0,u.R1)(t)("projects_message")),1)])),_:1},8,["title"]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,u.R1)(Qe),((e,t)=>((0,s.uX)(),(0,s.Wv)(yt,{key:t,project:e},null,8,["project"])))),128))])),_:1}))}});const Tt=Rt;var _t=Tt;const Mt=[{path:"/",component:Ne,children:[{path:"",name:"home",component:dt},{path:"projects",name:"projects",component:_t},{path:"about",name:"about",component:le}]}],Vt=(0,p.aE)({history:(0,p.LA)("/"),routes:Mt,scrollBehavior(){return{top:0}}});var Lt=Vt;(0,o.Ef)(c).use(Lt).mount("#app")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,s,a){if(!o){var n=1/0;for(p=0;p<e.length;p++){o=e[p][0],s=e[p][1],a=e[p][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[i])}))?o.splice(i--,1):(l=!1,a<n&&(n=a));if(l){e.splice(p--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,s,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,n=o[0],l=o[1],i=o[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(i)var p=i(r)}for(t&&t(o);c<n.length;c++)a=n[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(122)}));o=r.O(o)})();
//# sourceMappingURL=app.1524e627.js.map