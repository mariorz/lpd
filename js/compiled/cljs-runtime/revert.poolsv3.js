goog.provide('revert.poolsv3');
var module$node_modules$$uniswap$sdk_core$dist$index=shadow.js.require("module$node_modules$$uniswap$sdk_core$dist$index", {});
var module$node_modules$$uniswap$v3_sdk$dist$index=shadow.js.require("module$node_modules$$uniswap$v3_sdk$dist$index", {});
var module$node_modules$$uniswap$v3_periphery$artifacts$contracts$NonfungiblePositionManager_sol$NonfungiblePositionManager_json=shadow.js.require("module$node_modules$$uniswap$v3_periphery$artifacts$contracts$NonfungiblePositionManager_sol$NonfungiblePositionManager_json", {});
var module$node_modules$$uniswap$v3_core$artifacts$contracts$interfaces$pool$IUniswapV3PoolState_sol$IUniswapV3PoolState_json=shadow.js.require("module$node_modules$$uniswap$v3_core$artifacts$contracts$interfaces$pool$IUniswapV3PoolState_sol$IUniswapV3PoolState_json", {});
var module$node_modules$$uniswap$v3_periphery$artifacts$contracts$interfaces$INonfungiblePositionManager_sol$INonfungiblePositionManager_json=shadow.js.require("module$node_modules$$uniswap$v3_periphery$artifacts$contracts$interfaces$INonfungiblePositionManager_sol$INonfungiblePositionManager_json", {});
revert.poolsv3.mngr_abi = module$node_modules$$uniswap$v3_periphery$artifacts$contracts$NonfungiblePositionManager_sol$NonfungiblePositionManager_json.abi;
revert.poolsv3.mngr_iface_abi = module$node_modules$$uniswap$v3_periphery$artifacts$contracts$interfaces$INonfungiblePositionManager_sol$INonfungiblePositionManager_json.abi;
revert.poolsv3.mgmt_contract = revert.ethereum.make_contract(revert.poolsv3.mngr_abi,"0xc36442b4a4522e871399cd717abdd847ab11fe88");
revert.poolsv3.mgmt_iface = revert.ethereum.make_interface(revert.poolsv3.mngr_iface_abi);
revert.poolsv3.pstate_abi = module$node_modules$$uniswap$v3_core$artifacts$contracts$interfaces$pool$IUniswapV3PoolState_sol$IUniswapV3PoolState_json.abi;
revert.poolsv3.pstate_iface = revert.ethereum.make_interface(revert.poolsv3.pstate_abi);
revert.poolsv3.counterfactual_fees_old = (function revert$poolsv3$counterfactual_fees_old(fee_growth_global,fee_growth_outside_lower,fee_growth_outside_upper,fee_growth_insinde_last,pool,liquidity,tick_lower,tick_upper){
var fee_growth_below = (((pool.tickCurrent >= tick_lower))?fee_growth_outside_lower:(fee_growth_global - fee_growth_outside_lower));
var fee_growth_above = (((pool.tickCurrent < tick_upper))?fee_growth_outside_upper:(fee_growth_global - fee_growth_outside_upper));
var fee_growth_inside = ((fee_growth_global - fee_growth_below) - fee_growth_above);
var current_fee_growth = (fee_growth_inside - fee_growth_insinde_last);
return ((current_fee_growth * liquidity) / Math.pow((2),(128)));
});
revert.poolsv3.total_fees = (function revert$poolsv3$total_fees(position,fees0,fees1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bignumber.core._PLUS_(bignumber.core._STAR_(revert.utils.bn((2)),revert.utils.ebn__GT_bn(position.tokensOwed0,(18))),fees0),bignumber.core._PLUS_(bignumber.core._STAR_(revert.utils.bn((2)),revert.utils.ebn__GT_bn(position.tokensOwed1,(18))),fees1)], null);
});
revert.poolsv3._LT_account_balance = (function revert$poolsv3$_LT_account_balance(account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115031){
var state_val_115032 = (state_115031[(1)]);
if((state_val_115032 === (1))){
var inst_115015 = revert.poolsv3.mgmt_contract.balanceOf(account);
var inst_115016 = cljs.core.async.interop.p__GT_c(inst_115015);
var state_115031__$1 = state_115031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115031__$1,(2),inst_115016);
} else {
if((state_val_115032 === (2))){
var inst_115018 = (state_115031[(7)]);
var inst_115018__$1 = (state_115031[(2)]);
var inst_115019 = (inst_115018__$1 instanceof cljs.core.ExceptionInfo);
var inst_115020 = cljs.core.ex_data(inst_115018__$1);
var inst_115021 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115020);
var inst_115022 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115021,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115023 = ((inst_115019) && (inst_115022));
var state_115031__$1 = (function (){var statearr_115033 = state_115031;
(statearr_115033[(7)] = inst_115018__$1);

return statearr_115033;
})();
if(cljs.core.truth_(inst_115023)){
var statearr_115034_115491 = state_115031__$1;
(statearr_115034_115491[(1)] = (3));

} else {
var statearr_115035_115492 = state_115031__$1;
(statearr_115035_115492[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115032 === (3))){
var inst_115018 = (state_115031[(7)]);
var inst_115025 = (function(){throw inst_115018})();
var state_115031__$1 = state_115031;
var statearr_115036_115493 = state_115031__$1;
(statearr_115036_115493[(2)] = inst_115025);

(statearr_115036_115493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115032 === (4))){
var inst_115018 = (state_115031[(7)]);
var state_115031__$1 = state_115031;
var statearr_115037_115494 = state_115031__$1;
(statearr_115037_115494[(2)] = inst_115018);

(statearr_115037_115494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115032 === (5))){
var inst_115028 = (state_115031[(2)]);
var inst_115029 = revert.utils.ebn__GT_bn(inst_115028,(0));
var state_115031__$1 = state_115031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115031__$1,inst_115029);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____0 = (function (){
var statearr_115038 = [null,null,null,null,null,null,null,null];
(statearr_115038[(0)] = revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__);

(statearr_115038[(1)] = (1));

return statearr_115038;
});
var revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____1 = (function (state_115031){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115031);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115039){var ex__52189__auto__ = e115039;
var statearr_115040_115495 = state_115031;
(statearr_115040_115495[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115031[(4)]))){
var statearr_115041_115496 = state_115031;
(statearr_115041_115496[(1)] = cljs.core.first((state_115031[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115497 = state_115031;
state_115031 = G__115497;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__ = function(state_115031){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____1.call(this,state_115031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115042 = f__52209__auto__();
(statearr_115042[(6)] = c__52208__auto__);

return statearr_115042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_account_token_by_index = (function revert$poolsv3$_LT_account_token_by_index(account,i){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115059){
var state_val_115060 = (state_115059[(1)]);
if((state_val_115060 === (1))){
var inst_115043 = revert.poolsv3.mgmt_contract.tokenOfOwnerByIndex(account,i);
var inst_115044 = cljs.core.async.interop.p__GT_c(inst_115043);
var state_115059__$1 = state_115059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115059__$1,(2),inst_115044);
} else {
if((state_val_115060 === (2))){
var inst_115046 = (state_115059[(7)]);
var inst_115046__$1 = (state_115059[(2)]);
var inst_115047 = (inst_115046__$1 instanceof cljs.core.ExceptionInfo);
var inst_115048 = cljs.core.ex_data(inst_115046__$1);
var inst_115049 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115048);
var inst_115050 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115049,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115051 = ((inst_115047) && (inst_115050));
var state_115059__$1 = (function (){var statearr_115061 = state_115059;
(statearr_115061[(7)] = inst_115046__$1);

return statearr_115061;
})();
if(cljs.core.truth_(inst_115051)){
var statearr_115062_115498 = state_115059__$1;
(statearr_115062_115498[(1)] = (3));

} else {
var statearr_115063_115499 = state_115059__$1;
(statearr_115063_115499[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115060 === (3))){
var inst_115046 = (state_115059[(7)]);
var inst_115053 = (function(){throw inst_115046})();
var state_115059__$1 = state_115059;
var statearr_115064_115500 = state_115059__$1;
(statearr_115064_115500[(2)] = inst_115053);

(statearr_115064_115500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115060 === (4))){
var inst_115046 = (state_115059[(7)]);
var state_115059__$1 = state_115059;
var statearr_115065_115501 = state_115059__$1;
(statearr_115065_115501[(2)] = inst_115046);

(statearr_115065_115501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115060 === (5))){
var inst_115056 = (state_115059[(2)]);
var inst_115057 = revert.utils.ebn__GT_bn(inst_115056,(0));
var state_115059__$1 = state_115059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115059__$1,inst_115057);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____0 = (function (){
var statearr_115066 = [null,null,null,null,null,null,null,null];
(statearr_115066[(0)] = revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__);

(statearr_115066[(1)] = (1));

return statearr_115066;
});
var revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____1 = (function (state_115059){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115059);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115067){var ex__52189__auto__ = e115067;
var statearr_115068_115502 = state_115059;
(statearr_115068_115502[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115059[(4)]))){
var statearr_115069_115503 = state_115059;
(statearr_115069_115503[(1)] = cljs.core.first((state_115059[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115504 = state_115059;
state_115059 = G__115504;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__ = function(state_115059){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____1.call(this,state_115059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115070 = f__52209__auto__();
(statearr_115070[(6)] = c__52208__auto__);

return statearr_115070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_account_token_ids = (function revert$poolsv3$_LT_account_token_ids(account,n){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115075){
var state_val_115076 = (state_115075[(1)]);
if((state_val_115076 === (1))){
var inst_115071 = revert.poolsv3._LT_account_token_by_index(account,i);
var state_115075__$1 = state_115075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115075__$1,(2),inst_115071);
} else {
if((state_val_115076 === (2))){
var inst_115073 = (state_115075[(2)]);
var state_115075__$1 = state_115075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115075__$1,inst_115073);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____0 = (function (){
var statearr_115077 = [null,null,null,null,null,null,null];
(statearr_115077[(0)] = revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__);

(statearr_115077[(1)] = (1));

return statearr_115077;
});
var revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____1 = (function (state_115075){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115075);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115078){var ex__52189__auto__ = e115078;
var statearr_115079_115505 = state_115075;
(statearr_115079_115505[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115075[(4)]))){
var statearr_115080_115506 = state_115075;
(statearr_115080_115506[(1)] = cljs.core.first((state_115075[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115507 = state_115075;
state_115075 = G__115507;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__ = function(state_115075){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____1.call(this,state_115075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115081 = f__52209__auto__();
(statearr_115081[(6)] = c__52208__auto__);

return statearr_115081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))));
});
revert.poolsv3.tokens0_owed = (function revert$poolsv3$tokens0_owed(position){
return position.tokensOwed0;
});
revert.poolsv3.tokens1_owed = (function revert$poolsv3$tokens1_owed(position){
return position.tokensOwed1;
});
revert.poolsv3.fee_growth_inside0 = (function revert$poolsv3$fee_growth_inside0(position){
return position.feeGrowthInside0LastX128;
});
revert.poolsv3.fee_growth_inside1 = (function revert$poolsv3$fee_growth_inside1(position){
return position.feeGrowthInside1LastX128;
});
revert.poolsv3.fee_growth_outside0 = (function revert$poolsv3$fee_growth_outside0(fee_growths){
return fee_growths.feeGrowthOutside0X128;
});
revert.poolsv3.fee_growth_outside1 = (function revert$poolsv3$fee_growth_outside1(fee_growths){
return fee_growths.feeGrowthOutside1X128;
});
revert.poolsv3._LT_fee_growth_global0 = (function revert$poolsv3$_LT_fee_growth_global0(pool_state){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115097){
var state_val_115098 = (state_115097[(1)]);
if((state_val_115098 === (1))){
var inst_115082 = pool_state.feeGrowthGlobal0X128();
var inst_115083 = cljs.core.async.interop.p__GT_c(inst_115082);
var state_115097__$1 = state_115097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115097__$1,(2),inst_115083);
} else {
if((state_val_115098 === (2))){
var inst_115085 = (state_115097[(7)]);
var inst_115085__$1 = (state_115097[(2)]);
var inst_115086 = (inst_115085__$1 instanceof cljs.core.ExceptionInfo);
var inst_115087 = cljs.core.ex_data(inst_115085__$1);
var inst_115088 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115087);
var inst_115089 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115088,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115090 = ((inst_115086) && (inst_115089));
var state_115097__$1 = (function (){var statearr_115099 = state_115097;
(statearr_115099[(7)] = inst_115085__$1);

return statearr_115099;
})();
if(cljs.core.truth_(inst_115090)){
var statearr_115100_115508 = state_115097__$1;
(statearr_115100_115508[(1)] = (3));

} else {
var statearr_115101_115509 = state_115097__$1;
(statearr_115101_115509[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115098 === (3))){
var inst_115085 = (state_115097[(7)]);
var inst_115092 = (function(){throw inst_115085})();
var state_115097__$1 = state_115097;
var statearr_115102_115510 = state_115097__$1;
(statearr_115102_115510[(2)] = inst_115092);

(statearr_115102_115510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115098 === (4))){
var inst_115085 = (state_115097[(7)]);
var state_115097__$1 = state_115097;
var statearr_115103_115511 = state_115097__$1;
(statearr_115103_115511[(2)] = inst_115085);

(statearr_115103_115511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115098 === (5))){
var inst_115095 = (state_115097[(2)]);
var state_115097__$1 = state_115097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115097__$1,inst_115095);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____0 = (function (){
var statearr_115104 = [null,null,null,null,null,null,null,null];
(statearr_115104[(0)] = revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__);

(statearr_115104[(1)] = (1));

return statearr_115104;
});
var revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____1 = (function (state_115097){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115097);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115105){var ex__52189__auto__ = e115105;
var statearr_115106_115512 = state_115097;
(statearr_115106_115512[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115097[(4)]))){
var statearr_115107_115513 = state_115097;
(statearr_115107_115513[(1)] = cljs.core.first((state_115097[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115514 = state_115097;
state_115097 = G__115514;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__ = function(state_115097){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____1.call(this,state_115097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115108 = f__52209__auto__();
(statearr_115108[(6)] = c__52208__auto__);

return statearr_115108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_fee_growth_global1 = (function revert$poolsv3$_LT_fee_growth_global1(pool_state){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115124){
var state_val_115125 = (state_115124[(1)]);
if((state_val_115125 === (1))){
var inst_115109 = pool_state.feeGrowthGlobal1X128();
var inst_115110 = cljs.core.async.interop.p__GT_c(inst_115109);
var state_115124__$1 = state_115124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115124__$1,(2),inst_115110);
} else {
if((state_val_115125 === (2))){
var inst_115112 = (state_115124[(7)]);
var inst_115112__$1 = (state_115124[(2)]);
var inst_115113 = (inst_115112__$1 instanceof cljs.core.ExceptionInfo);
var inst_115114 = cljs.core.ex_data(inst_115112__$1);
var inst_115115 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115114);
var inst_115116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115115,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115117 = ((inst_115113) && (inst_115116));
var state_115124__$1 = (function (){var statearr_115126 = state_115124;
(statearr_115126[(7)] = inst_115112__$1);

return statearr_115126;
})();
if(cljs.core.truth_(inst_115117)){
var statearr_115127_115515 = state_115124__$1;
(statearr_115127_115515[(1)] = (3));

} else {
var statearr_115128_115516 = state_115124__$1;
(statearr_115128_115516[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115125 === (3))){
var inst_115112 = (state_115124[(7)]);
var inst_115119 = (function(){throw inst_115112})();
var state_115124__$1 = state_115124;
var statearr_115129_115517 = state_115124__$1;
(statearr_115129_115517[(2)] = inst_115119);

(statearr_115129_115517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115125 === (4))){
var inst_115112 = (state_115124[(7)]);
var state_115124__$1 = state_115124;
var statearr_115130_115518 = state_115124__$1;
(statearr_115130_115518[(2)] = inst_115112);

(statearr_115130_115518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115125 === (5))){
var inst_115122 = (state_115124[(2)]);
var state_115124__$1 = state_115124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115124__$1,inst_115122);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____0 = (function (){
var statearr_115131 = [null,null,null,null,null,null,null,null];
(statearr_115131[(0)] = revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__);

(statearr_115131[(1)] = (1));

return statearr_115131;
});
var revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____1 = (function (state_115124){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115124);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115132){var ex__52189__auto__ = e115132;
var statearr_115133_115519 = state_115124;
(statearr_115133_115519[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115124[(4)]))){
var statearr_115134_115520 = state_115124;
(statearr_115134_115520[(1)] = cljs.core.first((state_115124[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115521 = state_115124;
state_115124 = G__115521;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__ = function(state_115124){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____1.call(this,state_115124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115135 = f__52209__auto__();
(statearr_115135[(6)] = c__52208__auto__);

return statearr_115135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_token_position = (function revert$poolsv3$_LT_token_position(v3state,token_id){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115247){
var state_val_115248 = (state_115247[(1)]);
if((state_val_115248 === (7))){
var inst_115150 = (state_115247[(7)]);
var inst_115170 = (state_115247[(8)]);
var inst_115160 = (state_115247[(9)]);
var inst_115181 = (state_115247[(2)]);
var inst_115182 = revert.utils.ebn__GT_bn(inst_115181,inst_115160);
var inst_115183 = inst_115150.tickLower;
var inst_115184 = inst_115183.toString();
var inst_115185 = inst_115170.ticks(inst_115184);
var inst_115186 = cljs.core.async.interop.p__GT_c(inst_115185);
var state_115247__$1 = (function (){var statearr_115249 = state_115247;
(statearr_115249[(10)] = inst_115182);

return statearr_115249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115247__$1,(8),inst_115186);
} else {
if((state_val_115248 === (1))){
var inst_115136 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_id);
var inst_115137 = revert.poolsv3.mgmt_contract.positions(inst_115136);
var inst_115138 = cljs.core.async.interop.p__GT_c(inst_115137);
var state_115247__$1 = state_115247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115247__$1,(2),inst_115138);
} else {
if((state_val_115248 === (4))){
var inst_115140 = (state_115247[(11)]);
var state_115247__$1 = state_115247;
var statearr_115250_115522 = state_115247__$1;
(statearr_115250_115522[(2)] = inst_115140);

(statearr_115250_115522[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (15))){
var inst_115150 = (state_115247[(7)]);
var inst_115178 = (state_115247[(12)]);
var inst_115174 = (state_115247[(13)]);
var inst_115200 = (state_115247[(14)]);
var inst_115172 = (state_115247[(15)]);
var inst_115169 = (state_115247[(16)]);
var inst_115182 = (state_115247[(10)]);
var inst_115202 = (state_115247[(17)]);
var inst_115157 = (state_115247[(18)]);
var inst_115160 = (state_115247[(9)]);
var inst_115218 = (state_115247[(2)]);
var inst_115219 = revert.poolsv3.fee_growth_outside0(inst_115218);
var inst_115220 = revert.utils.ebn__GT_bn(inst_115219,inst_115157);
var inst_115221 = revert.poolsv3.fee_growth_outside1(inst_115218);
var inst_115222 = revert.utils.ebn__GT_bn(inst_115221,inst_115160);
var inst_115223 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"fee-growth-global0","fee-growth-global0",-1829140606),new cljs.core.Keyword(null,"fee-growth-outside-upper1","fee-growth-outside-upper1",-1725464316),new cljs.core.Keyword(null,"tokens-owed0","tokens-owed0",1609677029),new cljs.core.Keyword(null,"fee-growth-global1","fee-growth-global1",-2132052347),new cljs.core.Keyword(null,"fee-growth-inside1-last","fee-growth-inside1-last",2132365702),new cljs.core.Keyword(null,"feeGrowthInside0LastX128","feeGrowthInside0LastX128",-71710874),new cljs.core.Keyword(null,"nft-id","nft-id",148413416),new cljs.core.Keyword(null,"fee-growth-outside-upper0","fee-growth-outside-upper0",14620457),new cljs.core.Keyword(null,"token1","token1",879943564),new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"fee-growth-inside0-last","fee-growth-inside0-last",-2019822480),new cljs.core.Keyword(null,"fee-growth-outside-lower1","fee-growth-outside-lower1",486201393),new cljs.core.Keyword(null,"feeGrowthInside1LastX128","feeGrowthInside1LastX128",1778507921),new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new cljs.core.Keyword(null,"fee-growth-outside-lower0","fee-growth-outside-lower0",2049801266),new cljs.core.Keyword(null,"tokens-owed1","tokens-owed1",900233334),new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352),new cljs.core.Keyword(null,"fee-tier","fee-tier",546230876),new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802)];
var inst_115224 = revert.poolsv3.tokens0_owed(inst_115150);
var inst_115225 = inst_115224.toString();
var inst_115226 = revert.poolsv3.fee_growth_inside0(inst_115150);
var inst_115227 = inst_115226.toString();
var inst_115228 = token_id.toString();
var inst_115229 = inst_115150.token1;
var inst_115230 = inst_115150.token0;
var inst_115231 = revert.poolsv3.fee_growth_inside1(inst_115150);
var inst_115232 = inst_115231.toString();
var inst_115233 = inst_115150.liquidity;
var inst_115234 = inst_115233.toString();
var inst_115235 = revert.poolsv3.tokens1_owed(inst_115150);
var inst_115236 = inst_115235.toString();
var inst_115237 = inst_115150.operator;
var inst_115238 = inst_115150.tickUpper;
var inst_115239 = inst_115238.toString();
var inst_115240 = inst_115150.fee;
var inst_115241 = inst_115240.toString();
var inst_115242 = inst_115150.tickLower;
var inst_115243 = inst_115242.toString();
var inst_115244 = [inst_115169,inst_115178,inst_115222,inst_115225,inst_115182,inst_115174,inst_115227,inst_115228,inst_115220,inst_115229,inst_115230,inst_115172,inst_115202,inst_115232,inst_115234,inst_115200,inst_115236,inst_115237,inst_115239,inst_115241,inst_115243];
var inst_115245 = cljs.core.PersistentHashMap.fromArrays(inst_115223,inst_115244);
var state_115247__$1 = state_115247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115247__$1,inst_115245);
} else {
if((state_val_115248 === (13))){
var inst_115208 = (state_115247[(19)]);
var inst_115215 = (function(){throw inst_115208})();
var state_115247__$1 = state_115247;
var statearr_115251_115523 = state_115247__$1;
(statearr_115251_115523[(2)] = inst_115215);

(statearr_115251_115523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (6))){
var inst_115170 = (state_115247[(8)]);
var inst_115157 = (state_115247[(18)]);
var inst_115177 = (state_115247[(2)]);
var inst_115178 = revert.utils.ebn__GT_bn(inst_115177,inst_115157);
var inst_115179 = revert.poolsv3._LT_fee_growth_global1(inst_115170);
var state_115247__$1 = (function (){var statearr_115252 = state_115247;
(statearr_115252[(12)] = inst_115178);

return statearr_115252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115247__$1,(7),inst_115179);
} else {
if((state_val_115248 === (3))){
var inst_115140 = (state_115247[(11)]);
var inst_115147 = (function(){throw inst_115140})();
var state_115247__$1 = state_115247;
var statearr_115253_115524 = state_115247__$1;
(statearr_115253_115524[(2)] = inst_115147);

(statearr_115253_115524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (12))){
var inst_115208 = (state_115247[(19)]);
var inst_115208__$1 = (state_115247[(2)]);
var inst_115209 = (inst_115208__$1 instanceof cljs.core.ExceptionInfo);
var inst_115210 = cljs.core.ex_data(inst_115208__$1);
var inst_115211 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115210);
var inst_115212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115211,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115213 = ((inst_115209) && (inst_115212));
var state_115247__$1 = (function (){var statearr_115254 = state_115247;
(statearr_115254[(19)] = inst_115208__$1);

return statearr_115254;
})();
if(cljs.core.truth_(inst_115213)){
var statearr_115255_115525 = state_115247__$1;
(statearr_115255_115525[(1)] = (13));

} else {
var statearr_115256_115526 = state_115247__$1;
(statearr_115256_115526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (2))){
var inst_115140 = (state_115247[(11)]);
var inst_115140__$1 = (state_115247[(2)]);
var inst_115141 = (inst_115140__$1 instanceof cljs.core.ExceptionInfo);
var inst_115142 = cljs.core.ex_data(inst_115140__$1);
var inst_115143 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115142);
var inst_115144 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115143,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115145 = ((inst_115141) && (inst_115144));
var state_115247__$1 = (function (){var statearr_115257 = state_115247;
(statearr_115257[(11)] = inst_115140__$1);

return statearr_115257;
})();
if(cljs.core.truth_(inst_115145)){
var statearr_115258_115527 = state_115247__$1;
(statearr_115258_115527[(1)] = (3));

} else {
var statearr_115259_115528 = state_115247__$1;
(statearr_115259_115528[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (11))){
var inst_115150 = (state_115247[(7)]);
var inst_115170 = (state_115247[(8)]);
var inst_115157 = (state_115247[(18)]);
var inst_115160 = (state_115247[(9)]);
var inst_115198 = (state_115247[(2)]);
var inst_115199 = revert.poolsv3.fee_growth_outside0(inst_115198);
var inst_115200 = revert.utils.ebn__GT_bn(inst_115199,inst_115157);
var inst_115201 = revert.poolsv3.fee_growth_outside1(inst_115198);
var inst_115202 = revert.utils.ebn__GT_bn(inst_115201,inst_115160);
var inst_115203 = inst_115150.tickUpper;
var inst_115204 = inst_115203.toString();
var inst_115205 = inst_115170.ticks(inst_115204);
var inst_115206 = cljs.core.async.interop.p__GT_c(inst_115205);
var state_115247__$1 = (function (){var statearr_115260 = state_115247;
(statearr_115260[(14)] = inst_115200);

(statearr_115260[(17)] = inst_115202);

return statearr_115260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115247__$1,(12),inst_115206);
} else {
if((state_val_115248 === (9))){
var inst_115188 = (state_115247[(20)]);
var inst_115195 = (function(){throw inst_115188})();
var state_115247__$1 = state_115247;
var statearr_115261_115529 = state_115247__$1;
(statearr_115261_115529[(2)] = inst_115195);

(statearr_115261_115529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (5))){
var inst_115150 = (state_115247[(7)]);
var inst_115170 = (state_115247[(8)]);
var inst_115169 = (state_115247[(16)]);
var inst_115157 = (state_115247[(18)]);
var inst_115160 = (state_115247[(9)]);
var inst_115150__$1 = (state_115247[(2)]);
var inst_115151 = inst_115150__$1.token0;
var inst_115152 = clojure.string.lower_case(inst_115151);
var inst_115153 = inst_115150__$1.token1;
var inst_115154 = clojure.string.lower_case(inst_115153);
var inst_115155 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var inst_115156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115155,inst_115152);
var inst_115157__$1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_115156);
var inst_115158 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var inst_115159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115158,inst_115154);
var inst_115160__$1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_115159);
var inst_115161 = (new module$node_modules$$uniswap$sdk_core$dist$index.Token((1),inst_115152,inst_115157__$1));
var inst_115162 = (new module$node_modules$$uniswap$sdk_core$dist$index.Token((1),inst_115154,inst_115160__$1));
var inst_115163 = [new cljs.core.Keyword(null,"factoryAddress","factoryAddress",1568101838),new cljs.core.Keyword(null,"tokenA","tokenA",-1480387418),new cljs.core.Keyword(null,"tokenB","tokenB",333774851),new cljs.core.Keyword(null,"fee","fee",-1196176319)];
var inst_115164 = inst_115150__$1.fee;
var inst_115165 = [module$node_modules$$uniswap$v3_sdk$dist$index.FACTORY_ADDRESS,inst_115161,inst_115162,inst_115164];
var inst_115166 = cljs.core.PersistentHashMap.fromArrays(inst_115163,inst_115165);
var inst_115167 = cljs.core.clj__GT_js(inst_115166);
var inst_115168 = module$node_modules$$uniswap$v3_sdk$dist$index.computePoolAddress(inst_115167);
var inst_115169__$1 = clojure.string.lower_case(inst_115168);
var inst_115170__$1 = revert.ethereum.make_contract(revert.poolsv3.pstate_abi,inst_115169__$1);
var inst_115171 = revert.poolsv3.fee_growth_inside0(inst_115150__$1);
var inst_115172 = revert.utils.ebn__GT_bn(inst_115171,inst_115157__$1);
var inst_115173 = revert.poolsv3.fee_growth_inside1(inst_115150__$1);
var inst_115174 = revert.utils.ebn__GT_bn(inst_115173,inst_115160__$1);
var inst_115175 = revert.poolsv3._LT_fee_growth_global0(inst_115170__$1);
var state_115247__$1 = (function (){var statearr_115262 = state_115247;
(statearr_115262[(7)] = inst_115150__$1);

(statearr_115262[(13)] = inst_115174);

(statearr_115262[(8)] = inst_115170__$1);

(statearr_115262[(15)] = inst_115172);

(statearr_115262[(16)] = inst_115169__$1);

(statearr_115262[(18)] = inst_115157__$1);

(statearr_115262[(9)] = inst_115160__$1);

return statearr_115262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115247__$1,(6),inst_115175);
} else {
if((state_val_115248 === (14))){
var inst_115208 = (state_115247[(19)]);
var state_115247__$1 = state_115247;
var statearr_115263_115530 = state_115247__$1;
(statearr_115263_115530[(2)] = inst_115208);

(statearr_115263_115530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (10))){
var inst_115188 = (state_115247[(20)]);
var state_115247__$1 = state_115247;
var statearr_115264_115531 = state_115247__$1;
(statearr_115264_115531[(2)] = inst_115188);

(statearr_115264_115531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115248 === (8))){
var inst_115188 = (state_115247[(20)]);
var inst_115188__$1 = (state_115247[(2)]);
var inst_115189 = (inst_115188__$1 instanceof cljs.core.ExceptionInfo);
var inst_115190 = cljs.core.ex_data(inst_115188__$1);
var inst_115191 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115190);
var inst_115192 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115191,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115193 = ((inst_115189) && (inst_115192));
var state_115247__$1 = (function (){var statearr_115265 = state_115247;
(statearr_115265[(20)] = inst_115188__$1);

return statearr_115265;
})();
if(cljs.core.truth_(inst_115193)){
var statearr_115266_115532 = state_115247__$1;
(statearr_115266_115532[(1)] = (9));

} else {
var statearr_115267_115533 = state_115247__$1;
(statearr_115267_115533[(1)] = (10));

}

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
}
});
return (function() {
var revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____0 = (function (){
var statearr_115268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_115268[(0)] = revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__);

(statearr_115268[(1)] = (1));

return statearr_115268;
});
var revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____1 = (function (state_115247){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115247);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115269){var ex__52189__auto__ = e115269;
var statearr_115270_115534 = state_115247;
(statearr_115270_115534[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115247[(4)]))){
var statearr_115271_115535 = state_115247;
(statearr_115271_115535[(1)] = cljs.core.first((state_115247[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115536 = state_115247;
state_115247 = G__115536;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__ = function(state_115247){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____1.call(this,state_115247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115272 = f__52209__auto__();
(statearr_115272[(6)] = c__52208__auto__);

return statearr_115272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_token_positions = (function revert$poolsv3$_LT_token_positions(v3state,token_ids){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (token_id){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115277){
var state_val_115278 = (state_115277[(1)]);
if((state_val_115278 === (1))){
var inst_115273 = revert.poolsv3._LT_token_position(v3state,token_id);
var state_115277__$1 = state_115277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115277__$1,(2),inst_115273);
} else {
if((state_val_115278 === (2))){
var inst_115275 = (state_115277[(2)]);
var state_115277__$1 = state_115277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115277__$1,inst_115275);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_115279 = [null,null,null,null,null,null,null];
(statearr_115279[(0)] = revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__);

(statearr_115279[(1)] = (1));

return statearr_115279;
});
var revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____1 = (function (state_115277){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115277);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115280){var ex__52189__auto__ = e115280;
var statearr_115281_115537 = state_115277;
(statearr_115281_115537[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115277[(4)]))){
var statearr_115282_115538 = state_115277;
(statearr_115282_115538[(1)] = cljs.core.first((state_115277[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115539 = state_115277;
state_115277 = G__115539;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__ = function(state_115277){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____1.call(this,state_115277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115283 = f__52209__auto__();
(statearr_115283[(6)] = c__52208__auto__);

return statearr_115283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),token_ids)));
});
revert.poolsv3.decode_liquidity_event = (function revert$poolsv3$decode_liquidity_event(event,token1_decimals,token2_decimals){
try{var event_obj = revert.poolsv3.mgmt_iface.parseLog(event);
var event_type = (function (){var G__115285 = event_obj.name;
switch (G__115285) {
case "IncreaseLiquidity":
return new cljs.core.Keyword(null,"increase-liquidity","increase-liquidity",-694970582);

break;
case "DecreaseLiquidity":
return new cljs.core.Keyword(null,"decrease-liquidity","decrease-liquidity",-1907326714);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__115285)].join('')));

}
})();
var args = event_obj.args;
var token_id = revert.utils.ebn__GT_bn(args.tokenId,(0));
var amount0 = revert.utils.ebn__GT_bn(args.amount0,token1_decimals);
var amount1 = revert.utils.ebn__GT_bn(args.amount1,token2_decimals);
var liquidity = args.liquidity;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),event_type,new cljs.core.Keyword(null,"nft-id","nft-id",148413416),token_id,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1,new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),liquidity], null);
}catch (e115284){if((e115284 instanceof Error)){
var err = e115284;
return console.log("prob parsing liquidity event:",err);
} else {
throw e115284;

}
}});
revert.poolsv3.make_liqevent_map = (function revert$poolsv3$make_liqevent_map(liqevent_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(liqevent_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(liqevent_txr);
var txhash = tx.hash;
var block_number = tx.blockNumber;
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = revert.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = revert.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var event_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115286_SHARP_){
return revert.poolsv3.decode_liquidity_event(p1__115286_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var gas_used_SINGLEQUOTE_ = bignumber.core._SLASH_(gas_used,revert.utils.bn(cljs.core.count(event_logs)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115287_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__115287_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used_SINGLEQUOTE_], null));
}),event_logs);
});
revert.poolsv3._LT_get_nft_events = (function revert$poolsv3$_LT_get_nft_events(tx_hashes){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115296){
var state_val_115297 = (state_115296[(1)]);
if((state_val_115297 === (1))){
var inst_115289 = revert.ethereum._LT_get_trxs(tx_hashes);
var state_115296__$1 = state_115296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115296__$1,(2),inst_115289);
} else {
if((state_val_115297 === (2))){
var inst_115291 = (state_115296[(2)]);
var inst_115292 = (function (){var token0_decimals = (18);
var token1_decimals = (18);
var nft_txrs = inst_115291;
return (function (p1__115288_SHARP_){
return revert.poolsv3.make_liqevent_map(p1__115288_SHARP_,token0_decimals,token1_decimals);
});
})();
var inst_115293 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_115292,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_115291], 0));
var inst_115294 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_115293);
var state_115296__$1 = state_115296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115296__$1,inst_115294);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____0 = (function (){
var statearr_115298 = [null,null,null,null,null,null,null];
(statearr_115298[(0)] = revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__);

(statearr_115298[(1)] = (1));

return statearr_115298;
});
var revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____1 = (function (state_115296){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115296);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115299){var ex__52189__auto__ = e115299;
var statearr_115300_115541 = state_115296;
(statearr_115300_115541[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115296[(4)]))){
var statearr_115301_115542 = state_115296;
(statearr_115301_115542[(1)] = cljs.core.first((state_115296[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115543 = state_115296;
state_115296 = G__115543;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__ = function(state_115296){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____1.call(this,state_115296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115302 = f__52209__auto__();
(statearr_115302[(6)] = c__52208__auto__);

return statearr_115302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3.parse_token = (function revert$poolsv3$parse_token(token,eth_price){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"decimals","decimals",1715096484),parseInt(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usd","usd",2103592073),bignumber.core._STAR_(revert.utils.bn(new cljs.core.Keyword(null,"derivedETH","derivedETH",919852426).cljs$core$IFn$_invoke$arity$1(token)),eth_price),new cljs.core.Keyword(null,"eth","eth",1381694970),revert.utils.bn(new cljs.core.Keyword(null,"derivedETH","derivedETH",919852426).cljs$core$IFn$_invoke$arity$1(token))], null)], null);
});
revert.poolsv3.parse_pool = (function revert$poolsv3$parse_pool(pool,eth_price){
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool));
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool));
var decimals0 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool));
var decimals1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool));
var network = (1);
var token0 = (new module$node_modules$$uniswap$sdk_core$dist$index.Token(network,address0,decimals0));
var token1 = (new module$node_modules$$uniswap$sdk_core$dist$index.Token(network,address1,decimals1));
var fee_string = new cljs.core.Keyword(null,"feeTier","feeTier",-1737875574).cljs$core$IFn$_invoke$arity$1(pool);
var address = clojure.string.lower_case(module$node_modules$$uniswap$v3_sdk$dist$index.computePoolAddress(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"factoryAddress","factoryAddress",1568101838),module$node_modules$$uniswap$v3_sdk$dist$index.FACTORY_ADDRESS,new cljs.core.Keyword(null,"tokenA","tokenA",-1480387418),token0,new cljs.core.Keyword(null,"tokenB","tokenB",333774851),token1,new cljs.core.Keyword(null,"fee","fee",-1196176319),fee_string], null))));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"sqrt-price","sqrt-price",-1731016639),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),new cljs.core.Keyword(null,"token1","token1",879943564),new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new cljs.core.Keyword(null,"reserve-total-usd","reserve-total-usd",-339625931),new cljs.core.Keyword(null,"reserve-total-eth","reserve-total-eth",-485298823),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"fee-tier","fee-tier",546230876),new cljs.core.Keyword(null,"lp-count","lp-count",1513569853)],[revert.utils.bn(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"sqrtPrice","sqrtPrice",905790111).cljs$core$IFn$_invoke$arity$1(pool)),address,(eth_price * revert.utils.bn(new cljs.core.Keyword(null,"totalValueLockedToken0","totalValueLockedToken0",-878873748).cljs$core$IFn$_invoke$arity$1(pool))),(eth_price * revert.utils.bn(new cljs.core.Keyword(null,"totalValueLockedToken1","totalValueLockedToken1",1697351403).cljs$core$IFn$_invoke$arity$1(pool))),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"totalValueLockedUSD","totalValueLockedUSD",-271240856).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"totalValueLockedETH","totalValueLockedETH",1200882834).cljs$core$IFn$_invoke$arity$1(pool)),"uniswapv3",fee_string,parseInt(new cljs.core.Keyword(null,"liquidityProviderCount","liquidityProviderCount",191637931).cljs$core$IFn$_invoke$arity$1(pool))]);
});
revert.poolsv3.pool_by_attrs = (function revert$poolsv3$pool_by_attrs(pools,token0,token1,fee_tier){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (pool){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool),token0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool),token1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fee-tier","fee-tier",546230876).cljs$core$IFn$_invoke$arity$1(pool),fee_tier)));
}),cljs.core.vals(pools)));
});
revert.poolsv3.parse_liqevent_tx = (function revert$poolsv3$parse_liqevent_tx(liqevent){
var block_number = parseInt(new cljs.core.Keyword(null,"blockNumber","blockNumber",-1330951343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transaction","transaction",1777321997).cljs$core$IFn$_invoke$arity$1(liqevent)));
var tx_hash = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transaction","transaction",1777321997).cljs$core$IFn$_invoke$arity$1(liqevent));
var type_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(liqevent),new cljs.core.Keyword(null,"mints","mints",-278208376)))?new cljs.core.Keyword(null,"deposits","deposits",-1544951296):new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911));
var token0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(liqevent)));
var token1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(liqevent)));
var token0_qty = revert.utils.bn(new cljs.core.Keyword(null,"amount0","amount0",1622313786).cljs$core$IFn$_invoke$arity$1(liqevent));
var token1_qty = revert.utils.bn(new cljs.core.Keyword(null,"amount1","amount1",-1116934036).cljs$core$IFn$_invoke$arity$1(liqevent));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,type_key,cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty]),new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),revert.utils.bn(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(liqevent))]);
});
revert.poolsv3.parse_position = (function revert$poolsv3$parse_position(liqevent,v3state){
var pools = new cljs.core.Keyword(null,"v3pools","v3pools",1464957779).cljs$core$IFn$_invoke$arity$1(v3state);
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var fee_tier = new cljs.core.Keyword(null,"feeTier","feeTier",-1737875574).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(liqevent));
var token0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(liqevent)));
var token1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(liqevent)));
var pool = revert.poolsv3.pool_by_attrs(pools,token0,token1,fee_tier);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.Keyword(null,"nft-id","nft-id",148413416),new cljs.core.Keyword(null,"burns","burns",1858509067),new cljs.core.Keyword(null,"token1","token1",879943564),new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"blocks-ts","blocks-ts",-981959410),new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352),new cljs.core.Keyword(null,"fee-tier","fee-tier",546230876),new cljs.core.Keyword(null,"collects","collects",1088780924),new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802)],[new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(pool),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(liqevent),new cljs.core.Keyword(null,"mints","mints",-278208376)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.poolsv3.parse_liqevent_tx(liqevent)], null):cljs.core.PersistentVector.EMPTY),null,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(liqevent),new cljs.core.Keyword(null,"burns","burns",1858509067)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.poolsv3.parse_liqevent_tx(liqevent)], null):cljs.core.PersistentVector.EMPTY),token1,token0,cljs.core.PersistentArrayMap.EMPTY,revert.utils.bn("0.0"),revert.utils.bn(new cljs.core.Keyword(null,"tickUpper","tickUpper",-1307777002).cljs$core$IFn$_invoke$arity$1(liqevent)),fee_tier,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(liqevent),new cljs.core.Keyword(null,"collects","collects",1088780924)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.poolsv3.parse_liqevent_tx(liqevent)], null):cljs.core.PersistentVector.EMPTY),revert.utils.bn(new cljs.core.Keyword(null,"tickLower","tickLower",756932642).cljs$core$IFn$_invoke$arity$1(liqevent))]);
});
revert.poolsv3.position_reducer = (function revert$poolsv3$position_reducer(positions,p){
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115303_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__115303_SHARP_),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p));
}),positions));
var matched_liquidity = (cljs.core.truth_(matched_position)?new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(matched_position):revert.utils.bn("0.0"));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115304_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__115304_SHARP_),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p));
}),positions);
var new_mints = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(matched_position),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(p));
var new_burns = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(matched_position),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(p));
var liquidity_minted = (((cljs.core.count(new_mints) > (0)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new_mints)):revert.utils.bn("0.0"));
var liquidity_burned = (((cljs.core.count(new_burns) > (0)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new_burns)):revert.utils.bn("0.0"));
var new_pos = cljs.core.into.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),bignumber.core._(liquidity_minted,liquidity_burned),new cljs.core.Keyword(null,"mints","mints",-278208376),new_mints,new cljs.core.Keyword(null,"burns","burns",1858509067),new_burns,new cljs.core.Keyword(null,"collects","collects",1088780924),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collects","collects",1088780924).cljs$core$IFn$_invoke$arity$1(matched_position),new cljs.core.Keyword(null,"collects","collects",1088780924).cljs$core$IFn$_invoke$arity$1(p))], null));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(other_positions,new_pos);
});
revert.poolsv3.parse_liqevents = (function revert$poolsv3$parse_liqevents(mint_liqevents,burn_liqevents){
var eth_price = revert.utils.bn(new cljs.core.Keyword(null,"ethPriceUSD","ethPriceUSD",735950242).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"bundles","bundles",-448186937).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(mint_liqevents)))));
var mints = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115305_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__115305_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mints","mints",-278208376)], null));
}),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(mint_liqevents)));
var burns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115306_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__115306_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"burns","burns",1858509067)], null));
}),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(burn_liqevents)));
var events = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(mints,burns);
var tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115307_SHARP_){
return revert.poolsv3.parse_token(p1__115307_SHARP_,eth_price);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564)),new cljs.core.Keyword(null,"pool","pool",-1814211613)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0)));
var tokens_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (address){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115308_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__115308_SHARP_),address);
}),tokens))]);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),tokens))));
var pools = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__115309_SHARP_){
return revert.poolsv3.parse_pool(p1__115309_SHARP_,eth_price);
}),new cljs.core.Keyword(null,"pool","pool",-1814211613)),events);
var pools_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (address){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115310_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__115310_SHARP_),address);
}),pools))]);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),pools))));
var v3positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115311_SHARP_){
return revert.poolsv3.parse_position(p1__115311_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v3pools","v3pools",1464957779),pools_SINGLEQUOTE_,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens_SINGLEQUOTE_], null));
}),events);
var v3positions_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(revert.poolsv3.position_reducer,cljs.core.PersistentVector.EMPTY,v3positions);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens_SINGLEQUOTE_,new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),v3positions_SINGLEQUOTE_,new cljs.core.Keyword(null,"v3pools","v3pools",1464957779),pools_SINGLEQUOTE_], null);
});
revert.poolsv3.nft_reducer = (function revert$poolsv3$nft_reducer(positions,nft_event){
var events_type = (function (){var G__115316 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(nft_event);
var G__115316__$1 = (((G__115316 instanceof cljs.core.Keyword))?G__115316.fqn:null);
switch (G__115316__$1) {
case "increase-liquidity":
return new cljs.core.Keyword(null,"mints","mints",-278208376);

break;
case "decrease-liquidity":
return new cljs.core.Keyword(null,"burns","burns",1858509067);

break;
case "collect-liquidity":
return new cljs.core.Keyword(null,"collects","collects",1088780924);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__115316__$1)].join('')));

}
})();
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115312_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),(events_type.cljs$core$IFn$_invoke$arity$1 ? events_type.cljs$core$IFn$_invoke$arity$1(p1__115312_SHARP_) : events_type.call(null,p1__115312_SHARP_)))),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event));
}),positions));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115313_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),(events_type.cljs$core$IFn$_invoke$arity$1 ? events_type.cljs$core$IFn$_invoke$arity$1(p1__115313_SHARP_) : events_type.call(null,p1__115313_SHARP_)))),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event))));
}),positions);
var possible_events = (events_type.cljs$core$IFn$_invoke$arity$1 ? events_type.cljs$core$IFn$_invoke$arity$1(matched_position) : events_type.call(null,matched_position));
var matched_event = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115314_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__115314_SHARP_),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event));
}),possible_events));
var other_events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115315_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__115315_SHARP_),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event));
}),possible_events);
var updated_event = cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched_event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(nft_event),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(nft_event)], null));
var seperated_position = (cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(matched_position)))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,bignumber.core._EQ_)(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(nft_event),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(matched_position)):false))?matched_position:null);
var updated_position = cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched_position,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"nft-id","nft-id",148413416),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(nft_event),events_type,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(other_events,updated_event)]));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(other_positions,updated_position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seperated_position], 0)));
});
revert.poolsv3.merge_nfts = (function revert$poolsv3$merge_nfts(v3state,nft_events){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var positions_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(revert.poolsv3.nft_reducer,positions,nft_events);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v3state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),positions_SINGLEQUOTE_], null));
});
revert.poolsv3.make_position_collect = (function revert$poolsv3$make_position_collect(tx){
var parsed_event = revert.poolsv3.mgmt_iface.parseLog(tx);
var tx_args = parsed_event.args;
var tx_hash = tx.transactionHash;
var block_number = tx.blockNumber;
var amount0 = tx_args.amount0;
var amount1 = tx_args.amount1;
var token_id = tx_args.tokenId;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nft-id","nft-id",148413416),revert.utils.ebn__GT_bn(token_id,(0)),new cljs.core.Keyword(null,"amount0","amount0",1622313786),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount0),new cljs.core.Keyword(null,"amount1","amount1",-1116934036),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount1),new cljs.core.Keyword(null,"block-number","block-number",-935510961),parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_number)),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash], null);
});
revert.poolsv3.make_gaspaid_map = (function revert$poolsv3$make_gaspaid_map(txr){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(txr);
var txhash = tx.hash;
var block_number = tx.blockNumber;
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = revert.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = revert.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash], null);
});
revert.poolsv3._LT_nft_collects = (function revert$poolsv3$_LT_nft_collects(nft_id){
var user_filter = (function (){var G__115318 = nft_id.toNumber();
return (revert.poolsv3.mgmt_contract.filters.Collect.cljs$core$IFn$_invoke$arity$1 ? revert.poolsv3.mgmt_contract.filters.Collect.cljs$core$IFn$_invoke$arity$1(G__115318) : revert.poolsv3.mgmt_contract.filters.Collect.call(null,G__115318));
})();
var _ = (user_filter.fromBlock = (12369621));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115346){
var state_val_115347 = (state_115346[(1)]);
if((state_val_115347 === (1))){
var inst_115319 = cljs.core.deref(revert.ethereum.provider);
var inst_115320 = inst_115319.getLogs(user_filter);
var inst_115321 = cljs.core.async.interop.p__GT_c(inst_115320);
var state_115346__$1 = state_115346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115346__$1,(2),inst_115321);
} else {
if((state_val_115347 === (2))){
var inst_115323 = (state_115346[(7)]);
var inst_115323__$1 = (state_115346[(2)]);
var inst_115324 = (inst_115323__$1 instanceof cljs.core.ExceptionInfo);
var inst_115325 = cljs.core.ex_data(inst_115323__$1);
var inst_115326 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_115325);
var inst_115327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_115326,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_115328 = ((inst_115324) && (inst_115327));
var state_115346__$1 = (function (){var statearr_115348 = state_115346;
(statearr_115348[(7)] = inst_115323__$1);

return statearr_115348;
})();
if(cljs.core.truth_(inst_115328)){
var statearr_115349_115545 = state_115346__$1;
(statearr_115349_115545[(1)] = (3));

} else {
var statearr_115350_115546 = state_115346__$1;
(statearr_115350_115546[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115347 === (3))){
var inst_115323 = (state_115346[(7)]);
var inst_115330 = (function(){throw inst_115323})();
var state_115346__$1 = state_115346;
var statearr_115351_115547 = state_115346__$1;
(statearr_115351_115547[(2)] = inst_115330);

(statearr_115351_115547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115347 === (4))){
var inst_115323 = (state_115346[(7)]);
var state_115346__$1 = state_115346;
var statearr_115352_115548 = state_115346__$1;
(statearr_115352_115548[(2)] = inst_115323);

(statearr_115352_115548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115347 === (5))){
var inst_115333 = (state_115346[(8)]);
var inst_115334 = (state_115346[(9)]);
var inst_115335 = (state_115346[(10)]);
var inst_115333__$1 = (state_115346[(2)]);
var inst_115334__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.poolsv3.make_position_collect,inst_115333__$1);
var inst_115335__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_115334__$1);
var inst_115336 = revert.ethereum._LT_get_trxs(inst_115335__$1);
var state_115346__$1 = (function (){var statearr_115353 = state_115346;
(statearr_115353[(8)] = inst_115333__$1);

(statearr_115353[(9)] = inst_115334__$1);

(statearr_115353[(10)] = inst_115335__$1);

return statearr_115353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115346__$1,(6),inst_115336);
} else {
if((state_val_115347 === (6))){
var inst_115333 = (state_115346[(8)]);
var inst_115334 = (state_115346[(9)]);
var inst_115335 = (state_115346[(10)]);
var inst_115338 = (state_115346[(2)]);
var inst_115339 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.poolsv3.make_gaspaid_map,inst_115338);
var inst_115340 = (function (){var filtered_txs = inst_115333;
var parsed_collects = inst_115334;
var tx_hashes = inst_115335;
var collect_txrs = inst_115338;
var collect_gases = inst_115339;
return (function (p1__115317_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__115317_SHARP_);
});
})();
var inst_115341 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_115334,inst_115339);
var inst_115342 = cljs.core.group_by(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_115341);
var inst_115343 = cljs.core.vals(inst_115342);
var inst_115344 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_115340,inst_115343);
var state_115346__$1 = state_115346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115346__$1,inst_115344);
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
var revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____0 = (function (){
var statearr_115354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_115354[(0)] = revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__);

(statearr_115354[(1)] = (1));

return statearr_115354;
});
var revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____1 = (function (state_115346){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115346);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115355){var ex__52189__auto__ = e115355;
var statearr_115356_115549 = state_115346;
(statearr_115356_115549[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115346[(4)]))){
var statearr_115357_115550 = state_115346;
(statearr_115357_115550[(1)] = cljs.core.first((state_115346[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115551 = state_115346;
state_115346 = G__115551;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__ = function(state_115346){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____1.call(this,state_115346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115358 = f__52209__auto__();
(statearr_115358[(6)] = c__52208__auto__);

return statearr_115358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_multi_nft_collects = (function revert$poolsv3$_LT_multi_nft_collects(nft_ids){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (nft_id){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115363){
var state_val_115364 = (state_115363[(1)]);
if((state_val_115364 === (1))){
var inst_115359 = revert.poolsv3._LT_nft_collects(nft_id);
var state_115363__$1 = state_115363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115363__$1,(2),inst_115359);
} else {
if((state_val_115364 === (2))){
var inst_115361 = (state_115363[(2)]);
var state_115363__$1 = state_115363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115363__$1,inst_115361);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____0 = (function (){
var statearr_115365 = [null,null,null,null,null,null,null];
(statearr_115365[(0)] = revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__);

(statearr_115365[(1)] = (1));

return statearr_115365;
});
var revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____1 = (function (state_115363){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115363);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115366){var ex__52189__auto__ = e115366;
var statearr_115367_115552 = state_115363;
(statearr_115367_115552[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115363[(4)]))){
var statearr_115368_115553 = state_115363;
(statearr_115368_115553[(1)] = cljs.core.first((state_115363[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115554 = state_115363;
state_115363 = G__115554;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__ = function(state_115363){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____1.call(this,state_115363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115369 = f__52209__auto__();
(statearr_115369[(6)] = c__52208__auto__);

return statearr_115369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),nft_ids)));
});
revert.poolsv3.collects_reducer = (function revert$poolsv3$collects_reducer(v3state,collect_event){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115370_SHARP_){
return bignumber.core._EQ_(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__115370_SHARP_),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(collect_event));
}),positions));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115371_SHARP_){
return cljs.core.not(bignumber.core._EQ_(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__115371_SHARP_),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(collect_event)));
}),positions);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(matched_position);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(matched_position);
var decimals0 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token0));
var decimals1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token1));
var qty0 = revert.utils.ebn__GT_bn(new cljs.core.Keyword(null,"amount0","amount0",1622313786).cljs$core$IFn$_invoke$arity$1(collect_event),decimals0);
var qty1 = revert.utils.ebn__GT_bn(new cljs.core.Keyword(null,"amount1","amount1",-1116934036).cljs$core$IFn$_invoke$arity$1(collect_event),decimals1);
var collect = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(collect_event),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(collect_event),new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(collect_event),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(collect_event),new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,qty0,token1,qty1])], null);
var updated_collects = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collects","collects",1088780924).cljs$core$IFn$_invoke$arity$1(matched_position),collect);
var updated_position = cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collects","collects",1088780924),updated_collects], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v3state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(other_positions,updated_position)], null));
});
revert.poolsv3.merge_collects = (function revert$poolsv3$merge_collects(v3state,nft_collects){
var v3state_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(revert.poolsv3.collects_reducer,v3state,nft_collects);
return v3state_SINGLEQUOTE_;
});
revert.poolsv3.position_price_lower = (function revert$poolsv3$position_price_lower(position){
try{return revert.utils.bn(position.token0PriceLower.toSignificant((8)));
}catch (e115372){if((e115372 instanceof Error)){
var err = e115372;
console.log("Error parsing position lower price:",err);

return revert.utils.bn("0.0");
} else {
throw e115372;

}
}});
revert.poolsv3.position_price_upper = (function revert$poolsv3$position_price_upper(position){
try{return revert.utils.bn(position.token0PriceUpper.toSignificant((8)));
}catch (e115373){if((e115373 instanceof Error)){
var err = e115373;
console.log("Error parsing position lower price:",err);

return revert.utils.bn("0.0");
} else {
throw e115373;

}
}});
revert.poolsv3.posstate_reducer = (function revert$poolsv3$posstate_reducer(v3state,position_state){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var pools = new cljs.core.Keyword(null,"v3pools","v3pools",1464957779).cljs$core$IFn$_invoke$arity$1(v3state);
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115374_SHARP_){
return bignumber.core._EQ_(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__115374_SHARP_),revert.utils.bn(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(position_state)));
}),positions));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115375_SHARP_){
return cljs.core.not(bignumber.core._EQ_(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__115375_SHARP_),revert.utils.bn(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(position_state))));
}),positions);
var token0 = clojure.string.lower_case(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(position_state));
var token1 = clojure.string.lower_case(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(position_state));
var decimals0 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token0));
var decimals1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token1));
var network = (1);
var token0_obj = (new module$node_modules$$uniswap$sdk_core$dist$index.Token(network,token0,decimals0));
var token1_obj = (new module$node_modules$$uniswap$sdk_core$dist$index.Token(network,token1,decimals1));
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(position_state));
var fee_tier = parseInt(new cljs.core.Keyword(null,"fee-tier","fee-tier",546230876).cljs$core$IFn$_invoke$arity$1(pool));
var sq_price = revert.utils.ethpu(new cljs.core.Keyword(null,"sqrt-price","sqrt-price",-1731016639).cljs$core$IFn$_invoke$arity$1(pool).toFixed(),(0));
var liquidity = revert.utils.ethpu(new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(pool).toFixed(),(0));
var tick = parseInt(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(pool).toFixed());
var pool_obj = (new module$node_modules$$uniswap$v3_sdk$dist$index.Pool(token0_obj,token1_obj,fee_tier,sq_price,liquidity,tick));
var tick_lower = parseInt(new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802).cljs$core$IFn$_invoke$arity$1(position_state));
var tick_upper = parseInt(new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352).cljs$core$IFn$_invoke$arity$1(position_state));
var my_pos = (new module$node_modules$$uniswap$v3_sdk$dist$index.Position(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pool","pool",-1814211613),pool_obj,new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),revert.utils.ebn__GT_bn(revert.utils.ethpu(new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(position_state),(0)),(0)),new cljs.core.Keyword(null,"tickLower","tickLower",756932642),tick_lower,new cljs.core.Keyword(null,"tickUpper","tickUpper",-1307777002),tick_upper], null))));
var amount0 = revert.utils.bn(my_pos.amount0.toFixed());
var amount1 = revert.utils.bn(my_pos.amount1.toFixed());
var token0_pl = revert.poolsv3.position_price_lower(my_pos);
var token0_pu = revert.poolsv3.position_price_upper(my_pos);
var parsed_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fee-growth-outside-upper1","fee-growth-outside-upper1",-1725464316),new cljs.core.Keyword(null,"tokens-owed0","tokens-owed0",1609677029),new cljs.core.Keyword(null,"price-upper","price-upper",-1844247162),new cljs.core.Keyword(null,"fee-growth-inside1","fee-growth-inside1",-722056951),new cljs.core.Keyword(null,"fee-growth-outside-upper0","fee-growth-outside-upper0",14620457),new cljs.core.Keyword(null,"amount1","amount1",-1116934036),new cljs.core.Keyword(null,"fee-growth-outside-lower1","fee-growth-outside-lower1",486201393),new cljs.core.Keyword(null,"fee-growth-outside-lower0","fee-growth-outside-lower0",2049801266),new cljs.core.Keyword(null,"tokens-owed1","tokens-owed1",900233334),new cljs.core.Keyword(null,"amount0","amount0",1622313786),new cljs.core.Keyword(null,"price-lower","price-lower",632338749),new cljs.core.Keyword(null,"fee-growth-inside0","fee-growth-inside0",1830362270)],[new cljs.core.Keyword(null,"fee-growth-outside-upper1","fee-growth-outside-upper1",-1725464316).cljs$core$IFn$_invoke$arity$1(position_state),revert.utils.ebn__GT_bn(new cljs.core.Keyword(null,"tokens-owed0","tokens-owed0",1609677029).cljs$core$IFn$_invoke$arity$1(position_state),decimals0),token0_pu,new cljs.core.Keyword(null,"fee-growth-inside1-last","fee-growth-inside1-last",2132365702).cljs$core$IFn$_invoke$arity$1(position_state),new cljs.core.Keyword(null,"fee-growth-outside-upper0","fee-growth-outside-upper0",14620457).cljs$core$IFn$_invoke$arity$1(position_state),amount1,new cljs.core.Keyword(null,"fee-growth-outside-lower1","fee-growth-outside-lower1",486201393).cljs$core$IFn$_invoke$arity$1(position_state),new cljs.core.Keyword(null,"fee-growth-outside-lower0","fee-growth-outside-lower0",2049801266).cljs$core$IFn$_invoke$arity$1(position_state),revert.utils.ebn__GT_bn(new cljs.core.Keyword(null,"tokens-owed1","tokens-owed1",900233334).cljs$core$IFn$_invoke$arity$1(position_state),decimals1),amount0,token0_pl,new cljs.core.Keyword(null,"fee-growth-inside0-last","fee-growth-inside0-last",-2019822480).cljs$core$IFn$_invoke$arity$1(position_state)]);
var updated_position = cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched_position,parsed_state);
var pool_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fee-growth-global0","fee-growth-global0",-1829140606),new cljs.core.Keyword(null,"fee-growth-global0","fee-growth-global0",-1829140606).cljs$core$IFn$_invoke$arity$1(position_state),new cljs.core.Keyword(null,"fee-growth-global1","fee-growth-global1",-2132052347),new cljs.core.Keyword(null,"fee-growth-global1","fee-growth-global1",-2132052347).cljs$core$IFn$_invoke$arity$1(position_state)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v3state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v3pools","v3pools",1464957779),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(pool_SINGLEQUOTE_),pool_SINGLEQUOTE_),new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(other_positions,updated_position)], null));
});
revert.poolsv3.merge_position_states = (function revert$poolsv3$merge_position_states(v3state,nft_positions){
var v3state_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(revert.poolsv3.posstate_reducer,v3state,nft_positions);
return v3state_SINGLEQUOTE_;
});
revert.poolsv3.token_fees = (function revert$poolsv3$token_fees(fee_growth_global,tokens_owed,fee_growth_outside_lower,fee_growth_outside_upper,fee_growth_inside_last,current_tick,liquidity,tick_lower,tick_upper){
var fee_growth_below = (cljs.core.truth_(bignumber.core._GT__EQ_(current_tick,tick_lower))?fee_growth_outside_lower:bignumber.core._(fee_growth_global,fee_growth_outside_lower));
var fee_growth_above = (cljs.core.truth_(bignumber.core._LT_(current_tick,tick_upper))?fee_growth_outside_upper:bignumber.core._(fee_growth_global,fee_growth_outside_upper));
var fee_growth_inside = bignumber.core._(bignumber.core._(fee_growth_global,fee_growth_below),fee_growth_above);
var current_fee_growth = bignumber.core._(fee_growth_inside,fee_growth_inside_last);
return bignumber.core._PLUS_(tokens_owed,bignumber.core._SLASH_(bignumber.core._STAR_(current_fee_growth,liquidity),revert.utils.bn(Math.pow((2),(128)))));
});
revert.poolsv3.counterfactual_fees = (function revert$poolsv3$counterfactual_fees(v3state,nft_id){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var nft_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115376_SHARP_){
return bignumber.core._EQ_(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__115376_SHARP_),nft_id);
}),positions));
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v3pools","v3pools",1464957779).cljs$core$IFn$_invoke$arity$1(v3state),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(nft_position));
var current_tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(pool);
var liquidity = new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(nft_position);
var tick_lower = new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802).cljs$core$IFn$_invoke$arity$1(nft_position);
var tick_upper = new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_global0 = new cljs.core.Keyword(null,"fee-growth-global0","fee-growth-global0",-1829140606).cljs$core$IFn$_invoke$arity$1(pool);
var tokens_owed0 = new cljs.core.Keyword(null,"tokens-owed0","tokens-owed0",1609677029).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_outside_lower0 = new cljs.core.Keyword(null,"fee-growth-outside-lower0","fee-growth-outside-lower0",2049801266).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_outside_upper0 = new cljs.core.Keyword(null,"fee-growth-outside-upper0","fee-growth-outside-upper0",14620457).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_inside_last0 = new cljs.core.Keyword(null,"fee-growth-inside0","fee-growth-inside0",1830362270).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_global1 = new cljs.core.Keyword(null,"fee-growth-global1","fee-growth-global1",-2132052347).cljs$core$IFn$_invoke$arity$1(pool);
var tokens_owed1 = new cljs.core.Keyword(null,"tokens-owed1","tokens-owed1",900233334).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_outside_lower1 = new cljs.core.Keyword(null,"fee-growth-outside-lower1","fee-growth-outside-lower1",486201393).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_outside_upper1 = new cljs.core.Keyword(null,"fee-growth-outside-upper1","fee-growth-outside-upper1",-1725464316).cljs$core$IFn$_invoke$arity$1(nft_position);
var fee_growth_inside_last1 = new cljs.core.Keyword(null,"fee-growth-inside1","fee-growth-inside1",-722056951).cljs$core$IFn$_invoke$arity$1(nft_position);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(nft_position),revert.poolsv3.token_fees(fee_growth_global0,tokens_owed0,fee_growth_outside_lower0,fee_growth_outside_upper0,fee_growth_inside_last0,current_tick,liquidity,tick_lower,tick_upper),new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(nft_position),revert.poolsv3.token_fees(fee_growth_global1,tokens_owed1,fee_growth_outside_lower1,fee_growth_outside_upper1,fee_growth_inside_last1,current_tick,liquidity,tick_lower,tick_upper)]);
});
revert.poolsv3.merge_pending_fees = (function revert$poolsv3$merge_pending_fees(v3state){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var positions_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
var fees = revert.poolsv3.counterfactual_fees(v3state,new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pending-fees0","pending-fees0",-179091945),cljs.core.get.cljs$core$IFn$_invoke$arity$2(fees,new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"pending-fees1","pending-fees1",-295544402),cljs.core.get.cljs$core$IFn$_invoke$arity$2(fees,new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(p))], null));
}),positions);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v3state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),positions_SINGLEQUOTE_], null));
});
revert.poolsv3._LT_pools_dailys = (function revert$poolsv3$_LT_pools_dailys(v3state){
var pools = cljs.core.vals(new cljs.core.Keyword(null,"v3pools","v3pools",1464957779).cljs$core$IFn$_invoke$arity$1(v3state));
var pool_attrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564))(p);
}),pools);
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__115377){
var vec__115378 = p__115377;
var paddress = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115378,(0),null);
var t0address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115378,(1),null);
var t1address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115378,(2),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115385){
var state_val_115386 = (state_115385[(1)]);
if((state_val_115386 === (1))){
var inst_115381 = revert.thegraph._LT_v3_pool_days(paddress,t0address,t1address);
var state_115385__$1 = state_115385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115385__$1,(2),inst_115381);
} else {
if((state_val_115386 === (2))){
var inst_115383 = (state_115385[(2)]);
var state_115385__$1 = state_115385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115385__$1,inst_115383);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____0 = (function (){
var statearr_115387 = [null,null,null,null,null,null,null];
(statearr_115387[(0)] = revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__);

(statearr_115387[(1)] = (1));

return statearr_115387;
});
var revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____1 = (function (state_115385){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115385);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115388){var ex__52189__auto__ = e115388;
var statearr_115389_115555 = state_115385;
(statearr_115389_115555[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115385[(4)]))){
var statearr_115390_115556 = state_115385;
(statearr_115390_115556[(1)] = cljs.core.first((state_115385[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115557 = state_115385;
state_115385 = G__115557;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__ = function(state_115385){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____1.call(this,state_115385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115391 = f__52209__auto__();
(statearr_115391[(6)] = c__52208__auto__);

return statearr_115391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),pool_attrs)));
});
revert.poolsv3.make_history_snapshots = (function revert$poolsv3$make_history_snapshots(pool_dailys){
var pool_dailys_SINGLEQUOTE_ = cljs.core.butlast(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),pool_dailys)));
var init_date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.last(pool_dailys_SINGLEQUOTE_));
var init_price0_usd = new cljs.core.Keyword(null,"token0-price-usd","token0-price-usd",294696273).cljs$core$IFn$_invoke$arity$1(cljs.core.last(pool_dailys_SINGLEQUOTE_));
var init_price1_usd = new cljs.core.Keyword(null,"token1-price-usd","token1-price-usd",1599608260).cljs$core$IFn$_invoke$arity$1(cljs.core.last(pool_dailys_SINGLEQUOTE_));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(d,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"price-divergence","price-divergence",-163938709),revert.utils.price_divergence(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_price0_usd,new cljs.core.Keyword(null,"token0-price-usd","token0-price-usd",294696273).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_price1_usd,new cljs.core.Keyword(null,"token1-price-usd","token1-price-usd",1599608260).cljs$core$IFn$_invoke$arity$1(d)], null)),new cljs.core.Keyword(null,"vol-res-ratio","vol-res-ratio",-1354774035),bignumber.core._SLASH_(new cljs.core.Keyword(null,"volume-usd","volume-usd",-871740385).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394).cljs$core$IFn$_invoke$arity$1(d))], null));
}),pool_dailys_SINGLEQUOTE_);
});
revert.poolsv3.merge_pool_dailys = (function revert$poolsv3$merge_pool_dailys(v3state,pool_dailys){
var pools_grouped = cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword(null,"address","address",559499426),pool_dailys));
var pool_dailys_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.poolsv3.make_history_snapshots,pools_grouped);
var pool_hists = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(v)),v]);
}),pool_dailys_SINGLEQUOTE_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v3state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3pool-histories","v3pool-histories",2004929655),pool_hists], null));
});
revert.poolsv3._LT_pool_histories = (function revert$poolsv3$_LT_pool_histories(pool_address,days){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115408){
var state_val_115409 = (state_115408[(1)]);
if((state_val_115409 === (1))){
var inst_115395 = revert.thegraph._LT_v3_pool_tokens(pool_address);
var state_115408__$1 = state_115408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115408__$1,(2),inst_115395);
} else {
if((state_val_115409 === (2))){
var inst_115397 = (state_115408[(2)]);
var inst_115398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_115397,(0),null);
var inst_115399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_115397,(1),null);
var inst_115400 = revert.thegraph._LT_v3_pool_days.cljs$core$IFn$_invoke$arity$variadic(pool_address,inst_115398,inst_115399,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"days","days",-1394072564),days], 0));
var state_115408__$1 = state_115408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115408__$1,(3),inst_115400);
} else {
if((state_val_115409 === (3))){
var inst_115402 = (state_115408[(2)]);
var inst_115403 = revert.poolsv3.make_history_snapshots(inst_115402);
var inst_115404 = [pool_address];
var inst_115405 = [inst_115403];
var inst_115406 = cljs.core.PersistentHashMap.fromArrays(inst_115404,inst_115405);
var state_115408__$1 = state_115408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115408__$1,inst_115406);
} else {
return null;
}
}
}
});
return (function() {
var revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____0 = (function (){
var statearr_115410 = [null,null,null,null,null,null,null];
(statearr_115410[(0)] = revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__);

(statearr_115410[(1)] = (1));

return statearr_115410;
});
var revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____1 = (function (state_115408){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115408);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115411){var ex__52189__auto__ = e115411;
var statearr_115412_115558 = state_115408;
(statearr_115412_115558[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115408[(4)]))){
var statearr_115413_115559 = state_115408;
(statearr_115413_115559[(1)] = cljs.core.first((state_115408[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115560 = state_115408;
state_115408 = G__115560;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__ = function(state_115408){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____1.call(this,state_115408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115414 = f__52209__auto__();
(statearr_115414[(6)] = c__52208__auto__);

return statearr_115414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_fetch_account_state = (function revert$poolsv3$_LT_fetch_account_state(account_or_ens){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_115468){
var state_val_115469 = (state_115468[(1)]);
if((state_val_115469 === (7))){
var inst_115430 = (state_115468[(7)]);
var inst_115433 = (state_115468[(2)]);
var inst_115434 = revert.thegraph._LT_v3_user_burns(inst_115430);
var state_115468__$1 = (function (){var statearr_115470 = state_115468;
(statearr_115470[(8)] = inst_115433);

return statearr_115470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(8),inst_115434);
} else {
if((state_val_115469 === (1))){
var state_115468__$1 = state_115468;
var statearr_115471_115561 = state_115468__$1;
(statearr_115471_115561[(2)] = null);

(statearr_115471_115561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115469 === (4))){
var inst_115415 = (state_115468[(2)]);
var inst_115416 = console.log("Error fetching v3 state:",inst_115415);
var inst_115417 = [new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.Keyword(null,"v3pools","v3pools",1464957779)];
var inst_115418 = cljs.core.PersistentVector.EMPTY;
var inst_115419 = cljs.core.PersistentHashMap.EMPTY;
var inst_115420 = cljs.core.PersistentHashMap.EMPTY;
var inst_115421 = [inst_115418,inst_115419,inst_115420];
var inst_115422 = cljs.core.PersistentHashMap.fromArrays(inst_115417,inst_115421);
var state_115468__$1 = (function (){var statearr_115472 = state_115468;
(statearr_115472[(9)] = inst_115416);

return statearr_115472;
})();
var statearr_115473_115562 = state_115468__$1;
(statearr_115473_115562[(2)] = inst_115422);

(statearr_115473_115562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115469 === (6))){
var inst_115430 = (state_115468[(7)]);
var inst_115430__$1 = (state_115468[(2)]);
var inst_115431 = revert.thegraph._LT_v3_user_mints(inst_115430__$1);
var state_115468__$1 = (function (){var statearr_115474 = state_115468;
(statearr_115474[(7)] = inst_115430__$1);

return statearr_115474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(7),inst_115431);
} else {
if((state_val_115469 === (3))){
var inst_115466 = (state_115468[(2)]);
var state_115468__$1 = state_115468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115468__$1,inst_115466);
} else {
if((state_val_115469 === (12))){
var inst_115459 = (state_115468[(10)]);
var inst_115462 = (state_115468[(2)]);
var inst_115463 = revert.poolsv3.merge_pool_dailys(inst_115459,inst_115462);
var _ = (function (){var statearr_115475 = state_115468;
(statearr_115475[(4)] = cljs.core.rest((state_115468[(4)])));

return statearr_115475;
})();
var state_115468__$1 = state_115468;
var statearr_115476_115563 = state_115468__$1;
(statearr_115476_115563[(2)] = inst_115463);

(statearr_115476_115563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115469 === (2))){
var _ = (function (){var statearr_115477 = state_115468;
(statearr_115477[(4)] = cljs.core.cons((5),(state_115468[(4)])));

return statearr_115477;
})();
var inst_115428 = revert.ethereum._LT_resolve_address(account_or_ens);
var state_115468__$1 = state_115468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(6),inst_115428);
} else {
if((state_val_115469 === (11))){
var inst_115459 = (state_115468[(10)]);
var inst_115454 = (state_115468[(11)]);
var inst_115457 = (state_115468[(2)]);
var inst_115458 = revert.poolsv3.merge_position_states(inst_115454,inst_115457);
var inst_115459__$1 = revert.poolsv3.merge_pending_fees(inst_115458);
var inst_115460 = revert.poolsv3._LT_pools_dailys(inst_115459__$1);
var state_115468__$1 = (function (){var statearr_115479 = state_115468;
(statearr_115479[(10)] = inst_115459__$1);

return statearr_115479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(12),inst_115460);
} else {
if((state_val_115469 === (9))){
var inst_115437 = (state_115468[(12)]);
var inst_115450 = (state_115468[(13)]);
var inst_115448 = (state_115468[(14)]);
var inst_115447 = (state_115468[(2)]);
var inst_115448__$1 = revert.poolsv3.merge_nfts(inst_115437,inst_115447);
var inst_115449 = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(inst_115448__$1);
var inst_115450__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416),inst_115449);
var inst_115451 = revert.poolsv3._LT_multi_nft_collects(inst_115450__$1);
var state_115468__$1 = (function (){var statearr_115480 = state_115468;
(statearr_115480[(13)] = inst_115450__$1);

(statearr_115480[(14)] = inst_115448__$1);

return statearr_115480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(10),inst_115451);
} else {
if((state_val_115469 === (5))){
var _ = (function (){var statearr_115481 = state_115468;
(statearr_115481[(4)] = cljs.core.rest((state_115468[(4)])));

return statearr_115481;
})();
var state_115468__$1 = state_115468;
var ex115478 = (state_115468__$1[(2)]);
var statearr_115482_115564 = state_115468__$1;
(statearr_115482_115564[(5)] = ex115478);


if((ex115478 instanceof Error)){
var statearr_115483_115565 = state_115468__$1;
(statearr_115483_115565[(1)] = (4));

(statearr_115483_115565[(5)] = null);

} else {
throw ex115478;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115469 === (10))){
var inst_115454 = (state_115468[(11)]);
var inst_115450 = (state_115468[(13)]);
var inst_115448 = (state_115468[(14)]);
var inst_115453 = (state_115468[(2)]);
var inst_115454__$1 = revert.poolsv3.merge_collects(inst_115448,inst_115453);
var inst_115455 = revert.poolsv3._LT_token_positions(inst_115454__$1,inst_115450);
var state_115468__$1 = (function (){var statearr_115484 = state_115468;
(statearr_115484[(11)] = inst_115454__$1);

return statearr_115484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(11),inst_115455);
} else {
if((state_val_115469 === (8))){
var inst_115437 = (state_115468[(12)]);
var inst_115433 = (state_115468[(8)]);
var inst_115436 = (state_115468[(2)]);
var inst_115437__$1 = revert.poolsv3.parse_liqevents(inst_115433,inst_115436);
var inst_115438 = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(inst_115437__$1);
var inst_115439 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"mints","mints",-278208376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_115438], 0));
var inst_115440 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_115439);
var inst_115441 = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(inst_115437__$1);
var inst_115442 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"burns","burns",1858509067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_115441], 0));
var inst_115443 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_115442);
var inst_115444 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_115440,inst_115443);
var inst_115445 = revert.poolsv3._LT_get_nft_events(inst_115444);
var state_115468__$1 = (function (){var statearr_115485 = state_115468;
(statearr_115485[(12)] = inst_115437__$1);

return statearr_115485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115468__$1,(9),inst_115445);
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
});
return (function() {
var revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____0 = (function (){
var statearr_115486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_115486[(0)] = revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__);

(statearr_115486[(1)] = (1));

return statearr_115486;
});
var revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____1 = (function (state_115468){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_115468);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e115487){var ex__52189__auto__ = e115487;
var statearr_115488_115566 = state_115468;
(statearr_115488_115566[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_115468[(4)]))){
var statearr_115489_115567 = state_115468;
(statearr_115489_115567[(1)] = cljs.core.first((state_115468[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115568 = state_115468;
state_115468 = G__115568;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__ = function(state_115468){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____1.call(this,state_115468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_115490 = f__52209__auto__();
(statearr_115490[(6)] = c__52208__auto__);

return statearr_115490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.poolsv3.js.map
