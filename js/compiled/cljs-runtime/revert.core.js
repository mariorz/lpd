goog.provide('revert.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),(function (_,___$1){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141271){
var state_val_141272 = (state_141271[(1)]);
if((state_val_141272 === (1))){
var inst_141257 = revert.ethereum.select_provider();
var state_141271__$1 = state_141271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141271__$1,(2),inst_141257);
} else {
if((state_val_141272 === (2))){
var inst_141259 = (state_141271[(7)]);
var inst_141259__$1 = (state_141271[(2)]);
var state_141271__$1 = (function (){var statearr_141277 = state_141271;
(statearr_141277[(7)] = inst_141259__$1);

return statearr_141277;
})();
if(cljs.core.truth_(inst_141259__$1)){
var statearr_141278_141559 = state_141271__$1;
(statearr_141278_141559[(1)] = (3));

} else {
var statearr_141279_141560 = state_141271__$1;
(statearr_141279_141560[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141272 === (3))){
var inst_141259 = (state_141271[(7)]);
var inst_141261 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141262 = [new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),true];
var inst_141263 = (new cljs.core.PersistentVector(null,2,(5),inst_141261,inst_141262,null));
var inst_141264 = re_frame.core.dispatch(inst_141263);
var inst_141265 = ["/account/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_141259)].join('');
var inst_141266 = revert.utils.set_hash_BANG_(inst_141265);
var state_141271__$1 = (function (){var statearr_141283 = state_141271;
(statearr_141283[(8)] = inst_141264);

return statearr_141283;
})();
var statearr_141284_141561 = state_141271__$1;
(statearr_141284_141561[(2)] = inst_141266);

(statearr_141284_141561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141272 === (4))){
var state_141271__$1 = state_141271;
var statearr_141285_141562 = state_141271__$1;
(statearr_141285_141562[(2)] = null);

(statearr_141285_141562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141272 === (5))){
var inst_141269 = (state_141271[(2)]);
var state_141271__$1 = state_141271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141271__$1,inst_141269);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141286 = [null,null,null,null,null,null,null,null,null];
(statearr_141286[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141286[(1)] = (1));

return statearr_141286;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141271){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141271);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141287){var ex__52189__auto__ = e141287;
var statearr_141289_141566 = state_141271;
(statearr_141289_141566[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141271[(4)]))){
var statearr_141292_141567 = state_141271;
(statearr_141292_141567[(1)] = cljs.core.first((state_141271[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141568 = state_141271;
state_141271 = G__141568;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141271){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141293 = f__52209__auto__();
(statearr_141293[(6)] = c__52208__auto__);

return statearr_141293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),(function (p__141294){
var vec__141295 = p__141294;
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141295,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141295,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141348){
var state_val_141349 = (state_141348[(1)]);
if((state_val_141349 === (7))){
var inst_141316 = cljs.core.count(pool_addresses);
var inst_141317 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_141316,(1));
var state_141348__$1 = state_141348;
if(inst_141317){
var statearr_141353_141571 = state_141348__$1;
(statearr_141353_141571[(1)] = (9));

} else {
var statearr_141354_141572 = state_141348__$1;
(statearr_141354_141572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (1))){
var inst_141300 = revert.pools._LT_pool_histories(pool_addresses,days);
var state_141348__$1 = state_141348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141348__$1,(2),inst_141300);
} else {
if((state_val_141349 === (4))){
var inst_141302 = (state_141348[(7)]);
var state_141348__$1 = state_141348;
var statearr_141355_141574 = state_141348__$1;
(statearr_141355_141574[(2)] = inst_141302);

(statearr_141355_141574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (15))){
var inst_141329 = (state_141348[(2)]);
var state_141348__$1 = state_141348;
if(cljs.core.truth_(inst_141329)){
var statearr_141358_141575 = state_141348__$1;
(statearr_141358_141575[(1)] = (16));

} else {
var statearr_141359_141576 = state_141348__$1;
(statearr_141359_141576[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (13))){
var inst_141322 = (state_141348[(8)]);
var inst_141325 = cljs.core.empty_QMARK_(inst_141322);
var inst_141326 = (!(inst_141325));
var state_141348__$1 = state_141348;
var statearr_141362_141577 = state_141348__$1;
(statearr_141362_141577[(2)] = inst_141326);

(statearr_141362_141577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (6))){
var inst_141302 = (state_141348[(7)]);
var inst_141311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141312 = [new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),inst_141302];
var inst_141313 = (new cljs.core.PersistentVector(null,2,(5),inst_141311,inst_141312,null));
var inst_141314 = re_frame.core.dispatch(inst_141313);
var state_141348__$1 = state_141348;
var statearr_141364_141580 = state_141348__$1;
(statearr_141364_141580[(2)] = inst_141314);

(statearr_141364_141580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (17))){
var state_141348__$1 = state_141348;
var statearr_141367_141581 = state_141348__$1;
(statearr_141367_141581[(2)] = null);

(statearr_141367_141581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (3))){
var inst_141302 = (state_141348[(7)]);
var inst_141304 = cljs.core.empty_QMARK_(inst_141302);
var inst_141305 = (!(inst_141304));
var state_141348__$1 = state_141348;
var statearr_141368_141582 = state_141348__$1;
(statearr_141368_141582[(2)] = inst_141305);

(statearr_141368_141582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (12))){
var inst_141322 = (state_141348[(8)]);
var inst_141322__$1 = (state_141348[(2)]);
var state_141348__$1 = (function (){var statearr_141369 = state_141348;
(statearr_141369[(8)] = inst_141322__$1);

return statearr_141369;
})();
if(cljs.core.truth_(inst_141322__$1)){
var statearr_141370_141583 = state_141348__$1;
(statearr_141370_141583[(1)] = (13));

} else {
var statearr_141371_141584 = state_141348__$1;
(statearr_141371_141584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (2))){
var inst_141302 = (state_141348[(7)]);
var inst_141302__$1 = (state_141348[(2)]);
var state_141348__$1 = (function (){var statearr_141373 = state_141348;
(statearr_141373[(7)] = inst_141302__$1);

return statearr_141373;
})();
if(cljs.core.truth_(inst_141302__$1)){
var statearr_141374_141587 = state_141348__$1;
(statearr_141374_141587[(1)] = (3));

} else {
var statearr_141375_141589 = state_141348__$1;
(statearr_141375_141589[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (11))){
var inst_141344 = (state_141348[(2)]);
var state_141348__$1 = state_141348;
var statearr_141376_141590 = state_141348__$1;
(statearr_141376_141590[(2)] = inst_141344);

(statearr_141376_141590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (9))){
var inst_141319 = cljs.core.first(pool_addresses);
var inst_141320 = revert.poolsv3._LT_pool_histories(inst_141319,days);
var state_141348__$1 = state_141348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141348__$1,(12),inst_141320);
} else {
if((state_val_141349 === (5))){
var inst_141308 = (state_141348[(2)]);
var state_141348__$1 = state_141348;
if(cljs.core.truth_(inst_141308)){
var statearr_141377_141591 = state_141348__$1;
(statearr_141377_141591[(1)] = (6));

} else {
var statearr_141378_141592 = state_141348__$1;
(statearr_141378_141592[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (14))){
var inst_141322 = (state_141348[(8)]);
var state_141348__$1 = state_141348;
var statearr_141379_141593 = state_141348__$1;
(statearr_141379_141593[(2)] = inst_141322);

(statearr_141379_141593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (16))){
var inst_141322 = (state_141348[(8)]);
var inst_141331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141332 = [new cljs.core.Keyword(null,"v3pool-histories-fecthed","v3pool-histories-fecthed",1695054153),inst_141322];
var inst_141333 = (new cljs.core.PersistentVector(null,2,(5),inst_141331,inst_141332,null));
var inst_141334 = re_frame.core.dispatch(inst_141333);
var state_141348__$1 = state_141348;
var statearr_141381_141594 = state_141348__$1;
(statearr_141381_141594[(2)] = inst_141334);

(statearr_141381_141594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (10))){
var inst_141302 = (state_141348[(7)]);
var inst_141339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141340 = [new cljs.core.Keyword(null,"v3pool-histories-fecthed","v3pool-histories-fecthed",1695054153),inst_141302];
var inst_141341 = (new cljs.core.PersistentVector(null,2,(5),inst_141339,inst_141340,null));
var inst_141342 = re_frame.core.dispatch(inst_141341);
var state_141348__$1 = state_141348;
var statearr_141383_141595 = state_141348__$1;
(statearr_141383_141595[(2)] = inst_141342);

(statearr_141383_141595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (18))){
var inst_141337 = (state_141348[(2)]);
var state_141348__$1 = state_141348;
var statearr_141385_141596 = state_141348__$1;
(statearr_141385_141596[(2)] = inst_141337);

(statearr_141385_141596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141349 === (8))){
var inst_141346 = (state_141348[(2)]);
var state_141348__$1 = state_141348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141348__$1,inst_141346);
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
}
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141389 = [null,null,null,null,null,null,null,null,null];
(statearr_141389[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141389[(1)] = (1));

return statearr_141389;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141348){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141348);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141390){var ex__52189__auto__ = e141390;
var statearr_141391_141597 = state_141348;
(statearr_141391_141597[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141348[(4)]))){
var statearr_141392_141598 = state_141348;
(statearr_141392_141598[(1)] = cljs.core.first((state_141348[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141599 = state_141348;
state_141348 = G__141599;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141348){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141394 = f__52209__auto__();
(statearr_141394[(6)] = c__52208__auto__);

return statearr_141394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),(function (account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141407){
var state_val_141408 = (state_141407[(1)]);
if((state_val_141408 === (1))){
var inst_141395 = revert.pools._LT_fetch_account(account);
var state_141407__$1 = state_141407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141407__$1,(2),inst_141395);
} else {
if((state_val_141408 === (2))){
var inst_141397 = (state_141407[(7)]);
var inst_141397__$1 = (state_141407[(2)]);
var state_141407__$1 = (function (){var statearr_141413 = state_141407;
(statearr_141413[(7)] = inst_141397__$1);

return statearr_141413;
})();
if(cljs.core.truth_(inst_141397__$1)){
var statearr_141414_141600 = state_141407__$1;
(statearr_141414_141600[(1)] = (3));

} else {
var statearr_141415_141601 = state_141407__$1;
(statearr_141415_141601[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141408 === (3))){
var inst_141397 = (state_141407[(7)]);
var inst_141399 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141400 = [new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),inst_141397];
var inst_141401 = (new cljs.core.PersistentVector(null,2,(5),inst_141399,inst_141400,null));
var inst_141402 = re_frame.core.dispatch(inst_141401);
var state_141407__$1 = state_141407;
var statearr_141418_141602 = state_141407__$1;
(statearr_141418_141602[(2)] = inst_141402);

(statearr_141418_141602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141408 === (4))){
var state_141407__$1 = state_141407;
var statearr_141420_141603 = state_141407__$1;
(statearr_141420_141603[(2)] = null);

(statearr_141420_141603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141408 === (5))){
var inst_141405 = (state_141407[(2)]);
var state_141407__$1 = state_141407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141407__$1,inst_141405);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141421 = [null,null,null,null,null,null,null,null];
(statearr_141421[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141421[(1)] = (1));

return statearr_141421;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141407){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141407);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141424){var ex__52189__auto__ = e141424;
var statearr_141425_141604 = state_141407;
(statearr_141425_141604[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141407[(4)]))){
var statearr_141427_141605 = state_141407;
(statearr_141427_141605[(1)] = cljs.core.first((state_141407[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141606 = state_141407;
state_141407 = G__141606;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141407){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141429 = f__52209__auto__();
(statearr_141429[(6)] = c__52208__auto__);

return statearr_141429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-univ3-account-state","fetch-univ3-account-state",944054743),(function (account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141442){
var state_val_141443 = (state_141442[(1)]);
if((state_val_141443 === (1))){
var inst_141430 = revert.poolsv3._LT_fetch_account_state(account);
var state_141442__$1 = state_141442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141442__$1,(2),inst_141430);
} else {
if((state_val_141443 === (2))){
var inst_141432 = (state_141442[(7)]);
var inst_141432__$1 = (state_141442[(2)]);
var state_141442__$1 = (function (){var statearr_141444 = state_141442;
(statearr_141444[(7)] = inst_141432__$1);

return statearr_141444;
})();
if(cljs.core.truth_(inst_141432__$1)){
var statearr_141445_141607 = state_141442__$1;
(statearr_141445_141607[(1)] = (3));

} else {
var statearr_141446_141608 = state_141442__$1;
(statearr_141446_141608[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141443 === (3))){
var inst_141432 = (state_141442[(7)]);
var inst_141434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141435 = [new cljs.core.Keyword(null,"univ3-account-state-fetched","univ3-account-state-fetched",1517628553),inst_141432];
var inst_141436 = (new cljs.core.PersistentVector(null,2,(5),inst_141434,inst_141435,null));
var inst_141437 = re_frame.core.dispatch(inst_141436);
var state_141442__$1 = state_141442;
var statearr_141447_141609 = state_141442__$1;
(statearr_141447_141609[(2)] = inst_141437);

(statearr_141447_141609[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141443 === (4))){
var state_141442__$1 = state_141442;
var statearr_141450_141610 = state_141442__$1;
(statearr_141450_141610[(2)] = null);

(statearr_141450_141610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141443 === (5))){
var inst_141440 = (state_141442[(2)]);
var state_141442__$1 = state_141442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141442__$1,inst_141440);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141452 = [null,null,null,null,null,null,null,null];
(statearr_141452[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141452[(1)] = (1));

return statearr_141452;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141442){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141442);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141453){var ex__52189__auto__ = e141453;
var statearr_141454_141611 = state_141442;
(statearr_141454_141611[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141442[(4)]))){
var statearr_141455_141612 = state_141442;
(statearr_141455_141612[(1)] = cljs.core.first((state_141442[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141613 = state_141442;
state_141442 = G__141613;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141442){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141456 = f__52209__auto__();
(statearr_141456[(6)] = c__52208__auto__);

return statearr_141456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-stakings","fetch-pool-stakings",1573671547),(function (p__141457){
var vec__141458 = p__141457;
var user_account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141458,(0),null);
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141458,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141473){
var state_val_141474 = (state_141473[(1)]);
if((state_val_141474 === (1))){
var inst_141461 = revert.rewards._LT_token_stakings(user_account,pool_addresses);
var state_141473__$1 = state_141473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141473__$1,(2),inst_141461);
} else {
if((state_val_141474 === (2))){
var inst_141463 = (state_141473[(7)]);
var inst_141463__$1 = (state_141473[(2)]);
var state_141473__$1 = (function (){var statearr_141475 = state_141473;
(statearr_141475[(7)] = inst_141463__$1);

return statearr_141475;
})();
if(cljs.core.truth_(inst_141463__$1)){
var statearr_141476_141614 = state_141473__$1;
(statearr_141476_141614[(1)] = (3));

} else {
var statearr_141477_141615 = state_141473__$1;
(statearr_141477_141615[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141474 === (3))){
var inst_141463 = (state_141473[(7)]);
var inst_141465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141466 = [new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),inst_141463];
var inst_141467 = (new cljs.core.PersistentVector(null,2,(5),inst_141465,inst_141466,null));
var inst_141468 = re_frame.core.dispatch(inst_141467);
var state_141473__$1 = state_141473;
var statearr_141478_141616 = state_141473__$1;
(statearr_141478_141616[(2)] = inst_141468);

(statearr_141478_141616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141474 === (4))){
var state_141473__$1 = state_141473;
var statearr_141479_141617 = state_141473__$1;
(statearr_141479_141617[(2)] = null);

(statearr_141479_141617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_141474 === (5))){
var inst_141471 = (state_141473[(2)]);
var state_141473__$1 = state_141473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141473__$1,inst_141471);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141480 = [null,null,null,null,null,null,null,null];
(statearr_141480[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141480[(1)] = (1));

return statearr_141480;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141473){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141473);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141481){var ex__52189__auto__ = e141481;
var statearr_141482_141618 = state_141473;
(statearr_141482_141618[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141473[(4)]))){
var statearr_141483_141619 = state_141473;
(statearr_141483_141619[(1)] = cljs.core.first((state_141473[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141620 = state_141473;
state_141473 = G__141620;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141473){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141484 = f__52209__auto__();
(statearr_141484[(6)] = c__52208__auto__);

return statearr_141484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),(function (token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141494){
var state_val_141495 = (state_141494[(1)]);
if((state_val_141495 === (1))){
var inst_141485 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(token_addresses,revert.utils.weth_address);
var inst_141486 = revert.erc20._LT_infos(inst_141485);
var state_141494__$1 = state_141494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141494__$1,(2),inst_141486);
} else {
if((state_val_141495 === (2))){
var inst_141488 = (state_141494[(2)]);
var inst_141489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141490 = [new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),inst_141488];
var inst_141491 = (new cljs.core.PersistentVector(null,2,(5),inst_141489,inst_141490,null));
var inst_141492 = re_frame.core.dispatch(inst_141491);
var state_141494__$1 = state_141494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141494__$1,inst_141492);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141496 = [null,null,null,null,null,null,null];
(statearr_141496[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141496[(1)] = (1));

return statearr_141496;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141494){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141494);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141497){var ex__52189__auto__ = e141497;
var statearr_141498_141621 = state_141494;
(statearr_141498_141621[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141494[(4)]))){
var statearr_141499_141622 = state_141494;
(statearr_141499_141622[(1)] = cljs.core.first((state_141494[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141623 = state_141494;
state_141494 = G__141623;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141494){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141501 = f__52209__auto__();
(statearr_141501[(6)] = c__52208__auto__);

return statearr_141501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
revert.core._LT_get_block_nums = (function revert$core$_LT_get_block_nums(block_numbers){
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (bns){
return revert.thegraph._LT_block_times(bns);
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((20),block_numbers))));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-block-timestamps","fetch-block-timestamps",-468775801),(function (block_numbers){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_141510){
var state_val_141511 = (state_141510[(1)]);
if((state_val_141511 === (1))){
var inst_141502 = revert.core._LT_get_block_nums(block_numbers);
var state_141510__$1 = state_141510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_141510__$1,(2),inst_141502);
} else {
if((state_val_141511 === (2))){
var inst_141504 = (state_141510[(2)]);
var inst_141505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141506 = [new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),inst_141504];
var inst_141507 = (new cljs.core.PersistentVector(null,2,(5),inst_141505,inst_141506,null));
var inst_141508 = re_frame.core.dispatch(inst_141507);
var state_141510__$1 = state_141510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_141510__$1,inst_141508);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_141512 = [null,null,null,null,null,null,null];
(statearr_141512[(0)] = revert$core$state_machine__52186__auto__);

(statearr_141512[(1)] = (1));

return statearr_141512;
});
var revert$core$state_machine__52186__auto____1 = (function (state_141510){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_141510);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e141513){var ex__52189__auto__ = e141513;
var statearr_141514_141624 = state_141510;
(statearr_141514_141624[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_141510[(4)]))){
var statearr_141515_141625 = state_141510;
(statearr_141515_141625[(1)] = cljs.core.first((state_141510[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__141626 = state_141510;
state_141510 = G__141626;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_141510){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_141510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_141519 = f__52209__auto__();
(statearr_141519[(6)] = c__52208__auto__);

return statearr_141519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
var action__52358__auto___141627 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__141521 = params__52359__auto__;
var map__141521__$1 = (((((!((map__141521 == null))))?(((((map__141521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__141521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__141521):map__141521);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__141523 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__52358__auto___141627);

var action__52358__auto___141628 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__141529 = params__52359__auto__;
var map__141529__$1 = (((((!((map__141529 == null))))?(((((map__141529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__141529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__141529):map__141529);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__141531 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__52358__auto___141628);

var action__52358__auto___141629 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__141537 = params__52359__auto__;
var map__141537__$1 = (((((!((map__141537 == null))))?(((((map__141537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__141537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__141537):map__141537);
var account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141537__$1,new cljs.core.Keyword(null,"account","account",718006320));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__141539 = params__52359__auto__;
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141539,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/account/:account",action__52358__auto___141629);

var action__52358__auto___141630 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__141542 = params__52359__auto__;
var map__141542__$1 = (((((!((map__141542 == null))))?(((((map__141542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__141542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__141542):map__141542);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141542__$1,new cljs.core.Keyword(null,"address","address",559499426));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__141544 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141544,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address",action__52358__auto___141630);

var action__52358__auto___141631 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__141547 = params__52359__auto__;
var map__141547__$1 = (((((!((map__141547 == null))))?(((((map__141547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__141547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__141547):map__141547);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141547__$1,new cljs.core.Keyword(null,"address","address",559499426));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141547__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e141549){if((e141549 instanceof Error)){
var err = e141549;
return (30);
} else {
throw e141549;

}
}})()], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__141550 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141550,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141550,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e141553){if((e141553 instanceof Error)){
var err = e141553;
return (30);
} else {
throw e141553;

}
}})()], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address/:days",action__52358__auto___141631);

if((typeof revert !== 'undefined') && (typeof revert.core !== 'undefined') && (typeof revert.core.history !== 'undefined')){
} else {
revert.core.history = (function (){var G__141554 = (new goog.History());
goog.events.listen(G__141554,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__141554.setEnabled(true);

return G__141554;
})();
}
revert.core.disable_logs = (function revert$core$disable_logs(){
(console.log = (function (){
return null;
}));

(console.error = (function (){
return null;
}));

(console.warn = (function (){
return null;
}));

if((typeof ethereum !== 'undefined')){
try{return ethereum._log.disableAll();
}catch (e141555){if((e141555 instanceof Error)){
var err = e141555;
return console.log("disableAll not available");
} else {
throw e141555;

}
}} else {
return null;
}
});
revert.core.dev_setup = (function revert$core$dev_setup(){
if(revert.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
(cljs.core._STAR_print_length_STAR_ = (30));

return (cljs.core._STAR_print_level_STAR_ = (30));
}
});
revert.core.mount_root = (function revert$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.views.main_panel], null),root_el);
});
revert.core.init = (function revert$core$init(){
revert.core.disable_logs();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("revert.events","initialize-db","revert.events/initialize-db",998329273)], null));

revert.core.dev_setup();

return revert.core.mount_root();
});

//# sourceMappingURL=revert.core.js.map
