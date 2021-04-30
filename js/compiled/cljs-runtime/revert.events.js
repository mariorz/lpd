goog.provide('revert.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("revert.events","initialize-db","revert.events/initialize-db",998329273),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("storage","all","storage/all",-1539481783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session?","session?",67230903),false], null))], null),(function (p__90317){
var map__90318 = p__90317;
var map__90318__$1 = (((((!((map__90318 == null))))?(((((map__90318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90318):map__90318);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90318__$1,new cljs.core.Keyword(null,"db","db",993250759));
var all_stored = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90318__$1,new cljs.core.Keyword("storage","all","storage/all",-1539481783));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.into.cljs$core$IFn$_invoke$arity$2(revert.db.default_db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_stored,"ignored-pools"))], null))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),(function (db,p__90320){
var vec__90321 = p__90320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90321,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90321,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"showing","showing",798009604),new_filter_kw);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),(function (db,p__90324){
var vec__90325 = p__90324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90325,(0),null);
var connected_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90325,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"connected","connected",-169833045),connected_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-exited","toggle-exited",-33056651),(function (db,p__90328){
var vec__90329 = p__90328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90329,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90329,(1),null);
var current = new cljs.core.Keyword(null,"include-exited","include-exited",-1257095309).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"include-exited","include-exited",-1257095309),cljs.core.not(current));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-logs","toggle-logs",-1152160032),(function (db,p__90332){
var vec__90333 = p__90332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90333,(0),null);
var lp_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90333,(1),null);
var expanded_logs = cljs.core.set(new cljs.core.Keyword(null,"expanded-logs","expanded-logs",696323000).cljs$core$IFn$_invoke$arity$1(db));
var expanded_QMARK_ = cljs.core.contains_QMARK_(expanded_logs,lp_address);
if(expanded_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"expanded-logs","expanded-logs",696323000),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(expanded_logs,lp_address));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"expanded-logs","expanded-logs",696323000),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_logs,lp_address));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-ignore","toggle-ignore",1639980452),(function (p__90336,p__90337){
var map__90338 = p__90336;
var map__90338__$1 = (((((!((map__90338 == null))))?(((((map__90338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90338):map__90338);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90338__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90339 = p__90337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90339,(0),null);
var lp_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90339,(1),null);
var ignored_pools = cljs.core.set(new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087).cljs$core$IFn$_invoke$arity$1(db));
var ignored_QMARK_ = cljs.core.contains_QMARK_(ignored_pools,lp_address);
var ignored_pools_SINGLEQUOTE_ = ((ignored_QMARK_)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ignored_pools,lp_address):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ignored_pools,lp_address));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087),ignored_pools_SINGLEQUOTE_),new cljs.core.Keyword("storage","set","storage/set",-2122866619),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session?","session?",67230903),false,new cljs.core.Keyword(null,"name","name",1843675177),"ignored-pools",new cljs.core.Keyword(null,"value","value",305978217),ignored_pools_SINGLEQUOTE_], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-account","set-account",1327453416),(function (p__90343,p__90344){
var map__90345 = p__90343;
var map__90345__$1 = (((((!((map__90345 == null))))?(((((map__90345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90345):map__90345);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90346 = p__90344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90346,(0),null);
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90346,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(db),account)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447).cljs$core$IFn$_invoke$arity$1(db),["Loading account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account)].join(''))),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"account","account",718006320)),new cljs.core.Keyword(null,"account-loaded","account-loaded",1191857314),true),new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087),new cljs.core.Keyword(null,"ignored-pools","ignored-pools",-400936087).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),true),new cljs.core.Keyword(null,"pool-stakings-loaded","pool-stakings-loaded",801202224),true)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"account","account",718006320),account),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"account","account",718006320)),new cljs.core.Keyword(null,"account-loaded","account-loaded",1191857314),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),account], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connect-account","connect-account",719884578),(function (p__90350,_){
var map__90351 = p__90350;
var map__90351__$1 = (((((!((map__90351 == null))))?(((((map__90351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90351):map__90351);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90351__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),null], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),(function (p__90353,p__90354){
var map__90355 = p__90353;
var map__90355__$1 = (((((!((map__90355 == null))))?(((((map__90355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90355):map__90355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90355__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90356 = p__90354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90356,(0),null);
var pool_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90356,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90356,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"pool","pool",-1814211613)),new cljs.core.Keyword(null,"pool-address","pool-address",-1414046152),pool_address),new cljs.core.Keyword(null,"pool-days","pool-days",99355762),days),new cljs.core.Keyword(null,"pool-histories-loaded","pool-histories-loaded",-2037330205),false),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pool_address], null),days], null)], null)], null)], null);
}));
revert.events.pool_day__GT_pool = (function revert$events$pool_day__GT_pool(pool_day){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"token0-address","token0-address",635776650),new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(pool_day)], null);
});
revert.events.pool_histories__GT_pools = (function revert$events$pool_histories__GT_pools(pool_histories){
var addresses = cljs.core.keys(pool_histories);
var pools = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__90360_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__90360_SHARP_],[revert.events.pool_day__GT_pool(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pool_histories,p1__90360_SHARP_)))]);
}),addresses);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,pools);
});
revert.events.pool_day__GT_tokens = (function revert$events$pool_day__GT_tokens(pool_day){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"token0-address","token0-address",635776650).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"decimals","decimals",1715096484),new cljs.core.Keyword(null,"token0-decimals","token0-decimals",1310890041).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"token0-name","token0-name",1015863397).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usd","usd",2103592073),new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(pool_day)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"decimals","decimals",1715096484),new cljs.core.Keyword(null,"token1-decimals","token1-decimals",300738309).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"token1-name","token1-name",-103346988).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usd","usd",2103592073),new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195).cljs$core$IFn$_invoke$arity$1(pool_day),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(pool_day)], null)], null)], null);
});
revert.events.pool_histories__GT_tokens = (function revert$events$pool_histories__GT_tokens(pool_histories){
var addresses = cljs.core.keys(pool_histories);
var tokens = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__90361_SHARP_){
return revert.events.pool_day__GT_tokens(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pool_histories,p1__90361_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addresses], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(t),t]);
}),tokens));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),(function (p__90362,p__90363){
var map__90364 = p__90362;
var map__90364__$1 = (((((!((map__90364 == null))))?(((((map__90364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90364):map__90364);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90364__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90365 = p__90363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90365,(0),null);
var fetched_histories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90365,(1),null);
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
revert.events.current_lps = (function revert$events$current_lps(mints,burns){
var minted = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),mints);
var burned = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),burns);
var lps_minted = (((cljs.core.count(minted) > (0)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,minted):revert.utils.bn("0"));
var lps_burned = (((cljs.core.count(burned) > (0)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,burned):revert.utils.bn("0"));
return revert.utils.max_bn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bignumber.core._(lps_minted,lps_burned),revert.utils.bn("0.0")], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),(function (p__90369,p__90370){
var map__90371 = p__90369;
var map__90371__$1 = (((((!((map__90371 == null))))?(((((map__90371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90371):map__90371);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90371__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90372 = p__90370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90372,(0),null);
var account_history = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90372,(1),null);
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,cljs.core.into.cljs$core$IFn$_invoke$arity$2(lp_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"txs-out","txs-out",1295820330),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__90376_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__90376_SHARP_),lp_address)){
return bignumber.core._GT_(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__90376_SHARP_),revert.utils.bn(0.0));
} else {
return false;
}
}),all_txs_out)], null))]);
}),cljs.core.keys(lp_positions)));
});
revert.events.merge_stakings = (function revert$events$merge_stakings(lp_positions,all_stakings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (lp_address){
var lp_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lp_positions,lp_address);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,cljs.core.into.cljs$core$IFn$_invoke$arity$2(lp_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__90377_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__90377_SHARP_,new cljs.core.Keyword(null,"token","token",-1211463215));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__90378_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__90378_SHARP_),lp_address);
}),all_stakings))], null))]);
}),cljs.core.keys(lp_positions)));
});
revert.events.lppos__GT_reward_tokens = (function revert$events$lppos__GT_reward_tokens(lppos){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lppos)));
});
revert.events.lp_positions__GT_reward_tokens = (function revert$events$lp_positions__GT_reward_tokens(lp_positions){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.events.lppos__GT_reward_tokens,lp_positions))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),(function (p__90380,p__90381){
var map__90382 = p__90380;
var map__90382__$1 = (((((!((map__90382 == null))))?(((((map__90382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90382):map__90382);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90382__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90383 = p__90381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90383,(0),null);
var fetched_stakings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90383,(1),null);
var prev_lp_positions = new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(db);
var lp_addresses = cljs.core.keys(prev_lp_positions);
var db_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437)], null),revert.events.merge_txs_out,new cljs.core.Keyword(null,"txs-out","txs-out",1295820330).cljs$core$IFn$_invoke$arity$1(fetched_stakings)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437)], null),revert.events.merge_stakings,new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(fetched_stakings)),new cljs.core.Keyword(null,"pool-stakings-loaded","pool-stakings-loaded",801202224),true),new cljs.core.Keyword(null,"tokens-loaded","tokens-loaded",-1012788601),false);
var reward_tokens = revert.events.lp_positions__GT_reward_tokens(cljs.core.vals(new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(db_SINGLEQUOTE_)));
var block_numbers = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__90379_SHARP_){
return revert.lp_positions.block_numbers(p1__90379_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(db_SINGLEQUOTE_))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_SINGLEQUOTE_,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),reward_tokens], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-block-timestamps","fetch-block-timestamps",-468775801),block_numbers], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),(function (p__90387,p__90388){
var map__90389 = p__90387;
var map__90389__$1 = (((((!((map__90389 == null))))?(((((map__90389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90389):map__90389);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90389__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90390 = p__90388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90390,(0),null);
var fetched_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90390,(1),null);
var prev_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(db);
var fetched_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(t),t]);
}),fetched_tokens));
var updated_tokens = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_tokens,fetched_map], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading-msgs","loading-msgs",1407599447).cljs$core$IFn$_invoke$arity$1(db),"ERC20s information loaded")),new cljs.core.Keyword(null,"tokens","tokens",-818939304),updated_tokens),new cljs.core.Keyword(null,"tokens-loaded","tokens-loaded",-1012788601),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),(function (p__90394,p__90395){
var map__90396 = p__90394;
var map__90396__$1 = (((((!((map__90396 == null))))?(((((map__90396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90396):map__90396);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90396__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__90397 = p__90395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90397,(0),null);
var blocks_ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90397,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"blocks-ts","blocks-ts",-981959410),blocks_ts)], null);
}));

//# sourceMappingURL=revert.events.js.map
