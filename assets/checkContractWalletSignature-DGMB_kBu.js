import{i as a}from"./isValidSignature-HACAXRX1.js";import{q as t}from"./index-BMecEZjk.js";import{h as e}from"./hashMessage-DgRQ4Fra.js";const s="0x1626ba7e";async function g(r){if(!t(r.signature))throw new Error("The signature must be a valid hex string.");return await a({contract:r.contract,hash:e(r.message),signature:r.signature})===s}export{g as checkContractWalletSignature};
