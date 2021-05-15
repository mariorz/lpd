goog.provide('revert.pools');
revert.pools._LT_get_reserves = (function revert$pools$_LT_get_reserves(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74298){
var state_val_74299 = (state_74298[(1)]);
if((state_val_74299 === (1))){
var inst_74283 = contract.getReserves();
var inst_74284 = cljs.core.async.interop.p__GT_c(inst_74283);
var state_74298__$1 = state_74298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74298__$1,(2),inst_74284);
} else {
if((state_val_74299 === (2))){
var inst_74286 = (state_74298[(7)]);
var inst_74286__$1 = (state_74298[(2)]);
var inst_74287 = (inst_74286__$1 instanceof cljs.core.ExceptionInfo);
var inst_74288 = cljs.core.ex_data(inst_74286__$1);
var inst_74289 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74288);
var inst_74290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74289,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74291 = ((inst_74287) && (inst_74290));
var state_74298__$1 = (function (){var statearr_74300 = state_74298;
(statearr_74300[(7)] = inst_74286__$1);

return statearr_74300;
})();
if(cljs.core.truth_(inst_74291)){
var statearr_74301_74579 = state_74298__$1;
(statearr_74301_74579[(1)] = (3));

} else {
var statearr_74302_74580 = state_74298__$1;
(statearr_74302_74580[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74299 === (3))){
var inst_74286 = (state_74298[(7)]);
var inst_74293 = (function(){throw inst_74286})();
var state_74298__$1 = state_74298;
var statearr_74303_74581 = state_74298__$1;
(statearr_74303_74581[(2)] = inst_74293);

(statearr_74303_74581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74299 === (4))){
var inst_74286 = (state_74298[(7)]);
var state_74298__$1 = state_74298;
var statearr_74304_74582 = state_74298__$1;
(statearr_74304_74582[(2)] = inst_74286);

(statearr_74304_74582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74299 === (5))){
var inst_74296 = (state_74298[(2)]);
var state_74298__$1 = state_74298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74298__$1,inst_74296);
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
var statearr_74305 = [null,null,null,null,null,null,null,null];
(statearr_74305[(0)] = revert$pools$_LT_get_reserves_$_state_machine__52186__auto__);

(statearr_74305[(1)] = (1));

return statearr_74305;
});
var revert$pools$_LT_get_reserves_$_state_machine__52186__auto____1 = (function (state_74298){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74298);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74306){var ex__52189__auto__ = e74306;
var statearr_74307_74583 = state_74298;
(statearr_74307_74583[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74298[(4)]))){
var statearr_74308_74584 = state_74298;
(statearr_74308_74584[(1)] = cljs.core.first((state_74298[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74585 = state_74298;
state_74298 = G__74585;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_reserves_$_state_machine__52186__auto__ = function(state_74298){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_reserves_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_reserves_$_state_machine__52186__auto____1.call(this,state_74298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_reserves_$_state_machine__52186__auto____0;
revert$pools$_LT_get_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_reserves_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_reserves_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74309 = f__52209__auto__();
(statearr_74309[(6)] = c__52208__auto__);

return statearr_74309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_token0 = (function revert$pools$_LT_token0(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74325){
var state_val_74326 = (state_74325[(1)]);
if((state_val_74326 === (1))){
var inst_74310 = contract.token0();
var inst_74311 = cljs.core.async.interop.p__GT_c(inst_74310);
var state_74325__$1 = state_74325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74325__$1,(2),inst_74311);
} else {
if((state_val_74326 === (2))){
var inst_74313 = (state_74325[(7)]);
var inst_74313__$1 = (state_74325[(2)]);
var inst_74314 = (inst_74313__$1 instanceof cljs.core.ExceptionInfo);
var inst_74315 = cljs.core.ex_data(inst_74313__$1);
var inst_74316 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74315);
var inst_74317 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74316,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74318 = ((inst_74314) && (inst_74317));
var state_74325__$1 = (function (){var statearr_74327 = state_74325;
(statearr_74327[(7)] = inst_74313__$1);

return statearr_74327;
})();
if(cljs.core.truth_(inst_74318)){
var statearr_74328_74604 = state_74325__$1;
(statearr_74328_74604[(1)] = (3));

} else {
var statearr_74329_74605 = state_74325__$1;
(statearr_74329_74605[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74326 === (3))){
var inst_74313 = (state_74325[(7)]);
var inst_74320 = (function(){throw inst_74313})();
var state_74325__$1 = state_74325;
var statearr_74330_74606 = state_74325__$1;
(statearr_74330_74606[(2)] = inst_74320);

(statearr_74330_74606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74326 === (4))){
var inst_74313 = (state_74325[(7)]);
var state_74325__$1 = state_74325;
var statearr_74331_74607 = state_74325__$1;
(statearr_74331_74607[(2)] = inst_74313);

(statearr_74331_74607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74326 === (5))){
var inst_74323 = (state_74325[(2)]);
var state_74325__$1 = state_74325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74325__$1,inst_74323);
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
var statearr_74332 = [null,null,null,null,null,null,null,null];
(statearr_74332[(0)] = revert$pools$_LT_token0_$_state_machine__52186__auto__);

(statearr_74332[(1)] = (1));

return statearr_74332;
});
var revert$pools$_LT_token0_$_state_machine__52186__auto____1 = (function (state_74325){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74325);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74333){var ex__52189__auto__ = e74333;
var statearr_74334_74611 = state_74325;
(statearr_74334_74611[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74325[(4)]))){
var statearr_74335_74612 = state_74325;
(statearr_74335_74612[(1)] = cljs.core.first((state_74325[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74614 = state_74325;
state_74325 = G__74614;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_token0_$_state_machine__52186__auto__ = function(state_74325){
switch(arguments.length){
case 0:
return revert$pools$_LT_token0_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_token0_$_state_machine__52186__auto____1.call(this,state_74325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_token0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_token0_$_state_machine__52186__auto____0;
revert$pools$_LT_token0_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_token0_$_state_machine__52186__auto____1;
return revert$pools$_LT_token0_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74336 = f__52209__auto__();
(statearr_74336[(6)] = c__52208__auto__);

return statearr_74336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_token1 = (function revert$pools$_LT_token1(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74352){
var state_val_74353 = (state_74352[(1)]);
if((state_val_74353 === (1))){
var inst_74337 = contract.token1();
var inst_74338 = cljs.core.async.interop.p__GT_c(inst_74337);
var state_74352__$1 = state_74352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74352__$1,(2),inst_74338);
} else {
if((state_val_74353 === (2))){
var inst_74340 = (state_74352[(7)]);
var inst_74340__$1 = (state_74352[(2)]);
var inst_74341 = (inst_74340__$1 instanceof cljs.core.ExceptionInfo);
var inst_74342 = cljs.core.ex_data(inst_74340__$1);
var inst_74343 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74342);
var inst_74344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74343,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74345 = ((inst_74341) && (inst_74344));
var state_74352__$1 = (function (){var statearr_74354 = state_74352;
(statearr_74354[(7)] = inst_74340__$1);

return statearr_74354;
})();
if(cljs.core.truth_(inst_74345)){
var statearr_74355_74619 = state_74352__$1;
(statearr_74355_74619[(1)] = (3));

} else {
var statearr_74356_74621 = state_74352__$1;
(statearr_74356_74621[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74353 === (3))){
var inst_74340 = (state_74352[(7)]);
var inst_74347 = (function(){throw inst_74340})();
var state_74352__$1 = state_74352;
var statearr_74357_74622 = state_74352__$1;
(statearr_74357_74622[(2)] = inst_74347);

(statearr_74357_74622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74353 === (4))){
var inst_74340 = (state_74352[(7)]);
var state_74352__$1 = state_74352;
var statearr_74358_74625 = state_74352__$1;
(statearr_74358_74625[(2)] = inst_74340);

(statearr_74358_74625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74353 === (5))){
var inst_74350 = (state_74352[(2)]);
var state_74352__$1 = state_74352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74352__$1,inst_74350);
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
var statearr_74359 = [null,null,null,null,null,null,null,null];
(statearr_74359[(0)] = revert$pools$_LT_token1_$_state_machine__52186__auto__);

(statearr_74359[(1)] = (1));

return statearr_74359;
});
var revert$pools$_LT_token1_$_state_machine__52186__auto____1 = (function (state_74352){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74352);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74360){var ex__52189__auto__ = e74360;
var statearr_74361_74627 = state_74352;
(statearr_74361_74627[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74352[(4)]))){
var statearr_74362_74635 = state_74352;
(statearr_74362_74635[(1)] = cljs.core.first((state_74352[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74648 = state_74352;
state_74352 = G__74648;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_token1_$_state_machine__52186__auto__ = function(state_74352){
switch(arguments.length){
case 0:
return revert$pools$_LT_token1_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_token1_$_state_machine__52186__auto____1.call(this,state_74352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_token1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_token1_$_state_machine__52186__auto____0;
revert$pools$_LT_token1_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_token1_$_state_machine__52186__auto____1;
return revert$pools$_LT_token1_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74363 = f__52209__auto__();
(statearr_74363[(6)] = c__52208__auto__);

return statearr_74363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools.total_lps = (function revert$pools$total_lps(pool){
return new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(pool);
});
revert.pools.reserves = (function revert$pools$reserves(pool){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(pool),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(pool),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool)]);
});
revert.pools.usd_volume = (function revert$pools$usd_volume(p__74364,p__74365){
var vec__74366 = p__74364;
var token0_price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74366,(0),null);
var token0_volume = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74366,(1),null);
var vec__74369 = p__74365;
var token1_price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74369,(0),null);
var token1_volume = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74369,(1),null);
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
var len__4736__auto___74663 = arguments.length;
var i__4737__auto___74664 = (0);
while(true){
if((i__4737__auto___74664 < len__4736__auto___74663)){
args__4742__auto__.push((arguments[i__4737__auto___74664]));

var G__74665 = (i__4737__auto___74664 + (1));
i__4737__auto___74664 = G__74665;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return revert.pools._LT_pool_dailys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(revert.pools._LT_pool_dailys.cljs$core$IFn$_invoke$arity$variadic = (function (pair_address,p__74374){
var map__74375 = p__74374;
var map__74375__$1 = (((((!((map__74375 == null))))?(((((map__74375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74375):map__74375);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74375__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(365));
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74398){
var state_val_74399 = (state_74398[(1)]);
if((state_val_74399 === (1))){
var inst_74377 = revert.thegraph._LT_pair_days(pair_address,limit);
var state_74398__$1 = state_74398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74398__$1,(2),inst_74377);
} else {
if((state_val_74399 === (2))){
var inst_74379 = (state_74398[(7)]);
var inst_74379__$1 = (state_74398[(2)]);
var inst_74380 = cljs.core.empty_QMARK_(inst_74379__$1);
var inst_74381 = (!(inst_74380));
var state_74398__$1 = (function (){var statearr_74400 = state_74398;
(statearr_74400[(7)] = inst_74379__$1);

return statearr_74400;
})();
if(inst_74381){
var statearr_74401_74673 = state_74398__$1;
(statearr_74401_74673[(1)] = (3));

} else {
var statearr_74402_74674 = state_74398__$1;
(statearr_74402_74674[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74399 === (3))){
var inst_74379 = (state_74398[(7)]);
var inst_74383 = cljs.core.first(inst_74379);
var inst_74384 = new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(inst_74383);
var inst_74385 = cljs.core.first(inst_74379);
var inst_74386 = new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(inst_74385);
var inst_74387 = cljs.core.first(inst_74379);
var inst_74388 = new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(inst_74387);
var inst_74389 = cljs.core.last(inst_74379);
var inst_74390 = revert.pools.token0_price(inst_74389);
var inst_74391 = revert.pools.token1_price(inst_74389);
var inst_74392 = (function (){var pool_dailys = inst_74379;
var exchange = inst_74384;
var token0_address = inst_74386;
var token1_address = inst_74388;
var init_pool = inst_74389;
var init_token0_price = inst_74390;
var init_token1_price = inst_74391;
return (function (pool){
var token0_price = revert.pools.token0_price(pool);
var token1_price = revert.pools.token1_price(pool);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(pool,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674),token0_price,new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195),token1_price,new cljs.core.Keyword(null,"price-divergence","price-divergence",-163938709),revert.utils.price_divergence(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_token0_price,token0_price], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_token1_price,token1_price], null)),new cljs.core.Keyword(null,"volume-usd-derived","volume-usd-derived",1596024383),revert.pools.usd_volume(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0_price,new cljs.core.Keyword(null,"volume0","volume0",1792479946).cljs$core$IFn$_invoke$arity$1(pool)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token1_price,new cljs.core.Keyword(null,"volume1","volume1",771282330).cljs$core$IFn$_invoke$arity$1(pool)], null)),new cljs.core.Keyword(null,"vol-res-ratio","vol-res-ratio",-1354774035),bignumber.core._SLASH_(revert.pools.usd_volume(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0_price,new cljs.core.Keyword(null,"volume0","volume0",1792479946).cljs$core$IFn$_invoke$arity$1(pool)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token1_price,new cljs.core.Keyword(null,"volume1","volume1",771282330).cljs$core$IFn$_invoke$arity$1(pool)], null)),new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"usd-diff","usd-diff",-1677119436),revert.pools.usd_diff(init_pool,pool)], null));
});
})();
var inst_74393 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74392,inst_74379);
var state_74398__$1 = state_74398;
var statearr_74403_74694 = state_74398__$1;
(statearr_74403_74694[(2)] = inst_74393);

(statearr_74403_74694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74399 === (4))){
var state_74398__$1 = state_74398;
var statearr_74404_74710 = state_74398__$1;
(statearr_74404_74710[(2)] = null);

(statearr_74404_74710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74399 === (5))){
var inst_74396 = (state_74398[(2)]);
var state_74398__$1 = state_74398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74398__$1,inst_74396);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$pools$state_machine__52186__auto__ = null;
var revert$pools$state_machine__52186__auto____0 = (function (){
var statearr_74405 = [null,null,null,null,null,null,null,null];
(statearr_74405[(0)] = revert$pools$state_machine__52186__auto__);

(statearr_74405[(1)] = (1));

return statearr_74405;
});
var revert$pools$state_machine__52186__auto____1 = (function (state_74398){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74398);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74406){var ex__52189__auto__ = e74406;
var statearr_74407_74740 = state_74398;
(statearr_74407_74740[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74398[(4)]))){
var statearr_74408_74750 = state_74398;
(statearr_74408_74750[(1)] = cljs.core.first((state_74398[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74764 = state_74398;
state_74398 = G__74764;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$state_machine__52186__auto__ = function(state_74398){
switch(arguments.length){
case 0:
return revert$pools$state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$state_machine__52186__auto____1.call(this,state_74398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$state_machine__52186__auto____0;
revert$pools$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$state_machine__52186__auto____1;
return revert$pools$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74409 = f__52209__auto__();
(statearr_74409[(6)] = c__52208__auto__);

return statearr_74409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));

(revert.pools._LT_pool_dailys.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(revert.pools._LT_pool_dailys.cljs$lang$applyTo = (function (seq74372){
var G__74373 = cljs.core.first(seq74372);
var seq74372__$1 = cljs.core.next(seq74372);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74373,seq74372__$1);
}));

revert.pools._LT_pool_histories = (function revert$pools$_LT_pool_histories(pool_addresses,days){
return cljs.core.async.reduce(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.map_LT_((function (hist){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hist)),hist]);
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74414){
var state_val_74415 = (state_74414[(1)]);
if((state_val_74415 === (1))){
var inst_74410 = revert.pools._LT_pool_dailys.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),days], 0));
var state_74414__$1 = state_74414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74414__$1,(2),inst_74410);
} else {
if((state_val_74415 === (2))){
var inst_74412 = (state_74414[(2)]);
var state_74414__$1 = state_74414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74414__$1,inst_74412);
} else {
return null;
}
}
});
return (function() {
var revert$pools$_LT_pool_histories_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_pool_histories_$_state_machine__52186__auto____0 = (function (){
var statearr_74416 = [null,null,null,null,null,null,null];
(statearr_74416[(0)] = revert$pools$_LT_pool_histories_$_state_machine__52186__auto__);

(statearr_74416[(1)] = (1));

return statearr_74416;
});
var revert$pools$_LT_pool_histories_$_state_machine__52186__auto____1 = (function (state_74414){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74414);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74417){var ex__52189__auto__ = e74417;
var statearr_74418_74889 = state_74414;
(statearr_74418_74889[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74414[(4)]))){
var statearr_74419_74890 = state_74414;
(statearr_74419_74890[(1)] = cljs.core.first((state_74414[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74893 = state_74414;
state_74414 = G__74893;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_pool_histories_$_state_machine__52186__auto__ = function(state_74414){
switch(arguments.length){
case 0:
return revert$pools$_LT_pool_histories_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_pool_histories_$_state_machine__52186__auto____1.call(this,state_74414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_pool_histories_$_state_machine__52186__auto____0;
revert$pools$_LT_pool_histories_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_pool_histories_$_state_machine__52186__auto____1;
return revert$pools$_LT_pool_histories_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74420 = f__52209__auto__();
(statearr_74420[(6)] = c__52208__auto__);

return statearr_74420;
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__74422_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__74422_SHARP_);
})),cljs.core.vals(pair_snapshots));
return last_snapshots;
});
revert.pools._LT_graph_uniswap_positions = (function revert$pools$_LT_graph_uniswap_positions(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74436){
var state_val_74437 = (state_74436[(1)]);
if((state_val_74437 === (1))){
var inst_74423 = revert.thegraph._LT_user_lp_snapshots(user_address);
var state_74436__$1 = state_74436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74436__$1,(2),inst_74423);
} else {
if((state_val_74437 === (2))){
var inst_74425 = (state_74436[(2)]);
var inst_74426 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_74427 = revert.pools.most_recent_snapshots(inst_74425);
var inst_74428 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74426,inst_74427);
var inst_74429 = revert.thegraph._LT_user_lps(user_address,inst_74428);
var state_74436__$1 = state_74436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74436__$1,(3),inst_74429);
} else {
if((state_val_74437 === (3))){
var inst_74431 = (state_74436[(2)]);
var inst_74432 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437)];
var inst_74433 = [user_address,inst_74431];
var inst_74434 = cljs.core.PersistentHashMap.fromArrays(inst_74432,inst_74433);
var state_74436__$1 = state_74436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74436__$1,inst_74434);
} else {
return null;
}
}
}
});
return (function() {
var revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_74438 = [null,null,null,null,null,null,null];
(statearr_74438[(0)] = revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__);

(statearr_74438[(1)] = (1));

return statearr_74438;
});
var revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____1 = (function (state_74436){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74436);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74439){var ex__52189__auto__ = e74439;
var statearr_74440_74906 = state_74436;
(statearr_74440_74906[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74436[(4)]))){
var statearr_74441_74908 = state_74436;
(statearr_74441_74908[(1)] = cljs.core.first((state_74436[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74910 = state_74436;
state_74436 = G__74910;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__ = function(state_74436){
switch(arguments.length){
case 0:
return revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____1.call(this,state_74436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____0;
revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto____1;
return revert$pools$_LT_graph_uniswap_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74442 = f__52209__auto__();
(statearr_74442[(6)] = c__52208__auto__);

return statearr_74442;
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
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74443_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__74443_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__74443_SHARP_)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__74443_SHARP_)),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__74443_SHARP_)))) || (cljs.core.contains_QMARK_(revert.pools.proxys_out,clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__74443_SHARP_)))))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?revert.utils.bn("0"):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74444_SHARP_){
return revert.ethereum.decode_burn_data(p1__74444_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74445_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__74445_SHARP_)));
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74469){
var state_val_74470 = (state_74469[(1)]);
if((state_val_74470 === (1))){
var inst_74448 = (state_74469[(7)]);
var inst_74448__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_74449 = cljs.core.deref(revert.ethereum.provider);
var inst_74450 = revert.ethereum._LT_user_lp_burn_transfers(inst_74449,inst_74448__$1,user_address);
var state_74469__$1 = (function (){var statearr_74471 = state_74469;
(statearr_74471[(7)] = inst_74448__$1);

return statearr_74471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74469__$1,(2),inst_74450);
} else {
if((state_val_74470 === (2))){
var inst_74458 = (state_74469[(8)]);
var inst_74448 = (state_74469[(7)]);
var inst_74455 = (state_74469[(9)]);
var inst_74461 = (state_74469[(10)]);
var inst_74452 = (state_74469[(11)]);
var inst_74452__$1 = (state_74469[(2)]);
var inst_74453 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_74454 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_74453);
var inst_74455__$1 = revert.utils.str__GT_int(inst_74454);
var inst_74456 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_74457 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_74456);
var inst_74458__$1 = revert.utils.str__GT_int(inst_74457);
var inst_74459 = (function (){var pair_address = inst_74448;
var burn_transfers = inst_74452__$1;
var token0_decimals = inst_74455__$1;
var token1_decimals = inst_74458__$1;
return (function (p1__74446_SHARP_){
return p1__74446_SHARP_.transactionHash;
});
})();
var inst_74460 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74459,inst_74452__$1);
var inst_74461__$1 = cljs.core.set(inst_74460);
var inst_74462 = revert.ethereum._LT_get_trxs(inst_74461__$1);
var state_74469__$1 = (function (){var statearr_74472 = state_74469;
(statearr_74472[(8)] = inst_74458__$1);

(statearr_74472[(9)] = inst_74455__$1);

(statearr_74472[(10)] = inst_74461__$1);

(statearr_74472[(11)] = inst_74452__$1);

return statearr_74472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74469__$1,(3),inst_74462);
} else {
if((state_val_74470 === (3))){
var inst_74458 = (state_74469[(8)]);
var inst_74448 = (state_74469[(7)]);
var inst_74455 = (state_74469[(9)]);
var inst_74461 = (state_74469[(10)]);
var inst_74452 = (state_74469[(11)]);
var inst_74464 = (state_74469[(2)]);
var inst_74465 = (function (){var pair_address = inst_74448;
var burn_transfers = inst_74452;
var token0_decimals = inst_74455;
var token1_decimals = inst_74458;
var burn_hashes = inst_74461;
var burn_txrs = inst_74464;
return (function (p1__74447_SHARP_){
return revert.pools.make_burn_map(lp_pool,user_address,p1__74447_SHARP_,token0_decimals,token1_decimals);
});
})();
var inst_74466 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74465,inst_74464);
var inst_74467 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_74466);
var state_74469__$1 = state_74469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74469__$1,inst_74467);
} else {
return null;
}
}
}
});
return (function() {
var revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____0 = (function (){
var statearr_74473 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74473[(0)] = revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__);

(statearr_74473[(1)] = (1));

return statearr_74473;
});
var revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____1 = (function (state_74469){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74469);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74474){var ex__52189__auto__ = e74474;
var statearr_74475_74951 = state_74469;
(statearr_74475_74951[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74469[(4)]))){
var statearr_74476_74953 = state_74469;
(statearr_74476_74953[(1)] = cljs.core.first((state_74469[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74955 = state_74469;
state_74469 = G__74955;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__ = function(state_74469){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____1.call(this,state_74469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____0;
revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_lp_burns_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74477 = f__52209__auto__();
(statearr_74477[(6)] = c__52208__auto__);

return statearr_74477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_get_user_burns = (function revert$pools$_LT_get_user_burns(user_address,lp_pools){
var burns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74486){
var state_val_74487 = (state_74486[(1)]);
if((state_val_74487 === (1))){
var inst_74478 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
var inst_74479 = [inst_74478];
var inst_74480 = revert.pools._LT_get_lp_burns(p,user_address);
var state_74486__$1 = (function (){var statearr_74488 = state_74486;
(statearr_74488[(7)] = inst_74479);

return statearr_74488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74486__$1,(2),inst_74480);
} else {
if((state_val_74487 === (2))){
var inst_74479 = (state_74486[(7)]);
var inst_74482 = (state_74486[(2)]);
var inst_74483 = [inst_74482];
var inst_74484 = cljs.core.PersistentHashMap.fromArrays(inst_74479,inst_74483);
var state_74486__$1 = state_74486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74486__$1,inst_74484);
} else {
return null;
}
}
});
return (function() {
var revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____0 = (function (){
var statearr_74489 = [null,null,null,null,null,null,null,null];
(statearr_74489[(0)] = revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__);

(statearr_74489[(1)] = (1));

return statearr_74489;
});
var revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____1 = (function (state_74486){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74486);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74490){var ex__52189__auto__ = e74490;
var statearr_74491_74970 = state_74486;
(statearr_74491_74970[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74486[(4)]))){
var statearr_74492_74972 = state_74486;
(statearr_74492_74972[(1)] = cljs.core.first((state_74486[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74976 = state_74486;
state_74486 = G__74976;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__ = function(state_74486){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____1.call(this,state_74486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____0;
revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_user_burns_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_user_burns_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74493 = f__52209__auto__();
(statearr_74493[(6)] = c__52208__auto__);

return statearr_74493;
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
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74494_SHARP_){
return revert.ethereum.decode_transfer_data(p1__74494_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74495_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__74495_SHARP_)))) && (cljs.core.contains_QMARK_(revert.pools.mint_addresses,clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__74495_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__74495_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?revert.utils.bn("0"):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74496_SHARP_){
return revert.ethereum.decode_mint_data(p1__74496_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74497_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__74497_SHARP_)));
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74521){
var state_val_74522 = (state_74521[(1)]);
if((state_val_74522 === (1))){
var inst_74500 = (state_74521[(7)]);
var inst_74500__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_74501 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_74502 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_74501);
var inst_74503 = revert.utils.str__GT_int(inst_74502);
var inst_74504 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_74505 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(inst_74504);
var inst_74506 = revert.utils.str__GT_int(inst_74505);
var inst_74507 = cljs.core.deref(revert.ethereum.provider);
var inst_74508 = revert.ethereum._LT_user_lp_mint_transfers(inst_74507,inst_74500__$1,user_address);
var state_74521__$1 = (function (){var statearr_74523 = state_74521;
(statearr_74523[(8)] = inst_74506);

(statearr_74523[(7)] = inst_74500__$1);

(statearr_74523[(9)] = inst_74503);

return statearr_74523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74521__$1,(2),inst_74508);
} else {
if((state_val_74522 === (2))){
var inst_74513 = (state_74521[(10)]);
var inst_74506 = (state_74521[(8)]);
var inst_74500 = (state_74521[(7)]);
var inst_74503 = (state_74521[(9)]);
var inst_74510 = (state_74521[(11)]);
var inst_74510__$1 = (state_74521[(2)]);
var inst_74511 = (function (){var pair_address = inst_74500;
var token0_decimals = inst_74503;
var token1_decimals = inst_74506;
var mint_transfers = inst_74510__$1;
return (function (p1__74498_SHARP_){
return p1__74498_SHARP_.transactionHash;
});
})();
var inst_74512 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74511,inst_74510__$1);
var inst_74513__$1 = cljs.core.set(inst_74512);
var inst_74514 = revert.ethereum._LT_get_trxs(inst_74513__$1);
var state_74521__$1 = (function (){var statearr_74524 = state_74521;
(statearr_74524[(10)] = inst_74513__$1);

(statearr_74524[(11)] = inst_74510__$1);

return statearr_74524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74521__$1,(3),inst_74514);
} else {
if((state_val_74522 === (3))){
var inst_74513 = (state_74521[(10)]);
var inst_74506 = (state_74521[(8)]);
var inst_74500 = (state_74521[(7)]);
var inst_74503 = (state_74521[(9)]);
var inst_74510 = (state_74521[(11)]);
var inst_74516 = (state_74521[(2)]);
var inst_74517 = (function (){var pair_address = inst_74500;
var token0_decimals = inst_74503;
var token1_decimals = inst_74506;
var mint_transfers = inst_74510;
var mint_hashes = inst_74513;
var mint_txrs = inst_74516;
return (function (p1__74499_SHARP_){
return revert.pools.make_mint_map(lp_pool,user_address,p1__74499_SHARP_,token0_decimals,token1_decimals);
});
})();
var inst_74518 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74517,inst_74516);
var inst_74519 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_74518);
var state_74521__$1 = state_74521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74521__$1,inst_74519);
} else {
return null;
}
}
}
});
return (function() {
var revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_74525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74525[(0)] = revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__);

(statearr_74525[(1)] = (1));

return statearr_74525;
});
var revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____1 = (function (state_74521){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74521);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74526){var ex__52189__auto__ = e74526;
var statearr_74527_75016 = state_74521;
(statearr_74527_75016[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74521[(4)]))){
var statearr_74528_75017 = state_74521;
(statearr_74528_75017[(1)] = cljs.core.first((state_74521[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75020 = state_74521;
state_74521 = G__75020;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__ = function(state_74521){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____1.call(this,state_74521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____0;
revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_lp_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74529 = f__52209__auto__();
(statearr_74529[(6)] = c__52208__auto__);

return statearr_74529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.pools._LT_get_user_mints = (function revert$pools$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74538){
var state_val_74539 = (state_74538[(1)]);
if((state_val_74539 === (1))){
var inst_74530 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
var inst_74531 = [inst_74530];
var inst_74532 = revert.pools._LT_get_lp_mints(p,user_address);
var state_74538__$1 = (function (){var statearr_74540 = state_74538;
(statearr_74540[(7)] = inst_74531);

return statearr_74540;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74538__$1,(2),inst_74532);
} else {
if((state_val_74539 === (2))){
var inst_74531 = (state_74538[(7)]);
var inst_74534 = (state_74538[(2)]);
var inst_74535 = [inst_74534];
var inst_74536 = cljs.core.PersistentHashMap.fromArrays(inst_74531,inst_74535);
var state_74538__$1 = state_74538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74538__$1,inst_74536);
} else {
return null;
}
}
});
return (function() {
var revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__ = null;
var revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_74541 = [null,null,null,null,null,null,null,null];
(statearr_74541[(0)] = revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__);

(statearr_74541[(1)] = (1));

return statearr_74541;
});
var revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____1 = (function (state_74538){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74538);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74542){var ex__52189__auto__ = e74542;
var statearr_74543_75033 = state_74538;
(statearr_74543_75033[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74538[(4)]))){
var statearr_74544_75035 = state_74538;
(statearr_74544_75035[(1)] = cljs.core.first((state_74538[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75039 = state_74538;
state_74538 = G__75039;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__ = function(state_74538){
switch(arguments.length){
case 0:
return revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____1.call(this,state_74538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____0;
revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_get_user_mints_$_state_machine__52186__auto____1;
return revert$pools$_LT_get_user_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74545 = f__52209__auto__();
(statearr_74545[(6)] = c__52208__auto__);

return statearr_74545;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74568){
var state_val_74569 = (state_74568[(1)]);
if((state_val_74569 === (1))){
var inst_74546 = revert.ethereum._LT_resolve_address(account_or_name);
var state_74568__$1 = state_74568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74568__$1,(2),inst_74546);
} else {
if((state_val_74569 === (2))){
var inst_74548 = (state_74568[(7)]);
var inst_74548__$1 = (state_74568[(2)]);
var inst_74549 = revert.pools._LT_graph_uniswap_positions(inst_74548__$1);
var state_74568__$1 = (function (){var statearr_74570 = state_74568;
(statearr_74570[(7)] = inst_74548__$1);

return statearr_74570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74568__$1,(3),inst_74549);
} else {
if((state_val_74569 === (3))){
var inst_74556 = (state_74568[(8)]);
var inst_74551 = (state_74568[(9)]);
var inst_74548 = (state_74568[(7)]);
var inst_74551__$1 = (state_74568[(2)]);
var inst_74552 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_74553 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_74551__$1);
var inst_74554 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_74552,inst_74553);
var inst_74555 = new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(inst_74551__$1);
var inst_74556__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_74555);
var inst_74557 = revert.pools._LT_get_user_mints(inst_74548,inst_74556__$1);
var state_74568__$1 = (function (){var statearr_74571 = state_74568;
(statearr_74571[(8)] = inst_74556__$1);

(statearr_74571[(10)] = inst_74554);

(statearr_74571[(9)] = inst_74551__$1);

return statearr_74571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74568__$1,(4),inst_74557);
} else {
if((state_val_74569 === (4))){
var inst_74556 = (state_74568[(8)]);
var inst_74548 = (state_74568[(7)]);
var inst_74559 = (state_74568[(2)]);
var inst_74560 = revert.pools._LT_get_user_burns(inst_74548,inst_74556);
var state_74568__$1 = (function (){var statearr_74572 = state_74568;
(statearr_74572[(11)] = inst_74559);

return statearr_74572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74568__$1,(5),inst_74560);
} else {
if((state_val_74569 === (5))){
var inst_74551 = (state_74568[(9)]);
var inst_74559 = (state_74568[(11)]);
var inst_74548 = (state_74568[(7)]);
var inst_74562 = (state_74568[(2)]);
var inst_74563 = [new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.Keyword(null,"burns","burns",1858509067)];
var inst_74564 = [inst_74548,inst_74559,inst_74562];
var inst_74565 = cljs.core.PersistentHashMap.fromArrays(inst_74563,inst_74564);
var inst_74566 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_74551,inst_74565);
var state_74568__$1 = state_74568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74568__$1,inst_74566);
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
var statearr_74573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74573[(0)] = revert$pools$_LT_fetch_account_$_state_machine__52186__auto__);

(statearr_74573[(1)] = (1));

return statearr_74573;
});
var revert$pools$_LT_fetch_account_$_state_machine__52186__auto____1 = (function (state_74568){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74568);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74574){var ex__52189__auto__ = e74574;
var statearr_74575_75056 = state_74568;
(statearr_74575_75056[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74568[(4)]))){
var statearr_74576_75058 = state_74568;
(statearr_74576_75058[(1)] = cljs.core.first((state_74568[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75059 = state_74568;
state_74568 = G__75059;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$pools$_LT_fetch_account_$_state_machine__52186__auto__ = function(state_74568){
switch(arguments.length){
case 0:
return revert$pools$_LT_fetch_account_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$pools$_LT_fetch_account_$_state_machine__52186__auto____1.call(this,state_74568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$pools$_LT_fetch_account_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$pools$_LT_fetch_account_$_state_machine__52186__auto____0;
revert$pools$_LT_fetch_account_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$pools$_LT_fetch_account_$_state_machine__52186__auto____1;
return revert$pools$_LT_fetch_account_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74577 = f__52209__auto__();
(statearr_74577[(6)] = c__52208__auto__);

return statearr_74577;
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
var G__74578 = revert.pools.exchange(pool_history);
switch (G__74578) {
case "uniswap":
return "\uD83E\uDD84";

break;
case "uniswapv3":
return "\uD83E\uDD84";

break;
case "sushiswap":
return "\uD83C\uDF63";

break;
case "":
return revert.pools.exchange(pool_history);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74578)].join('')));

}
});

//# sourceMappingURL=revert.pools.js.map
