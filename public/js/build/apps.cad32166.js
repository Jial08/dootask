import{M as p}from"./MicroApps.3d31379b.js";import{n as m}from"./app.4a346a76.js";import"./vue.296078bd.js";import"./@babel.43d8d0a5.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./DialogWrapper.04a87925.js";import"./le5le-store.d4b5b622.js";import"./longpress.6c9d7403.js";import"./index.08adcef5.js";import"./quill-hi.5f983100.js";import"./parchment.d5c5924e.js";import"./quill-delta.9c20d28a.js";import"./fast-diff.f17881f3.js";import"./lodash.clonedeep.c11ef6f7.js";import"./lodash.isequal.1abdaf11.js";import"./eventemitter3.78b735ad.js";import"./lodash-es.df04b444.js";import"./quill-mention-hi.b64d1fea.js";import"./view-design-hi.609f8897.js";import"./vue-virtual-scroll-list-hi.7485c393.js";import"./ImgUpload.6b7490da.js";import"./details.208191c0.js";import"./jquery.293d38cb.js";import"./dayjs.9859f5d3.js";import"./localforage.9af36afe.js";import"./markdown-it.6846e2b0.js";import"./entities.797c3e49.js";import"./uc.micro.700527ef.js";import"./mdurl.95c1032c.js";import"./linkify-it.96515e28.js";import"./punycode.50f384b0.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.64308959.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.ad7135d3.js";import"./clipboard.3f21bed6.js";import"./vuedraggable.6ea348a4.js";import"./sortablejs.982d79d6.js";import"./vue-resize-observer.e788af6d.js";import"./element-sea.c283d284.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.37526d89.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e7e40052.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./tip.ac2cfb27.js";var e=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"electron-single-micro-apps"},[!t.loading&&t.$route.name=="single-apps"?i("MicroApps",{attrs:{url:t.appUrl,path:t.path}}):t._e()],1)},a=[];const n={components:{MicroApps:p},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="single-apps"?this.$nextTick(()=>{this.loading=!1,this.appUrl={}.VITE_OKR_WEB_URL||$A.mainUrl("apps/okr"),this.path=this.$route.query.path||""}):this.appUrl=""},immediate:!0}}},o={};var s=m(n,e,a,!1,l,null,null,null);function l(t){for(let r in o)this[r]=o[r]}var lt=function(){return s.exports}();export{lt as default};
