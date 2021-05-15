goog.provide('revert.ethereum');
var module$node_modules$ethers$lib$index=shadow.js.require("module$node_modules$ethers$lib$index", {});
var module$node_modules$$portis$web3$es$index=shadow.js.require("module$node_modules$$portis$web3$es$index", {});
var module$node_modules$web3modal$dist$index=shadow.js.require("module$node_modules$web3modal$dist$index", {});
var module$node_modules$$walletconnect$web3_provider$dist$cjs$index=shadow.js.require("module$node_modules$$walletconnect$web3_provider$dist$cjs$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
revert.ethereum.portis_key = "c68ebe94-9f7a-493b-848e-3c235200dac2";
revert.ethereum.portis = (new module$node_modules$$portis$web3$es$index.default(revert.ethereum.portis_key,"mainnet"));
revert.ethereum.web3provider = module$node_modules$ethers$lib$index.providers.Web3Provider;
revert.ethereum.w3m = (new module$node_modules$web3modal$dist$index.default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"network","network",2050004697),"mainnet",new cljs.core.Keyword(null,"cacheProvider","cacheProvider",1503598731),false,new cljs.core.Keyword(null,"theme","theme",-1247880880),"dark",new cljs.core.Keyword(null,"providerOptions","providerOptions",-1148992451),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"portis","portis",-1073893299),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",1189062786),module$node_modules$$portis$web3$es$index.default,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),revert.ethereum.portis_key], null)], null),new cljs.core.Keyword(null,"walletconnect","walletconnect",-259964633),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",1189062786),module$node_modules$$walletconnect$web3_provider$dist$cjs$index.default,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"infuraId","infuraId",-1477440934),"5daa316ffc094c539e425c8ce1471068"], null)], null)], null)], null))));
revert.ethereum.provider = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new revert.ethereum.web3provider(revert.ethereum.portis.provider))
);
revert.ethereum.select_provider = (function revert$ethereum$select_provider(){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66267){
var state_val_66268 = (state_66267[(1)]);
if((state_val_66268 === (7))){
var inst_66234 = (state_66267[(7)]);
var inst_66241 = (function(){throw inst_66234})();
var state_66267__$1 = state_66267;
var statearr_66272_67130 = state_66267__$1;
(statearr_66272_67130[(2)] = inst_66241);

(statearr_66272_67130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (1))){
var state_66267__$1 = state_66267;
var statearr_66273_67131 = state_66267__$1;
(statearr_66273_67131[(2)] = null);

(statearr_66273_67131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (4))){
var inst_66222 = (state_66267[(2)]);
var inst_66223 = cljs.core.ex_cause(inst_66222);
var inst_66224 = ["select-provider err: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66223)].join('');
var inst_66225 = console.log(inst_66224);
var state_66267__$1 = state_66267;
var statearr_66274_67132 = state_66267__$1;
(statearr_66274_67132[(2)] = inst_66225);

(statearr_66274_67132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (13))){
var inst_66261 = (state_66267[(2)]);
var inst_66262 = cljs.core.first(inst_66261);
var _ = (function (){var statearr_66275 = state_66267;
(statearr_66275[(4)] = cljs.core.rest((state_66267[(4)])));

return statearr_66275;
})();
var state_66267__$1 = state_66267;
var statearr_66276_67133 = state_66267__$1;
(statearr_66276_67133[(2)] = inst_66262);

(statearr_66276_67133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (6))){
var inst_66234 = (state_66267[(7)]);
var inst_66234__$1 = (state_66267[(2)]);
var inst_66235 = (inst_66234__$1 instanceof cljs.core.ExceptionInfo);
var inst_66236 = cljs.core.ex_data(inst_66234__$1);
var inst_66237 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66236);
var inst_66238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66237,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66239 = ((inst_66235) && (inst_66238));
var state_66267__$1 = (function (){var statearr_66277 = state_66267;
(statearr_66277[(7)] = inst_66234__$1);

return statearr_66277;
})();
if(cljs.core.truth_(inst_66239)){
var statearr_66278_67134 = state_66267__$1;
(statearr_66278_67134[(1)] = (7));

} else {
var statearr_66280_67135 = state_66267__$1;
(statearr_66280_67135[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (3))){
var inst_66265 = (state_66267[(2)]);
var state_66267__$1 = state_66267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66267__$1,inst_66265);
} else {
if((state_val_66268 === (12))){
var inst_66251 = (state_66267[(8)]);
var state_66267__$1 = state_66267;
var statearr_66283_67149 = state_66267__$1;
(statearr_66283_67149[(2)] = inst_66251);

(statearr_66283_67149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (2))){
var _ = (function (){var statearr_66284 = state_66267;
(statearr_66284[(4)] = cljs.core.cons((5),(state_66267[(4)])));

return statearr_66284;
})();
var inst_66231 = revert.ethereum.w3m.connect();
var inst_66232 = cljs.core.async.interop.p__GT_c(inst_66231);
var state_66267__$1 = state_66267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66267__$1,(6),inst_66232);
} else {
if((state_val_66268 === (11))){
var inst_66251 = (state_66267[(8)]);
var inst_66258 = (function(){throw inst_66251})();
var state_66267__$1 = state_66267;
var statearr_66286_67162 = state_66267__$1;
(statearr_66286_67162[(2)] = inst_66258);

(statearr_66286_67162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (9))){
var inst_66244 = (state_66267[(2)]);
var inst_66245 = (new revert.ethereum.web3provider(inst_66244));
var inst_66246 = cljs.core.reset_BANG_(revert.ethereum.provider,inst_66245);
var inst_66247 = inst_66246.provider;
var inst_66248 = inst_66247.enable();
var inst_66249 = cljs.core.async.interop.p__GT_c(inst_66248);
var state_66267__$1 = state_66267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66267__$1,(10),inst_66249);
} else {
if((state_val_66268 === (5))){
var _ = (function (){var statearr_66287 = state_66267;
(statearr_66287[(4)] = cljs.core.rest((state_66267[(4)])));

return statearr_66287;
})();
var state_66267__$1 = state_66267;
var ex66285 = (state_66267__$1[(2)]);
var statearr_66288_67165 = state_66267__$1;
(statearr_66288_67165[(5)] = ex66285);


if((ex66285 instanceof Error)){
var statearr_66289_67167 = state_66267__$1;
(statearr_66289_67167[(1)] = (4));

(statearr_66289_67167[(5)] = null);

} else {
throw ex66285;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (10))){
var inst_66251 = (state_66267[(8)]);
var inst_66251__$1 = (state_66267[(2)]);
var inst_66252 = (inst_66251__$1 instanceof cljs.core.ExceptionInfo);
var inst_66253 = cljs.core.ex_data(inst_66251__$1);
var inst_66254 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66253);
var inst_66255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66254,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66256 = ((inst_66252) && (inst_66255));
var state_66267__$1 = (function (){var statearr_66290 = state_66267;
(statearr_66290[(8)] = inst_66251__$1);

return statearr_66290;
})();
if(cljs.core.truth_(inst_66256)){
var statearr_66291_67171 = state_66267__$1;
(statearr_66291_67171[(1)] = (11));

} else {
var statearr_66292_67172 = state_66267__$1;
(statearr_66292_67172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66268 === (8))){
var inst_66234 = (state_66267[(7)]);
var state_66267__$1 = state_66267;
var statearr_66293_67174 = state_66267__$1;
(statearr_66293_67174[(2)] = inst_66234);

(statearr_66293_67174[(1)] = (9));


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
var revert$ethereum$select_provider_$_state_machine__52186__auto__ = null;
var revert$ethereum$select_provider_$_state_machine__52186__auto____0 = (function (){
var statearr_66295 = [null,null,null,null,null,null,null,null,null];
(statearr_66295[(0)] = revert$ethereum$select_provider_$_state_machine__52186__auto__);

(statearr_66295[(1)] = (1));

return statearr_66295;
});
var revert$ethereum$select_provider_$_state_machine__52186__auto____1 = (function (state_66267){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66267);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66297){var ex__52189__auto__ = e66297;
var statearr_66299_67178 = state_66267;
(statearr_66299_67178[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66267[(4)]))){
var statearr_66300_67183 = state_66267;
(statearr_66300_67183[(1)] = cljs.core.first((state_66267[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67191 = state_66267;
state_66267 = G__67191;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$select_provider_$_state_machine__52186__auto__ = function(state_66267){
switch(arguments.length){
case 0:
return revert$ethereum$select_provider_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$select_provider_$_state_machine__52186__auto____1.call(this,state_66267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$select_provider_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$select_provider_$_state_machine__52186__auto____0;
revert$ethereum$select_provider_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$select_provider_$_state_machine__52186__auto____1;
return revert$ethereum$select_provider_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66301 = f__52209__auto__();
(statearr_66301[(6)] = c__52208__auto__);

return statearr_66301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum.sashimi_abi = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function poolLength() view returns (uint256)","function poolInfo(uint256 _pid) view returns (address, uint256, uint256, uint256)","function userInfo(uint256 _pid, address owner) view returns (uint256, uint256)","function pendingSushi(uint256 _pid, address _user) view returns (uint256)","function decimals() view returns (uint8)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
revert.ethereum.lpbar_abi = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function name() view returns (string)","function lp() view returns (address)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function totalLp() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function lpBalance(address owner) view returns (uint256)","function decimals() view returns (uint8)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)"], null);
revert.ethereum.sr_abi = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function earned(address _account)  view returns (uint256)","function rewardsToken()  view returns (address)","function rewardToken()  view returns (address)","function cream() view returns (address)","function token() view returns (address)","function sushi() view returns (address)","function apy() view returns (address)","function sashimi() view returns (address)","function yam() view returns (address)","function boostToken() view returns (address)","function mithShare() view returns (address)","function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function decimals() view returns (uint8)","function token0() view returns (address)","function token1() view returns (address)","function approve(address spender, uint256 allowance) view returns (bool)","function transfer(address to, uint amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)","event RewardPaid(address indexed user, uint256 reward)","event RewardClaimed(address indexed user, uint256 reward)"], null);
revert.ethereum.erc20_abi = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function name() view returns (string)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function decimals() view returns (uint8)","function token0() view returns (address)","function token1() view returns (address)","function approve(address spender, uint256 allowance) view returns (bool)","function transfer(address to, uint amount) returns (boolean)","function deposit(uint256 pid, uint256 amount) returns (boolean)","event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)"], null);
revert.ethereum.pickle_jar_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function balance() view returns (uint256)"], null);
revert.ethereum.alchemix_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["function reward() view returns (address)","function tokenPoolIds(address pool) view returns (uint256)","function getStakeTotalUnclaimed(address _account, uint256 _poolId) view returns (uint256)","function getStakeTotalDeposited(address _account, uint256 _poolId) view returns (uint256)","event TokensClaimed(address indexed user, uint256 indexed poolId, uint256 amount)"], null);
revert.ethereum.event_detector_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Transfer(address indexed from, address indexed to, uint amount)","event Deposit(address indexed user, uint256 indexed pid, uint256 amount)","event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)","event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)","event Staked(address indexed user, uint256 amount, address payer)"], null);
revert.ethereum.event_w_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)"], null);
revert.ethereum.univ2_abi = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Mint(address indexed sender, uint amount0, uint amount1)","event Burn(address indexed sender, uint amount0, uint amount1, address indexed to)"], null);
revert.ethereum.uni_detector_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event Staked(address indexed user, uint256 amount)"], null);
revert.ethereum.sr_deposit_abi = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uint256","uint256"], null);
revert.ethereum.debug_abi = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uint256"], null);
revert.ethereum.cheff_deposit_abi = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["address","uint256","uint256"], null);
revert.ethereum.comp_abi = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["event RepayBorrow(address payer, address borrower, uint repayAmount, uint accountBorrows, uint totalBorrows)","event LiquidateBorrow(address liquidator, address borrower, uint repayAmount, address cTokenCollateral, uint seizeTokens)","event Mint(address minter, uint mintAmount, uint mintTokens)","event Borrow(address borrower, uint borrowAmount, uint accountBorrows, uint totalBorrows)","event Redeem(address redeemer, uint redeemAmount, uint redeemTokens)"], null);
revert.ethereum.erc20_iface = (new module$node_modules$ethers$lib$index.utils.Interface(cljs.core.clj__GT_js(revert.ethereum.erc20_abi)));
revert.ethereum.sashimi_iface = (new module$node_modules$ethers$lib$index.utils.Interface(cljs.core.clj__GT_js(revert.ethereum.erc20_abi)));
revert.ethereum.detector_iface = (new module$node_modules$ethers$lib$index.utils.Interface(cljs.core.clj__GT_js(revert.ethereum.event_detector_abi)));
revert.ethereum.univ2_iface = (new module$node_modules$ethers$lib$index.utils.Interface(cljs.core.clj__GT_js(revert.ethereum.univ2_abi)));
revert.ethereum.make_erc20 = (function revert$ethereum$make_erc20(address){
if(typeof address === 'string'){
return (new module$node_modules$ethers$lib$index.Contract(address,cljs.core.clj__GT_js(revert.ethereum.erc20_abi),cljs.core.deref(revert.ethereum.provider)));
} else {
return null;
}
});
revert.ethereum.make_contract = (function revert$ethereum$make_contract(abi,address){
return (new module$node_modules$ethers$lib$index.Contract(address,cljs.core.clj__GT_js(abi),cljs.core.deref(revert.ethereum.provider)));
});
revert.ethereum.make_interface = (function revert$ethereum$make_interface(abi){
return (new module$node_modules$ethers$lib$index.utils.Interface(abi));
});
revert.ethereum._LT_get_bytecode = (function revert$ethereum$_LT_get_bytecode(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66324){
var state_val_66325 = (state_66324[(1)]);
if((state_val_66325 === (1))){
var inst_66308 = cljs.core.deref(revert.ethereum.provider);
var inst_66309 = inst_66308.getCode(address);
var inst_66310 = cljs.core.async.interop.p__GT_c(inst_66309);
var state_66324__$1 = state_66324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66324__$1,(2),inst_66310);
} else {
if((state_val_66325 === (2))){
var inst_66312 = (state_66324[(7)]);
var inst_66312__$1 = (state_66324[(2)]);
var inst_66313 = (inst_66312__$1 instanceof cljs.core.ExceptionInfo);
var inst_66314 = cljs.core.ex_data(inst_66312__$1);
var inst_66315 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66314);
var inst_66316 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66315,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66317 = ((inst_66313) && (inst_66316));
var state_66324__$1 = (function (){var statearr_66326 = state_66324;
(statearr_66326[(7)] = inst_66312__$1);

return statearr_66326;
})();
if(cljs.core.truth_(inst_66317)){
var statearr_66328_67261 = state_66324__$1;
(statearr_66328_67261[(1)] = (3));

} else {
var statearr_66330_67262 = state_66324__$1;
(statearr_66330_67262[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (3))){
var inst_66312 = (state_66324[(7)]);
var inst_66319 = (function(){throw inst_66312})();
var state_66324__$1 = state_66324;
var statearr_66332_67263 = state_66324__$1;
(statearr_66332_67263[(2)] = inst_66319);

(statearr_66332_67263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (4))){
var inst_66312 = (state_66324[(7)]);
var state_66324__$1 = state_66324;
var statearr_66333_67264 = state_66324__$1;
(statearr_66333_67264[(2)] = inst_66312);

(statearr_66333_67264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66325 === (5))){
var inst_66322 = (state_66324[(2)]);
var state_66324__$1 = state_66324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66324__$1,inst_66322);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____0 = (function (){
var statearr_66334 = [null,null,null,null,null,null,null,null];
(statearr_66334[(0)] = revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__);

(statearr_66334[(1)] = (1));

return statearr_66334;
});
var revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____1 = (function (state_66324){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66324);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66335){var ex__52189__auto__ = e66335;
var statearr_66336_67268 = state_66324;
(statearr_66336_67268[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66324[(4)]))){
var statearr_66337_67272 = state_66324;
(statearr_66337_67272[(1)] = cljs.core.first((state_66324[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67277 = state_66324;
state_66324 = G__67277;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__ = function(state_66324){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____1.call(this,state_66324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66338 = f__52209__auto__();
(statearr_66338[(6)] = c__52208__auto__);

return statearr_66338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum.sushi_bytecode_example = "0x0a087903";
revert.ethereum.method_sig = (function revert$ethereum$method_sig(method_abi){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(module$node_modules$ethers$lib$index.utils.id(method_abi),(0),(10));
});
revert.ethereum.has_method_QMARK_ = (function revert$ethereum$has_method_QMARK_(contract_bytecode,method_abi){
var method_sig = revert.ethereum.method_sig(method_abi);
var method_sig_SINGLEQUOTE_ = ["63",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_sig,(2))].join('');
return clojure.string.includes_QMARK_(contract_bytecode,method_sig_SINGLEQUOTE_);
});
revert.ethereum.block_num__GT_ts = (function revert$ethereum$block_num__GT_ts(blocks,block_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__66342_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
revert.ethereum.ts__GT_geckoprice = (function revert$ethereum$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66345_SHARP_){
return (cljs.core.first(p1__66345_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66346_SHARP_){
return (cljs.core.first(p1__66346_SHARP_) > ts);
}),day_prices_SINGLEQUOTE_));
if(cljs.core.truth_((function (){var and__4115__auto__ = prev_day;
if(cljs.core.truth_(and__4115__auto__)){
return next_day;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.second(prev_day);
} else {
return null;
}
});
revert.ethereum.blocknum__GT_geckoprice = (function revert$ethereum$blocknum__GT_geckoprice(day_prices,blocks,block_num){
var ts = ((1000) * revert.ethereum.block_num__GT_ts(blocks,block_num));
var price = revert.ethereum.ts__GT_geckoprice(day_prices,ts);
return parseFloat(price);
});
revert.ethereum._LT_get_block = (function revert$ethereum$_LT_get_block(block_num){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66370){
var state_val_66371 = (state_66370[(1)]);
if((state_val_66371 === (1))){
var inst_66351 = cljs.core.deref(revert.ethereum.provider);
var inst_66352 = inst_66351.getBlock(block_num);
var inst_66353 = cljs.core.async.interop.p__GT_c(inst_66352);
var state_66370__$1 = state_66370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66370__$1,(2),inst_66353);
} else {
if((state_val_66371 === (2))){
var inst_66355 = (state_66370[(7)]);
var inst_66355__$1 = (state_66370[(2)]);
var inst_66356 = (inst_66355__$1 instanceof cljs.core.ExceptionInfo);
var inst_66357 = cljs.core.ex_data(inst_66355__$1);
var inst_66358 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66357);
var inst_66359 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66358,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66360 = ((inst_66356) && (inst_66359));
var state_66370__$1 = (function (){var statearr_66374 = state_66370;
(statearr_66374[(7)] = inst_66355__$1);

return statearr_66374;
})();
if(cljs.core.truth_(inst_66360)){
var statearr_66375_67299 = state_66370__$1;
(statearr_66375_67299[(1)] = (3));

} else {
var statearr_66376_67300 = state_66370__$1;
(statearr_66376_67300[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66371 === (3))){
var inst_66355 = (state_66370[(7)]);
var inst_66363 = (function(){throw inst_66355})();
var state_66370__$1 = state_66370;
var statearr_66378_67301 = state_66370__$1;
(statearr_66378_67301[(2)] = inst_66363);

(statearr_66378_67301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66371 === (4))){
var inst_66355 = (state_66370[(7)]);
var state_66370__$1 = state_66370;
var statearr_66380_67302 = state_66370__$1;
(statearr_66380_67302[(2)] = inst_66355);

(statearr_66380_67302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66371 === (5))){
var inst_66366 = (state_66370[(2)]);
var inst_66367 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_66366);
var state_66370__$1 = state_66370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66370__$1,inst_66367);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_get_block_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_block_$_state_machine__52186__auto____0 = (function (){
var statearr_66382 = [null,null,null,null,null,null,null,null];
(statearr_66382[(0)] = revert$ethereum$_LT_get_block_$_state_machine__52186__auto__);

(statearr_66382[(1)] = (1));

return statearr_66382;
});
var revert$ethereum$_LT_get_block_$_state_machine__52186__auto____1 = (function (state_66370){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66370);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66384){var ex__52189__auto__ = e66384;
var statearr_66386_67336 = state_66370;
(statearr_66386_67336[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66370[(4)]))){
var statearr_66387_67339 = state_66370;
(statearr_66387_67339[(1)] = cljs.core.first((state_66370[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67341 = state_66370;
state_66370 = G__67341;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_block_$_state_machine__52186__auto__ = function(state_66370){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_block_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_block_$_state_machine__52186__auto____1.call(this,state_66370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_block_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_block_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_block_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_block_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_block_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66388 = f__52209__auto__();
(statearr_66388[(6)] = c__52208__auto__);

return statearr_66388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_fetch_blocks = (function revert$ethereum$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66389_SHARP_){
return revert.ethereum._LT_get_block(p1__66389_SHARP_);
}),block_numbers)));
});
revert.ethereum.ts__GT_price = (function revert$ethereum$ts__GT_price(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66390_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__66390_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66392_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__66392_SHARP_) > ts);
}),day_prices_SINGLEQUOTE_));
if(cljs.core.truth_((function (){var and__4115__auto__ = prev_day;
if(cljs.core.truth_(and__4115__auto__)){
return next_day;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(prev_day);
} else {
return null;
}
});
revert.ethereum.blocknum__GT_price = (function revert$ethereum$blocknum__GT_price(day_prices,blocks,block_num){
var ts = revert.ethereum.block_num__GT_ts(blocks,block_num);
var price = revert.ethereum.ts__GT_price(day_prices,ts);
return parseFloat(price);
});
revert.ethereum._LT_erc20_info = (function revert$ethereum$_LT_erc20_info(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66450){
var state_val_66451 = (state_66450[(1)]);
if((state_val_66451 === (7))){
var inst_66421 = (state_66450[(7)]);
var inst_66428 = (function(){throw inst_66421})();
var state_66450__$1 = state_66450;
var statearr_66452_67352 = state_66450__$1;
(statearr_66452_67352[(2)] = inst_66428);

(statearr_66452_67352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (1))){
var inst_66403 = (state_66450[(8)]);
var inst_66403__$1 = revert.ethereum.make_contract(revert.ethereum.erc20_abi,address);
var inst_66404 = inst_66403__$1.decimals();
var inst_66405 = cljs.core.async.interop.p__GT_c(inst_66404);
var state_66450__$1 = (function (){var statearr_66453 = state_66450;
(statearr_66453[(8)] = inst_66403__$1);

return statearr_66453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66450__$1,(2),inst_66405);
} else {
if((state_val_66451 === (4))){
var inst_66407 = (state_66450[(9)]);
var state_66450__$1 = state_66450;
var statearr_66456_67361 = state_66450__$1;
(statearr_66456_67361[(2)] = inst_66407);

(statearr_66456_67361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (13))){
var inst_66417 = (state_66450[(10)]);
var inst_66431 = (state_66450[(11)]);
var inst_66445 = (state_66450[(2)]);
var inst_66446 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_66447 = [address,inst_66431,inst_66445,inst_66417];
var inst_66448 = cljs.core.PersistentHashMap.fromArrays(inst_66446,inst_66447);
var state_66450__$1 = state_66450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66450__$1,inst_66448);
} else {
if((state_val_66451 === (6))){
var inst_66421 = (state_66450[(7)]);
var inst_66421__$1 = (state_66450[(2)]);
var inst_66422 = (inst_66421__$1 instanceof cljs.core.ExceptionInfo);
var inst_66423 = cljs.core.ex_data(inst_66421__$1);
var inst_66424 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66423);
var inst_66425 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66424,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66426 = ((inst_66422) && (inst_66425));
var state_66450__$1 = (function (){var statearr_66458 = state_66450;
(statearr_66458[(7)] = inst_66421__$1);

return statearr_66458;
})();
if(cljs.core.truth_(inst_66426)){
var statearr_66459_67367 = state_66450__$1;
(statearr_66459_67367[(1)] = (7));

} else {
var statearr_66460_67368 = state_66450__$1;
(statearr_66460_67368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (3))){
var inst_66407 = (state_66450[(9)]);
var inst_66414 = (function(){throw inst_66407})();
var state_66450__$1 = state_66450;
var statearr_66461_67370 = state_66450__$1;
(statearr_66461_67370[(2)] = inst_66414);

(statearr_66461_67370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (12))){
var inst_66435 = (state_66450[(12)]);
var state_66450__$1 = state_66450;
var statearr_66462_67372 = state_66450__$1;
(statearr_66462_67372[(2)] = inst_66435);

(statearr_66462_67372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (2))){
var inst_66407 = (state_66450[(9)]);
var inst_66407__$1 = (state_66450[(2)]);
var inst_66408 = (inst_66407__$1 instanceof cljs.core.ExceptionInfo);
var inst_66409 = cljs.core.ex_data(inst_66407__$1);
var inst_66410 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66409);
var inst_66411 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66410,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66412 = ((inst_66408) && (inst_66411));
var state_66450__$1 = (function (){var statearr_66463 = state_66450;
(statearr_66463[(9)] = inst_66407__$1);

return statearr_66463;
})();
if(cljs.core.truth_(inst_66412)){
var statearr_66464_67382 = state_66450__$1;
(statearr_66464_67382[(1)] = (3));

} else {
var statearr_66466_67383 = state_66450__$1;
(statearr_66466_67383[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (11))){
var inst_66435 = (state_66450[(12)]);
var inst_66442 = (function(){throw inst_66435})();
var state_66450__$1 = state_66450;
var statearr_66469_67385 = state_66450__$1;
(statearr_66469_67385[(2)] = inst_66442);

(statearr_66469_67385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (9))){
var inst_66403 = (state_66450[(8)]);
var inst_66431 = (state_66450[(2)]);
var inst_66432 = inst_66403.symbol();
var inst_66433 = cljs.core.async.interop.p__GT_c(inst_66432);
var state_66450__$1 = (function (){var statearr_66470 = state_66450;
(statearr_66470[(11)] = inst_66431);

return statearr_66470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66450__$1,(10),inst_66433);
} else {
if((state_val_66451 === (5))){
var inst_66403 = (state_66450[(8)]);
var inst_66417 = (state_66450[(2)]);
var inst_66418 = inst_66403.name();
var inst_66419 = cljs.core.async.interop.p__GT_c(inst_66418);
var state_66450__$1 = (function (){var statearr_66471 = state_66450;
(statearr_66471[(10)] = inst_66417);

return statearr_66471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66450__$1,(6),inst_66419);
} else {
if((state_val_66451 === (10))){
var inst_66435 = (state_66450[(12)]);
var inst_66435__$1 = (state_66450[(2)]);
var inst_66436 = (inst_66435__$1 instanceof cljs.core.ExceptionInfo);
var inst_66437 = cljs.core.ex_data(inst_66435__$1);
var inst_66438 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66437);
var inst_66439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66438,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66440 = ((inst_66436) && (inst_66439));
var state_66450__$1 = (function (){var statearr_66472 = state_66450;
(statearr_66472[(12)] = inst_66435__$1);

return statearr_66472;
})();
if(cljs.core.truth_(inst_66440)){
var statearr_66473_67390 = state_66450__$1;
(statearr_66473_67390[(1)] = (11));

} else {
var statearr_66474_67392 = state_66450__$1;
(statearr_66474_67392[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66451 === (8))){
var inst_66421 = (state_66450[(7)]);
var state_66450__$1 = state_66450;
var statearr_66475_67394 = state_66450__$1;
(statearr_66475_67394[(2)] = inst_66421);

(statearr_66475_67394[(1)] = (9));


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
var revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____0 = (function (){
var statearr_66476 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66476[(0)] = revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__);

(statearr_66476[(1)] = (1));

return statearr_66476;
});
var revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____1 = (function (state_66450){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66450);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66478){var ex__52189__auto__ = e66478;
var statearr_66480_67405 = state_66450;
(statearr_66480_67405[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66450[(4)]))){
var statearr_66481_67406 = state_66450;
(statearr_66481_67406[(1)] = cljs.core.first((state_66450[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67407 = state_66450;
state_66450 = G__67407;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__ = function(state_66450){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____1.call(this,state_66450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____0;
revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66483 = f__52209__auto__();
(statearr_66483[(6)] = c__52208__auto__);

return statearr_66483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_token_decimals = (function revert$ethereum$_LT_token_decimals(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66511){
var state_val_66512 = (state_66511[(1)]);
if((state_val_66512 === (7))){
var inst_66495 = (state_66511[(7)]);
var inst_66502 = (function(){throw inst_66495})();
var state_66511__$1 = state_66511;
var statearr_66515_67408 = state_66511__$1;
(statearr_66515_67408[(2)] = inst_66502);

(statearr_66515_67408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66512 === (1))){
var inst_66484 = revert.ethereum.make_erc20(address);
var state_66511__$1 = (function (){var statearr_66516 = state_66511;
(statearr_66516[(8)] = inst_66484);

return statearr_66516;
})();
var statearr_66517_67409 = state_66511__$1;
(statearr_66517_67409[(2)] = null);

(statearr_66517_67409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66512 === (4))){
var inst_66485 = (state_66511[(2)]);
var inst_66486 = console.log("No decimals method for:",address);
var state_66511__$1 = (function (){var statearr_66518 = state_66511;
(statearr_66518[(9)] = inst_66486);

(statearr_66518[(10)] = inst_66485);

return statearr_66518;
})();
var statearr_66519_67410 = state_66511__$1;
(statearr_66519_67410[(2)] = (18));

(statearr_66519_67410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66512 === (6))){
var inst_66495 = (state_66511[(7)]);
var inst_66495__$1 = (state_66511[(2)]);
var inst_66496 = (inst_66495__$1 instanceof cljs.core.ExceptionInfo);
var inst_66497 = cljs.core.ex_data(inst_66495__$1);
var inst_66498 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66497);
var inst_66499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66498,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66500 = ((inst_66496) && (inst_66499));
var state_66511__$1 = (function (){var statearr_66520 = state_66511;
(statearr_66520[(7)] = inst_66495__$1);

return statearr_66520;
})();
if(cljs.core.truth_(inst_66500)){
var statearr_66522_67411 = state_66511__$1;
(statearr_66522_67411[(1)] = (7));

} else {
var statearr_66523_67412 = state_66511__$1;
(statearr_66523_67412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66512 === (3))){
var inst_66508 = (state_66511[(2)]);
var state_66511__$1 = state_66511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66511__$1,inst_66508);
} else {
if((state_val_66512 === (2))){
var inst_66484 = (state_66511[(8)]);
var _ = (function (){var statearr_66527 = state_66511;
(statearr_66527[(4)] = cljs.core.cons((5),(state_66511[(4)])));

return statearr_66527;
})();
var inst_66492 = inst_66484.decimals();
var inst_66493 = cljs.core.async.interop.p__GT_c(inst_66492);
var state_66511__$1 = state_66511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66511__$1,(6),inst_66493);
} else {
if((state_val_66512 === (9))){
var inst_66505 = (state_66511[(2)]);
var _ = (function (){var statearr_66531 = state_66511;
(statearr_66531[(4)] = cljs.core.rest((state_66511[(4)])));

return statearr_66531;
})();
var state_66511__$1 = state_66511;
var statearr_66532_67417 = state_66511__$1;
(statearr_66532_67417[(2)] = inst_66505);

(statearr_66532_67417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66512 === (5))){
var _ = (function (){var statearr_66533 = state_66511;
(statearr_66533[(4)] = cljs.core.rest((state_66511[(4)])));

return statearr_66533;
})();
var state_66511__$1 = state_66511;
var ex66526 = (state_66511__$1[(2)]);
var statearr_66534_67431 = state_66511__$1;
(statearr_66534_67431[(5)] = ex66526);


if((ex66526 instanceof Error)){
var statearr_66535_67432 = state_66511__$1;
(statearr_66535_67432[(1)] = (4));

(statearr_66535_67432[(5)] = null);

} else {
throw ex66526;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66512 === (8))){
var inst_66495 = (state_66511[(7)]);
var state_66511__$1 = state_66511;
var statearr_66536_67433 = state_66511__$1;
(statearr_66536_67433[(2)] = inst_66495);

(statearr_66536_67433[(1)] = (9));


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
var revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____0 = (function (){
var statearr_66537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66537[(0)] = revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__);

(statearr_66537[(1)] = (1));

return statearr_66537;
});
var revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____1 = (function (state_66511){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66511);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66538){var ex__52189__auto__ = e66538;
var statearr_66539_67436 = state_66511;
(statearr_66539_67436[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66511[(4)]))){
var statearr_66540_67438 = state_66511;
(statearr_66540_67438[(1)] = cljs.core.first((state_66511[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67440 = state_66511;
state_66511 = G__67440;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__ = function(state_66511){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____1.call(this,state_66511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____0;
revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66541 = f__52209__auto__();
(statearr_66541[(6)] = c__52208__auto__);

return statearr_66541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum.decode_event_data = (function revert$ethereum$decode_event_data(event){
try{var event_obj = revert.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e66544){if((e66544 instanceof Error)){
var err = e66544;
return null;
} else {
throw e66544;

}
}});
revert.ethereum.decode_burn_data = (function revert$ethereum$decode_burn_data(event,token1_decimals,token2_decimals){
try{var event_obj = revert.ethereum.univ2_iface.parseLog(event);
var pair_address = event.address;
var args = event_obj.args;
var sender_address = cljs.core.first(args);
var amount0 = revert.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(1)),token1_decimals);
var amount1 = revert.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token2_decimals);
var to_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(3));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sender","sender",1557303285),sender_address,new cljs.core.Keyword(null,"pair-address","pair-address",1269659792),pair_address,new cljs.core.Keyword(null,"to","to",192099007),to_address,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1], null);
}catch (e66545){if((e66545 instanceof Error)){
var err = e66545;
return null;
} else {
throw e66545;

}
}});
revert.ethereum.decode_mint_data = (function revert$ethereum$decode_mint_data(event,token1_decimals,token2_decimals){
try{var event_obj = revert.ethereum.univ2_iface.parseLog(event);
var pair_address = event.address;
var args = event_obj.args;
var sender_address = cljs.core.first(args);
var amount0 = revert.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(1)),token1_decimals);
var amount1 = revert.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token2_decimals);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sender","sender",1557303285),sender_address,new cljs.core.Keyword(null,"pair-address","pair-address",1269659792),pair_address,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1], null);
}catch (e66546){if((e66546 instanceof Error)){
var err = e66546;
return null;
} else {
throw e66546;

}
}});
revert.ethereum.decode_transfer_data = (function revert$ethereum$decode_transfer_data(event,token_decimals){
try{var event_obj = revert.ethereum.erc20_iface.parseLog(event);
var token_address = event.address;
var args = event_obj.args;
var from_address = cljs.core.first(args);
var to_address = cljs.core.second(args);
var amount = revert.utils.ebn__GT_bn(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),token_decimals);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),from_address,new cljs.core.Keyword(null,"to","to",192099007),to_address,new cljs.core.Keyword(null,"token-address","token-address",872304132),token_address,new cljs.core.Keyword(null,"amount","amount",364489504),amount], null);
}catch (e66548){if((e66548 instanceof Error)){
var err = e66548;
return null;
} else {
throw e66548;

}
}});
revert.ethereum._LT_resolve_address = (function revert$ethereum$_LT_resolve_address(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66569){
var state_val_66570 = (state_66569[(1)]);
if((state_val_66570 === (1))){
var inst_66552 = cljs.core.deref(revert.ethereum.provider);
var inst_66553 = inst_66552.resolveName(address);
var inst_66554 = cljs.core.async.interop.p__GT_c(inst_66553);
var state_66569__$1 = state_66569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66569__$1,(2),inst_66554);
} else {
if((state_val_66570 === (2))){
var inst_66556 = (state_66569[(7)]);
var inst_66556__$1 = (state_66569[(2)]);
var inst_66558 = (inst_66556__$1 instanceof cljs.core.ExceptionInfo);
var inst_66559 = cljs.core.ex_data(inst_66556__$1);
var inst_66560 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66559);
var inst_66561 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66560,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66562 = ((inst_66558) && (inst_66561));
var state_66569__$1 = (function (){var statearr_66571 = state_66569;
(statearr_66571[(7)] = inst_66556__$1);

return statearr_66571;
})();
if(cljs.core.truth_(inst_66562)){
var statearr_66572_67486 = state_66569__$1;
(statearr_66572_67486[(1)] = (3));

} else {
var statearr_66573_67487 = state_66569__$1;
(statearr_66573_67487[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66570 === (3))){
var inst_66556 = (state_66569[(7)]);
var inst_66564 = (function(){throw inst_66556})();
var state_66569__$1 = state_66569;
var statearr_66574_67488 = state_66569__$1;
(statearr_66574_67488[(2)] = inst_66564);

(statearr_66574_67488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66570 === (4))){
var inst_66556 = (state_66569[(7)]);
var state_66569__$1 = state_66569;
var statearr_66575_67489 = state_66569__$1;
(statearr_66575_67489[(2)] = inst_66556);

(statearr_66575_67489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66570 === (5))){
var inst_66567 = (state_66569[(2)]);
var state_66569__$1 = state_66569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66569__$1,inst_66567);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____0 = (function (){
var statearr_66579 = [null,null,null,null,null,null,null,null];
(statearr_66579[(0)] = revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__);

(statearr_66579[(1)] = (1));

return statearr_66579;
});
var revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____1 = (function (state_66569){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66569);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66580){var ex__52189__auto__ = e66580;
var statearr_66581_67496 = state_66569;
(statearr_66581_67496[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66569[(4)]))){
var statearr_66582_67499 = state_66569;
(statearr_66582_67499[(1)] = cljs.core.first((state_66569[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67500 = state_66569;
state_66569 = G__67500;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__ = function(state_66569){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____1.call(this,state_66569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____0;
revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66583 = f__52209__auto__();
(statearr_66583[(6)] = c__52208__auto__);

return statearr_66583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_balance_of = (function revert$ethereum$_LT_balance_of(contract,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66599){
var state_val_66600 = (state_66599[(1)]);
if((state_val_66600 === (1))){
var inst_66584 = contract.balanceOf(user_address);
var inst_66585 = cljs.core.async.interop.p__GT_c(inst_66584);
var state_66599__$1 = state_66599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66599__$1,(2),inst_66585);
} else {
if((state_val_66600 === (2))){
var inst_66587 = (state_66599[(7)]);
var inst_66587__$1 = (state_66599[(2)]);
var inst_66588 = (inst_66587__$1 instanceof cljs.core.ExceptionInfo);
var inst_66589 = cljs.core.ex_data(inst_66587__$1);
var inst_66590 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66589);
var inst_66591 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66590,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66592 = ((inst_66588) && (inst_66591));
var state_66599__$1 = (function (){var statearr_66601 = state_66599;
(statearr_66601[(7)] = inst_66587__$1);

return statearr_66601;
})();
if(cljs.core.truth_(inst_66592)){
var statearr_66602_67506 = state_66599__$1;
(statearr_66602_67506[(1)] = (3));

} else {
var statearr_66603_67507 = state_66599__$1;
(statearr_66603_67507[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (3))){
var inst_66587 = (state_66599[(7)]);
var inst_66594 = (function(){throw inst_66587})();
var state_66599__$1 = state_66599;
var statearr_66604_67509 = state_66599__$1;
(statearr_66604_67509[(2)] = inst_66594);

(statearr_66604_67509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (4))){
var inst_66587 = (state_66599[(7)]);
var state_66599__$1 = state_66599;
var statearr_66605_67510 = state_66599__$1;
(statearr_66605_67510[(2)] = inst_66587);

(statearr_66605_67510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66600 === (5))){
var inst_66597 = (state_66599[(2)]);
var state_66599__$1 = state_66599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66599__$1,inst_66597);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____0 = (function (){
var statearr_66606 = [null,null,null,null,null,null,null,null];
(statearr_66606[(0)] = revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__);

(statearr_66606[(1)] = (1));

return statearr_66606;
});
var revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____1 = (function (state_66599){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66599);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66607){var ex__52189__auto__ = e66607;
var statearr_66608_67518 = state_66599;
(statearr_66608_67518[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66599[(4)]))){
var statearr_66609_67519 = state_66599;
(statearr_66609_67519[(1)] = cljs.core.first((state_66599[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67520 = state_66599;
state_66599 = G__67520;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__ = function(state_66599){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____1.call(this,state_66599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____0;
revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66610 = f__52209__auto__();
(statearr_66610[(6)] = c__52208__auto__);

return statearr_66610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_token_balance = (function revert$ethereum$_LT_user_token_balance(user_address,token_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66650){
var state_val_66651 = (state_66650[(1)]);
if((state_val_66651 === (7))){
var inst_66618 = (state_66650[(7)]);
var inst_66641 = (state_66650[(2)]);
var inst_66642 = revert.ethereum._LT_balance_of(inst_66618,user_address);
var state_66650__$1 = (function (){var statearr_66652 = state_66650;
(statearr_66652[(8)] = inst_66641);

return statearr_66652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66650__$1,(14),inst_66642);
} else {
if((state_val_66651 === (1))){
var state_66650__$1 = state_66650;
var statearr_66653_67538 = state_66650__$1;
(statearr_66653_67538[(2)] = null);

(statearr_66653_67538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (4))){
var inst_66611 = (state_66650[(2)]);
var inst_66612 = (new module$node_modules$bignumber_DOT_js$bignumber("0.0"));
var state_66650__$1 = (function (){var statearr_66654 = state_66650;
(statearr_66654[(9)] = inst_66611);

return statearr_66654;
})();
var statearr_66655_67552 = state_66650__$1;
(statearr_66655_67552[(2)] = inst_66612);

(statearr_66655_67552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (13))){
var inst_66638 = (state_66650[(2)]);
var _ = (function (){var statearr_66656 = state_66650;
(statearr_66656[(4)] = cljs.core.rest((state_66650[(4)])));

return statearr_66656;
})();
var state_66650__$1 = state_66650;
var statearr_66657_67573 = state_66650__$1;
(statearr_66657_67573[(2)] = inst_66638);

(statearr_66657_67573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (6))){
var inst_66618 = (state_66650[(7)]);
var _ = (function (){var statearr_66658 = state_66650;
(statearr_66658[(4)] = cljs.core.cons((9),(state_66650[(4)])));

return statearr_66658;
})();
var inst_66625 = inst_66618.decimals();
var inst_66626 = cljs.core.async.interop.p__GT_c(inst_66625);
var state_66650__$1 = state_66650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66650__$1,(10),inst_66626);
} else {
if((state_val_66651 === (3))){
var inst_66648 = (state_66650[(2)]);
var state_66650__$1 = state_66650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66650__$1,inst_66648);
} else {
if((state_val_66651 === (12))){
var inst_66628 = (state_66650[(10)]);
var state_66650__$1 = state_66650;
var statearr_66659_67601 = state_66650__$1;
(statearr_66659_67601[(2)] = inst_66628);

(statearr_66659_67601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (2))){
var _ = (function (){var statearr_66661 = state_66650;
(statearr_66661[(4)] = cljs.core.cons((5),(state_66650[(4)])));

return statearr_66661;
})();
var inst_66618 = revert.ethereum.make_erc20(token_address);
var state_66650__$1 = (function (){var statearr_66662 = state_66650;
(statearr_66662[(7)] = inst_66618);

return statearr_66662;
})();
var statearr_66663_67618 = state_66650__$1;
(statearr_66663_67618[(2)] = null);

(statearr_66663_67618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (11))){
var inst_66628 = (state_66650[(10)]);
var inst_66635 = (function(){throw inst_66628})();
var state_66650__$1 = state_66650;
var statearr_66665_67637 = state_66650__$1;
(statearr_66665_67637[(2)] = inst_66635);

(statearr_66665_67637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (9))){
var _ = (function (){var statearr_66666 = state_66650;
(statearr_66666[(4)] = cljs.core.rest((state_66650[(4)])));

return statearr_66666;
})();
var state_66650__$1 = state_66650;
var ex66660 = (state_66650__$1[(2)]);
var statearr_66667_67643 = state_66650__$1;
(statearr_66667_67643[(5)] = ex66660);


if((ex66660 instanceof Error)){
var statearr_66668_67645 = state_66650__$1;
(statearr_66668_67645[(1)] = (8));

(statearr_66668_67645[(5)] = null);

} else {
throw ex66660;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (5))){
var _ = (function (){var statearr_66669 = state_66650;
(statearr_66669[(4)] = cljs.core.rest((state_66650[(4)])));

return statearr_66669;
})();
var state_66650__$1 = state_66650;
var ex66664 = (state_66650__$1[(2)]);
var statearr_66670_67647 = state_66650__$1;
(statearr_66670_67647[(5)] = ex66664);


if((ex66664 instanceof Error)){
var statearr_66671_67649 = state_66650__$1;
(statearr_66671_67649[(1)] = (4));

(statearr_66671_67649[(5)] = null);

} else {
throw ex66664;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (14))){
var inst_66641 = (state_66650[(8)]);
var inst_66644 = (state_66650[(2)]);
var inst_66645 = revert.utils.ebn__GT_bn(inst_66644,inst_66641);
var _ = (function (){var statearr_66672 = state_66650;
(statearr_66672[(4)] = cljs.core.rest((state_66650[(4)])));

return statearr_66672;
})();
var state_66650__$1 = state_66650;
var statearr_66673_67651 = state_66650__$1;
(statearr_66673_67651[(2)] = inst_66645);

(statearr_66673_67651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (10))){
var inst_66628 = (state_66650[(10)]);
var inst_66628__$1 = (state_66650[(2)]);
var inst_66629 = (inst_66628__$1 instanceof cljs.core.ExceptionInfo);
var inst_66630 = cljs.core.ex_data(inst_66628__$1);
var inst_66631 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66630);
var inst_66632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66631,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66633 = ((inst_66629) && (inst_66632));
var state_66650__$1 = (function (){var statearr_66674 = state_66650;
(statearr_66674[(10)] = inst_66628__$1);

return statearr_66674;
})();
if(cljs.core.truth_(inst_66633)){
var statearr_66675_67652 = state_66650__$1;
(statearr_66675_67652[(1)] = (11));

} else {
var statearr_66676_67654 = state_66650__$1;
(statearr_66676_67654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66651 === (8))){
var inst_66619 = (state_66650[(2)]);
var state_66650__$1 = (function (){var statearr_66677 = state_66650;
(statearr_66677[(11)] = inst_66619);

return statearr_66677;
})();
var statearr_66678_67655 = state_66650__$1;
(statearr_66678_67655[(2)] = (18));

(statearr_66678_67655[(1)] = (7));


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
}
});
return (function() {
var revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____0 = (function (){
var statearr_66679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66679[(0)] = revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__);

(statearr_66679[(1)] = (1));

return statearr_66679;
});
var revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____1 = (function (state_66650){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66650);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66680){var ex__52189__auto__ = e66680;
var statearr_66681_67672 = state_66650;
(statearr_66681_67672[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66650[(4)]))){
var statearr_66682_67673 = state_66650;
(statearr_66682_67673[(1)] = cljs.core.first((state_66650[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67674 = state_66650;
state_66650 = G__67674;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__ = function(state_66650){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____1.call(this,state_66650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66683 = f__52209__auto__();
(statearr_66683[(6)] = c__52208__auto__);

return statearr_66683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_total_supply = (function revert$ethereum$_LT_total_supply(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66699){
var state_val_66700 = (state_66699[(1)]);
if((state_val_66700 === (1))){
var inst_66684 = contract.totalSupply();
var inst_66685 = cljs.core.async.interop.p__GT_c(inst_66684);
var state_66699__$1 = state_66699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66699__$1,(2),inst_66685);
} else {
if((state_val_66700 === (2))){
var inst_66687 = (state_66699[(7)]);
var inst_66687__$1 = (state_66699[(2)]);
var inst_66688 = (inst_66687__$1 instanceof cljs.core.ExceptionInfo);
var inst_66689 = cljs.core.ex_data(inst_66687__$1);
var inst_66690 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66689);
var inst_66691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66690,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66692 = ((inst_66688) && (inst_66691));
var state_66699__$1 = (function (){var statearr_66701 = state_66699;
(statearr_66701[(7)] = inst_66687__$1);

return statearr_66701;
})();
if(cljs.core.truth_(inst_66692)){
var statearr_66702_67676 = state_66699__$1;
(statearr_66702_67676[(1)] = (3));

} else {
var statearr_66703_67677 = state_66699__$1;
(statearr_66703_67677[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66700 === (3))){
var inst_66687 = (state_66699[(7)]);
var inst_66694 = (function(){throw inst_66687})();
var state_66699__$1 = state_66699;
var statearr_66704_67678 = state_66699__$1;
(statearr_66704_67678[(2)] = inst_66694);

(statearr_66704_67678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66700 === (4))){
var inst_66687 = (state_66699[(7)]);
var state_66699__$1 = state_66699;
var statearr_66705_67681 = state_66699__$1;
(statearr_66705_67681[(2)] = inst_66687);

(statearr_66705_67681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66700 === (5))){
var inst_66697 = (state_66699[(2)]);
var state_66699__$1 = state_66699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66699__$1,inst_66697);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____0 = (function (){
var statearr_66706 = [null,null,null,null,null,null,null,null];
(statearr_66706[(0)] = revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__);

(statearr_66706[(1)] = (1));

return statearr_66706;
});
var revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____1 = (function (state_66699){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66699);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66707){var ex__52189__auto__ = e66707;
var statearr_66708_67686 = state_66699;
(statearr_66708_67686[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66699[(4)]))){
var statearr_66709_67688 = state_66699;
(statearr_66709_67688[(1)] = cljs.core.first((state_66699[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67691 = state_66699;
state_66699 = G__67691;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__ = function(state_66699){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____1.call(this,state_66699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____0;
revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66710 = f__52209__auto__();
(statearr_66710[(6)] = c__52208__auto__);

return statearr_66710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_token_total_supply = (function revert$ethereum$_LT_token_total_supply(token_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66731){
var state_val_66732 = (state_66731[(1)]);
if((state_val_66732 === (1))){
var inst_66711 = (state_66731[(7)]);
var inst_66711__$1 = revert.ethereum.make_erc20(token_address);
var inst_66712 = inst_66711__$1.decimals();
var inst_66713 = cljs.core.async.interop.p__GT_c(inst_66712);
var state_66731__$1 = (function (){var statearr_66733 = state_66731;
(statearr_66733[(7)] = inst_66711__$1);

return statearr_66733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66731__$1,(2),inst_66713);
} else {
if((state_val_66732 === (2))){
var inst_66715 = (state_66731[(8)]);
var inst_66715__$1 = (state_66731[(2)]);
var inst_66716 = (inst_66715__$1 instanceof cljs.core.ExceptionInfo);
var inst_66717 = cljs.core.ex_data(inst_66715__$1);
var inst_66718 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66717);
var inst_66719 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66718,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66720 = ((inst_66716) && (inst_66719));
var state_66731__$1 = (function (){var statearr_66734 = state_66731;
(statearr_66734[(8)] = inst_66715__$1);

return statearr_66734;
})();
if(cljs.core.truth_(inst_66720)){
var statearr_66735_67696 = state_66731__$1;
(statearr_66735_67696[(1)] = (3));

} else {
var statearr_66736_67697 = state_66731__$1;
(statearr_66736_67697[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66732 === (3))){
var inst_66715 = (state_66731[(8)]);
var inst_66722 = (function(){throw inst_66715})();
var state_66731__$1 = state_66731;
var statearr_66737_67699 = state_66731__$1;
(statearr_66737_67699[(2)] = inst_66722);

(statearr_66737_67699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66732 === (4))){
var inst_66715 = (state_66731[(8)]);
var state_66731__$1 = state_66731;
var statearr_66738_67702 = state_66731__$1;
(statearr_66738_67702[(2)] = inst_66715);

(statearr_66738_67702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66732 === (5))){
var inst_66711 = (state_66731[(7)]);
var inst_66725 = (state_66731[(2)]);
var inst_66726 = revert.ethereum._LT_total_supply(inst_66711);
var state_66731__$1 = (function (){var statearr_66739 = state_66731;
(statearr_66739[(9)] = inst_66725);

return statearr_66739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66731__$1,(6),inst_66726);
} else {
if((state_val_66732 === (6))){
var inst_66725 = (state_66731[(9)]);
var inst_66728 = (state_66731[(2)]);
var inst_66729 = revert.utils.ebn__GT_bn(inst_66728,inst_66725);
var state_66731__$1 = state_66731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66731__$1,inst_66729);
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
var revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____0 = (function (){
var statearr_66740 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66740[(0)] = revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__);

(statearr_66740[(1)] = (1));

return statearr_66740;
});
var revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____1 = (function (state_66731){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66731);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66741){var ex__52189__auto__ = e66741;
var statearr_66742_67705 = state_66731;
(statearr_66742_67705[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66731[(4)]))){
var statearr_66743_67706 = state_66731;
(statearr_66743_67706[(1)] = cljs.core.first((state_66731[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67708 = state_66731;
state_66731 = G__67708;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__ = function(state_66731){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____1.call(this,state_66731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____0;
revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66744 = f__52209__auto__();
(statearr_66744[(6)] = c__52208__auto__);

return statearr_66744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_balance = (function revert$ethereum$_LT_balance(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66760){
var state_val_66761 = (state_66760[(1)]);
if((state_val_66761 === (1))){
var inst_66745 = contract.balance();
var inst_66746 = cljs.core.async.interop.p__GT_c(inst_66745);
var state_66760__$1 = state_66760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66760__$1,(2),inst_66746);
} else {
if((state_val_66761 === (2))){
var inst_66748 = (state_66760[(7)]);
var inst_66748__$1 = (state_66760[(2)]);
var inst_66749 = (inst_66748__$1 instanceof cljs.core.ExceptionInfo);
var inst_66750 = cljs.core.ex_data(inst_66748__$1);
var inst_66751 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66750);
var inst_66752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66751,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66753 = ((inst_66749) && (inst_66752));
var state_66760__$1 = (function (){var statearr_66762 = state_66760;
(statearr_66762[(7)] = inst_66748__$1);

return statearr_66762;
})();
if(cljs.core.truth_(inst_66753)){
var statearr_66763_67711 = state_66760__$1;
(statearr_66763_67711[(1)] = (3));

} else {
var statearr_66764_67712 = state_66760__$1;
(statearr_66764_67712[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66761 === (3))){
var inst_66748 = (state_66760[(7)]);
var inst_66755 = (function(){throw inst_66748})();
var state_66760__$1 = state_66760;
var statearr_66765_67715 = state_66760__$1;
(statearr_66765_67715[(2)] = inst_66755);

(statearr_66765_67715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66761 === (4))){
var inst_66748 = (state_66760[(7)]);
var state_66760__$1 = state_66760;
var statearr_66766_67717 = state_66760__$1;
(statearr_66766_67717[(2)] = inst_66748);

(statearr_66766_67717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66761 === (5))){
var inst_66758 = (state_66760[(2)]);
var state_66760__$1 = state_66760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66760__$1,inst_66758);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_balance_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_balance_$_state_machine__52186__auto____0 = (function (){
var statearr_66767 = [null,null,null,null,null,null,null,null];
(statearr_66767[(0)] = revert$ethereum$_LT_balance_$_state_machine__52186__auto__);

(statearr_66767[(1)] = (1));

return statearr_66767;
});
var revert$ethereum$_LT_balance_$_state_machine__52186__auto____1 = (function (state_66760){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66760);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66768){var ex__52189__auto__ = e66768;
var statearr_66769_67719 = state_66760;
(statearr_66769_67719[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66760[(4)]))){
var statearr_66770_67722 = state_66760;
(statearr_66770_67722[(1)] = cljs.core.first((state_66760[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67724 = state_66760;
state_66760 = G__67724;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_balance_$_state_machine__52186__auto__ = function(state_66760){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_balance_$_state_machine__52186__auto____1.call(this,state_66760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_balance_$_state_machine__52186__auto____0;
revert$ethereum$_LT_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_balance_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66771 = f__52209__auto__();
(statearr_66771[(6)] = c__52208__auto__);

return statearr_66771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_pickle_jar_balance = (function revert$ethereum$_LT_pickle_jar_balance(token_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66793){
var state_val_66794 = (state_66793[(1)]);
if((state_val_66794 === (1))){
var inst_66773 = (state_66793[(7)]);
var inst_66772 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(revert.ethereum.erc20_abi,revert.ethereum.pickle_jar_abi);
var inst_66773__$1 = revert.ethereum.make_contract(inst_66772,token_address);
var inst_66774 = inst_66773__$1.decimals();
var inst_66775 = cljs.core.async.interop.p__GT_c(inst_66774);
var state_66793__$1 = (function (){var statearr_66795 = state_66793;
(statearr_66795[(7)] = inst_66773__$1);

return statearr_66795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66793__$1,(2),inst_66775);
} else {
if((state_val_66794 === (2))){
var inst_66777 = (state_66793[(8)]);
var inst_66777__$1 = (state_66793[(2)]);
var inst_66778 = (inst_66777__$1 instanceof cljs.core.ExceptionInfo);
var inst_66779 = cljs.core.ex_data(inst_66777__$1);
var inst_66780 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66779);
var inst_66781 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66780,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66782 = ((inst_66778) && (inst_66781));
var state_66793__$1 = (function (){var statearr_66796 = state_66793;
(statearr_66796[(8)] = inst_66777__$1);

return statearr_66796;
})();
if(cljs.core.truth_(inst_66782)){
var statearr_66797_67751 = state_66793__$1;
(statearr_66797_67751[(1)] = (3));

} else {
var statearr_66798_67758 = state_66793__$1;
(statearr_66798_67758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66794 === (3))){
var inst_66777 = (state_66793[(8)]);
var inst_66784 = (function(){throw inst_66777})();
var state_66793__$1 = state_66793;
var statearr_66799_67759 = state_66793__$1;
(statearr_66799_67759[(2)] = inst_66784);

(statearr_66799_67759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66794 === (4))){
var inst_66777 = (state_66793[(8)]);
var state_66793__$1 = state_66793;
var statearr_66800_67760 = state_66793__$1;
(statearr_66800_67760[(2)] = inst_66777);

(statearr_66800_67760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66794 === (5))){
var inst_66773 = (state_66793[(7)]);
var inst_66787 = (state_66793[(2)]);
var inst_66788 = revert.ethereum._LT_balance(inst_66773);
var state_66793__$1 = (function (){var statearr_66801 = state_66793;
(statearr_66801[(9)] = inst_66787);

return statearr_66801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66793__$1,(6),inst_66788);
} else {
if((state_val_66794 === (6))){
var inst_66787 = (state_66793[(9)]);
var inst_66790 = (state_66793[(2)]);
var inst_66791 = revert.utils.ebn__GT_bn(inst_66790,inst_66787);
var state_66793__$1 = state_66793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66793__$1,inst_66791);
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
var revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____0 = (function (){
var statearr_66802 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66802[(0)] = revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__);

(statearr_66802[(1)] = (1));

return statearr_66802;
});
var revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____1 = (function (state_66793){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66793);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66803){var ex__52189__auto__ = e66803;
var statearr_66804_67765 = state_66793;
(statearr_66804_67765[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66793[(4)]))){
var statearr_66805_67767 = state_66793;
(statearr_66805_67767[(1)] = cljs.core.first((state_66793[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67768 = state_66793;
state_66793 = G__67768;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__ = function(state_66793){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____1.call(this,state_66793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____0;
revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66806 = f__52209__auto__();
(statearr_66806[(6)] = c__52208__auto__);

return statearr_66806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum.make_token_deposit = (function revert$ethereum$make_token_deposit(tx){
var parsed_event = revert.ethereum.detector_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),tx_args.user,new cljs.core.Keyword(null,"pid","pid",1018387698),parseInt(module$node_modules$ethers$lib$index.utils.formatUnits(tx_args.pid,(0))),new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash], null);
});
revert.ethereum.make_token_tx = (function revert$ethereum$make_token_tx(tx,decimals){
var parsed_event = revert.ethereum.erc20_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var token = tx.address;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),tx_args.from,new cljs.core.Keyword(null,"to","to",192099007),tx_args.to,new cljs.core.Keyword(null,"hash","hash",-13781596),tx_hash,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"amount","amount",364489504),revert.utils.ebn__GT_bn(tx_args.amount,decimals)], null);
});
revert.ethereum._LT_user_token_deposits = (function revert$ethereum$_LT_user_token_deposits(provider,token_address,user_address){
var contract = revert.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Deposit.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66825){
var state_val_66826 = (state_66825[(1)]);
if((state_val_66826 === (1))){
var inst_66808 = provider.getLogs(user_filter);
var inst_66809 = cljs.core.async.interop.p__GT_c(inst_66808);
var state_66825__$1 = state_66825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66825__$1,(2),inst_66809);
} else {
if((state_val_66826 === (2))){
var inst_66811 = (state_66825[(7)]);
var inst_66811__$1 = (state_66825[(2)]);
var inst_66812 = (inst_66811__$1 instanceof cljs.core.ExceptionInfo);
var inst_66813 = cljs.core.ex_data(inst_66811__$1);
var inst_66814 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66813);
var inst_66815 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66814,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66816 = ((inst_66812) && (inst_66815));
var state_66825__$1 = (function (){var statearr_66827 = state_66825;
(statearr_66827[(7)] = inst_66811__$1);

return statearr_66827;
})();
if(cljs.core.truth_(inst_66816)){
var statearr_66828_67779 = state_66825__$1;
(statearr_66828_67779[(1)] = (3));

} else {
var statearr_66829_67780 = state_66825__$1;
(statearr_66829_67780[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (3))){
var inst_66811 = (state_66825[(7)]);
var inst_66818 = (function(){throw inst_66811})();
var state_66825__$1 = state_66825;
var statearr_66830_67781 = state_66825__$1;
(statearr_66830_67781[(2)] = inst_66818);

(statearr_66830_67781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (4))){
var inst_66811 = (state_66825[(7)]);
var state_66825__$1 = state_66825;
var statearr_66831_67783 = state_66825__$1;
(statearr_66831_67783[(2)] = inst_66811);

(statearr_66831_67783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66826 === (5))){
var inst_66821 = (state_66825[(2)]);
var inst_66822 = (function (){var filtered_txs = inst_66821;
return (function (p1__66807_SHARP_){
return revert.ethereum.make_token_deposit(p1__66807_SHARP_);
});
})();
var inst_66823 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66822,inst_66821);
var state_66825__$1 = state_66825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66825__$1,inst_66823);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____0 = (function (){
var statearr_66832 = [null,null,null,null,null,null,null,null];
(statearr_66832[(0)] = revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__);

(statearr_66832[(1)] = (1));

return statearr_66832;
});
var revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____1 = (function (state_66825){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66825);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66833){var ex__52189__auto__ = e66833;
var statearr_66834_67788 = state_66825;
(statearr_66834_67788[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66825[(4)]))){
var statearr_66835_67795 = state_66825;
(statearr_66835_67795[(1)] = cljs.core.first((state_66825[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67798 = state_66825;
state_66825 = G__67798;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__ = function(state_66825){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____1.call(this,state_66825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66836 = f__52209__auto__();
(statearr_66836[(6)] = c__52208__auto__);

return statearr_66836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_token_withdrawals = (function revert$ethereum$_LT_user_token_withdrawals(provider,token_address,user_address){
var contract = revert.ethereum.make_contract(revert.ethereum.event_detector_abi,token_address);
var user_filter = (contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1 ? contract.filters.Withdraw.cljs$core$IFn$_invoke$arity$1(user_address) : contract.filters.Withdraw.call(null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66855){
var state_val_66856 = (state_66855[(1)]);
if((state_val_66856 === (1))){
var inst_66838 = provider.getLogs(user_filter);
var inst_66839 = cljs.core.async.interop.p__GT_c(inst_66838);
var state_66855__$1 = state_66855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66855__$1,(2),inst_66839);
} else {
if((state_val_66856 === (2))){
var inst_66841 = (state_66855[(7)]);
var inst_66841__$1 = (state_66855[(2)]);
var inst_66842 = (inst_66841__$1 instanceof cljs.core.ExceptionInfo);
var inst_66843 = cljs.core.ex_data(inst_66841__$1);
var inst_66844 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66843);
var inst_66845 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66844,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66846 = ((inst_66842) && (inst_66845));
var state_66855__$1 = (function (){var statearr_66857 = state_66855;
(statearr_66857[(7)] = inst_66841__$1);

return statearr_66857;
})();
if(cljs.core.truth_(inst_66846)){
var statearr_66858_67809 = state_66855__$1;
(statearr_66858_67809[(1)] = (3));

} else {
var statearr_66859_67810 = state_66855__$1;
(statearr_66859_67810[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66856 === (3))){
var inst_66841 = (state_66855[(7)]);
var inst_66848 = (function(){throw inst_66841})();
var state_66855__$1 = state_66855;
var statearr_66860_67814 = state_66855__$1;
(statearr_66860_67814[(2)] = inst_66848);

(statearr_66860_67814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66856 === (4))){
var inst_66841 = (state_66855[(7)]);
var state_66855__$1 = state_66855;
var statearr_66861_67817 = state_66855__$1;
(statearr_66861_67817[(2)] = inst_66841);

(statearr_66861_67817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66856 === (5))){
var inst_66851 = (state_66855[(2)]);
var inst_66852 = (function (){var filtered_txs = inst_66851;
return (function (p1__66837_SHARP_){
return revert.ethereum.make_token_deposit(p1__66837_SHARP_);
});
})();
var inst_66853 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66852,inst_66851);
var state_66855__$1 = state_66855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66855__$1,inst_66853);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____0 = (function (){
var statearr_66862 = [null,null,null,null,null,null,null,null];
(statearr_66862[(0)] = revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__);

(statearr_66862[(1)] = (1));

return statearr_66862;
});
var revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____1 = (function (state_66855){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66855);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66863){var ex__52189__auto__ = e66863;
var statearr_66864_67826 = state_66855;
(statearr_66864_67826[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66855[(4)]))){
var statearr_66865_67827 = state_66855;
(statearr_66865_67827[(1)] = cljs.core.first((state_66855[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67828 = state_66855;
state_66855 = G__67828;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__ = function(state_66855){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____1.call(this,state_66855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66866 = f__52209__auto__();
(statearr_66866[(6)] = c__52208__auto__);

return statearr_66866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_token_transfers = (function revert$ethereum$_LT_user_token_transfers(var_args){
var G__66869 = arguments.length;
switch (G__66869) {
case 3:
return revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3 = (function (provider,token_address,out_address){
return revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(provider,token_address,out_address,null);
}));

(revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4 = (function (provider,token_address,out_address,in_address){
if((token_address == null)){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66872){
var state_val_66873 = (state_66872[(1)]);
if((state_val_66873 === (1))){
var inst_66870 = cljs.core.PersistentVector.EMPTY;
var state_66872__$1 = state_66872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66872__$1,inst_66870);
} else {
return null;
}
});
return (function() {
var revert$ethereum$state_machine__52186__auto__ = null;
var revert$ethereum$state_machine__52186__auto____0 = (function (){
var statearr_66874 = [null,null,null,null,null,null,null];
(statearr_66874[(0)] = revert$ethereum$state_machine__52186__auto__);

(statearr_66874[(1)] = (1));

return statearr_66874;
});
var revert$ethereum$state_machine__52186__auto____1 = (function (state_66872){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66872);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66875){var ex__52189__auto__ = e66875;
var statearr_66876_67830 = state_66872;
(statearr_66876_67830[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66872[(4)]))){
var statearr_66877_67831 = state_66872;
(statearr_66877_67831[(1)] = cljs.core.first((state_66872[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67832 = state_66872;
state_66872 = G__67832;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$state_machine__52186__auto__ = function(state_66872){
switch(arguments.length){
case 0:
return revert$ethereum$state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$state_machine__52186__auto____1.call(this,state_66872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$state_machine__52186__auto____0;
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$state_machine__52186__auto____1;
return revert$ethereum$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66878 = f__52209__auto__();
(statearr_66878[(6)] = c__52208__auto__);

return statearr_66878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
} else {
var contract = revert.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(out_address,in_address) : contract.filters.Transfer.call(null,out_address,in_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66910){
var state_val_66911 = (state_66910[(1)]);
if((state_val_66911 === (7))){
var inst_66890 = (state_66910[(7)]);
var inst_66897 = (function(){throw inst_66890})();
var state_66910__$1 = state_66910;
var statearr_66912_67833 = state_66910__$1;
(statearr_66912_67833[(2)] = inst_66897);

(statearr_66912_67833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66911 === (1))){
var state_66910__$1 = state_66910;
var statearr_66913_67834 = state_66910__$1;
(statearr_66913_67834[(2)] = null);

(statearr_66913_67834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66911 === (4))){
var inst_66879 = (state_66910[(2)]);
var inst_66880 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_66881 = cljs.core.PersistentVector.EMPTY;
var state_66910__$1 = (function (){var statearr_66914 = state_66910;
(statearr_66914[(8)] = inst_66880);

(statearr_66914[(9)] = inst_66879);

return statearr_66914;
})();
var statearr_66915_67837 = state_66910__$1;
(statearr_66915_67837[(2)] = inst_66881);

(statearr_66915_67837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66911 === (6))){
var inst_66890 = (state_66910[(7)]);
var inst_66890__$1 = (state_66910[(2)]);
var inst_66891 = (inst_66890__$1 instanceof cljs.core.ExceptionInfo);
var inst_66892 = cljs.core.ex_data(inst_66890__$1);
var inst_66893 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66892);
var inst_66894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66893,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66895 = ((inst_66891) && (inst_66894));
var state_66910__$1 = (function (){var statearr_66916 = state_66910;
(statearr_66916[(7)] = inst_66890__$1);

return statearr_66916;
})();
if(cljs.core.truth_(inst_66895)){
var statearr_66917_67849 = state_66910__$1;
(statearr_66917_67849[(1)] = (7));

} else {
var statearr_66918_67853 = state_66910__$1;
(statearr_66918_67853[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66911 === (3))){
var inst_66908 = (state_66910[(2)]);
var state_66910__$1 = state_66910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66910__$1,inst_66908);
} else {
if((state_val_66911 === (2))){
var ___$2 = (function (){var statearr_66920 = state_66910;
(statearr_66920[(4)] = cljs.core.cons((5),(state_66910[(4)])));

return statearr_66920;
})();
var inst_66887 = provider.getLogs(user_filter);
var inst_66888 = cljs.core.async.interop.p__GT_c(inst_66887);
var state_66910__$1 = state_66910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66910__$1,(6),inst_66888);
} else {
if((state_val_66911 === (9))){
var inst_66900 = (state_66910[(2)]);
var inst_66901 = revert.ethereum._LT_token_decimals(token_address);
var state_66910__$1 = (function (){var statearr_66921 = state_66910;
(statearr_66921[(10)] = inst_66900);

return statearr_66921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66910__$1,(10),inst_66901);
} else {
if((state_val_66911 === (5))){
var ___$2 = (function (){var statearr_66922 = state_66910;
(statearr_66922[(4)] = cljs.core.rest((state_66910[(4)])));

return statearr_66922;
})();
var state_66910__$1 = state_66910;
var ex66919 = (state_66910__$1[(2)]);
var statearr_66923_67865 = state_66910__$1;
(statearr_66923_67865[(5)] = ex66919);


if((ex66919 instanceof Error)){
var statearr_66924_67866 = state_66910__$1;
(statearr_66924_67866[(1)] = (4));

(statearr_66924_67866[(5)] = null);

} else {
throw ex66919;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66911 === (10))){
var inst_66900 = (state_66910[(10)]);
var inst_66903 = (state_66910[(2)]);
var inst_66904 = (function (){var filtered_txs = inst_66900;
var decimals = inst_66903;
return (function (p1__66867_SHARP_){
return revert.ethereum.make_token_tx(p1__66867_SHARP_,decimals);
});
})();
var inst_66905 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66904,inst_66900);
var ___$2 = (function (){var statearr_66925 = state_66910;
(statearr_66925[(4)] = cljs.core.rest((state_66910[(4)])));

return statearr_66925;
})();
var state_66910__$1 = state_66910;
var statearr_66926_67868 = state_66910__$1;
(statearr_66926_67868[(2)] = inst_66905);

(statearr_66926_67868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66911 === (8))){
var inst_66890 = (state_66910[(7)]);
var state_66910__$1 = state_66910;
var statearr_66927_67869 = state_66910__$1;
(statearr_66927_67869[(2)] = inst_66890);

(statearr_66927_67869[(1)] = (9));


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
});
return (function() {
var revert$ethereum$state_machine__52186__auto__ = null;
var revert$ethereum$state_machine__52186__auto____0 = (function (){
var statearr_66928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66928[(0)] = revert$ethereum$state_machine__52186__auto__);

(statearr_66928[(1)] = (1));

return statearr_66928;
});
var revert$ethereum$state_machine__52186__auto____1 = (function (state_66910){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66910);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66929){var ex__52189__auto__ = e66929;
var statearr_66930_67870 = state_66910;
(statearr_66930_67870[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66910[(4)]))){
var statearr_66931_67875 = state_66910;
(statearr_66931_67875[(1)] = cljs.core.first((state_66910[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67880 = state_66910;
state_66910 = G__67880;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$state_machine__52186__auto__ = function(state_66910){
switch(arguments.length){
case 0:
return revert$ethereum$state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$state_machine__52186__auto____1.call(this,state_66910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$state_machine__52186__auto____0;
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$state_machine__52186__auto____1;
return revert$ethereum$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66932 = f__52209__auto__();
(statearr_66932[(6)] = c__52208__auto__);

return statearr_66932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}
}));

(revert.ethereum._LT_user_token_transfers.cljs$lang$maxFixedArity = 4);

revert.ethereum._LT_user_lp_mint_transfers = (function revert$ethereum$_LT_user_lp_mint_transfers(provider,token_address,user_address){
var contract = revert.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(null,user_address) : contract.filters.Transfer.call(null,null,user_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66949){
var state_val_66950 = (state_66949[(1)]);
if((state_val_66950 === (1))){
var inst_66933 = provider.getLogs(user_filter);
var inst_66934 = cljs.core.async.interop.p__GT_c(inst_66933);
var state_66949__$1 = state_66949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66949__$1,(2),inst_66934);
} else {
if((state_val_66950 === (2))){
var inst_66936 = (state_66949[(7)]);
var inst_66936__$1 = (state_66949[(2)]);
var inst_66937 = (inst_66936__$1 instanceof cljs.core.ExceptionInfo);
var inst_66938 = cljs.core.ex_data(inst_66936__$1);
var inst_66939 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66938);
var inst_66940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66939,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66941 = ((inst_66937) && (inst_66940));
var state_66949__$1 = (function (){var statearr_66951 = state_66949;
(statearr_66951[(7)] = inst_66936__$1);

return statearr_66951;
})();
if(cljs.core.truth_(inst_66941)){
var statearr_66952_67885 = state_66949__$1;
(statearr_66952_67885[(1)] = (3));

} else {
var statearr_66953_67886 = state_66949__$1;
(statearr_66953_67886[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66950 === (3))){
var inst_66936 = (state_66949[(7)]);
var inst_66943 = (function(){throw inst_66936})();
var state_66949__$1 = state_66949;
var statearr_66954_67887 = state_66949__$1;
(statearr_66954_67887[(2)] = inst_66943);

(statearr_66954_67887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66950 === (4))){
var inst_66936 = (state_66949[(7)]);
var state_66949__$1 = state_66949;
var statearr_66955_67889 = state_66949__$1;
(statearr_66955_67889[(2)] = inst_66936);

(statearr_66955_67889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66950 === (5))){
var inst_66946 = (state_66949[(2)]);
var inst_66947 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_66946);
var state_66949__$1 = state_66949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66949__$1,inst_66947);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____0 = (function (){
var statearr_66956 = [null,null,null,null,null,null,null,null];
(statearr_66956[(0)] = revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__);

(statearr_66956[(1)] = (1));

return statearr_66956;
});
var revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____1 = (function (state_66949){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66949);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66957){var ex__52189__auto__ = e66957;
var statearr_66958_67890 = state_66949;
(statearr_66958_67890[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66949[(4)]))){
var statearr_66959_67891 = state_66949;
(statearr_66959_67891[(1)] = cljs.core.first((state_66949[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67895 = state_66949;
state_66949 = G__67895;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__ = function(state_66949){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____1.call(this,state_66949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66960 = f__52209__auto__();
(statearr_66960[(6)] = c__52208__auto__);

return statearr_66960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_lp_burn_transfers = (function revert$ethereum$_LT_user_lp_burn_transfers(provider,token_address,user_address){
var contract = revert.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,null) : contract.filters.Transfer.call(null,user_address,null));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66977){
var state_val_66978 = (state_66977[(1)]);
if((state_val_66978 === (1))){
var inst_66961 = provider.getLogs(user_filter);
var inst_66962 = cljs.core.async.interop.p__GT_c(inst_66961);
var state_66977__$1 = state_66977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66977__$1,(2),inst_66962);
} else {
if((state_val_66978 === (2))){
var inst_66964 = (state_66977[(7)]);
var inst_66964__$1 = (state_66977[(2)]);
var inst_66965 = (inst_66964__$1 instanceof cljs.core.ExceptionInfo);
var inst_66966 = cljs.core.ex_data(inst_66964__$1);
var inst_66967 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66966);
var inst_66968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66967,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66969 = ((inst_66965) && (inst_66968));
var state_66977__$1 = (function (){var statearr_66979 = state_66977;
(statearr_66979[(7)] = inst_66964__$1);

return statearr_66979;
})();
if(cljs.core.truth_(inst_66969)){
var statearr_66980_67909 = state_66977__$1;
(statearr_66980_67909[(1)] = (3));

} else {
var statearr_66981_67910 = state_66977__$1;
(statearr_66981_67910[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66978 === (3))){
var inst_66964 = (state_66977[(7)]);
var inst_66971 = (function(){throw inst_66964})();
var state_66977__$1 = state_66977;
var statearr_66982_67911 = state_66977__$1;
(statearr_66982_67911[(2)] = inst_66971);

(statearr_66982_67911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66978 === (4))){
var inst_66964 = (state_66977[(7)]);
var state_66977__$1 = state_66977;
var statearr_66983_67913 = state_66977__$1;
(statearr_66983_67913[(2)] = inst_66964);

(statearr_66983_67913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66978 === (5))){
var inst_66974 = (state_66977[(2)]);
var inst_66975 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_66974);
var state_66977__$1 = state_66977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66977__$1,inst_66975);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____0 = (function (){
var statearr_66984 = [null,null,null,null,null,null,null,null];
(statearr_66984[(0)] = revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__);

(statearr_66984[(1)] = (1));

return statearr_66984;
});
var revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____1 = (function (state_66977){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66977);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66985){var ex__52189__auto__ = e66985;
var statearr_66986_67917 = state_66977;
(statearr_66986_67917[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66977[(4)]))){
var statearr_66987_67918 = state_66977;
(statearr_66987_67918[(1)] = cljs.core.first((state_66977[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67920 = state_66977;
state_66977 = G__67920;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__ = function(state_66977){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____1.call(this,state_66977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66988 = f__52209__auto__();
(statearr_66988[(6)] = c__52208__auto__);

return statearr_66988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_lp_mint_deposits = (function revert$ethereum$_LT_user_lp_mint_deposits(provider,pair_address,token_address,user_address){
var contract = revert.ethereum.make_erc20(token_address);
var user_filter = (contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2 ? contract.filters.Transfer.cljs$core$IFn$_invoke$arity$2(user_address,pair_address) : contract.filters.Transfer.call(null,user_address,pair_address));
var _ = (user_filter.fromBlock = (0));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67005){
var state_val_67006 = (state_67005[(1)]);
if((state_val_67006 === (1))){
var inst_66989 = provider.getLogs(user_filter);
var inst_66990 = cljs.core.async.interop.p__GT_c(inst_66989);
var state_67005__$1 = state_67005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67005__$1,(2),inst_66990);
} else {
if((state_val_67006 === (2))){
var inst_66992 = (state_67005[(7)]);
var inst_66992__$1 = (state_67005[(2)]);
var inst_66993 = (inst_66992__$1 instanceof cljs.core.ExceptionInfo);
var inst_66994 = cljs.core.ex_data(inst_66992__$1);
var inst_66995 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66994);
var inst_66996 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66995,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_66997 = ((inst_66993) && (inst_66996));
var state_67005__$1 = (function (){var statearr_67007 = state_67005;
(statearr_67007[(7)] = inst_66992__$1);

return statearr_67007;
})();
if(cljs.core.truth_(inst_66997)){
var statearr_67008_67932 = state_67005__$1;
(statearr_67008_67932[(1)] = (3));

} else {
var statearr_67009_67939 = state_67005__$1;
(statearr_67009_67939[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67006 === (3))){
var inst_66992 = (state_67005[(7)]);
var inst_66999 = (function(){throw inst_66992})();
var state_67005__$1 = state_67005;
var statearr_67010_67945 = state_67005__$1;
(statearr_67010_67945[(2)] = inst_66999);

(statearr_67010_67945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67006 === (4))){
var inst_66992 = (state_67005[(7)]);
var state_67005__$1 = state_67005;
var statearr_67011_67949 = state_67005__$1;
(statearr_67011_67949[(2)] = inst_66992);

(statearr_67011_67949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67006 === (5))){
var inst_67002 = (state_67005[(2)]);
var inst_67003 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_67002);
var state_67005__$1 = state_67005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67005__$1,inst_67003);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____0 = (function (){
var statearr_67012 = [null,null,null,null,null,null,null,null];
(statearr_67012[(0)] = revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__);

(statearr_67012[(1)] = (1));

return statearr_67012;
});
var revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____1 = (function (state_67005){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67005);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67013){var ex__52189__auto__ = e67013;
var statearr_67014_67956 = state_67005;
(statearr_67014_67956[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67005[(4)]))){
var statearr_67015_67957 = state_67005;
(statearr_67015_67957[(1)] = cljs.core.first((state_67005[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67969 = state_67005;
state_67005 = G__67969;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__ = function(state_67005){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____1.call(this,state_67005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67016 = f__52209__auto__();
(statearr_67016[(6)] = c__52208__auto__);

return statearr_67016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_tx_receipt = (function revert$ethereum$_LT_get_tx_receipt(txhash){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67033){
var state_val_67034 = (state_67033[(1)]);
if((state_val_67034 === (1))){
var inst_67017 = cljs.core.deref(revert.ethereum.provider);
var inst_67018 = inst_67017.getTransactionReceipt(txhash);
var inst_67019 = cljs.core.async.interop.p__GT_c(inst_67018);
var state_67033__$1 = state_67033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67033__$1,(2),inst_67019);
} else {
if((state_val_67034 === (2))){
var inst_67021 = (state_67033[(7)]);
var inst_67021__$1 = (state_67033[(2)]);
var inst_67022 = (inst_67021__$1 instanceof cljs.core.ExceptionInfo);
var inst_67023 = cljs.core.ex_data(inst_67021__$1);
var inst_67024 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_67023);
var inst_67025 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67024,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_67026 = ((inst_67022) && (inst_67025));
var state_67033__$1 = (function (){var statearr_67035 = state_67033;
(statearr_67035[(7)] = inst_67021__$1);

return statearr_67035;
})();
if(cljs.core.truth_(inst_67026)){
var statearr_67036_67986 = state_67033__$1;
(statearr_67036_67986[(1)] = (3));

} else {
var statearr_67037_67987 = state_67033__$1;
(statearr_67037_67987[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67034 === (3))){
var inst_67021 = (state_67033[(7)]);
var inst_67028 = (function(){throw inst_67021})();
var state_67033__$1 = state_67033;
var statearr_67038_67989 = state_67033__$1;
(statearr_67038_67989[(2)] = inst_67028);

(statearr_67038_67989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67034 === (4))){
var inst_67021 = (state_67033[(7)]);
var state_67033__$1 = state_67033;
var statearr_67039_67992 = state_67033__$1;
(statearr_67039_67992[(2)] = inst_67021);

(statearr_67039_67992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67034 === (5))){
var inst_67031 = (state_67033[(2)]);
var state_67033__$1 = state_67033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67033__$1,inst_67031);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____0 = (function (){
var statearr_67040 = [null,null,null,null,null,null,null,null];
(statearr_67040[(0)] = revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__);

(statearr_67040[(1)] = (1));

return statearr_67040;
});
var revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____1 = (function (state_67033){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67033);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67041){var ex__52189__auto__ = e67041;
var statearr_67042_67999 = state_67033;
(statearr_67042_67999[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67033[(4)]))){
var statearr_67043_68000 = state_67033;
(statearr_67043_68000[(1)] = cljs.core.first((state_67033[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68002 = state_67033;
state_67033 = G__68002;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__ = function(state_67033){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____1.call(this,state_67033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67044 = f__52209__auto__();
(statearr_67044[(6)] = c__52208__auto__);

return statearr_67044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_tx = (function revert$ethereum$_LT_get_tx(txhash){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67061){
var state_val_67062 = (state_67061[(1)]);
if((state_val_67062 === (1))){
var inst_67045 = cljs.core.deref(revert.ethereum.provider);
var inst_67046 = inst_67045.getTransaction(txhash);
var inst_67047 = cljs.core.async.interop.p__GT_c(inst_67046);
var state_67061__$1 = state_67061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67061__$1,(2),inst_67047);
} else {
if((state_val_67062 === (2))){
var inst_67049 = (state_67061[(7)]);
var inst_67049__$1 = (state_67061[(2)]);
var inst_67050 = (inst_67049__$1 instanceof cljs.core.ExceptionInfo);
var inst_67051 = cljs.core.ex_data(inst_67049__$1);
var inst_67052 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_67051);
var inst_67053 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67052,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_67054 = ((inst_67050) && (inst_67053));
var state_67061__$1 = (function (){var statearr_67063 = state_67061;
(statearr_67063[(7)] = inst_67049__$1);

return statearr_67063;
})();
if(cljs.core.truth_(inst_67054)){
var statearr_67064_68005 = state_67061__$1;
(statearr_67064_68005[(1)] = (3));

} else {
var statearr_67065_68006 = state_67061__$1;
(statearr_67065_68006[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67062 === (3))){
var inst_67049 = (state_67061[(7)]);
var inst_67056 = (function(){throw inst_67049})();
var state_67061__$1 = state_67061;
var statearr_67066_68008 = state_67061__$1;
(statearr_67066_68008[(2)] = inst_67056);

(statearr_67066_68008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67062 === (4))){
var inst_67049 = (state_67061[(7)]);
var state_67061__$1 = state_67061;
var statearr_67067_68011 = state_67061__$1;
(statearr_67067_68011[(2)] = inst_67049);

(statearr_67067_68011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67062 === (5))){
var inst_67059 = (state_67061[(2)]);
var state_67061__$1 = state_67061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67061__$1,inst_67059);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____0 = (function (){
var statearr_67068 = [null,null,null,null,null,null,null,null];
(statearr_67068[(0)] = revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__);

(statearr_67068[(1)] = (1));

return statearr_67068;
});
var revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____1 = (function (state_67061){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67061);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67069){var ex__52189__auto__ = e67069;
var statearr_67070_68014 = state_67061;
(statearr_67070_68014[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67061[(4)]))){
var statearr_67071_68015 = state_67061;
(statearr_67071_68015[(1)] = cljs.core.first((state_67061[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68016 = state_67061;
state_67061 = G__68016;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__ = function(state_67061){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____1.call(this,state_67061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67072 = f__52209__auto__();
(statearr_67072[(6)] = c__52208__auto__);

return statearr_67072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_tx_with_receipt = (function revert$ethereum$_LT_get_tx_with_receipt(txhash){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67083){
var state_val_67084 = (state_67083[(1)]);
if((state_val_67084 === (1))){
var inst_67073 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_67074 = revert.ethereum._LT_get_tx(txhash);
var state_67083__$1 = (function (){var statearr_67085 = state_67083;
(statearr_67085[(7)] = inst_67073);

return statearr_67085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67083__$1,(2),inst_67074);
} else {
if((state_val_67084 === (2))){
var inst_67076 = (state_67083[(2)]);
var inst_67077 = revert.ethereum._LT_get_tx_receipt(txhash);
var state_67083__$1 = (function (){var statearr_67086 = state_67083;
(statearr_67086[(8)] = inst_67076);

return statearr_67086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67083__$1,(3),inst_67077);
} else {
if((state_val_67084 === (3))){
var inst_67076 = (state_67083[(8)]);
var inst_67073 = (state_67083[(7)]);
var inst_67079 = (state_67083[(2)]);
var inst_67080 = [inst_67076,inst_67079];
var inst_67081 = cljs.core.PersistentHashMap.fromArrays(inst_67073,inst_67080);
var state_67083__$1 = state_67083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67083__$1,inst_67081);
} else {
return null;
}
}
}
});
return (function() {
var revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____0 = (function (){
var statearr_67087 = [null,null,null,null,null,null,null,null,null];
(statearr_67087[(0)] = revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__);

(statearr_67087[(1)] = (1));

return statearr_67087;
});
var revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____1 = (function (state_67083){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67083);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67088){var ex__52189__auto__ = e67088;
var statearr_67089_68030 = state_67083;
(statearr_67089_68030[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67083[(4)]))){
var statearr_67090_68031 = state_67083;
(statearr_67090_68031[(1)] = cljs.core.first((state_67083[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68033 = state_67083;
state_67083 = G__68033;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__ = function(state_67083){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____1.call(this,state_67083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67091 = f__52209__auto__();
(statearr_67091[(6)] = c__52208__auto__);

return statearr_67091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_trxs = (function revert$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67096){
var state_val_67097 = (state_67096[(1)]);
if((state_val_67097 === (1))){
var inst_67092 = revert.ethereum._LT_get_tx_with_receipt(x);
var state_67096__$1 = state_67096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67096__$1,(2),inst_67092);
} else {
if((state_val_67097 === (2))){
var inst_67094 = (state_67096[(2)]);
var state_67096__$1 = state_67096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67096__$1,inst_67094);
} else {
return null;
}
}
});
return (function() {
var revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____0 = (function (){
var statearr_67098 = [null,null,null,null,null,null,null];
(statearr_67098[(0)] = revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__);

(statearr_67098[(1)] = (1));

return statearr_67098;
});
var revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____1 = (function (state_67096){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67096);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67099){var ex__52189__auto__ = e67099;
var statearr_67100_68040 = state_67096;
(statearr_67100_68040[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67096[(4)]))){
var statearr_67101_68041 = state_67096;
(statearr_67101_68041[(1)] = cljs.core.first((state_67096[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68042 = state_67096;
state_67096 = G__68042;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__ = function(state_67096){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____1.call(this,state_67096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67102 = f__52209__auto__();
(statearr_67102[(6)] = c__52208__auto__);

return statearr_67102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),tx_hashes);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(trxs));
});
revert.ethereum.total_gas_paid = (function revert$ethereum$total_gas_paid(tx_with_receipt){
var tx = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_price = revert.utils.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tx,"gasPrice"),(18));
var r = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(tx_with_receipt));
var gas_used = revert.utils.ebn__GT_bn(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"gasUsed"),(0));
var eth_spent = bignumber.core._STAR_(gas_price,gas_used);
return eth_spent;
});
revert.ethereum._LT_user_token_destinations = (function revert$ethereum$_LT_user_token_destinations(provider,token_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67112){
var state_val_67113 = (state_67112[(1)]);
if((state_val_67113 === (1))){
var inst_67104 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_67112__$1 = state_67112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67112__$1,(2),inst_67104);
} else {
if((state_val_67113 === (2))){
var inst_67106 = (state_67112[(2)]);
var inst_67107 = (function (){var user_txs = inst_67106;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_67108 = (function (){var user_txs = inst_67106;
return (function (p1__67103_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__67103_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_67109 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_67108,inst_67106);
var inst_67110 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_67107,inst_67109);
var state_67112__$1 = state_67112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67112__$1,inst_67110);
} else {
return null;
}
}
});
return (function() {
var revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____0 = (function (){
var statearr_67114 = [null,null,null,null,null,null,null];
(statearr_67114[(0)] = revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__);

(statearr_67114[(1)] = (1));

return statearr_67114;
});
var revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____1 = (function (state_67112){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67112);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67115){var ex__52189__auto__ = e67115;
var statearr_67116_68050 = state_67112;
(statearr_67116_68050[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67112[(4)]))){
var statearr_67117_68052 = state_67112;
(statearr_67117_68052[(1)] = cljs.core.first((state_67112[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68054 = state_67112;
state_67112 = G__68054;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__ = function(state_67112){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____1.call(this,state_67112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67118 = f__52209__auto__();
(statearr_67118[(6)] = c__52208__auto__);

return statearr_67118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum.decode_tx_data_args = (function revert$ethereum$decode_tx_data_args(fn_abi,hexdata){
var args_part = module$node_modules$ethers$lib$index.utils.hexDataSlice(hexdata,(4));
var _ = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_part], 0));
return module$node_modules$ethers$lib$index.utils.defaultAbiCoder.decode(cljs.core.clj__GT_js(fn_abi),args_part);
});
revert.ethereum._LT_erc20_infos = (function revert$ethereum$_LT_erc20_infos(tokens){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67123){
var state_val_67124 = (state_67123[(1)]);
if((state_val_67124 === (1))){
var inst_67119 = revert.ethereum._LT_erc20_info(a);
var state_67123__$1 = state_67123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67123__$1,(2),inst_67119);
} else {
if((state_val_67124 === (2))){
var inst_67121 = (state_67123[(2)]);
var state_67123__$1 = state_67123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67123__$1,inst_67121);
} else {
return null;
}
}
});
return (function() {
var revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_67125 = [null,null,null,null,null,null,null];
(statearr_67125[(0)] = revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__);

(statearr_67125[(1)] = (1));

return statearr_67125;
});
var revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____1 = (function (state_67123){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67123);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67126){var ex__52189__auto__ = e67126;
var statearr_67127_68059 = state_67123;
(statearr_67127_68059[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67123[(4)]))){
var statearr_67128_68060 = state_67123;
(statearr_67128_68060[(1)] = cljs.core.first((state_67123[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68062 = state_67123;
state_67123 = G__68062;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__ = function(state_67123){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____1.call(this,state_67123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____0;
revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67129 = f__52209__auto__();
(statearr_67129[(6)] = c__52208__auto__);

return statearr_67129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),tokens)));
});

//# sourceMappingURL=revert.ethereum.js.map
