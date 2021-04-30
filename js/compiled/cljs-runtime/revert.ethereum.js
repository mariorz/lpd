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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86403){
var state_val_86404 = (state_86403[(1)]);
if((state_val_86404 === (7))){
var inst_86370 = (state_86403[(7)]);
var inst_86377 = (function(){throw inst_86370})();
var state_86403__$1 = state_86403;
var statearr_86405_87193 = state_86403__$1;
(statearr_86405_87193[(2)] = inst_86377);

(statearr_86405_87193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (1))){
var state_86403__$1 = state_86403;
var statearr_86406_87194 = state_86403__$1;
(statearr_86406_87194[(2)] = null);

(statearr_86406_87194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (4))){
var inst_86358 = (state_86403[(2)]);
var inst_86359 = cljs.core.ex_cause(inst_86358);
var inst_86360 = ["select-provider err: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_86359)].join('');
var inst_86361 = console.log(inst_86360);
var state_86403__$1 = state_86403;
var statearr_86407_87195 = state_86403__$1;
(statearr_86407_87195[(2)] = inst_86361);

(statearr_86407_87195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (13))){
var inst_86397 = (state_86403[(2)]);
var inst_86398 = cljs.core.first(inst_86397);
var _ = (function (){var statearr_86408 = state_86403;
(statearr_86408[(4)] = cljs.core.rest((state_86403[(4)])));

return statearr_86408;
})();
var state_86403__$1 = state_86403;
var statearr_86409_87196 = state_86403__$1;
(statearr_86409_87196[(2)] = inst_86398);

(statearr_86409_87196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (6))){
var inst_86370 = (state_86403[(7)]);
var inst_86370__$1 = (state_86403[(2)]);
var inst_86371 = (inst_86370__$1 instanceof cljs.core.ExceptionInfo);
var inst_86372 = cljs.core.ex_data(inst_86370__$1);
var inst_86373 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86372);
var inst_86374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86373,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86375 = ((inst_86371) && (inst_86374));
var state_86403__$1 = (function (){var statearr_86410 = state_86403;
(statearr_86410[(7)] = inst_86370__$1);

return statearr_86410;
})();
if(cljs.core.truth_(inst_86375)){
var statearr_86411_87201 = state_86403__$1;
(statearr_86411_87201[(1)] = (7));

} else {
var statearr_86412_87217 = state_86403__$1;
(statearr_86412_87217[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (3))){
var inst_86401 = (state_86403[(2)]);
var state_86403__$1 = state_86403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86403__$1,inst_86401);
} else {
if((state_val_86404 === (12))){
var inst_86387 = (state_86403[(8)]);
var state_86403__$1 = state_86403;
var statearr_86413_87240 = state_86403__$1;
(statearr_86413_87240[(2)] = inst_86387);

(statearr_86413_87240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (2))){
var _ = (function (){var statearr_86414 = state_86403;
(statearr_86414[(4)] = cljs.core.cons((5),(state_86403[(4)])));

return statearr_86414;
})();
var inst_86367 = revert.ethereum.w3m.connect();
var inst_86368 = cljs.core.async.interop.p__GT_c(inst_86367);
var state_86403__$1 = state_86403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86403__$1,(6),inst_86368);
} else {
if((state_val_86404 === (11))){
var inst_86387 = (state_86403[(8)]);
var inst_86394 = (function(){throw inst_86387})();
var state_86403__$1 = state_86403;
var statearr_86416_87241 = state_86403__$1;
(statearr_86416_87241[(2)] = inst_86394);

(statearr_86416_87241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (9))){
var inst_86380 = (state_86403[(2)]);
var inst_86381 = (new revert.ethereum.web3provider(inst_86380));
var inst_86382 = cljs.core.reset_BANG_(revert.ethereum.provider,inst_86381);
var inst_86383 = inst_86382.provider;
var inst_86384 = inst_86383.enable();
var inst_86385 = cljs.core.async.interop.p__GT_c(inst_86384);
var state_86403__$1 = state_86403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86403__$1,(10),inst_86385);
} else {
if((state_val_86404 === (5))){
var _ = (function (){var statearr_86417 = state_86403;
(statearr_86417[(4)] = cljs.core.rest((state_86403[(4)])));

return statearr_86417;
})();
var state_86403__$1 = state_86403;
var ex86415 = (state_86403__$1[(2)]);
var statearr_86418_87250 = state_86403__$1;
(statearr_86418_87250[(5)] = ex86415);


if((ex86415 instanceof Error)){
var statearr_86419_87253 = state_86403__$1;
(statearr_86419_87253[(1)] = (4));

(statearr_86419_87253[(5)] = null);

} else {
throw ex86415;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (10))){
var inst_86387 = (state_86403[(8)]);
var inst_86387__$1 = (state_86403[(2)]);
var inst_86388 = (inst_86387__$1 instanceof cljs.core.ExceptionInfo);
var inst_86389 = cljs.core.ex_data(inst_86387__$1);
var inst_86390 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86389);
var inst_86391 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86390,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86392 = ((inst_86388) && (inst_86391));
var state_86403__$1 = (function (){var statearr_86420 = state_86403;
(statearr_86420[(8)] = inst_86387__$1);

return statearr_86420;
})();
if(cljs.core.truth_(inst_86392)){
var statearr_86421_87260 = state_86403__$1;
(statearr_86421_87260[(1)] = (11));

} else {
var statearr_86422_87262 = state_86403__$1;
(statearr_86422_87262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86404 === (8))){
var inst_86370 = (state_86403[(7)]);
var state_86403__$1 = state_86403;
var statearr_86423_87267 = state_86403__$1;
(statearr_86423_87267[(2)] = inst_86370);

(statearr_86423_87267[(1)] = (9));


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
var statearr_86424 = [null,null,null,null,null,null,null,null,null];
(statearr_86424[(0)] = revert$ethereum$select_provider_$_state_machine__52186__auto__);

(statearr_86424[(1)] = (1));

return statearr_86424;
});
var revert$ethereum$select_provider_$_state_machine__52186__auto____1 = (function (state_86403){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86403);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86425){var ex__52189__auto__ = e86425;
var statearr_86426_87272 = state_86403;
(statearr_86426_87272[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86403[(4)]))){
var statearr_86427_87281 = state_86403;
(statearr_86427_87281[(1)] = cljs.core.first((state_86403[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87284 = state_86403;
state_86403 = G__87284;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$select_provider_$_state_machine__52186__auto__ = function(state_86403){
switch(arguments.length){
case 0:
return revert$ethereum$select_provider_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$select_provider_$_state_machine__52186__auto____1.call(this,state_86403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$select_provider_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$select_provider_$_state_machine__52186__auto____0;
revert$ethereum$select_provider_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$select_provider_$_state_machine__52186__auto____1;
return revert$ethereum$select_provider_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86428 = f__52209__auto__();
(statearr_86428[(6)] = c__52208__auto__);

return statearr_86428;
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
revert.ethereum._LT_get_bytecode = (function revert$ethereum$_LT_get_bytecode(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86445){
var state_val_86446 = (state_86445[(1)]);
if((state_val_86446 === (1))){
var inst_86429 = cljs.core.deref(revert.ethereum.provider);
var inst_86430 = inst_86429.getCode(address);
var inst_86431 = cljs.core.async.interop.p__GT_c(inst_86430);
var state_86445__$1 = state_86445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86445__$1,(2),inst_86431);
} else {
if((state_val_86446 === (2))){
var inst_86433 = (state_86445[(7)]);
var inst_86433__$1 = (state_86445[(2)]);
var inst_86434 = (inst_86433__$1 instanceof cljs.core.ExceptionInfo);
var inst_86435 = cljs.core.ex_data(inst_86433__$1);
var inst_86436 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86435);
var inst_86437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86436,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86438 = ((inst_86434) && (inst_86437));
var state_86445__$1 = (function (){var statearr_86447 = state_86445;
(statearr_86447[(7)] = inst_86433__$1);

return statearr_86447;
})();
if(cljs.core.truth_(inst_86438)){
var statearr_86448_87313 = state_86445__$1;
(statearr_86448_87313[(1)] = (3));

} else {
var statearr_86449_87314 = state_86445__$1;
(statearr_86449_87314[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86446 === (3))){
var inst_86433 = (state_86445[(7)]);
var inst_86440 = (function(){throw inst_86433})();
var state_86445__$1 = state_86445;
var statearr_86450_87317 = state_86445__$1;
(statearr_86450_87317[(2)] = inst_86440);

(statearr_86450_87317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86446 === (4))){
var inst_86433 = (state_86445[(7)]);
var state_86445__$1 = state_86445;
var statearr_86451_87319 = state_86445__$1;
(statearr_86451_87319[(2)] = inst_86433);

(statearr_86451_87319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86446 === (5))){
var inst_86443 = (state_86445[(2)]);
var state_86445__$1 = state_86445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86445__$1,inst_86443);
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
var statearr_86452 = [null,null,null,null,null,null,null,null];
(statearr_86452[(0)] = revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__);

(statearr_86452[(1)] = (1));

return statearr_86452;
});
var revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____1 = (function (state_86445){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86445);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86453){var ex__52189__auto__ = e86453;
var statearr_86454_87344 = state_86445;
(statearr_86454_87344[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86445[(4)]))){
var statearr_86455_87345 = state_86445;
(statearr_86455_87345[(1)] = cljs.core.first((state_86445[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87350 = state_86445;
state_86445 = G__87350;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__ = function(state_86445){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____1.call(this,state_86445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_bytecode_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86456 = f__52209__auto__();
(statearr_86456[(6)] = c__52208__auto__);

return statearr_86456;
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86457_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__86457_SHARP_,"number"),block_num);
}),blocks)),"timestamp");
});
revert.ethereum.ts__GT_geckoprice = (function revert$ethereum$ts__GT_geckoprice(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86458_SHARP_){
return (cljs.core.first(p1__86458_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86459_SHARP_){
return (cljs.core.first(p1__86459_SHARP_) > ts);
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86477){
var state_val_86478 = (state_86477[(1)]);
if((state_val_86478 === (1))){
var inst_86460 = cljs.core.deref(revert.ethereum.provider);
var inst_86461 = inst_86460.getBlock(block_num);
var inst_86462 = cljs.core.async.interop.p__GT_c(inst_86461);
var state_86477__$1 = state_86477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86477__$1,(2),inst_86462);
} else {
if((state_val_86478 === (2))){
var inst_86464 = (state_86477[(7)]);
var inst_86464__$1 = (state_86477[(2)]);
var inst_86465 = (inst_86464__$1 instanceof cljs.core.ExceptionInfo);
var inst_86466 = cljs.core.ex_data(inst_86464__$1);
var inst_86467 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86466);
var inst_86468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86467,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86469 = ((inst_86465) && (inst_86468));
var state_86477__$1 = (function (){var statearr_86479 = state_86477;
(statearr_86479[(7)] = inst_86464__$1);

return statearr_86479;
})();
if(cljs.core.truth_(inst_86469)){
var statearr_86480_87380 = state_86477__$1;
(statearr_86480_87380[(1)] = (3));

} else {
var statearr_86481_87382 = state_86477__$1;
(statearr_86481_87382[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86478 === (3))){
var inst_86464 = (state_86477[(7)]);
var inst_86471 = (function(){throw inst_86464})();
var state_86477__$1 = state_86477;
var statearr_86482_87385 = state_86477__$1;
(statearr_86482_87385[(2)] = inst_86471);

(statearr_86482_87385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86478 === (4))){
var inst_86464 = (state_86477[(7)]);
var state_86477__$1 = state_86477;
var statearr_86483_87387 = state_86477__$1;
(statearr_86483_87387[(2)] = inst_86464);

(statearr_86483_87387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86478 === (5))){
var inst_86474 = (state_86477[(2)]);
var inst_86475 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_86474);
var state_86477__$1 = state_86477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86477__$1,inst_86475);
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
var statearr_86484 = [null,null,null,null,null,null,null,null];
(statearr_86484[(0)] = revert$ethereum$_LT_get_block_$_state_machine__52186__auto__);

(statearr_86484[(1)] = (1));

return statearr_86484;
});
var revert$ethereum$_LT_get_block_$_state_machine__52186__auto____1 = (function (state_86477){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86477);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86485){var ex__52189__auto__ = e86485;
var statearr_86486_87391 = state_86477;
(statearr_86486_87391[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86477[(4)]))){
var statearr_86487_87393 = state_86477;
(statearr_86487_87393[(1)] = cljs.core.first((state_86477[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87395 = state_86477;
state_86477 = G__87395;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_block_$_state_machine__52186__auto__ = function(state_86477){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_block_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_block_$_state_machine__52186__auto____1.call(this,state_86477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_block_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_block_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_block_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_block_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_block_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86488 = f__52209__auto__();
(statearr_86488[(6)] = c__52208__auto__);

return statearr_86488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_fetch_blocks = (function revert$ethereum$_LT_fetch_blocks(block_numbers){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86489_SHARP_){
return revert.ethereum._LT_get_block(p1__86489_SHARP_);
}),block_numbers)));
});
revert.ethereum.ts__GT_price = (function revert$ethereum$ts__GT_price(day_prices,ts){
var day_prices_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),day_prices);
var prev_day = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86490_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__86490_SHARP_) <= ts);
}),day_prices_SINGLEQUOTE_));
var next_day = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86491_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__86491_SHARP_) > ts);
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86541){
var state_val_86542 = (state_86541[(1)]);
if((state_val_86542 === (7))){
var inst_86512 = (state_86541[(7)]);
var inst_86519 = (function(){throw inst_86512})();
var state_86541__$1 = state_86541;
var statearr_86543_87405 = state_86541__$1;
(statearr_86543_87405[(2)] = inst_86519);

(statearr_86543_87405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (1))){
var inst_86494 = (state_86541[(8)]);
var inst_86494__$1 = revert.ethereum.make_contract(revert.ethereum.erc20_abi,address);
var inst_86495 = inst_86494__$1.decimals();
var inst_86496 = cljs.core.async.interop.p__GT_c(inst_86495);
var state_86541__$1 = (function (){var statearr_86544 = state_86541;
(statearr_86544[(8)] = inst_86494__$1);

return statearr_86544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86541__$1,(2),inst_86496);
} else {
if((state_val_86542 === (4))){
var inst_86498 = (state_86541[(9)]);
var state_86541__$1 = state_86541;
var statearr_86545_87409 = state_86541__$1;
(statearr_86545_87409[(2)] = inst_86498);

(statearr_86545_87409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (13))){
var inst_86522 = (state_86541[(10)]);
var inst_86508 = (state_86541[(11)]);
var inst_86536 = (state_86541[(2)]);
var inst_86537 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"decimals","decimals",1715096484)];
var inst_86538 = [address,inst_86522,inst_86536,inst_86508];
var inst_86539 = cljs.core.PersistentHashMap.fromArrays(inst_86537,inst_86538);
var state_86541__$1 = state_86541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86541__$1,inst_86539);
} else {
if((state_val_86542 === (6))){
var inst_86512 = (state_86541[(7)]);
var inst_86512__$1 = (state_86541[(2)]);
var inst_86513 = (inst_86512__$1 instanceof cljs.core.ExceptionInfo);
var inst_86514 = cljs.core.ex_data(inst_86512__$1);
var inst_86515 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86514);
var inst_86516 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86515,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86517 = ((inst_86513) && (inst_86516));
var state_86541__$1 = (function (){var statearr_86546 = state_86541;
(statearr_86546[(7)] = inst_86512__$1);

return statearr_86546;
})();
if(cljs.core.truth_(inst_86517)){
var statearr_86547_87422 = state_86541__$1;
(statearr_86547_87422[(1)] = (7));

} else {
var statearr_86548_87423 = state_86541__$1;
(statearr_86548_87423[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (3))){
var inst_86498 = (state_86541[(9)]);
var inst_86505 = (function(){throw inst_86498})();
var state_86541__$1 = state_86541;
var statearr_86549_87424 = state_86541__$1;
(statearr_86549_87424[(2)] = inst_86505);

(statearr_86549_87424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (12))){
var inst_86526 = (state_86541[(12)]);
var state_86541__$1 = state_86541;
var statearr_86550_87426 = state_86541__$1;
(statearr_86550_87426[(2)] = inst_86526);

(statearr_86550_87426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (2))){
var inst_86498 = (state_86541[(9)]);
var inst_86498__$1 = (state_86541[(2)]);
var inst_86499 = (inst_86498__$1 instanceof cljs.core.ExceptionInfo);
var inst_86500 = cljs.core.ex_data(inst_86498__$1);
var inst_86501 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86500);
var inst_86502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86501,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86503 = ((inst_86499) && (inst_86502));
var state_86541__$1 = (function (){var statearr_86551 = state_86541;
(statearr_86551[(9)] = inst_86498__$1);

return statearr_86551;
})();
if(cljs.core.truth_(inst_86503)){
var statearr_86552_87429 = state_86541__$1;
(statearr_86552_87429[(1)] = (3));

} else {
var statearr_86553_87430 = state_86541__$1;
(statearr_86553_87430[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (11))){
var inst_86526 = (state_86541[(12)]);
var inst_86533 = (function(){throw inst_86526})();
var state_86541__$1 = state_86541;
var statearr_86554_87431 = state_86541__$1;
(statearr_86554_87431[(2)] = inst_86533);

(statearr_86554_87431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (9))){
var inst_86494 = (state_86541[(8)]);
var inst_86522 = (state_86541[(2)]);
var inst_86523 = inst_86494.symbol();
var inst_86524 = cljs.core.async.interop.p__GT_c(inst_86523);
var state_86541__$1 = (function (){var statearr_86555 = state_86541;
(statearr_86555[(10)] = inst_86522);

return statearr_86555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86541__$1,(10),inst_86524);
} else {
if((state_val_86542 === (5))){
var inst_86494 = (state_86541[(8)]);
var inst_86508 = (state_86541[(2)]);
var inst_86509 = inst_86494.name();
var inst_86510 = cljs.core.async.interop.p__GT_c(inst_86509);
var state_86541__$1 = (function (){var statearr_86556 = state_86541;
(statearr_86556[(11)] = inst_86508);

return statearr_86556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86541__$1,(6),inst_86510);
} else {
if((state_val_86542 === (10))){
var inst_86526 = (state_86541[(12)]);
var inst_86526__$1 = (state_86541[(2)]);
var inst_86527 = (inst_86526__$1 instanceof cljs.core.ExceptionInfo);
var inst_86528 = cljs.core.ex_data(inst_86526__$1);
var inst_86529 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86528);
var inst_86530 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86529,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86531 = ((inst_86527) && (inst_86530));
var state_86541__$1 = (function (){var statearr_86557 = state_86541;
(statearr_86557[(12)] = inst_86526__$1);

return statearr_86557;
})();
if(cljs.core.truth_(inst_86531)){
var statearr_86558_87437 = state_86541__$1;
(statearr_86558_87437[(1)] = (11));

} else {
var statearr_86559_87438 = state_86541__$1;
(statearr_86559_87438[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86542 === (8))){
var inst_86512 = (state_86541[(7)]);
var state_86541__$1 = state_86541;
var statearr_86560_87439 = state_86541__$1;
(statearr_86560_87439[(2)] = inst_86512);

(statearr_86560_87439[(1)] = (9));


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
var statearr_86561 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86561[(0)] = revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__);

(statearr_86561[(1)] = (1));

return statearr_86561;
});
var revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____1 = (function (state_86541){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86541);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86562){var ex__52189__auto__ = e86562;
var statearr_86563_87443 = state_86541;
(statearr_86563_87443[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86541[(4)]))){
var statearr_86564_87444 = state_86541;
(statearr_86564_87444[(1)] = cljs.core.first((state_86541[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87445 = state_86541;
state_86541 = G__87445;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__ = function(state_86541){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____1.call(this,state_86541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____0;
revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_erc20_info_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86565 = f__52209__auto__();
(statearr_86565[(6)] = c__52208__auto__);

return statearr_86565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_token_decimals = (function revert$ethereum$_LT_token_decimals(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86592){
var state_val_86593 = (state_86592[(1)]);
if((state_val_86593 === (7))){
var inst_86577 = (state_86592[(7)]);
var inst_86584 = (function(){throw inst_86577})();
var state_86592__$1 = state_86592;
var statearr_86594_87467 = state_86592__$1;
(statearr_86594_87467[(2)] = inst_86584);

(statearr_86594_87467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86593 === (1))){
var inst_86566 = revert.ethereum.make_erc20(address);
var state_86592__$1 = (function (){var statearr_86595 = state_86592;
(statearr_86595[(8)] = inst_86566);

return statearr_86595;
})();
var statearr_86596_87469 = state_86592__$1;
(statearr_86596_87469[(2)] = null);

(statearr_86596_87469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86593 === (4))){
var inst_86567 = (state_86592[(2)]);
var inst_86568 = console.log("No decimals method for:",address);
var state_86592__$1 = (function (){var statearr_86597 = state_86592;
(statearr_86597[(9)] = inst_86567);

(statearr_86597[(10)] = inst_86568);

return statearr_86597;
})();
var statearr_86598_87471 = state_86592__$1;
(statearr_86598_87471[(2)] = (18));

(statearr_86598_87471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86593 === (6))){
var inst_86577 = (state_86592[(7)]);
var inst_86577__$1 = (state_86592[(2)]);
var inst_86578 = (inst_86577__$1 instanceof cljs.core.ExceptionInfo);
var inst_86579 = cljs.core.ex_data(inst_86577__$1);
var inst_86580 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86579);
var inst_86581 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86580,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86582 = ((inst_86578) && (inst_86581));
var state_86592__$1 = (function (){var statearr_86599 = state_86592;
(statearr_86599[(7)] = inst_86577__$1);

return statearr_86599;
})();
if(cljs.core.truth_(inst_86582)){
var statearr_86600_87473 = state_86592__$1;
(statearr_86600_87473[(1)] = (7));

} else {
var statearr_86601_87474 = state_86592__$1;
(statearr_86601_87474[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86593 === (3))){
var inst_86590 = (state_86592[(2)]);
var state_86592__$1 = state_86592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86592__$1,inst_86590);
} else {
if((state_val_86593 === (2))){
var inst_86566 = (state_86592[(8)]);
var _ = (function (){var statearr_86603 = state_86592;
(statearr_86603[(4)] = cljs.core.cons((5),(state_86592[(4)])));

return statearr_86603;
})();
var inst_86574 = inst_86566.decimals();
var inst_86575 = cljs.core.async.interop.p__GT_c(inst_86574);
var state_86592__$1 = state_86592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86592__$1,(6),inst_86575);
} else {
if((state_val_86593 === (9))){
var inst_86587 = (state_86592[(2)]);
var _ = (function (){var statearr_86604 = state_86592;
(statearr_86604[(4)] = cljs.core.rest((state_86592[(4)])));

return statearr_86604;
})();
var state_86592__$1 = state_86592;
var statearr_86605_87479 = state_86592__$1;
(statearr_86605_87479[(2)] = inst_86587);

(statearr_86605_87479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86593 === (5))){
var _ = (function (){var statearr_86606 = state_86592;
(statearr_86606[(4)] = cljs.core.rest((state_86592[(4)])));

return statearr_86606;
})();
var state_86592__$1 = state_86592;
var ex86602 = (state_86592__$1[(2)]);
var statearr_86607_87483 = state_86592__$1;
(statearr_86607_87483[(5)] = ex86602);


if((ex86602 instanceof Error)){
var statearr_86608_87484 = state_86592__$1;
(statearr_86608_87484[(1)] = (4));

(statearr_86608_87484[(5)] = null);

} else {
throw ex86602;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86593 === (8))){
var inst_86577 = (state_86592[(7)]);
var state_86592__$1 = state_86592;
var statearr_86609_87486 = state_86592__$1;
(statearr_86609_87486[(2)] = inst_86577);

(statearr_86609_87486[(1)] = (9));


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
var statearr_86610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_86610[(0)] = revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__);

(statearr_86610[(1)] = (1));

return statearr_86610;
});
var revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____1 = (function (state_86592){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86592);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86611){var ex__52189__auto__ = e86611;
var statearr_86612_87487 = state_86592;
(statearr_86612_87487[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86592[(4)]))){
var statearr_86613_87488 = state_86592;
(statearr_86613_87488[(1)] = cljs.core.first((state_86592[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87489 = state_86592;
state_86592 = G__87489;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__ = function(state_86592){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____1.call(this,state_86592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____0;
revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_token_decimals_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86614 = f__52209__auto__();
(statearr_86614[(6)] = c__52208__auto__);

return statearr_86614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum.decode_event_data = (function revert$ethereum$decode_event_data(event){
try{var event_obj = revert.ethereum.detector_iface.parseLog(event);
return event_obj.args;
}catch (e86615){if((e86615 instanceof Error)){
var err = e86615;
return null;
} else {
throw e86615;

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
}catch (e86616){if((e86616 instanceof Error)){
var err = e86616;
return null;
} else {
throw e86616;

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
}catch (e86617){if((e86617 instanceof Error)){
var err = e86617;
return null;
} else {
throw e86617;

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
}catch (e86618){if((e86618 instanceof Error)){
var err = e86618;
return null;
} else {
throw e86618;

}
}});
revert.ethereum._LT_resolve_address = (function revert$ethereum$_LT_resolve_address(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86635){
var state_val_86636 = (state_86635[(1)]);
if((state_val_86636 === (1))){
var inst_86619 = cljs.core.deref(revert.ethereum.provider);
var inst_86620 = inst_86619.resolveName(address);
var inst_86621 = cljs.core.async.interop.p__GT_c(inst_86620);
var state_86635__$1 = state_86635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86635__$1,(2),inst_86621);
} else {
if((state_val_86636 === (2))){
var inst_86623 = (state_86635[(7)]);
var inst_86623__$1 = (state_86635[(2)]);
var inst_86624 = (inst_86623__$1 instanceof cljs.core.ExceptionInfo);
var inst_86625 = cljs.core.ex_data(inst_86623__$1);
var inst_86626 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86625);
var inst_86627 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86626,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86628 = ((inst_86624) && (inst_86627));
var state_86635__$1 = (function (){var statearr_86637 = state_86635;
(statearr_86637[(7)] = inst_86623__$1);

return statearr_86637;
})();
if(cljs.core.truth_(inst_86628)){
var statearr_86638_87503 = state_86635__$1;
(statearr_86638_87503[(1)] = (3));

} else {
var statearr_86639_87504 = state_86635__$1;
(statearr_86639_87504[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86636 === (3))){
var inst_86623 = (state_86635[(7)]);
var inst_86630 = (function(){throw inst_86623})();
var state_86635__$1 = state_86635;
var statearr_86640_87505 = state_86635__$1;
(statearr_86640_87505[(2)] = inst_86630);

(statearr_86640_87505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86636 === (4))){
var inst_86623 = (state_86635[(7)]);
var state_86635__$1 = state_86635;
var statearr_86641_87506 = state_86635__$1;
(statearr_86641_87506[(2)] = inst_86623);

(statearr_86641_87506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86636 === (5))){
var inst_86633 = (state_86635[(2)]);
var state_86635__$1 = state_86635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86635__$1,inst_86633);
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
var statearr_86642 = [null,null,null,null,null,null,null,null];
(statearr_86642[(0)] = revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__);

(statearr_86642[(1)] = (1));

return statearr_86642;
});
var revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____1 = (function (state_86635){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86635);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86643){var ex__52189__auto__ = e86643;
var statearr_86644_87522 = state_86635;
(statearr_86644_87522[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86635[(4)]))){
var statearr_86645_87523 = state_86635;
(statearr_86645_87523[(1)] = cljs.core.first((state_86635[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87524 = state_86635;
state_86635 = G__87524;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__ = function(state_86635){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____1.call(this,state_86635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____0;
revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_resolve_address_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86646 = f__52209__auto__();
(statearr_86646[(6)] = c__52208__auto__);

return statearr_86646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_balance_of = (function revert$ethereum$_LT_balance_of(contract,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86662){
var state_val_86663 = (state_86662[(1)]);
if((state_val_86663 === (1))){
var inst_86647 = contract.balanceOf(user_address);
var inst_86648 = cljs.core.async.interop.p__GT_c(inst_86647);
var state_86662__$1 = state_86662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86662__$1,(2),inst_86648);
} else {
if((state_val_86663 === (2))){
var inst_86650 = (state_86662[(7)]);
var inst_86650__$1 = (state_86662[(2)]);
var inst_86651 = (inst_86650__$1 instanceof cljs.core.ExceptionInfo);
var inst_86652 = cljs.core.ex_data(inst_86650__$1);
var inst_86653 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86652);
var inst_86654 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86653,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86655 = ((inst_86651) && (inst_86654));
var state_86662__$1 = (function (){var statearr_86664 = state_86662;
(statearr_86664[(7)] = inst_86650__$1);

return statearr_86664;
})();
if(cljs.core.truth_(inst_86655)){
var statearr_86665_87527 = state_86662__$1;
(statearr_86665_87527[(1)] = (3));

} else {
var statearr_86666_87529 = state_86662__$1;
(statearr_86666_87529[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86663 === (3))){
var inst_86650 = (state_86662[(7)]);
var inst_86657 = (function(){throw inst_86650})();
var state_86662__$1 = state_86662;
var statearr_86667_87531 = state_86662__$1;
(statearr_86667_87531[(2)] = inst_86657);

(statearr_86667_87531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86663 === (4))){
var inst_86650 = (state_86662[(7)]);
var state_86662__$1 = state_86662;
var statearr_86668_87532 = state_86662__$1;
(statearr_86668_87532[(2)] = inst_86650);

(statearr_86668_87532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86663 === (5))){
var inst_86660 = (state_86662[(2)]);
var state_86662__$1 = state_86662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86662__$1,inst_86660);
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
var statearr_86669 = [null,null,null,null,null,null,null,null];
(statearr_86669[(0)] = revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__);

(statearr_86669[(1)] = (1));

return statearr_86669;
});
var revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____1 = (function (state_86662){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86662);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86670){var ex__52189__auto__ = e86670;
var statearr_86671_87534 = state_86662;
(statearr_86671_87534[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86662[(4)]))){
var statearr_86672_87535 = state_86662;
(statearr_86672_87535[(1)] = cljs.core.first((state_86662[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87537 = state_86662;
state_86662 = G__87537;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__ = function(state_86662){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____1.call(this,state_86662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____0;
revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_balance_of_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_balance_of_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86673 = f__52209__auto__();
(statearr_86673[(6)] = c__52208__auto__);

return statearr_86673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_token_balance = (function revert$ethereum$_LT_user_token_balance(user_address,token_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86713){
var state_val_86714 = (state_86713[(1)]);
if((state_val_86714 === (7))){
var inst_86681 = (state_86713[(7)]);
var inst_86704 = (state_86713[(2)]);
var inst_86705 = revert.ethereum._LT_balance_of(inst_86681,user_address);
var state_86713__$1 = (function (){var statearr_86715 = state_86713;
(statearr_86715[(8)] = inst_86704);

return statearr_86715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86713__$1,(14),inst_86705);
} else {
if((state_val_86714 === (1))){
var state_86713__$1 = state_86713;
var statearr_86716_87540 = state_86713__$1;
(statearr_86716_87540[(2)] = null);

(statearr_86716_87540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (4))){
var inst_86674 = (state_86713[(2)]);
var inst_86675 = (new module$node_modules$bignumber_DOT_js$bignumber("0.0"));
var state_86713__$1 = (function (){var statearr_86717 = state_86713;
(statearr_86717[(9)] = inst_86674);

return statearr_86717;
})();
var statearr_86718_87541 = state_86713__$1;
(statearr_86718_87541[(2)] = inst_86675);

(statearr_86718_87541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (13))){
var inst_86701 = (state_86713[(2)]);
var _ = (function (){var statearr_86719 = state_86713;
(statearr_86719[(4)] = cljs.core.rest((state_86713[(4)])));

return statearr_86719;
})();
var state_86713__$1 = state_86713;
var statearr_86720_87542 = state_86713__$1;
(statearr_86720_87542[(2)] = inst_86701);

(statearr_86720_87542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (6))){
var inst_86681 = (state_86713[(7)]);
var _ = (function (){var statearr_86721 = state_86713;
(statearr_86721[(4)] = cljs.core.cons((9),(state_86713[(4)])));

return statearr_86721;
})();
var inst_86688 = inst_86681.decimals();
var inst_86689 = cljs.core.async.interop.p__GT_c(inst_86688);
var state_86713__$1 = state_86713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86713__$1,(10),inst_86689);
} else {
if((state_val_86714 === (3))){
var inst_86711 = (state_86713[(2)]);
var state_86713__$1 = state_86713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86713__$1,inst_86711);
} else {
if((state_val_86714 === (12))){
var inst_86691 = (state_86713[(10)]);
var state_86713__$1 = state_86713;
var statearr_86722_87543 = state_86713__$1;
(statearr_86722_87543[(2)] = inst_86691);

(statearr_86722_87543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (2))){
var _ = (function (){var statearr_86724 = state_86713;
(statearr_86724[(4)] = cljs.core.cons((5),(state_86713[(4)])));

return statearr_86724;
})();
var inst_86681 = revert.ethereum.make_erc20(token_address);
var state_86713__$1 = (function (){var statearr_86725 = state_86713;
(statearr_86725[(7)] = inst_86681);

return statearr_86725;
})();
var statearr_86726_87544 = state_86713__$1;
(statearr_86726_87544[(2)] = null);

(statearr_86726_87544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (11))){
var inst_86691 = (state_86713[(10)]);
var inst_86698 = (function(){throw inst_86691})();
var state_86713__$1 = state_86713;
var statearr_86728_87545 = state_86713__$1;
(statearr_86728_87545[(2)] = inst_86698);

(statearr_86728_87545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (9))){
var _ = (function (){var statearr_86729 = state_86713;
(statearr_86729[(4)] = cljs.core.rest((state_86713[(4)])));

return statearr_86729;
})();
var state_86713__$1 = state_86713;
var ex86723 = (state_86713__$1[(2)]);
var statearr_86730_87548 = state_86713__$1;
(statearr_86730_87548[(5)] = ex86723);


if((ex86723 instanceof Error)){
var statearr_86731_87549 = state_86713__$1;
(statearr_86731_87549[(1)] = (8));

(statearr_86731_87549[(5)] = null);

} else {
throw ex86723;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (5))){
var _ = (function (){var statearr_86732 = state_86713;
(statearr_86732[(4)] = cljs.core.rest((state_86713[(4)])));

return statearr_86732;
})();
var state_86713__$1 = state_86713;
var ex86727 = (state_86713__$1[(2)]);
var statearr_86733_87564 = state_86713__$1;
(statearr_86733_87564[(5)] = ex86727);


if((ex86727 instanceof Error)){
var statearr_86734_87571 = state_86713__$1;
(statearr_86734_87571[(1)] = (4));

(statearr_86734_87571[(5)] = null);

} else {
throw ex86727;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (14))){
var inst_86704 = (state_86713[(8)]);
var inst_86707 = (state_86713[(2)]);
var inst_86708 = revert.utils.ebn__GT_bn(inst_86707,inst_86704);
var _ = (function (){var statearr_86735 = state_86713;
(statearr_86735[(4)] = cljs.core.rest((state_86713[(4)])));

return statearr_86735;
})();
var state_86713__$1 = state_86713;
var statearr_86736_87575 = state_86713__$1;
(statearr_86736_87575[(2)] = inst_86708);

(statearr_86736_87575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (10))){
var inst_86691 = (state_86713[(10)]);
var inst_86691__$1 = (state_86713[(2)]);
var inst_86692 = (inst_86691__$1 instanceof cljs.core.ExceptionInfo);
var inst_86693 = cljs.core.ex_data(inst_86691__$1);
var inst_86694 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86693);
var inst_86695 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86694,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86696 = ((inst_86692) && (inst_86695));
var state_86713__$1 = (function (){var statearr_86737 = state_86713;
(statearr_86737[(10)] = inst_86691__$1);

return statearr_86737;
})();
if(cljs.core.truth_(inst_86696)){
var statearr_86738_87576 = state_86713__$1;
(statearr_86738_87576[(1)] = (11));

} else {
var statearr_86739_87577 = state_86713__$1;
(statearr_86739_87577[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86714 === (8))){
var inst_86682 = (state_86713[(2)]);
var state_86713__$1 = (function (){var statearr_86740 = state_86713;
(statearr_86740[(11)] = inst_86682);

return statearr_86740;
})();
var statearr_86741_87578 = state_86713__$1;
(statearr_86741_87578[(2)] = (18));

(statearr_86741_87578[(1)] = (7));


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
var statearr_86742 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86742[(0)] = revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__);

(statearr_86742[(1)] = (1));

return statearr_86742;
});
var revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____1 = (function (state_86713){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86713);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86743){var ex__52189__auto__ = e86743;
var statearr_86744_87580 = state_86713;
(statearr_86744_87580[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86713[(4)]))){
var statearr_86745_87581 = state_86713;
(statearr_86745_87581[(1)] = cljs.core.first((state_86713[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87582 = state_86713;
state_86713 = G__87582;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__ = function(state_86713){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____1.call(this,state_86713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86746 = f__52209__auto__();
(statearr_86746[(6)] = c__52208__auto__);

return statearr_86746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_total_supply = (function revert$ethereum$_LT_total_supply(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86762){
var state_val_86763 = (state_86762[(1)]);
if((state_val_86763 === (1))){
var inst_86747 = contract.totalSupply();
var inst_86748 = cljs.core.async.interop.p__GT_c(inst_86747);
var state_86762__$1 = state_86762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86762__$1,(2),inst_86748);
} else {
if((state_val_86763 === (2))){
var inst_86750 = (state_86762[(7)]);
var inst_86750__$1 = (state_86762[(2)]);
var inst_86751 = (inst_86750__$1 instanceof cljs.core.ExceptionInfo);
var inst_86752 = cljs.core.ex_data(inst_86750__$1);
var inst_86753 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86752);
var inst_86754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86753,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86755 = ((inst_86751) && (inst_86754));
var state_86762__$1 = (function (){var statearr_86764 = state_86762;
(statearr_86764[(7)] = inst_86750__$1);

return statearr_86764;
})();
if(cljs.core.truth_(inst_86755)){
var statearr_86765_87585 = state_86762__$1;
(statearr_86765_87585[(1)] = (3));

} else {
var statearr_86766_87587 = state_86762__$1;
(statearr_86766_87587[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86763 === (3))){
var inst_86750 = (state_86762[(7)]);
var inst_86757 = (function(){throw inst_86750})();
var state_86762__$1 = state_86762;
var statearr_86767_87589 = state_86762__$1;
(statearr_86767_87589[(2)] = inst_86757);

(statearr_86767_87589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86763 === (4))){
var inst_86750 = (state_86762[(7)]);
var state_86762__$1 = state_86762;
var statearr_86768_87591 = state_86762__$1;
(statearr_86768_87591[(2)] = inst_86750);

(statearr_86768_87591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86763 === (5))){
var inst_86760 = (state_86762[(2)]);
var state_86762__$1 = state_86762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86762__$1,inst_86760);
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
var statearr_86769 = [null,null,null,null,null,null,null,null];
(statearr_86769[(0)] = revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__);

(statearr_86769[(1)] = (1));

return statearr_86769;
});
var revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____1 = (function (state_86762){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86762);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86770){var ex__52189__auto__ = e86770;
var statearr_86771_87593 = state_86762;
(statearr_86771_87593[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86762[(4)]))){
var statearr_86772_87594 = state_86762;
(statearr_86772_87594[(1)] = cljs.core.first((state_86762[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87595 = state_86762;
state_86762 = G__87595;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__ = function(state_86762){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____1.call(this,state_86762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____0;
revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_total_supply_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_total_supply_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86773 = f__52209__auto__();
(statearr_86773[(6)] = c__52208__auto__);

return statearr_86773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_token_total_supply = (function revert$ethereum$_LT_token_total_supply(token_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86794){
var state_val_86795 = (state_86794[(1)]);
if((state_val_86795 === (1))){
var inst_86774 = (state_86794[(7)]);
var inst_86774__$1 = revert.ethereum.make_erc20(token_address);
var inst_86775 = inst_86774__$1.decimals();
var inst_86776 = cljs.core.async.interop.p__GT_c(inst_86775);
var state_86794__$1 = (function (){var statearr_86796 = state_86794;
(statearr_86796[(7)] = inst_86774__$1);

return statearr_86796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86794__$1,(2),inst_86776);
} else {
if((state_val_86795 === (2))){
var inst_86778 = (state_86794[(8)]);
var inst_86778__$1 = (state_86794[(2)]);
var inst_86779 = (inst_86778__$1 instanceof cljs.core.ExceptionInfo);
var inst_86780 = cljs.core.ex_data(inst_86778__$1);
var inst_86781 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86780);
var inst_86782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86781,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86783 = ((inst_86779) && (inst_86782));
var state_86794__$1 = (function (){var statearr_86797 = state_86794;
(statearr_86797[(8)] = inst_86778__$1);

return statearr_86797;
})();
if(cljs.core.truth_(inst_86783)){
var statearr_86798_87607 = state_86794__$1;
(statearr_86798_87607[(1)] = (3));

} else {
var statearr_86799_87609 = state_86794__$1;
(statearr_86799_87609[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86795 === (3))){
var inst_86778 = (state_86794[(8)]);
var inst_86785 = (function(){throw inst_86778})();
var state_86794__$1 = state_86794;
var statearr_86800_87611 = state_86794__$1;
(statearr_86800_87611[(2)] = inst_86785);

(statearr_86800_87611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86795 === (4))){
var inst_86778 = (state_86794[(8)]);
var state_86794__$1 = state_86794;
var statearr_86801_87614 = state_86794__$1;
(statearr_86801_87614[(2)] = inst_86778);

(statearr_86801_87614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86795 === (5))){
var inst_86774 = (state_86794[(7)]);
var inst_86788 = (state_86794[(2)]);
var inst_86789 = revert.ethereum._LT_total_supply(inst_86774);
var state_86794__$1 = (function (){var statearr_86802 = state_86794;
(statearr_86802[(9)] = inst_86788);

return statearr_86802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86794__$1,(6),inst_86789);
} else {
if((state_val_86795 === (6))){
var inst_86788 = (state_86794[(9)]);
var inst_86791 = (state_86794[(2)]);
var inst_86792 = revert.utils.ebn__GT_bn(inst_86791,inst_86788);
var state_86794__$1 = state_86794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86794__$1,inst_86792);
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
var statearr_86803 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86803[(0)] = revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__);

(statearr_86803[(1)] = (1));

return statearr_86803;
});
var revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____1 = (function (state_86794){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86794);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86804){var ex__52189__auto__ = e86804;
var statearr_86805_87620 = state_86794;
(statearr_86805_87620[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86794[(4)]))){
var statearr_86806_87621 = state_86794;
(statearr_86806_87621[(1)] = cljs.core.first((state_86794[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87622 = state_86794;
state_86794 = G__87622;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__ = function(state_86794){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____1.call(this,state_86794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____0;
revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_token_total_supply_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86807 = f__52209__auto__();
(statearr_86807[(6)] = c__52208__auto__);

return statearr_86807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_balance = (function revert$ethereum$_LT_balance(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86823){
var state_val_86824 = (state_86823[(1)]);
if((state_val_86824 === (1))){
var inst_86808 = contract.balance();
var inst_86809 = cljs.core.async.interop.p__GT_c(inst_86808);
var state_86823__$1 = state_86823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86823__$1,(2),inst_86809);
} else {
if((state_val_86824 === (2))){
var inst_86811 = (state_86823[(7)]);
var inst_86811__$1 = (state_86823[(2)]);
var inst_86812 = (inst_86811__$1 instanceof cljs.core.ExceptionInfo);
var inst_86813 = cljs.core.ex_data(inst_86811__$1);
var inst_86814 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86813);
var inst_86815 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86814,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86816 = ((inst_86812) && (inst_86815));
var state_86823__$1 = (function (){var statearr_86825 = state_86823;
(statearr_86825[(7)] = inst_86811__$1);

return statearr_86825;
})();
if(cljs.core.truth_(inst_86816)){
var statearr_86826_87623 = state_86823__$1;
(statearr_86826_87623[(1)] = (3));

} else {
var statearr_86827_87624 = state_86823__$1;
(statearr_86827_87624[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86824 === (3))){
var inst_86811 = (state_86823[(7)]);
var inst_86818 = (function(){throw inst_86811})();
var state_86823__$1 = state_86823;
var statearr_86828_87625 = state_86823__$1;
(statearr_86828_87625[(2)] = inst_86818);

(statearr_86828_87625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86824 === (4))){
var inst_86811 = (state_86823[(7)]);
var state_86823__$1 = state_86823;
var statearr_86829_87626 = state_86823__$1;
(statearr_86829_87626[(2)] = inst_86811);

(statearr_86829_87626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86824 === (5))){
var inst_86821 = (state_86823[(2)]);
var state_86823__$1 = state_86823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86823__$1,inst_86821);
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
var statearr_86830 = [null,null,null,null,null,null,null,null];
(statearr_86830[(0)] = revert$ethereum$_LT_balance_$_state_machine__52186__auto__);

(statearr_86830[(1)] = (1));

return statearr_86830;
});
var revert$ethereum$_LT_balance_$_state_machine__52186__auto____1 = (function (state_86823){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86823);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86831){var ex__52189__auto__ = e86831;
var statearr_86832_87629 = state_86823;
(statearr_86832_87629[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86823[(4)]))){
var statearr_86833_87630 = state_86823;
(statearr_86833_87630[(1)] = cljs.core.first((state_86823[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87631 = state_86823;
state_86823 = G__87631;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_balance_$_state_machine__52186__auto__ = function(state_86823){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_balance_$_state_machine__52186__auto____1.call(this,state_86823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_balance_$_state_machine__52186__auto____0;
revert$ethereum$_LT_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_balance_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86834 = f__52209__auto__();
(statearr_86834[(6)] = c__52208__auto__);

return statearr_86834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_pickle_jar_balance = (function revert$ethereum$_LT_pickle_jar_balance(token_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86856){
var state_val_86857 = (state_86856[(1)]);
if((state_val_86857 === (1))){
var inst_86836 = (state_86856[(7)]);
var inst_86835 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(revert.ethereum.erc20_abi,revert.ethereum.pickle_jar_abi);
var inst_86836__$1 = revert.ethereum.make_contract(inst_86835,token_address);
var inst_86837 = inst_86836__$1.decimals();
var inst_86838 = cljs.core.async.interop.p__GT_c(inst_86837);
var state_86856__$1 = (function (){var statearr_86858 = state_86856;
(statearr_86858[(7)] = inst_86836__$1);

return statearr_86858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86856__$1,(2),inst_86838);
} else {
if((state_val_86857 === (2))){
var inst_86840 = (state_86856[(8)]);
var inst_86840__$1 = (state_86856[(2)]);
var inst_86841 = (inst_86840__$1 instanceof cljs.core.ExceptionInfo);
var inst_86842 = cljs.core.ex_data(inst_86840__$1);
var inst_86843 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86842);
var inst_86844 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86843,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86845 = ((inst_86841) && (inst_86844));
var state_86856__$1 = (function (){var statearr_86859 = state_86856;
(statearr_86859[(8)] = inst_86840__$1);

return statearr_86859;
})();
if(cljs.core.truth_(inst_86845)){
var statearr_86860_87655 = state_86856__$1;
(statearr_86860_87655[(1)] = (3));

} else {
var statearr_86861_87656 = state_86856__$1;
(statearr_86861_87656[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86857 === (3))){
var inst_86840 = (state_86856[(8)]);
var inst_86847 = (function(){throw inst_86840})();
var state_86856__$1 = state_86856;
var statearr_86862_87658 = state_86856__$1;
(statearr_86862_87658[(2)] = inst_86847);

(statearr_86862_87658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86857 === (4))){
var inst_86840 = (state_86856[(8)]);
var state_86856__$1 = state_86856;
var statearr_86863_87659 = state_86856__$1;
(statearr_86863_87659[(2)] = inst_86840);

(statearr_86863_87659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86857 === (5))){
var inst_86836 = (state_86856[(7)]);
var inst_86850 = (state_86856[(2)]);
var inst_86851 = revert.ethereum._LT_balance(inst_86836);
var state_86856__$1 = (function (){var statearr_86864 = state_86856;
(statearr_86864[(9)] = inst_86850);

return statearr_86864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86856__$1,(6),inst_86851);
} else {
if((state_val_86857 === (6))){
var inst_86850 = (state_86856[(9)]);
var inst_86853 = (state_86856[(2)]);
var inst_86854 = revert.utils.ebn__GT_bn(inst_86853,inst_86850);
var state_86856__$1 = state_86856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86856__$1,inst_86854);
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
var statearr_86865 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86865[(0)] = revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__);

(statearr_86865[(1)] = (1));

return statearr_86865;
});
var revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____1 = (function (state_86856){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86856);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86866){var ex__52189__auto__ = e86866;
var statearr_86867_87661 = state_86856;
(statearr_86867_87661[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86856[(4)]))){
var statearr_86868_87662 = state_86856;
(statearr_86868_87662[(1)] = cljs.core.first((state_86856[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87664 = state_86856;
state_86856 = G__87664;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__ = function(state_86856){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____1.call(this,state_86856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____0;
revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_pickle_jar_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86869 = f__52209__auto__();
(statearr_86869[(6)] = c__52208__auto__);

return statearr_86869;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86888){
var state_val_86889 = (state_86888[(1)]);
if((state_val_86889 === (1))){
var inst_86871 = provider.getLogs(user_filter);
var inst_86872 = cljs.core.async.interop.p__GT_c(inst_86871);
var state_86888__$1 = state_86888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86888__$1,(2),inst_86872);
} else {
if((state_val_86889 === (2))){
var inst_86874 = (state_86888[(7)]);
var inst_86874__$1 = (state_86888[(2)]);
var inst_86875 = (inst_86874__$1 instanceof cljs.core.ExceptionInfo);
var inst_86876 = cljs.core.ex_data(inst_86874__$1);
var inst_86877 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86876);
var inst_86878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86877,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86879 = ((inst_86875) && (inst_86878));
var state_86888__$1 = (function (){var statearr_86890 = state_86888;
(statearr_86890[(7)] = inst_86874__$1);

return statearr_86890;
})();
if(cljs.core.truth_(inst_86879)){
var statearr_86891_87680 = state_86888__$1;
(statearr_86891_87680[(1)] = (3));

} else {
var statearr_86892_87681 = state_86888__$1;
(statearr_86892_87681[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86889 === (3))){
var inst_86874 = (state_86888[(7)]);
var inst_86881 = (function(){throw inst_86874})();
var state_86888__$1 = state_86888;
var statearr_86893_87682 = state_86888__$1;
(statearr_86893_87682[(2)] = inst_86881);

(statearr_86893_87682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86889 === (4))){
var inst_86874 = (state_86888[(7)]);
var state_86888__$1 = state_86888;
var statearr_86894_87684 = state_86888__$1;
(statearr_86894_87684[(2)] = inst_86874);

(statearr_86894_87684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86889 === (5))){
var inst_86884 = (state_86888[(2)]);
var inst_86885 = (function (){var filtered_txs = inst_86884;
return (function (p1__86870_SHARP_){
return revert.ethereum.make_token_deposit(p1__86870_SHARP_);
});
})();
var inst_86886 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_86885,inst_86884);
var state_86888__$1 = state_86888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86888__$1,inst_86886);
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
var statearr_86895 = [null,null,null,null,null,null,null,null];
(statearr_86895[(0)] = revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__);

(statearr_86895[(1)] = (1));

return statearr_86895;
});
var revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____1 = (function (state_86888){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86888);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86896){var ex__52189__auto__ = e86896;
var statearr_86897_87689 = state_86888;
(statearr_86897_87689[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86888[(4)]))){
var statearr_86898_87690 = state_86888;
(statearr_86898_87690[(1)] = cljs.core.first((state_86888[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87691 = state_86888;
state_86888 = G__87691;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__ = function(state_86888){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____1.call(this,state_86888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_deposits_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86899 = f__52209__auto__();
(statearr_86899[(6)] = c__52208__auto__);

return statearr_86899;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86918){
var state_val_86919 = (state_86918[(1)]);
if((state_val_86919 === (1))){
var inst_86901 = provider.getLogs(user_filter);
var inst_86902 = cljs.core.async.interop.p__GT_c(inst_86901);
var state_86918__$1 = state_86918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86918__$1,(2),inst_86902);
} else {
if((state_val_86919 === (2))){
var inst_86904 = (state_86918[(7)]);
var inst_86904__$1 = (state_86918[(2)]);
var inst_86905 = (inst_86904__$1 instanceof cljs.core.ExceptionInfo);
var inst_86906 = cljs.core.ex_data(inst_86904__$1);
var inst_86907 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86906);
var inst_86908 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86907,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86909 = ((inst_86905) && (inst_86908));
var state_86918__$1 = (function (){var statearr_86920 = state_86918;
(statearr_86920[(7)] = inst_86904__$1);

return statearr_86920;
})();
if(cljs.core.truth_(inst_86909)){
var statearr_86921_87716 = state_86918__$1;
(statearr_86921_87716[(1)] = (3));

} else {
var statearr_86922_87717 = state_86918__$1;
(statearr_86922_87717[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86919 === (3))){
var inst_86904 = (state_86918[(7)]);
var inst_86911 = (function(){throw inst_86904})();
var state_86918__$1 = state_86918;
var statearr_86923_87719 = state_86918__$1;
(statearr_86923_87719[(2)] = inst_86911);

(statearr_86923_87719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86919 === (4))){
var inst_86904 = (state_86918[(7)]);
var state_86918__$1 = state_86918;
var statearr_86924_87720 = state_86918__$1;
(statearr_86924_87720[(2)] = inst_86904);

(statearr_86924_87720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86919 === (5))){
var inst_86914 = (state_86918[(2)]);
var inst_86915 = (function (){var filtered_txs = inst_86914;
return (function (p1__86900_SHARP_){
return revert.ethereum.make_token_deposit(p1__86900_SHARP_);
});
})();
var inst_86916 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_86915,inst_86914);
var state_86918__$1 = state_86918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86918__$1,inst_86916);
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
var statearr_86925 = [null,null,null,null,null,null,null,null];
(statearr_86925[(0)] = revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__);

(statearr_86925[(1)] = (1));

return statearr_86925;
});
var revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____1 = (function (state_86918){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86918);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86926){var ex__52189__auto__ = e86926;
var statearr_86927_87723 = state_86918;
(statearr_86927_87723[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86918[(4)]))){
var statearr_86928_87724 = state_86918;
(statearr_86928_87724[(1)] = cljs.core.first((state_86918[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87726 = state_86918;
state_86918 = G__87726;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__ = function(state_86918){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____1.call(this,state_86918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_withdrawals_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86929 = f__52209__auto__();
(statearr_86929[(6)] = c__52208__auto__);

return statearr_86929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_user_token_transfers = (function revert$ethereum$_LT_user_token_transfers(var_args){
var G__86932 = arguments.length;
switch (G__86932) {
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86935){
var state_val_86936 = (state_86935[(1)]);
if((state_val_86936 === (1))){
var inst_86933 = cljs.core.PersistentVector.EMPTY;
var state_86935__$1 = state_86935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86935__$1,inst_86933);
} else {
return null;
}
});
return (function() {
var revert$ethereum$state_machine__52186__auto__ = null;
var revert$ethereum$state_machine__52186__auto____0 = (function (){
var statearr_86937 = [null,null,null,null,null,null,null];
(statearr_86937[(0)] = revert$ethereum$state_machine__52186__auto__);

(statearr_86937[(1)] = (1));

return statearr_86937;
});
var revert$ethereum$state_machine__52186__auto____1 = (function (state_86935){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86935);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86938){var ex__52189__auto__ = e86938;
var statearr_86939_87732 = state_86935;
(statearr_86939_87732[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86935[(4)]))){
var statearr_86940_87733 = state_86935;
(statearr_86940_87733[(1)] = cljs.core.first((state_86935[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87734 = state_86935;
state_86935 = G__87734;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$state_machine__52186__auto__ = function(state_86935){
switch(arguments.length){
case 0:
return revert$ethereum$state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$state_machine__52186__auto____1.call(this,state_86935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$state_machine__52186__auto____0;
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$state_machine__52186__auto____1;
return revert$ethereum$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86941 = f__52209__auto__();
(statearr_86941[(6)] = c__52208__auto__);

return statearr_86941;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_86973){
var state_val_86974 = (state_86973[(1)]);
if((state_val_86974 === (7))){
var inst_86953 = (state_86973[(7)]);
var inst_86960 = (function(){throw inst_86953})();
var state_86973__$1 = state_86973;
var statearr_86975_87736 = state_86973__$1;
(statearr_86975_87736[(2)] = inst_86960);

(statearr_86975_87736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86974 === (1))){
var state_86973__$1 = state_86973;
var statearr_86976_87737 = state_86973__$1;
(statearr_86976_87737[(2)] = null);

(statearr_86976_87737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86974 === (4))){
var inst_86942 = (state_86973[(2)]);
var inst_86943 = console.log("err <user-token-transfers:",token_address,out_address,in_address);
var inst_86944 = cljs.core.PersistentVector.EMPTY;
var state_86973__$1 = (function (){var statearr_86977 = state_86973;
(statearr_86977[(8)] = inst_86943);

(statearr_86977[(9)] = inst_86942);

return statearr_86977;
})();
var statearr_86978_87738 = state_86973__$1;
(statearr_86978_87738[(2)] = inst_86944);

(statearr_86978_87738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86974 === (6))){
var inst_86953 = (state_86973[(7)]);
var inst_86953__$1 = (state_86973[(2)]);
var inst_86954 = (inst_86953__$1 instanceof cljs.core.ExceptionInfo);
var inst_86955 = cljs.core.ex_data(inst_86953__$1);
var inst_86956 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_86955);
var inst_86957 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86956,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_86958 = ((inst_86954) && (inst_86957));
var state_86973__$1 = (function (){var statearr_86979 = state_86973;
(statearr_86979[(7)] = inst_86953__$1);

return statearr_86979;
})();
if(cljs.core.truth_(inst_86958)){
var statearr_86980_87741 = state_86973__$1;
(statearr_86980_87741[(1)] = (7));

} else {
var statearr_86981_87742 = state_86973__$1;
(statearr_86981_87742[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86974 === (3))){
var inst_86971 = (state_86973[(2)]);
var state_86973__$1 = state_86973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86973__$1,inst_86971);
} else {
if((state_val_86974 === (2))){
var ___$2 = (function (){var statearr_86983 = state_86973;
(statearr_86983[(4)] = cljs.core.cons((5),(state_86973[(4)])));

return statearr_86983;
})();
var inst_86950 = provider.getLogs(user_filter);
var inst_86951 = cljs.core.async.interop.p__GT_c(inst_86950);
var state_86973__$1 = state_86973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86973__$1,(6),inst_86951);
} else {
if((state_val_86974 === (9))){
var inst_86963 = (state_86973[(2)]);
var inst_86964 = revert.ethereum._LT_token_decimals(token_address);
var state_86973__$1 = (function (){var statearr_86984 = state_86973;
(statearr_86984[(10)] = inst_86963);

return statearr_86984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86973__$1,(10),inst_86964);
} else {
if((state_val_86974 === (5))){
var ___$2 = (function (){var statearr_86985 = state_86973;
(statearr_86985[(4)] = cljs.core.rest((state_86973[(4)])));

return statearr_86985;
})();
var state_86973__$1 = state_86973;
var ex86982 = (state_86973__$1[(2)]);
var statearr_86986_87745 = state_86973__$1;
(statearr_86986_87745[(5)] = ex86982);


if((ex86982 instanceof Error)){
var statearr_86987_87746 = state_86973__$1;
(statearr_86987_87746[(1)] = (4));

(statearr_86987_87746[(5)] = null);

} else {
throw ex86982;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86974 === (10))){
var inst_86963 = (state_86973[(10)]);
var inst_86966 = (state_86973[(2)]);
var inst_86967 = (function (){var filtered_txs = inst_86963;
var decimals = inst_86966;
return (function (p1__86930_SHARP_){
return revert.ethereum.make_token_tx(p1__86930_SHARP_,decimals);
});
})();
var inst_86968 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_86967,inst_86963);
var ___$2 = (function (){var statearr_86988 = state_86973;
(statearr_86988[(4)] = cljs.core.rest((state_86973[(4)])));

return statearr_86988;
})();
var state_86973__$1 = state_86973;
var statearr_86989_87749 = state_86973__$1;
(statearr_86989_87749[(2)] = inst_86968);

(statearr_86989_87749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86974 === (8))){
var inst_86953 = (state_86973[(7)]);
var state_86973__$1 = state_86973;
var statearr_86990_87754 = state_86973__$1;
(statearr_86990_87754[(2)] = inst_86953);

(statearr_86990_87754[(1)] = (9));


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
var statearr_86991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_86991[(0)] = revert$ethereum$state_machine__52186__auto__);

(statearr_86991[(1)] = (1));

return statearr_86991;
});
var revert$ethereum$state_machine__52186__auto____1 = (function (state_86973){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_86973);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e86992){var ex__52189__auto__ = e86992;
var statearr_86993_87769 = state_86973;
(statearr_86993_87769[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_86973[(4)]))){
var statearr_86994_87770 = state_86973;
(statearr_86994_87770[(1)] = cljs.core.first((state_86973[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87771 = state_86973;
state_86973 = G__87771;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$state_machine__52186__auto__ = function(state_86973){
switch(arguments.length){
case 0:
return revert$ethereum$state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$state_machine__52186__auto____1.call(this,state_86973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$state_machine__52186__auto____0;
revert$ethereum$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$state_machine__52186__auto____1;
return revert$ethereum$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_86995 = f__52209__auto__();
(statearr_86995[(6)] = c__52208__auto__);

return statearr_86995;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87012){
var state_val_87013 = (state_87012[(1)]);
if((state_val_87013 === (1))){
var inst_86996 = provider.getLogs(user_filter);
var inst_86997 = cljs.core.async.interop.p__GT_c(inst_86996);
var state_87012__$1 = state_87012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87012__$1,(2),inst_86997);
} else {
if((state_val_87013 === (2))){
var inst_86999 = (state_87012[(7)]);
var inst_86999__$1 = (state_87012[(2)]);
var inst_87000 = (inst_86999__$1 instanceof cljs.core.ExceptionInfo);
var inst_87001 = cljs.core.ex_data(inst_86999__$1);
var inst_87002 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87001);
var inst_87003 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87002,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87004 = ((inst_87000) && (inst_87003));
var state_87012__$1 = (function (){var statearr_87014 = state_87012;
(statearr_87014[(7)] = inst_86999__$1);

return statearr_87014;
})();
if(cljs.core.truth_(inst_87004)){
var statearr_87015_87778 = state_87012__$1;
(statearr_87015_87778[(1)] = (3));

} else {
var statearr_87016_87779 = state_87012__$1;
(statearr_87016_87779[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87013 === (3))){
var inst_86999 = (state_87012[(7)]);
var inst_87006 = (function(){throw inst_86999})();
var state_87012__$1 = state_87012;
var statearr_87017_87782 = state_87012__$1;
(statearr_87017_87782[(2)] = inst_87006);

(statearr_87017_87782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87013 === (4))){
var inst_86999 = (state_87012[(7)]);
var state_87012__$1 = state_87012;
var statearr_87018_87784 = state_87012__$1;
(statearr_87018_87784[(2)] = inst_86999);

(statearr_87018_87784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87013 === (5))){
var inst_87009 = (state_87012[(2)]);
var inst_87010 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_87009);
var state_87012__$1 = state_87012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87012__$1,inst_87010);
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
var statearr_87019 = [null,null,null,null,null,null,null,null];
(statearr_87019[(0)] = revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__);

(statearr_87019[(1)] = (1));

return statearr_87019;
});
var revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____1 = (function (state_87012){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87012);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87020){var ex__52189__auto__ = e87020;
var statearr_87021_87788 = state_87012;
(statearr_87021_87788[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87012[(4)]))){
var statearr_87022_87789 = state_87012;
(statearr_87022_87789[(1)] = cljs.core.first((state_87012[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87790 = state_87012;
state_87012 = G__87790;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__ = function(state_87012){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____1.call(this,state_87012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_lp_mint_transfers_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87023 = f__52209__auto__();
(statearr_87023[(6)] = c__52208__auto__);

return statearr_87023;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87040){
var state_val_87041 = (state_87040[(1)]);
if((state_val_87041 === (1))){
var inst_87024 = provider.getLogs(user_filter);
var inst_87025 = cljs.core.async.interop.p__GT_c(inst_87024);
var state_87040__$1 = state_87040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87040__$1,(2),inst_87025);
} else {
if((state_val_87041 === (2))){
var inst_87027 = (state_87040[(7)]);
var inst_87027__$1 = (state_87040[(2)]);
var inst_87028 = (inst_87027__$1 instanceof cljs.core.ExceptionInfo);
var inst_87029 = cljs.core.ex_data(inst_87027__$1);
var inst_87030 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87029);
var inst_87031 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87030,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87032 = ((inst_87028) && (inst_87031));
var state_87040__$1 = (function (){var statearr_87042 = state_87040;
(statearr_87042[(7)] = inst_87027__$1);

return statearr_87042;
})();
if(cljs.core.truth_(inst_87032)){
var statearr_87043_87799 = state_87040__$1;
(statearr_87043_87799[(1)] = (3));

} else {
var statearr_87044_87800 = state_87040__$1;
(statearr_87044_87800[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (3))){
var inst_87027 = (state_87040[(7)]);
var inst_87034 = (function(){throw inst_87027})();
var state_87040__$1 = state_87040;
var statearr_87045_87802 = state_87040__$1;
(statearr_87045_87802[(2)] = inst_87034);

(statearr_87045_87802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (4))){
var inst_87027 = (state_87040[(7)]);
var state_87040__$1 = state_87040;
var statearr_87046_87803 = state_87040__$1;
(statearr_87046_87803[(2)] = inst_87027);

(statearr_87046_87803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (5))){
var inst_87037 = (state_87040[(2)]);
var inst_87038 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_87037);
var state_87040__$1 = state_87040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87040__$1,inst_87038);
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
var statearr_87047 = [null,null,null,null,null,null,null,null];
(statearr_87047[(0)] = revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__);

(statearr_87047[(1)] = (1));

return statearr_87047;
});
var revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____1 = (function (state_87040){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87040);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87048){var ex__52189__auto__ = e87048;
var statearr_87049_87817 = state_87040;
(statearr_87049_87817[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87040[(4)]))){
var statearr_87050_87825 = state_87040;
(statearr_87050_87825[(1)] = cljs.core.first((state_87040[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87829 = state_87040;
state_87040 = G__87829;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__ = function(state_87040){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____1.call(this,state_87040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_lp_burn_transfers_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87051 = f__52209__auto__();
(statearr_87051[(6)] = c__52208__auto__);

return statearr_87051;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87068){
var state_val_87069 = (state_87068[(1)]);
if((state_val_87069 === (1))){
var inst_87052 = provider.getLogs(user_filter);
var inst_87053 = cljs.core.async.interop.p__GT_c(inst_87052);
var state_87068__$1 = state_87068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87068__$1,(2),inst_87053);
} else {
if((state_val_87069 === (2))){
var inst_87055 = (state_87068[(7)]);
var inst_87055__$1 = (state_87068[(2)]);
var inst_87056 = (inst_87055__$1 instanceof cljs.core.ExceptionInfo);
var inst_87057 = cljs.core.ex_data(inst_87055__$1);
var inst_87058 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87057);
var inst_87059 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87058,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87060 = ((inst_87056) && (inst_87059));
var state_87068__$1 = (function (){var statearr_87070 = state_87068;
(statearr_87070[(7)] = inst_87055__$1);

return statearr_87070;
})();
if(cljs.core.truth_(inst_87060)){
var statearr_87071_87834 = state_87068__$1;
(statearr_87071_87834[(1)] = (3));

} else {
var statearr_87072_87836 = state_87068__$1;
(statearr_87072_87836[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87069 === (3))){
var inst_87055 = (state_87068[(7)]);
var inst_87062 = (function(){throw inst_87055})();
var state_87068__$1 = state_87068;
var statearr_87073_87837 = state_87068__$1;
(statearr_87073_87837[(2)] = inst_87062);

(statearr_87073_87837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87069 === (4))){
var inst_87055 = (state_87068[(7)]);
var state_87068__$1 = state_87068;
var statearr_87074_87839 = state_87068__$1;
(statearr_87074_87839[(2)] = inst_87055);

(statearr_87074_87839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87069 === (5))){
var inst_87065 = (state_87068[(2)]);
var inst_87066 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,inst_87065);
var state_87068__$1 = state_87068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87068__$1,inst_87066);
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
var statearr_87075 = [null,null,null,null,null,null,null,null];
(statearr_87075[(0)] = revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__);

(statearr_87075[(1)] = (1));

return statearr_87075;
});
var revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____1 = (function (state_87068){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87068);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87076){var ex__52189__auto__ = e87076;
var statearr_87077_87843 = state_87068;
(statearr_87077_87843[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87068[(4)]))){
var statearr_87078_87844 = state_87068;
(statearr_87078_87844[(1)] = cljs.core.first((state_87068[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87846 = state_87068;
state_87068 = G__87846;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__ = function(state_87068){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____1.call(this,state_87068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_lp_mint_deposits_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87079 = f__52209__auto__();
(statearr_87079[(6)] = c__52208__auto__);

return statearr_87079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_tx_receipt = (function revert$ethereum$_LT_get_tx_receipt(txhash){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87096){
var state_val_87097 = (state_87096[(1)]);
if((state_val_87097 === (1))){
var inst_87080 = cljs.core.deref(revert.ethereum.provider);
var inst_87081 = inst_87080.getTransactionReceipt(txhash);
var inst_87082 = cljs.core.async.interop.p__GT_c(inst_87081);
var state_87096__$1 = state_87096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87096__$1,(2),inst_87082);
} else {
if((state_val_87097 === (2))){
var inst_87084 = (state_87096[(7)]);
var inst_87084__$1 = (state_87096[(2)]);
var inst_87085 = (inst_87084__$1 instanceof cljs.core.ExceptionInfo);
var inst_87086 = cljs.core.ex_data(inst_87084__$1);
var inst_87087 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87086);
var inst_87088 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87087,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87089 = ((inst_87085) && (inst_87088));
var state_87096__$1 = (function (){var statearr_87098 = state_87096;
(statearr_87098[(7)] = inst_87084__$1);

return statearr_87098;
})();
if(cljs.core.truth_(inst_87089)){
var statearr_87099_87850 = state_87096__$1;
(statearr_87099_87850[(1)] = (3));

} else {
var statearr_87100_87851 = state_87096__$1;
(statearr_87100_87851[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87097 === (3))){
var inst_87084 = (state_87096[(7)]);
var inst_87091 = (function(){throw inst_87084})();
var state_87096__$1 = state_87096;
var statearr_87101_87852 = state_87096__$1;
(statearr_87101_87852[(2)] = inst_87091);

(statearr_87101_87852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87097 === (4))){
var inst_87084 = (state_87096[(7)]);
var state_87096__$1 = state_87096;
var statearr_87102_87854 = state_87096__$1;
(statearr_87102_87854[(2)] = inst_87084);

(statearr_87102_87854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87097 === (5))){
var inst_87094 = (state_87096[(2)]);
var state_87096__$1 = state_87096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87096__$1,inst_87094);
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
var statearr_87103 = [null,null,null,null,null,null,null,null];
(statearr_87103[(0)] = revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__);

(statearr_87103[(1)] = (1));

return statearr_87103;
});
var revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____1 = (function (state_87096){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87096);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87104){var ex__52189__auto__ = e87104;
var statearr_87105_87860 = state_87096;
(statearr_87105_87860[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87096[(4)]))){
var statearr_87106_87862 = state_87096;
(statearr_87106_87862[(1)] = cljs.core.first((state_87096[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87864 = state_87096;
state_87096 = G__87864;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__ = function(state_87096){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____1.call(this,state_87096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_tx_receipt_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87107 = f__52209__auto__();
(statearr_87107[(6)] = c__52208__auto__);

return statearr_87107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_tx = (function revert$ethereum$_LT_get_tx(txhash){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87124){
var state_val_87125 = (state_87124[(1)]);
if((state_val_87125 === (1))){
var inst_87108 = cljs.core.deref(revert.ethereum.provider);
var inst_87109 = inst_87108.getTransaction(txhash);
var inst_87110 = cljs.core.async.interop.p__GT_c(inst_87109);
var state_87124__$1 = state_87124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87124__$1,(2),inst_87110);
} else {
if((state_val_87125 === (2))){
var inst_87112 = (state_87124[(7)]);
var inst_87112__$1 = (state_87124[(2)]);
var inst_87113 = (inst_87112__$1 instanceof cljs.core.ExceptionInfo);
var inst_87114 = cljs.core.ex_data(inst_87112__$1);
var inst_87115 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87114);
var inst_87116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87115,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87117 = ((inst_87113) && (inst_87116));
var state_87124__$1 = (function (){var statearr_87126 = state_87124;
(statearr_87126[(7)] = inst_87112__$1);

return statearr_87126;
})();
if(cljs.core.truth_(inst_87117)){
var statearr_87127_87865 = state_87124__$1;
(statearr_87127_87865[(1)] = (3));

} else {
var statearr_87128_87866 = state_87124__$1;
(statearr_87128_87866[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87125 === (3))){
var inst_87112 = (state_87124[(7)]);
var inst_87119 = (function(){throw inst_87112})();
var state_87124__$1 = state_87124;
var statearr_87129_87870 = state_87124__$1;
(statearr_87129_87870[(2)] = inst_87119);

(statearr_87129_87870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87125 === (4))){
var inst_87112 = (state_87124[(7)]);
var state_87124__$1 = state_87124;
var statearr_87130_87882 = state_87124__$1;
(statearr_87130_87882[(2)] = inst_87112);

(statearr_87130_87882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87125 === (5))){
var inst_87122 = (state_87124[(2)]);
var state_87124__$1 = state_87124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87124__$1,inst_87122);
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
var statearr_87131 = [null,null,null,null,null,null,null,null];
(statearr_87131[(0)] = revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__);

(statearr_87131[(1)] = (1));

return statearr_87131;
});
var revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____1 = (function (state_87124){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87124);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87132){var ex__52189__auto__ = e87132;
var statearr_87133_87905 = state_87124;
(statearr_87133_87905[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87124[(4)]))){
var statearr_87134_87910 = state_87124;
(statearr_87134_87910[(1)] = cljs.core.first((state_87124[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87911 = state_87124;
state_87124 = G__87911;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__ = function(state_87124){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____1.call(this,state_87124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_tx_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_tx_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87135 = f__52209__auto__();
(statearr_87135[(6)] = c__52208__auto__);

return statearr_87135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_tx_with_receipt = (function revert$ethereum$_LT_get_tx_with_receipt(txhash){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87146){
var state_val_87147 = (state_87146[(1)]);
if((state_val_87147 === (1))){
var inst_87136 = [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"receipt","receipt",1871350913)];
var inst_87137 = revert.ethereum._LT_get_tx(txhash);
var state_87146__$1 = (function (){var statearr_87148 = state_87146;
(statearr_87148[(7)] = inst_87136);

return statearr_87148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87146__$1,(2),inst_87137);
} else {
if((state_val_87147 === (2))){
var inst_87139 = (state_87146[(2)]);
var inst_87140 = revert.ethereum._LT_get_tx_receipt(txhash);
var state_87146__$1 = (function (){var statearr_87149 = state_87146;
(statearr_87149[(8)] = inst_87139);

return statearr_87149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87146__$1,(3),inst_87140);
} else {
if((state_val_87147 === (3))){
var inst_87139 = (state_87146[(8)]);
var inst_87136 = (state_87146[(7)]);
var inst_87142 = (state_87146[(2)]);
var inst_87143 = [inst_87139,inst_87142];
var inst_87144 = cljs.core.PersistentHashMap.fromArrays(inst_87136,inst_87143);
var state_87146__$1 = state_87146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87146__$1,inst_87144);
} else {
return null;
}
}
}
});
return (function() {
var revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____0 = (function (){
var statearr_87150 = [null,null,null,null,null,null,null,null,null];
(statearr_87150[(0)] = revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__);

(statearr_87150[(1)] = (1));

return statearr_87150;
});
var revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____1 = (function (state_87146){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87146);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87151){var ex__52189__auto__ = e87151;
var statearr_87152_87981 = state_87146;
(statearr_87152_87981[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87146[(4)]))){
var statearr_87153_87985 = state_87146;
(statearr_87153_87985[(1)] = cljs.core.first((state_87146[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88001 = state_87146;
state_87146 = G__88001;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__ = function(state_87146){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____1.call(this,state_87146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_tx_with_receipt_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87154 = f__52209__auto__();
(statearr_87154[(6)] = c__52208__auto__);

return statearr_87154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.ethereum._LT_get_trxs = (function revert$ethereum$_LT_get_trxs(tx_hashes){
var trxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87159){
var state_val_87160 = (state_87159[(1)]);
if((state_val_87160 === (1))){
var inst_87155 = revert.ethereum._LT_get_tx_with_receipt(x);
var state_87159__$1 = state_87159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87159__$1,(2),inst_87155);
} else {
if((state_val_87160 === (2))){
var inst_87157 = (state_87159[(2)]);
var state_87159__$1 = state_87159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87159__$1,inst_87157);
} else {
return null;
}
}
});
return (function() {
var revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____0 = (function (){
var statearr_87161 = [null,null,null,null,null,null,null];
(statearr_87161[(0)] = revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__);

(statearr_87161[(1)] = (1));

return statearr_87161;
});
var revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____1 = (function (state_87159){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87159);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87162){var ex__52189__auto__ = e87162;
var statearr_87163_88050 = state_87159;
(statearr_87163_88050[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87159[(4)]))){
var statearr_87164_88057 = state_87159;
(statearr_87164_88057[(1)] = cljs.core.first((state_87159[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88071 = state_87159;
state_87159 = G__88071;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__ = function(state_87159){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____1.call(this,state_87159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____0;
revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_get_trxs_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87165 = f__52209__auto__();
(statearr_87165[(6)] = c__52208__auto__);

return statearr_87165;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87175){
var state_val_87176 = (state_87175[(1)]);
if((state_val_87176 === (1))){
var inst_87167 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(provider,token_address,user_address);
var state_87175__$1 = state_87175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87175__$1,(2),inst_87167);
} else {
if((state_val_87176 === (2))){
var inst_87169 = (state_87175[(2)]);
var inst_87170 = (function (){var user_txs = inst_87169;
return (function (x){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token","token",-1211463215),token_address,new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(x)], null);
});
})();
var inst_87171 = (function (){var user_txs = inst_87169;
return (function (p1__87166_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__87166_SHARP_)),clojure.string.lower_case(token_address));
});
})();
var inst_87172 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_87171,inst_87169);
var inst_87173 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87170,inst_87172);
var state_87175__$1 = state_87175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87175__$1,inst_87173);
} else {
return null;
}
}
});
return (function() {
var revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____0 = (function (){
var statearr_87177 = [null,null,null,null,null,null,null];
(statearr_87177[(0)] = revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__);

(statearr_87177[(1)] = (1));

return statearr_87177;
});
var revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____1 = (function (state_87175){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87175);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87178){var ex__52189__auto__ = e87178;
var statearr_87179_88098 = state_87175;
(statearr_87179_88098[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87175[(4)]))){
var statearr_87180_88099 = state_87175;
(statearr_87180_88099[(1)] = cljs.core.first((state_87175[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88102 = state_87175;
state_87175 = G__88102;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__ = function(state_87175){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____1.call(this,state_87175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____0;
revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_user_token_destinations_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87181 = f__52209__auto__();
(statearr_87181[(6)] = c__52208__auto__);

return statearr_87181;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87186){
var state_val_87187 = (state_87186[(1)]);
if((state_val_87187 === (1))){
var inst_87182 = revert.ethereum._LT_erc20_info(a);
var state_87186__$1 = state_87186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87186__$1,(2),inst_87182);
} else {
if((state_val_87187 === (2))){
var inst_87184 = (state_87186[(2)]);
var state_87186__$1 = state_87186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87186__$1,inst_87184);
} else {
return null;
}
}
});
return (function() {
var revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__ = null;
var revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_87188 = [null,null,null,null,null,null,null];
(statearr_87188[(0)] = revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__);

(statearr_87188[(1)] = (1));

return statearr_87188;
});
var revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____1 = (function (state_87186){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87186);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87189){var ex__52189__auto__ = e87189;
var statearr_87190_88113 = state_87186;
(statearr_87190_88113[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87186[(4)]))){
var statearr_87191_88114 = state_87186;
(statearr_87191_88114[(1)] = cljs.core.first((state_87186[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88115 = state_87186;
state_87186 = G__88115;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__ = function(state_87186){
switch(arguments.length){
case 0:
return revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____1.call(this,state_87186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____0;
revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto____1;
return revert$ethereum$_LT_erc20_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87192 = f__52209__auto__();
(statearr_87192[(6)] = c__52208__auto__);

return statearr_87192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),tokens)));
});

//# sourceMappingURL=revert.ethereum.js.map
