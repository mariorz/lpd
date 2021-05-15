goog.provide('revert.coingecko');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
revert.coingecko._LT_token_prices = (function revert$coingecko$_LT_token_prices(addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_163358){
var state_val_163359 = (state_163358[(1)]);
if((state_val_163359 === (1))){
var inst_163334 = (state_163358[(7)]);
var inst_163337 = (state_163358[(8)]);
var inst_163338 = (state_163358[(9)]);
var inst_163334__$1 = ["https://api.coingecko.com/","api/v3/simple/token_price/ethereum?","vs_currencies=usd%2Ceth&include_last_updated_at=true","&contract_addresses="].join('');
var inst_163335 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",addresses);
var inst_163336 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_163335);
var inst_163337__$1 = goog.string.urlEncode(inst_163336);
var inst_163338__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_163334__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_163337__$1)].join('');
var inst_163339 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_163340 = [false];
var inst_163341 = cljs.core.PersistentHashMap.fromArrays(inst_163339,inst_163340);
var inst_163342 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_163338__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_163341], 0));
var state_163358__$1 = (function (){var statearr_163364 = state_163358;
(statearr_163364[(7)] = inst_163334__$1);

(statearr_163364[(8)] = inst_163337__$1);

(statearr_163364[(9)] = inst_163338__$1);

return statearr_163364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_163358__$1,(2),inst_163342);
} else {
if((state_val_163359 === (2))){
var inst_163334 = (state_163358[(7)]);
var inst_163337 = (state_163358[(8)]);
var inst_163338 = (state_163358[(9)]);
var inst_163344 = (state_163358[(2)]);
var inst_163345 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_163344);
var inst_163346 = (function (){var base_url = inst_163334;
var addy_args = inst_163337;
var full_url = inst_163338;
var data = inst_163345;
return (function (p1__163327_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__163327_SHARP_,new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137));
});
})();
var inst_163347 = revert.utils.update_values(inst_163345,inst_163346);
var inst_163348 = (function (){var base_url = inst_163334;
var addy_args = inst_163337;
var full_url = inst_163338;
var data = inst_163345;
var data_sans_ts = inst_163347;
return (function (p1__163328_SHARP_){
return revert.utils.update_values(p1__163328_SHARP_,(function (n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
}));
});
})();
var inst_163349 = revert.utils.update_values(inst_163347,inst_163348);
var inst_163350 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(inst_163345,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_163349], 0));
var inst_163351 = cljs.core.keys(inst_163350);
var inst_163352 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,inst_163351);
var inst_163353 = (function (){var base_url = inst_163334;
var addy_args = inst_163337;
var full_url = inst_163338;
var data = inst_163345;
var data_sans_ts = inst_163347;
var data_SINGLEQUOTE_ = inst_163350;
return (function (p1__163329_SHARP_){
return clojure.set.rename_keys(p1__163329_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137),new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"usd","usd",2103592073),"usd",new cljs.core.Keyword(null,"eth","eth",1381694970),"eth"], null));
});
})();
var inst_163354 = cljs.core.vals(inst_163350);
var inst_163355 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_163353,inst_163354);
var inst_163356 = cljs.core.zipmap(inst_163352,inst_163355);
var state_163358__$1 = state_163358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_163358__$1,inst_163356);
} else {
return null;
}
}
});
return (function() {
var revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__ = null;
var revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____0 = (function (){
var statearr_163367 = [null,null,null,null,null,null,null,null,null,null];
(statearr_163367[(0)] = revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__);

(statearr_163367[(1)] = (1));

return statearr_163367;
});
var revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____1 = (function (state_163358){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_163358);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e163368){var ex__52189__auto__ = e163368;
var statearr_163369_163418 = state_163358;
(statearr_163369_163418[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_163358[(4)]))){
var statearr_163370_163420 = state_163358;
(statearr_163370_163420[(1)] = cljs.core.first((state_163358[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__163422 = state_163358;
state_163358 = G__163422;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__ = function(state_163358){
switch(arguments.length){
case 0:
return revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____1.call(this,state_163358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____0;
revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____1;
return revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_163371 = f__52209__auto__();
(statearr_163371[(6)] = c__52208__auto__);

return statearr_163371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.coingecko._LT_historic_token_prices = (function revert$coingecko$_LT_historic_token_prices(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_163384){
var state_val_163385 = (state_163384[(1)]);
if((state_val_163385 === (1))){
var inst_163374 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_163375 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_163376 = [false];
var inst_163377 = cljs.core.PersistentHashMap.fromArrays(inst_163375,inst_163376);
var inst_163378 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_163374,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_163377], 0));
var state_163384__$1 = state_163384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_163384__$1,(2),inst_163378);
} else {
if((state_val_163385 === (2))){
var inst_163380 = (state_163384[(2)]);
var inst_163381 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_163380);
var inst_163382 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_163381);
var state_163384__$1 = state_163384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_163384__$1,inst_163382);
} else {
return null;
}
}
});
return (function() {
var revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__ = null;
var revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____0 = (function (){
var statearr_163387 = [null,null,null,null,null,null,null];
(statearr_163387[(0)] = revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__);

(statearr_163387[(1)] = (1));

return statearr_163387;
});
var revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____1 = (function (state_163384){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_163384);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e163388){var ex__52189__auto__ = e163388;
var statearr_163389_163439 = state_163384;
(statearr_163389_163439[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_163384[(4)]))){
var statearr_163390_163447 = state_163384;
(statearr_163390_163447[(1)] = cljs.core.first((state_163384[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__163453 = state_163384;
state_163384 = G__163453;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__ = function(state_163384){
switch(arguments.length){
case 0:
return revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____1.call(this,state_163384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____0;
revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____1;
return revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_163392 = f__52209__auto__();
(statearr_163392[(6)] = c__52208__auto__);

return statearr_163392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.coingecko.js.map
