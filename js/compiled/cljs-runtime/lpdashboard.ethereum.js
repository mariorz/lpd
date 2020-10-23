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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28041){
var state_val_28042 = (state_28041[(1)]);
if((state_val_28042 === (7))){
var inst_28012 = (state_28041[(7)]);
var inst_28019 = (function(){throw inst_28012})();
var state_28041__$1 = state_28041;
var statearr_28044_28511 = state_28041__$1;
(statearr_28044_28511[(2)] = inst_28019);

(statearr_28044_28511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (1))){
var inst_27993 = (state_28041[(8)]);
var inst_27993__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,address);
var inst_27994 = inst_27993__$1.decimals();
var inst_27995 = cljs.core.async.interop.p__GT_c(inst_27994);
var state_28041__$1 = (function (){var statearr_28045 = state_28041;
(statearr_28045[(8)] = inst_27993__$1);

return statearr_28045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28041__$1,(2),inst_27995);
} else {
if((state_val_28042 === (4))){
var inst_27997 = (state_28041[(9)]);
var state_28041__$1 = state_28041;
var statearr_28046_28512 = state_28041__$1;
(statearr_28046_28512[(2)] = inst_27997);

(statearr_28046_28512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (13))){
var inst_28022 = (state_28041[(10)]);
var inst_28008 = (state_28041[(11)]);
var inst_28036 = (state_28041[(2)]);
var inst_28037 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_28038 = [address,inst_28022,inst_28036,inst_28008];
var inst_28039 = cljs.core.PersistentHashMap.fromArrays(inst_28037,inst_28038);
var state_28041__$1 = state_28041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28041__$1,inst_28039);
} else {
if((state_val_28042 === (6))){
var inst_28012 = (state_28041[(7)]);
var inst_28012__$1 = (state_28041[(2)]);
var inst_28013 = (inst_28012__$1 instanceof cljs.core.ExceptionInfo);
var inst_28014 = cljs.core.ex_data(inst_28012__$1);
var inst_28015 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28014);
var inst_28016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28015,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28017 = ((inst_28013) && (inst_28016));
var state_28041__$1 = (function (){var statearr_28048 = state_28041;
(statearr_28048[(7)] = inst_28012__$1);

return statearr_28048;
})();
if(cljs.core.truth_(inst_28017)){
var statearr_28049_28513 = state_28041__$1;
(statearr_28049_28513[(1)] = (7));

} else {
var statearr_28050_28514 = state_28041__$1;
(statearr_28050_28514[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (3))){
var inst_27997 = (state_28041[(9)]);
var inst_28005 = (function(){throw inst_27997})();
var state_28041__$1 = state_28041;
var statearr_28054_28515 = state_28041__$1;
(statearr_28054_28515[(2)] = inst_28005);

(statearr_28054_28515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (12))){
var inst_28026 = (state_28041[(12)]);
var state_28041__$1 = state_28041;
var statearr_28058_28516 = state_28041__$1;
(statearr_28058_28516[(2)] = inst_28026);

(statearr_28058_28516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (2))){
var inst_27997 = (state_28041[(9)]);
var inst_27997__$1 = (state_28041[(2)]);
var inst_27998 = (inst_27997__$1 instanceof cljs.core.ExceptionInfo);
var inst_28000 = cljs.core.ex_data(inst_27997__$1);
var inst_28001 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28000);
var inst_28002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28001,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28003 = ((inst_27998) && (inst_28002));
var state_28041__$1 = (function (){var statearr_28061 = state_28041;
(statearr_28061[(9)] = inst_27997__$1);

return statearr_28061;
})();
if(cljs.core.truth_(inst_28003)){
var statearr_28062_28517 = state_28041__$1;
(statearr_28062_28517[(1)] = (3));

} else {
var statearr_28064_28518 = state_28041__$1;
(statearr_28064_28518[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (11))){
var inst_28026 = (state_28041[(12)]);
var inst_28033 = (function(){throw inst_28026})();
var state_28041__$1 = state_28041;
var statearr_28065_28519 = state_28041__$1;
(statearr_28065_28519[(2)] = inst_28033);

(statearr_28065_28519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (9))){
var inst_27993 = (state_28041[(8)]);
var inst_28022 = (state_28041[(2)]);
var inst_28023 = inst_27993.symbol();
var inst_28024 = cljs.core.async.interop.p__GT_c(inst_28023);
var state_28041__$1 = (function (){var statearr_28067 = state_28041;
(statearr_28067[(10)] = inst_28022);

return statearr_28067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28041__$1,(10),inst_28024);
} else {
if((state_val_28042 === (5))){
var inst_27993 = (state_28041[(8)]);
var inst_28008 = (state_28041[(2)]);
var inst_28009 = inst_27993.name();
var inst_28010 = cljs.core.async.interop.p__GT_c(inst_28009);
var state_28041__$1 = (function (){var statearr_28069 = state_28041;
(statearr_28069[(11)] = inst_28008);

return statearr_28069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28041__$1,(6),inst_28010);
} else {
if((state_val_28042 === (10))){
var inst_28026 = (state_28041[(12)]);
var inst_28026__$1 = (state_28041[(2)]);
var inst_28027 = (inst_28026__$1 instanceof cljs.core.ExceptionInfo);
var inst_28028 = cljs.core.ex_data(inst_28026__$1);
var inst_28029 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28028);
var inst_28030 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28029,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28031 = ((inst_28027) && (inst_28030));
var state_28041__$1 = (function (){var statearr_28090 = state_28041;
(statearr_28090[(12)] = inst_28026__$1);

return statearr_28090;
})();
if(cljs.core.truth_(inst_28031)){
var statearr_28091_28520 = state_28041__$1;
(statearr_28091_28520[(1)] = (11));

} else {
var statearr_28092_28521 = state_28041__$1;
(statearr_28092_28521[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28042 === (8))){
var inst_28012 = (state_28041[(7)]);
var state_28041__$1 = state_28041;
var statearr_28093_28522 = state_28041__$1;
(statearr_28093_28522[(2)] = inst_28012);

(statearr_28093_28522[(1)] = (9));


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
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto____0 = (function (){
var statearr_28094 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28094[(0)] = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto__);

(statearr_28094[(1)] = (1));

return statearr_28094;
});
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto____1 = (function (state_28041){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28041);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28095){var ex__27579__auto__ = e28095;
var statearr_28096_28523 = state_28041;
(statearr_28096_28523[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28041[(4)]))){
var statearr_28097_28524 = state_28041;
(statearr_28097_28524[(1)] = cljs.core.first((state_28041[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28525 = state_28041;
state_28041 = G__28525;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto__ = function(state_28041){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto____1.call(this,state_28041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28098 = f__27668__auto__();
(statearr_28098[(6)] = c__27667__auto__);

return statearr_28098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_token_decimals = (function lpdashboard$ethereum$_LT_token_decimals(address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28134){
var state_val_28135 = (state_28134[(1)]);
if((state_val_28135 === (7))){
var inst_28117 = (state_28134[(7)]);
var inst_28126 = (function(){throw inst_28117})();
var state_28134__$1 = state_28134;
var statearr_28151_28527 = state_28134__$1;
(statearr_28151_28527[(2)] = inst_28126);

(statearr_28151_28527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (1))){
var inst_28103 = lpdashboard.ethereum.make_erc20(address);
var state_28134__$1 = (function (){var statearr_28152 = state_28134;
(statearr_28152[(8)] = inst_28103);

return statearr_28152;
})();
var statearr_28153_28533 = state_28134__$1;
(statearr_28153_28533[(2)] = null);

(statearr_28153_28533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (4))){
var inst_28106 = (state_28134[(2)]);
var inst_28107 = console.log("No decimals method for:",address);
var state_28134__$1 = (function (){var statearr_28154 = state_28134;
(statearr_28154[(9)] = inst_28106);

(statearr_28154[(10)] = inst_28107);

return statearr_28154;
})();
var statearr_28156_28549 = state_28134__$1;
(statearr_28156_28549[(2)] = (18));

(statearr_28156_28549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (6))){
var inst_28117 = (state_28134[(7)]);
var inst_28117__$1 = (state_28134[(2)]);
var inst_28119 = (inst_28117__$1 instanceof cljs.core.ExceptionInfo);
var inst_28120 = cljs.core.ex_data(inst_28117__$1);
var inst_28121 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28120);
var inst_28122 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28121,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28123 = ((inst_28119) && (inst_28122));
var state_28134__$1 = (function (){var statearr_28160 = state_28134;
(statearr_28160[(7)] = inst_28117__$1);

return statearr_28160;
})();
if(cljs.core.truth_(inst_28123)){
var statearr_28161_28550 = state_28134__$1;
(statearr_28161_28550[(1)] = (7));

} else {
var statearr_28162_28552 = state_28134__$1;
(statearr_28162_28552[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (3))){
var inst_28132 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28134__$1,inst_28132);
} else {
if((state_val_28135 === (2))){
var inst_28103 = (state_28134[(8)]);
var _ = (function (){var statearr_28165 = state_28134;
(statearr_28165[(4)] = cljs.core.cons((5),(state_28134[(4)])));

return statearr_28165;
})();
var inst_28114 = inst_28103.decimals();
var inst_28115 = cljs.core.async.interop.p__GT_c(inst_28114);
var state_28134__$1 = state_28134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28134__$1,(6),inst_28115);
} else {
if((state_val_28135 === (9))){
var inst_28129 = (state_28134[(2)]);
var _ = (function (){var statearr_28166 = state_28134;
(statearr_28166[(4)] = cljs.core.rest((state_28134[(4)])));

return statearr_28166;
})();
var state_28134__$1 = state_28134;
var statearr_28167_28555 = state_28134__$1;
(statearr_28167_28555[(2)] = inst_28129);

(statearr_28167_28555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (5))){
var _ = (function (){var statearr_28168 = state_28134;
(statearr_28168[(4)] = cljs.core.rest((state_28134[(4)])));

return statearr_28168;
})();
var state_28134__$1 = state_28134;
var ex28164 = (state_28134__$1[(2)]);
var statearr_28169_28556 = state_28134__$1;
(statearr_28169_28556[(5)] = ex28164);


if((ex28164 instanceof Error)){
var statearr_28170_28558 = state_28134__$1;
(statearr_28170_28558[(1)] = (4));

(statearr_28170_28558[(5)] = null);

} else {
throw ex28164;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (8))){
var inst_28117 = (state_28134[(7)]);
var state_28134__$1 = state_28134;
var statearr_28171_28561 = state_28134__$1;
(statearr_28171_28561[(2)] = inst_28117);

(statearr_28171_28561[(1)] = (9));


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
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto____0 = (function (){
var statearr_28172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28172[(0)] = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto__);

(statearr_28172[(1)] = (1));

return statearr_28172;
});
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto____1 = (function (state_28134){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28134);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28173){var ex__27579__auto__ = e28173;
var statearr_28174_28563 = state_28134;
(statearr_28174_28563[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28134[(4)]))){
var statearr_28175_28564 = state_28134;
(statearr_28175_28564[(1)] = cljs.core.first((state_28134[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28565 = state_28134;
state_28134 = G__28565;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto__ = function(state_28134){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto____1.call(this,state_28134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28176 = f__27668__auto__();
(statearr_28176[(6)] = c__27667__auto__);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum.decode_event_data = (function lpdashboard$ethereum$decode_event_data(event){
try{var event_obj = lpdashboard.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e28177){if((e28177 instanceof Error)){
var err = e28177;
return console.log("prob parsing event:",event);
} else {
throw e28177;

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
}catch (e28178){if((e28178 instanceof Error)){
var err = e28178;
return console.log("prob parsing mint event:",event);
} else {
throw e28178;

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
}catch (e28179){if((e28179 instanceof Error)){
var err = e28179;
return console.log("prob parsing mint event:",event);
} else {
throw e28179;

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
}catch (e28183){if((e28183 instanceof Error)){
var err = e28183;
return console.log("prob parsing transfer event:",event);
} else {
throw e28183;

}
}});
lpdashboard.ethereum._LT_resolve_address = (function lpdashboard$ethereum$_LT_resolve_address(address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28199){
var state_val_28200 = (state_28199[(1)]);
if((state_val_28200 === (1))){
var inst_28184 = lpdashboard.ethereum.provider.resolveName(address);
var inst_28185 = cljs.core.async.interop.p__GT_c(inst_28184);
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28199__$1,(2),inst_28185);
} else {
if((state_val_28200 === (2))){
var inst_28187 = (state_28199[(7)]);
var inst_28187__$1 = (state_28199[(2)]);
var inst_28188 = (inst_28187__$1 instanceof cljs.core.ExceptionInfo);
var inst_28189 = cljs.core.ex_data(inst_28187__$1);
var inst_28190 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28189);
var inst_28191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28190,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28192 = ((inst_28188) && (inst_28191));
var state_28199__$1 = (function (){var statearr_28201 = state_28199;
(statearr_28201[(7)] = inst_28187__$1);

return statearr_28201;
})();
if(cljs.core.truth_(inst_28192)){
var statearr_28202_28571 = state_28199__$1;
(statearr_28202_28571[(1)] = (3));

} else {
var statearr_28203_28572 = state_28199__$1;
(statearr_28203_28572[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (3))){
var inst_28187 = (state_28199[(7)]);
var inst_28194 = (function(){throw inst_28187})();
var state_28199__$1 = state_28199;
var statearr_28205_28573 = state_28199__$1;
(statearr_28205_28573[(2)] = inst_28194);

(statearr_28205_28573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (4))){
var inst_28187 = (state_28199[(7)]);
var state_28199__$1 = state_28199;
var statearr_28207_28574 = state_28199__$1;
(statearr_28207_28574[(2)] = inst_28187);

(statearr_28207_28574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (5))){
var inst_28197 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28199__$1,inst_28197);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto____0 = (function (){
var statearr_28209 = [null,null,null,null,null,null,null,null];
(statearr_28209[(0)] = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto__);

(statearr_28209[(1)] = (1));

return statearr_28209;
});
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto____1 = (function (state_28199){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28199);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28210){var ex__27579__auto__ = e28210;
var statearr_28211_28580 = state_28199;
(statearr_28211_28580[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28199[(4)]))){
var statearr_28212_28584 = state_28199;
(statearr_28212_28584[(1)] = cljs.core.first((state_28199[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28585 = state_28199;
state_28199 = G__28585;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto__ = function(state_28199){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto____1.call(this,state_28199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28213 = f__27668__auto__();
(statearr_28213[(6)] = c__27667__auto__);

return statearr_28213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28235){
var state_val_28236 = (state_28235[(1)]);
if((state_val_28236 === (1))){
var inst_28218 = provider.getLogs(user_filter);
var inst_28219 = cljs.core.async.interop.p__GT_c(inst_28218);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28235__$1,(2),inst_28219);
} else {
if((state_val_28236 === (2))){
var inst_28221 = (state_28235[(7)]);
var inst_28221__$1 = (state_28235[(2)]);
var inst_28222 = (inst_28221__$1 instanceof cljs.core.ExceptionInfo);
var inst_28223 = cljs.core.ex_data(inst_28221__$1);
var inst_28224 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28223);
var inst_28225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28224,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28226 = ((inst_28222) && (inst_28225));
var state_28235__$1 = (function (){var statearr_28237 = state_28235;
(statearr_28237[(7)] = inst_28221__$1);

return statearr_28237;
})();
if(cljs.core.truth_(inst_28226)){
var statearr_28238_28621 = state_28235__$1;
(statearr_28238_28621[(1)] = (3));

} else {
var statearr_28239_28622 = state_28235__$1;
(statearr_28239_28622[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (3))){
var inst_28221 = (state_28235[(7)]);
var inst_28228 = (function(){throw inst_28221})();
var state_28235__$1 = state_28235;
var statearr_28240_28623 = state_28235__$1;
(statearr_28240_28623[(2)] = inst_28228);

(statearr_28240_28623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (4))){
var inst_28221 = (state_28235[(7)]);
var state_28235__$1 = state_28235;
var statearr_28241_28626 = state_28235__$1;
(statearr_28241_28626[(2)] = inst_28221);

(statearr_28241_28626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (5))){
var inst_28231 = (state_28235[(2)]);
var inst_28232 = (function (){var filtered_txs = inst_28231;
return (function (p1__28217_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__28217_SHARP_);
});
})();
var inst_28233 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_28232,inst_28231);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28235__$1,inst_28233);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto____0 = (function (){
var statearr_28242 = [null,null,null,null,null,null,null,null];
(statearr_28242[(0)] = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto__);

(statearr_28242[(1)] = (1));

return statearr_28242;
});
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto____1 = (function (state_28235){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28235);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28243){var ex__27579__auto__ = e28243;
var statearr_28244_28631 = state_28235;
(statearr_28244_28631[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28235[(4)]))){
var statearr_28245_28632 = state_28235;
(statearr_28245_28632[(1)] = cljs.core.first((state_28235[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28633 = state_28235;
state_28235 = G__28633;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto__ = function(state_28235){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto____1.call(this,state_28235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28246 = f__27668__auto__();
(statearr_28246[(6)] = c__27667__auto__);

return statearr_28246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_user_token_withdrawals = (function lpdashboard$ethereum$_LT_user_token_withdrawals(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.event_detector_abi,token_address);
var user_filter = (contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Withdraw.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28265){
var state_val_28266 = (state_28265[(1)]);
if((state_val_28266 === (1))){
var inst_28248 = provider.getLogs(user_filter);
var inst_28249 = cljs.core.async.interop.p__GT_c(inst_28248);
var state_28265__$1 = state_28265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28265__$1,(2),inst_28249);
} else {
if((state_val_28266 === (2))){
var inst_28251 = (state_28265[(7)]);
var inst_28251__$1 = (state_28265[(2)]);
var inst_28252 = (inst_28251__$1 instanceof cljs.core.ExceptionInfo);
var inst_28253 = cljs.core.ex_data(inst_28251__$1);
var inst_28254 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28253);
var inst_28255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28254,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28256 = ((inst_28252) && (inst_28255));
var state_28265__$1 = (function (){var statearr_28267 = state_28265;
(statearr_28267[(7)] = inst_28251__$1);

return statearr_28267;
})();
if(cljs.core.truth_(inst_28256)){
var statearr_28268_28641 = state_28265__$1;
(statearr_28268_28641[(1)] = (3));

} else {
var statearr_28269_28643 = state_28265__$1;
(statearr_28269_28643[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28266 === (3))){
var inst_28251 = (state_28265[(7)]);
var inst_28258 = (function(){throw inst_28251})();
var state_28265__$1 = state_28265;
var statearr_28270_28644 = state_28265__$1;
(statearr_28270_28644[(2)] = inst_28258);

(statearr_28270_28644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28266 === (4))){
var inst_28251 = (state_28265[(7)]);
var state_28265__$1 = state_28265;
var statearr_28271_28646 = state_28265__$1;
(statearr_28271_28646[(2)] = inst_28251);

(statearr_28271_28646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28266 === (5))){
var inst_28261 = (state_28265[(2)]);
var inst_28262 = (function (){var filtered_txs = inst_28261;
return (function (p1__28247_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__28247_SHARP_);
});
})();
var inst_28263 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_28262,inst_28261);
var state_28265__$1 = state_28265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28265__$1,inst_28263);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null,null];
(statearr_28272[(0)] = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto____1 = (function (state_28265){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28265);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28273){var ex__27579__auto__ = e28273;
var statearr_28274_28652 = state_28265;
(statearr_28274_28652[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28265[(4)]))){
var statearr_28275_28653 = state_28265;
(statearr_28275_28653[(1)] = cljs.core.first((state_28265[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28654 = state_28265;
state_28265 = G__28654;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto__ = function(state_28265){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto____1.call(this,state_28265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28276 = f__27668__auto__();
(statearr_28276[(6)] = c__27667__auto__);

return statearr_28276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_user_token_transfers = (function lpdashboard$ethereum$_LT_user_token_transfers(var_args){
var G__28279 = arguments.length;
switch (G__28279) {
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (1))){
var inst_28280 = provider.getLogs(user_filter);
var inst_28281 = cljs.core.async.interop.p__GT_c(inst_28280);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28300__$1,(2),inst_28281);
} else {
if((state_val_28301 === (2))){
var inst_28283 = (state_28300[(7)]);
var inst_28283__$1 = (state_28300[(2)]);
var inst_28284 = (inst_28283__$1 instanceof cljs.core.ExceptionInfo);
var inst_28285 = cljs.core.ex_data(inst_28283__$1);
var inst_28286 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28285);
var inst_28287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28286,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28288 = ((inst_28284) && (inst_28287));
var state_28300__$1 = (function (){var statearr_28302 = state_28300;
(statearr_28302[(7)] = inst_28283__$1);

return statearr_28302;
})();
if(cljs.core.truth_(inst_28288)){
var statearr_28303_28661 = state_28300__$1;
(statearr_28303_28661[(1)] = (3));

} else {
var statearr_28304_28662 = state_28300__$1;
(statearr_28304_28662[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var inst_28283 = (state_28300[(7)]);
var inst_28290 = (function(){throw inst_28283})();
var state_28300__$1 = state_28300;
var statearr_28305_28663 = state_28300__$1;
(statearr_28305_28663[(2)] = inst_28290);

(statearr_28305_28663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28283 = (state_28300[(7)]);
var state_28300__$1 = state_28300;
var statearr_28306_28664 = state_28300__$1;
(statearr_28306_28664[(2)] = inst_28283);

(statearr_28306_28664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (5))){
var inst_28293 = (state_28300[(2)]);
var inst_28294 = lpdashboard.ethereum._LT_token_decimals(token_address);
var state_28300__$1 = (function (){var statearr_28307 = state_28300;
(statearr_28307[(8)] = inst_28293);

return statearr_28307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28300__$1,(6),inst_28294);
} else {
if((state_val_28301 === (6))){
var inst_28293 = (state_28300[(8)]);
var inst_28296 = (state_28300[(2)]);
var inst_28297 = (function (){var filtered_txs = inst_28293;
var decimals = inst_28296;
return (function (p1__28277_SHARP_){
return lpdashboard.ethereum.make_token_tx(p1__28277_SHARP_,decimals);
});
})();
var inst_28298 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_28297,inst_28293);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28300__$1,inst_28298);
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
var lpdashboard$ethereum$state_machine__27576__auto__ = null;
var lpdashboard$ethereum$state_machine__27576__auto____0 = (function (){
var statearr_28308 = [null,null,null,null,null,null,null,null,null];
(statearr_28308[(0)] = lpdashboard$ethereum$state_machine__27576__auto__);

(statearr_28308[(1)] = (1));

return statearr_28308;
});
var lpdashboard$ethereum$state_machine__27576__auto____1 = (function (state_28300){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28300);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28309){var ex__27579__auto__ = e28309;
var statearr_28310_28665 = state_28300;
(statearr_28310_28665[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28300[(4)]))){
var statearr_28311_28666 = state_28300;
(statearr_28311_28666[(1)] = cljs.core.first((state_28300[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28667 = state_28300;
state_28300 = G__28667;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__27576__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__27576__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__27576__auto____0;
lpdashboard$ethereum$state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__27576__auto____1;
return lpdashboard$ethereum$state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28312 = f__27668__auto__();
(statearr_28312[(6)] = c__27667__auto__);

return statearr_28312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}));

(lpdashboard.ethereum._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

lpdashboard.ethereum._LT_user_lp_mint_transfers = (function lpdashboard$ethereum$_LT_user_lp_mint_transfers(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(null,user_address) : contract.filters.Transfer.call(null,null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28329){
var state_val_28330 = (state_28329[(1)]);
if((state_val_28330 === (1))){
var inst_28313 = provider.getLogs(user_filter);
var inst_28314 = cljs.core.async.interop.p__GT_c(inst_28313);
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28329__$1,(2),inst_28314);
} else {
if((state_val_28330 === (2))){
var inst_28316 = (state_28329[(7)]);
var inst_28316__$1 = (state_28329[(2)]);
var inst_28317 = (inst_28316__$1 instanceof cljs.core.ExceptionInfo);
var inst_28318 = cljs.core.ex_data(inst_28316__$1);
var inst_28319 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28318);
var inst_28320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28319,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28321 = ((inst_28317) && (inst_28320));
var state_28329__$1 = (function (){var statearr_28331 = state_28329;
(statearr_28331[(7)] = inst_28316__$1);

return statearr_28331;
})();
if(cljs.core.truth_(inst_28321)){
var statearr_28332_28670 = state_28329__$1;
(statearr_28332_28670[(1)] = (3));

} else {
var statearr_28333_28675 = state_28329__$1;
(statearr_28333_28675[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (3))){
var inst_28316 = (state_28329[(7)]);
var inst_28323 = (function(){throw inst_28316})();
var state_28329__$1 = state_28329;
var statearr_28334_28681 = state_28329__$1;
(statearr_28334_28681[(2)] = inst_28323);

(statearr_28334_28681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (4))){
var inst_28316 = (state_28329[(7)]);
var state_28329__$1 = state_28329;
var statearr_28335_28695 = state_28329__$1;
(statearr_28335_28695[(2)] = inst_28316);

(statearr_28335_28695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28330 === (5))){
var inst_28326 = (state_28329[(2)]);
var inst_28327 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_28326);
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28329__$1,inst_28327);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto____0 = (function (){
var statearr_28336 = [null,null,null,null,null,null,null,null];
(statearr_28336[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto__);

(statearr_28336[(1)] = (1));

return statearr_28336;
});
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto____1 = (function (state_28329){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28329);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28337){var ex__27579__auto__ = e28337;
var statearr_28338_28698 = state_28329;
(statearr_28338_28698[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28329[(4)]))){
var statearr_28339_28699 = state_28329;
(statearr_28339_28699[(1)] = cljs.core.first((state_28329[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28700 = state_28329;
state_28329 = G__28700;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto__ = function(state_28329){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto____1.call(this,state_28329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28340 = f__27668__auto__();
(statearr_28340[(6)] = c__27667__auto__);

return statearr_28340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_user_lp_burn_transfers = (function lpdashboard$ethereum$_LT_user_lp_burn_transfers(provider,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,null) : contract.filters.Transfer.call(null,user_address,null));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28357){
var state_val_28358 = (state_28357[(1)]);
if((state_val_28358 === (1))){
var inst_28341 = provider.getLogs(user_filter);
var inst_28342 = cljs.core.async.interop.p__GT_c(inst_28341);
var state_28357__$1 = state_28357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28357__$1,(2),inst_28342);
} else {
if((state_val_28358 === (2))){
var inst_28344 = (state_28357[(7)]);
var inst_28344__$1 = (state_28357[(2)]);
var inst_28345 = (inst_28344__$1 instanceof cljs.core.ExceptionInfo);
var inst_28346 = cljs.core.ex_data(inst_28344__$1);
var inst_28347 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28346);
var inst_28348 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28347,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28349 = ((inst_28345) && (inst_28348));
var state_28357__$1 = (function (){var statearr_28359 = state_28357;
(statearr_28359[(7)] = inst_28344__$1);

return statearr_28359;
})();
if(cljs.core.truth_(inst_28349)){
var statearr_28360_28707 = state_28357__$1;
(statearr_28360_28707[(1)] = (3));

} else {
var statearr_28361_28709 = state_28357__$1;
(statearr_28361_28709[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (3))){
var inst_28344 = (state_28357[(7)]);
var inst_28351 = (function(){throw inst_28344})();
var state_28357__$1 = state_28357;
var statearr_28362_28712 = state_28357__$1;
(statearr_28362_28712[(2)] = inst_28351);

(statearr_28362_28712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (4))){
var inst_28344 = (state_28357[(7)]);
var state_28357__$1 = state_28357;
var statearr_28363_28713 = state_28357__$1;
(statearr_28363_28713[(2)] = inst_28344);

(statearr_28363_28713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (5))){
var inst_28354 = (state_28357[(2)]);
var inst_28355 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_28354);
var state_28357__$1 = state_28357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28357__$1,inst_28355);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto____0 = (function (){
var statearr_28364 = [null,null,null,null,null,null,null,null];
(statearr_28364[(0)] = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto__);

(statearr_28364[(1)] = (1));

return statearr_28364;
});
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto____1 = (function (state_28357){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28357);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28365){var ex__27579__auto__ = e28365;
var statearr_28366_28715 = state_28357;
(statearr_28366_28715[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28357[(4)]))){
var statearr_28367_28719 = state_28357;
(statearr_28367_28719[(1)] = cljs.core.first((state_28357[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28731 = state_28357;
state_28357 = G__28731;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto__ = function(state_28357){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto____1.call(this,state_28357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28368 = f__27668__auto__();
(statearr_28368[(6)] = c__27667__auto__);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_user_lp_mint_deposits = (function lpdashboard$ethereum$_LT_user_lp_mint_deposits(provider,pair_address,token_address,user_address){
var contract = lpdashboard.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,pair_address) : contract.filters.Transfer.call(null,user_address,pair_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28385){
var state_val_28386 = (state_28385[(1)]);
if((state_val_28386 === (1))){
var inst_28369 = provider.getLogs(user_filter);
var inst_28370 = cljs.core.async.interop.p__GT_c(inst_28369);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28385__$1,(2),inst_28370);
} else {
if((state_val_28386 === (2))){
var inst_28372 = (state_28385[(7)]);
var inst_28372__$1 = (state_28385[(2)]);
var inst_28373 = (inst_28372__$1 instanceof cljs.core.ExceptionInfo);
var inst_28374 = cljs.core.ex_data(inst_28372__$1);
var inst_28375 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28374);
var inst_28376 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28375,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28377 = ((inst_28373) && (inst_28376));
var state_28385__$1 = (function (){var statearr_28387 = state_28385;
(statearr_28387[(7)] = inst_28372__$1);

return statearr_28387;
})();
if(cljs.core.truth_(inst_28377)){
var statearr_28388_28793 = state_28385__$1;
(statearr_28388_28793[(1)] = (3));

} else {
var statearr_28389_28794 = state_28385__$1;
(statearr_28389_28794[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (3))){
var inst_28372 = (state_28385[(7)]);
var inst_28379 = (function(){throw inst_28372})();
var state_28385__$1 = state_28385;
var statearr_28390_28795 = state_28385__$1;
(statearr_28390_28795[(2)] = inst_28379);

(statearr_28390_28795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (4))){
var inst_28372 = (state_28385[(7)]);
var state_28385__$1 = state_28385;
var statearr_28391_28796 = state_28385__$1;
(statearr_28391_28796[(2)] = inst_28372);

(statearr_28391_28796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (5))){
var inst_28382 = (state_28385[(2)]);
var inst_28383 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_28382);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28385__$1,inst_28383);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto____0 = (function (){
var statearr_28392 = [null,null,null,null,null,null,null,null];
(statearr_28392[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto__);

(statearr_28392[(1)] = (1));

return statearr_28392;
});
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto____1 = (function (state_28385){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28385);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28393){var ex__27579__auto__ = e28393;
var statearr_28394_28802 = state_28385;
(statearr_28394_28802[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28385[(4)]))){
var statearr_28395_28803 = state_28385;
(statearr_28395_28803[(1)] = cljs.core.first((state_28385[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28806 = state_28385;
state_28385 = G__28806;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto__ = function(state_28385){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto____1.call(this,state_28385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28396 = f__27668__auto__();
(statearr_28396[(6)] = c__27667__auto__);

return statearr_28396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_get_tx_receipt = (function lpdashboard$ethereum$_LT_get_tx_receipt(txhash){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28412){
var state_val_28413 = (state_28412[(1)]);
if((state_val_28413 === (1))){
var inst_28397 = lpdashboard.ethereum.provider.getTransactionReceipt(txhash);
var inst_28398 = cljs.core.async.interop.p__GT_c(inst_28397);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28412__$1,(2),inst_28398);
} else {
if((state_val_28413 === (2))){
var inst_28400 = (state_28412[(7)]);
var inst_28400__$1 = (state_28412[(2)]);
var inst_28401 = (inst_28400__$1 instanceof cljs.core.ExceptionInfo);
var inst_28402 = cljs.core.ex_data(inst_28400__$1);
var inst_28403 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28402);
var inst_28404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28403,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28405 = ((inst_28401) && (inst_28404));
var state_28412__$1 = (function (){var statearr_28414 = state_28412;
(statearr_28414[(7)] = inst_28400__$1);

return statearr_28414;
})();
if(cljs.core.truth_(inst_28405)){
var statearr_28415_28814 = state_28412__$1;
(statearr_28415_28814[(1)] = (3));

} else {
var statearr_28416_28815 = state_28412__$1;
(statearr_28416_28815[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (3))){
var inst_28400 = (state_28412[(7)]);
var inst_28407 = (function(){throw inst_28400})();
var state_28412__$1 = state_28412;
var statearr_28417_28817 = state_28412__$1;
(statearr_28417_28817[(2)] = inst_28407);

(statearr_28417_28817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (4))){
var inst_28400 = (state_28412[(7)]);
var state_28412__$1 = state_28412;
var statearr_28418_28818 = state_28412__$1;
(statearr_28418_28818[(2)] = inst_28400);

(statearr_28418_28818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (5))){
var inst_28410 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28412__$1,inst_28410);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto____0 = (function (){
var statearr_28419 = [null,null,null,null,null,null,null,null];
(statearr_28419[(0)] = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto__);

(statearr_28419[(1)] = (1));

return statearr_28419;
});
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto____1 = (function (state_28412){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28412);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28420){var ex__27579__auto__ = e28420;
var statearr_28421_28824 = state_28412;
(statearr_28421_28824[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28412[(4)]))){
var statearr_28422_28826 = state_28412;
(statearr_28422_28826[(1)] = cljs.core.first((state_28412[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28827 = state_28412;
state_28412 = G__28827;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28423 = f__27668__auto__();
(statearr_28423[(6)] = c__27667__auto__);

return statearr_28423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_get_tx = (function lpdashboard$ethereum$_LT_get_tx(txhash){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28439){
var state_val_28440 = (state_28439[(1)]);
if((state_val_28440 === (1))){
var inst_28424 = lpdashboard.ethereum.provider.getTransaction(txhash);
var inst_28425 = cljs.core.async.interop.p__GT_c(inst_28424);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28439__$1,(2),inst_28425);
} else {
if((state_val_28440 === (2))){
var inst_28427 = (state_28439[(7)]);
var inst_28427__$1 = (state_28439[(2)]);
var inst_28428 = (inst_28427__$1 instanceof cljs.core.ExceptionInfo);
var inst_28429 = cljs.core.ex_data(inst_28427__$1);
var inst_28430 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28429);
var inst_28431 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28430,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28432 = ((inst_28428) && (inst_28431));
var state_28439__$1 = (function (){var statearr_28441 = state_28439;
(statearr_28441[(7)] = inst_28427__$1);

return statearr_28441;
})();
if(cljs.core.truth_(inst_28432)){
var statearr_28442_28834 = state_28439__$1;
(statearr_28442_28834[(1)] = (3));

} else {
var statearr_28443_28835 = state_28439__$1;
(statearr_28443_28835[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (3))){
var inst_28427 = (state_28439[(7)]);
var inst_28434 = (function(){throw inst_28427})();
var state_28439__$1 = state_28439;
var statearr_28444_28837 = state_28439__$1;
(statearr_28444_28837[(2)] = inst_28434);

(statearr_28444_28837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (4))){
var inst_28427 = (state_28439[(7)]);
var state_28439__$1 = state_28439;
var statearr_28445_28839 = state_28439__$1;
(statearr_28445_28839[(2)] = inst_28427);

(statearr_28445_28839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (5))){
var inst_28437 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28439__$1,inst_28437);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto____1 = (function (state_28439){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28439);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28447){var ex__27579__auto__ = e28447;
var statearr_28448_28844 = state_28439;
(statearr_28448_28844[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28439[(4)]))){
var statearr_28449_28846 = state_28439;
(statearr_28449_28846[(1)] = cljs.core.first((state_28439[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28848 = state_28439;
state_28439 = G__28848;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto__ = function(state_28439){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto____1.call(this,state_28439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28450 = f__27668__auto__();
(statearr_28450[(6)] = c__27667__auto__);

return statearr_28450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_get_tx_with_receipt = (function lpdashboard$ethereum$_LT_get_tx_with_receipt(txhash){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (1))){
var inst_28451 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_28452 = lpdashboard.ethereum._LT_get_tx(txhash);
var state_28461__$1 = (function (){var statearr_28463 = state_28461;
(statearr_28463[(7)] = inst_28451);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28461__$1,(2),inst_28452);
} else {
if((state_val_28462 === (2))){
var inst_28454 = (state_28461[(2)]);
var inst_28455 = lpdashboard.ethereum._LT_get_tx_receipt(txhash);
var state_28461__$1 = (function (){var statearr_28464 = state_28461;
(statearr_28464[(8)] = inst_28454);

return statearr_28464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28461__$1,(3),inst_28455);
} else {
if((state_val_28462 === (3))){
var inst_28451 = (state_28461[(7)]);
var inst_28454 = (state_28461[(8)]);
var inst_28457 = (state_28461[(2)]);
var inst_28458 = [inst_28454,inst_28457];
var inst_28459 = cljs.core.PersistentHashMap.fromArrays(inst_28451,inst_28458);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28461__$1,inst_28459);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto____0 = (function (){
var statearr_28465 = [null,null,null,null,null,null,null,null,null];
(statearr_28465[(0)] = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto__);

(statearr_28465[(1)] = (1));

return statearr_28465;
});
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto____1 = (function (state_28461){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28461);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28466){var ex__27579__auto__ = e28466;
var statearr_28467_28859 = state_28461;
(statearr_28467_28859[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28461[(4)]))){
var statearr_28468_28860 = state_28461;
(statearr_28468_28860[(1)] = cljs.core.first((state_28461[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28861 = state_28461;
state_28461 = G__28861;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28469 = f__27668__auto__();
(statearr_28469[(6)] = c__27667__auto__);

return statearr_28469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum._LT_get_trxs = (function lpdashboard$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28474){
var state_val_28475 = (state_28474[(1)]);
if((state_val_28475 === (1))){
var inst_28470 = lpdashboard.ethereum._LT_get_tx_with_receipt(x);
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28474__$1,(2),inst_28470);
} else {
if((state_val_28475 === (2))){
var inst_28472 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28474__$1,inst_28472);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto____0 = (function (){
var statearr_28476 = [null,null,null,null,null,null,null];
(statearr_28476[(0)] = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto__);

(statearr_28476[(1)] = (1));

return statearr_28476;
});
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto____1 = (function (state_28474){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28474);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28477){var ex__27579__auto__ = e28477;
var statearr_28478_28867 = state_28474;
(statearr_28478_28867[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28474[(4)]))){
var statearr_28479_28868 = state_28474;
(statearr_28479_28868[(1)] = cljs.core.first((state_28474[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28873 = state_28474;
state_28474 = G__28873;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto__ = function(state_28474){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto____1.call(this,state_28474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28480 = f__27668__auto__();
(statearr_28480[(6)] = c__27667__auto__);

return statearr_28480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
lpdashboard.ethereum._LT_user_token_destinations = (function lpdashboard$ethereum$_LT_user_token_destinations(provider,token_address,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28493){
var state_val_28494 = (state_28493[(1)]);
if((state_val_28494 === (1))){
var inst_28482 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28493__$1,(2),inst_28482);
} else {
if((state_val_28494 === (2))){
var inst_28484 = (state_28493[(2)]);
var inst_28485 = cljs.core.group_by(new cljs.core.Keyword(null,"to","to",192099007),inst_28484);
var inst_28486 = cljs.core.vals(inst_28485);
var inst_28487 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_28486);
var inst_28488 = (function (){var user_txs = inst_28484;
var distinct_tos = inst_28487;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_28489 = (function (){var user_txs = inst_28484;
var distinct_tos = inst_28487;
return (function (p1__28481_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__28481_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_28490 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_28489,inst_28487);
var inst_28491 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_28488,inst_28490);
var state_28493__$1 = state_28493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28493__$1,inst_28491);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null];
(statearr_28495[(0)] = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto____1 = (function (state_28493){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28493);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28496){var ex__27579__auto__ = e28496;
var statearr_28497_28911 = state_28493;
(statearr_28497_28911[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28493[(4)]))){
var statearr_28498_28913 = state_28493;
(statearr_28498_28913[(1)] = cljs.core.first((state_28493[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28493;
state_28493 = G__28914;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto__ = function(state_28493){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto____1.call(this,state_28493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28499 = f__27668__auto__();
(statearr_28499[(6)] = c__27667__auto__);

return statearr_28499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.ethereum.decode_tx_data_args = (function lpdashboard$ethereum$decode_tx_data_args(fn_abi,hexdata){
var args_part = module$node_modules$ethers$dist$ethers_umd.utils.hexDataSlice(hexdata,(4));
var _ = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_part], 0));
return module$node_modules$ethers$dist$ethers_umd.utils.defaultAbiCoder.decode(cljs.core.clj__GT_js(fn_abi),args_part);
});
lpdashboard.ethereum._LT_erc20_infos = (function lpdashboard$ethereum$_LT_erc20_infos(tokens){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28504){
var state_val_28505 = (state_28504[(1)]);
if((state_val_28505 === (1))){
var inst_28500 = lpdashboard.ethereum._LT_erc20_info(a);
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28504__$1,(2),inst_28500);
} else {
if((state_val_28505 === (2))){
var inst_28502 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28504__$1,inst_28502);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto____0 = (function (){
var statearr_28506 = [null,null,null,null,null,null,null];
(statearr_28506[(0)] = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto__);

(statearr_28506[(1)] = (1));

return statearr_28506;
});
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto____1 = (function (state_28504){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28504);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28507){var ex__27579__auto__ = e28507;
var statearr_28508_28921 = state_28504;
(statearr_28508_28921[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28504[(4)]))){
var statearr_28509_28923 = state_28504;
(statearr_28509_28923[(1)] = cljs.core.first((state_28504[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28925 = state_28504;
state_28504 = G__28925;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto__ = function(state_28504){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto____1.call(this,state_28504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto____0;
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto____1;
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28510 = f__27668__auto__();
(statearr_28510[(6)] = c__27667__auto__);

return statearr_28510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}),tokens)));
});

//# sourceMappingURL=lpdashboard.ethereum.js.map
