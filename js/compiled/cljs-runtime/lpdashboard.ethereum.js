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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_45853){
var state_val_45854 = (state_45853[(1)]);
if((state_val_45854 === (7))){
var inst_45824 = (state_45853[(7)]);
var inst_45831 = (function(){throw inst_45824})();
var state_45853__$1 = state_45853;
var statearr_45855_46252 = state_45853__$1;
(statearr_45855_46252[(2)] = inst_45831);

(statearr_45855_46252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (1))){
var inst_45806 = (state_45853[(8)]);
var inst_45806__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,address);
var inst_45807 = inst_45806__$1.decimals();
var inst_45808 = cljs.core.async.interop.p__GT_c(inst_45807);
var state_45853__$1 = (function (){var statearr_45856 = state_45853;
(statearr_45856[(8)] = inst_45806__$1);

return statearr_45856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45853__$1,(2),inst_45808);
} else {
if((state_val_45854 === (4))){
var inst_45810 = (state_45853[(9)]);
var state_45853__$1 = state_45853;
var statearr_45857_46253 = state_45853__$1;
(statearr_45857_46253[(2)] = inst_45810);

(statearr_45857_46253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (13))){
var inst_45820 = (state_45853[(10)]);
var inst_45834 = (state_45853[(11)]);
var inst_45848 = (state_45853[(2)]);
var inst_45849 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_45850 = [address,inst_45834,inst_45848,inst_45820];
var inst_45851 = cljs.core.PersistentHashMap.fromArrays(inst_45849,inst_45850);
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45853__$1,inst_45851);
} else {
if((state_val_45854 === (6))){
var inst_45824 = (state_45853[(7)]);
var inst_45824__$1 = (state_45853[(2)]);
var inst_45825 = (inst_45824__$1 instanceof cljs.core.ExceptionInfo);
var inst_45826 = cljs.core.ex_data(inst_45824__$1);
var inst_45827 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45826);
var inst_45828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45827,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45829 = ((inst_45825) && (inst_45828));
var state_45853__$1 = (function (){var statearr_45858 = state_45853;
(statearr_45858[(7)] = inst_45824__$1);

return statearr_45858;
})();
if(cljs.core.truth_(inst_45829)){
var statearr_45859_46254 = state_45853__$1;
(statearr_45859_46254[(1)] = (7));

} else {
var statearr_45860_46255 = state_45853__$1;
(statearr_45860_46255[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (3))){
var inst_45810 = (state_45853[(9)]);
var inst_45817 = (function(){throw inst_45810})();
var state_45853__$1 = state_45853;
var statearr_45861_46256 = state_45853__$1;
(statearr_45861_46256[(2)] = inst_45817);

(statearr_45861_46256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (12))){
var inst_45838 = (state_45853[(12)]);
var state_45853__$1 = state_45853;
var statearr_45862_46257 = state_45853__$1;
(statearr_45862_46257[(2)] = inst_45838);

(statearr_45862_46257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (2))){
var inst_45810 = (state_45853[(9)]);
var inst_45810__$1 = (state_45853[(2)]);
var inst_45811 = (inst_45810__$1 instanceof cljs.core.ExceptionInfo);
var inst_45812 = cljs.core.ex_data(inst_45810__$1);
var inst_45813 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45812);
var inst_45814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45813,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45815 = ((inst_45811) && (inst_45814));
var state_45853__$1 = (function (){var statearr_45863 = state_45853;
(statearr_45863[(9)] = inst_45810__$1);

return statearr_45863;
})();
if(cljs.core.truth_(inst_45815)){
var statearr_45864_46258 = state_45853__$1;
(statearr_45864_46258[(1)] = (3));

} else {
var statearr_45865_46259 = state_45853__$1;
(statearr_45865_46259[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (11))){
var inst_45838 = (state_45853[(12)]);
var inst_45845 = (function(){throw inst_45838})();
var state_45853__$1 = state_45853;
var statearr_45866_46260 = state_45853__$1;
(statearr_45866_46260[(2)] = inst_45845);

(statearr_45866_46260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (9))){
var inst_45806 = (state_45853[(8)]);
var inst_45834 = (state_45853[(2)]);
var inst_45835 = inst_45806.symbol();
var inst_45836 = cljs.core.async.interop.p__GT_c(inst_45835);
var state_45853__$1 = (function (){var statearr_45867 = state_45853;
(statearr_45867[(11)] = inst_45834);

return statearr_45867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45853__$1,(10),inst_45836);
} else {
if((state_val_45854 === (5))){
var inst_45806 = (state_45853[(8)]);
var inst_45820 = (state_45853[(2)]);
var inst_45821 = inst_45806.name();
var inst_45822 = cljs.core.async.interop.p__GT_c(inst_45821);
var state_45853__$1 = (function (){var statearr_45868 = state_45853;
(statearr_45868[(10)] = inst_45820);

return statearr_45868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45853__$1,(6),inst_45822);
} else {
if((state_val_45854 === (10))){
var inst_45838 = (state_45853[(12)]);
var inst_45838__$1 = (state_45853[(2)]);
var inst_45839 = (inst_45838__$1 instanceof cljs.core.ExceptionInfo);
var inst_45840 = cljs.core.ex_data(inst_45838__$1);
var inst_45841 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45840);
var inst_45842 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45841,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45843 = ((inst_45839) && (inst_45842));
var state_45853__$1 = (function (){var statearr_45869 = state_45853;
(statearr_45869[(12)] = inst_45838__$1);

return statearr_45869;
})();
if(cljs.core.truth_(inst_45843)){
var statearr_45870_46261 = state_45853__$1;
(statearr_45870_46261[(1)] = (11));

} else {
var statearr_45871_46262 = state_45853__$1;
(statearr_45871_46262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45854 === (8))){
var inst_45824 = (state_45853[(7)]);
var state_45853__$1 = state_45853;
var statearr_45872_46263 = state_45853__$1;
(statearr_45872_46263[(2)] = inst_45824);

(statearr_45872_46263[(1)] = (9));


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
var statearr_45873 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45873[(0)] = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__);

(statearr_45873[(1)] = (1));

return statearr_45873;
});
var lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1 = (function (state_45853){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_45853);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e45874){var ex__36688__auto__ = e45874;
var statearr_45875_46264 = state_45853;
(statearr_45875_46264[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_45853[(4)]))){
var statearr_45876_46265 = state_45853;
(statearr_45876_46265[(1)] = cljs.core.first((state_45853[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46266 = state_45853;
state_45853 = G__46266;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__ = function(state_45853){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1.call(this,state_45853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_erc20_info_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_45877 = f__36777__auto__();
(statearr_45877[(6)] = c__36776__auto__);

return statearr_45877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_token_decimals = (function lpdashboard$ethereum$_LT_token_decimals(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_45904){
var state_val_45905 = (state_45904[(1)]);
if((state_val_45905 === (7))){
var inst_45889 = (state_45904[(7)]);
var inst_45896 = (function(){throw inst_45889})();
var state_45904__$1 = state_45904;
var statearr_45906_46267 = state_45904__$1;
(statearr_45906_46267[(2)] = inst_45896);

(statearr_45906_46267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (1))){
var inst_45878 = lpdashboard.ethereum.make_erc20(address);
var state_45904__$1 = (function (){var statearr_45907 = state_45904;
(statearr_45907[(8)] = inst_45878);

return statearr_45907;
})();
var statearr_45908_46268 = state_45904__$1;
(statearr_45908_46268[(2)] = null);

(statearr_45908_46268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (4))){
var inst_45879 = (state_45904[(2)]);
var inst_45880 = console.log("No decimals method for:",address);
var state_45904__$1 = (function (){var statearr_45909 = state_45904;
(statearr_45909[(9)] = inst_45879);

(statearr_45909[(10)] = inst_45880);

return statearr_45909;
})();
var statearr_45910_46270 = state_45904__$1;
(statearr_45910_46270[(2)] = (18));

(statearr_45910_46270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (6))){
var inst_45889 = (state_45904[(7)]);
var inst_45889__$1 = (state_45904[(2)]);
var inst_45890 = (inst_45889__$1 instanceof cljs.core.ExceptionInfo);
var inst_45891 = cljs.core.ex_data(inst_45889__$1);
var inst_45892 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45891);
var inst_45893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45892,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45894 = ((inst_45890) && (inst_45893));
var state_45904__$1 = (function (){var statearr_45911 = state_45904;
(statearr_45911[(7)] = inst_45889__$1);

return statearr_45911;
})();
if(cljs.core.truth_(inst_45894)){
var statearr_45912_46275 = state_45904__$1;
(statearr_45912_46275[(1)] = (7));

} else {
var statearr_45913_46276 = state_45904__$1;
(statearr_45913_46276[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (3))){
var inst_45902 = (state_45904[(2)]);
var state_45904__$1 = state_45904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45904__$1,inst_45902);
} else {
if((state_val_45905 === (2))){
var inst_45878 = (state_45904[(8)]);
var _ = (function (){var statearr_45915 = state_45904;
(statearr_45915[(4)] = cljs.core.cons((5),(state_45904[(4)])));

return statearr_45915;
})();
var inst_45886 = inst_45878.decimals();
var inst_45887 = cljs.core.async.interop.p__GT_c(inst_45886);
var state_45904__$1 = state_45904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45904__$1,(6),inst_45887);
} else {
if((state_val_45905 === (9))){
var inst_45899 = (state_45904[(2)]);
var _ = (function (){var statearr_45916 = state_45904;
(statearr_45916[(4)] = cljs.core.rest((state_45904[(4)])));

return statearr_45916;
})();
var state_45904__$1 = state_45904;
var statearr_45917_46293 = state_45904__$1;
(statearr_45917_46293[(2)] = inst_45899);

(statearr_45917_46293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (5))){
var _ = (function (){var statearr_45918 = state_45904;
(statearr_45918[(4)] = cljs.core.rest((state_45904[(4)])));

return statearr_45918;
})();
var state_45904__$1 = state_45904;
var ex45914 = (state_45904__$1[(2)]);
var statearr_45919_46294 = state_45904__$1;
(statearr_45919_46294[(5)] = ex45914);


if((ex45914 instanceof Error)){
var statearr_45920_46295 = state_45904__$1;
(statearr_45920_46295[(1)] = (4));

(statearr_45920_46295[(5)] = null);

} else {
throw ex45914;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45905 === (8))){
var inst_45889 = (state_45904[(7)]);
var state_45904__$1 = state_45904;
var statearr_45921_46296 = state_45904__$1;
(statearr_45921_46296[(2)] = inst_45889);

(statearr_45921_46296[(1)] = (9));


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
var statearr_45922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45922[(0)] = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__);

(statearr_45922[(1)] = (1));

return statearr_45922;
});
var lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1 = (function (state_45904){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_45904);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e45923){var ex__36688__auto__ = e45923;
var statearr_45924_46298 = state_45904;
(statearr_45924_46298[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_45904[(4)]))){
var statearr_45925_46299 = state_45904;
(statearr_45925_46299[(1)] = cljs.core.first((state_45904[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46300 = state_45904;
state_45904 = G__46300;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__ = function(state_45904){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1.call(this,state_45904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_token_decimals_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_45926 = f__36777__auto__();
(statearr_45926[(6)] = c__36776__auto__);

return statearr_45926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum.decode_event_data = (function lpdashboard$ethereum$decode_event_data(event){
try{var event_obj = lpdashboard.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e45927){if((e45927 instanceof Error)){
var err = e45927;
return console.log("prob parsing event:",event);
} else {
throw e45927;

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
}catch (e45928){if((e45928 instanceof Error)){
var err = e45928;
return console.log("prob parsing mint event:",event);
} else {
throw e45928;

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
}catch (e45929){if((e45929 instanceof Error)){
var err = e45929;
return console.log("prob parsing mint event:",event);
} else {
throw e45929;

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
}catch (e45930){if((e45930 instanceof Error)){
var err = e45930;
return console.log("prob parsing transfer event:",event);
} else {
throw e45930;

}
}});
lpdashboard.ethereum._LT_resolve_address = (function lpdashboard$ethereum$_LT_resolve_address(address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_45946){
var state_val_45947 = (state_45946[(1)]);
if((state_val_45947 === (1))){
var inst_45931 = lpdashboard.ethereum.provider.resolveName(address);
var inst_45932 = cljs.core.async.interop.p__GT_c(inst_45931);
var state_45946__$1 = state_45946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45946__$1,(2),inst_45932);
} else {
if((state_val_45947 === (2))){
var inst_45934 = (state_45946[(7)]);
var inst_45934__$1 = (state_45946[(2)]);
var inst_45935 = (inst_45934__$1 instanceof cljs.core.ExceptionInfo);
var inst_45936 = cljs.core.ex_data(inst_45934__$1);
var inst_45937 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45936);
var inst_45938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45937,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45939 = ((inst_45935) && (inst_45938));
var state_45946__$1 = (function (){var statearr_45948 = state_45946;
(statearr_45948[(7)] = inst_45934__$1);

return statearr_45948;
})();
if(cljs.core.truth_(inst_45939)){
var statearr_45949_46308 = state_45946__$1;
(statearr_45949_46308[(1)] = (3));

} else {
var statearr_45950_46309 = state_45946__$1;
(statearr_45950_46309[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45947 === (3))){
var inst_45934 = (state_45946[(7)]);
var inst_45941 = (function(){throw inst_45934})();
var state_45946__$1 = state_45946;
var statearr_45951_46310 = state_45946__$1;
(statearr_45951_46310[(2)] = inst_45941);

(statearr_45951_46310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45947 === (4))){
var inst_45934 = (state_45946[(7)]);
var state_45946__$1 = state_45946;
var statearr_45952_46311 = state_45946__$1;
(statearr_45952_46311[(2)] = inst_45934);

(statearr_45952_46311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45947 === (5))){
var inst_45944 = (state_45946[(2)]);
var state_45946__$1 = state_45946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45946__$1,inst_45944);
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
var statearr_45953 = [null,null,null,null,null,null,null,null];
(statearr_45953[(0)] = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__);

(statearr_45953[(1)] = (1));

return statearr_45953;
});
var lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1 = (function (state_45946){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_45946);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e45954){var ex__36688__auto__ = e45954;
var statearr_45955_46312 = state_45946;
(statearr_45955_46312[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_45946[(4)]))){
var statearr_45956_46313 = state_45946;
(statearr_45956_46313[(1)] = cljs.core.first((state_45946[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46314 = state_45946;
state_45946 = G__46314;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__ = function(state_45946){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1.call(this,state_45946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_resolve_address_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_45957 = f__36777__auto__();
(statearr_45957[(6)] = c__36776__auto__);

return statearr_45957;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_45976){
var state_val_45977 = (state_45976[(1)]);
if((state_val_45977 === (1))){
var inst_45959 = provider.getLogs(user_filter);
var inst_45960 = cljs.core.async.interop.p__GT_c(inst_45959);
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45976__$1,(2),inst_45960);
} else {
if((state_val_45977 === (2))){
var inst_45962 = (state_45976[(7)]);
var inst_45962__$1 = (state_45976[(2)]);
var inst_45963 = (inst_45962__$1 instanceof cljs.core.ExceptionInfo);
var inst_45964 = cljs.core.ex_data(inst_45962__$1);
var inst_45965 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45964);
var inst_45966 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45965,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45967 = ((inst_45963) && (inst_45966));
var state_45976__$1 = (function (){var statearr_45978 = state_45976;
(statearr_45978[(7)] = inst_45962__$1);

return statearr_45978;
})();
if(cljs.core.truth_(inst_45967)){
var statearr_45979_46327 = state_45976__$1;
(statearr_45979_46327[(1)] = (3));

} else {
var statearr_45980_46328 = state_45976__$1;
(statearr_45980_46328[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (3))){
var inst_45962 = (state_45976[(7)]);
var inst_45969 = (function(){throw inst_45962})();
var state_45976__$1 = state_45976;
var statearr_45981_46329 = state_45976__$1;
(statearr_45981_46329[(2)] = inst_45969);

(statearr_45981_46329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (4))){
var inst_45962 = (state_45976[(7)]);
var state_45976__$1 = state_45976;
var statearr_45982_46331 = state_45976__$1;
(statearr_45982_46331[(2)] = inst_45962);

(statearr_45982_46331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45977 === (5))){
var inst_45972 = (state_45976[(2)]);
var inst_45973 = (function (){var filtered_txs = inst_45972;
return (function (p1__45958_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__45958_SHARP_);
});
})();
var inst_45974 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_45973,inst_45972);
var state_45976__$1 = state_45976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45976__$1,inst_45974);
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
var statearr_45983 = [null,null,null,null,null,null,null,null];
(statearr_45983[(0)] = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__);

(statearr_45983[(1)] = (1));

return statearr_45983;
});
var lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1 = (function (state_45976){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_45976);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e45984){var ex__36688__auto__ = e45984;
var statearr_45985_46335 = state_45976;
(statearr_45985_46335[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_45976[(4)]))){
var statearr_45986_46336 = state_45976;
(statearr_45986_46336[(1)] = cljs.core.first((state_45976[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46337 = state_45976;
state_45976 = G__46337;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__ = function(state_45976){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1.call(this,state_45976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_deposits_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_45987 = f__36777__auto__();
(statearr_45987[(6)] = c__36776__auto__);

return statearr_45987;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46006){
var state_val_46007 = (state_46006[(1)]);
if((state_val_46007 === (1))){
var inst_45989 = provider.getLogs(user_filter);
var inst_45990 = cljs.core.async.interop.p__GT_c(inst_45989);
var state_46006__$1 = state_46006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46006__$1,(2),inst_45990);
} else {
if((state_val_46007 === (2))){
var inst_45992 = (state_46006[(7)]);
var inst_45992__$1 = (state_46006[(2)]);
var inst_45993 = (inst_45992__$1 instanceof cljs.core.ExceptionInfo);
var inst_45994 = cljs.core.ex_data(inst_45992__$1);
var inst_45995 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_45994);
var inst_45996 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45995,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_45997 = ((inst_45993) && (inst_45996));
var state_46006__$1 = (function (){var statearr_46008 = state_46006;
(statearr_46008[(7)] = inst_45992__$1);

return statearr_46008;
})();
if(cljs.core.truth_(inst_45997)){
var statearr_46009_46345 = state_46006__$1;
(statearr_46009_46345[(1)] = (3));

} else {
var statearr_46010_46346 = state_46006__$1;
(statearr_46010_46346[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46007 === (3))){
var inst_45992 = (state_46006[(7)]);
var inst_45999 = (function(){throw inst_45992})();
var state_46006__$1 = state_46006;
var statearr_46011_46352 = state_46006__$1;
(statearr_46011_46352[(2)] = inst_45999);

(statearr_46011_46352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46007 === (4))){
var inst_45992 = (state_46006[(7)]);
var state_46006__$1 = state_46006;
var statearr_46012_46358 = state_46006__$1;
(statearr_46012_46358[(2)] = inst_45992);

(statearr_46012_46358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46007 === (5))){
var inst_46002 = (state_46006[(2)]);
var inst_46003 = (function (){var filtered_txs = inst_46002;
return (function (p1__45988_SHARP_){
return lpdashboard.ethereum.make_token_deposit(p1__45988_SHARP_);
});
})();
var inst_46004 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_46003,inst_46002);
var state_46006__$1 = state_46006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46006__$1,inst_46004);
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
var statearr_46013 = [null,null,null,null,null,null,null,null];
(statearr_46013[(0)] = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__);

(statearr_46013[(1)] = (1));

return statearr_46013;
});
var lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1 = (function (state_46006){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46006);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46014){var ex__36688__auto__ = e46014;
var statearr_46015_46373 = state_46006;
(statearr_46015_46373[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46006[(4)]))){
var statearr_46016_46374 = state_46006;
(statearr_46016_46374[(1)] = cljs.core.first((state_46006[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46375 = state_46006;
state_46006 = G__46375;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__ = function(state_46006){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1.call(this,state_46006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_withdrawals_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46017 = f__36777__auto__();
(statearr_46017[(6)] = c__36776__auto__);

return statearr_46017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_user_token_transfers = (function lpdashboard$ethereum$_LT_user_token_transfers(var_args){
var G__46020 = arguments.length;
switch (G__46020) {
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46041){
var state_val_46042 = (state_46041[(1)]);
if((state_val_46042 === (1))){
var inst_46021 = provider.getLogs(user_filter);
var inst_46022 = cljs.core.async.interop.p__GT_c(inst_46021);
var state_46041__$1 = state_46041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46041__$1,(2),inst_46022);
} else {
if((state_val_46042 === (2))){
var inst_46024 = (state_46041[(7)]);
var inst_46024__$1 = (state_46041[(2)]);
var inst_46025 = (inst_46024__$1 instanceof cljs.core.ExceptionInfo);
var inst_46026 = cljs.core.ex_data(inst_46024__$1);
var inst_46027 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46026);
var inst_46028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46027,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_46029 = ((inst_46025) && (inst_46028));
var state_46041__$1 = (function (){var statearr_46043 = state_46041;
(statearr_46043[(7)] = inst_46024__$1);

return statearr_46043;
})();
if(cljs.core.truth_(inst_46029)){
var statearr_46044_46383 = state_46041__$1;
(statearr_46044_46383[(1)] = (3));

} else {
var statearr_46045_46384 = state_46041__$1;
(statearr_46045_46384[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46042 === (3))){
var inst_46024 = (state_46041[(7)]);
var inst_46031 = (function(){throw inst_46024})();
var state_46041__$1 = state_46041;
var statearr_46046_46385 = state_46041__$1;
(statearr_46046_46385[(2)] = inst_46031);

(statearr_46046_46385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46042 === (4))){
var inst_46024 = (state_46041[(7)]);
var state_46041__$1 = state_46041;
var statearr_46047_46388 = state_46041__$1;
(statearr_46047_46388[(2)] = inst_46024);

(statearr_46047_46388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46042 === (5))){
var inst_46034 = (state_46041[(2)]);
var inst_46035 = lpdashboard.ethereum._LT_token_decimals(token_address);
var state_46041__$1 = (function (){var statearr_46048 = state_46041;
(statearr_46048[(8)] = inst_46034);

return statearr_46048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46041__$1,(6),inst_46035);
} else {
if((state_val_46042 === (6))){
var inst_46034 = (state_46041[(8)]);
var inst_46037 = (state_46041[(2)]);
var inst_46038 = (function (){var filtered_txs = inst_46034;
var decimals = inst_46037;
return (function (p1__46018_SHARP_){
return lpdashboard.ethereum.make_token_tx(p1__46018_SHARP_,decimals);
});
})();
var inst_46039 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_46038,inst_46034);
var state_46041__$1 = state_46041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46041__$1,inst_46039);
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
var statearr_46049 = [null,null,null,null,null,null,null,null,null];
(statearr_46049[(0)] = lpdashboard$ethereum$state_machine__36685__auto__);

(statearr_46049[(1)] = (1));

return statearr_46049;
});
var lpdashboard$ethereum$state_machine__36685__auto____1 = (function (state_46041){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46041);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46050){var ex__36688__auto__ = e46050;
var statearr_46051_46392 = state_46041;
(statearr_46051_46392[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46041[(4)]))){
var statearr_46052_46393 = state_46041;
(statearr_46052_46393[(1)] = cljs.core.first((state_46041[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46395 = state_46041;
state_46041 = G__46395;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$state_machine__36685__auto__ = function(state_46041){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$state_machine__36685__auto____1.call(this,state_46041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$state_machine__36685__auto____0;
lpdashboard$ethereum$state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$state_machine__36685__auto____1;
return lpdashboard$ethereum$state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46053 = f__36777__auto__();
(statearr_46053[(6)] = c__36776__auto__);

return statearr_46053;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46070){
var state_val_46071 = (state_46070[(1)]);
if((state_val_46071 === (1))){
var inst_46054 = provider.getLogs(user_filter);
var inst_46055 = cljs.core.async.interop.p__GT_c(inst_46054);
var state_46070__$1 = state_46070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46070__$1,(2),inst_46055);
} else {
if((state_val_46071 === (2))){
var inst_46057 = (state_46070[(7)]);
var inst_46057__$1 = (state_46070[(2)]);
var inst_46058 = (inst_46057__$1 instanceof cljs.core.ExceptionInfo);
var inst_46059 = cljs.core.ex_data(inst_46057__$1);
var inst_46060 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46059);
var inst_46061 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46060,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_46062 = ((inst_46058) && (inst_46061));
var state_46070__$1 = (function (){var statearr_46072 = state_46070;
(statearr_46072[(7)] = inst_46057__$1);

return statearr_46072;
})();
if(cljs.core.truth_(inst_46062)){
var statearr_46073_46400 = state_46070__$1;
(statearr_46073_46400[(1)] = (3));

} else {
var statearr_46074_46401 = state_46070__$1;
(statearr_46074_46401[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46071 === (3))){
var inst_46057 = (state_46070[(7)]);
var inst_46064 = (function(){throw inst_46057})();
var state_46070__$1 = state_46070;
var statearr_46075_46404 = state_46070__$1;
(statearr_46075_46404[(2)] = inst_46064);

(statearr_46075_46404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46071 === (4))){
var inst_46057 = (state_46070[(7)]);
var state_46070__$1 = state_46070;
var statearr_46076_46406 = state_46070__$1;
(statearr_46076_46406[(2)] = inst_46057);

(statearr_46076_46406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46071 === (5))){
var inst_46067 = (state_46070[(2)]);
var inst_46068 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_46067);
var state_46070__$1 = state_46070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46070__$1,inst_46068);
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
var statearr_46077 = [null,null,null,null,null,null,null,null];
(statearr_46077[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__);

(statearr_46077[(1)] = (1));

return statearr_46077;
});
var lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1 = (function (state_46070){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46070);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46078){var ex__36688__auto__ = e46078;
var statearr_46079_46408 = state_46070;
(statearr_46079_46408[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46070[(4)]))){
var statearr_46080_46409 = state_46070;
(statearr_46080_46409[(1)] = cljs.core.first((state_46070[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46410 = state_46070;
state_46070 = G__46410;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__ = function(state_46070){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1.call(this,state_46070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_transfers_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46081 = f__36777__auto__();
(statearr_46081[(6)] = c__36776__auto__);

return statearr_46081;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46098){
var state_val_46099 = (state_46098[(1)]);
if((state_val_46099 === (1))){
var inst_46082 = provider.getLogs(user_filter);
var inst_46083 = cljs.core.async.interop.p__GT_c(inst_46082);
var state_46098__$1 = state_46098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46098__$1,(2),inst_46083);
} else {
if((state_val_46099 === (2))){
var inst_46085 = (state_46098[(7)]);
var inst_46085__$1 = (state_46098[(2)]);
var inst_46086 = (inst_46085__$1 instanceof cljs.core.ExceptionInfo);
var inst_46087 = cljs.core.ex_data(inst_46085__$1);
var inst_46088 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46087);
var inst_46089 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46088,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_46090 = ((inst_46086) && (inst_46089));
var state_46098__$1 = (function (){var statearr_46100 = state_46098;
(statearr_46100[(7)] = inst_46085__$1);

return statearr_46100;
})();
if(cljs.core.truth_(inst_46090)){
var statearr_46101_46412 = state_46098__$1;
(statearr_46101_46412[(1)] = (3));

} else {
var statearr_46102_46413 = state_46098__$1;
(statearr_46102_46413[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (3))){
var inst_46085 = (state_46098[(7)]);
var inst_46092 = (function(){throw inst_46085})();
var state_46098__$1 = state_46098;
var statearr_46103_46414 = state_46098__$1;
(statearr_46103_46414[(2)] = inst_46092);

(statearr_46103_46414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (4))){
var inst_46085 = (state_46098[(7)]);
var state_46098__$1 = state_46098;
var statearr_46104_46415 = state_46098__$1;
(statearr_46104_46415[(2)] = inst_46085);

(statearr_46104_46415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46099 === (5))){
var inst_46095 = (state_46098[(2)]);
var inst_46096 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_46095);
var state_46098__$1 = state_46098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46098__$1,inst_46096);
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
var statearr_46105 = [null,null,null,null,null,null,null,null];
(statearr_46105[(0)] = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__);

(statearr_46105[(1)] = (1));

return statearr_46105;
});
var lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1 = (function (state_46098){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46098);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46106){var ex__36688__auto__ = e46106;
var statearr_46107_46419 = state_46098;
(statearr_46107_46419[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46098[(4)]))){
var statearr_46108_46421 = state_46098;
(statearr_46108_46421[(1)] = cljs.core.first((state_46098[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46422 = state_46098;
state_46098 = G__46422;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__ = function(state_46098){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1.call(this,state_46098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_burn_transfers_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46109 = f__36777__auto__();
(statearr_46109[(6)] = c__36776__auto__);

return statearr_46109;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46126){
var state_val_46127 = (state_46126[(1)]);
if((state_val_46127 === (1))){
var inst_46110 = provider.getLogs(user_filter);
var inst_46111 = cljs.core.async.interop.p__GT_c(inst_46110);
var state_46126__$1 = state_46126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46126__$1,(2),inst_46111);
} else {
if((state_val_46127 === (2))){
var inst_46113 = (state_46126[(7)]);
var inst_46113__$1 = (state_46126[(2)]);
var inst_46114 = (inst_46113__$1 instanceof cljs.core.ExceptionInfo);
var inst_46115 = cljs.core.ex_data(inst_46113__$1);
var inst_46116 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46115);
var inst_46117 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46116,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_46118 = ((inst_46114) && (inst_46117));
var state_46126__$1 = (function (){var statearr_46128 = state_46126;
(statearr_46128[(7)] = inst_46113__$1);

return statearr_46128;
})();
if(cljs.core.truth_(inst_46118)){
var statearr_46129_46423 = state_46126__$1;
(statearr_46129_46423[(1)] = (3));

} else {
var statearr_46130_46424 = state_46126__$1;
(statearr_46130_46424[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (3))){
var inst_46113 = (state_46126[(7)]);
var inst_46120 = (function(){throw inst_46113})();
var state_46126__$1 = state_46126;
var statearr_46131_46425 = state_46126__$1;
(statearr_46131_46425[(2)] = inst_46120);

(statearr_46131_46425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (4))){
var inst_46113 = (state_46126[(7)]);
var state_46126__$1 = state_46126;
var statearr_46132_46426 = state_46126__$1;
(statearr_46132_46426[(2)] = inst_46113);

(statearr_46132_46426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (5))){
var inst_46123 = (state_46126[(2)]);
var inst_46124 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_46123);
var state_46126__$1 = state_46126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46126__$1,inst_46124);
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
var statearr_46133 = [null,null,null,null,null,null,null,null];
(statearr_46133[(0)] = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__);

(statearr_46133[(1)] = (1));

return statearr_46133;
});
var lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1 = (function (state_46126){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46126);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46134){var ex__36688__auto__ = e46134;
var statearr_46135_46429 = state_46126;
(statearr_46135_46429[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46126[(4)]))){
var statearr_46136_46430 = state_46126;
(statearr_46136_46430[(1)] = cljs.core.first((state_46126[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46431 = state_46126;
state_46126 = G__46431;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__ = function(state_46126){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1.call(this,state_46126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_lp_mint_deposits_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46137 = f__36777__auto__();
(statearr_46137[(6)] = c__36776__auto__);

return statearr_46137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx_receipt = (function lpdashboard$ethereum$_LT_get_tx_receipt(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46153){
var state_val_46154 = (state_46153[(1)]);
if((state_val_46154 === (1))){
var inst_46138 = lpdashboard.ethereum.provider.getTransactionReceipt(txhash);
var inst_46139 = cljs.core.async.interop.p__GT_c(inst_46138);
var state_46153__$1 = state_46153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46153__$1,(2),inst_46139);
} else {
if((state_val_46154 === (2))){
var inst_46141 = (state_46153[(7)]);
var inst_46141__$1 = (state_46153[(2)]);
var inst_46142 = (inst_46141__$1 instanceof cljs.core.ExceptionInfo);
var inst_46143 = cljs.core.ex_data(inst_46141__$1);
var inst_46144 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46143);
var inst_46145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46144,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_46146 = ((inst_46142) && (inst_46145));
var state_46153__$1 = (function (){var statearr_46155 = state_46153;
(statearr_46155[(7)] = inst_46141__$1);

return statearr_46155;
})();
if(cljs.core.truth_(inst_46146)){
var statearr_46156_46452 = state_46153__$1;
(statearr_46156_46452[(1)] = (3));

} else {
var statearr_46157_46455 = state_46153__$1;
(statearr_46157_46455[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (3))){
var inst_46141 = (state_46153[(7)]);
var inst_46148 = (function(){throw inst_46141})();
var state_46153__$1 = state_46153;
var statearr_46158_46456 = state_46153__$1;
(statearr_46158_46456[(2)] = inst_46148);

(statearr_46158_46456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (4))){
var inst_46141 = (state_46153[(7)]);
var state_46153__$1 = state_46153;
var statearr_46159_46457 = state_46153__$1;
(statearr_46159_46457[(2)] = inst_46141);

(statearr_46159_46457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (5))){
var inst_46151 = (state_46153[(2)]);
var state_46153__$1 = state_46153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46153__$1,inst_46151);
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
var statearr_46160 = [null,null,null,null,null,null,null,null];
(statearr_46160[(0)] = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__);

(statearr_46160[(1)] = (1));

return statearr_46160;
});
var lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1 = (function (state_46153){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46153);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46161){var ex__36688__auto__ = e46161;
var statearr_46162_46460 = state_46153;
(statearr_46162_46460[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46153[(4)]))){
var statearr_46163_46461 = state_46153;
(statearr_46163_46461[(1)] = cljs.core.first((state_46153[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46462 = state_46153;
state_46153 = G__46462;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__ = function(state_46153){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1.call(this,state_46153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_receipt_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46164 = f__36777__auto__();
(statearr_46164[(6)] = c__36776__auto__);

return statearr_46164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx = (function lpdashboard$ethereum$_LT_get_tx(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46180){
var state_val_46181 = (state_46180[(1)]);
if((state_val_46181 === (1))){
var inst_46165 = lpdashboard.ethereum.provider.getTransaction(txhash);
var inst_46166 = cljs.core.async.interop.p__GT_c(inst_46165);
var state_46180__$1 = state_46180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46180__$1,(2),inst_46166);
} else {
if((state_val_46181 === (2))){
var inst_46168 = (state_46180[(7)]);
var inst_46168__$1 = (state_46180[(2)]);
var inst_46169 = (inst_46168__$1 instanceof cljs.core.ExceptionInfo);
var inst_46170 = cljs.core.ex_data(inst_46168__$1);
var inst_46171 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46170);
var inst_46172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46171,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_46173 = ((inst_46169) && (inst_46172));
var state_46180__$1 = (function (){var statearr_46182 = state_46180;
(statearr_46182[(7)] = inst_46168__$1);

return statearr_46182;
})();
if(cljs.core.truth_(inst_46173)){
var statearr_46183_46468 = state_46180__$1;
(statearr_46183_46468[(1)] = (3));

} else {
var statearr_46184_46469 = state_46180__$1;
(statearr_46184_46469[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46181 === (3))){
var inst_46168 = (state_46180[(7)]);
var inst_46175 = (function(){throw inst_46168})();
var state_46180__$1 = state_46180;
var statearr_46185_46471 = state_46180__$1;
(statearr_46185_46471[(2)] = inst_46175);

(statearr_46185_46471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46181 === (4))){
var inst_46168 = (state_46180[(7)]);
var state_46180__$1 = state_46180;
var statearr_46186_46474 = state_46180__$1;
(statearr_46186_46474[(2)] = inst_46168);

(statearr_46186_46474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46181 === (5))){
var inst_46178 = (state_46180[(2)]);
var state_46180__$1 = state_46180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46180__$1,inst_46178);
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
var statearr_46187 = [null,null,null,null,null,null,null,null];
(statearr_46187[(0)] = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__);

(statearr_46187[(1)] = (1));

return statearr_46187;
});
var lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1 = (function (state_46180){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46180);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46188){var ex__36688__auto__ = e46188;
var statearr_46189_46477 = state_46180;
(statearr_46189_46477[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46180[(4)]))){
var statearr_46190_46478 = state_46180;
(statearr_46190_46478[(1)] = cljs.core.first((state_46180[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46479 = state_46180;
state_46180 = G__46479;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__ = function(state_46180){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1.call(this,state_46180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46191 = f__36777__auto__();
(statearr_46191[(6)] = c__36776__auto__);

return statearr_46191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_tx_with_receipt = (function lpdashboard$ethereum$_LT_get_tx_with_receipt(txhash){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46202){
var state_val_46203 = (state_46202[(1)]);
if((state_val_46203 === (1))){
var inst_46192 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_46193 = lpdashboard.ethereum._LT_get_tx(txhash);
var state_46202__$1 = (function (){var statearr_46204 = state_46202;
(statearr_46204[(7)] = inst_46192);

return statearr_46204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46202__$1,(2),inst_46193);
} else {
if((state_val_46203 === (2))){
var inst_46195 = (state_46202[(2)]);
var inst_46196 = lpdashboard.ethereum._LT_get_tx_receipt(txhash);
var state_46202__$1 = (function (){var statearr_46205 = state_46202;
(statearr_46205[(8)] = inst_46195);

return statearr_46205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46202__$1,(3),inst_46196);
} else {
if((state_val_46203 === (3))){
var inst_46192 = (state_46202[(7)]);
var inst_46195 = (state_46202[(8)]);
var inst_46198 = (state_46202[(2)]);
var inst_46199 = [inst_46195,inst_46198];
var inst_46200 = cljs.core.PersistentHashMap.fromArrays(inst_46192,inst_46199);
var state_46202__$1 = state_46202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46202__$1,inst_46200);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0 = (function (){
var statearr_46206 = [null,null,null,null,null,null,null,null,null];
(statearr_46206[(0)] = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__);

(statearr_46206[(1)] = (1));

return statearr_46206;
});
var lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1 = (function (state_46202){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46202);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46207){var ex__36688__auto__ = e46207;
var statearr_46208_46555 = state_46202;
(statearr_46208_46555[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46202[(4)]))){
var statearr_46209_46556 = state_46202;
(statearr_46209_46556[(1)] = cljs.core.first((state_46202[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46557 = state_46202;
state_46202 = G__46557;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__ = function(state_46202){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1.call(this,state_46202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_tx_with_receipt_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46210 = f__36777__auto__();
(statearr_46210[(6)] = c__36776__auto__);

return statearr_46210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.ethereum._LT_get_trxs = (function lpdashboard$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46215){
var state_val_46216 = (state_46215[(1)]);
if((state_val_46216 === (1))){
var inst_46211 = lpdashboard.ethereum._LT_get_tx_with_receipt(x);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46215__$1,(2),inst_46211);
} else {
if((state_val_46216 === (2))){
var inst_46213 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46215__$1,inst_46213);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0 = (function (){
var statearr_46217 = [null,null,null,null,null,null,null];
(statearr_46217[(0)] = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__);

(statearr_46217[(1)] = (1));

return statearr_46217;
});
var lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1 = (function (state_46215){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46215);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46218){var ex__36688__auto__ = e46218;
var statearr_46219_46564 = state_46215;
(statearr_46219_46564[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46215[(4)]))){
var statearr_46220_46567 = state_46215;
(statearr_46220_46567[(1)] = cljs.core.first((state_46215[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46569 = state_46215;
state_46215 = G__46569;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__ = function(state_46215){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1.call(this,state_46215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_get_trxs_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46221 = f__36777__auto__();
(statearr_46221[(6)] = c__36776__auto__);

return statearr_46221;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46234){
var state_val_46235 = (state_46234[(1)]);
if((state_val_46235 === (1))){
var inst_46223 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_46234__$1 = state_46234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46234__$1,(2),inst_46223);
} else {
if((state_val_46235 === (2))){
var inst_46225 = (state_46234[(2)]);
var inst_46226 = cljs.core.group_by(new cljs.core.Keyword(null,"to","to",192099007),inst_46225);
var inst_46227 = cljs.core.vals(inst_46226);
var inst_46228 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,inst_46227);
var inst_46229 = (function (){var user_txs = inst_46225;
var distinct_tos = inst_46228;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_46230 = (function (){var user_txs = inst_46225;
var distinct_tos = inst_46228;
return (function (p1__46222_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__46222_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_46231 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_46230,inst_46228);
var inst_46232 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_46229,inst_46231);
var state_46234__$1 = state_46234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46234__$1,inst_46232);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_46236 = [null,null,null,null,null,null,null];
(statearr_46236[(0)] = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__);

(statearr_46236[(1)] = (1));

return statearr_46236;
});
var lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1 = (function (state_46234){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46234);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46237){var ex__36688__auto__ = e46237;
var statearr_46238_46581 = state_46234;
(statearr_46238_46581[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46234[(4)]))){
var statearr_46239_46583 = state_46234;
(statearr_46239_46583[(1)] = cljs.core.first((state_46234[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46584 = state_46234;
state_46234 = G__46584;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__ = function(state_46234){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1.call(this,state_46234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_user_token_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46240 = f__36777__auto__();
(statearr_46240[(6)] = c__36776__auto__);

return statearr_46240;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_46245){
var state_val_46246 = (state_46245[(1)]);
if((state_val_46246 === (1))){
var inst_46241 = lpdashboard.ethereum._LT_erc20_info(a);
var state_46245__$1 = state_46245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46245__$1,(2),inst_46241);
} else {
if((state_val_46246 === (2))){
var inst_46243 = (state_46245[(2)]);
var state_46245__$1 = state_46245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46245__$1,inst_46243);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__ = null;
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0 = (function (){
var statearr_46247 = [null,null,null,null,null,null,null];
(statearr_46247[(0)] = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__);

(statearr_46247[(1)] = (1));

return statearr_46247;
});
var lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1 = (function (state_46245){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_46245);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e46248){var ex__36688__auto__ = e46248;
var statearr_46249_46592 = state_46245;
(statearr_46249_46592[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_46245[(4)]))){
var statearr_46250_46594 = state_46245;
(statearr_46250_46594[(1)] = cljs.core.first((state_46245[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46596 = state_46245;
state_46245 = G__46596;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__ = function(state_46245){
switch(arguments.length){
case 0:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1.call(this,state_46245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____0;
lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto____1;
return lpdashboard$ethereum$_LT_erc20_infos_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_46251 = f__36777__auto__();
(statearr_46251[(6)] = c__36776__auto__);

return statearr_46251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),tokens)));
});

//# sourceMappingURL=lpdashboard.ethereum.js.map
