goog.provide('revert.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),(function (_,___$1){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95326){
var state_val_95327 = (state_95326[(1)]);
if((state_val_95327 === (1))){
var inst_95312 = revert.ethereum.select_provider();
var state_95326__$1 = state_95326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95326__$1,(2),inst_95312);
} else {
if((state_val_95327 === (2))){
var inst_95314 = (state_95326[(7)]);
var inst_95314__$1 = (state_95326[(2)]);
var state_95326__$1 = (function (){var statearr_95328 = state_95326;
(statearr_95328[(7)] = inst_95314__$1);

return statearr_95328;
})();
if(cljs.core.truth_(inst_95314__$1)){
var statearr_95329_95479 = state_95326__$1;
(statearr_95329_95479[(1)] = (3));

} else {
var statearr_95330_95480 = state_95326__$1;
(statearr_95330_95480[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95327 === (3))){
var inst_95314 = (state_95326[(7)]);
var inst_95316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95317 = [new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),true];
var inst_95318 = (new cljs.core.PersistentVector(null,2,(5),inst_95316,inst_95317,null));
var inst_95319 = re_frame.core.dispatch(inst_95318);
var inst_95320 = ["/account/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_95314)].join('');
var inst_95321 = revert.utils.set_hash_BANG_(inst_95320);
var state_95326__$1 = (function (){var statearr_95331 = state_95326;
(statearr_95331[(8)] = inst_95319);

return statearr_95331;
})();
var statearr_95332_95481 = state_95326__$1;
(statearr_95332_95481[(2)] = inst_95321);

(statearr_95332_95481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95327 === (4))){
var state_95326__$1 = state_95326;
var statearr_95333_95482 = state_95326__$1;
(statearr_95333_95482[(2)] = null);

(statearr_95333_95482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95327 === (5))){
var inst_95324 = (state_95326[(2)]);
var state_95326__$1 = state_95326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95326__$1,inst_95324);
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
var statearr_95334 = [null,null,null,null,null,null,null,null,null];
(statearr_95334[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95334[(1)] = (1));

return statearr_95334;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95326){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95326);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95335){var ex__52189__auto__ = e95335;
var statearr_95336_95483 = state_95326;
(statearr_95336_95483[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95326[(4)]))){
var statearr_95337_95484 = state_95326;
(statearr_95337_95484[(1)] = cljs.core.first((state_95326[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95485 = state_95326;
state_95326 = G__95485;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95326){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95338 = f__52209__auto__();
(statearr_95338[(6)] = c__52208__auto__);

return statearr_95338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),(function (p__95339){
var vec__95340 = p__95339;
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95340,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95340,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95355){
var state_val_95356 = (state_95355[(1)]);
if((state_val_95356 === (1))){
var inst_95343 = revert.pools._LT_pool_histories(pool_addresses,days);
var state_95355__$1 = state_95355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95355__$1,(2),inst_95343);
} else {
if((state_val_95356 === (2))){
var inst_95345 = (state_95355[(7)]);
var inst_95345__$1 = (state_95355[(2)]);
var state_95355__$1 = (function (){var statearr_95357 = state_95355;
(statearr_95357[(7)] = inst_95345__$1);

return statearr_95357;
})();
if(cljs.core.truth_(inst_95345__$1)){
var statearr_95358_95486 = state_95355__$1;
(statearr_95358_95486[(1)] = (3));

} else {
var statearr_95359_95487 = state_95355__$1;
(statearr_95359_95487[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95356 === (3))){
var inst_95345 = (state_95355[(7)]);
var inst_95347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95348 = [new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),inst_95345];
var inst_95349 = (new cljs.core.PersistentVector(null,2,(5),inst_95347,inst_95348,null));
var inst_95350 = re_frame.core.dispatch(inst_95349);
var state_95355__$1 = state_95355;
var statearr_95360_95488 = state_95355__$1;
(statearr_95360_95488[(2)] = inst_95350);

(statearr_95360_95488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95356 === (4))){
var state_95355__$1 = state_95355;
var statearr_95361_95489 = state_95355__$1;
(statearr_95361_95489[(2)] = null);

(statearr_95361_95489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95356 === (5))){
var inst_95353 = (state_95355[(2)]);
var state_95355__$1 = state_95355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95355__$1,inst_95353);
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
var statearr_95362 = [null,null,null,null,null,null,null,null];
(statearr_95362[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95362[(1)] = (1));

return statearr_95362;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95355){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95355);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95363){var ex__52189__auto__ = e95363;
var statearr_95364_95490 = state_95355;
(statearr_95364_95490[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95355[(4)]))){
var statearr_95365_95491 = state_95355;
(statearr_95365_95491[(1)] = cljs.core.first((state_95355[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95492 = state_95355;
state_95355 = G__95492;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95355){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95366 = f__52209__auto__();
(statearr_95366[(6)] = c__52208__auto__);

return statearr_95366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),(function (account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95379){
var state_val_95380 = (state_95379[(1)]);
if((state_val_95380 === (1))){
var inst_95367 = revert.pools._LT_fetch_account(account);
var state_95379__$1 = state_95379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95379__$1,(2),inst_95367);
} else {
if((state_val_95380 === (2))){
var inst_95369 = (state_95379[(7)]);
var inst_95369__$1 = (state_95379[(2)]);
var state_95379__$1 = (function (){var statearr_95381 = state_95379;
(statearr_95381[(7)] = inst_95369__$1);

return statearr_95381;
})();
if(cljs.core.truth_(inst_95369__$1)){
var statearr_95382_95493 = state_95379__$1;
(statearr_95382_95493[(1)] = (3));

} else {
var statearr_95383_95494 = state_95379__$1;
(statearr_95383_95494[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95380 === (3))){
var inst_95369 = (state_95379[(7)]);
var inst_95371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95372 = [new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),inst_95369];
var inst_95373 = (new cljs.core.PersistentVector(null,2,(5),inst_95371,inst_95372,null));
var inst_95374 = re_frame.core.dispatch(inst_95373);
var state_95379__$1 = state_95379;
var statearr_95384_95495 = state_95379__$1;
(statearr_95384_95495[(2)] = inst_95374);

(statearr_95384_95495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95380 === (4))){
var state_95379__$1 = state_95379;
var statearr_95385_95496 = state_95379__$1;
(statearr_95385_95496[(2)] = null);

(statearr_95385_95496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95380 === (5))){
var inst_95377 = (state_95379[(2)]);
var state_95379__$1 = state_95379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95379__$1,inst_95377);
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
var statearr_95386 = [null,null,null,null,null,null,null,null];
(statearr_95386[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95386[(1)] = (1));

return statearr_95386;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95379){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95379);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95387){var ex__52189__auto__ = e95387;
var statearr_95388_95497 = state_95379;
(statearr_95388_95497[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95379[(4)]))){
var statearr_95389_95498 = state_95379;
(statearr_95389_95498[(1)] = cljs.core.first((state_95379[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95499 = state_95379;
state_95379 = G__95499;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95379){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95390 = f__52209__auto__();
(statearr_95390[(6)] = c__52208__auto__);

return statearr_95390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-stakings","fetch-pool-stakings",1573671547),(function (p__95391){
var vec__95392 = p__95391;
var user_account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95392,(0),null);
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95392,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95407){
var state_val_95408 = (state_95407[(1)]);
if((state_val_95408 === (1))){
var inst_95395 = revert.rewards._LT_token_stakings(user_account,pool_addresses);
var state_95407__$1 = state_95407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95407__$1,(2),inst_95395);
} else {
if((state_val_95408 === (2))){
var inst_95397 = (state_95407[(7)]);
var inst_95397__$1 = (state_95407[(2)]);
var state_95407__$1 = (function (){var statearr_95409 = state_95407;
(statearr_95409[(7)] = inst_95397__$1);

return statearr_95409;
})();
if(cljs.core.truth_(inst_95397__$1)){
var statearr_95410_95500 = state_95407__$1;
(statearr_95410_95500[(1)] = (3));

} else {
var statearr_95411_95501 = state_95407__$1;
(statearr_95411_95501[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95408 === (3))){
var inst_95397 = (state_95407[(7)]);
var inst_95399 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95400 = [new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),inst_95397];
var inst_95401 = (new cljs.core.PersistentVector(null,2,(5),inst_95399,inst_95400,null));
var inst_95402 = re_frame.core.dispatch(inst_95401);
var state_95407__$1 = state_95407;
var statearr_95412_95502 = state_95407__$1;
(statearr_95412_95502[(2)] = inst_95402);

(statearr_95412_95502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95408 === (4))){
var state_95407__$1 = state_95407;
var statearr_95413_95503 = state_95407__$1;
(statearr_95413_95503[(2)] = null);

(statearr_95413_95503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95408 === (5))){
var inst_95405 = (state_95407[(2)]);
var state_95407__$1 = state_95407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95407__$1,inst_95405);
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
var statearr_95414 = [null,null,null,null,null,null,null,null];
(statearr_95414[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95414[(1)] = (1));

return statearr_95414;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95407){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95407);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95415){var ex__52189__auto__ = e95415;
var statearr_95416_95504 = state_95407;
(statearr_95416_95504[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95407[(4)]))){
var statearr_95417_95505 = state_95407;
(statearr_95417_95505[(1)] = cljs.core.first((state_95407[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95506 = state_95407;
state_95407 = G__95506;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95407){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95418 = f__52209__auto__();
(statearr_95418[(6)] = c__52208__auto__);

return statearr_95418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),(function (token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95428){
var state_val_95429 = (state_95428[(1)]);
if((state_val_95429 === (1))){
var inst_95419 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(token_addresses,revert.utils.weth_address);
var inst_95420 = revert.erc20._LT_infos(inst_95419);
var state_95428__$1 = state_95428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95428__$1,(2),inst_95420);
} else {
if((state_val_95429 === (2))){
var inst_95422 = (state_95428[(2)]);
var inst_95423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95424 = [new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),inst_95422];
var inst_95425 = (new cljs.core.PersistentVector(null,2,(5),inst_95423,inst_95424,null));
var inst_95426 = re_frame.core.dispatch(inst_95425);
var state_95428__$1 = state_95428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95428__$1,inst_95426);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_95430 = [null,null,null,null,null,null,null];
(statearr_95430[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95430[(1)] = (1));

return statearr_95430;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95428){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95428);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95431){var ex__52189__auto__ = e95431;
var statearr_95432_95507 = state_95428;
(statearr_95432_95507[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95428[(4)]))){
var statearr_95433_95508 = state_95428;
(statearr_95433_95508[(1)] = cljs.core.first((state_95428[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95509 = state_95428;
state_95428 = G__95509;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95428){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95434 = f__52209__auto__();
(statearr_95434[(6)] = c__52208__auto__);

return statearr_95434;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95443){
var state_val_95444 = (state_95443[(1)]);
if((state_val_95444 === (1))){
var inst_95435 = revert.core._LT_get_block_nums(block_numbers);
var state_95443__$1 = state_95443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95443__$1,(2),inst_95435);
} else {
if((state_val_95444 === (2))){
var inst_95437 = (state_95443[(2)]);
var inst_95438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95439 = [new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),inst_95437];
var inst_95440 = (new cljs.core.PersistentVector(null,2,(5),inst_95438,inst_95439,null));
var inst_95441 = re_frame.core.dispatch(inst_95440);
var state_95443__$1 = state_95443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95443__$1,inst_95441);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_95445 = [null,null,null,null,null,null,null];
(statearr_95445[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95445[(1)] = (1));

return statearr_95445;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95443){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95443);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95446){var ex__52189__auto__ = e95446;
var statearr_95447_95510 = state_95443;
(statearr_95447_95510[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95443[(4)]))){
var statearr_95448_95511 = state_95443;
(statearr_95448_95511[(1)] = cljs.core.first((state_95443[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95512 = state_95443;
state_95443 = G__95512;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95443){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95449 = f__52209__auto__();
(statearr_95449[(6)] = c__52208__auto__);

return statearr_95449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
var action__52358__auto___95513 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95450 = params__52359__auto__;
var map__95450__$1 = (((((!((map__95450 == null))))?(((((map__95450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95450):map__95450);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95452 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__52358__auto___95513);

var action__52358__auto___95514 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95455 = params__52359__auto__;
var map__95455__$1 = (((((!((map__95455 == null))))?(((((map__95455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95455):map__95455);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95457 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__52358__auto___95514);

var action__52358__auto___95515 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95460 = params__52359__auto__;
var map__95460__$1 = (((((!((map__95460 == null))))?(((((map__95460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95460):map__95460);
var account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95460__$1,new cljs.core.Keyword(null,"account","account",718006320));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95462 = params__52359__auto__;
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95462,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/account/:account",action__52358__auto___95515);

var action__52358__auto___95516 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95465 = params__52359__auto__;
var map__95465__$1 = (((((!((map__95465 == null))))?(((((map__95465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95465):map__95465);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95465__$1,new cljs.core.Keyword(null,"address","address",559499426));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95467 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95467,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address",action__52358__auto___95516);

var action__52358__auto___95517 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95470 = params__52359__auto__;
var map__95470__$1 = (((((!((map__95470 == null))))?(((((map__95470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95470):map__95470);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95470__$1,new cljs.core.Keyword(null,"address","address",559499426));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95470__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e95472){if((e95472 instanceof Error)){
var err = e95472;
return (30);
} else {
throw e95472;

}
}})()], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95473 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95473,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95473,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e95476){if((e95476 instanceof Error)){
var err = e95476;
return (30);
} else {
throw e95476;

}
}})()], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address/:days",action__52358__auto___95517);

if((typeof revert !== 'undefined') && (typeof revert.core !== 'undefined') && (typeof revert.core.history !== 'undefined')){
} else {
revert.core.history = (function (){var G__95477 = (new goog.History());
goog.events.listen(G__95477,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__95477.setEnabled(true);

return G__95477;
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
}catch (e95478){if((e95478 instanceof Error)){
var err = e95478;
return console.log("disableAll not available");
} else {
throw e95478;

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
