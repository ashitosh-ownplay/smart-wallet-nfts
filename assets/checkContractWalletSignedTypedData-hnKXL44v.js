import{i as t}from"./isValidSignature-BfHLmiBp.js";import{q as r,f4 as e}from"./index-Dz1DJj-F.js";const s="0x1626ba7e";async function u(a){if(!r(a.signature))throw new Error("The signature must be a valid hex string.");return await t({contract:a.contract,hash:e(a.data),signature:a.signature})===s}export{u as checkContractWalletSignedTypedData};