(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9534],{34941:function(t,e,n){"use strict";n.d(e,{O:function(){return a}});var r=n(80658),o=n(67294),i=n(10762);function a(t,e,n,a){var u=(0,i.W)(e);return o.useEffect((()=>{var e,o=null!=(e=(0,r.Pu)(n))?e:document;return o.addEventListener(t,u,a),()=>{o.removeEventListener(t,u,a)}}),[t,n,a,u]),()=>{var e;(null!=(e=(0,r.Pu)(n))?e:document).removeEventListener(t,u,a)}}},81959:function(t,e,n){"use strict";n.d(e,{I:function(){return o}});var r=n(67294);function o(t){var e=r.useRef(null);return e.current=t,e}},24011:function(t,e,n){"use strict";n.d(e,{P:function(){return g}});var r=n(9839),o=n(75027),i=n(80658);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class l{constructor(t,e,n){if(u(this,"history",[]),u(this,"startEvent",null),u(this,"lastEvent",null),u(this,"lastEventInfo",null),u(this,"handlers",{}),u(this,"removeListeners",i.ZT),u(this,"threshold",3),u(this,"updatePoint",(()=>{if(this.lastEvent&&this.lastEventInfo){var t=d(this.lastEventInfo,this.history),e=null!==this.startEvent,n=(0,i.TE)(t.offset,{x:0,y:0})>=this.threshold;if(e||n){var{timestamp:o}=(0,r.$B)();this.history.push(a({},t.point,{timestamp:o}));var{onStart:u,onMove:l}=this.handlers;e||(null==u||u(this.lastEvent,t),this.startEvent=this.lastEvent),null==l||l(this.lastEvent,t)}}})),u(this,"onPointerMove",((t,e)=>{this.lastEvent=t,this.lastEventInfo=e,(0,o.N5)(t)&&0===t.buttons?this.onPointerUp(t,e):r.ZP.update(this.updatePoint,!0)})),u(this,"onPointerUp",((t,e)=>{var n=d(e,this.history),{onEnd:r,onSessionEnd:o}=this.handlers;null==o||o(t,n),this.end(),r&&this.startEvent&&(null==r||r(t,n))})),!(0,o.N2)(t)){this.handlers=e,n&&(this.threshold=n),t.stopPropagation(),t.preventDefault();var l=(0,o.Qk)(t),{timestamp:s}=(0,r.$B)();this.history=[a({},l.point,{timestamp:s})];var{onSessionStart:c}=e;null==c||c(t,d(l,this.history)),this.removeListeners=(0,i.zG)((0,o.aM)(window,"pointermove",this.onPointerMove),(0,o.aM)(window,"pointerup",this.onPointerUp),(0,o.aM)(window,"pointercancel",this.onPointerUp))}}updateHandlers(t){this.handlers=t}end(){var t;null==(t=this.removeListeners)||t.call(this),r.qY.update(this.updatePoint)}}function s(t,e){return{x:t.x-e.x,y:t.y-e.y}}function c(t){return t[0]}function f(t){return t[t.length-1]}function d(t,e){return{point:t.point,delta:s(t.point,f(e)),offset:s(t.point,c(e)),velocity:v(e,.1)}}function v(t,e){if(t.length<2)return{x:0,y:0};for(var n=t.length-1,r=null,o=function(t){return t[t.length-1]}(t);n>=0&&(r=t[n],!(o.timestamp-r.timestamp>1e3*e));)n--;if(!r)return{x:0,y:0};var i=(o.timestamp-r.timestamp)/1e3;if(0===i)return{x:0,y:0};var a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}var h=n(67294),p=n(63158),m=n(77581);function g(t,e){var{onPan:n,onPanStart:r,onPanEnd:o,onPanSessionStart:a,onPanSessionEnd:u}=e,s=Boolean(n||r||o||a||u),c=(0,h.useRef)(null),f={onSessionStart:a,onSessionEnd:u,onStart:r,onMove:n,onEnd(t,e){c.current=null,null==o||o(t,e)}};(0,h.useEffect)((()=>{var t;null==(t=c.current)||t.updateHandlers(f)})),(0,p.m)((()=>t.current),"pointerdown",s?function(t){c.current=new l(t,f)}:i.ZT),(0,m.z)((()=>{var t;null==(t=c.current)||t.end(),c.current=null}))}},63158:function(t,e,n){"use strict";n.d(e,{m:function(){return i}});var r=n(75027),o=n(34941);function i(t,e,n,i){return(0,o.O)((0,r.f7)(e),(0,r.JN)(n,"pointerdown"===e),t,i)}},25832:function(t,e,n){"use strict";n.d(e,{S:function(){return h}});var r=n(29676),o=n(73808),i=n(4651),a=n(16678);var u=n(86800),l=n(67294);function s(t){return Object.entries(t).sort(((t,e)=>Number.parseInt(t[1],10)>Number.parseInt(e[1],10)?1:-1)).map(((t,e,n)=>{var[r,o]=t,i=n[e+1],a=i?i[1]:void 0;return{minWidth:o,maxWidth:a,breakpoint:r,query:function(t,e){if(!(parseInt(t,10)>=0)&&!e)return"";var n="(min-width: "+f(t)+")";if(!e)return n;n&&(n+=" and ");return n+="(max-width: "+f(function(t){return((t,e)=>{if("number"===typeof t)return""+(t+e);return t.replace(c,(t=>""+(parseFloat(t)+e)))})(t,t.endsWith("px")?-1:-.01)}(e))+")"}(o,a)}}))}var c=/([0-9]+\.?[0-9]*)/;function f(t){return(0,o.hj)(t)?t+"px":t}function d(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){var n=function(t){var{breakpoints:e}=(0,r.Fg)(),n=(0,u.O)(),o=l.useMemo((()=>s(v({base:"0px"},e))),[e]),[i,a]=l.useState((()=>{if(t){var e=o.find((e=>{var{breakpoint:n}=e;return n===t}));if(e)return d(e,["query"])}})),c=null==i?void 0:i.breakpoint,f=l.useCallback(((t,e)=>{t.matches&&c!==e.breakpoint&&a(e)}),[c]);return l.useEffect((()=>{var t=new Set;return o.forEach((e=>{var{query:r}=e,o=d(e,["query"]),i=n.window.matchMedia(r);f(i,o);var a=()=>{f(i,o)};return i.addListener(a),t.add({mediaQuery:i,handleChange:a}),()=>{i.removeListener(a)}})),()=>{t.forEach((t=>{var{mediaQuery:e,handleChange:n}=t;e.removeListener(n)})),t.clear()}}),[o,e,f,n.window]),c}(e),c=(0,r.Fg)();if(n){var f=Object.keys(c.breakpoints);return function(t,e,n){void 0===n&&(n=a.AV);var r=Object.keys(t).indexOf(e);if(-1!==r)return t[e];for(var o=n.indexOf(e);o>=0;){if(null!=t[n[o]]){r=o;break}o-=1}return-1!==r?t[n[r]]:void 0}((0,o.kJ)(t)?(0,i.sq)(Object.entries((0,a.Yq)(t,f)).map((t=>{var[e,n]=t;return[e,n]}))):t,n,f)}}},67316:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){return{root:"slider-root-"+t,getThumb:e=>"slider-thumb-"+t+"-"+e,getInput:e=>"slider-input-"+t+"-"+e,track:"slider-track-"+t,innerTrack:"slider-filled-track-"+t,getMarker:e=>"slider-marker-"+t+"-"+e,output:"slider-output-"+t}}function i(t){var{orientation:e,vertical:n,horizontal:r}=t;return"vertical"===e?n:r}n.d(e,{s3:function(){return o},fL:function(){return i},Wi:function(){return u},XY:function(){return l}});var a={width:0,height:0};function u(t){var{orientation:e,thumbPercents:n,thumbRects:o,isReversed:u}=t,l="vertical"===e?o.reduce(((t,e)=>t.height>e.height?t:e),a):o.reduce(((t,e)=>t.width>e.width?t:e),a),s=r({position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0},i({orientation:e,vertical:{paddingLeft:l.width/2,paddingRight:l.width/2},horizontal:{paddingTop:l.height/2,paddingBottom:l.height/2}})),c=r({position:"absolute"},i({orientation:e,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})),f=1===n.length,d=[0,u?100-n[0]:n[0]],v=f?d:n,h=v[0];!f&&u&&(h=100-h);var p=Math.abs(v[v.length-1]-v[0]);return{trackStyle:c,innerTrackStyle:r({},c,i({orientation:e,vertical:u?{height:p+"%",top:h+"%"}:{height:p+"%",bottom:h+"%"},horizontal:u?{width:p+"%",right:h+"%"}:{width:p+"%",left:h+"%"}})),rootStyle:s,getThumbStyle:t=>r({position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none"},i({orientation:e,vertical:{bottom:"calc("+n[t]+"% - "+o[t].height/2+"px)"},horizontal:{left:"calc("+n[t]+"% - "+o[t].width/2+"px)"}}))}}function l(t){var{isReversed:e,direction:n,orientation:r}=t;return"ltr"===n||"vertical"===r?e:!e}},62550:function(t,e,n){"use strict";n.d(e,{iR:function(){return _},Ms:function(){return U},gs:function(){return I},Uj:function(){return A}});var r=n(28500),o=n(90063),i=n(94915),a=n(55284),u=n(29676),l=n(28629),s=n(73808),c=n(84461),f=n(67294),d=n(10762),v=n(51034),h=n(90639),p=n(81959),m=n(94577),g="Invariant failed";var b=function(t,e){if(!t)throw new Error(g)},y=function(t){var e=t.top,n=t.right,r=t.bottom,o=t.left;return{top:e,right:n,bottom:r,left:o,width:n-o,height:r-e,x:o,y:e,center:{x:(n+o)/2,y:(r+e)/2}}},k=function(t,e){return{top:t.top+e.top,left:t.left+e.left,bottom:t.bottom-e.bottom,right:t.right-e.right}},x={top:0,right:0,bottom:0,left:0},w=function(t){var e,n,r=t.borderBox,o=t.margin,i=void 0===o?x:o,a=t.border,u=void 0===a?x:a,l=t.padding,s=void 0===l?x:l,c=y((n=i,{top:(e=r).top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right})),f=y(k(r,u)),d=y(k(f,s));return{marginBox:c,borderBox:y(r),paddingBox:f,contentBox:d,margin:i,border:u,padding:s}},O=function(t){var e=t.slice(0,-2);if("px"!==t.slice(-2))return 0;var n=Number(e);return isNaN(n)&&b(!1),n},P=function(t){return function(t,e){var n={top:O(e.marginTop),right:O(e.marginRight),bottom:O(e.marginBottom),left:O(e.marginLeft)},r={top:O(e.paddingTop),right:O(e.paddingRight),bottom:O(e.paddingBottom),left:O(e.paddingLeft)},o={top:O(e.borderTopWidth),right:O(e.borderRightWidth),bottom:O(e.borderBottomWidth),left:O(e.borderLeftWidth)};return w({borderBox:t,margin:n,padding:r,border:o})}(t.getBoundingClientRect(),window.getComputedStyle(t))},E=n(68327);var S=n(22653),j=n(24011),T=n(72947),N=n(21137),L=n(47248),C=n(80658),R=n(67316);function z(){return(z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function M(t){var e,{min:n=0,max:r=100,onChange:o,value:i,defaultValue:a,isReversed:u,direction:l="ltr",orientation:s="horizontal",id:g,isDisabled:b,isReadOnly:y,onChangeStart:k,onChangeEnd:x,step:w=1,getAriaValueText:O,"aria-valuetext":M,"aria-label":F,"aria-labelledby":B,name:W,focusThumbOnChange:_=!0}=t,I=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["min","max","onChange","value","defaultValue","isReversed","direction","orientation","id","isDisabled","isReadOnly","onChangeStart","onChangeEnd","step","getAriaValueText","aria-valuetext","aria-label","aria-labelledby","name","focusThumbOnChange"]),A=(0,d.W)(k),U=(0,d.W)(x),D=(0,d.W)(O),V=(0,R.XY)({isReversed:u,direction:l,orientation:s}),[q,G]=(0,v.T)({value:i,defaultValue:null!=a?a:Z(n,r),onChange:o}),[Y,H]=(0,h.k)(),[X,Q]=(0,h.k)(),$=(0,f.useRef)(null),K=!(b||y),J=(0,N.HU)(q,n,r),tt=(0,p.I)(J),et=(0,f.useRef)(tt.current),nt=V?r-J+n:J,rt=(0,N.Rg)(nt,n,r),ot="vertical"===s,it=(0,f.useRef)(null),at=(0,f.useRef)(null),ut=(0,f.useRef)(null),[lt,st]=(0,m.ZS)(g,"slider-thumb","slider-track"),ct=(0,f.useCallback)((t=>{var e,o;if(it.current){$.current="pointer";var i=P(it.current).borderBox,{clientX:a,clientY:u}=null!=(e=null==(o=t.touches)?void 0:o[0])?e:t,l=(ot?i.bottom-u:a-i.left)/(ot?i.height:i.width);V&&(l=1-l);var s=(0,N.WS)(l,n,r);return w&&(s=parseFloat((0,N.WP)(s,n,w))),s=(0,N.HU)(s,n,r)}}),[ot,V,r,n,w]),ft=(r-n)/10,dt=w||(r-n)/100,vt=(0,f.useCallback)((t=>{K&&(t=parseFloat((0,N.WP)(t,n,dt)),t=(0,N.HU)(t,n,r),G(t))}),[dt,r,n,G,K]),ht=(0,f.useMemo)((()=>({stepUp:function(t){void 0===t&&(t=dt),vt(V?J-t:J+t)},stepDown:function(t){void 0===t&&(t=dt),vt(V?J+t:J-t)},reset:()=>vt(a||0),stepTo:t=>vt(t)})),[vt,V,J,dt,a]),pt=(0,f.useCallback)((t=>{var e={ArrowRight:()=>ht.stepUp(),ArrowUp:()=>ht.stepUp(),ArrowLeft:()=>ht.stepDown(),ArrowDown:()=>ht.stepDown(),PageUp:()=>ht.stepUp(ft),PageDown:()=>ht.stepDown(ft),Home:()=>vt(n),End:()=>vt(r)}[(0,c.uh)(t)];e&&(t.preventDefault(),t.stopPropagation(),e(t),$.current="keyboard")}),[ht,vt,r,n,ft]),mt=null!=(e=null==D?void 0:D(J))?e:M,gt=function(t,e){var[n,r]=f.useState(null),o=f.useRef();return(0,E.G)((()=>{if(t.current){var n=t.current;return i(),e&&(window.addEventListener("resize",i),window.addEventListener("scroll",i)),()=>{e&&(window.removeEventListener("resize",i),window.removeEventListener("scroll",i)),o.current&&cancelAnimationFrame(o.current)}}function i(){o.current=requestAnimationFrame((()=>{var t=P(n);r(t)}))}}),[e]),n}(at),{getThumbStyle:bt,rootStyle:yt,trackStyle:kt,innerTrackStyle:xt}=(0,f.useMemo)((()=>{var t,e=null!=(t=null==gt?void 0:gt.borderBox)?t:{width:0,height:0};return(0,R.Wi)({isReversed:V,orientation:s,thumbRects:[e],thumbPercents:[rt]})}),[V,s,null==gt?void 0:gt.borderBox,rt]),wt=(0,f.useCallback)((()=>{at.current&&_&&setTimeout((()=>(0,L.T)(at.current)))}),[_]);(0,S.r)((()=>{wt(),"keyboard"===$.current&&(null==U||U(tt.current))}),[J,U]);var Ot=t=>{var e=ct(t);null!=e&&e!==tt.current&&G(e)};(0,j.P)(ut,{onPanSessionStart(t){K&&(H.on(),wt(),Ot(t),null==A||A(tt.current))},onPanSessionEnd(){K&&(H.off(),null==U||U(tt.current),et.current=tt.current)},onPan(t){K&&Ot(t)}});var Pt=(0,f.useCallback)((function(t,e){return void 0===t&&(t={}),void 0===e&&(e=null),z({},t,I,{ref:(0,T.l)(e,ut),tabIndex:-1,"aria-disabled":(0,c.Qm)(b),"data-focused":(0,c.PB)(X),style:z({},t.style,yt)})}),[I,b,X,yt]),Et=(0,f.useCallback)((function(t,e){return void 0===t&&(t={}),void 0===e&&(e=null),z({},t,{ref:(0,T.l)(e,it),id:st,"data-disabled":(0,c.PB)(b),style:z({},t.style,kt)})}),[b,st,kt]),St=(0,f.useCallback)((function(t,e){return void 0===t&&(t={}),void 0===e&&(e=null),z({},t,{ref:e,style:z({},t.style,xt)})}),[xt]),jt=(0,f.useCallback)((function(t,e){return void 0===t&&(t={}),void 0===e&&(e=null),z({},t,{ref:(0,T.l)(e,at),role:"slider",tabIndex:K?0:void 0,id:lt,"data-active":(0,c.PB)(Y),"aria-valuetext":mt,"aria-valuemin":n,"aria-valuemax":r,"aria-valuenow":J,"aria-orientation":s,"aria-disabled":(0,c.Qm)(b),"aria-readonly":(0,c.Qm)(y),"aria-label":F,"aria-labelledby":F?void 0:B,style:z({},t.style,bt(0)),onKeyDown:(0,C.v0)(t.onKeyDown,pt),onFocus:(0,C.v0)(t.onFocus,Q.on),onBlur:(0,C.v0)(t.onBlur,Q.off)})}),[K,lt,Y,mt,n,r,J,s,b,y,F,B,bt,pt,Q.on,Q.off]),Tt=(0,f.useCallback)((function(t,e){void 0===t&&(t={}),void 0===e&&(e=null);var o=!(t.value<n||t.value>r),i=J>=t.value,a=(0,N.Rg)(t.value,n,r),u=z({position:"absolute",pointerEvents:"none"},function(t){var{orientation:e,vertical:n,horizontal:r}=t;return"vertical"===e?n:r}({orientation:s,vertical:{bottom:V?100-a+"%":a+"%"},horizontal:{left:V?100-a+"%":a+"%"}}));return z({},t,{ref:e,role:"presentation","aria-hidden":!0,"data-disabled":(0,c.PB)(b),"data-invalid":(0,c.PB)(!o),"data-highlighted":(0,c.PB)(i),style:z({},t.style,u)})}),[b,V,r,n,s,J]),Nt=(0,f.useCallback)((function(t,e){return void 0===t&&(t={}),void 0===e&&(e=null),z({},t,{ref:e,type:"hidden",value:J,name:W})}),[W,J]);return{state:{value:J,isFocused:X,isDragging:Y},actions:ht,getRootProps:Pt,getTrackProps:Et,getInnerTrackProps:St,getThumbProps:jt,getMarkerProps:Tt,getInputProps:Nt}}function Z(t,e){return e<t?t:t+(e-t)/2}function F(){return(F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var[B,W]=(0,r.k)({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <Slider />"}),_=(0,o.G)(((t,e)=>{var n=(0,i.j)("Slider",t),r=(0,a.Lr)(t),{direction:o}=(0,u.Fg)();r.direction=o;var s=M(r),{getInputProps:c,getRootProps:d}=s,v=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(s,["getInputProps","getRootProps"]),h=d(),p=c({},e);return f.createElement(B,{value:v},f.createElement(u.Fo,{value:n},f.createElement(l.m$.div,F({},h,{className:"chakra-slider",__css:n.container}),t.children,f.createElement("input",p))))}));_.defaultProps={orientation:"horizontal"},s.Ts&&(_.displayName="Slider");var I=(0,o.G)(((t,e)=>{var{getThumbProps:n}=W(),r=(0,u.yK)(),o=n(t,e);return f.createElement(l.m$.div,F({},o,{className:(0,c.cx)("chakra-slider__thumb",t.className),__css:r.thumb}))}));s.Ts&&(I.displayName="SliderThumb");var A=(0,o.G)(((t,e)=>{var{getTrackProps:n}=W(),r=(0,u.yK)(),o=n(t,e);return f.createElement(l.m$.div,F({},o,{className:(0,c.cx)("chakra-slider__track",t.className),__css:r.track}))}));s.Ts&&(A.displayName="SliderTrack");var U=(0,o.G)(((t,e)=>{var{getInnerTrackProps:n}=W(),r=(0,u.yK)(),o=n(t,e);return f.createElement(l.m$.div,F({},o,{className:"chakra-slider__filled-track",__css:r.filledTrack}))}));s.Ts&&(U.displayName="SliderFilledTrack");var D=(0,o.G)(((t,e)=>{var{getMarkerProps:n}=W(),r=n(t,e);return f.createElement(l.m$.div,F({},r,{className:(0,c.cx)("chakra-slider__marker",t.className)}))}));s.Ts&&(D.displayName="SliderMark")},21137:function(t,e,n){"use strict";n.d(e,{mq:function(){return i},fo:function(){return a},Zd:function(){return u},vk:function(){return l},Rg:function(){return s},WS:function(){return c},WP:function(){return f},HU:function(){return d}});var r=n(73808),o=n(80658),i=Number.MIN_SAFE_INTEGER||-9007199254740991,a=Number.MAX_SAFE_INTEGER||9007199254740991;function u(t,e){var n=function(t){var e=parseFloat(t);return(0,r.iy)(e)?0:e}(t),o=10**(null!=e?e:10);return n=Math.round(n*o)/o,e?n.toFixed(e):n.toString()}function l(t){if(!Number.isFinite(t))return 0;for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n+=1;return n}function s(t,e,n){return 100*(t-e)/(n-e)}function c(t,e,n){return(n-e)*t+e}function f(t,e,n){return u(Math.round((t-e)/n)*n+e,l(n))}function d(t,e,n){return null==t?t:((0,o.ZK)({condition:n<e,message:"clamp: max cannot be less than min"}),Math.min(Math.max(t,e),n))}},75027:function(t,e,n){"use strict";n.d(e,{N5:function(){return o},Qk:function(){return s},JN:function(){return c},f7:function(){return v},aM:function(){return h},N2:function(){return p}});var r=n(84461);function o(t){var e=(0,r.dh)(t);return"undefined"!==typeof e.PointerEvent&&t instanceof e.PointerEvent?!("mouse"!==t.pointerType):t instanceof e.MouseEvent}function i(t){return!!t.touches}var a={pageX:0,pageY:0};function u(t,e){void 0===e&&(e="page");var n=t.touches[0]||t.changedTouches[0]||a;return{x:n[e+"X"],y:n[e+"Y"]}}function l(t,e){return void 0===e&&(e="page"),{x:t[e+"X"],y:t[e+"Y"]}}function s(t,e){return void 0===e&&(e="page"),{point:i(t)?u(t,e):l(t,e)}}var c=function(t,e){void 0===e&&(e=!1);var n,o=e=>t(e,s(e));return e?(n=o,t=>{var e=t instanceof(0,r.dh)(t).MouseEvent;(!e||e&&0===t.button)&&n(t)}):o},f={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},d={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function v(t){return r.jU&&null===window.onpointerdown?t:r.jU&&null===window.ontouchstart?d[t]:r.jU&&null===window.onmousedown?f[t]:t}function h(t,e,n,o){return(0,r.EV)(t,v(e),c(n,"pointerdown"===e),o)}function p(t){return i(t)&&t.touches.length>1}},17949:function(t,e,n){"use strict";n.d(e,{Z:function(){return P}});var r=n(67294),o=n(94184),i=n.n(o),a=(n(45697),n(99599)),u=n(14703),l=n(54371),s=n(89163),c=n(55280),f={top:"top",left:"left",right:"right",bottom:"bottom"};function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t){var e=t.hideTicks,n=t.horizontal,o=t.orientation,u=t.tickClassName,l=t.tickComponent,v=t.tickLabelProps,h=t.tickStroke,p=void 0===h?"#222":h,m=t.tickTransform;return t.ticks.map((function(t){var h,g=t.value,b=t.index,y=t.from,k=t.to,x=t.formattedValue,w=null!=(h=v[b])?h:{},O=Math.max(10,"number"===typeof w.fontSize&&w.fontSize||0),P=k.y+(n&&o!==f.top?O:0);return r.createElement(a.Z,{key:"visx-tick-"+g+"-"+b,className:i()("visx-axis-tick",u),transform:m},!e&&r.createElement(s.Z,{from:y,to:k,stroke:p,strokeLinecap:"square"}),l?l(d({},w,{x:k.x,y:P,formattedValue:x})):r.createElement(c.Z,d({x:k.x,y:P},w),x))}))}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var p={textAnchor:"middle",fontFamily:"Arial",fontSize:10,fill:"#222"};function m(t){var e=t.axisFromPoint,n=t.axisLineClassName,o=t.axisToPoint,a=t.hideAxisLine,u=t.hideTicks,l=t.horizontal,d=t.label,m=void 0===d?"":d,g=t.labelClassName,b=t.labelOffset,y=void 0===b?14:b,k=t.labelProps,x=void 0===k?p:k,w=t.orientation,O=void 0===w?f.bottom:w,P=t.scale,E=t.stroke,S=void 0===E?"#222":E,j=t.strokeDasharray,T=t.strokeWidth,N=void 0===T?1:T,L=t.tickClassName,C=t.tickComponent,R=t.tickLabelProps,z=void 0===R?function(){return p}:R,M=t.tickLength,Z=void 0===M?8:M,F=t.tickStroke,B=void 0===F?"#222":F,W=t.tickTransform,_=t.ticks,I=t.ticksComponent,A=void 0===I?v:I,U=_.map((function(t){var e=t.value,n=t.index;return z(e,n)})),D=Math.max.apply(Math,[10].concat(U.map((function(t){return"number"===typeof t.fontSize?t.fontSize:0}))));return r.createElement(r.Fragment,null,A({hideTicks:u,horizontal:l,orientation:O,scale:P,tickClassName:L,tickComponent:C,tickLabelProps:U,tickStroke:B,tickTransform:W,ticks:_}),!a&&r.createElement(s.Z,{className:i()("visx-axis-line",n),from:e,to:o,stroke:S,strokeWidth:N,strokeDasharray:j}),m&&r.createElement(c.Z,h({className:i()("visx-axis-label",g)},function(t){var e,n,r,o=t.labelOffset,i=t.labelProps,a=t.orientation,u=t.range,l=t.tickLabelFontSize,s=t.tickLength,c=a===f.left||a===f.top?-1:1;if(a===f.top||a===f.bottom){var d=a===f.bottom&&"number"===typeof i.fontSize?i.fontSize:0;e=(Number(u[0])+Number(u[u.length-1]))/2,n=c*(s+o+l+d)}else e=c*((Number(u[0])+Number(u[u.length-1]))/2),n=-(s+o),r="rotate("+90*c+")";return{x:e,y:n,transform:r}}({labelOffset:y,labelProps:x,orientation:O,range:P.range(),tickLabelFontSize:D,tickLength:Z}),x),m))}var g=n(47045);var b=n(87731);function y(t,e){var n=t.x,r=t.y;return new b.Z(e?{x:n,y:r}:{x:r,y:n})}function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function x(t){var e=t.children,n=void 0===e?m:e,o=t.axisClassName,s=t.hideAxisLine,c=void 0!==s&&s,d=t.hideTicks,v=void 0!==d&&d,h=t.hideZero,p=void 0!==h&&h,b=t.left,x=void 0===b?0:b,w=t.numTicks,O=void 0===w?10:w,P=t.orientation,E=void 0===P?f.bottom:P,S=t.rangePadding,j=void 0===S?0:S,T=t.scale,N=t.tickFormat,L=t.tickLength,C=void 0===L?8:L,R=t.tickValues,z=t.top,M=void 0===z?0:z,Z=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["children","axisClassName","hideAxisLine","hideTicks","hideZero","left","numTicks","orientation","rangePadding","scale","tickFormat","tickLength","tickValues","top"]),F=null!=N?N:function(t){return"tickFormat"in t?t.tickFormat():g.Z}(T),B=E===f.left,W=E===f.top,_=W||E===f.bottom,I=function(t,e){void 0===e&&(e="center");var n=t;if("start"!==e&&"bandwidth"in n){var r=n.bandwidth();return"center"===e&&(r/=2),n.round()&&(r=Math.round(r)),function(t){var e=n(t);return"number"===typeof e?e+r:e}}return t}(T),A=B||W?-1:1,U=T.range(),D=y({x:Number(U[0])+.5-j,y:0},_),V=y({x:Number(U[U.length-1])+.5+j,y:0},_),q=(null!=R?R:(0,u.Z)(T,O)).filter((function(t){return!p||0!==t&&"0"!==t})).map((function(t,e){return{value:t,index:e}})),G=q.map((function(t){var e=t.value,n=t.index,r=(0,l.Z)(I(e));return{value:e,index:n,from:y({x:r,y:0},_),to:y({x:r,y:C*A},_),formattedValue:F(e,n,q)}}));return r.createElement(a.Z,{className:i()("visx-axis",o),top:M,left:x},n(k({},Z,{axisFromPoint:D,axisToPoint:V,hideAxisLine:c,hideTicks:v,hideZero:p,horizontal:_,numTicks:O,orientation:E,rangePadding:j,scale:T,tickFormat:F,tickLength:C,tickPosition:I,tickSign:A,ticks:G})))}function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var O=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function P(t){var e=t.axisClassName,n=t.labelOffset,o=void 0===n?8:n,a=t.tickLabelProps,u=void 0===a?O:a,l=t.tickLength,s=void 0===l?8:l,c=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return r.createElement(x,w({axisClassName:i()("visx-axis-bottom",e),labelOffset:o,orientation:f.bottom,tickLabelProps:u,tickLength:s},c))}},24764:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(45697),o=n.n(r),i=n(67294),a=n(94184),u=n.n(a),l=n(53282),s=n(99599),c=n(87731),f=n(14703),d=n(54371);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t){var e=t.top,n=void 0===e?0:e,r=t.left,o=void 0===r?0:r,a=t.scale,h=t.height,p=t.stroke,m=void 0===p?"#eaf0f6":p,g=t.strokeWidth,b=void 0===g?1:g,y=t.strokeDasharray,k=t.className,x=t.numTicks,w=void 0===x?10:x,O=t.lineStyle,P=t.offset,E=t.tickValues,S=t.children,j=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),T=(null!=E?E:(0,f.Z)(a,w)).map((function(t){var e=P?((0,d.Z)(a(t))||0)+P:(0,d.Z)(a(t))||0;return{from:new c.Z({x:e,y:0}),to:new c.Z({x:e,y:h})}}));return i.createElement(s.Z,{className:u()("visx-columns",k),top:n,left:o},S?S({lines:T}):T.map((function(t,e){var n=t.from,r=t.to;return i.createElement(l.Z,v({key:"column-line-"+e,from:n,to:r,stroke:m,strokeWidth:b,strokeDasharray:y,style:O},j))})))}h.propTypes={tickValues:o().array,height:o().number.isRequired}},53282:function(t,e,n){"use strict";e.Z=function(t){var e=t.from,n=void 0===e?{x:0,y:0}:e,i=t.to,u=void 0===i?{x:1,y:1}:i,l=t.fill,s=void 0===l?"transparent":l,c=t.className,f=t.innerRef,d=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["from","to","fill","className","innerRef"]),v=n.x===u.x||n.y===u.y;return r.default.createElement("line",a({ref:f,className:(0,o.default)("visx-line",c),x1:n.x,y1:n.y,x2:u.x,y2:u.y,fill:s,shapeRendering:v?"crispEdges":"auto"},d))};var r=i(n(67294)),o=i(n(94184));function i(t){return t&&t.__esModule?t:{default:t}}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}},30475:function(t,e,n){"use strict";function r(t){return t}function o(t,...e){return i(t,r,r,e)}function i(t,e,n,r){return function t(o,i){if(i>=r.length)return n(o);const a=new Map,u=r[i++];let l=-1;for(const e of o){const t=u(e,++l,o),n=a.get(t);n?n.push(e):a.set(t,[e])}for(const[e,n]of a)a.set(e,t(n,i));return e(a)}(t,0)}n.d(e,{ZP:function(){return o}})},98823:function(t,e,n){"use strict";function r(t,e){let n;if(void 0===e)for(const r of t)null!=r&&(n<r||void 0===n&&r>=r)&&(n=r);else{let r=-1;for(let o of t)null!=(o=e(o,++r,t))&&(n<o||void 0===n&&o>=o)&&(n=o)}return n}n.d(e,{Z:function(){return r}})},39693:function(t){t.exports=function(t){for(var e=-1,n=null==t?0:t.length,r=0,o=[];++e<n;){var i=t[e];i&&(o[r++]=i)}return o}},27434:function(t,e,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=(0,r.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,i=t.size,l=void 0===i?24:i,s=u(t,["color","size"]);return r.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polyline",{points:"6 9 12 15 18 9"}))}));l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="ChevronDown",e.Z=l},82802:function(t,e,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=(0,r.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,i=t.size,l=void 0===i?24:i,s=u(t,["color","size"]);return r.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="ChevronUp",e.Z=l},50794:function(t,e,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=(0,r.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,i=t.size,l=void 0===i?24:i,s=u(t,["color","size"]);return r.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),r.createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))}));l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="Pause",e.Z=l},45720:function(t,e,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=(0,r.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,i=t.size,l=void 0===i?24:i,s=u(t,["color","size"]);return r.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))}));l.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},l.displayName="Play",e.Z=l}}]);