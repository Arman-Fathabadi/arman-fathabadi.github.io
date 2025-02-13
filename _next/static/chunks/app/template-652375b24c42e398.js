(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{3550:(e,t,a)=>{Promise.resolve().then(a.bind(a,8241))},8241:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var r=a(5155),s=a(2115),l=a(8173),n=a.n(l),i=a(6046),o=a(5683),c=a(3687),d=a(8422);let h=e=>{let{isDarkMode:t,toggleDarkMode:a}=e,[l,h]=(0,s.useState)(!1),m=(0,i.usePathname)(),x="/personal-portfolio",u=[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/projects",label:"Projects"},{href:"/contact",label:"Contact"}],f=e=>{let t=m||"",a="".concat(x).concat(e);return"/"===e?t===x||t==="".concat(x,"/"):t===a},g=e=>{let t="/personal-portfolio";return"/"===e?t||"/":"".concat(t).concat(e)};return(0,r.jsx)("nav",{className:"fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-50 transition-all duration-300",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,r.jsx)(n(),{href:x||"/",className:"text-2xl font-bold text-gray-800 dark:text-white",children:"AF"}),(0,r.jsxs)("div",{className:"hidden md:flex space-x-8 items-center",children:[u.map(e=>(0,r.jsx)(n(),{href:g(e.href),className:"".concat(f(e.href)?"text-blue-600 dark:text-blue-400":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"," transition-colors"),children:e.label},e.href)),(0,r.jsx)("button",{type:"button",onClick:a,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:t?(0,r.jsx)(d.Q3K,{className:"w-6 h-6"}):(0,r.jsx)(d.Zt5,{className:"w-6 h-6"})})]}),(0,r.jsx)("button",{type:"button",onClick:()=>h(!l),className:"md:hidden p-2",children:l?(0,r.jsx)(d.U_s,{className:"w-6 h-6"}):(0,r.jsx)(d.TF4,{className:"w-6 h-6"})})]}),(0,r.jsx)(o.N,{children:l&&(0,r.jsx)(c.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden pb-4",children:u.map(e=>(0,r.jsx)(n(),{href:g(e.href),className:"block py-2 ".concat(f(e.href)?"text-blue-600 dark:text-blue-400":"text-gray-600 dark:text-gray-300"),onClick:()=>h(!1),children:e.label},e.href))})})]})})};var m=a(1536);let x=()=>(0,r.jsx)("footer",{className:"w-full bg-white dark:bg-gray-800 py-6 border-t border-gray-200 dark:border-gray-700 mt-auto",children:(0,r.jsxs)("div",{className:"max-w-6xl mx-auto px-6 text-center",children:[(0,r.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["\xa9 ",new Date().getFullYear()," Arman Fathabadi. All rights reserved."]}),(0,r.jsxs)("div",{className:"mt-4 flex justify-center space-x-4",children:[(0,r.jsx)("a",{href:"https://github.com/Arman-Fathalian",target:"_blank",rel:"noopener noreferrer",title:"Visit my GitHub profile",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:(0,r.jsx)(m.hL4,{className:"h-6 w-6"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/arman-fathalian/",target:"_blank",rel:"noopener noreferrer",title:"Visit my LinkedIn profile",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:(0,r.jsx)(m.QEs,{className:"h-6 w-6"})})]})]})});var u=a(7711);let f=()=>{let e=(0,s.useRef)(null),[t,l]=(0,s.useState)(null),[n,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>(i(!0),()=>i(!1)),[]),(0,s.useEffect)(()=>{if(n)return(async()=>{try{let r=await a.e(367).then(a.bind(a,1844)),s=(await a.e(596).then(a.t.bind(a,2596,23))).default;if(!t&&e.current){let t=s({el:e.current,THREE:r,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color1:30207,color2:5223167,colorMode:"variance",birdSize:1.5,wingSpan:30,speedLimit:1.5,separation:250,alignment:10,cohesion:3,quantity:1,backgroundAlpha:0});l(t)}}catch(e){console.error("Error initializing Vanta effect:",e)}})(),()=>{if(t)try{t.destroy()}catch(e){console.error("Error destroying Vanta effect:",e)}}},[n,t]),(0,r.jsx)("div",{ref:e,className:"fixed inset-0 -z-10 transparent-bg no-pointer-events"})},g=(0,u.default)(()=>Promise.resolve(f),{ssr:!1});var b=a(7468),p=a(991);function y(){let[e,t]=(0,s.useState)(!1),{scrollYProgress:a}=(0,b.L)(),l=(0,p.z)(a,{stiffness:100,damping:30,restDelta:.001});return((0,s.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsx)(c.P.div,{className:"fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-[0%] z-50",style:{scaleX:l}}):null}function j(e){let{children:t}=e,[a,l]=(0,s.useState)(!1),[n,i]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{l(!0);let e="dark"===localStorage.getItem("theme");i(e),e&&document.documentElement.classList.add("dark")},[]),a)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)(h,{isDarkMode:n,toggleDarkMode:()=>{let e=!n;i(e),e?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}}),(0,r.jsx)(g,{}),(0,r.jsx)("main",{className:"flex-1 w-full max-w-6xl mx-auto px-4 py-8",children:t}),(0,r.jsx)(x,{})]})]}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[777,711,687,173,838,441,517,358],()=>t(3550)),_N_E=e.O()}]);