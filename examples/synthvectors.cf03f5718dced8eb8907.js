(()=>{"use strict";var e,t={1199:(e,t,n)=>{var r=n(4949),o=n(3797),a=n(3969),i=n(7908),d=n(8456),s=n(3418),l=n(9800),c=n(5761),u=n(9529),m=n(6424),p=n(4993),f=n(1900),v=n(196);let h=0,w=0,y=0;const g=[],M=new m.Z({source:new u.Z}),b=new c.Z({layers:[M],target:"map2d",view:new l.ZP({center:[0,0],zoom:2})});Cesium.Ion.defaultAccessToken=v.x;const E=new s.ZP({map:b}),O=E.getCesiumScene();Cesium.createWorldTerrainAsync().then((e=>O.terrainProvider=e)),E.setEnabled(!0);let T;new Cesium.ScreenSpaceEventHandler(O.canvas).setInputAction((e=>{const t=O.drillPick(e.position);if(Cesium.defined(t))for(let e=0;e<t.length;++e){const n=t[e].primitive;if(n.olFeature==T)continue;Cesium.Ellipsoid.WGS84.cartesianToCartographic(n.position);T=n.olFeature}else T=void 0}),Cesium.ScreenSpaceEventType.LEFT_CLICK),window.clearFeatures=function(){g.forEach((e=>{b.getLayers().remove(e)})),g.length=0,h=document.getElementById("total").innerHTML=0,document.getElementById("created").innerHTML="",document.getElementById("added").innerHTML=""},window.addFeatures=function(){let e=Date.now();const t=[],n=18e6;for(let e=0;e<1e3;++e){const e=new p.Z({geometry:new f.Z([2*n*Math.random()-n,2*n*Math.random()-n,n*Math.random()])}),r=[new d.ZP({image:new i.Z({radius:2,fill:new a.Z({color:[255*Math.random(),255*Math.random(),255*Math.random(),Math.random()]})})})];e.setStyle(r),e.setId(n*Math.random()),t.push(e)}let s=Date.now();w=s-e,e=s;const l=new o.Z({}),c=new r.Z({source:l});l.addFeatures(t),b.addLayer(c),g.push(c),s=Date.now(),y=s-e,h+=1e3,document.getElementById("total").innerHTML=h,document.getElementById("created").innerHTML=`Features created in ${w}ms.`,document.getElementById("added").innerHTML=`Features added in ${y}ms.`}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],d=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(d=!1,a<i&&(i=a));if(d){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=968,(()=>{var e={968:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,d,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);if(s)var c=s(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[351],(()=>r(1199)));o=r.O(o)})();
//# sourceMappingURL=synthvectors.cf03f5718dced8eb8907.js.map