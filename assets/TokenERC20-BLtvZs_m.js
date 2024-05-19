const e=[{type:"constructor",inputs:[],stateMutability:"nonpayable"},{type:"function",name:"CLOCK_MODE",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"DEFAULT_ADMIN_ROLE",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"DOMAIN_SEPARATOR",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"allowance",inputs:[{name:"owner",type:"address",internalType:"address"},{name:"spender",type:"address",internalType:"address"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"approve",inputs:[{name:"spender",type:"address",internalType:"address"},{name:"amount",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"nonpayable"},{type:"function",name:"balanceOf",inputs:[{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"burn",inputs:[{name:"amount",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"burnFrom",inputs:[{name:"account",type:"address",internalType:"address"},{name:"amount",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"checkpoints",inputs:[{name:"account",type:"address",internalType:"address"},{name:"pos",type:"uint32",internalType:"uint32"}],outputs:[{name:"",type:"tuple",internalType:"struct ERC20VotesUpgradeable.Checkpoint",components:[{name:"fromBlock",type:"uint32",internalType:"uint32"},{name:"votes",type:"uint224",internalType:"uint224"}]}],stateMutability:"view"},{type:"function",name:"clock",inputs:[],outputs:[{name:"",type:"uint48",internalType:"uint48"}],stateMutability:"view"},{type:"function",name:"contractType",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"pure"},{type:"function",name:"contractURI",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"contractVersion",inputs:[],outputs:[{name:"",type:"uint8",internalType:"uint8"}],stateMutability:"pure"},{type:"function",name:"decimals",inputs:[],outputs:[{name:"",type:"uint8",internalType:"uint8"}],stateMutability:"view"},{type:"function",name:"decreaseAllowance",inputs:[{name:"spender",type:"address",internalType:"address"},{name:"subtractedValue",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"nonpayable"},{type:"function",name:"delegate",inputs:[{name:"delegatee",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"delegateBySig",inputs:[{name:"delegatee",type:"address",internalType:"address"},{name:"nonce",type:"uint256",internalType:"uint256"},{name:"expiry",type:"uint256",internalType:"uint256"},{name:"v",type:"uint8",internalType:"uint8"},{name:"r",type:"bytes32",internalType:"bytes32"},{name:"s",type:"bytes32",internalType:"bytes32"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"delegates",inputs:[{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"eip712Domain",inputs:[],outputs:[{name:"fields",type:"bytes1",internalType:"bytes1"},{name:"name",type:"string",internalType:"string"},{name:"version",type:"string",internalType:"string"},{name:"chainId",type:"uint256",internalType:"uint256"},{name:"verifyingContract",type:"address",internalType:"address"},{name:"salt",type:"bytes32",internalType:"bytes32"},{name:"extensions",type:"uint256[]",internalType:"uint256[]"}],stateMutability:"view"},{type:"function",name:"getPastTotalSupply",inputs:[{name:"timepoint",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getPastVotes",inputs:[{name:"account",type:"address",internalType:"address"},{name:"timepoint",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getPlatformFeeInfo",inputs:[],outputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"uint16",internalType:"uint16"}],stateMutability:"view"},{type:"function",name:"getRoleAdmin",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"getRoleMember",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"index",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"getRoleMemberCount",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getVotes",inputs:[{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"grantRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"hasRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"increaseAllowance",inputs:[{name:"spender",type:"address",internalType:"address"},{name:"addedValue",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"nonpayable"},{type:"function",name:"initialize",inputs:[{name:"_defaultAdmin",type:"address",internalType:"address"},{name:"_name",type:"string",internalType:"string"},{name:"_symbol",type:"string",internalType:"string"},{name:"_contractURI",type:"string",internalType:"string"},{name:"_trustedForwarders",type:"address[]",internalType:"address[]"},{name:"_primarySaleRecipient",type:"address",internalType:"address"},{name:"_platformFeeRecipient",type:"address",internalType:"address"},{name:"_platformFeeBps",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"isTrustedForwarder",inputs:[{name:"forwarder",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"mintTo",inputs:[{name:"to",type:"address",internalType:"address"},{name:"amount",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"mintWithSignature",inputs:[{name:"_req",type:"tuple",internalType:"struct ITokenERC20.MintRequest",components:[{name:"to",type:"address",internalType:"address"},{name:"primarySaleRecipient",type:"address",internalType:"address"},{name:"quantity",type:"uint256",internalType:"uint256"},{name:"price",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"validityStartTimestamp",type:"uint128",internalType:"uint128"},{name:"validityEndTimestamp",type:"uint128",internalType:"uint128"},{name:"uid",type:"bytes32",internalType:"bytes32"}]},{name:"_signature",type:"bytes",internalType:"bytes"}],outputs:[],stateMutability:"payable"},{type:"function",name:"multicall",inputs:[{name:"data",type:"bytes[]",internalType:"bytes[]"}],outputs:[{name:"results",type:"bytes[]",internalType:"bytes[]"}],stateMutability:"nonpayable"},{type:"function",name:"name",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"nonces",inputs:[{name:"owner",type:"address",internalType:"address"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"numCheckpoints",inputs:[{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"uint32",internalType:"uint32"}],stateMutability:"view"},{type:"function",name:"permit",inputs:[{name:"owner",type:"address",internalType:"address"},{name:"spender",type:"address",internalType:"address"},{name:"value",type:"uint256",internalType:"uint256"},{name:"deadline",type:"uint256",internalType:"uint256"},{name:"v",type:"uint8",internalType:"uint8"},{name:"r",type:"bytes32",internalType:"bytes32"},{name:"s",type:"bytes32",internalType:"bytes32"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"primarySaleRecipient",inputs:[],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"renounceRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"revokeRole",inputs:[{name:"role",type:"bytes32",internalType:"bytes32"},{name:"account",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setContractURI",inputs:[{name:"_uri",type:"string",internalType:"string"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setPlatformFeeInfo",inputs:[{name:"_platformFeeRecipient",type:"address",internalType:"address"},{name:"_platformFeeBps",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setPrimarySaleRecipient",inputs:[{name:"_saleRecipient",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"supportsInterface",inputs:[{name:"interfaceId",type:"bytes4",internalType:"bytes4"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"symbol",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"totalSupply",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"transfer",inputs:[{name:"to",type:"address",internalType:"address"},{name:"amount",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"nonpayable"},{type:"function",name:"transferFrom",inputs:[{name:"from",type:"address",internalType:"address"},{name:"to",type:"address",internalType:"address"},{name:"amount",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"nonpayable"},{type:"function",name:"verify",inputs:[{name:"_req",type:"tuple",internalType:"struct ITokenERC20.MintRequest",components:[{name:"to",type:"address",internalType:"address"},{name:"primarySaleRecipient",type:"address",internalType:"address"},{name:"quantity",type:"uint256",internalType:"uint256"},{name:"price",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"validityStartTimestamp",type:"uint128",internalType:"uint128"},{name:"validityEndTimestamp",type:"uint128",internalType:"uint128"},{name:"uid",type:"bytes32",internalType:"bytes32"}]},{name:"_signature",type:"bytes",internalType:"bytes"}],outputs:[{name:"",type:"bool",internalType:"bool"},{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"event",name:"Approval",inputs:[{name:"owner",type:"address",indexed:!0,internalType:"address"},{name:"spender",type:"address",indexed:!0,internalType:"address"},{name:"value",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"DelegateChanged",inputs:[{name:"delegator",type:"address",indexed:!0,internalType:"address"},{name:"fromDelegate",type:"address",indexed:!0,internalType:"address"},{name:"toDelegate",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"DelegateVotesChanged",inputs:[{name:"delegate",type:"address",indexed:!0,internalType:"address"},{name:"previousBalance",type:"uint256",indexed:!1,internalType:"uint256"},{name:"newBalance",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"EIP712DomainChanged",inputs:[],anonymous:!1},{type:"event",name:"FlatPlatformFeeUpdated",inputs:[{name:"platformFeeRecipient",type:"address",indexed:!1,internalType:"address"},{name:"flatFee",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"Initialized",inputs:[{name:"version",type:"uint8",indexed:!1,internalType:"uint8"}],anonymous:!1},{type:"event",name:"PlatformFeeInfoUpdated",inputs:[{name:"platformFeeRecipient",type:"address",indexed:!0,internalType:"address"},{name:"platformFeeBps",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"PlatformFeeTypeUpdated",inputs:[{name:"feeType",type:"uint8",indexed:!1,internalType:"enum IPlatformFee.PlatformFeeType"}],anonymous:!1},{type:"event",name:"PrimarySaleRecipientUpdated",inputs:[{name:"recipient",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"RoleAdminChanged",inputs:[{name:"role",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"previousAdminRole",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"newAdminRole",type:"bytes32",indexed:!0,internalType:"bytes32"}],anonymous:!1},{type:"event",name:"RoleGranted",inputs:[{name:"role",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"account",type:"address",indexed:!0,internalType:"address"},{name:"sender",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"RoleRevoked",inputs:[{name:"role",type:"bytes32",indexed:!0,internalType:"bytes32"},{name:"account",type:"address",indexed:!0,internalType:"address"},{name:"sender",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"TokensMinted",inputs:[{name:"mintedTo",type:"address",indexed:!0,internalType:"address"},{name:"quantityMinted",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"TokensMintedWithSignature",inputs:[{name:"signer",type:"address",indexed:!0,internalType:"address"},{name:"mintedTo",type:"address",indexed:!0,internalType:"address"},{name:"mintRequest",type:"tuple",indexed:!1,internalType:"struct ITokenERC20.MintRequest",components:[{name:"to",type:"address",internalType:"address"},{name:"primarySaleRecipient",type:"address",internalType:"address"},{name:"quantity",type:"uint256",internalType:"uint256"},{name:"price",type:"uint256",internalType:"uint256"},{name:"currency",type:"address",internalType:"address"},{name:"validityStartTimestamp",type:"uint128",internalType:"uint128"},{name:"validityEndTimestamp",type:"uint128",internalType:"uint128"},{name:"uid",type:"bytes32",internalType:"bytes32"}]}],anonymous:!1},{type:"event",name:"Transfer",inputs:[{name:"from",type:"address",indexed:!0,internalType:"address"},{name:"to",type:"address",indexed:!0,internalType:"address"},{name:"value",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"error",name:"CurrencyTransferLibFailedNativeTransfer",inputs:[{name:"recipient",type:"address",internalType:"address"},{name:"value",type:"uint256",internalType:"uint256"}]}];export{e as default};
