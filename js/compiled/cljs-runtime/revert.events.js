goog.provide('revert.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("revert.events","initialize-db","revert.events/initialize-db",998329273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("storage","all","storage/all",-1539481783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session?","session?",67230903),false], null))], null),(function (p__116489){
var map__116490 = p__116489;
var map__116490__$1 = (((((!((map__116490 == null))))?(((((map__116490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116490):map__116490);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116490__$1,new cljs.core.Keyword(null,"db","db",993250759));
var all_stored = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116490__$1,new cljs.core.Keyword("storage","all","storage/all",-1539481783));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["all-stored:",all_stored], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.into.cljs$core$IFn$_invoke$arity$2(revert.db.default_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_stored,"ignored-pools")),new cljs.core.Keyword(null,"v3ignored-pools","v3ignored-pools",-475114929),cljs.core.set(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_stored,"v3ignored-pools")))], null))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),(function (db,p__116492){
var vec__116493 = p__116492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116493,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116493,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"showing","showing",798009604),new_filter_kw);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),(function (db,p__116496){
var vec__116497 = p__116496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116497,(0),null);
var connected_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116497,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected","connected",-169833045),connected_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-exited","toggle-exited",-33056651),(function (db,p__116500){
var vec__116501 = p__116500;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116501,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116501,(1),null);
var current = new cljs.core.Keyword(null,"include-exited","include-exited",-1257095309).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"include-exited","include-exited",-1257095309),cljs.core.not(current));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-logs","toggle-logs",-1152160032),(function (db,p__116504){
var vec__116505 = p__116504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116505,(0),null);
var lp_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116505,(1),null);
var expanded_logs = cljs.core.set(new cljs.core.Keyword(null,"expanded-logs","expanded-logs",696323000).cljs$core$IFn$_invoke$arity$1(db));
var expanded_QMARK_ = cljs.core.contains_QMARK_(expanded_logs,lp_address);
if(expanded_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"expanded-logs","expanded-logs",696323000),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(expanded_logs,lp_address));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"expanded-logs","expanded-logs",696323000),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_logs,lp_address));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-ignore","toggle-ignore",1639980452),(function (p__116508,p__116509){
var map__116510 = p__116508;
var map__116510__$1 = (((((!((map__116510 == null))))?(((((map__116510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116510):map__116510);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116510__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116511 = p__116509;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116511,(0),null);
var lp_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116511,(1),null);
var ignored_pools = cljs.core.set(new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087).cljs$core$IFn$_invoke$arity$1(db));
var ignored_QMARK_ = cljs.core.contains_QMARK_(ignored_pools,lp_address);
var ignored_pools_SINGLEQUOTE_ = ((ignored_QMARK_)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ignored_pools,lp_address):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ignored_pools,lp_address));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087),ignored_pools_SINGLEQUOTE_),new cljs.core.Keyword("storage","set","storage/set",-2122866619),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session?","session?",67230903),false,new cljs.core.Keyword(null,"name","name",1843675177),"ignored-pools",new cljs.core.Keyword(null,"value","value",305978217),ignored_pools_SINGLEQUOTE_], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v3toggle-ignore","v3toggle-ignore",-1594754526),(function (p__116515,p__116516){
var map__116517 = p__116515;
var map__116517__$1 = (((((!((map__116517 == null))))?(((((map__116517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116517):map__116517);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116518 = p__116516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116518,(0),null);
var nft_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116518,(1),null);
var ignored_pools = cljs.core.set(new cljs.core.Keyword(null,"v3ignored-pools","v3ignored-pools",-475114929).cljs$core$IFn$_invoke$arity$1(db));
var nft_id__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nft_id);
var ignored_QMARK_ = cljs.core.contains_QMARK_(ignored_pools,nft_id__$1);
var ignored_pools_SINGLEQUOTE_ = ((ignored_QMARK_)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ignored_pools,nft_id__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ignored_pools,nft_id__$1));
var ignored_pools_strings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,ignored_pools_SINGLEQUOTE_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"v3ignored-pools","v3ignored-pools",-475114929),ignored_pools_SINGLEQUOTE_),new cljs.core.Keyword("storage","set","storage/set",-2122866619),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session?","session?",67230903),false,new cljs.core.Keyword(null,"name","name",1843675177),"v3ignored-pools",new cljs.core.Keyword(null,"value","value",305978217),ignored_pools_strings], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-account","set-account",1327453416),(function (p__116522,p__116523){
var map__116524 = p__116522;
var map__116524__$1 = (((((!((map__116524 == null))))?(((((map__116524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116524):map__116524);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116524__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116525 = p__116523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116525,(0),null);
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116525,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(db),account)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447).cljs$core$IFn$_invoke$arity$1(db),["Loading account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join(''))),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"account","account",718006320)),new cljs.core.Keyword(null,"account-loaded","account-loaded",1191857314),true),new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087),new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"v3ignored-pools","v3ignored-pools",-475114929),new cljs.core.Keyword(null,"v3ignored-pools","v3ignored-pools",-475114929).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),true),new cljs.core.Keyword(null,"pool-stakings-loaded","pool-stakings-loaded",801202224),true)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"account","account",718006320),account),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"account","account",718006320)),new cljs.core.Keyword(null,"account-loaded","account-loaded",1191857314),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),account], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-univ3-account-state","fetch-univ3-account-state",944054743),account], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connect-account","connect-account",719884578),(function (p__116529,_){
var map__116530 = p__116529;
var map__116530__$1 = (((((!((map__116530 == null))))?(((((map__116530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116530):map__116530);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116530__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),null], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),(function (p__116532,p__116533){
var map__116534 = p__116532;
var map__116534__$1 = (((((!((map__116534 == null))))?(((((map__116534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116534):map__116534);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116534__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116535 = p__116533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116535,(0),null);
var pool_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116535,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116535,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"pool","pool",-1814211613)),new cljs.core.Keyword(null,"pool-address","pool-address",-1414046152),pool_address),new cljs.core.Keyword(null,"pool-days","pool-days",99355762),days),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pool_address], null),days], null)], null)], null)], null);
}));
revert.events.pool_day__GT_pool = (function revert$events$pool_day__GT_pool(pool_day){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"token0-address","token0-address",635776650),new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(pool_day)], null);
});
revert.events.pool_histories__GT_pools = (function revert$events$pool_histories__GT_pools(pool_histories){
var addresses = cljs.core.keys(pool_histories);
var pools = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__116539_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__116539_SHARP_],[revert.events.pool_day__GT_pool(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pool_histories,p1__116539_SHARP_)))]);
}),addresses);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,pools);
});
revert.events.pool_day__GT_tokens = (function revert$events$pool_day__GT_tokens(pool_day){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"decimals","decimals",1715096484),new cljs.core.Keyword(null,"token0-decimals","token0-decimals",1310890041).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"token0-name","token0-name",1015863397).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usd","usd",2103592073),new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(pool_day)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"decimals","decimals",1715096484),new cljs.core.Keyword(null,"token1-decimals","token1-decimals",300738309).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"token1-name","token1-name",-103346988).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usd","usd",2103592073),new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(pool_day)], null)], null)], null);
});
revert.events.pool_histories__GT_tokens = (function revert$events$pool_histories__GT_tokens(pool_histories){
var addresses = cljs.core.keys(pool_histories);
var tokens = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__116540_SHARP_){
return revert.events.pool_day__GT_tokens(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pool_histories,p1__116540_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addresses], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(t),t]);
}),tokens));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),(function (p__116541,p__116542){
var map__116543 = p__116541;
var map__116543__$1 = (((((!((map__116543 == null))))?(((((map__116543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116543):map__116543);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116543__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116544 = p__116542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116544,(0),null);
var fetched_histories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116544,(1),null);
var prev_histories = new cljs.core.Keyword(null,"pool-histories","pool-histories",1274102946).cljs$core$IFn$_invoke$arity$1(db);
var prev_pools = new cljs.core.Keyword(null,"pools","pools",-1147332432).cljs$core$IFn$_invoke$arity$1(db);
var prev_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(db);
var pools = revert.events.pool_histories__GT_pools(fetched_histories);
var tokens = revert.events.pool_histories__GT_tokens(fetched_histories);
var updated_pools = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_pools,pools], 0));
var updated_tokens = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_tokens,tokens], 0));
var updated_histories = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_histories,fetched_histories], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"pools","pools",-1147332432),updated_pools),new cljs.core.Keyword(null,"tokens","tokens",-818939304),updated_tokens),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),true),new cljs.core.Keyword(null,"pool-histories","pool-histories",1274102946),updated_histories)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v3pool-histories-fecthed","v3pool-histories-fecthed",1695054153),(function (p__116548,p__116549){
var map__116550 = p__116548;
var map__116550__$1 = (((((!((map__116550 == null))))?(((((map__116550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116550):map__116550);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116550__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116551 = p__116549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116551,(0),null);
var fetched_histories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116551,(1),null);
var prev_histories = new cljs.core.Keyword(null,"v3pool-histories","v3pool-histories",2004929655).cljs$core$IFn$_invoke$arity$1(db);
var updated_histories = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_histories,fetched_histories], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),true),new cljs.core.Keyword(null,"v3pool-histories","v3pool-histories",2004929655),updated_histories)], null);
}));
revert.events.current_lps = (function revert$events$current_lps(mints,burns){
var minted = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),mints);
var burned = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),burns);
var lps_minted = (((cljs.core.count(minted) > (0)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,minted):revert.utils.bn("0"));
var lps_burned = (((cljs.core.count(burned) > (0)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,burned):revert.utils.bn("0"));
return revert.utils.max_bn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bignumber.core._(lps_minted,lps_burned),revert.utils.bn("0.0")], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),(function (p__116555,p__116556){
var map__116557 = p__116555;
var map__116557__$1 = (((((!((map__116557 == null))))?(((((map__116557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116557):map__116557);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116557__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116558 = p__116556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116558,(0),null);
var account_history = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116558,(1),null);
var user_account = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(account_history);
var lp_positions = new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(account_history);
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(account_history);
var burns = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(account_history);
var wallet_lps = new cljs.core.Keyword(null,"wallet-lps","wallet-lps",1919619003).cljs$core$IFn$_invoke$arity$1(account_history);
var pool_addresses = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),lp_positions));
var lp_positions_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
var lp_shares = revert.events.current_lps(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,a),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,a));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([a,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"address","address",559499426),a,new cljs.core.Keyword(null,"mints","mints",-278208376),cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,a),new cljs.core.Keyword(null,"burns","burns",1858509067),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,a),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),lp_shares], null)]);
}),pool_addresses);
var days = (30);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447).cljs$core$IFn$_invoke$arity$1(db),"Loading pool daily snapshots\nLoading staked LP tokens")),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,lp_positions_SINGLEQUOTE_)),new cljs.core.Keyword(null,"account-loaded","account-loaded",1191857314),true),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),false),new cljs.core.Keyword(null,"pool-stakings-loaded","pool-stakings-loaded",801202224),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pool_addresses,days], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-pool-stakings","fetch-pool-stakings",1573671547),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_account,pool_addresses], null)], null)], null)], null);
}));
revert.events.merge_txs_out = (function revert$events$merge_txs_out(lp_positions,all_txs_out){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (lp_address){
var lp_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lp_positions,lp_address);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,cljs.core.into.cljs$core$IFn$_invoke$arity$2(lp_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"txs-out","txs-out",1295820330),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__116562_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__116562_SHARP_),lp_address)){
return bignumber.core._GT_(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__116562_SHARP_),revert.utils.bn(0.0));
} else {
return false;
}
}),all_txs_out)], null))]);
}),cljs.core.keys(lp_positions)));
});
revert.events.merge_stakings = (function revert$events$merge_stakings(lp_positions,all_stakings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (lp_address){
var lp_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lp_positions,lp_address);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,cljs.core.into.cljs$core$IFn$_invoke$arity$2(lp_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__116563_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__116563_SHARP_,new cljs.core.Keyword(null,"token","token",-1211463215));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__116564_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__116564_SHARP_),lp_address);
}),all_stakings))], null))]);
}),cljs.core.keys(lp_positions)));
});
revert.events.lppos__GT_reward_tokens = (function revert$events$lppos__GT_reward_tokens(lppos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lppos)));
});
revert.events.lp_positions__GT_reward_tokens = (function revert$events$lp_positions__GT_reward_tokens(lp_positions){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.events.lppos__GT_reward_tokens,lp_positions))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),(function (p__116566,p__116567){
var map__116568 = p__116566;
var map__116568__$1 = (((((!((map__116568 == null))))?(((((map__116568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116568):map__116568);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116568__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116569 = p__116567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116569,(0),null);
var fetched_stakings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116569,(1),null);
var prev_lp_positions = new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(db);
var lp_addresses = cljs.core.keys(prev_lp_positions);
var db_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437)], null),revert.events.merge_txs_out,new cljs.core.Keyword(null,"txs-out","txs-out",1295820330).cljs$core$IFn$_invoke$arity$1(fetched_stakings)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437)], null),revert.events.merge_stakings,new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(fetched_stakings)),new cljs.core.Keyword(null,"pool-stakings-loaded","pool-stakings-loaded",801202224),true),new cljs.core.Keyword(null,"tokens-loaded","tokens-loaded",-1012788601),false),new cljs.core.Keyword(null,"blocks-ts-loaded","blocks-ts-loaded",-1243238203),cljs.core._PLUS_,(1));
var reward_tokens = revert.events.lp_positions__GT_reward_tokens(cljs.core.vals(new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(db_SINGLEQUOTE_)));
var block_numbers = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__116565_SHARP_){
return revert.lp_positions.block_numbers(p1__116565_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(db_SINGLEQUOTE_))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_SINGLEQUOTE_,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),reward_tokens], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-block-timestamps","fetch-block-timestamps",-468775801),block_numbers], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),(function (p__116573,p__116574){
var map__116575 = p__116573;
var map__116575__$1 = (((((!((map__116575 == null))))?(((((map__116575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116575):map__116575);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116575__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116576 = p__116574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116576,(0),null);
var fetched_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116576,(1),null);
var prev_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(db);
var fetched_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(t),t]);
}),fetched_tokens));
var updated_tokens = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_tokens,fetched_map], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447).cljs$core$IFn$_invoke$arity$1(db),"ERC20s information loaded")),new cljs.core.Keyword(null,"tokens","tokens",-818939304),updated_tokens),new cljs.core.Keyword(null,"tokens-loaded","tokens-loaded",-1012788601),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),(function (p__116580,p__116581){
var map__116582 = p__116580;
var map__116582__$1 = (((((!((map__116582 == null))))?(((((map__116582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116582):map__116582);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116582__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116583 = p__116581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116583,(0),null);
var blocks_ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116583,(1),null);
var prev_blocks_ts = new cljs.core.Keyword(null,"blocks-ts","blocks-ts",-981959410).cljs$core$IFn$_invoke$arity$1(db);
var updated_blocks_ts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_blocks_ts,blocks_ts], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"blocks-ts-loaded","blocks-ts-loaded",-1243238203),cljs.core._,(1)),new cljs.core.Keyword(null,"blocks-ts","blocks-ts",-981959410),updated_blocks_ts)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"univ3-account-state-fetched","univ3-account-state-fetched",1517628553),(function (p__116588,p__116589){
var map__116590 = p__116588;
var map__116590__$1 = (((((!((map__116590 == null))))?(((((map__116590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__116590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__116590):map__116590);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116590__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__116591 = p__116589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116591,(0),null);
var v3state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116591,(1),null);
var prev_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(db);
var updated_tokens = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_tokens,new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(v3state)], 0));
var block_numbers = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__116587_SHARP_){
return revert.lp_positions.block_numbers(p1__116587_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state)], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267),new cljs.core.Keyword(null,"v3lp-positions","v3lp-positions",647276267).cljs$core$IFn$_invoke$arity$1(v3state)),new cljs.core.Keyword(null,"v3pools","v3pools",1464957779),new cljs.core.Keyword(null,"v3pools","v3pools",1464957779).cljs$core$IFn$_invoke$arity$1(v3state)),new cljs.core.Keyword(null,"v3pool-histories","v3pool-histories",2004929655),new cljs.core.Keyword(null,"v3pool-histories","v3pool-histories",2004929655).cljs$core$IFn$_invoke$arity$1(v3state)),new cljs.core.Keyword(null,"tokens","tokens",-818939304),updated_tokens),new cljs.core.Keyword(null,"univ3-state-loaded","univ3-state-loaded",-499833649),true),new cljs.core.Keyword(null,"blocks-ts-loaded","blocks-ts-loaded",-1243238203),cljs.core._PLUS_,(1)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-block-timestamps","fetch-block-timestamps",-468775801),block_numbers], null)], null)], null);
}));

//# sourceMappingURL=revert.events.js.map
