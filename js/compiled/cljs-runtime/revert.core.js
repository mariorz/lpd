goog.provide('revert.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),(function (_,___$1){
var c__50203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50204__auto__ = (function (){var switch__50180__auto__ = (function (state_50377){
var state_val_50378 = (state_50377[(1)]);
if((state_val_50378 === (1))){
var inst_50363 = revert.ethereum.select_provider();
var state_50377__$1 = state_50377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50377__$1,(2),inst_50363);
} else {
if((state_val_50378 === (2))){
var inst_50365 = (state_50377[(7)]);
var inst_50365__$1 = (state_50377[(2)]);
var state_50377__$1 = (function (){var statearr_50379 = state_50377;
(statearr_50379[(7)] = inst_50365__$1);

return statearr_50379;
})();
if(cljs.core.truth_(inst_50365__$1)){
var statearr_50380_50530 = state_50377__$1;
(statearr_50380_50530[(1)] = (3));

} else {
var statearr_50381_50531 = state_50377__$1;
(statearr_50381_50531[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (3))){
var inst_50365 = (state_50377[(7)]);
var inst_50367 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50368 = [new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),true];
var inst_50369 = (new cljs.core.PersistentVector(null,2,(5),inst_50367,inst_50368,null));
var inst_50370 = re_frame.core.dispatch(inst_50369);
var inst_50371 = ["/account/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50365)].join('');
var inst_50372 = revert.utils.set_hash_BANG_(inst_50371);
var state_50377__$1 = (function (){var statearr_50382 = state_50377;
(statearr_50382[(8)] = inst_50370);

return statearr_50382;
})();
var statearr_50383_50532 = state_50377__$1;
(statearr_50383_50532[(2)] = inst_50372);

(statearr_50383_50532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (4))){
var state_50377__$1 = state_50377;
var statearr_50384_50533 = state_50377__$1;
(statearr_50384_50533[(2)] = null);

(statearr_50384_50533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (5))){
var inst_50375 = (state_50377[(2)]);
var state_50377__$1 = state_50377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50377__$1,inst_50375);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__50181__auto__ = null;
var revert$core$state_machine__50181__auto____0 = (function (){
var statearr_50385 = [null,null,null,null,null,null,null,null,null];
(statearr_50385[(0)] = revert$core$state_machine__50181__auto__);

(statearr_50385[(1)] = (1));

return statearr_50385;
});
var revert$core$state_machine__50181__auto____1 = (function (state_50377){
while(true){
var ret_value__50182__auto__ = (function (){try{while(true){
var result__50183__auto__ = switch__50180__auto__(state_50377);
if(cljs.core.keyword_identical_QMARK_(result__50183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50183__auto__;
}
break;
}
}catch (e50386){var ex__50184__auto__ = e50386;
var statearr_50387_50534 = state_50377;
(statearr_50387_50534[(2)] = ex__50184__auto__);


if(cljs.core.seq((state_50377[(4)]))){
var statearr_50388_50535 = state_50377;
(statearr_50388_50535[(1)] = cljs.core.first((state_50377[(4)])));

} else {
throw ex__50184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50536 = state_50377;
state_50377 = G__50536;
continue;
} else {
return ret_value__50182__auto__;
}
break;
}
});
revert$core$state_machine__50181__auto__ = function(state_50377){
switch(arguments.length){
case 0:
return revert$core$state_machine__50181__auto____0.call(this);
case 1:
return revert$core$state_machine__50181__auto____1.call(this,state_50377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__50181__auto____0;
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__50181__auto____1;
return revert$core$state_machine__50181__auto__;
})()
})();
var state__50205__auto__ = (function (){var statearr_50389 = f__50204__auto__();
(statearr_50389[(6)] = c__50203__auto__);

return statearr_50389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50205__auto__);
}));

return c__50203__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),(function (p__50390){
var vec__50391 = p__50390;
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50391,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50391,(1),null);
var c__50203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50204__auto__ = (function (){var switch__50180__auto__ = (function (state_50406){
var state_val_50407 = (state_50406[(1)]);
if((state_val_50407 === (1))){
var inst_50394 = revert.pools._LT_pool_histories(pool_addresses,days);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50406__$1,(2),inst_50394);
} else {
if((state_val_50407 === (2))){
var inst_50396 = (state_50406[(7)]);
var inst_50396__$1 = (state_50406[(2)]);
var state_50406__$1 = (function (){var statearr_50408 = state_50406;
(statearr_50408[(7)] = inst_50396__$1);

return statearr_50408;
})();
if(cljs.core.truth_(inst_50396__$1)){
var statearr_50409_50537 = state_50406__$1;
(statearr_50409_50537[(1)] = (3));

} else {
var statearr_50410_50538 = state_50406__$1;
(statearr_50410_50538[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (3))){
var inst_50396 = (state_50406[(7)]);
var inst_50398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50399 = [new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),inst_50396];
var inst_50400 = (new cljs.core.PersistentVector(null,2,(5),inst_50398,inst_50399,null));
var inst_50401 = re_frame.core.dispatch(inst_50400);
var state_50406__$1 = state_50406;
var statearr_50411_50539 = state_50406__$1;
(statearr_50411_50539[(2)] = inst_50401);

(statearr_50411_50539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (4))){
var state_50406__$1 = state_50406;
var statearr_50412_50540 = state_50406__$1;
(statearr_50412_50540[(2)] = null);

(statearr_50412_50540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (5))){
var inst_50404 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50406__$1,inst_50404);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__50181__auto__ = null;
var revert$core$state_machine__50181__auto____0 = (function (){
var statearr_50413 = [null,null,null,null,null,null,null,null];
(statearr_50413[(0)] = revert$core$state_machine__50181__auto__);

(statearr_50413[(1)] = (1));

return statearr_50413;
});
var revert$core$state_machine__50181__auto____1 = (function (state_50406){
while(true){
var ret_value__50182__auto__ = (function (){try{while(true){
var result__50183__auto__ = switch__50180__auto__(state_50406);
if(cljs.core.keyword_identical_QMARK_(result__50183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50183__auto__;
}
break;
}
}catch (e50414){var ex__50184__auto__ = e50414;
var statearr_50415_50541 = state_50406;
(statearr_50415_50541[(2)] = ex__50184__auto__);


if(cljs.core.seq((state_50406[(4)]))){
var statearr_50416_50542 = state_50406;
(statearr_50416_50542[(1)] = cljs.core.first((state_50406[(4)])));

} else {
throw ex__50184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50543 = state_50406;
state_50406 = G__50543;
continue;
} else {
return ret_value__50182__auto__;
}
break;
}
});
revert$core$state_machine__50181__auto__ = function(state_50406){
switch(arguments.length){
case 0:
return revert$core$state_machine__50181__auto____0.call(this);
case 1:
return revert$core$state_machine__50181__auto____1.call(this,state_50406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__50181__auto____0;
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__50181__auto____1;
return revert$core$state_machine__50181__auto__;
})()
})();
var state__50205__auto__ = (function (){var statearr_50417 = f__50204__auto__();
(statearr_50417[(6)] = c__50203__auto__);

return statearr_50417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50205__auto__);
}));

return c__50203__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),(function (account){
var c__50203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50204__auto__ = (function (){var switch__50180__auto__ = (function (state_50430){
var state_val_50431 = (state_50430[(1)]);
if((state_val_50431 === (1))){
var inst_50418 = revert.pools._LT_fetch_account(account);
var state_50430__$1 = state_50430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50430__$1,(2),inst_50418);
} else {
if((state_val_50431 === (2))){
var inst_50420 = (state_50430[(7)]);
var inst_50420__$1 = (state_50430[(2)]);
var state_50430__$1 = (function (){var statearr_50432 = state_50430;
(statearr_50432[(7)] = inst_50420__$1);

return statearr_50432;
})();
if(cljs.core.truth_(inst_50420__$1)){
var statearr_50433_50544 = state_50430__$1;
(statearr_50433_50544[(1)] = (3));

} else {
var statearr_50434_50545 = state_50430__$1;
(statearr_50434_50545[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50431 === (3))){
var inst_50420 = (state_50430[(7)]);
var inst_50422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50423 = [new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),inst_50420];
var inst_50424 = (new cljs.core.PersistentVector(null,2,(5),inst_50422,inst_50423,null));
var inst_50425 = re_frame.core.dispatch(inst_50424);
var state_50430__$1 = state_50430;
var statearr_50435_50546 = state_50430__$1;
(statearr_50435_50546[(2)] = inst_50425);

(statearr_50435_50546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50431 === (4))){
var state_50430__$1 = state_50430;
var statearr_50436_50547 = state_50430__$1;
(statearr_50436_50547[(2)] = null);

(statearr_50436_50547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50431 === (5))){
var inst_50428 = (state_50430[(2)]);
var state_50430__$1 = state_50430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50430__$1,inst_50428);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__50181__auto__ = null;
var revert$core$state_machine__50181__auto____0 = (function (){
var statearr_50437 = [null,null,null,null,null,null,null,null];
(statearr_50437[(0)] = revert$core$state_machine__50181__auto__);

(statearr_50437[(1)] = (1));

return statearr_50437;
});
var revert$core$state_machine__50181__auto____1 = (function (state_50430){
while(true){
var ret_value__50182__auto__ = (function (){try{while(true){
var result__50183__auto__ = switch__50180__auto__(state_50430);
if(cljs.core.keyword_identical_QMARK_(result__50183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50183__auto__;
}
break;
}
}catch (e50438){var ex__50184__auto__ = e50438;
var statearr_50439_50548 = state_50430;
(statearr_50439_50548[(2)] = ex__50184__auto__);


if(cljs.core.seq((state_50430[(4)]))){
var statearr_50440_50549 = state_50430;
(statearr_50440_50549[(1)] = cljs.core.first((state_50430[(4)])));

} else {
throw ex__50184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50550 = state_50430;
state_50430 = G__50550;
continue;
} else {
return ret_value__50182__auto__;
}
break;
}
});
revert$core$state_machine__50181__auto__ = function(state_50430){
switch(arguments.length){
case 0:
return revert$core$state_machine__50181__auto____0.call(this);
case 1:
return revert$core$state_machine__50181__auto____1.call(this,state_50430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__50181__auto____0;
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__50181__auto____1;
return revert$core$state_machine__50181__auto__;
})()
})();
var state__50205__auto__ = (function (){var statearr_50441 = f__50204__auto__();
(statearr_50441[(6)] = c__50203__auto__);

return statearr_50441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50205__auto__);
}));

return c__50203__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-stakings","fetch-pool-stakings",1573671547),(function (p__50442){
var vec__50443 = p__50442;
var user_account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50443,(0),null);
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50443,(1),null);
var c__50203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50204__auto__ = (function (){var switch__50180__auto__ = (function (state_50458){
var state_val_50459 = (state_50458[(1)]);
if((state_val_50459 === (1))){
var inst_50446 = revert.rewards._LT_token_stakings(user_account,pool_addresses);
var state_50458__$1 = state_50458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50458__$1,(2),inst_50446);
} else {
if((state_val_50459 === (2))){
var inst_50448 = (state_50458[(7)]);
var inst_50448__$1 = (state_50458[(2)]);
var state_50458__$1 = (function (){var statearr_50460 = state_50458;
(statearr_50460[(7)] = inst_50448__$1);

return statearr_50460;
})();
if(cljs.core.truth_(inst_50448__$1)){
var statearr_50461_50551 = state_50458__$1;
(statearr_50461_50551[(1)] = (3));

} else {
var statearr_50462_50552 = state_50458__$1;
(statearr_50462_50552[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50459 === (3))){
var inst_50448 = (state_50458[(7)]);
var inst_50450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50451 = [new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),inst_50448];
var inst_50452 = (new cljs.core.PersistentVector(null,2,(5),inst_50450,inst_50451,null));
var inst_50453 = re_frame.core.dispatch(inst_50452);
var state_50458__$1 = state_50458;
var statearr_50463_50553 = state_50458__$1;
(statearr_50463_50553[(2)] = inst_50453);

(statearr_50463_50553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50459 === (4))){
var state_50458__$1 = state_50458;
var statearr_50464_50554 = state_50458__$1;
(statearr_50464_50554[(2)] = null);

(statearr_50464_50554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50459 === (5))){
var inst_50456 = (state_50458[(2)]);
var state_50458__$1 = state_50458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50458__$1,inst_50456);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$core$state_machine__50181__auto__ = null;
var revert$core$state_machine__50181__auto____0 = (function (){
var statearr_50465 = [null,null,null,null,null,null,null,null];
(statearr_50465[(0)] = revert$core$state_machine__50181__auto__);

(statearr_50465[(1)] = (1));

return statearr_50465;
});
var revert$core$state_machine__50181__auto____1 = (function (state_50458){
while(true){
var ret_value__50182__auto__ = (function (){try{while(true){
var result__50183__auto__ = switch__50180__auto__(state_50458);
if(cljs.core.keyword_identical_QMARK_(result__50183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50183__auto__;
}
break;
}
}catch (e50466){var ex__50184__auto__ = e50466;
var statearr_50467_50555 = state_50458;
(statearr_50467_50555[(2)] = ex__50184__auto__);


if(cljs.core.seq((state_50458[(4)]))){
var statearr_50468_50556 = state_50458;
(statearr_50468_50556[(1)] = cljs.core.first((state_50458[(4)])));

} else {
throw ex__50184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50557 = state_50458;
state_50458 = G__50557;
continue;
} else {
return ret_value__50182__auto__;
}
break;
}
});
revert$core$state_machine__50181__auto__ = function(state_50458){
switch(arguments.length){
case 0:
return revert$core$state_machine__50181__auto____0.call(this);
case 1:
return revert$core$state_machine__50181__auto____1.call(this,state_50458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__50181__auto____0;
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__50181__auto____1;
return revert$core$state_machine__50181__auto__;
})()
})();
var state__50205__auto__ = (function (){var statearr_50469 = f__50204__auto__();
(statearr_50469[(6)] = c__50203__auto__);

return statearr_50469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50205__auto__);
}));

return c__50203__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),(function (token_addresses){
var c__50203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50204__auto__ = (function (){var switch__50180__auto__ = (function (state_50479){
var state_val_50480 = (state_50479[(1)]);
if((state_val_50480 === (1))){
var inst_50470 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(token_addresses,revert.utils.weth_address);
var inst_50471 = revert.erc20._LT_infos(inst_50470);
var state_50479__$1 = state_50479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50479__$1,(2),inst_50471);
} else {
if((state_val_50480 === (2))){
var inst_50473 = (state_50479[(2)]);
var inst_50474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50475 = [new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),inst_50473];
var inst_50476 = (new cljs.core.PersistentVector(null,2,(5),inst_50474,inst_50475,null));
var inst_50477 = re_frame.core.dispatch(inst_50476);
var state_50479__$1 = state_50479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50479__$1,inst_50477);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__50181__auto__ = null;
var revert$core$state_machine__50181__auto____0 = (function (){
var statearr_50481 = [null,null,null,null,null,null,null];
(statearr_50481[(0)] = revert$core$state_machine__50181__auto__);

(statearr_50481[(1)] = (1));

return statearr_50481;
});
var revert$core$state_machine__50181__auto____1 = (function (state_50479){
while(true){
var ret_value__50182__auto__ = (function (){try{while(true){
var result__50183__auto__ = switch__50180__auto__(state_50479);
if(cljs.core.keyword_identical_QMARK_(result__50183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50183__auto__;
}
break;
}
}catch (e50482){var ex__50184__auto__ = e50482;
var statearr_50483_50558 = state_50479;
(statearr_50483_50558[(2)] = ex__50184__auto__);


if(cljs.core.seq((state_50479[(4)]))){
var statearr_50484_50559 = state_50479;
(statearr_50484_50559[(1)] = cljs.core.first((state_50479[(4)])));

} else {
throw ex__50184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50560 = state_50479;
state_50479 = G__50560;
continue;
} else {
return ret_value__50182__auto__;
}
break;
}
});
revert$core$state_machine__50181__auto__ = function(state_50479){
switch(arguments.length){
case 0:
return revert$core$state_machine__50181__auto____0.call(this);
case 1:
return revert$core$state_machine__50181__auto____1.call(this,state_50479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__50181__auto____0;
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__50181__auto____1;
return revert$core$state_machine__50181__auto__;
})()
})();
var state__50205__auto__ = (function (){var statearr_50485 = f__50204__auto__();
(statearr_50485[(6)] = c__50203__auto__);

return statearr_50485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50205__auto__);
}));

return c__50203__auto__;
}));
revert.core._LT_get_block_nums = (function revert$core$_LT_get_block_nums(block_numbers){
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (bns){
return revert.thegraph._LT_block_times(bns);
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((20),block_numbers))));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-block-timestamps","fetch-block-timestamps",-468775801),(function (block_numbers){
var c__50203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50204__auto__ = (function (){var switch__50180__auto__ = (function (state_50494){
var state_val_50495 = (state_50494[(1)]);
if((state_val_50495 === (1))){
var inst_50486 = revert.core._LT_get_block_nums(block_numbers);
var state_50494__$1 = state_50494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50494__$1,(2),inst_50486);
} else {
if((state_val_50495 === (2))){
var inst_50488 = (state_50494[(2)]);
var inst_50489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50490 = [new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),inst_50488];
var inst_50491 = (new cljs.core.PersistentVector(null,2,(5),inst_50489,inst_50490,null));
var inst_50492 = re_frame.core.dispatch(inst_50491);
var state_50494__$1 = state_50494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50494__$1,inst_50492);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__50181__auto__ = null;
var revert$core$state_machine__50181__auto____0 = (function (){
var statearr_50496 = [null,null,null,null,null,null,null];
(statearr_50496[(0)] = revert$core$state_machine__50181__auto__);

(statearr_50496[(1)] = (1));

return statearr_50496;
});
var revert$core$state_machine__50181__auto____1 = (function (state_50494){
while(true){
var ret_value__50182__auto__ = (function (){try{while(true){
var result__50183__auto__ = switch__50180__auto__(state_50494);
if(cljs.core.keyword_identical_QMARK_(result__50183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50183__auto__;
}
break;
}
}catch (e50497){var ex__50184__auto__ = e50497;
var statearr_50498_50561 = state_50494;
(statearr_50498_50561[(2)] = ex__50184__auto__);


if(cljs.core.seq((state_50494[(4)]))){
var statearr_50499_50562 = state_50494;
(statearr_50499_50562[(1)] = cljs.core.first((state_50494[(4)])));

} else {
throw ex__50184__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50563 = state_50494;
state_50494 = G__50563;
continue;
} else {
return ret_value__50182__auto__;
}
break;
}
});
revert$core$state_machine__50181__auto__ = function(state_50494){
switch(arguments.length){
case 0:
return revert$core$state_machine__50181__auto____0.call(this);
case 1:
return revert$core$state_machine__50181__auto____1.call(this,state_50494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__50181__auto____0;
revert$core$state_machine__50181__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__50181__auto____1;
return revert$core$state_machine__50181__auto__;
})()
})();
var state__50205__auto__ = (function (){var statearr_50500 = f__50204__auto__();
(statearr_50500[(6)] = c__50203__auto__);

return statearr_50500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50205__auto__);
}));

return c__50203__auto__;
}));
var action__50353__auto___50564 = (function (params__50354__auto__){
if(cljs.core.map_QMARK_(params__50354__auto__)){
var map__50501 = params__50354__auto__;
var map__50501__$1 = (((((!((map__50501 == null))))?(((((map__50501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50501):map__50501);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
if(cljs.core.vector_QMARK_(params__50354__auto__)){
var vec__50503 = params__50354__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__50353__auto___50564);

var action__50353__auto___50565 = (function (params__50354__auto__){
if(cljs.core.map_QMARK_(params__50354__auto__)){
var map__50506 = params__50354__auto__;
var map__50506__$1 = (((((!((map__50506 == null))))?(((((map__50506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50506):map__50506);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_(params__50354__auto__)){
var vec__50508 = params__50354__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__50353__auto___50565);

var action__50353__auto___50566 = (function (params__50354__auto__){
if(cljs.core.map_QMARK_(params__50354__auto__)){
var map__50511 = params__50354__auto__;
var map__50511__$1 = (((((!((map__50511 == null))))?(((((map__50511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50511):map__50511);
var account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50511__$1,new cljs.core.Keyword(null,"account","account",718006320));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
if(cljs.core.vector_QMARK_(params__50354__auto__)){
var vec__50513 = params__50354__auto__;
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50513,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/account/:account",action__50353__auto___50566);

var action__50353__auto___50567 = (function (params__50354__auto__){
if(cljs.core.map_QMARK_(params__50354__auto__)){
var map__50516 = params__50354__auto__;
var map__50516__$1 = (((((!((map__50516 == null))))?(((((map__50516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50516):map__50516);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50516__$1,new cljs.core.Keyword(null,"address","address",559499426));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
if(cljs.core.vector_QMARK_(params__50354__auto__)){
var vec__50518 = params__50354__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50518,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address",action__50353__auto___50567);

var action__50353__auto___50568 = (function (params__50354__auto__){
if(cljs.core.map_QMARK_(params__50354__auto__)){
var map__50521 = params__50354__auto__;
var map__50521__$1 = (((((!((map__50521 == null))))?(((((map__50521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50521):map__50521);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50521__$1,new cljs.core.Keyword(null,"address","address",559499426));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50521__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e50523){if((e50523 instanceof Error)){
var err = e50523;
return (30);
} else {
throw e50523;

}
}})()], null));
} else {
if(cljs.core.vector_QMARK_(params__50354__auto__)){
var vec__50524 = params__50354__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50524,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50524,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e50527){if((e50527 instanceof Error)){
var err = e50527;
return (30);
} else {
throw e50527;

}
}})()], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address/:days",action__50353__auto___50568);

if((typeof revert !== 'undefined') && (typeof revert.core !== 'undefined') && (typeof revert.core.history !== 'undefined')){
} else {
revert.core.history = (function (){var G__50528 = (new goog.History());
goog.events.listen(G__50528,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__50528.setEnabled(true);

return G__50528;
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
}catch (e50529){if((e50529 instanceof Error)){
var err = e50529;
return console.log("disableAll not available");
} else {
throw e50529;

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
