goog.provide('revert.erc20');
revert.erc20._LT_uniswap_infos = (function revert$erc20$_LT_uniswap_infos(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87228){
var state_val_87230 = (state_87228[(1)]);
if((state_val_87230 === (1))){
var inst_87204 = revert.thegraph._LT_token_days_uni(token_addresses);
var state_87228__$1 = state_87228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87228__$1,(2),inst_87204);
} else {
if((state_val_87230 === (2))){
var inst_87208 = (state_87228[(2)]);
var inst_87214 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),inst_87208);
var inst_87216 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_87214);
var inst_87219 = cljs.core.count(inst_87216);
var inst_87224 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(inst_87219,inst_87208);
var state_87228__$1 = state_87228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87228__$1,inst_87224);
} else {
return null;
}
}
});
return (function() {
var revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__ = null;
var revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_87248 = [null,null,null,null,null,null,null];
(statearr_87248[(0)] = revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__);

(statearr_87248[(1)] = (1));

return statearr_87248;
});
var revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____1 = (function (state_87228){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87228);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87252){var ex__52189__auto__ = e87252;
var statearr_87254_87408 = state_87228;
(statearr_87254_87408[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87228[(4)]))){
var statearr_87257_87411 = state_87228;
(statearr_87257_87411[(1)] = cljs.core.first((state_87228[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87421 = state_87228;
state_87228 = G__87421;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__ = function(state_87228){
switch(arguments.length){
case 0:
return revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____1.call(this,state_87228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____0;
revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____1;
return revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87261 = f__52209__auto__();
(statearr_87261[(6)] = c__52208__auto__);

return statearr_87261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.erc20._LT_sushiswap_infos = (function revert$erc20$_LT_sushiswap_infos(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87282){
var state_val_87283 = (state_87282[(1)]);
if((state_val_87283 === (1))){
var inst_87271 = revert.thegraph._LT_token_days_sushi(token_addresses);
var state_87282__$1 = state_87282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87282__$1,(2),inst_87271);
} else {
if((state_val_87283 === (2))){
var inst_87274 = (state_87282[(2)]);
var inst_87275 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),inst_87274);
var inst_87276 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_87275);
var inst_87277 = cljs.core.count(inst_87276);
var inst_87278 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(inst_87277,inst_87274);
var state_87282__$1 = state_87282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87282__$1,inst_87278);
} else {
return null;
}
}
});
return (function() {
var revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__ = null;
var revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_87302 = [null,null,null,null,null,null,null];
(statearr_87302[(0)] = revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__);

(statearr_87302[(1)] = (1));

return statearr_87302;
});
var revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____1 = (function (state_87282){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87282);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87304){var ex__52189__auto__ = e87304;
var statearr_87305_87432 = state_87282;
(statearr_87305_87432[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87282[(4)]))){
var statearr_87308_87433 = state_87282;
(statearr_87308_87433[(1)] = cljs.core.first((state_87282[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87434 = state_87282;
state_87282 = G__87434;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__ = function(state_87282){
switch(arguments.length){
case 0:
return revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____1.call(this,state_87282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____0;
revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____1;
return revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87311 = f__52209__auto__();
(statearr_87311[(6)] = c__52208__auto__);

return statearr_87311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.erc20._LT_infos = (function revert$erc20$_LT_infos(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87342){
var state_val_87343 = (state_87342[(1)]);
if((state_val_87343 === (1))){
var inst_87320 = (state_87342[(7)]);
var inst_87320__$1 = cljs.core.set(token_addresses);
var inst_87321 = cljs.core.vec(inst_87320__$1);
var inst_87322 = revert.erc20._LT_uniswap_infos(inst_87321);
var state_87342__$1 = (function (){var statearr_87366 = state_87342;
(statearr_87366[(7)] = inst_87320__$1);

return statearr_87366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87342__$1,(2),inst_87322);
} else {
if((state_val_87343 === (2))){
var inst_87328 = (state_87342[(8)]);
var inst_87320 = (state_87342[(7)]);
var inst_87324 = (state_87342[(9)]);
var inst_87324__$1 = (state_87342[(2)]);
var inst_87325 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),inst_87324__$1);
var inst_87326 = cljs.core.set(inst_87325);
var inst_87327 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_87320,inst_87326);
var inst_87328__$1 = cljs.core.vec(inst_87327);
var inst_87330 = cljs.core.count(inst_87328__$1);
var inst_87331 = (inst_87330 > (0));
var state_87342__$1 = (function (){var statearr_87372 = state_87342;
(statearr_87372[(8)] = inst_87328__$1);

(statearr_87372[(9)] = inst_87324__$1);

return statearr_87372;
})();
if(cljs.core.truth_(inst_87331)){
var statearr_87374_87462 = state_87342__$1;
(statearr_87374_87462[(1)] = (3));

} else {
var statearr_87376_87466 = state_87342__$1;
(statearr_87376_87466[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87343 === (3))){
var inst_87328 = (state_87342[(8)]);
var inst_87333 = revert.erc20._LT_sushiswap_infos(inst_87328);
var state_87342__$1 = state_87342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87342__$1,(6),inst_87333);
} else {
if((state_val_87343 === (4))){
var inst_87337 = cljs.core.PersistentVector.EMPTY;
var state_87342__$1 = state_87342;
var statearr_87379_87470 = state_87342__$1;
(statearr_87379_87470[(2)] = inst_87337);

(statearr_87379_87470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87343 === (5))){
var inst_87324 = (state_87342[(9)]);
var inst_87339 = (state_87342[(2)]);
var inst_87340 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_87324,inst_87339);
var state_87342__$1 = state_87342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87342__$1,inst_87340);
} else {
if((state_val_87343 === (6))){
var inst_87335 = (state_87342[(2)]);
var state_87342__$1 = state_87342;
var statearr_87386_87472 = state_87342__$1;
(statearr_87386_87472[(2)] = inst_87335);

(statearr_87386_87472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var revert$erc20$_LT_infos_$_state_machine__52186__auto__ = null;
var revert$erc20$_LT_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_87389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_87389[(0)] = revert$erc20$_LT_infos_$_state_machine__52186__auto__);

(statearr_87389[(1)] = (1));

return statearr_87389;
});
var revert$erc20$_LT_infos_$_state_machine__52186__auto____1 = (function (state_87342){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87342);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87390){var ex__52189__auto__ = e87390;
var statearr_87392_87476 = state_87342;
(statearr_87392_87476[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87342[(4)]))){
var statearr_87394_87480 = state_87342;
(statearr_87394_87480[(1)] = cljs.core.first((state_87342[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87482 = state_87342;
state_87342 = G__87482;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$erc20$_LT_infos_$_state_machine__52186__auto__ = function(state_87342){
switch(arguments.length){
case 0:
return revert$erc20$_LT_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$erc20$_LT_infos_$_state_machine__52186__auto____1.call(this,state_87342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$erc20$_LT_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$erc20$_LT_infos_$_state_machine__52186__auto____0;
revert$erc20$_LT_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$erc20$_LT_infos_$_state_machine__52186__auto____1;
return revert$erc20$_LT_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87396 = f__52209__auto__();
(statearr_87396[(6)] = c__52208__auto__);

return statearr_87396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.erc20.js.map
