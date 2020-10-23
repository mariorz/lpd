goog.provide('lpdashboard.ethereum');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.ethereum.web3provider = module$node_modules$ethers$dist$ethers_umd.providers.Web3Provider;
lpdashboard.ethereum.provider = (new lpdashboard.ethereum.web3provider(window.ethereum));
lpdashboard.ethereum.sashimi_abi = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function poolLength() view returns (uint256)","function poolInfo(uint256 _pid) view returns (address, uint256, uint256, uint256)","function userInfo(uint256 _pid, address owner) view returns (uint256, uint256)","function decimals() view returns (uint8)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
lpdashboard.ethereum.lpbar_abi = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function name() view returns (string)","function lp() view returns (address)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function totalLp() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function lpBalance(address owner) view returns (uint256)","function decimals() view returns (uint8)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
lpdashboard.ethereum.sr_abi = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function earned(address _account)  view returns (uint256)","function rewardsToken()  view returns (address)","function cream() view returns (address)","function sushi() view returns (address)","function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function decimals() view returns (uint8)","function token0() view returns (address)","function token1() view returns (address)","function approve(address spender, uint256 allowance) view returns (bool)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
lpdashboard.ethereum.erc20_abi = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function name() view returns (string)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function decimals() view returns (uint8)","function token0() view returns (address)","function token1() view returns (address)","function approve(address spender, uint256 allowance) view returns (bool)","function transfer(address to, uint amount) returns (boolean)","function deposit(uint256 pid, uint256 amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)"], null);
lpdashboard.ethereum.event_detector_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)","event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)","event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)","event Staked(address indexed user, uint256 amount, address payer)"], null);
lpdashboard.ethereum.event_w_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)"], null);
lpdashboard.ethereum.univ2_abi = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Mint(address indexed sender, uint amount0, uint amount1)","event Burn(address indexed sender, uint amount0, uint amount1, address indexed to)"], null);
lpdashboard.ethereum.uni_detector_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Staked(address indexed user, uint256 amount)"], null);
lpdashboard.ethereum.sr_deposit_abi = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uint256","uint256"], null);
lpdashboard.ethereum.debug_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uint256"], null);
lpdashboard.ethereum.cheff_deposit_abi = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["address","uint256","uint256"], null);
lpdashboard.ethereum.erc20_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.erc20_abi)));
lpdashboard.ethereum.sashimi_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.erc20_abi)));
lpdashboard.ethereum.detector_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.event_detector_abi)));
lpdashboard.ethereum.univ2_iface = (new module$node_modules$ethers$dist$ethers_umd.utils.Interface(cljs.core.clj__GT_js(lpdashboard.ethereum.univ2_abi)));
lpdashboard.ethereum.make_erc20 = (function lpdashboard$ethereum$make_erc20(address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(lpdashboard.ethereum.erc20_abi),lpdashboard.ethereum.provider));
});
lpdashboard.ethereum.make_contract = (function lpdashboard$ethereum$make_contract(abi,address){
return (new module$node_modules$ethers$dist$ethers_umd.Contract(address,cljs.core.clj__GT_js(abi),lpdashboard.ethereum.provider));
});
lpdashboard.ethereum._LT_erc20_info = (function lpdashboard$ethereum$_LT_erc20_info(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37081){
var state_val_37082 = (state_37081[(1)]);
if((state_val_37082 === (7))){
var inst_37052 = (state_37081[(7)]);
var inst_37059 = (function(){throw inst_37052})();
var state_37081__$1 = state_37081;
var statearr_37083_37480 = state_37081__$1;
(statearr_37083_37480[(2)] = inst_37059);

(statearr_37083_37480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (1))){
var inst_37034 = (state_37081[(8)]);
var inst_37034__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,address);
var inst_37035 = inst_37034__$1.decimals();
var inst_37036 = cljs.core.async.interop.p__GT_c(inst_37035);
var state_37081__$1 = (function (){var statearr_37084 = state_37081;
(statearr_37084[(8)] = inst_37034__$1);

return statearr_37084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37081__$1,(2),inst_37036);
} else {
if((state_val_37082 === (4))){
var inst_37038 = (state_37081[(9)]);
var state_37081__$1 = state_37081;
var statearr_37085_37481 = state_37081__$1;
(statearr_37085_37481[(2)] = inst_37038);

(statearr_37085_37481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (13))){
var inst_37062 = (state_37081[(10)]);
var inst_37048 = (state_37081[(11)]);
var inst_37076 = (state_37081[(2)]);
var inst_37077 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_37078 = [address,inst_37062,inst_37076,inst_37048];
var inst_37079 = cljs.core.PersistentHashMap.fromArrays(inst_37077,inst_37078);
var state_37081__$1 = state_37081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37081__$1,inst_37079);
} else {
if((state_val_37082 === (6))){
var inst_37052 = (state_37081[(7)]);
var inst_37052__$1 = (state_37081[(2)]);
var inst_37053 = (inst_37052__$1 instanceof cljs.core.ExceptionInfo);
var inst_37054 = cljs.core.ex_data(inst_37052__$1);
var inst_37055 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37054);
var inst_37056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37055,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37057 = ((inst_37053) && (inst_37056));
var state_37081__$1 = (function (){var statearr_37086 = state_37081;
(statearr_37086[(7)] = inst_37052__$1);

return statearr_37086;
})();
if(cljs.core.truth_(inst_37057)){
var statearr_37087_37482 = state_37081__$1;
(statearr_37087_37482[(1)] = (7));

} else {
var statearr_37088_37483 = state_37081__$1;
(statearr_37088_37483[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (3))){
var inst_37038 = (state_37081[(9)]);
var inst_37045 = (function(){throw inst_37038})();
var state_37081__$1 = state_37081;
var statearr_37089_37484 = state_37081__$1;
(statearr_37089_37484[(2)] = inst_37045);

(statearr_37089_37484[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (12))){
var inst_37066 = (state_37081[(12)]);
var state_37081__$1 = state_37081;
var statearr_37090_37486 = state_37081__$1;
(statearr_37090_37486[(2)] = inst_37066);

(statearr_37090_37486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (2))){
var inst_37038 = (state_37081[(9)]);
var inst_37038__$1 = (state_37081[(2)]);
var inst_37039 = (inst_37038__$1 instanceof cljs.core.ExceptionInfo);
var inst_37040 = cljs.core.ex_data(inst_37038__$1);
var inst_37041 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37040);
var inst_37042 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37041,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37043 = ((inst_37039) && (inst_37042));
var state_37081__$1 = (function (){var statearr_37091 = state_37081;
(statearr_37091[(9)] = inst_37038__$1);

return statearr_37091;
})();
if(cljs.core.truth_(inst_37043)){
var statearr_37092_37507 = state_37081__$1;
(statearr_37092_37507[(1)] = (3));

} else {
var statearr_37093_37509 = state_37081__$1;
(statearr_37093_37509[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (11))){
var inst_37066 = (state_37081[(12)]);
var inst_37073 = (function(){throw inst_37066})();
var state_37081__$1 = state_37081;
var statearr_37094_37510 = state_37081__$1;
(statearr_37094_37510[(2)] = inst_37073);

(statearr_37094_37510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (9))){
var inst_37034 = (state_37081[(8)]);
var inst_37062 = (state_37081[(2)]);
var inst_37063 = inst_37034.symbol();
var inst_37064 = cljs.core.async.interop.p__GT_c(inst_37063);
var state_37081__$1 = (function (){var statearr_37095 = state_37081;
(statearr_37095[(10)] = inst_37062);

return statearr_37095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37081__$1,(10),inst_37064);
} else {
if((state_val_37082 === (5))){
var inst_37034 = (state_37081[(8)]);
var inst_37048 = (state_37081[(2)]);
var inst_37049 = inst_37034.name();
var inst_37050 = cljs.core.async.interop.p__GT_c(inst_37049);
var state_37081__$1 = (function (){var statearr_37096 = state_37081;
(statearr_37096[(11)] = inst_37048);

return statearr_37096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37081__$1,(6),inst_37050);
} else {
if((state_val_37082 === (10))){
var inst_37066 = (state_37081[(12)]);
var inst_37066__$1 = (state_37081[(2)]);
var inst_37067 = (inst_37066__$1 instanceof cljs.core.ExceptionInfo);
var inst_37068 = cljs.core.ex_data(inst_37066__$1);
var inst_37069 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37068);
var inst_37070 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37069,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37071 = ((inst_37067) && (inst_37070));
var state_37081__$1 = (function (){var statearr_37097 = state_37081;
(statearr_37097[(12)] = inst_37066__$1);

return statearr_37097;
})();
if(cljs.core.truth_(inst_37071)){
var statearr_37098_37518 = state_37081__$1;
(statearr_37098_37518[(1)] = (11));

} else {
var statearr_37099_37519 = state_37081__$1;
(statearr_37099_37519[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (8))){
var inst_37052 = (state_37081[(7)]);
var state_37081__$1 = state_37081;
var statearr_37100_37520 = state_37081__$1;
(statearr_37100_37520[(2)] = inst_37052);

(statearr_37100_37520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0 = (function (){
var statearr_37101 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37101[(0)] = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__);

(statearr_37101[(1)] = (1));

return statearr_37101;
});
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1 = (function (state_37081){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37081);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37102){var ex__36688__auto__ = e37102;
var statearr_37103_37525 = state_37081;
(statearr_37103_37525[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37081[(4)]))){
var statearr_37104_37526 = state_37081;
(statearr_37104_37526[(1)] = cljs.core.first((state_37081[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37531 = state_37081;
state_37081 = G__37531;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__ = function(state_37081){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1.call(this,state_37081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37105 = f__36777__auto__();
(statearr_37105[(6)] = c__36776__auto__);

return statearr_37105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_token_decimals = (function lpdashboard$ethereum$_LT_token_decimals(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37132){
var state_val_37133 = (state_37132[(1)]);
if((state_val_37133 === (7))){
var inst_37117 = (state_37132[(7)]);
var inst_37124 = (function(){throw inst_37117})();
var state_37132__$1 = state_37132;
var statearr_37134_37540 = state_37132__$1;
(statearr_37134_37540[(2)] = inst_37124);

(statearr_37134_37540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (1))){
var inst_37106 = lpdashboard.ethereum.make_erc20(address);
var state_37132__$1 = (function (){var statearr_37135 = state_37132;
(statearr_37135[(8)] = inst_37106);

return statearr_37135;
})();
var statearr_37136_37541 = state_37132__$1;
(statearr_37136_37541[(2)] = null);

(statearr_37136_37541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (4))){
var inst_37107 = (state_37132[(2)]);
var inst_37108 = console.log("No decimals method for:",address);
var state_37132__$1 = (function (){var statearr_37137 = state_37132;
(statearr_37137[(9)] = inst_37107);

(statearr_37137[(10)] = inst_37108);

return statearr_37137;
})();
var statearr_37138_37549 = state_37132__$1;
(statearr_37138_37549[(2)] = (18));

(statearr_37138_37549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (6))){
var inst_37117 = (state_37132[(7)]);
var inst_37117__$1 = (state_37132[(2)]);
var inst_37118 = (inst_37117__$1 instanceof cljs.core.ExceptionInfo);
var inst_37119 = cljs.core.ex_data(inst_37117__$1);
var inst_37120 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37119);
var inst_37121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37120,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37122 = ((inst_37118) && (inst_37121));
var state_37132__$1 = (function (){var statearr_37139 = state_37132;
(statearr_37139[(7)] = inst_37117__$1);

return statearr_37139;
})();
if(cljs.core.truth_(inst_37122)){
var statearr_37140_37574 = state_37132__$1;
(statearr_37140_37574[(1)] = (7));

} else {
var statearr_37141_37576 = state_37132__$1;
(statearr_37141_37576[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (3))){
var inst_37130 = (state_37132[(2)]);
var state_37132__$1 = state_37132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37132__$1,inst_37130);
} else {
if((state_val_37133 === (2))){
var inst_37106 = (state_37132[(8)]);
var _ = (function (){var statearr_37143 = state_37132;
(statearr_37143[(4)] = cljs.core.cons((5),(state_37132[(4)])));

return statearr_37143;
})();
var inst_37114 = inst_37106.decimals();
var inst_37115 = cljs.core.async.interop.p__GT_c(inst_37114);
var state_37132__$1 = state_37132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37132__$1,(6),inst_37115);
} else {
if((state_val_37133 === (9))){
var inst_37127 = (state_37132[(2)]);
var _ = (function (){var statearr_37144 = state_37132;
(statearr_37144[(4)] = cljs.core.rest((state_37132[(4)])));

return statearr_37144;
})();
var state_37132__$1 = state_37132;
var statearr_37145_37584 = state_37132__$1;
(statearr_37145_37584[(2)] = inst_37127);

(statearr_37145_37584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (5))){
var _ = (function (){var statearr_37146 = state_37132;
(statearr_37146[(4)] = cljs.core.rest((state_37132[(4)])));

return statearr_37146;
})();
var state_37132__$1 = state_37132;
var ex37142 = (state_37132__$1[(2)]);
var statearr_37147_37586 = state_37132__$1;
(statearr_37147_37586[(5)] = ex37142);


if((ex37142 instanceof Error)){
var statearr_37148_37589 = state_37132__$1;
(statearr_37148_37589[(1)] = (4));

(statearr_37148_37589[(5)] = null);

} else {
throw ex37142;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (8))){
var inst_37117 = (state_37132[(7)]);
var state_37132__$1 = state_37132;
var statearr_37149_37593 = state_37132__$1;
(statearr_37149_37593[(2)] = inst_37117);

(statearr_37149_37593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0 = (function (){
var statearr_37150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37150[(0)] = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__);

(statearr_37150[(1)] = (1));

return statearr_37150;
});
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1 = (function (state_37132){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37132);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37151){var ex__36688__auto__ = e37151;
var statearr_37152_37599 = state_37132;
(statearr_37152_37599[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37132[(4)]))){
var statearr_37153_37600 = state_37132;
(statearr_37153_37600[(1)] = cljs.core.first((state_37132[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37602 = state_37132;
state_37132 = G__37602;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__ = function(state_37132){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1.call(this,state_37132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37154 = f__36777__auto__();
(statearr_37154[(6)] = c__36776__auto__);

return statearr_37154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum.decode_event_data = (function lpdashboard$ethereum$decode_event_data(event){
try{var event_obj = lpdashboard.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e37155){if((e37155 instanceof Error)){
var err = e37155;
return console.log("prob parsing event:",event);
} else {
throw e37155;

}
}});
lpdashboard.ethereum.decode_burn_data = (function lpdashboard$ethereum$decode_burn_data(event,token1_decimals,token2_decimals){
try{var event_obj = lpdashboard.ethereum.univ2_iface.parseLog(event);
var pair_address = event.address;
var args = event_obj.args;
var sender_address = cljs.core.first(args);
var amount0 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(1)),token1_decimals);
var amount1 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token2_decimals);
var to_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(3));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sender","sender",1557303285),sender_address,new cljs.core.Keyword(null,"pair-address","pair-address",1269659792),pair_address,new cljs.core.Keyword(null,"to","to",192099007),to_address,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1], null);
}catch (e37156){if((e37156 instanceof Error)){
var err = e37156;
return console.log("prob parsing mint event:",event);
} else {
throw e37156;

}
}});
lpdashboard.ethereum.decode_mint_data = (function lpdashboard$ethereum$decode_mint_data(event,token1_decimals,token2_decimals){
try{var event_obj = lpdashboard.ethereum.univ2_iface.parseLog(event);
var pair_address = event.address;
var args = event_obj.args;
var sender_address = cljs.core.first(args);
var amount0 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(1)),token1_decimals);
var amount1 = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token2_decimals);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sender","sender",1557303285),sender_address,new cljs.core.Keyword(null,"pair-address","pair-address",1269659792),pair_address,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1], null);
}catch (e37157){if((e37157 instanceof Error)){
var err = e37157;
return console.log("prob parsing mint event:",event);
} else {
throw e37157;

}
}});
lpdashboard.ethereum.decode_transfer_data = (function lpdashboard$ethereum$decode_transfer_data(event,token_decimals){
try{var event_obj = lpdashboard.ethereum.erc20_iface.parseLog(event);
var token_address = event.address;
var args = event_obj.args;
var from_address = cljs.core.first(args);
var to_address = cljs.core.second(args);
var amount = lpdashboard.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token_decimals);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from_address,new cljs.core.Keyword(null,"to","to",192099007),to_address,new cljs.core.Keyword(null,"token-address","token-address",872304132),token_address,new cljs.core.Keyword(null,"amount","amount",364489504),amount], null);
}catch (e37158){if((e37158 instanceof Error)){
var err = e37158;
return console.log("prob parsing transfer event:",event);
} else {
throw e37158;

}
}});
lpdashboard.ethereum._LT_resolve_address = (function lpdashboard$ethereum$_LT_resolve_address(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37174){
var state_val_37175 = (state_37174[(1)]);
if((state_val_37175 === (1))){
var inst_37159 = lpdashboard.ethereum.provider.resolveName(address);
var inst_37160 = cljs.core.async.interop.p__GT_c(inst_37159);
var state_37174__$1 = state_37174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37174__$1,(2),inst_37160);
} else {
if((state_val_37175 === (2))){
var inst_37162 = (state_37174[(7)]);
var inst_37162__$1 = (state_37174[(2)]);
var inst_37163 = (inst_37162__$1 instanceof cljs.core.ExceptionInfo);
var inst_37164 = cljs.core.ex_data(inst_37162__$1);
var inst_37165 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37164);
var inst_37166 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37165,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37167 = ((inst_37163) && (inst_37166));
var state_37174__$1 = (function (){var statearr_37176 = state_37174;
(statearr_37176[(7)] = inst_37162__$1);

return statearr_37176;
})();
if(cljs.core.truth_(inst_37167)){
var statearr_37177_37608 = state_37174__$1;
(statearr_37177_37608[(1)] = (3));

} else {
var statearr_37178_37609 = state_37174__$1;
(statearr_37178_37609[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (3))){
var inst_37162 = (state_37174[(7)]);
var inst_37169 = (function(){throw inst_37162})();
var state_37174__$1 = state_37174;
var statearr_37179_37610 = state_37174__$1;
(statearr_37179_37610[(2)] = inst_37169);

(statearr_37179_37610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (4))){
var inst_37162 = (state_37174[(7)]);
var state_37174__$1 = state_37174;
var statearr_37180_37613 = state_37174__$1;
(statearr_37180_37613[(2)] = inst_37162);

(statearr_37180_37613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (5))){
var inst_37172 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37174__$1,inst_37172);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0 = (function (){
var statearr_37181 = [null,null,null,null,null,null,null,null];
(statearr_37181[(0)] = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__);

(statearr_37181[(1)] = (1));

return statearr_37181;
});
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1 = (function (state_37174){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37174);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37182){var ex__36688__auto__ = e37182;
var statearr_37183_37614 = state_37174;
(statearr_37183_37614[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37174[(4)]))){
var statearr_37184_37615 = state_37174;
(statearr_37184_37615[(1)] = cljs.core.first((state_37174[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37616 = state_37174;
state_37174 = G__37616;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__ = function(state_37174){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1.call(this,state_37174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37185 = f__36777__auto__();
(statearr_37185[(6)] = c__36776__auto__);

return statearr_37185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum.make_token_deposit = (function lpdashboard$ethereum$make_token_deposit(tx){
var parsed_event = lpdashboard.ethereum.detector_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),tx_args.user,new cljs.core.Keyword(null,"pid","pid",1018387698),parseInt(module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(tx_args.pid,(0))),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash], null);
});
lpdashboard.ethereum.make_token_tx = (function lpdashboard$ethereum$make_token_tx(tx,decimals){
var parsed_event = lpdashboard.ethereum.erc20_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var token = tx.address;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),tx_args.from,new cljs.core.Keyword(null,"to","to",192099007),tx_args.to,new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"amount","amount",364489504),lpdashboard.utils.ebn__GT_bn(tx_args.amount,decimals)], null);
});
lpdashboard.ethereum._LT_user_token_deposits = (function lpdashboard$ethereum$_LT_user_token_deposits(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Deposit.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37204){
var state_val_37205 = (state_37204[(1)]);
if((state_val_37205 === (1))){
var inst_37187 = provider.getLogs(user_filter);
var inst_37188 = cljs.core.async.interop.p__GT_c(inst_37187);
var state_37204__$1 = state_37204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37204__$1,(2),inst_37188);
} else {
if((state_val_37205 === (2))){
var inst_37190 = (state_37204[(7)]);
var inst_37190__$1 = (state_37204[(2)]);
var inst_37191 = (inst_37190__$1 instanceof cljs.core.ExceptionInfo);
var inst_37192 = cljs.core.ex_data(inst_37190__$1);
var inst_37193 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37192);
var inst_37194 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37193,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37195 = ((inst_37191) && (inst_37194));
var state_37204__$1 = (function (){var statearr_37206 = state_37204;
(statearr_37206[(7)] = inst_37190__$1);

return statearr_37206;
})();
if(cljs.core.truth_(inst_37195)){
var statearr_37207_37639 = state_37204__$1;
(statearr_37207_37639[(1)] = (3));

} else {
var statearr_37208_37641 = state_37204__$1;
(statearr_37208_37641[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37205 === (3))){
var inst_37190 = (state_37204[(7)]);
var inst_37197 = (function(){throw inst_37190})();
var state_37204__$1 = state_37204;
var statearr_37209_37642 = state_37204__$1;
(statearr_37209_37642[(2)] = inst_37197);

(statearr_37209_37642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37205 === (4))){
var inst_37190 = (state_37204[(7)]);
var state_37204__$1 = state_37204;
var statearr_37210_37644 = state_37204__$1;
(statearr_37210_37644[(2)] = inst_37190);

(statearr_37210_37644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37205 === (5))){
var inst_37200 = (state_37204[(2)]);
var inst_37201 = (function (){var filtered_txs = inst_37200;
return (function (p1__37186_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__37186_SHARP_);
});
})();
var inst_37202 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_37201,inst_37200);
var state_37204__$1 = state_37204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37204__$1,inst_37202);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0 = (function (){
var statearr_37211 = [null,null,null,null,null,null,null,null];
(statearr_37211[(0)] = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__);

(statearr_37211[(1)] = (1));

return statearr_37211;
});
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1 = (function (state_37204){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37204);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37212){var ex__36688__auto__ = e37212;
var statearr_37213_37648 = state_37204;
(statearr_37213_37648[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37204[(4)]))){
var statearr_37214_37649 = state_37204;
(statearr_37214_37649[(1)] = cljs.core.first((state_37204[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37651 = state_37204;
state_37204 = G__37651;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__ = function(state_37204){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1.call(this,state_37204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37215 = f__36777__auto__();
(statearr_37215[(6)] = c__36776__auto__);

return statearr_37215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_user_token_withdrawals = (function lpdashboard$ethereum$_LT_user_token_withdrawals(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.event_detector_abi,token_address);
var user_filter = (contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Withdraw.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37234){
var state_val_37235 = (state_37234[(1)]);
if((state_val_37235 === (1))){
var inst_37217 = provider.getLogs(user_filter);
var inst_37218 = cljs.core.async.interop.p__GT_c(inst_37217);
var state_37234__$1 = state_37234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37234__$1,(2),inst_37218);
} else {
if((state_val_37235 === (2))){
var inst_37220 = (state_37234[(7)]);
var inst_37220__$1 = (state_37234[(2)]);
var inst_37221 = (inst_37220__$1 instanceof cljs.core.ExceptionInfo);
var inst_37222 = cljs.core.ex_data(inst_37220__$1);
var inst_37223 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37222);
var inst_37224 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37223,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37225 = ((inst_37221) && (inst_37224));
var state_37234__$1 = (function (){var statearr_37236 = state_37234;
(statearr_37236[(7)] = inst_37220__$1);

return statearr_37236;
})();
if(cljs.core.truth_(inst_37225)){
var statearr_37237_37656 = state_37234__$1;
(statearr_37237_37656[(1)] = (3));

} else {
var statearr_37238_37658 = state_37234__$1;
(statearr_37238_37658[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (3))){
var inst_37220 = (state_37234[(7)]);
var inst_37227 = (function(){throw inst_37220})();
var state_37234__$1 = state_37234;
var statearr_37239_37659 = state_37234__$1;
(statearr_37239_37659[(2)] = inst_37227);

(statearr_37239_37659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (4))){
var inst_37220 = (state_37234[(7)]);
var state_37234__$1 = state_37234;
var statearr_37240_37660 = state_37234__$1;
(statearr_37240_37660[(2)] = inst_37220);

(statearr_37240_37660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37235 === (5))){
var inst_37230 = (state_37234[(2)]);
var inst_37231 = (function (){var filtered_txs = inst_37230;
return (function (p1__37216_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__37216_SHARP_);
});
})();
var inst_37232 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_37231,inst_37230);
var state_37234__$1 = state_37234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37234__$1,inst_37232);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0 = (function (){
var statearr_37241 = [null,null,null,null,null,null,null,null];
(statearr_37241[(0)] = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__);

(statearr_37241[(1)] = (1));

return statearr_37241;
});
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1 = (function (state_37234){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37234);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37242){var ex__36688__auto__ = e37242;
var statearr_37243_37677 = state_37234;
(statearr_37243_37677[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37234[(4)]))){
var statearr_37244_37686 = state_37234;
(statearr_37244_37686[(1)] = cljs.core.first((state_37234[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37701 = state_37234;
state_37234 = G__37701;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__ = function(state_37234){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1.call(this,state_37234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37245 = f__36777__auto__();
(statearr_37245[(6)] = c__36776__auto__);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_user_token_transfers = (function lpdashboard$ethereum$_LT_user_token_transfers(var_args){
var G__37248 = arguments.length;
switch (G__37248) {
case 3:
return lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3 = (function (provider,token_address,out_address){
return lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(provider,token_address,out_address,null);
}));

(lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4 = (function (provider,token_address,out_address,in_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(out_address,in_address) : contract.filters.Transfer.call(null,out_address,in_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37269){
var state_val_37270 = (state_37269[(1)]);
if((state_val_37270 === (1))){
var inst_37249 = provider.getLogs(user_filter);
var inst_37250 = cljs.core.async.interop.p__GT_c(inst_37249);
var state_37269__$1 = state_37269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37269__$1,(2),inst_37250);
} else {
if((state_val_37270 === (2))){
var inst_37252 = (state_37269[(7)]);
var inst_37252__$1 = (state_37269[(2)]);
var inst_37253 = (inst_37252__$1 instanceof cljs.core.ExceptionInfo);
var inst_37254 = cljs.core.ex_data(inst_37252__$1);
var inst_37255 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37254);
var inst_37256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37255,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37257 = ((inst_37253) && (inst_37256));
var state_37269__$1 = (function (){var statearr_37271 = state_37269;
(statearr_37271[(7)] = inst_37252__$1);

return statearr_37271;
})();
if(cljs.core.truth_(inst_37257)){
var statearr_37272_37741 = state_37269__$1;
(statearr_37272_37741[(1)] = (3));

} else {
var statearr_37273_37743 = state_37269__$1;
(statearr_37273_37743[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (3))){
var inst_37252 = (state_37269[(7)]);
var inst_37259 = (function(){throw inst_37252})();
var state_37269__$1 = state_37269;
var statearr_37274_37745 = state_37269__$1;
(statearr_37274_37745[(2)] = inst_37259);

(statearr_37274_37745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (4))){
var inst_37252 = (state_37269[(7)]);
var state_37269__$1 = state_37269;
var statearr_37275_37747 = state_37269__$1;
(statearr_37275_37747[(2)] = inst_37252);

(statearr_37275_37747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (5))){
var inst_37262 = (state_37269[(2)]);
var inst_37263 = lpdashboard.ethereum._LT_token_decimals(token_address);
var state_37269__$1 = (function (){var statearr_37276 = state_37269;
(statearr_37276[(8)] = inst_37262);

return statearr_37276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37269__$1,(6),inst_37263);
} else {
if((state_val_37270 === (6))){
var inst_37262 = (state_37269[(8)]);
var inst_37265 = (state_37269[(2)]);
var inst_37266 = (function (){var filtered_txs = inst_37262;
var decimals = inst_37265;
return (function (p1__37246_SHARP_){
return lpdashboard.ethereum.make_token_tx(p1__37246_SHARP_,decimals);
});
})();
var inst_37267 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_37266,inst_37262);
var state_37269__$1 = state_37269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37269__$1,inst_37267);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$state_machine__36685__auto__ = null;
var lpdashboard$ethereum$state_machine__36685__auto____0 = (function (){
var statearr_37277 = [null,null,null,null,null,null,null,null,null];
(statearr_37277[(0)] = lpdashboard$ethereum$state_machine__36685__auto__);

(statearr_37277[(1)] = (1));

return statearr_37277;
});
var lpdashboard$ethereum$state_machine__36685__auto____1 = (function (state_37269){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37269);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37278){var ex__36688__auto__ = e37278;
var statearr_37279_37753 = state_37269;
(statearr_37279_37753[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37269[(4)]))){
var statearr_37280_37755 = state_37269;
(statearr_37280_37755[(1)] = cljs.core.first((state_37269[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37756 = state_37269;
state_37269 = G__37756;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__36685__auto__ = function(state_37269){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__36685__auto____1.call(this,state_37269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__36685__auto____0;
lpdashboard$ethereum$state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__36685__auto____1;
return lpdashboard$ethereum$state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37281 = f__36777__auto__();
(statearr_37281[(6)] = c__36776__auto__);

return statearr_37281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}));

(lpdashboard.ethereum._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

lpdashboard.ethereum._LT_user_lp_mint_transfers = (function lpdashboard$ethereum$_LT_user_lp_mint_transfers(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(null,user_address) : contract.filters.Transfer.call(null,null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37298){
var state_val_37299 = (state_37298[(1)]);
if((state_val_37299 === (1))){
var inst_37282 = provider.getLogs(user_filter);
var inst_37283 = cljs.core.async.interop.p__GT_c(inst_37282);
var state_37298__$1 = state_37298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37298__$1,(2),inst_37283);
} else {
if((state_val_37299 === (2))){
var inst_37285 = (state_37298[(7)]);
var inst_37285__$1 = (state_37298[(2)]);
var inst_37286 = (inst_37285__$1 instanceof cljs.core.ExceptionInfo);
var inst_37287 = cljs.core.ex_data(inst_37285__$1);
var inst_37288 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37287);
var inst_37289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37288,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37290 = ((inst_37286) && (inst_37289));
var state_37298__$1 = (function (){var statearr_37300 = state_37298;
(statearr_37300[(7)] = inst_37285__$1);

return statearr_37300;
})();
if(cljs.core.truth_(inst_37290)){
var statearr_37301_37763 = state_37298__$1;
(statearr_37301_37763[(1)] = (3));

} else {
var statearr_37302_37764 = state_37298__$1;
(statearr_37302_37764[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37299 === (3))){
var inst_37285 = (state_37298[(7)]);
var inst_37292 = (function(){throw inst_37285})();
var state_37298__$1 = state_37298;
var statearr_37303_37765 = state_37298__$1;
(statearr_37303_37765[(2)] = inst_37292);

(statearr_37303_37765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37299 === (4))){
var inst_37285 = (state_37298[(7)]);
var state_37298__$1 = state_37298;
var statearr_37304_37766 = state_37298__$1;
(statearr_37304_37766[(2)] = inst_37285);

(statearr_37304_37766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37299 === (5))){
var inst_37295 = (state_37298[(2)]);
var inst_37296 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_37295);
var state_37298__$1 = state_37298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37298__$1,inst_37296);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0 = (function (){
var statearr_37305 = [null,null,null,null,null,null,null,null];
(statearr_37305[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__);

(statearr_37305[(1)] = (1));

return statearr_37305;
});
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1 = (function (state_37298){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37298);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37306){var ex__36688__auto__ = e37306;
var statearr_37307_37771 = state_37298;
(statearr_37307_37771[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37298[(4)]))){
var statearr_37308_37772 = state_37298;
(statearr_37308_37772[(1)] = cljs.core.first((state_37298[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37774 = state_37298;
state_37298 = G__37774;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__ = function(state_37298){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1.call(this,state_37298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37309 = f__36777__auto__();
(statearr_37309[(6)] = c__36776__auto__);

return statearr_37309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_user_lp_burn_transfers = (function lpdashboard$ethereum$_LT_user_lp_burn_transfers(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,null) : contract.filters.Transfer.call(null,user_address,null));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37326){
var state_val_37327 = (state_37326[(1)]);
if((state_val_37327 === (1))){
var inst_37310 = provider.getLogs(user_filter);
var inst_37311 = cljs.core.async.interop.p__GT_c(inst_37310);
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37326__$1,(2),inst_37311);
} else {
if((state_val_37327 === (2))){
var inst_37313 = (state_37326[(7)]);
var inst_37313__$1 = (state_37326[(2)]);
var inst_37314 = (inst_37313__$1 instanceof cljs.core.ExceptionInfo);
var inst_37315 = cljs.core.ex_data(inst_37313__$1);
var inst_37316 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37315);
var inst_37317 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37316,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37318 = ((inst_37314) && (inst_37317));
var state_37326__$1 = (function (){var statearr_37328 = state_37326;
(statearr_37328[(7)] = inst_37313__$1);

return statearr_37328;
})();
if(cljs.core.truth_(inst_37318)){
var statearr_37329_37779 = state_37326__$1;
(statearr_37329_37779[(1)] = (3));

} else {
var statearr_37330_37780 = state_37326__$1;
(statearr_37330_37780[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (3))){
var inst_37313 = (state_37326[(7)]);
var inst_37320 = (function(){throw inst_37313})();
var state_37326__$1 = state_37326;
var statearr_37331_37781 = state_37326__$1;
(statearr_37331_37781[(2)] = inst_37320);

(statearr_37331_37781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (4))){
var inst_37313 = (state_37326[(7)]);
var state_37326__$1 = state_37326;
var statearr_37332_37783 = state_37326__$1;
(statearr_37332_37783[(2)] = inst_37313);

(statearr_37332_37783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (5))){
var inst_37323 = (state_37326[(2)]);
var inst_37324 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_37323);
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37326__$1,inst_37324);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0 = (function (){
var statearr_37333 = [null,null,null,null,null,null,null,null];
(statearr_37333[(0)] = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__);

(statearr_37333[(1)] = (1));

return statearr_37333;
});
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1 = (function (state_37326){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37326);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37334){var ex__36688__auto__ = e37334;
var statearr_37335_37788 = state_37326;
(statearr_37335_37788[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37326[(4)]))){
var statearr_37336_37789 = state_37326;
(statearr_37336_37789[(1)] = cljs.core.first((state_37326[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37791 = state_37326;
state_37326 = G__37791;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__ = function(state_37326){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1.call(this,state_37326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37337 = f__36777__auto__();
(statearr_37337[(6)] = c__36776__auto__);

return statearr_37337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_user_lp_mint_deposits = (function lpdashboard$ethereum$_LT_user_lp_mint_deposits(provider,pair_address,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,pair_address) : contract.filters.Transfer.call(null,user_address,pair_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37354){
var state_val_37355 = (state_37354[(1)]);
if((state_val_37355 === (1))){
var inst_37338 = provider.getLogs(user_filter);
var inst_37339 = cljs.core.async.interop.p__GT_c(inst_37338);
var state_37354__$1 = state_37354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37354__$1,(2),inst_37339);
} else {
if((state_val_37355 === (2))){
var inst_37341 = (state_37354[(7)]);
var inst_37341__$1 = (state_37354[(2)]);
var inst_37342 = (inst_37341__$1 instanceof cljs.core.ExceptionInfo);
var inst_37343 = cljs.core.ex_data(inst_37341__$1);
var inst_37344 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37343);
var inst_37345 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37344,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37346 = ((inst_37342) && (inst_37345));
var state_37354__$1 = (function (){var statearr_37356 = state_37354;
(statearr_37356[(7)] = inst_37341__$1);

return statearr_37356;
})();
if(cljs.core.truth_(inst_37346)){
var statearr_37357_37797 = state_37354__$1;
(statearr_37357_37797[(1)] = (3));

} else {
var statearr_37358_37798 = state_37354__$1;
(statearr_37358_37798[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (3))){
var inst_37341 = (state_37354[(7)]);
var inst_37348 = (function(){throw inst_37341})();
var state_37354__$1 = state_37354;
var statearr_37359_37801 = state_37354__$1;
(statearr_37359_37801[(2)] = inst_37348);

(statearr_37359_37801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (4))){
var inst_37341 = (state_37354[(7)]);
var state_37354__$1 = state_37354;
var statearr_37360_37802 = state_37354__$1;
(statearr_37360_37802[(2)] = inst_37341);

(statearr_37360_37802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37355 === (5))){
var inst_37351 = (state_37354[(2)]);
var inst_37352 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_37351);
var state_37354__$1 = state_37354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37354__$1,inst_37352);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0 = (function (){
var statearr_37361 = [null,null,null,null,null,null,null,null];
(statearr_37361[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__);

(statearr_37361[(1)] = (1));

return statearr_37361;
});
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1 = (function (state_37354){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37354);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37362){var ex__36688__auto__ = e37362;
var statearr_37363_37805 = state_37354;
(statearr_37363_37805[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37354[(4)]))){
var statearr_37364_37806 = state_37354;
(statearr_37364_37806[(1)] = cljs.core.first((state_37354[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37808 = state_37354;
state_37354 = G__37808;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__ = function(state_37354){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1.call(this,state_37354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37365 = f__36777__auto__();
(statearr_37365[(6)] = c__36776__auto__);

return statearr_37365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx_receipt = (function lpdashboard$ethereum$_LT_get_tx_receipt(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37381){
var state_val_37382 = (state_37381[(1)]);
if((state_val_37382 === (1))){
var inst_37366 = lpdashboard.ethereum.provider.getTransactionReceipt(txhash);
var inst_37367 = cljs.core.async.interop.p__GT_c(inst_37366);
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37381__$1,(2),inst_37367);
} else {
if((state_val_37382 === (2))){
var inst_37369 = (state_37381[(7)]);
var inst_37369__$1 = (state_37381[(2)]);
var inst_37370 = (inst_37369__$1 instanceof cljs.core.ExceptionInfo);
var inst_37371 = cljs.core.ex_data(inst_37369__$1);
var inst_37372 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37371);
var inst_37373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37372,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37374 = ((inst_37370) && (inst_37373));
var state_37381__$1 = (function (){var statearr_37383 = state_37381;
(statearr_37383[(7)] = inst_37369__$1);

return statearr_37383;
})();
if(cljs.core.truth_(inst_37374)){
var statearr_37384_37813 = state_37381__$1;
(statearr_37384_37813[(1)] = (3));

} else {
var statearr_37385_37814 = state_37381__$1;
(statearr_37385_37814[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (3))){
var inst_37369 = (state_37381[(7)]);
var inst_37376 = (function(){throw inst_37369})();
var state_37381__$1 = state_37381;
var statearr_37386_37816 = state_37381__$1;
(statearr_37386_37816[(2)] = inst_37376);

(statearr_37386_37816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (4))){
var inst_37369 = (state_37381[(7)]);
var state_37381__$1 = state_37381;
var statearr_37387_37817 = state_37381__$1;
(statearr_37387_37817[(2)] = inst_37369);

(statearr_37387_37817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (5))){
var inst_37379 = (state_37381[(2)]);
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37381__$1,inst_37379);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0 = (function (){
var statearr_37388 = [null,null,null,null,null,null,null,null];
(statearr_37388[(0)] = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__);

(statearr_37388[(1)] = (1));

return statearr_37388;
});
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1 = (function (state_37381){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37381);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37389){var ex__36688__auto__ = e37389;
var statearr_37390_37819 = state_37381;
(statearr_37390_37819[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37381[(4)]))){
var statearr_37391_37820 = state_37381;
(statearr_37391_37820[(1)] = cljs.core.first((state_37381[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37823 = state_37381;
state_37381 = G__37823;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__ = function(state_37381){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1.call(this,state_37381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37392 = f__36777__auto__();
(statearr_37392[(6)] = c__36776__auto__);

return statearr_37392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx = (function lpdashboard$ethereum$_LT_get_tx(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37408){
var state_val_37409 = (state_37408[(1)]);
if((state_val_37409 === (1))){
var inst_37393 = lpdashboard.ethereum.provider.getTransaction(txhash);
var inst_37394 = cljs.core.async.interop.p__GT_c(inst_37393);
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37408__$1,(2),inst_37394);
} else {
if((state_val_37409 === (2))){
var inst_37396 = (state_37408[(7)]);
var inst_37396__$1 = (state_37408[(2)]);
var inst_37397 = (inst_37396__$1 instanceof cljs.core.ExceptionInfo);
var inst_37398 = cljs.core.ex_data(inst_37396__$1);
var inst_37399 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_37398);
var inst_37400 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37399,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_37401 = ((inst_37397) && (inst_37400));
var state_37408__$1 = (function (){var statearr_37410 = state_37408;
(statearr_37410[(7)] = inst_37396__$1);

return statearr_37410;
})();
if(cljs.core.truth_(inst_37401)){
var statearr_37411_37826 = state_37408__$1;
(statearr_37411_37826[(1)] = (3));

} else {
var statearr_37412_37827 = state_37408__$1;
(statearr_37412_37827[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (3))){
var inst_37396 = (state_37408[(7)]);
var inst_37403 = (function(){throw inst_37396})();
var state_37408__$1 = state_37408;
var statearr_37413_37828 = state_37408__$1;
(statearr_37413_37828[(2)] = inst_37403);

(statearr_37413_37828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (4))){
var inst_37396 = (state_37408[(7)]);
var state_37408__$1 = state_37408;
var statearr_37414_37829 = state_37408__$1;
(statearr_37414_37829[(2)] = inst_37396);

(statearr_37414_37829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (5))){
var inst_37406 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37408__$1,inst_37406);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0 = (function (){
var statearr_37415 = [null,null,null,null,null,null,null,null];
(statearr_37415[(0)] = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__);

(statearr_37415[(1)] = (1));

return statearr_37415;
});
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1 = (function (state_37408){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37408);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37416){var ex__36688__auto__ = e37416;
var statearr_37417_37849 = state_37408;
(statearr_37417_37849[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37408[(4)]))){
var statearr_37418_37854 = state_37408;
(statearr_37418_37854[(1)] = cljs.core.first((state_37408[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37860 = state_37408;
state_37408 = G__37860;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__ = function(state_37408){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1.call(this,state_37408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37419 = f__36777__auto__();
(statearr_37419[(6)] = c__36776__auto__);

return statearr_37419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx_with_receipt = (function lpdashboard$ethereum$_LT_get_tx_with_receipt(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37430){
var state_val_37431 = (state_37430[(1)]);
if((state_val_37431 === (1))){
var inst_37420 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_37421 = lpdashboard.ethereum._LT_get_tx(txhash);
var state_37430__$1 = (function (){var statearr_37432 = state_37430;
(statearr_37432[(7)] = inst_37420);

return statearr_37432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37430__$1,(2),inst_37421);
} else {
if((state_val_37431 === (2))){
var inst_37423 = (state_37430[(2)]);
var inst_37424 = lpdashboard.ethereum._LT_get_tx_receipt(txhash);
var state_37430__$1 = (function (){var statearr_37433 = state_37430;
(statearr_37433[(8)] = inst_37423);

return statearr_37433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37430__$1,(3),inst_37424);
} else {
if((state_val_37431 === (3))){
var inst_37423 = (state_37430[(8)]);
var inst_37420 = (state_37430[(7)]);
var inst_37426 = (state_37430[(2)]);
var inst_37427 = [inst_37423,inst_37426];
var inst_37428 = cljs.core.PersistentHashMap.fromArrays(inst_37420,inst_37427);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37430__$1,inst_37428);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0 = (function (){
var statearr_37434 = [null,null,null,null,null,null,null,null,null];
(statearr_37434[(0)] = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__);

(statearr_37434[(1)] = (1));

return statearr_37434;
});
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1 = (function (state_37430){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37430);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37435){var ex__36688__auto__ = e37435;
var statearr_37436_37874 = state_37430;
(statearr_37436_37874[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37430[(4)]))){
var statearr_37437_37875 = state_37430;
(statearr_37437_37875[(1)] = cljs.core.first((state_37430[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37877 = state_37430;
state_37430 = G__37877;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__ = function(state_37430){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1.call(this,state_37430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37438 = f__36777__auto__();
(statearr_37438[(6)] = c__36776__auto__);

return statearr_37438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_trxs = (function lpdashboard$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37443){
var state_val_37444 = (state_37443[(1)]);
if((state_val_37444 === (1))){
var inst_37439 = lpdashboard.ethereum._LT_get_tx_with_receipt(x);
var state_37443__$1 = state_37443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37443__$1,(2),inst_37439);
} else {
if((state_val_37444 === (2))){
var inst_37441 = (state_37443[(2)]);
var state_37443__$1 = state_37443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37443__$1,inst_37441);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0 = (function (){
var statearr_37445 = [null,null,null,null,null,null,null];
(statearr_37445[(0)] = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__);

(statearr_37445[(1)] = (1));

return statearr_37445;
});
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1 = (function (state_37443){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37443);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37446){var ex__36688__auto__ = e37446;
var statearr_37447_37880 = state_37443;
(statearr_37447_37880[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37443[(4)]))){
var statearr_37448_37881 = state_37443;
(statearr_37448_37881[(1)] = cljs.core.first((state_37443[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37884 = state_37443;
state_37443 = G__37884;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__ = function(state_37443){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1.call(this,state_37443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37449 = f__36777__auto__();
(statearr_37449[(6)] = c__36776__auto__);

return statearr_37449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
lpdashboard.ethereum._LT_user_token_destinations = (function lpdashboard$ethereum$_LT_user_token_destinations(provider,token_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37462){
var state_val_37463 = (state_37462[(1)]);
if((state_val_37463 === (1))){
var inst_37451 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37462__$1,(2),inst_37451);
} else {
if((state_val_37463 === (2))){
var inst_37453 = (state_37462[(2)]);
var inst_37454 = cljs.core.group_by(new cljs.core.Keyword(null,"to","to",192099007),inst_37453);
var inst_37455 = cljs.core.vals(inst_37454);
var inst_37456 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_37455);
var inst_37457 = (function (){var user_txs = inst_37453;
var distinct_tos = inst_37456;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_37458 = (function (){var user_txs = inst_37453;
var distinct_tos = inst_37456;
return (function (p1__37450_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__37450_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_37459 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_37458,inst_37456);
var inst_37460 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_37457,inst_37459);
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37462__$1,inst_37460);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_37464 = [null,null,null,null,null,null,null];
(statearr_37464[(0)] = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__);

(statearr_37464[(1)] = (1));

return statearr_37464;
});
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1 = (function (state_37462){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37462);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37465){var ex__36688__auto__ = e37465;
var statearr_37466_37890 = state_37462;
(statearr_37466_37890[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37462[(4)]))){
var statearr_37467_37891 = state_37462;
(statearr_37467_37891[(1)] = cljs.core.first((state_37462[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37893 = state_37462;
state_37462 = G__37893;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__ = function(state_37462){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1.call(this,state_37462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37468 = f__36777__auto__();
(statearr_37468[(6)] = c__36776__auto__);

return statearr_37468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum.decode_tx_data_args = (function lpdashboard$ethereum$decode_tx_data_args(fn_abi,hexdata){
var args_part = module$node_modules$ethers$dist$ethers_umd.utils.hexDataSlice(hexdata,(4));
var _ = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_part], 0));
return module$node_modules$ethers$dist$ethers_umd.utils.defaultAbiCoder.decode(cljs.core.clj__GT_js(fn_abi),args_part);
});
lpdashboard.ethereum._LT_erc20_infos = (function lpdashboard$ethereum$_LT_erc20_infos(tokens){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_37473){
var state_val_37474 = (state_37473[(1)]);
if((state_val_37474 === (1))){
var inst_37469 = lpdashboard.ethereum._LT_erc20_info(a);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37473__$1,(2),inst_37469);
} else {
if((state_val_37474 === (2))){
var inst_37471 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37473__$1,inst_37471);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0 = (function (){
var statearr_37475 = [null,null,null,null,null,null,null];
(statearr_37475[(0)] = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__);

(statearr_37475[(1)] = (1));

return statearr_37475;
});
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1 = (function (state_37473){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_37473);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e37476){var ex__36688__auto__ = e37476;
var statearr_37477_37903 = state_37473;
(statearr_37477_37903[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_37473[(4)]))){
var statearr_37478_37904 = state_37473;
(statearr_37478_37904[(1)] = cljs.core.first((state_37473[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37910 = state_37473;
state_37473 = G__37910;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__ = function(state_37473){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1.call(this,state_37473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_37479 = f__36777__auto__();
(statearr_37479[(6)] = c__36776__auto__);

return statearr_37479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),tokens)));
});

//# sourceMappingURL=lpdashboard.ethereum.js.map
