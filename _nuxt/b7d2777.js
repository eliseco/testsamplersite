(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5],{312:function(e,t,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("02b2bfc4",content,!0,{sourceMap:!1})},313:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("554bb409",content,!0,{sourceMap:!1})},314:function(e,t,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(93).default)("62b0c03a",content,!0,{sourceMap:!1})},315:function(e,t,n){"use strict";n(312)},316:function(e,t,n){var l=n(92)(!1);l.push([e.i,".single-wrapper[data-v-773190be]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.image-wrapper[data-v-773190be]{width:100%;height:100%;background-size:cover;background-position:60%}",""]),e.exports=l},317:function(e,t,n){"use strict";n.r(t);n(47),n(56);var l={name:"SampleNode",props:{single:{type:Object,required:!1,default:null},set:{type:Object,required:!1,default:null},selectable:{type:Boolean,required:!1,default:!0}},computed:{selected:function(){return!!this.selectable&&(this.single?this.$store.state.sampleMaker.selectedSingleIds.includes(this.single.id):this.$store.state.sampleMaker.selectedSetIds.includes(this.set.id))},id:function(){return this.single?this.padId(this.single.id):"set"+this.padId(this.set.id)},caption:function(){return this.single?this.single.caption:this.set.caption},parents:function(){return this.single?this.$store.getters["samples/getParentsBySingleId"](this.single.id):this.$store.getters["samples/getParentsBySetId"](this.set.id)}},methods:{toggleSample:function(){if(this.selectable){var e=this.single?"single":"set",t=this.single?this.single.id:this.set.id;this.$emit("toggleSample",{type:e,sid:t})}},padId:function(e){var s="000"+e;return s.substring(s.length-4)}}},r=(n(321),n(41)),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sample",class:{selected:e.selected,small:!e.selectable},on:{click:e.toggleSample}},[t("div",{staticClass:"content"},[e.single?t("Single",{attrs:{content:e.single}}):e._e(),e._v(" "),e.set?t("Set",{attrs:{content:e.set}}):e._e()],1),e._v(" "),t("div",{staticClass:"info"},[e.set?t("NuxtLink",{attrs:{to:"/sets/"+e.set.id}},[e._v(" view set ")]):e._e(),e._v(" "),t("div",{staticClass:"title"},[e._v(e._s(e.caption))]),e._v(" "),e.selectable?t("div",{staticClass:"parents"},e._l(e.parents,(function(n){return t("span",{key:n.id,staticClass:"parent"},[e._v("\n        "+e._s(n.caption)+"\n      ")])})),0):e._e()],1)])}),[],!1,null,"44f38f62",null);t.default=component.exports;installComponents(component,{Single:n(318).default,Set:n(325).default})},318:function(e,t,n){"use strict";n.r(t);var l={name:"SingleSample",props:{content:{type:Object,required:!0}}},r=(n(315),n(41)),component=Object(r.a)(l,(function(){var e=this._self._c;return e("div",{staticClass:"single-wrapper"},[e("div",{staticClass:"image-wrapper",style:{backgroundImage:"url(".concat(this.content.image,")")}})])}),[],!1,null,"773190be",null);t.default=component.exports},321:function(e,t,n){"use strict";n(313)},322:function(e,t,n){var l=n(92)(!1);l.push([e.i,".sample[data-v-44f38f62]{height:300px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid #000;border-radius:var(--border-radius);padding:var(--padding);font-weight:500;cursor:pointer}.content[data-v-44f38f62]{width:100%;height:100%;overflow-y:auto}.small[data-v-44f38f62]{cursor:inherit;height:200px;font-size:.75em;font-weight:400}.selected[data-v-44f38f62]{outline:2px solid var(--border-color)}.info[data-v-44f38f62]{padding:var(--padding) 0;height:3em}.title[data-v-44f38f62]{width:100%;display:flex;flex-direction:row;justify-content:space-between}.parents[data-v-44f38f62]{font-size:.5em;color:#666;display:flex;grid-gap:2em;gap:2em;overflow-x:auto}.parent[data-v-44f38f62]{flex-shrink:0}",""]),e.exports=l},323:function(e,t,n){"use strict";n(314)},324:function(e,t,n){var l=n(92)(!1);l.push([e.i,".set-wrapper[data-v-493b4bb8]{height:100%;display:flex;flex-direction:column;justify-content:space-between}.sample-stack[data-v-493b4bb8]{width:100%;overflow-y:auto;align-content:flex-start;display:grid;grid-gap:var(--padding);gap:var(--padding);grid-template-columns:repeat(auto-fill,minmax(min(6rem,100%),1fr))}",""]),e.exports=l},325:function(e,t,n){"use strict";n.r(t);n(55);var l={name:"SampleSet",props:{content:{type:Object,required:!0}},data:function(){return{}},computed:{singles:function(){var e,t=this;return null===(e=this.content.singleIds)||void 0===e?void 0:e.map((function(e){return t.$store.getters["samples/getSingleById"](e)}))},sets:function(){var e,t=this;return null===(e=this.content.setIds)||void 0===e?void 0:e.map((function(e){return t.$store.getters["samples/getSetById"](e)}))}},methods:{}},r=(n(323),n(41)),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"set-wrapper"},[t("div",{staticClass:"sample-stack"},[e._l(e.singles,(function(e){return t("Sample",{key:"single"+e.id,attrs:{single:e,selectable:!1}})})),e._v(" "),e._l(e.sets,(function(e){return t("Sample",{key:"set"+e.id,attrs:{set:e,selectable:!1}})}))],2)])}),[],!1,null,"493b4bb8",null);t.default=component.exports;installComponents(component,{Sample:n(317).default})}}]);