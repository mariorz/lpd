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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_76924){
var state_val_76925 = (state_76924[(1)]);
if((state_val_76925 === (7))){
var inst_76895 = (state_76924[(7)]);
var inst_76902 = (function(){throw inst_76895})();
var state_76924__$1 = state_76924;
var statearr_76926_77323 = state_76924__$1;
(statearr_76926_77323[(2)] = inst_76902);

(statearr_76926_77323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (1))){
var inst_76877 = (state_76924[(8)]);
var inst_76877__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,address);
var inst_76878 = inst_76877__$1.decimals();
var inst_76879 = cljs.core.async.interop.p__GT_c(inst_76878);
var state_76924__$1 = (function (){var statearr_76927 = state_76924;
(statearr_76927[(8)] = inst_76877__$1);

return statearr_76927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76924__$1,(2),inst_76879);
} else {
if((state_val_76925 === (4))){
var inst_76881 = (state_76924[(9)]);
var state_76924__$1 = state_76924;
var statearr_76928_77324 = state_76924__$1;
(statearr_76928_77324[(2)] = inst_76881);

(statearr_76928_77324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (13))){
var inst_76905 = (state_76924[(10)]);
var inst_76891 = (state_76924[(11)]);
var inst_76919 = (state_76924[(2)]);
var inst_76920 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_76921 = [address,inst_76905,inst_76919,inst_76891];
var inst_76922 = cljs.core.PersistentHashMap.fromArrays(inst_76920,inst_76921);
var state_76924__$1 = state_76924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76924__$1,inst_76922);
} else {
if((state_val_76925 === (6))){
var inst_76895 = (state_76924[(7)]);
var inst_76895__$1 = (state_76924[(2)]);
var inst_76896 = (inst_76895__$1 instanceof cljs.core.ExceptionInfo);
var inst_76897 = cljs.core.ex_data(inst_76895__$1);
var inst_76898 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76897);
var inst_76899 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76898,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76900 = ((inst_76896) && (inst_76899));
var state_76924__$1 = (function (){var statearr_76929 = state_76924;
(statearr_76929[(7)] = inst_76895__$1);

return statearr_76929;
})();
if(cljs.core.truth_(inst_76900)){
var statearr_76930_77325 = state_76924__$1;
(statearr_76930_77325[(1)] = (7));

} else {
var statearr_76931_77326 = state_76924__$1;
(statearr_76931_77326[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (3))){
var inst_76881 = (state_76924[(9)]);
var inst_76888 = (function(){throw inst_76881})();
var state_76924__$1 = state_76924;
var statearr_76932_77327 = state_76924__$1;
(statearr_76932_77327[(2)] = inst_76888);

(statearr_76932_77327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (12))){
var inst_76909 = (state_76924[(12)]);
var state_76924__$1 = state_76924;
var statearr_76933_77328 = state_76924__$1;
(statearr_76933_77328[(2)] = inst_76909);

(statearr_76933_77328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (2))){
var inst_76881 = (state_76924[(9)]);
var inst_76881__$1 = (state_76924[(2)]);
var inst_76882 = (inst_76881__$1 instanceof cljs.core.ExceptionInfo);
var inst_76883 = cljs.core.ex_data(inst_76881__$1);
var inst_76884 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76883);
var inst_76885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76884,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76886 = ((inst_76882) && (inst_76885));
var state_76924__$1 = (function (){var statearr_76934 = state_76924;
(statearr_76934[(9)] = inst_76881__$1);

return statearr_76934;
})();
if(cljs.core.truth_(inst_76886)){
var statearr_76935_77330 = state_76924__$1;
(statearr_76935_77330[(1)] = (3));

} else {
var statearr_76936_77332 = state_76924__$1;
(statearr_76936_77332[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (11))){
var inst_76909 = (state_76924[(12)]);
var inst_76916 = (function(){throw inst_76909})();
var state_76924__$1 = state_76924;
var statearr_76937_77345 = state_76924__$1;
(statearr_76937_77345[(2)] = inst_76916);

(statearr_76937_77345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (9))){
var inst_76877 = (state_76924[(8)]);
var inst_76905 = (state_76924[(2)]);
var inst_76906 = inst_76877.symbol();
var inst_76907 = cljs.core.async.interop.p__GT_c(inst_76906);
var state_76924__$1 = (function (){var statearr_76938 = state_76924;
(statearr_76938[(10)] = inst_76905);

return statearr_76938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76924__$1,(10),inst_76907);
} else {
if((state_val_76925 === (5))){
var inst_76877 = (state_76924[(8)]);
var inst_76891 = (state_76924[(2)]);
var inst_76892 = inst_76877.name();
var inst_76893 = cljs.core.async.interop.p__GT_c(inst_76892);
var state_76924__$1 = (function (){var statearr_76939 = state_76924;
(statearr_76939[(11)] = inst_76891);

return statearr_76939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76924__$1,(6),inst_76893);
} else {
if((state_val_76925 === (10))){
var inst_76909 = (state_76924[(12)]);
var inst_76909__$1 = (state_76924[(2)]);
var inst_76910 = (inst_76909__$1 instanceof cljs.core.ExceptionInfo);
var inst_76911 = cljs.core.ex_data(inst_76909__$1);
var inst_76912 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76911);
var inst_76913 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76912,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76914 = ((inst_76910) && (inst_76913));
var state_76924__$1 = (function (){var statearr_76940 = state_76924;
(statearr_76940[(12)] = inst_76909__$1);

return statearr_76940;
})();
if(cljs.core.truth_(inst_76914)){
var statearr_76941_77354 = state_76924__$1;
(statearr_76941_77354[(1)] = (11));

} else {
var statearr_76942_77355 = state_76924__$1;
(statearr_76942_77355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76925 === (8))){
var inst_76895 = (state_76924[(7)]);
var state_76924__$1 = state_76924;
var statearr_76943_77356 = state_76924__$1;
(statearr_76943_77356[(2)] = inst_76895);

(statearr_76943_77356[(1)] = (9));


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
var statearr_76944 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76944[(0)] = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__);

(statearr_76944[(1)] = (1));

return statearr_76944;
});
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1 = (function (state_76924){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_76924);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e76945){var ex__36688__auto__ = e76945;
var statearr_76946_77359 = state_76924;
(statearr_76946_77359[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_76924[(4)]))){
var statearr_76947_77360 = state_76924;
(statearr_76947_77360[(1)] = cljs.core.first((state_76924[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77362 = state_76924;
state_76924 = G__77362;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__ = function(state_76924){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1.call(this,state_76924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_76948 = f__36777__auto__();
(statearr_76948[(6)] = c__36776__auto__);

return statearr_76948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_token_decimals = (function lpdashboard$ethereum$_LT_token_decimals(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_76975){
var state_val_76976 = (state_76975[(1)]);
if((state_val_76976 === (7))){
var inst_76960 = (state_76975[(7)]);
var inst_76967 = (function(){throw inst_76960})();
var state_76975__$1 = state_76975;
var statearr_76977_77366 = state_76975__$1;
(statearr_76977_77366[(2)] = inst_76967);

(statearr_76977_77366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76976 === (1))){
var inst_76949 = lpdashboard.ethereum.make_erc20(address);
var state_76975__$1 = (function (){var statearr_76978 = state_76975;
(statearr_76978[(8)] = inst_76949);

return statearr_76978;
})();
var statearr_76979_77368 = state_76975__$1;
(statearr_76979_77368[(2)] = null);

(statearr_76979_77368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76976 === (4))){
var inst_76950 = (state_76975[(2)]);
var inst_76951 = console.log("No decimals method for:",address);
var state_76975__$1 = (function (){var statearr_76980 = state_76975;
(statearr_76980[(9)] = inst_76950);

(statearr_76980[(10)] = inst_76951);

return statearr_76980;
})();
var statearr_76981_77369 = state_76975__$1;
(statearr_76981_77369[(2)] = (18));

(statearr_76981_77369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76976 === (6))){
var inst_76960 = (state_76975[(7)]);
var inst_76960__$1 = (state_76975[(2)]);
var inst_76961 = (inst_76960__$1 instanceof cljs.core.ExceptionInfo);
var inst_76962 = cljs.core.ex_data(inst_76960__$1);
var inst_76963 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76962);
var inst_76964 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76963,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76965 = ((inst_76961) && (inst_76964));
var state_76975__$1 = (function (){var statearr_76982 = state_76975;
(statearr_76982[(7)] = inst_76960__$1);

return statearr_76982;
})();
if(cljs.core.truth_(inst_76965)){
var statearr_76983_77370 = state_76975__$1;
(statearr_76983_77370[(1)] = (7));

} else {
var statearr_76984_77371 = state_76975__$1;
(statearr_76984_77371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76976 === (3))){
var inst_76973 = (state_76975[(2)]);
var state_76975__$1 = state_76975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76975__$1,inst_76973);
} else {
if((state_val_76976 === (2))){
var inst_76949 = (state_76975[(8)]);
var _ = (function (){var statearr_76986 = state_76975;
(statearr_76986[(4)] = cljs.core.cons((5),(state_76975[(4)])));

return statearr_76986;
})();
var inst_76957 = inst_76949.decimals();
var inst_76958 = cljs.core.async.interop.p__GT_c(inst_76957);
var state_76975__$1 = state_76975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76975__$1,(6),inst_76958);
} else {
if((state_val_76976 === (9))){
var inst_76970 = (state_76975[(2)]);
var _ = (function (){var statearr_76987 = state_76975;
(statearr_76987[(4)] = cljs.core.rest((state_76975[(4)])));

return statearr_76987;
})();
var state_76975__$1 = state_76975;
var statearr_76988_77372 = state_76975__$1;
(statearr_76988_77372[(2)] = inst_76970);

(statearr_76988_77372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76976 === (5))){
var _ = (function (){var statearr_76989 = state_76975;
(statearr_76989[(4)] = cljs.core.rest((state_76975[(4)])));

return statearr_76989;
})();
var state_76975__$1 = state_76975;
var ex76985 = (state_76975__$1[(2)]);
var statearr_76990_77377 = state_76975__$1;
(statearr_76990_77377[(5)] = ex76985);


if((ex76985 instanceof Error)){
var statearr_76991_77378 = state_76975__$1;
(statearr_76991_77378[(1)] = (4));

(statearr_76991_77378[(5)] = null);

} else {
throw ex76985;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76976 === (8))){
var inst_76960 = (state_76975[(7)]);
var state_76975__$1 = state_76975;
var statearr_76992_77379 = state_76975__$1;
(statearr_76992_77379[(2)] = inst_76960);

(statearr_76992_77379[(1)] = (9));


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
var statearr_76993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76993[(0)] = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__);

(statearr_76993[(1)] = (1));

return statearr_76993;
});
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1 = (function (state_76975){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_76975);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e76994){var ex__36688__auto__ = e76994;
var statearr_76995_77384 = state_76975;
(statearr_76995_77384[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_76975[(4)]))){
var statearr_76996_77389 = state_76975;
(statearr_76996_77389[(1)] = cljs.core.first((state_76975[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77390 = state_76975;
state_76975 = G__77390;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__ = function(state_76975){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1.call(this,state_76975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_76997 = f__36777__auto__();
(statearr_76997[(6)] = c__36776__auto__);

return statearr_76997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum.decode_event_data = (function lpdashboard$ethereum$decode_event_data(event){
try{var event_obj = lpdashboard.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e76998){if((e76998 instanceof Error)){
var err = e76998;
return null;
} else {
throw e76998;

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
}catch (e76999){if((e76999 instanceof Error)){
var err = e76999;
return null;
} else {
throw e76999;

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
}catch (e77000){if((e77000 instanceof Error)){
var err = e77000;
return null;
} else {
throw e77000;

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
}catch (e77001){if((e77001 instanceof Error)){
var err = e77001;
return null;
} else {
throw e77001;

}
}});
lpdashboard.ethereum._LT_resolve_address = (function lpdashboard$ethereum$_LT_resolve_address(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77017){
var state_val_77018 = (state_77017[(1)]);
if((state_val_77018 === (1))){
var inst_77002 = lpdashboard.ethereum.provider.resolveName(address);
var inst_77003 = cljs.core.async.interop.p__GT_c(inst_77002);
var state_77017__$1 = state_77017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77017__$1,(2),inst_77003);
} else {
if((state_val_77018 === (2))){
var inst_77005 = (state_77017[(7)]);
var inst_77005__$1 = (state_77017[(2)]);
var inst_77006 = (inst_77005__$1 instanceof cljs.core.ExceptionInfo);
var inst_77007 = cljs.core.ex_data(inst_77005__$1);
var inst_77008 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77007);
var inst_77009 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77008,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77010 = ((inst_77006) && (inst_77009));
var state_77017__$1 = (function (){var statearr_77019 = state_77017;
(statearr_77019[(7)] = inst_77005__$1);

return statearr_77019;
})();
if(cljs.core.truth_(inst_77010)){
var statearr_77020_77429 = state_77017__$1;
(statearr_77020_77429[(1)] = (3));

} else {
var statearr_77021_77430 = state_77017__$1;
(statearr_77021_77430[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77018 === (3))){
var inst_77005 = (state_77017[(7)]);
var inst_77012 = (function(){throw inst_77005})();
var state_77017__$1 = state_77017;
var statearr_77022_77431 = state_77017__$1;
(statearr_77022_77431[(2)] = inst_77012);

(statearr_77022_77431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77018 === (4))){
var inst_77005 = (state_77017[(7)]);
var state_77017__$1 = state_77017;
var statearr_77023_77434 = state_77017__$1;
(statearr_77023_77434[(2)] = inst_77005);

(statearr_77023_77434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77018 === (5))){
var inst_77015 = (state_77017[(2)]);
var state_77017__$1 = state_77017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77017__$1,inst_77015);
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
var statearr_77024 = [null,null,null,null,null,null,null,null];
(statearr_77024[(0)] = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__);

(statearr_77024[(1)] = (1));

return statearr_77024;
});
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1 = (function (state_77017){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77017);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77025){var ex__36688__auto__ = e77025;
var statearr_77026_77438 = state_77017;
(statearr_77026_77438[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77017[(4)]))){
var statearr_77027_77439 = state_77017;
(statearr_77027_77439[(1)] = cljs.core.first((state_77017[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77442 = state_77017;
state_77017 = G__77442;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__ = function(state_77017){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1.call(this,state_77017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77028 = f__36777__auto__();
(statearr_77028[(6)] = c__36776__auto__);

return statearr_77028;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77047){
var state_val_77048 = (state_77047[(1)]);
if((state_val_77048 === (1))){
var inst_77030 = provider.getLogs(user_filter);
var inst_77031 = cljs.core.async.interop.p__GT_c(inst_77030);
var state_77047__$1 = state_77047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77047__$1,(2),inst_77031);
} else {
if((state_val_77048 === (2))){
var inst_77033 = (state_77047[(7)]);
var inst_77033__$1 = (state_77047[(2)]);
var inst_77034 = (inst_77033__$1 instanceof cljs.core.ExceptionInfo);
var inst_77035 = cljs.core.ex_data(inst_77033__$1);
var inst_77036 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77035);
var inst_77037 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77036,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77038 = ((inst_77034) && (inst_77037));
var state_77047__$1 = (function (){var statearr_77049 = state_77047;
(statearr_77049[(7)] = inst_77033__$1);

return statearr_77049;
})();
if(cljs.core.truth_(inst_77038)){
var statearr_77050_77453 = state_77047__$1;
(statearr_77050_77453[(1)] = (3));

} else {
var statearr_77051_77454 = state_77047__$1;
(statearr_77051_77454[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77048 === (3))){
var inst_77033 = (state_77047[(7)]);
var inst_77040 = (function(){throw inst_77033})();
var state_77047__$1 = state_77047;
var statearr_77052_77455 = state_77047__$1;
(statearr_77052_77455[(2)] = inst_77040);

(statearr_77052_77455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77048 === (4))){
var inst_77033 = (state_77047[(7)]);
var state_77047__$1 = state_77047;
var statearr_77053_77457 = state_77047__$1;
(statearr_77053_77457[(2)] = inst_77033);

(statearr_77053_77457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77048 === (5))){
var inst_77043 = (state_77047[(2)]);
var inst_77044 = (function (){var filtered_txs = inst_77043;
return (function (p1__77029_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__77029_SHARP_);
});
})();
var inst_77045 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77044,inst_77043);
var state_77047__$1 = state_77047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77047__$1,inst_77045);
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
var statearr_77054 = [null,null,null,null,null,null,null,null];
(statearr_77054[(0)] = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__);

(statearr_77054[(1)] = (1));

return statearr_77054;
});
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1 = (function (state_77047){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77047);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77055){var ex__36688__auto__ = e77055;
var statearr_77056_77458 = state_77047;
(statearr_77056_77458[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77047[(4)]))){
var statearr_77057_77459 = state_77047;
(statearr_77057_77459[(1)] = cljs.core.first((state_77047[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77462 = state_77047;
state_77047 = G__77462;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__ = function(state_77047){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1.call(this,state_77047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77058 = f__36777__auto__();
(statearr_77058[(6)] = c__36776__auto__);

return statearr_77058;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77077){
var state_val_77078 = (state_77077[(1)]);
if((state_val_77078 === (1))){
var inst_77060 = provider.getLogs(user_filter);
var inst_77061 = cljs.core.async.interop.p__GT_c(inst_77060);
var state_77077__$1 = state_77077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77077__$1,(2),inst_77061);
} else {
if((state_val_77078 === (2))){
var inst_77063 = (state_77077[(7)]);
var inst_77063__$1 = (state_77077[(2)]);
var inst_77064 = (inst_77063__$1 instanceof cljs.core.ExceptionInfo);
var inst_77065 = cljs.core.ex_data(inst_77063__$1);
var inst_77066 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77065);
var inst_77067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77066,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77068 = ((inst_77064) && (inst_77067));
var state_77077__$1 = (function (){var statearr_77079 = state_77077;
(statearr_77079[(7)] = inst_77063__$1);

return statearr_77079;
})();
if(cljs.core.truth_(inst_77068)){
var statearr_77080_77465 = state_77077__$1;
(statearr_77080_77465[(1)] = (3));

} else {
var statearr_77081_77466 = state_77077__$1;
(statearr_77081_77466[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77078 === (3))){
var inst_77063 = (state_77077[(7)]);
var inst_77070 = (function(){throw inst_77063})();
var state_77077__$1 = state_77077;
var statearr_77082_77467 = state_77077__$1;
(statearr_77082_77467[(2)] = inst_77070);

(statearr_77082_77467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77078 === (4))){
var inst_77063 = (state_77077[(7)]);
var state_77077__$1 = state_77077;
var statearr_77083_77468 = state_77077__$1;
(statearr_77083_77468[(2)] = inst_77063);

(statearr_77083_77468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77078 === (5))){
var inst_77073 = (state_77077[(2)]);
var inst_77074 = (function (){var filtered_txs = inst_77073;
return (function (p1__77059_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__77059_SHARP_);
});
})();
var inst_77075 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77074,inst_77073);
var state_77077__$1 = state_77077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77077__$1,inst_77075);
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
var statearr_77084 = [null,null,null,null,null,null,null,null];
(statearr_77084[(0)] = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__);

(statearr_77084[(1)] = (1));

return statearr_77084;
});
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1 = (function (state_77077){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77077);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77085){var ex__36688__auto__ = e77085;
var statearr_77086_77471 = state_77077;
(statearr_77086_77471[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77077[(4)]))){
var statearr_77087_77472 = state_77077;
(statearr_77087_77472[(1)] = cljs.core.first((state_77077[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77473 = state_77077;
state_77077 = G__77473;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__ = function(state_77077){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1.call(this,state_77077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77088 = f__36777__auto__();
(statearr_77088[(6)] = c__36776__auto__);

return statearr_77088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_user_token_transfers = (function lpdashboard$ethereum$_LT_user_token_transfers(var_args){
var G__77091 = arguments.length;
switch (G__77091) {
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77112){
var state_val_77113 = (state_77112[(1)]);
if((state_val_77113 === (1))){
var inst_77092 = provider.getLogs(user_filter);
var inst_77093 = cljs.core.async.interop.p__GT_c(inst_77092);
var state_77112__$1 = state_77112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77112__$1,(2),inst_77093);
} else {
if((state_val_77113 === (2))){
var inst_77095 = (state_77112[(7)]);
var inst_77095__$1 = (state_77112[(2)]);
var inst_77096 = (inst_77095__$1 instanceof cljs.core.ExceptionInfo);
var inst_77097 = cljs.core.ex_data(inst_77095__$1);
var inst_77098 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77097);
var inst_77099 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77098,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77100 = ((inst_77096) && (inst_77099));
var state_77112__$1 = (function (){var statearr_77114 = state_77112;
(statearr_77114[(7)] = inst_77095__$1);

return statearr_77114;
})();
if(cljs.core.truth_(inst_77100)){
var statearr_77115_77499 = state_77112__$1;
(statearr_77115_77499[(1)] = (3));

} else {
var statearr_77116_77500 = state_77112__$1;
(statearr_77116_77500[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77113 === (3))){
var inst_77095 = (state_77112[(7)]);
var inst_77102 = (function(){throw inst_77095})();
var state_77112__$1 = state_77112;
var statearr_77117_77503 = state_77112__$1;
(statearr_77117_77503[(2)] = inst_77102);

(statearr_77117_77503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77113 === (4))){
var inst_77095 = (state_77112[(7)]);
var state_77112__$1 = state_77112;
var statearr_77118_77505 = state_77112__$1;
(statearr_77118_77505[(2)] = inst_77095);

(statearr_77118_77505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77113 === (5))){
var inst_77105 = (state_77112[(2)]);
var inst_77106 = lpdashboard.ethereum._LT_token_decimals(token_address);
var state_77112__$1 = (function (){var statearr_77119 = state_77112;
(statearr_77119[(8)] = inst_77105);

return statearr_77119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77112__$1,(6),inst_77106);
} else {
if((state_val_77113 === (6))){
var inst_77105 = (state_77112[(8)]);
var inst_77108 = (state_77112[(2)]);
var inst_77109 = (function (){var filtered_txs = inst_77105;
var decimals = inst_77108;
return (function (p1__77089_SHARP_){
return lpdashboard.ethereum.make_token_tx(p1__77089_SHARP_,decimals);
});
})();
var inst_77110 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77109,inst_77105);
var state_77112__$1 = state_77112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77112__$1,inst_77110);
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
var statearr_77120 = [null,null,null,null,null,null,null,null,null];
(statearr_77120[(0)] = lpdashboard$ethereum$state_machine__36685__auto__);

(statearr_77120[(1)] = (1));

return statearr_77120;
});
var lpdashboard$ethereum$state_machine__36685__auto____1 = (function (state_77112){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77112);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77121){var ex__36688__auto__ = e77121;
var statearr_77122_77511 = state_77112;
(statearr_77122_77511[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77112[(4)]))){
var statearr_77123_77513 = state_77112;
(statearr_77123_77513[(1)] = cljs.core.first((state_77112[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77514 = state_77112;
state_77112 = G__77514;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__36685__auto__ = function(state_77112){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__36685__auto____1.call(this,state_77112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__36685__auto____0;
lpdashboard$ethereum$state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__36685__auto____1;
return lpdashboard$ethereum$state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77124 = f__36777__auto__();
(statearr_77124[(6)] = c__36776__auto__);

return statearr_77124;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77141){
var state_val_77142 = (state_77141[(1)]);
if((state_val_77142 === (1))){
var inst_77125 = provider.getLogs(user_filter);
var inst_77126 = cljs.core.async.interop.p__GT_c(inst_77125);
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77141__$1,(2),inst_77126);
} else {
if((state_val_77142 === (2))){
var inst_77128 = (state_77141[(7)]);
var inst_77128__$1 = (state_77141[(2)]);
var inst_77129 = (inst_77128__$1 instanceof cljs.core.ExceptionInfo);
var inst_77130 = cljs.core.ex_data(inst_77128__$1);
var inst_77131 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77130);
var inst_77132 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77131,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77133 = ((inst_77129) && (inst_77132));
var state_77141__$1 = (function (){var statearr_77143 = state_77141;
(statearr_77143[(7)] = inst_77128__$1);

return statearr_77143;
})();
if(cljs.core.truth_(inst_77133)){
var statearr_77144_77541 = state_77141__$1;
(statearr_77144_77541[(1)] = (3));

} else {
var statearr_77145_77550 = state_77141__$1;
(statearr_77145_77550[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (3))){
var inst_77128 = (state_77141[(7)]);
var inst_77135 = (function(){throw inst_77128})();
var state_77141__$1 = state_77141;
var statearr_77146_77555 = state_77141__$1;
(statearr_77146_77555[(2)] = inst_77135);

(statearr_77146_77555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (4))){
var inst_77128 = (state_77141[(7)]);
var state_77141__$1 = state_77141;
var statearr_77147_77574 = state_77141__$1;
(statearr_77147_77574[(2)] = inst_77128);

(statearr_77147_77574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (5))){
var inst_77138 = (state_77141[(2)]);
var inst_77139 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_77138);
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77141__$1,inst_77139);
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
var statearr_77148 = [null,null,null,null,null,null,null,null];
(statearr_77148[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__);

(statearr_77148[(1)] = (1));

return statearr_77148;
});
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1 = (function (state_77141){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77141);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77149){var ex__36688__auto__ = e77149;
var statearr_77150_77595 = state_77141;
(statearr_77150_77595[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77141[(4)]))){
var statearr_77151_77596 = state_77141;
(statearr_77151_77596[(1)] = cljs.core.first((state_77141[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77598 = state_77141;
state_77141 = G__77598;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__ = function(state_77141){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1.call(this,state_77141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77152 = f__36777__auto__();
(statearr_77152[(6)] = c__36776__auto__);

return statearr_77152;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77169){
var state_val_77170 = (state_77169[(1)]);
if((state_val_77170 === (1))){
var inst_77153 = provider.getLogs(user_filter);
var inst_77154 = cljs.core.async.interop.p__GT_c(inst_77153);
var state_77169__$1 = state_77169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77169__$1,(2),inst_77154);
} else {
if((state_val_77170 === (2))){
var inst_77156 = (state_77169[(7)]);
var inst_77156__$1 = (state_77169[(2)]);
var inst_77157 = (inst_77156__$1 instanceof cljs.core.ExceptionInfo);
var inst_77158 = cljs.core.ex_data(inst_77156__$1);
var inst_77159 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77158);
var inst_77160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77159,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77161 = ((inst_77157) && (inst_77160));
var state_77169__$1 = (function (){var statearr_77171 = state_77169;
(statearr_77171[(7)] = inst_77156__$1);

return statearr_77171;
})();
if(cljs.core.truth_(inst_77161)){
var statearr_77172_77608 = state_77169__$1;
(statearr_77172_77608[(1)] = (3));

} else {
var statearr_77173_77610 = state_77169__$1;
(statearr_77173_77610[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77170 === (3))){
var inst_77156 = (state_77169[(7)]);
var inst_77163 = (function(){throw inst_77156})();
var state_77169__$1 = state_77169;
var statearr_77174_77611 = state_77169__$1;
(statearr_77174_77611[(2)] = inst_77163);

(statearr_77174_77611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77170 === (4))){
var inst_77156 = (state_77169[(7)]);
var state_77169__$1 = state_77169;
var statearr_77175_77614 = state_77169__$1;
(statearr_77175_77614[(2)] = inst_77156);

(statearr_77175_77614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77170 === (5))){
var inst_77166 = (state_77169[(2)]);
var inst_77167 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_77166);
var state_77169__$1 = state_77169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77169__$1,inst_77167);
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
var statearr_77176 = [null,null,null,null,null,null,null,null];
(statearr_77176[(0)] = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__);

(statearr_77176[(1)] = (1));

return statearr_77176;
});
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1 = (function (state_77169){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77169);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77177){var ex__36688__auto__ = e77177;
var statearr_77178_77618 = state_77169;
(statearr_77178_77618[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77169[(4)]))){
var statearr_77179_77620 = state_77169;
(statearr_77179_77620[(1)] = cljs.core.first((state_77169[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77622 = state_77169;
state_77169 = G__77622;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__ = function(state_77169){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1.call(this,state_77169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77180 = f__36777__auto__();
(statearr_77180[(6)] = c__36776__auto__);

return statearr_77180;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77197){
var state_val_77198 = (state_77197[(1)]);
if((state_val_77198 === (1))){
var inst_77181 = provider.getLogs(user_filter);
var inst_77182 = cljs.core.async.interop.p__GT_c(inst_77181);
var state_77197__$1 = state_77197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77197__$1,(2),inst_77182);
} else {
if((state_val_77198 === (2))){
var inst_77184 = (state_77197[(7)]);
var inst_77184__$1 = (state_77197[(2)]);
var inst_77185 = (inst_77184__$1 instanceof cljs.core.ExceptionInfo);
var inst_77186 = cljs.core.ex_data(inst_77184__$1);
var inst_77187 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77186);
var inst_77188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77187,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77189 = ((inst_77185) && (inst_77188));
var state_77197__$1 = (function (){var statearr_77199 = state_77197;
(statearr_77199[(7)] = inst_77184__$1);

return statearr_77199;
})();
if(cljs.core.truth_(inst_77189)){
var statearr_77200_77629 = state_77197__$1;
(statearr_77200_77629[(1)] = (3));

} else {
var statearr_77201_77630 = state_77197__$1;
(statearr_77201_77630[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77198 === (3))){
var inst_77184 = (state_77197[(7)]);
var inst_77191 = (function(){throw inst_77184})();
var state_77197__$1 = state_77197;
var statearr_77202_77634 = state_77197__$1;
(statearr_77202_77634[(2)] = inst_77191);

(statearr_77202_77634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77198 === (4))){
var inst_77184 = (state_77197[(7)]);
var state_77197__$1 = state_77197;
var statearr_77203_77636 = state_77197__$1;
(statearr_77203_77636[(2)] = inst_77184);

(statearr_77203_77636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77198 === (5))){
var inst_77194 = (state_77197[(2)]);
var inst_77195 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_77194);
var state_77197__$1 = state_77197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77197__$1,inst_77195);
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
var statearr_77204 = [null,null,null,null,null,null,null,null];
(statearr_77204[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__);

(statearr_77204[(1)] = (1));

return statearr_77204;
});
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1 = (function (state_77197){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77197);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77205){var ex__36688__auto__ = e77205;
var statearr_77206_77641 = state_77197;
(statearr_77206_77641[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77197[(4)]))){
var statearr_77207_77642 = state_77197;
(statearr_77207_77642[(1)] = cljs.core.first((state_77197[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77645 = state_77197;
state_77197 = G__77645;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__ = function(state_77197){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1.call(this,state_77197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77208 = f__36777__auto__();
(statearr_77208[(6)] = c__36776__auto__);

return statearr_77208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx_receipt = (function lpdashboard$ethereum$_LT_get_tx_receipt(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77224){
var state_val_77225 = (state_77224[(1)]);
if((state_val_77225 === (1))){
var inst_77209 = lpdashboard.ethereum.provider.getTransactionReceipt(txhash);
var inst_77210 = cljs.core.async.interop.p__GT_c(inst_77209);
var state_77224__$1 = state_77224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77224__$1,(2),inst_77210);
} else {
if((state_val_77225 === (2))){
var inst_77212 = (state_77224[(7)]);
var inst_77212__$1 = (state_77224[(2)]);
var inst_77213 = (inst_77212__$1 instanceof cljs.core.ExceptionInfo);
var inst_77214 = cljs.core.ex_data(inst_77212__$1);
var inst_77215 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77214);
var inst_77216 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77215,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77217 = ((inst_77213) && (inst_77216));
var state_77224__$1 = (function (){var statearr_77226 = state_77224;
(statearr_77226[(7)] = inst_77212__$1);

return statearr_77226;
})();
if(cljs.core.truth_(inst_77217)){
var statearr_77227_77652 = state_77224__$1;
(statearr_77227_77652[(1)] = (3));

} else {
var statearr_77228_77653 = state_77224__$1;
(statearr_77228_77653[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77225 === (3))){
var inst_77212 = (state_77224[(7)]);
var inst_77219 = (function(){throw inst_77212})();
var state_77224__$1 = state_77224;
var statearr_77229_77655 = state_77224__$1;
(statearr_77229_77655[(2)] = inst_77219);

(statearr_77229_77655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77225 === (4))){
var inst_77212 = (state_77224[(7)]);
var state_77224__$1 = state_77224;
var statearr_77230_77658 = state_77224__$1;
(statearr_77230_77658[(2)] = inst_77212);

(statearr_77230_77658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77225 === (5))){
var inst_77222 = (state_77224[(2)]);
var state_77224__$1 = state_77224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77224__$1,inst_77222);
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
var statearr_77231 = [null,null,null,null,null,null,null,null];
(statearr_77231[(0)] = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__);

(statearr_77231[(1)] = (1));

return statearr_77231;
});
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1 = (function (state_77224){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77224);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77232){var ex__36688__auto__ = e77232;
var statearr_77233_77661 = state_77224;
(statearr_77233_77661[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77224[(4)]))){
var statearr_77234_77662 = state_77224;
(statearr_77234_77662[(1)] = cljs.core.first((state_77224[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77664 = state_77224;
state_77224 = G__77664;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__ = function(state_77224){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1.call(this,state_77224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77235 = f__36777__auto__();
(statearr_77235[(6)] = c__36776__auto__);

return statearr_77235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx = (function lpdashboard$ethereum$_LT_get_tx(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77251){
var state_val_77252 = (state_77251[(1)]);
if((state_val_77252 === (1))){
var inst_77236 = lpdashboard.ethereum.provider.getTransaction(txhash);
var inst_77237 = cljs.core.async.interop.p__GT_c(inst_77236);
var state_77251__$1 = state_77251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77251__$1,(2),inst_77237);
} else {
if((state_val_77252 === (2))){
var inst_77239 = (state_77251[(7)]);
var inst_77239__$1 = (state_77251[(2)]);
var inst_77240 = (inst_77239__$1 instanceof cljs.core.ExceptionInfo);
var inst_77241 = cljs.core.ex_data(inst_77239__$1);
var inst_77242 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77241);
var inst_77243 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77242,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77244 = ((inst_77240) && (inst_77243));
var state_77251__$1 = (function (){var statearr_77253 = state_77251;
(statearr_77253[(7)] = inst_77239__$1);

return statearr_77253;
})();
if(cljs.core.truth_(inst_77244)){
var statearr_77254_77669 = state_77251__$1;
(statearr_77254_77669[(1)] = (3));

} else {
var statearr_77255_77670 = state_77251__$1;
(statearr_77255_77670[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77252 === (3))){
var inst_77239 = (state_77251[(7)]);
var inst_77246 = (function(){throw inst_77239})();
var state_77251__$1 = state_77251;
var statearr_77256_77675 = state_77251__$1;
(statearr_77256_77675[(2)] = inst_77246);

(statearr_77256_77675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77252 === (4))){
var inst_77239 = (state_77251[(7)]);
var state_77251__$1 = state_77251;
var statearr_77257_77681 = state_77251__$1;
(statearr_77257_77681[(2)] = inst_77239);

(statearr_77257_77681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77252 === (5))){
var inst_77249 = (state_77251[(2)]);
var state_77251__$1 = state_77251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77251__$1,inst_77249);
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
var statearr_77258 = [null,null,null,null,null,null,null,null];
(statearr_77258[(0)] = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__);

(statearr_77258[(1)] = (1));

return statearr_77258;
});
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1 = (function (state_77251){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77251);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77259){var ex__36688__auto__ = e77259;
var statearr_77260_77711 = state_77251;
(statearr_77260_77711[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77251[(4)]))){
var statearr_77261_77712 = state_77251;
(statearr_77261_77712[(1)] = cljs.core.first((state_77251[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77713 = state_77251;
state_77251 = G__77713;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__ = function(state_77251){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1.call(this,state_77251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77262 = f__36777__auto__();
(statearr_77262[(6)] = c__36776__auto__);

return statearr_77262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx_with_receipt = (function lpdashboard$ethereum$_LT_get_tx_with_receipt(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77273){
var state_val_77274 = (state_77273[(1)]);
if((state_val_77274 === (1))){
var inst_77263 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_77264 = lpdashboard.ethereum._LT_get_tx(txhash);
var state_77273__$1 = (function (){var statearr_77275 = state_77273;
(statearr_77275[(7)] = inst_77263);

return statearr_77275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77273__$1,(2),inst_77264);
} else {
if((state_val_77274 === (2))){
var inst_77266 = (state_77273[(2)]);
var inst_77267 = lpdashboard.ethereum._LT_get_tx_receipt(txhash);
var state_77273__$1 = (function (){var statearr_77276 = state_77273;
(statearr_77276[(8)] = inst_77266);

return statearr_77276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77273__$1,(3),inst_77267);
} else {
if((state_val_77274 === (3))){
var inst_77263 = (state_77273[(7)]);
var inst_77266 = (state_77273[(8)]);
var inst_77269 = (state_77273[(2)]);
var inst_77270 = [inst_77266,inst_77269];
var inst_77271 = cljs.core.PersistentHashMap.fromArrays(inst_77263,inst_77270);
var state_77273__$1 = state_77273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77273__$1,inst_77271);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0 = (function (){
var statearr_77277 = [null,null,null,null,null,null,null,null,null];
(statearr_77277[(0)] = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__);

(statearr_77277[(1)] = (1));

return statearr_77277;
});
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1 = (function (state_77273){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77273);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77278){var ex__36688__auto__ = e77278;
var statearr_77279_77722 = state_77273;
(statearr_77279_77722[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77273[(4)]))){
var statearr_77280_77724 = state_77273;
(statearr_77280_77724[(1)] = cljs.core.first((state_77273[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77725 = state_77273;
state_77273 = G__77725;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__ = function(state_77273){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1.call(this,state_77273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77281 = f__36777__auto__();
(statearr_77281[(6)] = c__36776__auto__);

return statearr_77281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_trxs = (function lpdashboard$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77286){
var state_val_77287 = (state_77286[(1)]);
if((state_val_77287 === (1))){
var inst_77282 = lpdashboard.ethereum._LT_get_tx_with_receipt(x);
var state_77286__$1 = state_77286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77286__$1,(2),inst_77282);
} else {
if((state_val_77287 === (2))){
var inst_77284 = (state_77286[(2)]);
var state_77286__$1 = state_77286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77286__$1,inst_77284);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0 = (function (){
var statearr_77288 = [null,null,null,null,null,null,null];
(statearr_77288[(0)] = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__);

(statearr_77288[(1)] = (1));

return statearr_77288;
});
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1 = (function (state_77286){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77286);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77289){var ex__36688__auto__ = e77289;
var statearr_77290_77731 = state_77286;
(statearr_77290_77731[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77286[(4)]))){
var statearr_77291_77733 = state_77286;
(statearr_77291_77733[(1)] = cljs.core.first((state_77286[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77736 = state_77286;
state_77286 = G__77736;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__ = function(state_77286){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1.call(this,state_77286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77292 = f__36777__auto__();
(statearr_77292[(6)] = c__36776__auto__);

return statearr_77292;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77305){
var state_val_77306 = (state_77305[(1)]);
if((state_val_77306 === (1))){
var inst_77294 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_77305__$1 = state_77305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77305__$1,(2),inst_77294);
} else {
if((state_val_77306 === (2))){
var inst_77296 = (state_77305[(2)]);
var inst_77297 = cljs.core.group_by(new cljs.core.Keyword(null,"to","to",192099007),inst_77296);
var inst_77298 = cljs.core.vals(inst_77297);
var inst_77299 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_77298);
var inst_77300 = (function (){var user_txs = inst_77296;
var distinct_tos = inst_77299;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_77301 = (function (){var user_txs = inst_77296;
var distinct_tos = inst_77299;
return (function (p1__77293_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__77293_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_77302 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_77301,inst_77299);
var inst_77303 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77300,inst_77302);
var state_77305__$1 = state_77305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77305__$1,inst_77303);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_77307 = [null,null,null,null,null,null,null];
(statearr_77307[(0)] = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__);

(statearr_77307[(1)] = (1));

return statearr_77307;
});
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1 = (function (state_77305){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77305);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77308){var ex__36688__auto__ = e77308;
var statearr_77309_77771 = state_77305;
(statearr_77309_77771[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77305[(4)]))){
var statearr_77310_77772 = state_77305;
(statearr_77310_77772[(1)] = cljs.core.first((state_77305[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77774 = state_77305;
state_77305 = G__77774;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__ = function(state_77305){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1.call(this,state_77305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77311 = f__36777__auto__();
(statearr_77311[(6)] = c__36776__auto__);

return statearr_77311;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77316){
var state_val_77317 = (state_77316[(1)]);
if((state_val_77317 === (1))){
var inst_77312 = lpdashboard.ethereum._LT_erc20_info(a);
var state_77316__$1 = state_77316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77316__$1,(2),inst_77312);
} else {
if((state_val_77317 === (2))){
var inst_77314 = (state_77316[(2)]);
var state_77316__$1 = state_77316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77316__$1,inst_77314);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0 = (function (){
var statearr_77318 = [null,null,null,null,null,null,null];
(statearr_77318[(0)] = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__);

(statearr_77318[(1)] = (1));

return statearr_77318;
});
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1 = (function (state_77316){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77316);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77319){var ex__36688__auto__ = e77319;
var statearr_77320_77782 = state_77316;
(statearr_77320_77782[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77316[(4)]))){
var statearr_77321_77784 = state_77316;
(statearr_77321_77784[(1)] = cljs.core.first((state_77316[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77786 = state_77316;
state_77316 = G__77786;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__ = function(state_77316){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1.call(this,state_77316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77322 = f__36777__auto__();
(statearr_77322[(6)] = c__36776__auto__);

return statearr_77322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),tokens)));
});

//# sourceMappingURL=lpdashboard.ethereum.js.map
