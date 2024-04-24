import { _ as __nuxt_component_0$1 } from './nuxt-img-CZpnFtB-.mjs';
import { defineComponent, useSSRContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './index-6rodBP2N.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'pinia-plugin-persistedstate';
import 'nprogress';

const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative grid md:grid-cols-2 grid-cols-1 md:gap-x-40 bg-contain bg-no-repeat bg-center overflow-hidden",
    style: { "background-image": "url('/img/home/bnr-bg.png')" }
  }, _attrs))} data-v-c8ea9507><div class="flex flex-col md:items-end items-center justify-center md:h-[694px] z-10" data-v-c8ea9507><div data-v-c8ea9507><div class="md:text-6xl text-4xl font-bold" data-v-c8ea9507>${ssrInterpolate(_ctx.$t("home.trust"))}</div><div class="md:text-6xl text-4xl font-bold text-bor tracking-tighter mt-2" data-v-c8ea9507>Collides with</div><div class="md:text-6xl text-4xl font-bold mt-2" data-v-c8ea9507>Efficiency</div><div class="text-[#ccc] mt-8" data-v-c8ea9507>Powering possibilities, seamlessly</div><button class="bnr-btn cursor-pointer mt-12 mb-4 bg-cover bg-no-repeat bg-center text-black hover:text-slate-700 text-xl font-bold w-[349px] h-[82px]" style="${ssrRenderStyle({ "background-image": "url('/img/home/btn-ng.png')" })}" data-v-c8ea9507>Bridge to Pangu\u2019s Axe</button></div></div><div class="flex flex-col justify-center z-10" data-v-c8ea9507><div class="flex" data-v-c8ea9507><div data-v-c8ea9507>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/bnr-coin1.png",
    class: "w-[233px] h-auto coin1"
  }, null, _parent));
  _push(`</div><div class="ml-16 mt-12" data-v-c8ea9507>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/bnr-coin2.png",
    class: "w-[80px] h-auto coin2"
  }, null, _parent));
  _push(`</div></div><div class="flex pl-24" data-v-c8ea9507><div class="mt-16" data-v-c8ea9507>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/bnr-coin3.png",
    class: "w-[74px] h-auto coin3"
  }, null, _parent));
  _push(`</div><div class="ml-28" data-v-c8ea9507>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/bnr-coin4.png",
    class: "w-[178px] h-auto coin4"
  }, null, _parent));
  _push(`</div></div></div><div class="lines" data-v-c8ea9507><!--[-->`);
  ssrRenderList(8, (i) => {
    _push(`<div data-v-c8ea9507></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c8ea9507"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto 2xl:w-[70%] md:w-[80%] w-[90%] py-12 pt-24 overflow-hidden" }, _attrs))} data-v-9e05666d><div class="md:text-4xl text-2xl font-bold mb-8" data-v-9e05666d>${ssrInterpolate(_ctx.$t("home.howItWorks"))}</div><div class="bg-[#161616] md:p-14 p-4 grid md:grid-cols-3 grid-cols-1 md:gap-12" data-v-9e05666d>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/one.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-9e05666d><div class="wtit" data-v-9e05666d>Bridging</div><div class="text-base mt-6 md:mb-4 mb-8" data-v-9e05666d>Users transfer BTC to a bridge-controlled address, triggering the protocol to lock equal sBTC value on Solana, ensuring secure and transparent transactions via decentralized verification and smart contracts.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-9e05666d><div class="wtit" data-v-9e05666d>BTC Usage and Transfer</div><div class="text-base mt-6 md:mb-4 mb-8" data-v-9e05666d>After bridging and converting BTC to sBTC, users gain seamless access to utilize sBTC across the Solana ecosystem, enabling transactions, DeFi investments, NFT acquisitions, and gaming participation.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/two.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/three.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-9e05666d><div class="wtit" data-v-9e05666d>BTC Redemption &amp; Ownership</div><div class="text-base mt-6 md:mb-4 mb-8" data-v-9e05666d>To revert sBTC to BTC, users redeem through the bridging protocol, sending sBTC to be burned or locked, releasing equivalent BTC to their chosen Bitcoin address.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-9e05666d><div class="wtit" data-v-9e05666d>Decentralized Bridging Protocol</div><div class="text-base mt-6 md:mb-4 mb-8" data-v-9e05666d>Securely monitors and verifies cross-chain asset transfers, ensuring one-to-one correspondence between BTC and sBTC.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/four.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/five.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-9e05666d><div class="wtit" data-v-9e05666d>Smart Contract</div><div class="text-base mt-6 md:mb-4 mb-8" data-v-9e05666d>Executes asset locking, release, and token issuance on Solana.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-9e05666d><div class="wtit" data-v-9e05666d>Node Validation</div><div class="text-base mt-6 md:mb-4 mb-8" data-v-9e05666d>Monitors and confirms the authenticity and validity of cross-chain transactions, ensuring decentralized operations and security.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/six.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/howItWorks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9e05666d"]]);
const _sfc_main$2 = {
  __name: "ourInvestors",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(false);
    const activeNum = ref(null);
    const left1 = ref(0);
    const left2 = ref(0);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ovt" }, _attrs))} data-v-918ac36e><div class="m-auto md:w-[70%] w-[90%] md:pt-24 pt-20" data-v-918ac36e><div class="md:text-4xl text-2xl font-bold" data-v-918ac36e>Our Investors</div></div><section class="ovt-sup md:pt-20 pt-10" data-v-918ac36e><div class="ovt-sup-inner" style="${ssrRenderStyle({ transform: "translateX(" + unref(left1) + "px)" })}" data-v-918ac36e><!--[-->`);
      ssrRenderList(10, (i) => {
        _push(`<div class="ovt-item flex items-center justify-center" data-v-918ac36e>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          style: unref(activeNum) === i ? null : { display: "none" },
          src: `/img/home/icos/ico${i}_active.png`
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtImg, {
          style: unref(activeNum) !== i || unref(activeNum) === null ? null : { display: "none" },
          src: `/img/home/icos/ico${i}.png`
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="ovt-sup-inner" style="${ssrRenderStyle({ transform: "translateX(" + unref(left2) + "px)" })}" data-v-918ac36e><!--[-->`);
      ssrRenderList(10, (i) => {
        _push(`<div class="ovt-item flex items-center justify-center" data-v-918ac36e>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          style: unref(activeNum) === i ? null : { display: "none" },
          src: `/img/home/icos/ico${i}_active.png`
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtImg, {
          style: unref(activeNum) !== i || unref(activeNum) === null ? null : { display: "none" },
          src: `/img/home/icos/ico${i}.png`
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ourInvestors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-918ac36e"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[70%] w-[90%] md:pt-36 pt-20 md:pb-40 pb-14" }, _attrs))} data-v-2a939c98><div class="md:text-4xl text-2xl font-bold mb-4" data-v-2a939c98>Building Disney World On Chain Made Possible</div><div class="mt-8 eco-item bottom-scroll-animation" data-v-2a939c98><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-logo1.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit" data-v-2a939c98>Daydreams Reshape the New World</div><div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32" data-v-2a939c98><div class="text-2xl" data-v-2a939c98>DDream.LAND</div><div class="text-[#cccccc] text-base mt-4" data-v-2a939c98>DDream.Land is a blockchain-powered platform that enables game creation from idea to reality through co-creation, connects original game creators with DLC/Mod creators for collaborative distribution, and supports game tokenization and profit sharing.</div></div></div><div class="mt-8 eco-item bottom-scroll-animation r" data-v-2a939c98><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-logo2.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:mr-48 px-6 py-7 tit md:text-right" data-v-2a939c98>The Era of Digital Symbiosis</div><div class="con py-8 md:pl-12 md:mr-[75px] md:pr-32" data-v-2a939c98><div class="flex items-center" data-v-2a939c98><div class="text-2xl flex-1" data-v-2a939c98>Nuwa Labs</div><div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico1.png" }, null, _parent));
  _push(`</div><div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico2.png" }, null, _parent));
  _push(`</div><div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico3.png" }, null, _parent));
  _push(`</div><div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico4.png" }, null, _parent));
  _push(`</div></div><div class="text-[#cccccc] text-base mt-4" data-v-2a939c98>Nuwa Labs is building the abstraction layer of digital life technologies with the mission of enabling digital beings to thrive everywhere. To achieve such a mission, Nuwa Labs is launching 3 products: HomoDeus Protocol, Nuwa Creation Platform, role.ai, and Nuwa Game Engine.</div></div></div><div class="mt-12 eco-item bottom-scroll-animation" data-v-2a939c98><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-2a939c98>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-logo1.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit" data-v-2a939c98>BTC to Solana, Seamlessly</div><div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32" data-v-2a939c98><div class="text-2xl" data-v-2a939c98>Axe</div><div class="text-[#cccccc] text-base mt-4" data-v-2a939c98>Axe stands as the pioneering DeFi solution within the Pangu Network ecosystem, designed to revolutionize the seamless transfer of BTC liquidity onto the Solana blockchain. With its innovative architecture and robust infrastructure, Axe not only facilitates the smooth transition of assets but also fosters a vibrant ecosystem where users can explore new opportunities and harness the full potential of cross-chain interoperability.</div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ecosystem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a939c98"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (productCategory) => {
        const baseTitle = "pangu network";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBanner = __nuxt_component_0;
      const _component_HomeHowItWorks = __nuxt_component_1;
      const _component_HomeOurInvestors = __nuxt_component_2;
      const _component_HomeEcosystem = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeHowItWorks, { id: "howItWorks" }, null, _parent));
      _push(ssrRenderComponent(_component_HomeOurInvestors, { id: "ourInvestors" }, null, _parent));
      _push(ssrRenderComponent(_component_HomeEcosystem, { id: "ecosystem" }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVG65RcQ.mjs.map
