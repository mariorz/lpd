goog.provide('revert.pools');
revert.pools._LT_get_reserves = (function revert$pools$_LT_get_reserves(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87229){
var state_val_87231 = (state_87229[(1)]);
if((state_val_87231 === (1))){
var inst_87197 = contract.getReserves();
var inst_87198 = cljs.core.async.interop.p__GT_c(inst_87197);
var state_87229__$1 = state_87229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87229__$1,(2),inst_87198);
} else {
if((state_val_87231 === (2))){
var inst_87200 = (state_87229[(7)]);
var inst_87200__$1 = (state_87229[(2)]);
var inst_87202 = (inst_87200__$1 instanceof cljs.core.ExceptionInfo);
var inst_87209 = cljs.core.ex_data(inst_87200__$1);
var inst_87210 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87209);
var inst_87211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87210,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87212 = ((inst_87202) && (inst_87211));
var state_87229__$1 = (function (){var statearr_87242 = state_87229;
(statearr_87242[(7)] = inst_87200__$1);

return statearr_87242;
})();
if(cljs.core.truth_(inst_87212)){
var statearr_87244_87739 = state_87229__$1;
(statearr_87244_87739[(1)] = (3));

} else {
var statearr_87246_87740 = state_87229__$1;
(statearr_87246_87740[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87231 === (3))){
var inst_87200 = (state_87229[(7)]);
var inst_87215 = (function(){throw inst_87200})();
var state_87229__$1 = state_87229;
var statearr_87249_87743 = state_87229__$1;
(statearr_87249_87743[(2)] = inst_87215);

(statearr_87249_87743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87231 === (4))){
var inst_87200 = (state_87229[(7)]);
var state_87229__$1 = state_87229;
var statearr_87255_87744 = state_87229__$1;
(statearr_87255_87744[(2)] = inst_87200);

(statearr_87255_87744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87231 === (5))){
var inst_87221 = (state_87229[(2)]);
var state_87229__$1 = state_87229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87229__$1,inst_87221);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$pools$_LT_get_reserves_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_reserves_$_state_machine__52186__auto____0 = (function (){
var statearr_87258 = [null,null,null,null,null,null,null,null];
(statearr_87258[(0)] = revert$pools$_LT_get_reserves_$_state_machine__52186__auto__);

(statearr_87258[(1)] = (1));

return statearr_87258;
});
var revert$pools$_LT_get_reserves_$_state_machine__52186__auto____1 = (function (state_87229){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87229);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87263){var ex__52189__auto__ = e87263;
var statearr_87265_87747 = state_87229;
(statearr_87265_87747[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87229[(4)]))){
var statearr_87268_87753 = state_87229;
(statearr_87268_87753[(1)] = cljs.core.first((state_87229[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87760 = state_87229;
state_87229 = G__87760;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_reserves_$_state_machine__52186__auto__ = function(state_87229){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_reserves_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_reserves_$_state_machine__52186__auto____1.call(this,state_87229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_reserves_$_state_machine__52186__auto____0;
revert$pools$_LT_get_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_reserves_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_reserves_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87270 = f__52209__auto__();
(statearr_87270[(6)] = c__52208__auto__);

return statearr_87270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_token0 = (function revert$pools$_LT_token0(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87300){
var state_val_87301 = (state_87300[(1)]);
if((state_val_87301 === (1))){
var inst_87285 = contract.token0();
var inst_87286 = cljs.core.async.interop.p__GT_c(inst_87285);
var state_87300__$1 = state_87300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87300__$1,(2),inst_87286);
} else {
if((state_val_87301 === (2))){
var inst_87288 = (state_87300[(7)]);
var inst_87288__$1 = (state_87300[(2)]);
var inst_87289 = (inst_87288__$1 instanceof cljs.core.ExceptionInfo);
var inst_87290 = cljs.core.ex_data(inst_87288__$1);
var inst_87291 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87290);
var inst_87292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87291,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87293 = ((inst_87289) && (inst_87292));
var state_87300__$1 = (function (){var statearr_87303 = state_87300;
(statearr_87303[(7)] = inst_87288__$1);

return statearr_87303;
})();
if(cljs.core.truth_(inst_87293)){
var statearr_87306_87773 = state_87300__$1;
(statearr_87306_87773[(1)] = (3));

} else {
var statearr_87307_87774 = state_87300__$1;
(statearr_87307_87774[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87301 === (3))){
var inst_87288 = (state_87300[(7)]);
var inst_87295 = (function(){throw inst_87288})();
var state_87300__$1 = state_87300;
var statearr_87309_87777 = state_87300__$1;
(statearr_87309_87777[(2)] = inst_87295);

(statearr_87309_87777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87301 === (4))){
var inst_87288 = (state_87300[(7)]);
var state_87300__$1 = state_87300;
var statearr_87310_87780 = state_87300__$1;
(statearr_87310_87780[(2)] = inst_87288);

(statearr_87310_87780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87301 === (5))){
var inst_87298 = (state_87300[(2)]);
var state_87300__$1 = state_87300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87300__$1,inst_87298);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$pools$_LT_token0_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_token0_$_state_machine__52186__auto____0 = (function (){
var statearr_87312 = [null,null,null,null,null,null,null,null];
(statearr_87312[(0)] = revert$pools$_LT_token0_$_state_machine__52186__auto__);

(statearr_87312[(1)] = (1));

return statearr_87312;
});
var revert$pools$_LT_token0_$_state_machine__52186__auto____1 = (function (state_87300){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87300);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87315){var ex__52189__auto__ = e87315;
var statearr_87316_87785 = state_87300;
(statearr_87316_87785[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87300[(4)]))){
var statearr_87318_87786 = state_87300;
(statearr_87318_87786[(1)] = cljs.core.first((state_87300[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87787 = state_87300;
state_87300 = G__87787;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_token0_$_state_machine__52186__auto__ = function(state_87300){
switch(arguments.length){
case 0:
return revert$pools$_LT_token0_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_token0_$_state_machine__52186__auto____1.call(this,state_87300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_token0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_token0_$_state_machine__52186__auto____0;
revert$pools$_LT_token0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_token0_$_state_machine__52186__auto____1;
return revert$pools$_LT_token0_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87329 = f__52209__auto__();
(statearr_87329[(6)] = c__52208__auto__);

return statearr_87329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_token1 = (function revert$pools$_LT_token1(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87364){
var state_val_87365 = (state_87364[(1)]);
if((state_val_87365 === (1))){
var inst_87346 = contract.token1();
var inst_87347 = cljs.core.async.interop.p__GT_c(inst_87346);
var state_87364__$1 = state_87364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87364__$1,(2),inst_87347);
} else {
if((state_val_87365 === (2))){
var inst_87349 = (state_87364[(7)]);
var inst_87349__$1 = (state_87364[(2)]);
var inst_87351 = (inst_87349__$1 instanceof cljs.core.ExceptionInfo);
var inst_87352 = cljs.core.ex_data(inst_87349__$1);
var inst_87353 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87352);
var inst_87354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87353,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87355 = ((inst_87351) && (inst_87354));
var state_87364__$1 = (function (){var statearr_87367 = state_87364;
(statearr_87367[(7)] = inst_87349__$1);

return statearr_87367;
})();
if(cljs.core.truth_(inst_87355)){
var statearr_87369_87795 = state_87364__$1;
(statearr_87369_87795[(1)] = (3));

} else {
var statearr_87371_87796 = state_87364__$1;
(statearr_87371_87796[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87365 === (3))){
var inst_87349 = (state_87364[(7)]);
var inst_87357 = (function(){throw inst_87349})();
var state_87364__$1 = state_87364;
var statearr_87375_87798 = state_87364__$1;
(statearr_87375_87798[(2)] = inst_87357);

(statearr_87375_87798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87365 === (4))){
var inst_87349 = (state_87364[(7)]);
var state_87364__$1 = state_87364;
var statearr_87377_87801 = state_87364__$1;
(statearr_87377_87801[(2)] = inst_87349);

(statearr_87377_87801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87365 === (5))){
var inst_87360 = (state_87364[(2)]);
var state_87364__$1 = state_87364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87364__$1,inst_87360);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$pools$_LT_token1_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_token1_$_state_machine__52186__auto____0 = (function (){
var statearr_87378 = [null,null,null,null,null,null,null,null];
(statearr_87378[(0)] = revert$pools$_LT_token1_$_state_machine__52186__auto__);

(statearr_87378[(1)] = (1));

return statearr_87378;
});
var revert$pools$_LT_token1_$_state_machine__52186__auto____1 = (function (state_87364){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87364);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87381){var ex__52189__auto__ = e87381;
var statearr_87383_87815 = state_87364;
(statearr_87383_87815[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87364[(4)]))){
var statearr_87384_87828 = state_87364;
(statearr_87384_87828[(1)] = cljs.core.first((state_87364[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87830 = state_87364;
state_87364 = G__87830;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_token1_$_state_machine__52186__auto__ = function(state_87364){
switch(arguments.length){
case 0:
return revert$pools$_LT_token1_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_token1_$_state_machine__52186__auto____1.call(this,state_87364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_token1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_token1_$_state_machine__52186__auto____0;
revert$pools$_LT_token1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_token1_$_state_machine__52186__auto____1;
return revert$pools$_LT_token1_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87388 = f__52209__auto__();
(statearr_87388[(6)] = c__52208__auto__);

return statearr_87388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools.price_change = (function revert$pools$price_change(new_price,old_price){
return bignumber.core._STAR_(bignumber.core._(bignumber.core._SLASH_(new_price,old_price),(1)),(100));
});
revert.pools.total_lps = (function revert$pools$total_lps(pool){
return new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(pool);
});
revert.pools.reserves = (function revert$pools$reserves(pool){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(pool),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(pool),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool)]);
});
/**
 * Returns the difference between percentace change
 *   in prices for token0 and token1
 */
revert.pools.price_divergence = (function revert$pools$price_divergence(p__87397,p__87398){
var vec__87399 = p__87397;
var token0_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87399,(0),null);
var token0_current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87399,(1),null);
var vec__87402 = p__87398;
var token1_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87402,(0),null);
var token1_current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87402,(1),null);
var price0_change = revert.pools.price_change(token0_current,token0_init);
var price1_change = revert.pools.price_change(token1_current,token1_init);
return bignumber.core.abs(bignumber.core._(price0_change,price1_change));
});
revert.pools.usd_volume = (function revert$pools$usd_volume(p__87412,p__87413){
var vec__87415 = p__87412;
var token0_price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87415,(0),null);
var token0_volume = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87415,(1),null);
var vec__87418 = p__87413;
var token1_price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87418,(0),null);
var token1_volume = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87418,(1),null);
return bignumber.core._SLASH_(bignumber.core._PLUS_(bignumber.core._STAR_(token0_price,token0_volume),bignumber.core._STAR_(token1_price,token1_volume)),revert.utils.bn("2.0"));
});
revert.pools.token0_price = (function revert$pools$token0_price(pool){
return bignumber.core._SLASH_(bignumber.core._SLASH_(new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745).cljs$core$IFn$_invoke$arity$1(pool),revert.utils.bn("2.0")),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool));
});
revert.pools.token1_price = (function revert$pools$token1_price(pool){
return bignumber.core._SLASH_(bignumber.core._SLASH_(new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745).cljs$core$IFn$_invoke$arity$1(pool),revert.utils.bn("2.0")),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool));
});
revert.pools.usd_diff = (function revert$pools$usd_diff(init_pool,pool){
var init_pool_prop = bignumber.core._SLASH_(revert.utils.bn("1.0"),new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745).cljs$core$IFn$_invoke$arity$1(init_pool));
var init_lp = bignumber.core._STAR_(init_pool_prop,new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(init_pool));
var init_token0 = bignumber.core._STAR_(init_pool_prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(init_pool));
var init_token1 = bignumber.core._STAR_(init_pool_prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(init_pool));
var current_pool_prop = bignumber.core._SLASH_(init_lp,new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(pool));
var current_token0 = bignumber.core._STAR_(current_pool_prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool));
var current_token1 = bignumber.core._STAR_(current_pool_prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool));
var token0_diff = bignumber.core._(current_token0,init_token0);
var token1_diff = bignumber.core._(current_token1,init_token1);
var token0_price = revert.pools.token0_price(pool);
var token1_price = revert.pools.token1_price(pool);
var init_usd = bignumber.core._PLUS_(bignumber.core._STAR_(init_token0,token0_price),bignumber.core._STAR_(init_token1,token1_price));
var usd_diff_SINGLEQUOTE_ = bignumber.core._STAR_(bignumber.core._PLUS_(bignumber.core._STAR_(token0_price,token0_diff),bignumber.core._STAR_(token1_price,token1_diff)),revert.utils.bn("1.0"));
return bignumber.core._STAR_(bignumber.core._SLASH_(usd_diff_SINGLEQUOTE_,init_usd),revert.utils.bn("100"));
});
revert.pools._LT_pool_dailys = (function revert$pools$_LT_pool_dailys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___87858 = arguments.length;
var i__4737__auto___87859 = (0);
while(true){
if((i__4737__auto___87859 < len__4736__auto___87858)){
args__4742__auto__.push((arguments[i__4737__auto___87859]));

var G__87861 = (i__4737__auto___87859 + (1));
i__4737__auto___87859 = G__87861;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return revert.pools._LT_pool_dailys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(revert.pools._LT_pool_dailys.cljs$core$IFn$_invoke$arity$variadic = (function (pair_address,p__87440){
var map__87441 = p__87440;
var map__87441__$1 = (((((!((map__87441 == null))))?(((((map__87441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87441):map__87441);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__87441__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(365));
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87463){
var state_val_87464 = (state_87463[(1)]);
if((state_val_87464 === (1))){
var inst_87446 = revert.thegraph._LT_pair_days(pair_address,limit);
var state_87463__$1 = state_87463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87463__$1,(2),inst_87446);
} else {
if((state_val_87464 === (2))){
var inst_87448 = (state_87463[(2)]);
var inst_87449 = cljs.core.first(inst_87448);
var inst_87450 = new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(inst_87449);
var inst_87451 = cljs.core.first(inst_87448);
var inst_87452 = new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(inst_87451);
var inst_87453 = cljs.core.first(inst_87448);
var inst_87454 = new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(inst_87453);
var inst_87455 = cljs.core.last(inst_87448);
var inst_87456 = revert.pools.token0_price(inst_87455);
var inst_87457 = revert.pools.token1_price(inst_87455);
var inst_87458 = (function (){var pool_dailys = inst_87448;
var exchange = inst_87450;
var token0_address = inst_87452;
var token1_address = inst_87454;
var init_pool = inst_87455;
var init_token0_price = inst_87456;
var init_token1_price = inst_87457;
return (function (pool){
var token0_price = revert.pools.token0_price(pool);
var token1_price = revert.pools.token1_price(pool);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674),token0_price,new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195),token1_price,new cljs.core.Keyword(null,"price-divergence","price-divergence",-163938709),revert.pools.price_divergence(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_token0_price,token0_price], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_token1_price,token1_price], null)),new cljs.core.Keyword(null,"volume-usd-derived","volume-usd-derived",1596024383),revert.pools.usd_volume(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0_price,new cljs.core.Keyword(null,"volume0","volume0",1792479946).cljs$core$IFn$_invoke$arity$1(pool)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token1_price,new cljs.core.Keyword(null,"volume1","volume1",771282330).cljs$core$IFn$_invoke$arity$1(pool)], null)),new cljs.core.Keyword(null,"vol-res-ratio","vol-res-ratio",-1354774035),bignumber.core._SLASH_(revert.pools.usd_volume(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0_price,new cljs.core.Keyword(null,"volume0","volume0",1792479946).cljs$core$IFn$_invoke$arity$1(pool)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token1_price,new cljs.core.Keyword(null,"volume1","volume1",771282330).cljs$core$IFn$_invoke$arity$1(pool)], null)),new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"usd-diff","usd-diff",-1677119436),revert.pools.usd_diff(init_pool,pool)], null));
});
})();
var inst_87459 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87458,inst_87448);
var state_87463__$1 = state_87463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87463__$1,inst_87459);
} else {
return null;
}
}
});
return (function() {
var revert$pools$state_machine__52186__auto__ = null;
var revert$pools$state_machine__52186__auto____0 = (function (){
var statearr_87475 = [null,null,null,null,null,null,null];
(statearr_87475[(0)] = revert$pools$state_machine__52186__auto__);

(statearr_87475[(1)] = (1));

return statearr_87475;
});
var revert$pools$state_machine__52186__auto____1 = (function (state_87463){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87463);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87477){var ex__52189__auto__ = e87477;
var statearr_87478_87952 = state_87463;
(statearr_87478_87952[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87463[(4)]))){
var statearr_87481_87957 = state_87463;
(statearr_87481_87957[(1)] = cljs.core.first((state_87463[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87959 = state_87463;
state_87463 = G__87959;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$state_machine__52186__auto__ = function(state_87463){
switch(arguments.length){
case 0:
return revert$pools$state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$state_machine__52186__auto____1.call(this,state_87463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$state_machine__52186__auto____0;
revert$pools$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$state_machine__52186__auto____1;
return revert$pools$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87485 = f__52209__auto__();
(statearr_87485[(6)] = c__52208__auto__);

return statearr_87485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));

(revert.pools._LT_pool_dailys.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(revert.pools._LT_pool_dailys.cljs$lang$applyTo = (function (seq87435){
var G__87436 = cljs.core.first(seq87435);
var seq87435__$1 = cljs.core.next(seq87435);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87436,seq87435__$1);
}));

revert.pools._LT_pool_histories = (function revert$pools$_LT_pool_histories(pool_addresses,days){
return cljs.core.async.reduce(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.map_LT_((function (hist){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hist)),hist]);
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87494){
var state_val_87495 = (state_87494[(1)]);
if((state_val_87495 === (1))){
var inst_87490 = revert.pools._LT_pool_dailys.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),days], 0));
var state_87494__$1 = state_87494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87494__$1,(2),inst_87490);
} else {
if((state_val_87495 === (2))){
var inst_87492 = (state_87494[(2)]);
var state_87494__$1 = state_87494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87494__$1,inst_87492);
} else {
return null;
}
}
});
return (function() {
var revert$pools$_LT_pool_histories_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_pool_histories_$_state_machine__52186__auto____0 = (function (){
var statearr_87496 = [null,null,null,null,null,null,null];
(statearr_87496[(0)] = revert$pools$_LT_pool_histories_$_state_machine__52186__auto__);

(statearr_87496[(1)] = (1));

return statearr_87496;
});
var revert$pools$_LT_pool_histories_$_state_machine__52186__auto____1 = (function (state_87494){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87494);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87497){var ex__52189__auto__ = e87497;
var statearr_87498_88089 = state_87494;
(statearr_87498_88089[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87494[(4)]))){
var statearr_87499_88090 = state_87494;
(statearr_87499_88090[(1)] = cljs.core.first((state_87494[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88091 = state_87494;
state_87494 = G__88091;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_pool_histories_$_state_machine__52186__auto__ = function(state_87494){
switch(arguments.length){
case 0:
return revert$pools$_LT_pool_histories_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_pool_histories_$_state_machine__52186__auto____1.call(this,state_87494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_pool_histories_$_state_machine__52186__auto____0;
revert$pools$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_pool_histories_$_state_machine__52186__auto____1;
return revert$pools$_LT_pool_histories_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87500 = f__52209__auto__();
(statearr_87500[(6)] = c__52208__auto__);

return statearr_87500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),pool_addresses))));
});
revert.pools.lp_proportion = (function revert$pools$lp_proportion(s){
return bignumber.core._SLASH_(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(s));
});
/**
 * Returns most recent snapshot for each LP pair where
 * `gsnapshots` is a coll of LPSnapshots as returned
 *  by `thegraph/<user-lp-snapshots`
 */
revert.pools.most_recent_snapshots = (function revert$pools$most_recent_snapshots(gsnapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),gsnapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__87502_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__87502_SHARP_);
})),cljs.core.vals(pair_snapshots));
return last_snapshots;
});
revert.pools._LT_graph_uniswap_positions = (function revert$pools$_LT_graph_uniswap_positions(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87520){
var state_val_87521 = (state_87520[(1)]);
if((state_val_87521 === (1))){
var inst_87507 = revert.thegraph._LT_user_lp_snapshots(user_address);
var state_87520__$1 = state_87520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87520__$1,(2),inst_87507);
} else {
if((state_val_87521 === (2))){
var inst_87509 = (state_87520[(2)]);
var inst_87510 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_87511 = revert.pools.most_recent_snapshots(inst_87509);
var inst_87512 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87510,inst_87511);
var inst_87513 = revert.thegraph._LT_user_lps(user_address,inst_87512);
var state_87520__$1 = state_87520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87520__$1,(3),inst_87513);
} else {
if((state_val_87521 === (3))){
var inst_87515 = (state_87520[(2)]);
var inst_87516 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437)];
var inst_87517 = [user_address,inst_87515];
var inst_87518 = cljs.core.PersistentHashMap.fromArrays(inst_87516,inst_87517);
var state_87520__$1 = state_87520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87520__$1,inst_87518);
} else {
return null;
}
}
}
});
return (function() {
var revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_87525 = [null,null,null,null,null,null,null];
(statearr_87525[(0)] = revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__);

(statearr_87525[(1)] = (1));

return statearr_87525;
});
var revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____1 = (function (state_87520){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87520);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87526){var ex__52189__auto__ = e87526;
var statearr_87528_88107 = state_87520;
(statearr_87528_88107[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87520[(4)]))){
var statearr_87530_88108 = state_87520;
(statearr_87530_88108[(1)] = cljs.core.first((state_87520[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88110 = state_87520;
state_87520 = G__88110;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__ = function(state_87520){
switch(arguments.length){
case 0:
return revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____1.call(this,state_87520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____0;
revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____1;
return revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87533 = f__52209__auto__();
(statearr_87533[(6)] = c__52208__auto__);

return statearr_87533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools.address0 = "0x0000000000000000000000000000000000000000";
revert.pools.zapper_in_addresses = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x5acedba6c402e2682d312a7b4982eda0ccf2d2e3","0xd3cf4e98e1e432b3d6ae42ae406a78f2ac8293d0","0xeee503b78e96f24c47c9ad8c287990e51697a99c","0x026bdac2f308c0109a864138cca1a623f7828f4a","0x775EE938186FddC13bD7C89D24820E1b0758F91D","0x80c5e6908368cb9db503ba968d7ec5a565bfb389","0xcff6ef0b9916682b37d80c19cff8949bc1886bc2","0x91baf383abc0c332a69a73041c866f6761a90b3c"], null);
revert.pools.zapper_out_addresses = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0x69090d6968b12b79cd403ee33e871284dc7e92f6","0x343e3a490c9251dc0eaa81da146ba6abe6c78b2d","0xcfa897e2c4e0a64eaa9ca41f607820a09134353a","0x79b6c6f8634ea477ed725ec23b7b6fcb41f00e58","0x05448acd708b78791d007bc1e037ea6fe78283a6","0x3351be9654188571a3e32388da582947928111ce","0xa4e4beaa9d27eabb6a5e010565a21d93a723c7e1"], null);
revert.pools.mint_addresses = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(revert.pools.zapper_in_addresses,revert.pools.address0));
revert.pools.proxys_out = cljs.core.set(revert.pools.zapper_out_addresses);
revert.pools.make_burn_map = (function revert$pools$make_burn_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = revert.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = revert.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.ethereum.decode_transfer_data,re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__87536_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__87536_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__87536_SHARP_)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__87536_SHARP_)),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__87536_SHARP_)))) || (cljs.core.contains_QMARK_(revert.pools.proxys_out,clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__87536_SHARP_)))))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?revert.utils.bn("0"):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__87538_SHARP_){
return revert.ethereum.decode_burn_data(p1__87538_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__87539_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__87539_SHARP_)));
}),burn_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_burns));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_burns));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
revert.pools._LT_get_lp_burns = (function revert$pools$_LT_get_lp_burns(lp_pool,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87573){
var state_val_87574 = (state_87573[(1)]);
if((state_val_87574 === (1))){
var inst_87550 = (state_87573[(7)]);
var inst_87550__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_87551 = cljs.core.deref(revert.ethereum.provider);
var inst_87552 = revert.ethereum._LT_user_lp_burn_transfers(inst_87551,inst_87550__$1,user_address);
var state_87573__$1 = (function (){var statearr_87579 = state_87573;
(statearr_87579[(7)] = inst_87550__$1);

return statearr_87579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87573__$1,(2),inst_87552);
} else {
if((state_val_87574 === (2))){
var inst_87554 = (state_87573[(8)]);
var inst_87563 = (state_87573[(9)]);
var inst_87560 = (state_87573[(10)]);
var inst_87550 = (state_87573[(7)]);
var inst_87557 = (state_87573[(11)]);
var inst_87554__$1 = (state_87573[(2)]);
var inst_87555 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_87556 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_87555);
var inst_87557__$1 = revert.utils.str__GT_int(inst_87556);
var inst_87558 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_87559 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_87558);
var inst_87560__$1 = revert.utils.str__GT_int(inst_87559);
var inst_87561 = (function (){var pair_address = inst_87550;
var burn_transfers = inst_87554__$1;
var token0_decimals = inst_87557__$1;
var token1_decimals = inst_87560__$1;
return (function (p1__87546_SHARP_){
return p1__87546_SHARP_.transactionHash;
});
})();
var inst_87562 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87561,inst_87554__$1);
var inst_87563__$1 = cljs.core.set(inst_87562);
var inst_87565 = revert.ethereum._LT_get_trxs(inst_87563__$1);
var state_87573__$1 = (function (){var statearr_87583 = state_87573;
(statearr_87583[(8)] = inst_87554__$1);

(statearr_87583[(9)] = inst_87563__$1);

(statearr_87583[(10)] = inst_87560__$1);

(statearr_87583[(11)] = inst_87557__$1);

return statearr_87583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87573__$1,(3),inst_87565);
} else {
if((state_val_87574 === (3))){
var inst_87554 = (state_87573[(8)]);
var inst_87563 = (state_87573[(9)]);
var inst_87560 = (state_87573[(10)]);
var inst_87550 = (state_87573[(7)]);
var inst_87557 = (state_87573[(11)]);
var inst_87567 = (state_87573[(2)]);
var inst_87568 = (function (){var pair_address = inst_87550;
var burn_transfers = inst_87554;
var token0_decimals = inst_87557;
var token1_decimals = inst_87560;
var burn_hashes = inst_87563;
var burn_txrs = inst_87567;
return (function (p1__87547_SHARP_){
return revert.pools.make_burn_map(lp_pool,user_address,p1__87547_SHARP_,token0_decimals,token1_decimals);
});
})();
var inst_87569 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87568,inst_87567);
var inst_87570 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_87569);
var state_87573__$1 = state_87573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87573__$1,inst_87570);
} else {
return null;
}
}
}
});
return (function() {
var revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____0 = (function (){
var statearr_87584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87584[(0)] = revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__);

(statearr_87584[(1)] = (1));

return statearr_87584;
});
var revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____1 = (function (state_87573){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87573);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87586){var ex__52189__auto__ = e87586;
var statearr_87588_88145 = state_87573;
(statearr_87588_88145[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87573[(4)]))){
var statearr_87590_88147 = state_87573;
(statearr_87590_88147[(1)] = cljs.core.first((state_87573[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88149 = state_87573;
state_87573 = G__88149;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__ = function(state_87573){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____1.call(this,state_87573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____0;
revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87592 = f__52209__auto__();
(statearr_87592[(6)] = c__52208__auto__);

return statearr_87592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_get_user_burns = (function revert$pools$_LT_get_user_burns(user_address,lp_pools){
var burns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87604){
var state_val_87605 = (state_87604[(1)]);
if((state_val_87605 === (1))){
var inst_87596 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
var inst_87597 = [inst_87596];
var inst_87598 = revert.pools._LT_get_lp_burns(p,user_address);
var state_87604__$1 = (function (){var statearr_87606 = state_87604;
(statearr_87606[(7)] = inst_87597);

return statearr_87606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87604__$1,(2),inst_87598);
} else {
if((state_val_87605 === (2))){
var inst_87597 = (state_87604[(7)]);
var inst_87600 = (state_87604[(2)]);
var inst_87601 = [inst_87600];
var inst_87602 = cljs.core.PersistentHashMap.fromArrays(inst_87597,inst_87601);
var state_87604__$1 = state_87604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87604__$1,inst_87602);
} else {
return null;
}
}
});
return (function() {
var revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____0 = (function (){
var statearr_87608 = [null,null,null,null,null,null,null,null];
(statearr_87608[(0)] = revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__);

(statearr_87608[(1)] = (1));

return statearr_87608;
});
var revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____1 = (function (state_87604){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87604);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87610){var ex__52189__auto__ = e87610;
var statearr_87612_88156 = state_87604;
(statearr_87612_88156[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87604[(4)]))){
var statearr_87613_88158 = state_87604;
(statearr_87613_88158[(1)] = cljs.core.first((state_87604[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88161 = state_87604;
state_87604 = G__88161;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__ = function(state_87604){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____1.call(this,state_87604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____0;
revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87615 = f__52209__auto__();
(statearr_87615[(6)] = c__52208__auto__);

return statearr_87615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(burns));
});
revert.pools.make_mint_map = (function revert$pools$make_mint_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = revert.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = revert.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__87616_SHARP_){
return revert.ethereum.decode_transfer_data(p1__87616_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__87617_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__87617_SHARP_)))) && (cljs.core.contains_QMARK_(revert.pools.mint_addresses,clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__87617_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__87617_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?revert.utils.bn("0"):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__87618_SHARP_){
return revert.ethereum.decode_mint_data(p1__87618_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__87619_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__87619_SHARP_)));
}),mint_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_mints));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_mints));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
revert.pools._LT_get_lp_mints = (function revert$pools$_LT_get_lp_mints(lp_pool,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87653){
var state_val_87654 = (state_87653[(1)]);
if((state_val_87654 === (1))){
var inst_87632 = (state_87653[(7)]);
var inst_87632__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_87633 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_87634 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_87633);
var inst_87635 = revert.utils.str__GT_int(inst_87634);
var inst_87636 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_87637 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_87636);
var inst_87638 = revert.utils.str__GT_int(inst_87637);
var inst_87639 = cljs.core.deref(revert.ethereum.provider);
var inst_87640 = revert.ethereum._LT_user_lp_mint_transfers(inst_87639,inst_87632__$1,user_address);
var state_87653__$1 = (function (){var statearr_87657 = state_87653;
(statearr_87657[(8)] = inst_87638);

(statearr_87657[(9)] = inst_87635);

(statearr_87657[(7)] = inst_87632__$1);

return statearr_87657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87653__$1,(2),inst_87640);
} else {
if((state_val_87654 === (2))){
var inst_87645 = (state_87653[(10)]);
var inst_87638 = (state_87653[(8)]);
var inst_87635 = (state_87653[(9)]);
var inst_87642 = (state_87653[(11)]);
var inst_87632 = (state_87653[(7)]);
var inst_87642__$1 = (state_87653[(2)]);
var inst_87643 = (function (){var pair_address = inst_87632;
var token0_decimals = inst_87635;
var token1_decimals = inst_87638;
var mint_transfers = inst_87642__$1;
return (function (p1__87627_SHARP_){
return p1__87627_SHARP_.transactionHash;
});
})();
var inst_87644 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87643,inst_87642__$1);
var inst_87645__$1 = cljs.core.set(inst_87644);
var inst_87646 = revert.ethereum._LT_get_trxs(inst_87645__$1);
var state_87653__$1 = (function (){var statearr_87660 = state_87653;
(statearr_87660[(10)] = inst_87645__$1);

(statearr_87660[(11)] = inst_87642__$1);

return statearr_87660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87653__$1,(3),inst_87646);
} else {
if((state_val_87654 === (3))){
var inst_87645 = (state_87653[(10)]);
var inst_87638 = (state_87653[(8)]);
var inst_87635 = (state_87653[(9)]);
var inst_87642 = (state_87653[(11)]);
var inst_87632 = (state_87653[(7)]);
var inst_87648 = (state_87653[(2)]);
var inst_87649 = (function (){var pair_address = inst_87632;
var token0_decimals = inst_87635;
var token1_decimals = inst_87638;
var mint_transfers = inst_87642;
var mint_hashes = inst_87645;
var mint_txrs = inst_87648;
return (function (p1__87628_SHARP_){
return revert.pools.make_mint_map(lp_pool,user_address,p1__87628_SHARP_,token0_decimals,token1_decimals);
});
})();
var inst_87650 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87649,inst_87648);
var inst_87651 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_87650);
var state_87653__$1 = state_87653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87653__$1,inst_87651);
} else {
return null;
}
}
}
});
return (function() {
var revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_87663 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87663[(0)] = revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__);

(statearr_87663[(1)] = (1));

return statearr_87663;
});
var revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____1 = (function (state_87653){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87653);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87665){var ex__52189__auto__ = e87665;
var statearr_87666_88175 = state_87653;
(statearr_87666_88175[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87653[(4)]))){
var statearr_87667_88176 = state_87653;
(statearr_87667_88176[(1)] = cljs.core.first((state_87653[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88177 = state_87653;
state_87653 = G__88177;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__ = function(state_87653){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____1.call(this,state_87653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____0;
revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87668 = f__52209__auto__();
(statearr_87668[(6)] = c__52208__auto__);

return statearr_87668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_get_user_mints = (function revert$pools$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87677){
var state_val_87678 = (state_87677[(1)]);
if((state_val_87678 === (1))){
var inst_87669 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
var inst_87670 = [inst_87669];
var inst_87671 = revert.pools._LT_get_lp_mints(p,user_address);
var state_87677__$1 = (function (){var statearr_87679 = state_87677;
(statearr_87679[(7)] = inst_87670);

return statearr_87679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87677__$1,(2),inst_87671);
} else {
if((state_val_87678 === (2))){
var inst_87670 = (state_87677[(7)]);
var inst_87673 = (state_87677[(2)]);
var inst_87674 = [inst_87673];
var inst_87675 = cljs.core.PersistentHashMap.fromArrays(inst_87670,inst_87674);
var state_87677__$1 = state_87677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87677__$1,inst_87675);
} else {
return null;
}
}
});
return (function() {
var revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_87683 = [null,null,null,null,null,null,null,null];
(statearr_87683[(0)] = revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__);

(statearr_87683[(1)] = (1));

return statearr_87683;
});
var revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____1 = (function (state_87677){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87677);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87685){var ex__52189__auto__ = e87685;
var statearr_87686_88183 = state_87677;
(statearr_87686_88183[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87677[(4)]))){
var statearr_87687_88184 = state_87677;
(statearr_87687_88184[(1)] = cljs.core.first((state_87677[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88187 = state_87677;
state_87677 = G__88187;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__ = function(state_87677){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____1.call(this,state_87677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____0;
revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87688 = f__52209__auto__();
(statearr_87688[(6)] = c__52208__auto__);

return statearr_87688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
revert.pools._LT_fetch_account = (function revert$pools$_LT_fetch_account(account_or_name){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87714){
var state_val_87715 = (state_87714[(1)]);
if((state_val_87715 === (1))){
var inst_87692 = revert.ethereum._LT_resolve_address(account_or_name);
var state_87714__$1 = state_87714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87714__$1,(2),inst_87692);
} else {
if((state_val_87715 === (2))){
var inst_87694 = (state_87714[(7)]);
var inst_87694__$1 = (state_87714[(2)]);
var inst_87695 = revert.pools._LT_graph_uniswap_positions(inst_87694__$1);
var state_87714__$1 = (function (){var statearr_87718 = state_87714;
(statearr_87718[(7)] = inst_87694__$1);

return statearr_87718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87714__$1,(3),inst_87695);
} else {
if((state_val_87715 === (3))){
var inst_87702 = (state_87714[(8)]);
var inst_87694 = (state_87714[(7)]);
var inst_87697 = (state_87714[(9)]);
var inst_87697__$1 = (state_87714[(2)]);
var inst_87698 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_87699 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_87697__$1);
var inst_87700 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_87698,inst_87699);
var inst_87701 = new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(inst_87697__$1);
var inst_87702__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_87701);
var inst_87703 = revert.pools._LT_get_user_mints(inst_87694,inst_87702__$1);
var state_87714__$1 = (function (){var statearr_87721 = state_87714;
(statearr_87721[(8)] = inst_87702__$1);

(statearr_87721[(9)] = inst_87697__$1);

(statearr_87721[(10)] = inst_87700);

return statearr_87721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87714__$1,(4),inst_87703);
} else {
if((state_val_87715 === (4))){
var inst_87702 = (state_87714[(8)]);
var inst_87694 = (state_87714[(7)]);
var inst_87705 = (state_87714[(2)]);
var inst_87706 = revert.pools._LT_get_user_burns(inst_87694,inst_87702);
var state_87714__$1 = (function (){var statearr_87722 = state_87714;
(statearr_87722[(11)] = inst_87705);

return statearr_87722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87714__$1,(5),inst_87706);
} else {
if((state_val_87715 === (5))){
var inst_87694 = (state_87714[(7)]);
var inst_87697 = (state_87714[(9)]);
var inst_87705 = (state_87714[(11)]);
var inst_87708 = (state_87714[(2)]);
var inst_87709 = [new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.Keyword(null,"burns","burns",1858509067)];
var inst_87710 = [inst_87694,inst_87705,inst_87708];
var inst_87711 = cljs.core.PersistentHashMap.fromArrays(inst_87709,inst_87710);
var inst_87712 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_87697,inst_87711);
var state_87714__$1 = state_87714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87714__$1,inst_87712);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$pools$_LT_fetch_account_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_fetch_account_$_state_machine__52186__auto____0 = (function (){
var statearr_87725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87725[(0)] = revert$pools$_LT_fetch_account_$_state_machine__52186__auto__);

(statearr_87725[(1)] = (1));

return statearr_87725;
});
var revert$pools$_LT_fetch_account_$_state_machine__52186__auto____1 = (function (state_87714){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87714);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87727){var ex__52189__auto__ = e87727;
var statearr_87728_88198 = state_87714;
(statearr_87728_88198[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87714[(4)]))){
var statearr_87729_88199 = state_87714;
(statearr_87729_88199[(1)] = cljs.core.first((state_87714[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88200 = state_87714;
state_87714 = G__88200;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_fetch_account_$_state_machine__52186__auto__ = function(state_87714){
switch(arguments.length){
case 0:
return revert$pools$_LT_fetch_account_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_fetch_account_$_state_machine__52186__auto____1.call(this,state_87714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_fetch_account_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_fetch_account_$_state_machine__52186__auto____0;
revert$pools$_LT_fetch_account_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_fetch_account_$_state_machine__52186__auto____1;
return revert$pools$_LT_fetch_account_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87731 = f__52209__auto__();
(statearr_87731[(6)] = c__52208__auto__);

return statearr_87731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools.pool_name = (function revert$pools$pool_name(pool_history){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(cljs.core.first(pool_history))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(cljs.core.first(pool_history)))].join('');
});
revert.pools.exchange = (function revert$pools$exchange(pool_history){
return new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(cljs.core.first(pool_history));
});
revert.pools.exchange_emoji = (function revert$pools$exchange_emoji(pool_history){
var G__87735 = revert.pools.exchange(pool_history);
switch (G__87735) {
case "uniswap":
return "\uD83E\uDD84";

break;
case "sushiswap":
return "\uD83C\uDF63";

break;
case "":
return revert.pools.exchange(pool_history);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87735)].join('')));

}
});

//# sourceMappingURL=revert.pools.js.map
