(()=>{"use strict";var e,t={4560:(e,t,o)=>{var n=o(3418),r=o(9800),i=o(7761),s=o(9529),a=o(6424),c=o(5761),l=o(196);const u=new c.Z({layers:[new a.Z({source:new s.Z})],target:"map2d",controls:(0,i.c)({attributionOptions:{collapsible:!1}}),view:new r.ZP({center:[333333,15e5],zoom:6})});Cesium.Ion.defaultAccessToken=l.x;const p=new n.ZP({map:u}),f=p.getCesiumScene();Cesium.createWorldTerrainAsync().then((e=>f.terrainProvider=e)),p.setEnabled(!0);const d=function(e){this.ol3d_=e};d.MAX_TILT=7*Math.PI/16,d.MIN_TILT=0,d.prototype.getOlView=function(){return this.ol3d_.getOlView()},d.prototype.getTiltRange=function(){return[d.MIN_TILT,d.MAX_TILT]},d.prototype.getHeading=function(){return this.getOlView().getRotation()||0},d.prototype.getTiltOnGlobe=function(){const e=this.ol3d_.getCesiumScene();return-(0,n.Re)(e)},d.prototype.resetToNorthZenith=function(e){const t=this.ol3d_.getCesiumScene(),o=t.camera,r=(0,n.DQ)(t);if(!r)return void e();const i=this.getHeading(),s=(0,n.Kn)(t,r);(0,n.BN)(t,i,r);const a=Cesium.Matrix4.fromTranslation(r),c=o.right,l={callback:e};(0,n.Bq)(o,-s,c,a,l)},d.prototype.rotate=function(e){const t=this.ol3d_.getOlView(),o=t.getRotation();t.animate({rotation:o+e,duration:250})},d.prototype.setHeading=function(e){const t=this.ol3d_.getCesiumScene(),o=(0,n.DQ)(t);o&&(0,n.BN)(t,e,o)},d.prototype.tiltOnGlobe=function(e){const t=this.ol3d_.getCesiumScene(),o=t.camera,r=(0,n.DQ)(t);if(!r)return;const i=Cesium.Matrix4.fromTranslation(r),s=o.right;(0,n.Bq)(o,-e,s,i,{})},window.control=new d(p)}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,r,i]=e[u],a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=212,(()=>{var e={212:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[s,a,c]=o,l=0;if(s.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[351],(()=>n(4560)));r=n.O(r)})();
//# sourceMappingURL=rotate.1304e9d0bb73034b55cf.js.map