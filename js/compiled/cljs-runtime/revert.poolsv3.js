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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_140788){
var state_val_140789 = (state_140788[(1)]);
if((state_val_140789 === (1))){
var inst_140772 = revert.poolsv3.mgmt_contract.balanceOf(account);
var inst_140773 = cljs.core.async.interop.p__GT_c(inst_140772);
var state_140788__$1 = state_140788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_140788__$1,(2),inst_140773);
} else {
if((state_val_140789 === (2))){
var inst_140775 = (state_140788[(7)]);
var inst_140775__$1 = (state_140788[(2)]);
var inst_140776 = (inst_140775__$1 instanceof cljs.core.ExceptionInfo);
var inst_140777 = cljs.core.ex_data(inst_140775__$1);
var inst_140778 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140777);
var inst_140779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140778,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140780 = ((inst_140776) && (inst_140779));
var state_140788__$1 = (function (){var statearr_140790 = state_140788;
(statearr_140790[(7)] = inst_140775__$1);

return statearr_140790;
})();
if(cljs.core.truth_(inst_140780)){
var statearr_140791_141250 = state_140788__$1;
(statearr_140791_141250[(1)] = (3));

} else {
var statearr_140792_141251 = state_140788__$1;
(statearr_140792_141251[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140789 === (3))){
var inst_140775 = (state_140788[(7)]);
var inst_140782 = (function(){throw inst_140775})();
var state_140788__$1 = state_140788;
var statearr_140793_141252 = state_140788__$1;
(statearr_140793_141252[(2)] = inst_140782);

(statearr_140793_141252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140789 === (4))){
var inst_140775 = (state_140788[(7)]);
var state_140788__$1 = state_140788;
var statearr_140794_141253 = state_140788__$1;
(statearr_140794_141253[(2)] = inst_140775);

(statearr_140794_141253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140789 === (5))){
var inst_140785 = (state_140788[(2)]);
var inst_140786 = revert.utils.ebn__GT_bn(inst_140785,(0));
var state_140788__$1 = state_140788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_140788__$1,inst_140786);
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
var statearr_140795 = [null,null,null,null,null,null,null,null];
(statearr_140795[(0)] = revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__);

(statearr_140795[(1)] = (1));

return statearr_140795;
});
var revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____1 = (function (state_140788){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_140788);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e140796){var ex__52189__auto__ = e140796;
var statearr_140797_141254 = state_140788;
(statearr_140797_141254[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_140788[(4)]))){
var statearr_140798_141255 = state_140788;
(statearr_140798_141255[(1)] = cljs.core.first((state_140788[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141256 = state_140788;
state_140788 = G__141256;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__ = function(state_140788){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____1.call(this,state_140788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_account_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_140799 = f__52209__auto__();
(statearr_140799[(6)] = c__52208__auto__);

return statearr_140799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_account_token_by_index = (function revert$poolsv3$_LT_account_token_by_index(account,i){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_140816){
var state_val_140817 = (state_140816[(1)]);
if((state_val_140817 === (1))){
var inst_140800 = revert.poolsv3.mgmt_contract.tokenOfOwnerByIndex(account,i);
var inst_140801 = cljs.core.async.interop.p__GT_c(inst_140800);
var state_140816__$1 = state_140816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_140816__$1,(2),inst_140801);
} else {
if((state_val_140817 === (2))){
var inst_140803 = (state_140816[(7)]);
var inst_140803__$1 = (state_140816[(2)]);
var inst_140804 = (inst_140803__$1 instanceof cljs.core.ExceptionInfo);
var inst_140805 = cljs.core.ex_data(inst_140803__$1);
var inst_140806 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140805);
var inst_140807 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140806,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140808 = ((inst_140804) && (inst_140807));
var state_140816__$1 = (function (){var statearr_140818 = state_140816;
(statearr_140818[(7)] = inst_140803__$1);

return statearr_140818;
})();
if(cljs.core.truth_(inst_140808)){
var statearr_140819_141273 = state_140816__$1;
(statearr_140819_141273[(1)] = (3));

} else {
var statearr_140820_141274 = state_140816__$1;
(statearr_140820_141274[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140817 === (3))){
var inst_140803 = (state_140816[(7)]);
var inst_140810 = (function(){throw inst_140803})();
var state_140816__$1 = state_140816;
var statearr_140821_141275 = state_140816__$1;
(statearr_140821_141275[(2)] = inst_140810);

(statearr_140821_141275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140817 === (4))){
var inst_140803 = (state_140816[(7)]);
var state_140816__$1 = state_140816;
var statearr_140822_141276 = state_140816__$1;
(statearr_140822_141276[(2)] = inst_140803);

(statearr_140822_141276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140817 === (5))){
var inst_140813 = (state_140816[(2)]);
var inst_140814 = revert.utils.ebn__GT_bn(inst_140813,(0));
var state_140816__$1 = state_140816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_140816__$1,inst_140814);
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
var statearr_140823 = [null,null,null,null,null,null,null,null];
(statearr_140823[(0)] = revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__);

(statearr_140823[(1)] = (1));

return statearr_140823;
});
var revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____1 = (function (state_140816){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_140816);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e140824){var ex__52189__auto__ = e140824;
var statearr_140825_141280 = state_140816;
(statearr_140825_141280[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_140816[(4)]))){
var statearr_140826_141281 = state_140816;
(statearr_140826_141281[(1)] = cljs.core.first((state_140816[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141282 = state_140816;
state_140816 = G__141282;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__ = function(state_140816){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____1.call(this,state_140816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_account_token_by_index_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_140827 = f__52209__auto__();
(statearr_140827[(6)] = c__52208__auto__);

return statearr_140827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_account_token_ids = (function revert$poolsv3$_LT_account_token_ids(account,n){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_140832){
var state_val_140833 = (state_140832[(1)]);
if((state_val_140833 === (1))){
var inst_140828 = revert.poolsv3._LT_account_token_by_index(account,i);
var state_140832__$1 = state_140832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_140832__$1,(2),inst_140828);
} else {
if((state_val_140833 === (2))){
var inst_140830 = (state_140832[(2)]);
var state_140832__$1 = state_140832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_140832__$1,inst_140830);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____0 = (function (){
var statearr_140834 = [null,null,null,null,null,null,null];
(statearr_140834[(0)] = revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__);

(statearr_140834[(1)] = (1));

return statearr_140834;
});
var revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____1 = (function (state_140832){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_140832);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e140835){var ex__52189__auto__ = e140835;
var statearr_140836_141288 = state_140832;
(statearr_140836_141288[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_140832[(4)]))){
var statearr_140837_141290 = state_140832;
(statearr_140837_141290[(1)] = cljs.core.first((state_140832[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141291 = state_140832;
state_140832 = G__141291;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__ = function(state_140832){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____1.call(this,state_140832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_account_token_ids_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_140838 = f__52209__auto__();
(statearr_140838[(6)] = c__52208__auto__);

return statearr_140838;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_140854){
var state_val_140855 = (state_140854[(1)]);
if((state_val_140855 === (1))){
var inst_140839 = pool_state.feeGrowthGlobal0X128();
var inst_140840 = cljs.core.async.interop.p__GT_c(inst_140839);
var state_140854__$1 = state_140854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_140854__$1,(2),inst_140840);
} else {
if((state_val_140855 === (2))){
var inst_140842 = (state_140854[(7)]);
var inst_140842__$1 = (state_140854[(2)]);
var inst_140843 = (inst_140842__$1 instanceof cljs.core.ExceptionInfo);
var inst_140844 = cljs.core.ex_data(inst_140842__$1);
var inst_140845 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140844);
var inst_140846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140845,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140847 = ((inst_140843) && (inst_140846));
var state_140854__$1 = (function (){var statearr_140856 = state_140854;
(statearr_140856[(7)] = inst_140842__$1);

return statearr_140856;
})();
if(cljs.core.truth_(inst_140847)){
var statearr_140857_141298 = state_140854__$1;
(statearr_140857_141298[(1)] = (3));

} else {
var statearr_140858_141299 = state_140854__$1;
(statearr_140858_141299[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140855 === (3))){
var inst_140842 = (state_140854[(7)]);
var inst_140849 = (function(){throw inst_140842})();
var state_140854__$1 = state_140854;
var statearr_140859_141310 = state_140854__$1;
(statearr_140859_141310[(2)] = inst_140849);

(statearr_140859_141310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140855 === (4))){
var inst_140842 = (state_140854[(7)]);
var state_140854__$1 = state_140854;
var statearr_140860_141323 = state_140854__$1;
(statearr_140860_141323[(2)] = inst_140842);

(statearr_140860_141323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140855 === (5))){
var inst_140852 = (state_140854[(2)]);
var state_140854__$1 = state_140854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_140854__$1,inst_140852);
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
var statearr_140861 = [null,null,null,null,null,null,null,null];
(statearr_140861[(0)] = revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__);

(statearr_140861[(1)] = (1));

return statearr_140861;
});
var revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____1 = (function (state_140854){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_140854);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e140862){var ex__52189__auto__ = e140862;
var statearr_140863_141350 = state_140854;
(statearr_140863_141350[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_140854[(4)]))){
var statearr_140864_141351 = state_140854;
(statearr_140864_141351[(1)] = cljs.core.first((state_140854[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141352 = state_140854;
state_140854 = G__141352;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__ = function(state_140854){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____1.call(this,state_140854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_fee_growth_global0_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_140865 = f__52209__auto__();
(statearr_140865[(6)] = c__52208__auto__);

return statearr_140865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_fee_growth_global1 = (function revert$poolsv3$_LT_fee_growth_global1(pool_state){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_140881){
var state_val_140882 = (state_140881[(1)]);
if((state_val_140882 === (1))){
var inst_140866 = pool_state.feeGrowthGlobal1X128();
var inst_140867 = cljs.core.async.interop.p__GT_c(inst_140866);
var state_140881__$1 = state_140881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_140881__$1,(2),inst_140867);
} else {
if((state_val_140882 === (2))){
var inst_140869 = (state_140881[(7)]);
var inst_140869__$1 = (state_140881[(2)]);
var inst_140870 = (inst_140869__$1 instanceof cljs.core.ExceptionInfo);
var inst_140871 = cljs.core.ex_data(inst_140869__$1);
var inst_140872 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140871);
var inst_140873 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140872,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140874 = ((inst_140870) && (inst_140873));
var state_140881__$1 = (function (){var statearr_140883 = state_140881;
(statearr_140883[(7)] = inst_140869__$1);

return statearr_140883;
})();
if(cljs.core.truth_(inst_140874)){
var statearr_140884_141356 = state_140881__$1;
(statearr_140884_141356[(1)] = (3));

} else {
var statearr_140885_141357 = state_140881__$1;
(statearr_140885_141357[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140882 === (3))){
var inst_140869 = (state_140881[(7)]);
var inst_140876 = (function(){throw inst_140869})();
var state_140881__$1 = state_140881;
var statearr_140886_141360 = state_140881__$1;
(statearr_140886_141360[(2)] = inst_140876);

(statearr_140886_141360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140882 === (4))){
var inst_140869 = (state_140881[(7)]);
var state_140881__$1 = state_140881;
var statearr_140887_141361 = state_140881__$1;
(statearr_140887_141361[(2)] = inst_140869);

(statearr_140887_141361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_140882 === (5))){
var inst_140879 = (state_140881[(2)]);
var state_140881__$1 = state_140881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_140881__$1,inst_140879);
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
var statearr_140888 = [null,null,null,null,null,null,null,null];
(statearr_140888[(0)] = revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__);

(statearr_140888[(1)] = (1));

return statearr_140888;
});
var revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____1 = (function (state_140881){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_140881);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e140889){var ex__52189__auto__ = e140889;
var statearr_140890_141363 = state_140881;
(statearr_140890_141363[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_140881[(4)]))){
var statearr_140891_141365 = state_140881;
(statearr_140891_141365[(1)] = cljs.core.first((state_140881[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141366 = state_140881;
state_140881 = G__141366;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__ = function(state_140881){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____1.call(this,state_140881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_fee_growth_global1_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_140892 = f__52209__auto__();
(statearr_140892[(6)] = c__52208__auto__);

return statearr_140892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_token_position = (function revert$poolsv3$_LT_token_position(v3state,token_id){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141004){
var state_val_141005 = (state_141004[(1)]);
if((state_val_141005 === (7))){
var inst_140927 = (state_141004[(7)]);
var inst_140917 = (state_141004[(8)]);
var inst_140907 = (state_141004[(9)]);
var inst_140938 = (state_141004[(2)]);
var inst_140939 = revert.utils.ebn__GT_bn(inst_140938,inst_140917);
var inst_140940 = inst_140907.tickLower;
var inst_140941 = inst_140940.toString();
var inst_140942 = inst_140927.ticks(inst_140941);
var inst_140943 = cljs.core.async.interop.p__GT_c(inst_140942);
var state_141004__$1 = (function (){var statearr_141006 = state_141004;
(statearr_141006[(10)] = inst_140939);

return statearr_141006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141004__$1,(8),inst_140943);
} else {
if((state_val_141005 === (1))){
var inst_140893 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_id);
var inst_140894 = revert.poolsv3.mgmt_contract.positions(inst_140893);
var inst_140895 = cljs.core.async.interop.p__GT_c(inst_140894);
var state_141004__$1 = state_141004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141004__$1,(2),inst_140895);
} else {
if((state_val_141005 === (4))){
var inst_140897 = (state_141004[(11)]);
var state_141004__$1 = state_141004;
var statearr_141007_141372 = state_141004__$1;
(statearr_141007_141372[(2)] = inst_140897);

(statearr_141007_141372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (15))){
var inst_140939 = (state_141004[(10)]);
var inst_140929 = (state_141004[(12)]);
var inst_140917 = (state_141004[(8)]);
var inst_140926 = (state_141004[(13)]);
var inst_140959 = (state_141004[(14)]);
var inst_140935 = (state_141004[(15)]);
var inst_140957 = (state_141004[(16)]);
var inst_140914 = (state_141004[(17)]);
var inst_140907 = (state_141004[(9)]);
var inst_140931 = (state_141004[(18)]);
var inst_140975 = (state_141004[(2)]);
var inst_140976 = revert.poolsv3.fee_growth_outside0(inst_140975);
var inst_140977 = revert.utils.ebn__GT_bn(inst_140976,inst_140914);
var inst_140978 = revert.poolsv3.fee_growth_outside1(inst_140975);
var inst_140979 = revert.utils.ebn__GT_bn(inst_140978,inst_140917);
var inst_140980 = [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"fee-growth-global0","fee-growth-global0",-1829140606),new cljs.core.Keyword(null,"fee-growth-outside-upper1","fee-growth-outside-upper1",-1725464316),new cljs.core.Keyword(null,"tokens-owed0","tokens-owed0",1609677029),new cljs.core.Keyword(null,"fee-growth-global1","fee-growth-global1",-2132052347),new cljs.core.Keyword(null,"fee-growth-inside1-last","fee-growth-inside1-last",2132365702),new cljs.core.Keyword(null,"feeGrowthInside0LastX128","feeGrowthInside0LastX128",-71710874),new cljs.core.Keyword(null,"nft-id","nft-id",148413416),new cljs.core.Keyword(null,"fee-growth-outside-upper0","fee-growth-outside-upper0",14620457),new cljs.core.Keyword(null,"token1","token1",879943564),new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"fee-growth-inside0-last","fee-growth-inside0-last",-2019822480),new cljs.core.Keyword(null,"fee-growth-outside-lower1","fee-growth-outside-lower1",486201393),new cljs.core.Keyword(null,"feeGrowthInside1LastX128","feeGrowthInside1LastX128",1778507921),new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new cljs.core.Keyword(null,"fee-growth-outside-lower0","fee-growth-outside-lower0",2049801266),new cljs.core.Keyword(null,"tokens-owed1","tokens-owed1",900233334),new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352),new cljs.core.Keyword(null,"fee-tier","fee-tier",546230876),new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802)];
var inst_140981 = revert.poolsv3.tokens0_owed(inst_140907);
var inst_140982 = inst_140981.toString();
var inst_140983 = revert.poolsv3.fee_growth_inside0(inst_140907);
var inst_140984 = inst_140983.toString();
var inst_140985 = token_id.toString();
var inst_140986 = inst_140907.token1;
var inst_140987 = inst_140907.token0;
var inst_140988 = revert.poolsv3.fee_growth_inside1(inst_140907);
var inst_140989 = inst_140988.toString();
var inst_140990 = inst_140907.liquidity;
var inst_140991 = inst_140990.toString();
var inst_140992 = revert.poolsv3.tokens1_owed(inst_140907);
var inst_140993 = inst_140992.toString();
var inst_140994 = inst_140907.operator;
var inst_140995 = inst_140907.tickUpper;
var inst_140996 = inst_140995.toString();
var inst_140997 = inst_140907.fee;
var inst_140998 = inst_140997.toString();
var inst_140999 = inst_140907.tickLower;
var inst_141000 = inst_140999.toString();
var inst_141001 = [inst_140926,inst_140935,inst_140979,inst_140982,inst_140939,inst_140931,inst_140984,inst_140985,inst_140977,inst_140986,inst_140987,inst_140929,inst_140959,inst_140989,inst_140991,inst_140957,inst_140993,inst_140994,inst_140996,inst_140998,inst_141000];
var inst_141002 = cljs.core.PersistentHashMap.fromArrays(inst_140980,inst_141001);
var state_141004__$1 = state_141004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141004__$1,inst_141002);
} else {
if((state_val_141005 === (13))){
var inst_140965 = (state_141004[(19)]);
var inst_140972 = (function(){throw inst_140965})();
var state_141004__$1 = state_141004;
var statearr_141008_141380 = state_141004__$1;
(statearr_141008_141380[(2)] = inst_140972);

(statearr_141008_141380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (6))){
var inst_140927 = (state_141004[(7)]);
var inst_140914 = (state_141004[(17)]);
var inst_140934 = (state_141004[(2)]);
var inst_140935 = revert.utils.ebn__GT_bn(inst_140934,inst_140914);
var inst_140936 = revert.poolsv3._LT_fee_growth_global1(inst_140927);
var state_141004__$1 = (function (){var statearr_141009 = state_141004;
(statearr_141009[(15)] = inst_140935);

return statearr_141009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141004__$1,(7),inst_140936);
} else {
if((state_val_141005 === (3))){
var inst_140897 = (state_141004[(11)]);
var inst_140904 = (function(){throw inst_140897})();
var state_141004__$1 = state_141004;
var statearr_141010_141382 = state_141004__$1;
(statearr_141010_141382[(2)] = inst_140904);

(statearr_141010_141382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (12))){
var inst_140965 = (state_141004[(19)]);
var inst_140965__$1 = (state_141004[(2)]);
var inst_140966 = (inst_140965__$1 instanceof cljs.core.ExceptionInfo);
var inst_140967 = cljs.core.ex_data(inst_140965__$1);
var inst_140968 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140967);
var inst_140969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140968,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140970 = ((inst_140966) && (inst_140969));
var state_141004__$1 = (function (){var statearr_141011 = state_141004;
(statearr_141011[(19)] = inst_140965__$1);

return statearr_141011;
})();
if(cljs.core.truth_(inst_140970)){
var statearr_141012_141384 = state_141004__$1;
(statearr_141012_141384[(1)] = (13));

} else {
var statearr_141013_141386 = state_141004__$1;
(statearr_141013_141386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (2))){
var inst_140897 = (state_141004[(11)]);
var inst_140897__$1 = (state_141004[(2)]);
var inst_140898 = (inst_140897__$1 instanceof cljs.core.ExceptionInfo);
var inst_140899 = cljs.core.ex_data(inst_140897__$1);
var inst_140900 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140899);
var inst_140901 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140900,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140902 = ((inst_140898) && (inst_140901));
var state_141004__$1 = (function (){var statearr_141014 = state_141004;
(statearr_141014[(11)] = inst_140897__$1);

return statearr_141014;
})();
if(cljs.core.truth_(inst_140902)){
var statearr_141015_141387 = state_141004__$1;
(statearr_141015_141387[(1)] = (3));

} else {
var statearr_141016_141388 = state_141004__$1;
(statearr_141016_141388[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (11))){
var inst_140927 = (state_141004[(7)]);
var inst_140917 = (state_141004[(8)]);
var inst_140914 = (state_141004[(17)]);
var inst_140907 = (state_141004[(9)]);
var inst_140955 = (state_141004[(2)]);
var inst_140956 = revert.poolsv3.fee_growth_outside0(inst_140955);
var inst_140957 = revert.utils.ebn__GT_bn(inst_140956,inst_140914);
var inst_140958 = revert.poolsv3.fee_growth_outside1(inst_140955);
var inst_140959 = revert.utils.ebn__GT_bn(inst_140958,inst_140917);
var inst_140960 = inst_140907.tickUpper;
var inst_140961 = inst_140960.toString();
var inst_140962 = inst_140927.ticks(inst_140961);
var inst_140963 = cljs.core.async.interop.p__GT_c(inst_140962);
var state_141004__$1 = (function (){var statearr_141017 = state_141004;
(statearr_141017[(14)] = inst_140959);

(statearr_141017[(16)] = inst_140957);

return statearr_141017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141004__$1,(12),inst_140963);
} else {
if((state_val_141005 === (9))){
var inst_140945 = (state_141004[(20)]);
var inst_140952 = (function(){throw inst_140945})();
var state_141004__$1 = state_141004;
var statearr_141018_141393 = state_141004__$1;
(statearr_141018_141393[(2)] = inst_140952);

(statearr_141018_141393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (5))){
var inst_140927 = (state_141004[(7)]);
var inst_140917 = (state_141004[(8)]);
var inst_140926 = (state_141004[(13)]);
var inst_140914 = (state_141004[(17)]);
var inst_140907 = (state_141004[(9)]);
var inst_140907__$1 = (state_141004[(2)]);
var inst_140908 = inst_140907__$1.token0;
var inst_140909 = clojure.string.lower_case(inst_140908);
var inst_140910 = inst_140907__$1.token1;
var inst_140911 = clojure.string.lower_case(inst_140910);
var inst_140912 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var inst_140913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_140912,inst_140909);
var inst_140914__$1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_140913);
var inst_140915 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var inst_140916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_140915,inst_140911);
var inst_140917__$1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_140916);
var inst_140918 = (new module$node_modules$$uniswap$sdk_core$dist$index.Token((1),inst_140909,inst_140914__$1));
var inst_140919 = (new module$node_modules$$uniswap$sdk_core$dist$index.Token((1),inst_140911,inst_140917__$1));
var inst_140920 = [new cljs.core.Keyword(null,"factoryAddress","factoryAddress",1568101838),new cljs.core.Keyword(null,"tokenA","tokenA",-1480387418),new cljs.core.Keyword(null,"tokenB","tokenB",333774851),new cljs.core.Keyword(null,"fee","fee",-1196176319)];
var inst_140921 = inst_140907__$1.fee;
var inst_140922 = [module$node_modules$$uniswap$v3_sdk$dist$index.FACTORY_ADDRESS,inst_140918,inst_140919,inst_140921];
var inst_140923 = cljs.core.PersistentHashMap.fromArrays(inst_140920,inst_140922);
var inst_140924 = cljs.core.clj__GT_js(inst_140923);
var inst_140925 = module$node_modules$$uniswap$v3_sdk$dist$index.computePoolAddress(inst_140924);
var inst_140926__$1 = clojure.string.lower_case(inst_140925);
var inst_140927__$1 = revert.ethereum.make_contract(revert.poolsv3.pstate_abi,inst_140926__$1);
var inst_140928 = revert.poolsv3.fee_growth_inside0(inst_140907__$1);
var inst_140929 = revert.utils.ebn__GT_bn(inst_140928,inst_140914__$1);
var inst_140930 = revert.poolsv3.fee_growth_inside1(inst_140907__$1);
var inst_140931 = revert.utils.ebn__GT_bn(inst_140930,inst_140917__$1);
var inst_140932 = revert.poolsv3._LT_fee_growth_global0(inst_140927__$1);
var state_141004__$1 = (function (){var statearr_141019 = state_141004;
(statearr_141019[(12)] = inst_140929);

(statearr_141019[(7)] = inst_140927__$1);

(statearr_141019[(8)] = inst_140917__$1);

(statearr_141019[(13)] = inst_140926__$1);

(statearr_141019[(17)] = inst_140914__$1);

(statearr_141019[(9)] = inst_140907__$1);

(statearr_141019[(18)] = inst_140931);

return statearr_141019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141004__$1,(6),inst_140932);
} else {
if((state_val_141005 === (14))){
var inst_140965 = (state_141004[(19)]);
var state_141004__$1 = state_141004;
var statearr_141020_141409 = state_141004__$1;
(statearr_141020_141409[(2)] = inst_140965);

(statearr_141020_141409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (10))){
var inst_140945 = (state_141004[(20)]);
var state_141004__$1 = state_141004;
var statearr_141021_141410 = state_141004__$1;
(statearr_141021_141410[(2)] = inst_140945);

(statearr_141021_141410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141005 === (8))){
var inst_140945 = (state_141004[(20)]);
var inst_140945__$1 = (state_141004[(2)]);
var inst_140946 = (inst_140945__$1 instanceof cljs.core.ExceptionInfo);
var inst_140947 = cljs.core.ex_data(inst_140945__$1);
var inst_140948 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_140947);
var inst_140949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_140948,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_140950 = ((inst_140946) && (inst_140949));
var state_141004__$1 = (function (){var statearr_141022 = state_141004;
(statearr_141022[(20)] = inst_140945__$1);

return statearr_141022;
})();
if(cljs.core.truth_(inst_140950)){
var statearr_141023_141411 = state_141004__$1;
(statearr_141023_141411[(1)] = (9));

} else {
var statearr_141024_141412 = state_141004__$1;
(statearr_141024_141412[(1)] = (10));

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
var statearr_141025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_141025[(0)] = revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__);

(statearr_141025[(1)] = (1));

return statearr_141025;
});
var revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____1 = (function (state_141004){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141004);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141026){var ex__52189__auto__ = e141026;
var statearr_141027_141416 = state_141004;
(statearr_141027_141416[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141004[(4)]))){
var statearr_141028_141417 = state_141004;
(statearr_141028_141417[(1)] = cljs.core.first((state_141004[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141419 = state_141004;
state_141004 = G__141419;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__ = function(state_141004){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____1.call(this,state_141004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_token_position_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_token_position_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141029 = f__52209__auto__();
(statearr_141029[(6)] = c__52208__auto__);

return statearr_141029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_token_positions = (function revert$poolsv3$_LT_token_positions(v3state,token_ids){
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (token_id){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141034){
var state_val_141035 = (state_141034[(1)]);
if((state_val_141035 === (1))){
var inst_141030 = revert.poolsv3._LT_token_position(v3state,token_id);
var state_141034__$1 = state_141034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141034__$1,(2),inst_141030);
} else {
if((state_val_141035 === (2))){
var inst_141032 = (state_141034[(2)]);
var state_141034__$1 = state_141034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141034__$1,inst_141032);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_141036 = [null,null,null,null,null,null,null];
(statearr_141036[(0)] = revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__);

(statearr_141036[(1)] = (1));

return statearr_141036;
});
var revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____1 = (function (state_141034){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141034);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141037){var ex__52189__auto__ = e141037;
var statearr_141038_141422 = state_141034;
(statearr_141038_141422[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141034[(4)]))){
var statearr_141039_141423 = state_141034;
(statearr_141039_141423[(1)] = cljs.core.first((state_141034[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141426 = state_141034;
state_141034 = G__141426;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__ = function(state_141034){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____1.call(this,state_141034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_token_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141040 = f__52209__auto__();
(statearr_141040[(6)] = c__52208__auto__);

return statearr_141040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),token_ids)));
});
revert.poolsv3.decode_liquidity_event = (function revert$poolsv3$decode_liquidity_event(event,token1_decimals,token2_decimals){
try{var event_obj = revert.poolsv3.mgmt_iface.parseLog(event);
var event_type = (function (){var G__141042 = event_obj.name;
switch (G__141042) {
case "IncreaseLiquidity":
return new cljs.core.Keyword(null,"increase-liquidity","increase-liquidity",-694970582);

break;
case "DecreaseLiquidity":
return new cljs.core.Keyword(null,"decrease-liquidity","decrease-liquidity",-1907326714);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__141042)].join('')));

}
})();
var args = event_obj.args;
var token_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(revert.utils.ebn__GT_bn(args.tokenId,(0)));
var amount0 = revert.utils.ebn__GT_bn(args.amount0,token1_decimals);
var amount1 = revert.utils.ebn__GT_bn(args.amount1,token2_decimals);
var liquidity = args.liquidity;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),event_type,new cljs.core.Keyword(null,"nft-id","nft-id",148413416),token_id,new cljs.core.Keyword(null,"amount0","amount0",1622313786),amount0,new cljs.core.Keyword(null,"amount1","amount1",-1116934036),amount1,new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),liquidity], null);
}catch (e141041){if((e141041 instanceof Error)){
var err = e141041;
return console.log("prob parsing liquidity event:",err);
} else {
throw e141041;

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
var event_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__141043_SHARP_){
return revert.poolsv3.decode_liquidity_event(p1__141043_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var gas_used_SINGLEQUOTE_ = bignumber.core._SLASH_(gas_used,revert.utils.bn(cljs.core.count(event_logs)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__141044_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__141044_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used_SINGLEQUOTE_], null));
}),event_logs);
});
revert.poolsv3._LT_get_nft_events = (function revert$poolsv3$_LT_get_nft_events(tx_hashes){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141053){
var state_val_141054 = (state_141053[(1)]);
if((state_val_141054 === (1))){
var inst_141046 = revert.ethereum._LT_get_trxs(tx_hashes);
var state_141053__$1 = state_141053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141053__$1,(2),inst_141046);
} else {
if((state_val_141054 === (2))){
var inst_141048 = (state_141053[(2)]);
var inst_141049 = (function (){var token0_decimals = (18);
var token1_decimals = (18);
var nft_txrs = inst_141048;
return (function (p1__141045_SHARP_){
return revert.poolsv3.make_liqevent_map(p1__141045_SHARP_,token0_decimals,token1_decimals);
});
})();
var inst_141050 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_141049,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_141048], 0));
var inst_141051 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_141050);
var state_141053__$1 = state_141053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141053__$1,inst_141051);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____0 = (function (){
var statearr_141055 = [null,null,null,null,null,null,null];
(statearr_141055[(0)] = revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__);

(statearr_141055[(1)] = (1));

return statearr_141055;
});
var revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____1 = (function (state_141053){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141053);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141056){var ex__52189__auto__ = e141056;
var statearr_141057_141448 = state_141053;
(statearr_141057_141448[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141053[(4)]))){
var statearr_141058_141449 = state_141053;
(statearr_141058_141449[(1)] = cljs.core.first((state_141053[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141451 = state_141053;
state_141053 = G__141451;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__ = function(state_141053){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____1.call(this,state_141053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_get_nft_events_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141059 = f__52209__auto__();
(statearr_141059[(6)] = c__52208__auto__);

return statearr_141059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3.parse_token = (function revert$poolsv3$parse_token(token,eth_price){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"decimals","decimals",1715096484),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token)),"xxx0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"))?(6):parseInt(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token))),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usd","usd",2103592073),bignumber.core._STAR_(revert.utils.bn(new cljs.core.Keyword(null,"derivedETH","derivedETH",919852426).cljs$core$IFn$_invoke$arity$1(token)),eth_price),new cljs.core.Keyword(null,"eth","eth",1381694970),revert.utils.bn(new cljs.core.Keyword(null,"derivedETH","derivedETH",919852426).cljs$core$IFn$_invoke$arity$1(token))], null)], null);
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
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141060_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__141060_SHARP_),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p))){
var and__4115__auto__ = bignumber.core._EQ_(new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802).cljs$core$IFn$_invoke$arity$1(p1__141060_SHARP_),new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802).cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(and__4115__auto__)){
return bignumber.core._EQ_(new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352).cljs$core$IFn$_invoke$arity$1(p1__141060_SHARP_),new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352).cljs$core$IFn$_invoke$arity$1(p));
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),positions));
var matched_liquidity = (cljs.core.truth_(matched_position)?new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(matched_position):revert.utils.bn("0.0"));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141061_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__141061_SHARP_),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p))) || (cljs.core.not(bignumber.core._EQ_(new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802).cljs$core$IFn$_invoke$arity$1(p1__141061_SHARP_),new cljs.core.Keyword(null,"tick-lower","tick-lower",-1708500802).cljs$core$IFn$_invoke$arity$1(p)))) || (cljs.core.not(bignumber.core._EQ_(new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352).cljs$core$IFn$_invoke$arity$1(p1__141061_SHARP_),new cljs.core.Keyword(null,"tick-upper","tick-upper",-926277352).cljs$core$IFn$_invoke$arity$1(p)))));
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
var mints = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__141062_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__141062_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mints","mints",-278208376)], null));
}),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(mint_liqevents)));
var burns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__141063_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__141063_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"burns","burns",1858509067)], null));
}),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(burn_liqevents)));
var events = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(mints,burns);
var tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__141064_SHARP_){
return revert.poolsv3.parse_token(p1__141064_SHARP_,eth_price);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564)),new cljs.core.Keyword(null,"pool","pool",-1814211613)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0)));
var tokens_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (address){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141065_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__141065_SHARP_),address);
}),tokens))]);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),tokens))));
var pools = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__141066_SHARP_){
return revert.poolsv3.parse_pool(p1__141066_SHARP_,eth_price);
}),new cljs.core.Keyword(null,"pool","pool",-1814211613)),events);
var pools_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (address){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141067_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__141067_SHARP_),address);
}),pools))]);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),pools))));
var v3positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__141068_SHARP_){
return revert.poolsv3.parse_position(p1__141068_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v3pools","v3pools",1464957779),pools_SINGLEQUOTE_,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens_SINGLEQUOTE_], null));
}),events);
var v3positions_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(revert.poolsv3.position_reducer,cljs.core.PersistentVector.EMPTY,v3positions);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens_SINGLEQUOTE_,new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),v3positions_SINGLEQUOTE_,new cljs.core.Keyword(null,"v3pools","v3pools",1464957779),pools_SINGLEQUOTE_], null);
});
revert.poolsv3.nft_reducer = (function revert$poolsv3$nft_reducer(positions,nft_event){
var events_type = (function (){var G__141073 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(nft_event);
var G__141073__$1 = (((G__141073 instanceof cljs.core.Keyword))?G__141073.fqn:null);
switch (G__141073__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__141073__$1)].join('')));

}
})();
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141069_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),(events_type.cljs$core$IFn$_invoke$arity$1 ? events_type.cljs$core$IFn$_invoke$arity$1(p1__141069_SHARP_) : events_type.call(null,p1__141069_SHARP_)))),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event));
}),positions));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141070_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),(events_type.cljs$core$IFn$_invoke$arity$1 ? events_type.cljs$core$IFn$_invoke$arity$1(p1__141070_SHARP_) : events_type.call(null,p1__141070_SHARP_)))),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event))));
}),positions);
var possible_events = (events_type.cljs$core$IFn$_invoke$arity$1 ? events_type.cljs$core$IFn$_invoke$arity$1(matched_position) : events_type.call(null,matched_position));
var matched_event = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141071_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__141071_SHARP_),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event));
}),possible_events));
var other_events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141072_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__141072_SHARP_),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(nft_event));
}),possible_events);
var updated_event = cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched_event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(nft_event),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(nft_event)], null));
var seperated_position = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(matched_position))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(nft_event),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(matched_position)))))?matched_position:null);
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
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nft-id","nft-id",148413416),cljs.core.str.cljs$core$IFn$_invoke$arity$1(revert.utils.ebn__GT_bn(token_id,(0))),new cljs.core.Keyword(null,"amount0","amount0",1622313786),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount0),new cljs.core.Keyword(null,"amount1","amount1",-1116934036),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount1),new cljs.core.Keyword(null,"block-number","block-number",-935510961),parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_number)),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash], null);
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
var user_filter = (function (){var G__141075 = nft_id.toNumber();
return (revert.poolsv3.mgmt_contract.filters.Collect.cljs$core$IFn$_invoke$arity$1 ? revert.poolsv3.mgmt_contract.filters.Collect.cljs$core$IFn$_invoke$arity$1(G__141075) : revert.poolsv3.mgmt_contract.filters.Collect.call(null,G__141075));
})();
var _ = (user_filter.fromBlock = (12369621));
var ___$1 = (user_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141103){
var state_val_141104 = (state_141103[(1)]);
if((state_val_141104 === (1))){
var inst_141076 = cljs.core.deref(revert.ethereum.provider);
var inst_141077 = inst_141076.getLogs(user_filter);
var inst_141078 = cljs.core.async.interop.p__GT_c(inst_141077);
var state_141103__$1 = state_141103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141103__$1,(2),inst_141078);
} else {
if((state_val_141104 === (2))){
var inst_141080 = (state_141103[(7)]);
var inst_141080__$1 = (state_141103[(2)]);
var inst_141081 = (inst_141080__$1 instanceof cljs.core.ExceptionInfo);
var inst_141082 = cljs.core.ex_data(inst_141080__$1);
var inst_141083 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_141082);
var inst_141084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_141083,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_141085 = ((inst_141081) && (inst_141084));
var state_141103__$1 = (function (){var statearr_141105 = state_141103;
(statearr_141105[(7)] = inst_141080__$1);

return statearr_141105;
})();
if(cljs.core.truth_(inst_141085)){
var statearr_141106_141516 = state_141103__$1;
(statearr_141106_141516[(1)] = (3));

} else {
var statearr_141107_141517 = state_141103__$1;
(statearr_141107_141517[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141104 === (3))){
var inst_141080 = (state_141103[(7)]);
var inst_141087 = (function(){throw inst_141080})();
var state_141103__$1 = state_141103;
var statearr_141108_141518 = state_141103__$1;
(statearr_141108_141518[(2)] = inst_141087);

(statearr_141108_141518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141104 === (4))){
var inst_141080 = (state_141103[(7)]);
var state_141103__$1 = state_141103;
var statearr_141109_141520 = state_141103__$1;
(statearr_141109_141520[(2)] = inst_141080);

(statearr_141109_141520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141104 === (5))){
var inst_141090 = (state_141103[(8)]);
var inst_141092 = (state_141103[(9)]);
var inst_141091 = (state_141103[(10)]);
var inst_141090__$1 = (state_141103[(2)]);
var inst_141091__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.poolsv3.make_position_collect,inst_141090__$1);
var inst_141092__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_141091__$1);
var inst_141093 = revert.ethereum._LT_get_trxs(inst_141092__$1);
var state_141103__$1 = (function (){var statearr_141110 = state_141103;
(statearr_141110[(8)] = inst_141090__$1);

(statearr_141110[(9)] = inst_141092__$1);

(statearr_141110[(10)] = inst_141091__$1);

return statearr_141110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141103__$1,(6),inst_141093);
} else {
if((state_val_141104 === (6))){
var inst_141090 = (state_141103[(8)]);
var inst_141092 = (state_141103[(9)]);
var inst_141091 = (state_141103[(10)]);
var inst_141095 = (state_141103[(2)]);
var inst_141096 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.poolsv3.make_gaspaid_map,inst_141095);
var inst_141097 = (function (){var filtered_txs = inst_141090;
var parsed_collects = inst_141091;
var tx_hashes = inst_141092;
var collect_txrs = inst_141095;
var collect_gases = inst_141096;
return (function (p1__141074_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__141074_SHARP_);
});
})();
var inst_141098 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_141091,inst_141096);
var inst_141099 = cljs.core.group_by(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_141098);
var inst_141100 = cljs.core.vals(inst_141099);
var inst_141101 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_141097,inst_141100);
var state_141103__$1 = state_141103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141103__$1,inst_141101);
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
var statearr_141111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_141111[(0)] = revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__);

(statearr_141111[(1)] = (1));

return statearr_141111;
});
var revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____1 = (function (state_141103){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141103);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141112){var ex__52189__auto__ = e141112;
var statearr_141113_141526 = state_141103;
(statearr_141113_141526[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141103[(4)]))){
var statearr_141114_141527 = state_141103;
(statearr_141114_141527[(1)] = cljs.core.first((state_141103[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141528 = state_141103;
state_141103 = G__141528;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__ = function(state_141103){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____1.call(this,state_141103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_nft_collects_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141115 = f__52209__auto__();
(statearr_141115[(6)] = c__52208__auto__);

return statearr_141115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_multi_nft_collects = (function revert$poolsv3$_LT_multi_nft_collects(nft_ids){
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (nft_id){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141120){
var state_val_141121 = (state_141120[(1)]);
if((state_val_141121 === (1))){
var inst_141116 = revert.poolsv3._LT_nft_collects(nft_id);
var state_141120__$1 = state_141120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141120__$1,(2),inst_141116);
} else {
if((state_val_141121 === (2))){
var inst_141118 = (state_141120[(2)]);
var state_141120__$1 = state_141120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141120__$1,inst_141118);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____0 = (function (){
var statearr_141122 = [null,null,null,null,null,null,null];
(statearr_141122[(0)] = revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__);

(statearr_141122[(1)] = (1));

return statearr_141122;
});
var revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____1 = (function (state_141120){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141120);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141123){var ex__52189__auto__ = e141123;
var statearr_141124_141534 = state_141120;
(statearr_141124_141534[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141120[(4)]))){
var statearr_141125_141535 = state_141120;
(statearr_141125_141535[(1)] = cljs.core.first((state_141120[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141536 = state_141120;
state_141120 = G__141536;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__ = function(state_141120){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____1.call(this,state_141120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_multi_nft_collects_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141126 = f__52209__auto__();
(statearr_141126[(6)] = c__52208__auto__);

return statearr_141126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),nft_ids)));
});
revert.poolsv3.collects_reducer = (function revert$poolsv3$collects_reducer(v3state,collect_event){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141127_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__141127_SHARP_),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(collect_event));
}),positions));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141128_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__141128_SHARP_),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(collect_event))));
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
}catch (e141129){if((e141129 instanceof Error)){
var err = e141129;
console.log("Error parsing position lower price:",err);

return revert.utils.bn("0.0");
} else {
throw e141129;

}
}});
revert.poolsv3.position_price_upper = (function revert$poolsv3$position_price_upper(position){
try{return revert.utils.bn(position.token0PriceUpper.toSignificant((8)));
}catch (e141130){if((e141130 instanceof Error)){
var err = e141130;
console.log("Error parsing position lower price:",err);

return revert.utils.bn("0.0");
} else {
throw e141130;

}
}});
revert.poolsv3.posstate_reducer = (function revert$poolsv3$posstate_reducer(v3state,position_state){
var positions = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state);
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state);
var pools = new cljs.core.Keyword(null,"v3pools","v3pools",1464957779).cljs$core$IFn$_invoke$arity$1(v3state);
var matched_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141131_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__141131_SHARP_),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(position_state));
}),positions));
var other_positions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141132_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__141132_SHARP_),new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(position_state))));
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
var nft_position = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__141133_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416).cljs$core$IFn$_invoke$arity$1(p1__141133_SHARP_),nft_id);
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
return cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__141134){
var vec__141135 = p__141134;
var paddress = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141135,(0),null);
var t0address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141135,(1),null);
var t1address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141135,(2),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141142){
var state_val_141143 = (state_141142[(1)]);
if((state_val_141143 === (1))){
var inst_141138 = revert.thegraph._LT_v3_pool_days(paddress,t0address,t1address);
var state_141142__$1 = state_141142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141142__$1,(2),inst_141138);
} else {
if((state_val_141143 === (2))){
var inst_141140 = (state_141142[(2)]);
var state_141142__$1 = state_141142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141142__$1,inst_141140);
} else {
return null;
}
}
});
return (function() {
var revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____0 = (function (){
var statearr_141144 = [null,null,null,null,null,null,null];
(statearr_141144[(0)] = revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__);

(statearr_141144[(1)] = (1));

return statearr_141144;
});
var revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____1 = (function (state_141142){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141142);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141145){var ex__52189__auto__ = e141145;
var statearr_141146_141556 = state_141142;
(statearr_141146_141556[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141142[(4)]))){
var statearr_141147_141557 = state_141142;
(statearr_141147_141557[(1)] = cljs.core.first((state_141142[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141558 = state_141142;
state_141142 = G__141558;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__ = function(state_141142){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____1.call(this,state_141142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_pools_dailys_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141148 = f__52209__auto__();
(statearr_141148[(6)] = c__52208__auto__);

return statearr_141148;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141165){
var state_val_141166 = (state_141165[(1)]);
if((state_val_141166 === (1))){
var inst_141152 = revert.thegraph._LT_v3_pool_tokens(pool_address);
var state_141165__$1 = state_141165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141165__$1,(2),inst_141152);
} else {
if((state_val_141166 === (2))){
var inst_141154 = (state_141165[(2)]);
var inst_141155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_141154,(0),null);
var inst_141156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_141154,(1),null);
var inst_141157 = revert.thegraph._LT_v3_pool_days.cljs$core$IFn$_invoke$arity$variadic(pool_address,inst_141155,inst_141156,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"days","days",-1394072564),days], 0));
var state_141165__$1 = state_141165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141165__$1,(3),inst_141157);
} else {
if((state_val_141166 === (3))){
var inst_141159 = (state_141165[(2)]);
var inst_141160 = revert.poolsv3.make_history_snapshots(inst_141159);
var inst_141161 = [pool_address];
var inst_141162 = [inst_141160];
var inst_141163 = cljs.core.PersistentHashMap.fromArrays(inst_141161,inst_141162);
var state_141165__$1 = state_141165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141165__$1,inst_141163);
} else {
return null;
}
}
}
});
return (function() {
var revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__ = null;
var revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____0 = (function (){
var statearr_141167 = [null,null,null,null,null,null,null];
(statearr_141167[(0)] = revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__);

(statearr_141167[(1)] = (1));

return statearr_141167;
});
var revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____1 = (function (state_141165){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141165);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141168){var ex__52189__auto__ = e141168;
var statearr_141169_141563 = state_141165;
(statearr_141169_141563[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141165[(4)]))){
var statearr_141170_141564 = state_141165;
(statearr_141170_141564[(1)] = cljs.core.first((state_141165[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141565 = state_141165;
state_141165 = G__141565;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__ = function(state_141165){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____1.call(this,state_141165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_pool_histories_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141171 = f__52209__auto__();
(statearr_141171[(6)] = c__52208__auto__);

return statearr_141171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.poolsv3._LT_fetch_account_state = (function revert$poolsv3$_LT_fetch_account_state(account_or_ens){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141227){
var state_val_141228 = (state_141227[(1)]);
if((state_val_141228 === (7))){
var inst_141187 = (state_141227[(7)]);
var inst_141190 = (state_141227[(2)]);
var inst_141191 = revert.thegraph._LT_v3_user_burns(inst_141187);
var state_141227__$1 = (function (){var statearr_141229 = state_141227;
(statearr_141229[(8)] = inst_141190);

return statearr_141229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(8),inst_141191);
} else {
if((state_val_141228 === (1))){
var state_141227__$1 = state_141227;
var statearr_141230_141569 = state_141227__$1;
(statearr_141230_141569[(2)] = null);

(statearr_141230_141569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141228 === (4))){
var inst_141172 = (state_141227[(2)]);
var inst_141173 = console.log("Error fetching v3 state:",inst_141172);
var inst_141174 = [new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.Keyword(null,"v3pools","v3pools",1464957779)];
var inst_141175 = cljs.core.PersistentVector.EMPTY;
var inst_141176 = cljs.core.PersistentHashMap.EMPTY;
var inst_141177 = cljs.core.PersistentHashMap.EMPTY;
var inst_141178 = [inst_141175,inst_141176,inst_141177];
var inst_141179 = cljs.core.PersistentHashMap.fromArrays(inst_141174,inst_141178);
var state_141227__$1 = (function (){var statearr_141231 = state_141227;
(statearr_141231[(9)] = inst_141173);

return statearr_141231;
})();
var statearr_141232_141570 = state_141227__$1;
(statearr_141232_141570[(2)] = inst_141179);

(statearr_141232_141570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141228 === (6))){
var inst_141187 = (state_141227[(7)]);
var inst_141187__$1 = (state_141227[(2)]);
var inst_141188 = revert.thegraph._LT_v3_user_mints(inst_141187__$1);
var state_141227__$1 = (function (){var statearr_141233 = state_141227;
(statearr_141233[(7)] = inst_141187__$1);

return statearr_141233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(7),inst_141188);
} else {
if((state_val_141228 === (3))){
var inst_141225 = (state_141227[(2)]);
var state_141227__$1 = state_141227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141227__$1,inst_141225);
} else {
if((state_val_141228 === (12))){
var inst_141216 = (state_141227[(10)]);
var inst_141219 = (state_141227[(2)]);
var inst_141220 = revert.poolsv3.merge_pool_dailys(inst_141216,inst_141219);
var inst_141221 = cljs.core.PersistentHashMap.EMPTY;
var inst_141222 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_141220,inst_141221);
var _ = (function (){var statearr_141234 = state_141227;
(statearr_141234[(4)] = cljs.core.rest((state_141227[(4)])));

return statearr_141234;
})();
var state_141227__$1 = state_141227;
var statearr_141235_141573 = state_141227__$1;
(statearr_141235_141573[(2)] = inst_141222);

(statearr_141235_141573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141228 === (2))){
var _ = (function (){var statearr_141236 = state_141227;
(statearr_141236[(4)] = cljs.core.cons((5),(state_141227[(4)])));

return statearr_141236;
})();
var inst_141185 = revert.ethereum._LT_resolve_address(account_or_ens);
var state_141227__$1 = state_141227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(6),inst_141185);
} else {
if((state_val_141228 === (11))){
var inst_141216 = (state_141227[(10)]);
var inst_141211 = (state_141227[(11)]);
var inst_141214 = (state_141227[(2)]);
var inst_141215 = revert.poolsv3.merge_position_states(inst_141211,inst_141214);
var inst_141216__$1 = revert.poolsv3.merge_pending_fees(inst_141215);
var inst_141217 = revert.poolsv3._LT_pools_dailys(inst_141216__$1);
var state_141227__$1 = (function (){var statearr_141238 = state_141227;
(statearr_141238[(10)] = inst_141216__$1);

return statearr_141238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(12),inst_141217);
} else {
if((state_val_141228 === (9))){
var inst_141194 = (state_141227[(12)]);
var inst_141205 = (state_141227[(13)]);
var inst_141207 = (state_141227[(14)]);
var inst_141204 = (state_141227[(2)]);
var inst_141205__$1 = revert.poolsv3.merge_nfts(inst_141194,inst_141204);
var inst_141206 = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(inst_141205__$1);
var inst_141207__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nft-id","nft-id",148413416),inst_141206);
var inst_141208 = revert.poolsv3._LT_multi_nft_collects(inst_141207__$1);
var state_141227__$1 = (function (){var statearr_141239 = state_141227;
(statearr_141239[(13)] = inst_141205__$1);

(statearr_141239[(14)] = inst_141207__$1);

return statearr_141239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(10),inst_141208);
} else {
if((state_val_141228 === (5))){
var _ = (function (){var statearr_141240 = state_141227;
(statearr_141240[(4)] = cljs.core.rest((state_141227[(4)])));

return statearr_141240;
})();
var state_141227__$1 = state_141227;
var ex141237 = (state_141227__$1[(2)]);
var statearr_141241_141578 = state_141227__$1;
(statearr_141241_141578[(5)] = ex141237);


if((ex141237 instanceof Error)){
var statearr_141242_141579 = state_141227__$1;
(statearr_141242_141579[(1)] = (4));

(statearr_141242_141579[(5)] = null);

} else {
throw ex141237;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141228 === (10))){
var inst_141205 = (state_141227[(13)]);
var inst_141211 = (state_141227[(11)]);
var inst_141207 = (state_141227[(14)]);
var inst_141210 = (state_141227[(2)]);
var inst_141211__$1 = revert.poolsv3.merge_collects(inst_141205,inst_141210);
var inst_141212 = revert.poolsv3._LT_token_positions(inst_141211__$1,inst_141207);
var state_141227__$1 = (function (){var statearr_141243 = state_141227;
(statearr_141243[(11)] = inst_141211__$1);

return statearr_141243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(11),inst_141212);
} else {
if((state_val_141228 === (8))){
var inst_141194 = (state_141227[(12)]);
var inst_141190 = (state_141227[(8)]);
var inst_141193 = (state_141227[(2)]);
var inst_141194__$1 = revert.poolsv3.parse_liqevents(inst_141190,inst_141193);
var inst_141195 = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(inst_141194__$1);
var inst_141196 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"mints","mints",-278208376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_141195], 0));
var inst_141197 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_141196);
var inst_141198 = new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(inst_141194__$1);
var inst_141199 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"burns","burns",1858509067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_141198], 0));
var inst_141200 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),inst_141199);
var inst_141201 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_141197,inst_141200);
var inst_141202 = revert.poolsv3._LT_get_nft_events(inst_141201);
var state_141227__$1 = (function (){var statearr_141244 = state_141227;
(statearr_141244[(12)] = inst_141194__$1);

return statearr_141244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141227__$1,(9),inst_141202);
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
var statearr_141245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_141245[(0)] = revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__);

(statearr_141245[(1)] = (1));

return statearr_141245;
});
var revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____1 = (function (state_141227){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141227);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141246){var ex__52189__auto__ = e141246;
var statearr_141247_141585 = state_141227;
(statearr_141247_141585[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141227[(4)]))){
var statearr_141248_141586 = state_141227;
(statearr_141248_141586[(1)] = cljs.core.first((state_141227[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141588 = state_141227;
state_141227 = G__141588;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__ = function(state_141227){
switch(arguments.length){
case 0:
return revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____1.call(this,state_141227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____0;
revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto____1;
return revert$poolsv3$_LT_fetch_account_state_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141249 = f__52209__auto__();
(statearr_141249[(6)] = c__52208__auto__);

return statearr_141249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.poolsv3.js.map
