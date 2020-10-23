goog.provide('lpdashboard.core');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.core.address0 = "0x0000000000000000000000000000000000000000";
lpdashboard.core.provider = lpdashboard.ethereum.provider;
lpdashboard.core.state_example = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),"some-address",new cljs.core.Keyword(null,"token-info","token-info",-589167623),new cljs.core.PersistentArrayMap(null, 3, ["eth",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"ETH",new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"name","name",1843675177),"Ether",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",100.0,"eth",(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",101.1,"eth",(1)], null)], null)], null),"0x3",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"COMP",new cljs.core.Keyword(null,"address","address",559499426),"0x33",new cljs.core.Keyword(null,"name","name",1843675177),"Compound",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null),"0x2",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MTA",new cljs.core.Keyword(null,"address","address",559499426),"0x21",new cljs.core.Keyword(null,"name","name",1843675177),"meta",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null)], null),new cljs.core.Keyword(null,"lps","lps",2143562451),new cljs.core.PersistentArrayMap(null, 1, ["0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["token0-address","token1-address"], null)], null),new cljs.core.Keyword(null,"unknown-destinations","unknown-destinations",1396541565),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address1",new cljs.core.Keyword(null,"reason","reason",-2070751759),"lp matching failed",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address2",new cljs.core.Keyword(null,"reason","reason",-2070751759),"could not identify contract",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"deposits","deposits",-1544951296),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"burns","burns",1858509067),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(2),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),(1223324),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(100),new cljs.core.Keyword(null,"reserves","reserves",-1935017122),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(25),"token1-address",(40)], null)], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(10),new cljs.core.Keyword(null,"staked","staked",-1857531165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-address","token-address",872304132),"z",new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"example",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"x",new cljs.core.Keyword(null,"lp-address","lp-address",-1398247764),"y",new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"reward-token-symbol","reward-token-symbol",-1647197588),"p",new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),(1),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),"z"], null);
lpdashboard.core.instruction = "Connect account or enter address";
if((typeof lpdashboard !== 'undefined') && (typeof lpdashboard.core !== 'undefined') && (typeof lpdashboard.core.app_state !== 'undefined')){
} else {
lpdashboard.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(((lpdashboard.core.provider == null))?"requires metamask":lpdashboard.core.instruction),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),null,new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),null,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),null], null));
}
lpdashboard.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
lpdashboard.core.render_totals = (function lpdashboard$core$render_totals(account,state,lp_positions,totals,currency){
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.separator_str], null)], 0));
var total_pnl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(totals),currency).toFormat((2));
var rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(totals),currency).toFormat((2));
var pool_pnl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(totals),currency).toFormat((2));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.app_state,cljs.core.into,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),account,new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437),lp_positions,new cljs.core.Keyword(null,"full-state","full-state",576263053),state,new cljs.core.Keyword(null,"account","account",718006320),account,new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),total_pnl,new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),pool_pnl,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards], null));
});
lpdashboard.core.render_loading = (function lpdashboard$core$render_loading(){
return cljs.core.reset_BANG_(lpdashboard.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),lpdashboard.core.instruction,new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core.PersistentVector.EMPTY], null));
});
lpdashboard.core.render_account = (function lpdashboard$core$render_account(account){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77351){
var state_val_77352 = (state_77351[(1)]);
if((state_val_77352 === (1))){
var inst_77331 = lpdashboard.core.render_loading();
var inst_77333 = (lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1(account) : lpdashboard.core._LT_get_account_state.call(null,account));
var state_77351__$1 = (function (){var statearr_77353 = state_77351;
(statearr_77353[(7)] = inst_77331);

return statearr_77353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77351__$1,(2),inst_77333);
} else {
if((state_val_77352 === (2))){
var inst_77335 = (state_77351[(2)]);
var inst_77336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77337 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_77338 = (new cljs.core.PersistentVector(null,1,(5),inst_77336,inst_77337,null));
var inst_77339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77340 = ["Computing account PNL ..."];
var inst_77341 = (new cljs.core.PersistentVector(null,1,(5),inst_77339,inst_77340,null));
var inst_77342 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_77338,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77341], 0));
var inst_77343 = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(inst_77335) : lpdashboard.core.compute_totals.call(null,inst_77335));
var inst_77344 = (function (){var _ = inst_77342;
var account_state = inst_77335;
var totals = inst_77343;
return (function (p1__77329_SHARP_){
var G__77357 = p1__77329_SHARP_;
var G__77358 = new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(account_state);
return (lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2(G__77357,G__77358) : lpdashboard.core.lp_position_map.call(null,G__77357,G__77358));
});
})();
var inst_77346 = new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(inst_77335);
var inst_77347 = cljs.core.vals(inst_77346);
var inst_77348 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77344,inst_77347);
var inst_77349 = lpdashboard.core.render_totals(account,inst_77335,inst_77348,inst_77343,"USD");
var state_77351__$1 = state_77351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77351__$1,inst_77349);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$render_account_$_state_machine__36685__auto__ = null;
var lpdashboard$core$render_account_$_state_machine__36685__auto____0 = (function (){
var statearr_77361 = [null,null,null,null,null,null,null,null];
(statearr_77361[(0)] = lpdashboard$core$render_account_$_state_machine__36685__auto__);

(statearr_77361[(1)] = (1));

return statearr_77361;
});
var lpdashboard$core$render_account_$_state_machine__36685__auto____1 = (function (state_77351){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77351);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77363){var ex__36688__auto__ = e77363;
var statearr_77364_79009 = state_77351;
(statearr_77364_79009[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77351[(4)]))){
var statearr_77365_79010 = state_77351;
(statearr_77365_79010[(1)] = cljs.core.first((state_77351[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79011 = state_77351;
state_77351 = G__79011;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$render_account_$_state_machine__36685__auto__ = function(state_77351){
switch(arguments.length){
case 0:
return lpdashboard$core$render_account_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$render_account_$_state_machine__36685__auto____1.call(this,state_77351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$render_account_$_state_machine__36685__auto____0;
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$render_account_$_state_machine__36685__auto____1;
return lpdashboard$core$render_account_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77367 = f__36777__auto__();
(statearr_77367[(6)] = c__36776__auto__);

return statearr_77367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.render_lp_pos = (function lpdashboard$core$render_lp_pos(lp_pos,lp){
var snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp));
var stakes = new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot);
var farms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),stakes);
var rewards = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stakes], 0));
var claimed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards], 0));
var claim_txs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),claimed));
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(lp_pos))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Pool PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Staking Rewards: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77373){
var vec__77374 = p__77373;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77374,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77374,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invested: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77380){
var vec__77381 = p__77380;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77381,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77381,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"invested","invested",19182926).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Withdrawn: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77385){
var vec__77386 = p__77385;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Diffs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77391){
var vec__77392 = p__77391;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77392,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77392,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"diffs","diffs",-1720136241).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Mints:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://etherscan.io/tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('')], null),m], null)], null);
}),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp))], null),((((0) < cljs.core.count(new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Burns:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://etherscan.io/tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('')], null),m], null)], null);
}),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp))], null):null),((((0) < cljs.core.count(claim_txs)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Claimed Rewards:",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://etherscan.io/tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('')], null),m], null)], null);
}),claim_txs)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.separator_str], null)], null);
});
lpdashboard.core.web3_connect = (function lpdashboard$core$web3_connect(){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77424){
var state_val_77425 = (state_77424[(1)]);
if((state_val_77425 === (7))){
var inst_77406 = (state_77424[(7)]);
var inst_77413 = (function(){throw inst_77406})();
var state_77424__$1 = state_77424;
var statearr_77426_79012 = state_77424__$1;
(statearr_77426_79012[(2)] = inst_77413);

(statearr_77426_79012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77425 === (1))){
var state_77424__$1 = state_77424;
var statearr_77427_79013 = state_77424__$1;
(statearr_77427_79013[(2)] = null);

(statearr_77427_79013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77425 === (4))){
var inst_77395 = (state_77424[(2)]);
var inst_77396 = console.log("Could not enable web3 in browser",inst_77395);
var state_77424__$1 = state_77424;
var statearr_77428_79014 = state_77424__$1;
(statearr_77428_79014[(2)] = inst_77396);

(statearr_77428_79014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77425 === (6))){
var inst_77406 = (state_77424[(7)]);
var inst_77406__$1 = (state_77424[(2)]);
var inst_77407 = (inst_77406__$1 instanceof cljs.core.ExceptionInfo);
var inst_77408 = cljs.core.ex_data(inst_77406__$1);
var inst_77409 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77408);
var inst_77410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77409,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77411 = ((inst_77407) && (inst_77410));
var state_77424__$1 = (function (){var statearr_77432 = state_77424;
(statearr_77432[(7)] = inst_77406__$1);

return statearr_77432;
})();
if(cljs.core.truth_(inst_77411)){
var statearr_77433_79015 = state_77424__$1;
(statearr_77433_79015[(1)] = (7));

} else {
var statearr_77435_79016 = state_77424__$1;
(statearr_77435_79016[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77425 === (3))){
var inst_77422 = (state_77424[(2)]);
var state_77424__$1 = state_77424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77424__$1,inst_77422);
} else {
if((state_val_77425 === (2))){
var _ = (function (){var statearr_77437 = state_77424;
(statearr_77437[(4)] = cljs.core.cons((5),(state_77424[(4)])));

return statearr_77437;
})();
var inst_77402 = window.ethereum;
var inst_77403 = inst_77402.enable();
var inst_77404 = cljs.core.async.interop.p__GT_c(inst_77403);
var state_77424__$1 = state_77424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77424__$1,(6),inst_77404);
} else {
if((state_val_77425 === (9))){
var inst_77416 = (state_77424[(2)]);
var inst_77417 = cljs.core.first(inst_77416);
var inst_77418 = console.log("connected-account",inst_77417);
var inst_77419 = lpdashboard.core.render_account(inst_77417);
var _ = (function (){var statearr_77440 = state_77424;
(statearr_77440[(4)] = cljs.core.rest((state_77424[(4)])));

return statearr_77440;
})();
var state_77424__$1 = (function (){var statearr_77441 = state_77424;
(statearr_77441[(8)] = inst_77418);

return statearr_77441;
})();
var statearr_77443_79017 = state_77424__$1;
(statearr_77443_79017[(2)] = inst_77419);

(statearr_77443_79017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77425 === (5))){
var _ = (function (){var statearr_77444 = state_77424;
(statearr_77444[(4)] = cljs.core.rest((state_77424[(4)])));

return statearr_77444;
})();
var state_77424__$1 = state_77424;
var ex77436 = (state_77424__$1[(2)]);
var statearr_77445_79018 = state_77424__$1;
(statearr_77445_79018[(5)] = ex77436);


if((ex77436 instanceof Error)){
var statearr_77446_79019 = state_77424__$1;
(statearr_77446_79019[(1)] = (4));

(statearr_77446_79019[(5)] = null);

} else {
throw ex77436;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77425 === (8))){
var inst_77406 = (state_77424[(7)]);
var state_77424__$1 = state_77424;
var statearr_77447_79020 = state_77424__$1;
(statearr_77447_79020[(2)] = inst_77406);

(statearr_77447_79020[(1)] = (9));


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
});
return (function() {
var lpdashboard$core$web3_connect_$_state_machine__36685__auto__ = null;
var lpdashboard$core$web3_connect_$_state_machine__36685__auto____0 = (function (){
var statearr_77448 = [null,null,null,null,null,null,null,null,null];
(statearr_77448[(0)] = lpdashboard$core$web3_connect_$_state_machine__36685__auto__);

(statearr_77448[(1)] = (1));

return statearr_77448;
});
var lpdashboard$core$web3_connect_$_state_machine__36685__auto____1 = (function (state_77424){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77424);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77449){var ex__36688__auto__ = e77449;
var statearr_77450_79021 = state_77424;
(statearr_77450_79021[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77424[(4)]))){
var statearr_77451_79022 = state_77424;
(statearr_77451_79022[(1)] = cljs.core.first((state_77424[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79023 = state_77424;
state_77424 = G__79023;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$web3_connect_$_state_machine__36685__auto__ = function(state_77424){
switch(arguments.length){
case 0:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____1.call(this,state_77424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____0;
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____1;
return lpdashboard$core$web3_connect_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77452 = f__36777__auto__();
(statearr_77452[(6)] = c__36776__auto__);

return statearr_77452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.connecting_component = (function lpdashboard$core$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account",new cljs.core.Keyword(null,"on-click","on-click",1632826543),lpdashboard.core.web3_connect], null)], null)], null);
});
lpdashboard.core.submit_component = (function lpdashboard$core$submit_component(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lpdashboard.core.render_account(cljs.core.deref(value));
})], null)], null);
});
lpdashboard.core.atom_input = (function lpdashboard$core$atom_input(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__77456_SHARP_){
return cljs.core.reset_BANG_(value,p1__77456_SHARP_.target.value);
})], null)], null),lpdashboard.core.submit_component(value)], null);
});
lpdashboard.core.shared_state = (function lpdashboard$core$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("foo");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The value is now: ",cljs.core.deref(val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.atom_input,val], null)], null)], null);
});
});
lpdashboard.core.hello_world = (function lpdashboard$core$hello_world(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"log"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.connecting_component()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"------- ACCOUNT PNL --------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL From Pools: ",new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards Accrued: ",new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------OPEN LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77460_SHARP_){
return lpdashboard.core.render_lp_pos(p1__77460_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__77460_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77461_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__77461_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------CLOSED LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77463_SHARP_){
return lpdashboard.core.render_lp_pos(p1__77463_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__77463_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77464_SHARP_){
return bignumber.core._GT__EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__77464_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null)], null)], null);
});
lpdashboard.core.start = (function lpdashboard$core$start(){
var G__77469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.hello_world], null);
var G__77470 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__77469,G__77470) : reagent.core.render_component.call(null,G__77469,G__77470));
});
lpdashboard.core.init = (function lpdashboard$core$init(){
return lpdashboard.core.start();
});
goog.exportSymbol('lpdashboard.core.init', lpdashboard.core.init);
lpdashboard.core.stop = (function lpdashboard$core$stop(){
return console.log("stop");
});
lpdashboard.core._LT_staking_rewards_earned = (function lpdashboard$core$_LT_staking_rewards_earned(staking_address,rewards_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77495){
var state_val_77496 = (state_77495[(1)]);
if((state_val_77496 === (1))){
var inst_77474 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var inst_77475 = lpdashboard.ethereum._LT_token_decimals(rewards_address);
var state_77495__$1 = (function (){var statearr_77497 = state_77495;
(statearr_77497[(7)] = inst_77474);

return statearr_77497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77495__$1,(2),inst_77475);
} else {
if((state_val_77496 === (2))){
var inst_77474 = (state_77495[(7)]);
var inst_77477 = (state_77495[(2)]);
var inst_77478 = inst_77474.earned(user_address);
var inst_77479 = cljs.core.async.interop.p__GT_c(inst_77478);
var state_77495__$1 = (function (){var statearr_77498 = state_77495;
(statearr_77498[(8)] = inst_77477);

return statearr_77498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77495__$1,(3),inst_77479);
} else {
if((state_val_77496 === (3))){
var inst_77481 = (state_77495[(9)]);
var inst_77481__$1 = (state_77495[(2)]);
var inst_77483 = (inst_77481__$1 instanceof cljs.core.ExceptionInfo);
var inst_77484 = cljs.core.ex_data(inst_77481__$1);
var inst_77485 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77484);
var inst_77486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77485,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77487 = ((inst_77483) && (inst_77486));
var state_77495__$1 = (function (){var statearr_77501 = state_77495;
(statearr_77501[(9)] = inst_77481__$1);

return statearr_77501;
})();
if(cljs.core.truth_(inst_77487)){
var statearr_77502_79024 = state_77495__$1;
(statearr_77502_79024[(1)] = (4));

} else {
var statearr_77504_79025 = state_77495__$1;
(statearr_77504_79025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77496 === (4))){
var inst_77481 = (state_77495[(9)]);
var inst_77489 = (function(){throw inst_77481})();
var state_77495__$1 = state_77495;
var statearr_77506_79026 = state_77495__$1;
(statearr_77506_79026[(2)] = inst_77489);

(statearr_77506_79026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77496 === (5))){
var inst_77481 = (state_77495[(9)]);
var state_77495__$1 = state_77495;
var statearr_77507_79027 = state_77495__$1;
(statearr_77507_79027[(2)] = inst_77481);

(statearr_77507_79027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77496 === (6))){
var inst_77477 = (state_77495[(8)]);
var inst_77492 = (state_77495[(2)]);
var inst_77493 = lpdashboard.utils.ebn__GT_bn(inst_77492,inst_77477);
var state_77495__$1 = state_77495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77495__$1,inst_77493);
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
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0 = (function (){
var statearr_77508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77508[(0)] = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__);

(statearr_77508[(1)] = (1));

return statearr_77508;
});
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1 = (function (state_77495){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77495);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77509){var ex__36688__auto__ = e77509;
var statearr_77510_79028 = state_77495;
(statearr_77510_79028[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77495[(4)]))){
var statearr_77512_79029 = state_77495;
(statearr_77512_79029[(1)] = cljs.core.first((state_77495[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79030 = state_77495;
state_77495 = G__79030;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__ = function(state_77495){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1.call(this,state_77495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77515 = f__36777__auto__();
(statearr_77515[(6)] = c__36776__auto__);

return statearr_77515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_rewards_token = (function lpdashboard$core$_LT_staking_rewards_token(staking_address){
var staking_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77593){
var state_val_77594 = (state_77593[(1)]);
if((state_val_77594 === (7))){
var inst_77518 = (state_77593[(2)]);
var inst_77519 = console.log("prob getting sushi failback:",staking_address);
var state_77593__$1 = (function (){var statearr_77597 = state_77593;
(statearr_77597[(7)] = inst_77519);

(statearr_77597[(8)] = inst_77518);

return statearr_77597;
})();
var statearr_77599_79031 = state_77593__$1;
(statearr_77599_79031[(2)] = null);

(statearr_77599_79031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (20))){
var inst_77565 = (state_77593[(2)]);
var _ = (function (){var statearr_77600 = state_77593;
(statearr_77600[(4)] = cljs.core.rest((state_77593[(4)])));

return statearr_77600;
})();
var state_77593__$1 = state_77593;
var statearr_77601_79032 = state_77593__$1;
(statearr_77601_79032[(2)] = inst_77565);

(statearr_77601_79032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (1))){
var state_77593__$1 = state_77593;
var statearr_77602_79033 = state_77593__$1;
(statearr_77602_79033[(2)] = null);

(statearr_77602_79033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (24))){
var inst_77578 = (state_77593[(9)]);
var state_77593__$1 = state_77593;
var statearr_77603_79034 = state_77593__$1;
(statearr_77603_79034[(2)] = inst_77578);

(statearr_77603_79034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (4))){
var inst_77516 = (state_77593[(2)]);
var inst_77517 = console.log("prob getting rewards token:",staking_address);
var state_77593__$1 = (function (){var statearr_77605 = state_77593;
(statearr_77605[(10)] = inst_77517);

(statearr_77605[(11)] = inst_77516);

return statearr_77605;
})();
var statearr_77606_79035 = state_77593__$1;
(statearr_77606_79035[(2)] = null);

(statearr_77606_79035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (15))){
var inst_77540 = (state_77593[(2)]);
var _ = (function (){var statearr_77607 = state_77593;
(statearr_77607[(4)] = cljs.core.rest((state_77593[(4)])));

return statearr_77607;
})();
var state_77593__$1 = state_77593;
var statearr_77609_79036 = state_77593__$1;
(statearr_77609_79036[(2)] = inst_77540);

(statearr_77609_79036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (21))){
var _ = (function (){var statearr_77612 = state_77593;
(statearr_77612[(4)] = cljs.core.rest((state_77593[(4)])));

return statearr_77612;
})();
var state_77593__$1 = state_77593;
var ex77604 = (state_77593__$1[(2)]);
var statearr_77613_79037 = state_77593__$1;
(statearr_77613_79037[(5)] = ex77604);


if((ex77604 instanceof Error)){
var statearr_77615_79038 = state_77593__$1;
(statearr_77615_79038[(1)] = (4));

(statearr_77615_79038[(5)] = null);

} else {
throw ex77604;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (13))){
var inst_77530 = (state_77593[(12)]);
var inst_77537 = (function(){throw inst_77530})();
var state_77593__$1 = state_77593;
var statearr_77616_79039 = state_77593__$1;
(statearr_77616_79039[(2)] = inst_77537);

(statearr_77616_79039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (22))){
var inst_77578 = (state_77593[(9)]);
var inst_77578__$1 = (state_77593[(2)]);
var inst_77579 = (inst_77578__$1 instanceof cljs.core.ExceptionInfo);
var inst_77580 = cljs.core.ex_data(inst_77578__$1);
var inst_77581 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77580);
var inst_77582 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77581,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77583 = ((inst_77579) && (inst_77582));
var state_77593__$1 = (function (){var statearr_77617 = state_77593;
(statearr_77617[(9)] = inst_77578__$1);

return statearr_77617;
})();
if(cljs.core.truth_(inst_77583)){
var statearr_77619_79040 = state_77593__$1;
(statearr_77619_79040[(1)] = (23));

} else {
var statearr_77621_79041 = state_77593__$1;
(statearr_77621_79041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (6))){
var inst_77568 = (state_77593[(2)]);
var state_77593__$1 = state_77593;
var statearr_77623_79042 = state_77593__$1;
(statearr_77623_79042[(2)] = inst_77568);

(statearr_77623_79042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (25))){
var inst_77588 = (state_77593[(2)]);
var _ = (function (){var statearr_77624 = state_77593;
(statearr_77624[(4)] = cljs.core.rest((state_77593[(4)])));

return statearr_77624;
})();
var state_77593__$1 = state_77593;
var statearr_77625_79043 = state_77593__$1;
(statearr_77625_79043[(2)] = inst_77588);

(statearr_77625_79043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (17))){
var inst_77554 = (state_77593[(13)]);
var inst_77554__$1 = (state_77593[(2)]);
var inst_77556 = (inst_77554__$1 instanceof cljs.core.ExceptionInfo);
var inst_77557 = cljs.core.ex_data(inst_77554__$1);
var inst_77558 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77557);
var inst_77559 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77558,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77560 = ((inst_77556) && (inst_77559));
var state_77593__$1 = (function (){var statearr_77626 = state_77593;
(statearr_77626[(13)] = inst_77554__$1);

return statearr_77626;
})();
if(cljs.core.truth_(inst_77560)){
var statearr_77627_79044 = state_77593__$1;
(statearr_77627_79044[(1)] = (18));

} else {
var statearr_77628_79045 = state_77593__$1;
(statearr_77628_79045[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (3))){
var inst_77591 = (state_77593[(2)]);
var state_77593__$1 = state_77593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77593__$1,inst_77591);
} else {
if((state_val_77594 === (12))){
var inst_77530 = (state_77593[(12)]);
var inst_77530__$1 = (state_77593[(2)]);
var inst_77531 = (inst_77530__$1 instanceof cljs.core.ExceptionInfo);
var inst_77532 = cljs.core.ex_data(inst_77530__$1);
var inst_77533 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77532);
var inst_77534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77533,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77535 = ((inst_77531) && (inst_77534));
var state_77593__$1 = (function (){var statearr_77631 = state_77593;
(statearr_77631[(12)] = inst_77530__$1);

return statearr_77631;
})();
if(cljs.core.truth_(inst_77535)){
var statearr_77632_79046 = state_77593__$1;
(statearr_77632_79046[(1)] = (13));

} else {
var statearr_77633_79047 = state_77593__$1;
(statearr_77633_79047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (2))){
var _ = (function (){var statearr_77635 = state_77593;
(statearr_77635[(4)] = cljs.core.cons((21),(state_77593[(4)])));

return statearr_77635;
})();
var inst_77575 = staking_contract.rewardsToken();
var inst_77576 = cljs.core.async.interop.p__GT_c(inst_77575);
var state_77593__$1 = state_77593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77593__$1,(22),inst_77576);
} else {
if((state_val_77594 === (23))){
var inst_77578 = (state_77593[(9)]);
var inst_77585 = (function(){throw inst_77578})();
var state_77593__$1 = state_77593;
var statearr_77638_79048 = state_77593__$1;
(statearr_77638_79048[(2)] = inst_77585);

(statearr_77638_79048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (19))){
var inst_77554 = (state_77593[(13)]);
var state_77593__$1 = state_77593;
var statearr_77639_79049 = state_77593__$1;
(statearr_77639_79049[(2)] = inst_77554);

(statearr_77639_79049[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (11))){
var _ = (function (){var statearr_77640 = state_77593;
(statearr_77640[(4)] = cljs.core.rest((state_77593[(4)])));

return statearr_77640;
})();
var state_77593__$1 = state_77593;
var ex77637 = (state_77593__$1[(2)]);
var statearr_77643_79050 = state_77593__$1;
(statearr_77643_79050[(5)] = ex77637);


if((ex77637 instanceof Error)){
var statearr_77644_79051 = state_77593__$1;
(statearr_77644_79051[(1)] = (10));

(statearr_77644_79051[(5)] = null);

} else {
throw ex77637;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (9))){
var inst_77544 = (state_77593[(2)]);
var state_77593__$1 = state_77593;
var statearr_77646_79052 = state_77593__$1;
(statearr_77646_79052[(2)] = inst_77544);

(statearr_77646_79052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (5))){
var _ = (function (){var statearr_77648 = state_77593;
(statearr_77648[(4)] = cljs.core.cons((16),(state_77593[(4)])));

return statearr_77648;
})();
var inst_77551 = staking_contract.sushi();
var inst_77552 = cljs.core.async.interop.p__GT_c(inst_77551);
var state_77593__$1 = state_77593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77593__$1,(17),inst_77552);
} else {
if((state_val_77594 === (14))){
var inst_77530 = (state_77593[(12)]);
var state_77593__$1 = state_77593;
var statearr_77649_79053 = state_77593__$1;
(statearr_77649_79053[(2)] = inst_77530);

(statearr_77649_79053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (16))){
var _ = (function (){var statearr_77650 = state_77593;
(statearr_77650[(4)] = cljs.core.rest((state_77593[(4)])));

return statearr_77650;
})();
var state_77593__$1 = state_77593;
var ex77647 = (state_77593__$1[(2)]);
var statearr_77651_79054 = state_77593__$1;
(statearr_77651_79054[(5)] = ex77647);


if((ex77647 instanceof Error)){
var statearr_77654_79055 = state_77593__$1;
(statearr_77654_79055[(1)] = (7));

(statearr_77654_79055[(5)] = null);

} else {
throw ex77647;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (10))){
var inst_77520 = (state_77593[(2)]);
var inst_77521 = console.log("prob getting cream failback:",staking_address);
var state_77593__$1 = (function (){var statearr_77656 = state_77593;
(statearr_77656[(14)] = inst_77520);

return statearr_77656;
})();
var statearr_77657_79056 = state_77593__$1;
(statearr_77657_79056[(2)] = inst_77521);

(statearr_77657_79056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (18))){
var inst_77554 = (state_77593[(13)]);
var inst_77562 = (function(){throw inst_77554})();
var state_77593__$1 = state_77593;
var statearr_77659_79057 = state_77593__$1;
(statearr_77659_79057[(2)] = inst_77562);

(statearr_77659_79057[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77594 === (8))){
var _ = (function (){var statearr_77660 = state_77593;
(statearr_77660[(4)] = cljs.core.cons((11),(state_77593[(4)])));

return statearr_77660;
})();
var inst_77527 = staking_contract.cream();
var inst_77528 = cljs.core.async.interop.p__GT_c(inst_77527);
var state_77593__$1 = state_77593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77593__$1,(12),inst_77528);
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
}
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0 = (function (){
var statearr_77663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77663[(0)] = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__);

(statearr_77663[(1)] = (1));

return statearr_77663;
});
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1 = (function (state_77593){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77593);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77665){var ex__36688__auto__ = e77665;
var statearr_77666_79058 = state_77593;
(statearr_77666_79058[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77593[(4)]))){
var statearr_77667_79059 = state_77593;
(statearr_77667_79059[(1)] = cljs.core.first((state_77593[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79060 = state_77593;
state_77593 = G__79060;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__ = function(state_77593){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1.call(this,state_77593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77668 = f__36777__auto__();
(statearr_77668[(6)] = c__36776__auto__);

return statearr_77668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_prop = (function lpdashboard$core$_LT_staked_prop(staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77709){
var state_val_77710 = (state_77709[(1)]);
if((state_val_77710 === (7))){
var inst_77695 = (state_77709[(7)]);
var inst_77695__$1 = (state_77709[(2)]);
var inst_77696 = (inst_77695__$1 instanceof cljs.core.ExceptionInfo);
var inst_77697 = cljs.core.ex_data(inst_77695__$1);
var inst_77698 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77697);
var inst_77699 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77698,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77700 = ((inst_77696) && (inst_77699));
var state_77709__$1 = (function (){var statearr_77714 = state_77709;
(statearr_77714[(7)] = inst_77695__$1);

return statearr_77714;
})();
if(cljs.core.truth_(inst_77700)){
var statearr_77715_79061 = state_77709__$1;
(statearr_77715_79061[(1)] = (8));

} else {
var statearr_77716_79062 = state_77709__$1;
(statearr_77716_79062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77710 === (1))){
var inst_77671 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_77672 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_77709__$1 = (function (){var statearr_77717 = state_77709;
(statearr_77717[(8)] = inst_77671);

return statearr_77717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77709__$1,(2),inst_77672);
} else {
if((state_val_77710 === (4))){
var inst_77679 = (state_77709[(9)]);
var inst_77687 = (function(){throw inst_77679})();
var state_77709__$1 = state_77709;
var statearr_77718_79063 = state_77709__$1;
(statearr_77718_79063[(2)] = inst_77687);

(statearr_77718_79063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77710 === (6))){
var inst_77674 = (state_77709[(10)]);
var inst_77671 = (state_77709[(8)]);
var inst_77690 = (state_77709[(2)]);
var inst_77691 = lpdashboard.utils.ebn__GT_bn(inst_77690,inst_77674);
var inst_77692 = inst_77671.totalSupply();
var inst_77693 = cljs.core.async.interop.p__GT_c(inst_77692);
var state_77709__$1 = (function (){var statearr_77719 = state_77709;
(statearr_77719[(11)] = inst_77691);

return statearr_77719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77709__$1,(7),inst_77693);
} else {
if((state_val_77710 === (3))){
var inst_77679 = (state_77709[(9)]);
var inst_77679__$1 = (state_77709[(2)]);
var inst_77680 = (inst_77679__$1 instanceof cljs.core.ExceptionInfo);
var inst_77682 = cljs.core.ex_data(inst_77679__$1);
var inst_77683 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77682);
var inst_77684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77683,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77685 = ((inst_77680) && (inst_77684));
var state_77709__$1 = (function (){var statearr_77720 = state_77709;
(statearr_77720[(9)] = inst_77679__$1);

return statearr_77720;
})();
if(cljs.core.truth_(inst_77685)){
var statearr_77721_79064 = state_77709__$1;
(statearr_77721_79064[(1)] = (4));

} else {
var statearr_77723_79065 = state_77709__$1;
(statearr_77723_79065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77710 === (2))){
var inst_77671 = (state_77709[(8)]);
var inst_77674 = (state_77709[(2)]);
var inst_77676 = inst_77671.balanceOf(user_address);
var inst_77677 = cljs.core.async.interop.p__GT_c(inst_77676);
var state_77709__$1 = (function (){var statearr_77726 = state_77709;
(statearr_77726[(10)] = inst_77674);

return statearr_77726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77709__$1,(3),inst_77677);
} else {
if((state_val_77710 === (9))){
var inst_77695 = (state_77709[(7)]);
var state_77709__$1 = state_77709;
var statearr_77727_79066 = state_77709__$1;
(statearr_77727_79066[(2)] = inst_77695);

(statearr_77727_79066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77710 === (5))){
var inst_77679 = (state_77709[(9)]);
var state_77709__$1 = state_77709;
var statearr_77728_79067 = state_77709__$1;
(statearr_77728_79067[(2)] = inst_77679);

(statearr_77728_79067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77710 === (10))){
var inst_77674 = (state_77709[(10)]);
var inst_77691 = (state_77709[(11)]);
var inst_77705 = (state_77709[(2)]);
var inst_77706 = lpdashboard.utils.ebn__GT_bn(inst_77705,inst_77674);
var inst_77707 = bignumber.core._SLASH_(inst_77691,inst_77706);
var state_77709__$1 = state_77709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77709__$1,inst_77707);
} else {
if((state_val_77710 === (8))){
var inst_77695 = (state_77709[(7)]);
var inst_77702 = (function(){throw inst_77695})();
var state_77709__$1 = state_77709;
var statearr_77729_79068 = state_77709__$1;
(statearr_77729_79068[(2)] = inst_77702);

(statearr_77729_79068[(1)] = (10));


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
});
return (function() {
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0 = (function (){
var statearr_77730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77730[(0)] = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__);

(statearr_77730[(1)] = (1));

return statearr_77730;
});
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1 = (function (state_77709){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77709);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77732){var ex__36688__auto__ = e77732;
var statearr_77734_79069 = state_77709;
(statearr_77734_79069[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77709[(4)]))){
var statearr_77735_79070 = state_77709;
(statearr_77735_79070[(1)] = cljs.core.first((state_77709[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79071 = state_77709;
state_77709 = G__79071;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__ = function(state_77709){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1.call(this,state_77709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77737 = f__36777__auto__();
(statearr_77737[(6)] = c__36776__auto__);

return statearr_77737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_pool_lps = (function lpdashboard$core$_LT_staking_pool_lps(lp_address,staking_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77769){
var state_val_77770 = (state_77769[(1)]);
if((state_val_77770 === (7))){
var inst_77756 = (state_77769[(7)]);
var inst_77763 = (function(){throw inst_77756})();
var state_77769__$1 = state_77769;
var statearr_77773_79072 = state_77769__$1;
(statearr_77773_79072[(2)] = inst_77763);

(statearr_77773_79072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77770 === (1))){
var inst_77738 = (state_77769[(8)]);
var inst_77738__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_77739 = inst_77738__$1.decimals();
var inst_77740 = cljs.core.async.interop.p__GT_c(inst_77739);
var state_77769__$1 = (function (){var statearr_77775 = state_77769;
(statearr_77775[(8)] = inst_77738__$1);

return statearr_77775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77769__$1,(2),inst_77740);
} else {
if((state_val_77770 === (4))){
var inst_77742 = (state_77769[(9)]);
var state_77769__$1 = state_77769;
var statearr_77776_79073 = state_77769__$1;
(statearr_77776_79073[(2)] = inst_77742);

(statearr_77776_79073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77770 === (6))){
var inst_77756 = (state_77769[(7)]);
var inst_77756__$1 = (state_77769[(2)]);
var inst_77757 = (inst_77756__$1 instanceof cljs.core.ExceptionInfo);
var inst_77758 = cljs.core.ex_data(inst_77756__$1);
var inst_77759 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77758);
var inst_77760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77759,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77761 = ((inst_77757) && (inst_77760));
var state_77769__$1 = (function (){var statearr_77777 = state_77769;
(statearr_77777[(7)] = inst_77756__$1);

return statearr_77777;
})();
if(cljs.core.truth_(inst_77761)){
var statearr_77778_79074 = state_77769__$1;
(statearr_77778_79074[(1)] = (7));

} else {
var statearr_77779_79075 = state_77769__$1;
(statearr_77779_79075[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77770 === (3))){
var inst_77742 = (state_77769[(9)]);
var inst_77749 = (function(){throw inst_77742})();
var state_77769__$1 = state_77769;
var statearr_77780_79076 = state_77769__$1;
(statearr_77780_79076[(2)] = inst_77749);

(statearr_77780_79076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77770 === (2))){
var inst_77742 = (state_77769[(9)]);
var inst_77742__$1 = (state_77769[(2)]);
var inst_77743 = (inst_77742__$1 instanceof cljs.core.ExceptionInfo);
var inst_77744 = cljs.core.ex_data(inst_77742__$1);
var inst_77745 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77744);
var inst_77746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77745,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77747 = ((inst_77743) && (inst_77746));
var state_77769__$1 = (function (){var statearr_77781 = state_77769;
(statearr_77781[(9)] = inst_77742__$1);

return statearr_77781;
})();
if(cljs.core.truth_(inst_77747)){
var statearr_77783_79077 = state_77769__$1;
(statearr_77783_79077[(1)] = (3));

} else {
var statearr_77785_79078 = state_77769__$1;
(statearr_77785_79078[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77770 === (9))){
var inst_77752 = (state_77769[(10)]);
var inst_77766 = (state_77769[(2)]);
var inst_77767 = lpdashboard.utils.ebn__GT_bn(inst_77766,inst_77752);
var state_77769__$1 = state_77769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77769__$1,inst_77767);
} else {
if((state_val_77770 === (5))){
var inst_77738 = (state_77769[(8)]);
var inst_77752 = (state_77769[(2)]);
var inst_77753 = inst_77738.balanceOf(staking_address);
var inst_77754 = cljs.core.async.interop.p__GT_c(inst_77753);
var state_77769__$1 = (function (){var statearr_77787 = state_77769;
(statearr_77787[(10)] = inst_77752);

return statearr_77787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77769__$1,(6),inst_77754);
} else {
if((state_val_77770 === (8))){
var inst_77756 = (state_77769[(7)]);
var state_77769__$1 = state_77769;
var statearr_77788_79079 = state_77769__$1;
(statearr_77788_79079[(2)] = inst_77756);

(statearr_77788_79079[(1)] = (9));


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
});
return (function() {
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0 = (function (){
var statearr_77789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77789[(0)] = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__);

(statearr_77789[(1)] = (1));

return statearr_77789;
});
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1 = (function (state_77769){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77769);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77790){var ex__36688__auto__ = e77790;
var statearr_77791_79080 = state_77769;
(statearr_77791_79080[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77769[(4)]))){
var statearr_77792_79081 = state_77769;
(statearr_77792_79081[(1)] = cljs.core.first((state_77769[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79082 = state_77769;
state_77769 = G__79082;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__ = function(state_77769){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1.call(this,state_77769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77793 = f__36777__auto__();
(statearr_77793[(6)] = c__36776__auto__);

return statearr_77793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_lps = (function lpdashboard$core$_LT_total_pool_lps(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77814){
var state_val_77815 = (state_77814[(1)]);
if((state_val_77815 === (1))){
var inst_77794 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_77795 = lpdashboard.ethereum._LT_token_decimals(lp_address);
var state_77814__$1 = (function (){var statearr_77816 = state_77814;
(statearr_77816[(7)] = inst_77794);

return statearr_77816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77814__$1,(2),inst_77795);
} else {
if((state_val_77815 === (2))){
var inst_77794 = (state_77814[(7)]);
var inst_77797 = (state_77814[(2)]);
var inst_77798 = inst_77794.totalSupply();
var inst_77799 = cljs.core.async.interop.p__GT_c(inst_77798);
var state_77814__$1 = (function (){var statearr_77817 = state_77814;
(statearr_77817[(8)] = inst_77797);

return statearr_77817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77814__$1,(3),inst_77799);
} else {
if((state_val_77815 === (3))){
var inst_77801 = (state_77814[(9)]);
var inst_77801__$1 = (state_77814[(2)]);
var inst_77802 = (inst_77801__$1 instanceof cljs.core.ExceptionInfo);
var inst_77803 = cljs.core.ex_data(inst_77801__$1);
var inst_77804 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77803);
var inst_77805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77804,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77806 = ((inst_77802) && (inst_77805));
var state_77814__$1 = (function (){var statearr_77818 = state_77814;
(statearr_77818[(9)] = inst_77801__$1);

return statearr_77818;
})();
if(cljs.core.truth_(inst_77806)){
var statearr_77819_79083 = state_77814__$1;
(statearr_77819_79083[(1)] = (4));

} else {
var statearr_77820_79084 = state_77814__$1;
(statearr_77820_79084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77815 === (4))){
var inst_77801 = (state_77814[(9)]);
var inst_77808 = (function(){throw inst_77801})();
var state_77814__$1 = state_77814;
var statearr_77821_79085 = state_77814__$1;
(statearr_77821_79085[(2)] = inst_77808);

(statearr_77821_79085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77815 === (5))){
var inst_77801 = (state_77814[(9)]);
var state_77814__$1 = state_77814;
var statearr_77822_79086 = state_77814__$1;
(statearr_77822_79086[(2)] = inst_77801);

(statearr_77822_79086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77815 === (6))){
var inst_77797 = (state_77814[(8)]);
var inst_77811 = (state_77814[(2)]);
var inst_77812 = lpdashboard.utils.ebn__GT_bn(inst_77811,inst_77797);
var state_77814__$1 = state_77814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77814__$1,inst_77812);
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
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0 = (function (){
var statearr_77823 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77823[(0)] = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__);

(statearr_77823[(1)] = (1));

return statearr_77823;
});
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1 = (function (state_77814){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77814);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77824){var ex__36688__auto__ = e77824;
var statearr_77825_79087 = state_77814;
(statearr_77825_79087[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77814[(4)]))){
var statearr_77826_79088 = state_77814;
(statearr_77826_79088[(1)] = cljs.core.first((state_77814[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79089 = state_77814;
state_77814 = G__79089;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__ = function(state_77814){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1.call(this,state_77814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77827 = f__36777__auto__();
(statearr_77827[(6)] = c__36776__auto__);

return statearr_77827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_tokens = (function lpdashboard$core$_LT_lp_pool_tokens(lp_address){
var lp_contract = lpdashboard.ethereum.make_erc20(lp_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77860){
var state_val_77861 = (state_77860[(1)]);
if((state_val_77861 === (7))){
var inst_77846 = (state_77860[(7)]);
var inst_77853 = (function(){throw inst_77846})();
var state_77860__$1 = state_77860;
var statearr_77862_79090 = state_77860__$1;
(statearr_77862_79090[(2)] = inst_77853);

(statearr_77862_79090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77861 === (1))){
var inst_77828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77829 = lp_contract.token0();
var inst_77830 = cljs.core.async.interop.p__GT_c(inst_77829);
var state_77860__$1 = (function (){var statearr_77863 = state_77860;
(statearr_77863[(8)] = inst_77828);

return statearr_77863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77860__$1,(2),inst_77830);
} else {
if((state_val_77861 === (4))){
var inst_77832 = (state_77860[(9)]);
var state_77860__$1 = state_77860;
var statearr_77864_79091 = state_77860__$1;
(statearr_77864_79091[(2)] = inst_77832);

(statearr_77864_79091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77861 === (6))){
var inst_77846 = (state_77860[(7)]);
var inst_77846__$1 = (state_77860[(2)]);
var inst_77847 = (inst_77846__$1 instanceof cljs.core.ExceptionInfo);
var inst_77848 = cljs.core.ex_data(inst_77846__$1);
var inst_77849 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77848);
var inst_77850 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77849,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77851 = ((inst_77847) && (inst_77850));
var state_77860__$1 = (function (){var statearr_77865 = state_77860;
(statearr_77865[(7)] = inst_77846__$1);

return statearr_77865;
})();
if(cljs.core.truth_(inst_77851)){
var statearr_77866_79092 = state_77860__$1;
(statearr_77866_79092[(1)] = (7));

} else {
var statearr_77867_79093 = state_77860__$1;
(statearr_77867_79093[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77861 === (3))){
var inst_77832 = (state_77860[(9)]);
var inst_77839 = (function(){throw inst_77832})();
var state_77860__$1 = state_77860;
var statearr_77868_79094 = state_77860__$1;
(statearr_77868_79094[(2)] = inst_77839);

(statearr_77868_79094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77861 === (2))){
var inst_77832 = (state_77860[(9)]);
var inst_77832__$1 = (state_77860[(2)]);
var inst_77833 = (inst_77832__$1 instanceof cljs.core.ExceptionInfo);
var inst_77834 = cljs.core.ex_data(inst_77832__$1);
var inst_77835 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77834);
var inst_77836 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77835,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77837 = ((inst_77833) && (inst_77836));
var state_77860__$1 = (function (){var statearr_77869 = state_77860;
(statearr_77869[(9)] = inst_77832__$1);

return statearr_77869;
})();
if(cljs.core.truth_(inst_77837)){
var statearr_77870_79095 = state_77860__$1;
(statearr_77870_79095[(1)] = (3));

} else {
var statearr_77871_79096 = state_77860__$1;
(statearr_77871_79096[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77861 === (9))){
var inst_77828 = (state_77860[(8)]);
var inst_77842 = (state_77860[(10)]);
var inst_77856 = (state_77860[(2)]);
var inst_77857 = [inst_77842,inst_77856];
var inst_77858 = (new cljs.core.PersistentVector(null,2,(5),inst_77828,inst_77857,null));
var state_77860__$1 = state_77860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77860__$1,inst_77858);
} else {
if((state_val_77861 === (5))){
var inst_77842 = (state_77860[(2)]);
var inst_77843 = lp_contract.token1();
var inst_77844 = cljs.core.async.interop.p__GT_c(inst_77843);
var state_77860__$1 = (function (){var statearr_77872 = state_77860;
(statearr_77872[(10)] = inst_77842);

return statearr_77872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77860__$1,(6),inst_77844);
} else {
if((state_val_77861 === (8))){
var inst_77846 = (state_77860[(7)]);
var state_77860__$1 = state_77860;
var statearr_77873_79097 = state_77860__$1;
(statearr_77873_79097[(2)] = inst_77846);

(statearr_77873_79097[(1)] = (9));


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
});
return (function() {
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0 = (function (){
var statearr_77874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77874[(0)] = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__);

(statearr_77874[(1)] = (1));

return statearr_77874;
});
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1 = (function (state_77860){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77860);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77875){var ex__36688__auto__ = e77875;
var statearr_77876_79098 = state_77860;
(statearr_77876_79098[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77860[(4)]))){
var statearr_77877_79099 = state_77860;
(statearr_77877_79099[(1)] = cljs.core.first((state_77860[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79100 = state_77860;
state_77860 = G__79100;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__ = function(state_77860){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1.call(this,state_77860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77878 = f__36777__auto__();
(statearr_77878[(6)] = c__36776__auto__);

return statearr_77878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_symbols = (function lpdashboard$core$_LT_lp_pool_symbols(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77918){
var state_val_77919 = (state_77918[(1)]);
if((state_val_77919 === (7))){
var inst_77904 = (state_77918[(7)]);
var inst_77904__$1 = (state_77918[(2)]);
var inst_77905 = (inst_77904__$1 instanceof cljs.core.ExceptionInfo);
var inst_77906 = cljs.core.ex_data(inst_77904__$1);
var inst_77907 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77906);
var inst_77908 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77907,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77909 = ((inst_77905) && (inst_77908));
var state_77918__$1 = (function (){var statearr_77920 = state_77918;
(statearr_77920[(7)] = inst_77904__$1);

return statearr_77920;
})();
if(cljs.core.truth_(inst_77909)){
var statearr_77921_79101 = state_77918__$1;
(statearr_77921_79101[(1)] = (8));

} else {
var statearr_77922_79102 = state_77918__$1;
(statearr_77922_79102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77919 === (1))){
var inst_77879 = lpdashboard.core._LT_lp_pool_tokens(lp_address);
var state_77918__$1 = state_77918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77918__$1,(2),inst_77879);
} else {
if((state_val_77919 === (4))){
var inst_77890 = (state_77918[(8)]);
var inst_77897 = (function(){throw inst_77890})();
var state_77918__$1 = state_77918;
var statearr_77923_79103 = state_77918__$1;
(statearr_77923_79103[(2)] = inst_77897);

(statearr_77923_79103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77919 === (6))){
var inst_77885 = (state_77918[(9)]);
var inst_77900 = (state_77918[(2)]);
var inst_77901 = inst_77885.symbol();
var inst_77902 = cljs.core.async.interop.p__GT_c(inst_77901);
var state_77918__$1 = (function (){var statearr_77924 = state_77918;
(statearr_77924[(10)] = inst_77900);

return statearr_77924;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77918__$1,(7),inst_77902);
} else {
if((state_val_77919 === (3))){
var inst_77890 = (state_77918[(8)]);
var inst_77890__$1 = (state_77918[(2)]);
var inst_77891 = (inst_77890__$1 instanceof cljs.core.ExceptionInfo);
var inst_77892 = cljs.core.ex_data(inst_77890__$1);
var inst_77893 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77892);
var inst_77894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77893,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77895 = ((inst_77891) && (inst_77894));
var state_77918__$1 = (function (){var statearr_77925 = state_77918;
(statearr_77925[(8)] = inst_77890__$1);

return statearr_77925;
})();
if(cljs.core.truth_(inst_77895)){
var statearr_77926_79104 = state_77918__$1;
(statearr_77926_79104[(1)] = (4));

} else {
var statearr_77927_79105 = state_77918__$1;
(statearr_77927_79105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77919 === (2))){
var inst_77881 = (state_77918[(2)]);
var inst_77882 = cljs.core.first(inst_77881);
var inst_77883 = lpdashboard.ethereum.make_erc20(inst_77882);
var inst_77884 = cljs.core.second(inst_77881);
var inst_77885 = lpdashboard.ethereum.make_erc20(inst_77884);
var inst_77886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77887 = inst_77883.symbol();
var inst_77888 = cljs.core.async.interop.p__GT_c(inst_77887);
var state_77918__$1 = (function (){var statearr_77928 = state_77918;
(statearr_77928[(9)] = inst_77885);

(statearr_77928[(11)] = inst_77886);

return statearr_77928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77918__$1,(3),inst_77888);
} else {
if((state_val_77919 === (9))){
var inst_77904 = (state_77918[(7)]);
var state_77918__$1 = state_77918;
var statearr_77929_79106 = state_77918__$1;
(statearr_77929_79106[(2)] = inst_77904);

(statearr_77929_79106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77919 === (5))){
var inst_77890 = (state_77918[(8)]);
var state_77918__$1 = state_77918;
var statearr_77930_79107 = state_77918__$1;
(statearr_77930_79107[(2)] = inst_77890);

(statearr_77930_79107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77919 === (10))){
var inst_77886 = (state_77918[(11)]);
var inst_77900 = (state_77918[(10)]);
var inst_77914 = (state_77918[(2)]);
var inst_77915 = [inst_77900,inst_77914];
var inst_77916 = (new cljs.core.PersistentVector(null,2,(5),inst_77886,inst_77915,null));
var state_77918__$1 = state_77918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77918__$1,inst_77916);
} else {
if((state_val_77919 === (8))){
var inst_77904 = (state_77918[(7)]);
var inst_77911 = (function(){throw inst_77904})();
var state_77918__$1 = state_77918;
var statearr_77931_79108 = state_77918__$1;
(statearr_77931_79108[(2)] = inst_77911);

(statearr_77931_79108[(1)] = (10));


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
});
return (function() {
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0 = (function (){
var statearr_77932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77932[(0)] = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__);

(statearr_77932[(1)] = (1));

return statearr_77932;
});
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1 = (function (state_77918){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77918);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e77933){var ex__36688__auto__ = e77933;
var statearr_77934_79109 = state_77918;
(statearr_77934_79109[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77918[(4)]))){
var statearr_77935_79110 = state_77918;
(statearr_77935_79110[(1)] = cljs.core.first((state_77918[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79111 = state_77918;
state_77918 = G__79111;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__ = function(state_77918){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1.call(this,state_77918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_77936 = f__36777__auto__();
(statearr_77936[(6)] = c__36776__auto__);

return statearr_77936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_reserves = (function lpdashboard$core$_LT_total_pool_reserves(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_77994){
var state_val_77995 = (state_77994[(1)]);
if((state_val_77995 === (7))){
var inst_77955 = (state_77994[(7)]);
var inst_77962 = (function(){throw inst_77955})();
var state_77994__$1 = state_77994;
var statearr_77996_79112 = state_77994__$1;
(statearr_77996_79112[(2)] = inst_77962);

(statearr_77996_79112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (1))){
var inst_77937 = (state_77994[(8)]);
var inst_77937__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_77938 = inst_77937__$1.token0();
var inst_77939 = cljs.core.async.interop.p__GT_c(inst_77938);
var state_77994__$1 = (function (){var statearr_77997 = state_77994;
(statearr_77997[(8)] = inst_77937__$1);

return statearr_77997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77994__$1,(2),inst_77939);
} else {
if((state_val_77995 === (4))){
var inst_77941 = (state_77994[(9)]);
var state_77994__$1 = state_77994;
var statearr_77998_79113 = state_77994__$1;
(statearr_77998_79113[(2)] = inst_77941);

(statearr_77998_79113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (15))){
var inst_77971 = (state_77994[(10)]);
var inst_77968 = (state_77994[(11)]);
var inst_77985 = (state_77994[(2)]);
var inst_77986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77987 = cljs.core.first(inst_77985);
var inst_77988 = lpdashboard.utils.ebn__GT_bn(inst_77987,inst_77968);
var inst_77989 = cljs.core.second(inst_77985);
var inst_77990 = lpdashboard.utils.ebn__GT_bn(inst_77989,inst_77971);
var inst_77991 = [inst_77988,inst_77990];
var inst_77992 = (new cljs.core.PersistentVector(null,2,(5),inst_77986,inst_77991,null));
var state_77994__$1 = state_77994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77994__$1,inst_77992);
} else {
if((state_val_77995 === (13))){
var inst_77975 = (state_77994[(12)]);
var inst_77982 = (function(){throw inst_77975})();
var state_77994__$1 = state_77994;
var statearr_77999_79114 = state_77994__$1;
(statearr_77999_79114[(2)] = inst_77982);

(statearr_77999_79114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (6))){
var inst_77955 = (state_77994[(7)]);
var inst_77955__$1 = (state_77994[(2)]);
var inst_77956 = (inst_77955__$1 instanceof cljs.core.ExceptionInfo);
var inst_77957 = cljs.core.ex_data(inst_77955__$1);
var inst_77958 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77957);
var inst_77959 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77958,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77960 = ((inst_77956) && (inst_77959));
var state_77994__$1 = (function (){var statearr_78000 = state_77994;
(statearr_78000[(7)] = inst_77955__$1);

return statearr_78000;
})();
if(cljs.core.truth_(inst_77960)){
var statearr_78001_79115 = state_77994__$1;
(statearr_78001_79115[(1)] = (7));

} else {
var statearr_78002_79116 = state_77994__$1;
(statearr_78002_79116[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (3))){
var inst_77941 = (state_77994[(9)]);
var inst_77948 = (function(){throw inst_77941})();
var state_77994__$1 = state_77994;
var statearr_78003_79117 = state_77994__$1;
(statearr_78003_79117[(2)] = inst_77948);

(statearr_78003_79117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (12))){
var inst_77975 = (state_77994[(12)]);
var inst_77975__$1 = (state_77994[(2)]);
var inst_77976 = (inst_77975__$1 instanceof cljs.core.ExceptionInfo);
var inst_77977 = cljs.core.ex_data(inst_77975__$1);
var inst_77978 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77977);
var inst_77979 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77978,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77980 = ((inst_77976) && (inst_77979));
var state_77994__$1 = (function (){var statearr_78004 = state_77994;
(statearr_78004[(12)] = inst_77975__$1);

return statearr_78004;
})();
if(cljs.core.truth_(inst_77980)){
var statearr_78005_79118 = state_77994__$1;
(statearr_78005_79118[(1)] = (13));

} else {
var statearr_78006_79119 = state_77994__$1;
(statearr_78006_79119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (2))){
var inst_77941 = (state_77994[(9)]);
var inst_77941__$1 = (state_77994[(2)]);
var inst_77942 = (inst_77941__$1 instanceof cljs.core.ExceptionInfo);
var inst_77943 = cljs.core.ex_data(inst_77941__$1);
var inst_77944 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_77943);
var inst_77945 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_77944,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_77946 = ((inst_77942) && (inst_77945));
var state_77994__$1 = (function (){var statearr_78007 = state_77994;
(statearr_78007[(9)] = inst_77941__$1);

return statearr_78007;
})();
if(cljs.core.truth_(inst_77946)){
var statearr_78008_79120 = state_77994__$1;
(statearr_78008_79120[(1)] = (3));

} else {
var statearr_78009_79121 = state_77994__$1;
(statearr_78009_79121[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (11))){
var inst_77937 = (state_77994[(8)]);
var inst_77971 = (state_77994[(2)]);
var inst_77972 = inst_77937.getReserves();
var inst_77973 = cljs.core.async.interop.p__GT_c(inst_77972);
var state_77994__$1 = (function (){var statearr_78010 = state_77994;
(statearr_78010[(10)] = inst_77971);

return statearr_78010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77994__$1,(12),inst_77973);
} else {
if((state_val_77995 === (9))){
var inst_77951 = (state_77994[(13)]);
var inst_77965 = (state_77994[(2)]);
var inst_77966 = lpdashboard.ethereum._LT_token_decimals(inst_77951);
var state_77994__$1 = (function (){var statearr_78011 = state_77994;
(statearr_78011[(14)] = inst_77965);

return statearr_78011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77994__$1,(10),inst_77966);
} else {
if((state_val_77995 === (5))){
var inst_77937 = (state_77994[(8)]);
var inst_77951 = (state_77994[(2)]);
var inst_77952 = inst_77937.token1();
var inst_77953 = cljs.core.async.interop.p__GT_c(inst_77952);
var state_77994__$1 = (function (){var statearr_78012 = state_77994;
(statearr_78012[(13)] = inst_77951);

return statearr_78012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77994__$1,(6),inst_77953);
} else {
if((state_val_77995 === (14))){
var inst_77975 = (state_77994[(12)]);
var state_77994__$1 = state_77994;
var statearr_78013_79122 = state_77994__$1;
(statearr_78013_79122[(2)] = inst_77975);

(statearr_78013_79122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77995 === (10))){
var inst_77965 = (state_77994[(14)]);
var inst_77968 = (state_77994[(2)]);
var inst_77969 = lpdashboard.ethereum._LT_token_decimals(inst_77965);
var state_77994__$1 = (function (){var statearr_78014 = state_77994;
(statearr_78014[(11)] = inst_77968);

return statearr_78014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77994__$1,(11),inst_77969);
} else {
if((state_val_77995 === (8))){
var inst_77955 = (state_77994[(7)]);
var state_77994__$1 = state_77994;
var statearr_78015_79123 = state_77994__$1;
(statearr_78015_79123[(2)] = inst_77955);

(statearr_78015_79123[(1)] = (9));


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
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0 = (function (){
var statearr_78016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78016[(0)] = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__);

(statearr_78016[(1)] = (1));

return statearr_78016;
});
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1 = (function (state_77994){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_77994);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78017){var ex__36688__auto__ = e78017;
var statearr_78018_79124 = state_77994;
(statearr_78018_79124[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_77994[(4)]))){
var statearr_78019_79125 = state_77994;
(statearr_78019_79125[(1)] = cljs.core.first((state_77994[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79126 = state_77994;
state_77994 = G__79126;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__ = function(state_77994){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1.call(this,state_77994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78020 = f__36777__auto__();
(statearr_78020[(6)] = c__36776__auto__);

return statearr_78020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.staked_lps = (function lpdashboard$core$staked_lps(staked_proportion,staked_balance){
return bignumber.core._STAR_(staked_proportion,staked_balance);
});
lpdashboard.core.proportion_reserves = (function lpdashboard$core$proportion_reserves(token_reserve,lp_proportion){
return bignumber.core._STAR_(token_reserve,lp_proportion);
});
lpdashboard.core.proportion_lps = (function lpdashboard$core$proportion_lps(lps,total_lps){
return bignumber.core._SLASH_(lps,total_lps);
});
lpdashboard.core.staked_positions = (function lpdashboard$core$staked_positions(lp_reserves,total_lps,lp_staked,lp_symbols){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635),lp_staked,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),lpdashboard.core.proportion_reserves(cljs.core.first(lp_reserves),lpdashboard.core.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),cljs.core.first(lp_symbols),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),lpdashboard.core.proportion_reserves(cljs.core.second(lp_reserves),lpdashboard.core.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),cljs.core.second(lp_symbols)], null);
});
lpdashboard.core._LT_make_sashimi_pool_index = (function lpdashboard$core$_LT_make_sashimi_pool_index(staking_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78046){
var state_val_78047 = (state_78046[(1)]);
if((state_val_78047 === (1))){
var inst_78021 = (state_78046[(7)]);
var inst_78021__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var inst_78022 = inst_78021__$1.poolLength();
var inst_78023 = cljs.core.async.interop.p__GT_c(inst_78022);
var state_78046__$1 = (function (){var statearr_78048 = state_78046;
(statearr_78048[(7)] = inst_78021__$1);

return statearr_78048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78046__$1,(2),inst_78023);
} else {
if((state_val_78047 === (2))){
var inst_78025 = (state_78046[(8)]);
var inst_78025__$1 = (state_78046[(2)]);
var inst_78026 = (inst_78025__$1 instanceof cljs.core.ExceptionInfo);
var inst_78027 = cljs.core.ex_data(inst_78025__$1);
var inst_78028 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78027);
var inst_78029 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78028,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78030 = ((inst_78026) && (inst_78029));
var state_78046__$1 = (function (){var statearr_78049 = state_78046;
(statearr_78049[(8)] = inst_78025__$1);

return statearr_78049;
})();
if(cljs.core.truth_(inst_78030)){
var statearr_78050_79127 = state_78046__$1;
(statearr_78050_79127[(1)] = (3));

} else {
var statearr_78051_79128 = state_78046__$1;
(statearr_78051_79128[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78047 === (3))){
var inst_78025 = (state_78046[(8)]);
var inst_78032 = (function(){throw inst_78025})();
var state_78046__$1 = state_78046;
var statearr_78052_79129 = state_78046__$1;
(statearr_78052_79129[(2)] = inst_78032);

(statearr_78052_79129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78047 === (4))){
var inst_78025 = (state_78046[(8)]);
var state_78046__$1 = state_78046;
var statearr_78053_79130 = state_78046__$1;
(statearr_78053_79130[(2)] = inst_78025);

(statearr_78053_79130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78047 === (5))){
var inst_78021 = (state_78046[(7)]);
var inst_78035 = (state_78046[(2)]);
var inst_78036 = cljs.core.identity(inst_78035);
var inst_78037 = (function (){var contract = inst_78021;
var many_pools = inst_78036;
return (function (p){
var c__36776__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78074){
var state_val_78075 = (state_78074[(1)]);
if((state_val_78075 === (1))){
var inst_78054 = contract.poolInfo(p);
var inst_78055 = cljs.core.async.interop.p__GT_c(inst_78054);
var state_78074__$1 = state_78074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78074__$1,(2),inst_78055);
} else {
if((state_val_78075 === (2))){
var inst_78057 = (state_78074[(7)]);
var inst_78057__$1 = (state_78074[(2)]);
var inst_78058 = (inst_78057__$1 instanceof cljs.core.ExceptionInfo);
var inst_78059 = cljs.core.ex_data(inst_78057__$1);
var inst_78060 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78059);
var inst_78061 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78060,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78062 = ((inst_78058) && (inst_78061));
var state_78074__$1 = (function (){var statearr_78076 = state_78074;
(statearr_78076[(7)] = inst_78057__$1);

return statearr_78076;
})();
if(cljs.core.truth_(inst_78062)){
var statearr_78077_79131 = state_78074__$1;
(statearr_78077_79131[(1)] = (3));

} else {
var statearr_78078_79132 = state_78074__$1;
(statearr_78078_79132[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78075 === (3))){
var inst_78057 = (state_78074[(7)]);
var inst_78064 = (function(){throw inst_78057})();
var state_78074__$1 = state_78074;
var statearr_78079_79133 = state_78074__$1;
(statearr_78079_79133[(2)] = inst_78064);

(statearr_78079_79133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78075 === (4))){
var inst_78057 = (state_78074[(7)]);
var state_78074__$1 = state_78074;
var statearr_78080_79134 = state_78074__$1;
(statearr_78080_79134[(2)] = inst_78057);

(statearr_78080_79134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78075 === (5))){
var inst_78067 = (state_78074[(2)]);
var inst_78068 = cljs.core.first(inst_78067);
var inst_78069 = clojure.string.lower_case(inst_78068);
var inst_78070 = [inst_78069];
var inst_78071 = [p];
var inst_78072 = cljs.core.PersistentHashMap.fromArrays(inst_78070,inst_78071);
var state_78074__$1 = state_78074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78074__$1,inst_78072);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0 = (function (){
var statearr_78081 = [null,null,null,null,null,null,null,null];
(statearr_78081[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_78081[(1)] = (1));

return statearr_78081;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_78074){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78074);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78082){var ex__36688__auto__ = e78082;
var statearr_78083_79135 = state_78074;
(statearr_78083_79135[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78074[(4)]))){
var statearr_78084_79136 = state_78074;
(statearr_78084_79136[(1)] = cljs.core.first((state_78074[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79137 = state_78074;
state_78074 = G__79137;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_78074){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_78074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78085 = f__36777__auto__();
(statearr_78085[(6)] = c__36776__auto____$1);

return statearr_78085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto____$1;
});
})();
var inst_78038 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_78036);
var inst_78039 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78037,inst_78038);
var inst_78040 = cljs.core.PersistentHashMap.EMPTY;
var inst_78041 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_78039);
var inst_78042 = cljs.core.async.reduce(cljs.core.merge,inst_78040,inst_78041);
var state_78046__$1 = state_78046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78046__$1,(6),inst_78042);
} else {
if((state_val_78047 === (6))){
var inst_78044 = (state_78046[(2)]);
var state_78046__$1 = state_78046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78046__$1,inst_78044);
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
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0 = (function (){
var statearr_78086 = [null,null,null,null,null,null,null,null,null];
(statearr_78086[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_78086[(1)] = (1));

return statearr_78086;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_78046){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78046);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78087){var ex__36688__auto__ = e78087;
var statearr_78088_79138 = state_78046;
(statearr_78088_79138[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78046[(4)]))){
var statearr_78089_79139 = state_78046;
(statearr_78089_79139[(1)] = cljs.core.first((state_78046[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79140 = state_78046;
state_78046 = G__79140;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_78046){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_78046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78090 = f__36777__auto__();
(statearr_78090[(6)] = c__36776__auto__);

return statearr_78090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.make_paid_rewards = (function lpdashboard$core$make_paid_rewards(parsed_transfer){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(parsed_transfer)], null);
});
lpdashboard.core._LT_staked_lp_positions_sr = (function lpdashboard$core$_LT_staked_lp_positions_sr(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78130){
var state_val_78131 = (state_78130[(1)]);
if((state_val_78131 === (7))){
var inst_78109 = (state_78130[(7)]);
var inst_78113 = (state_78130[(8)]);
var inst_78113__$1 = (state_78130[(2)]);
var inst_78114 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re:",inst_78113__$1], 0));
var inst_78115 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_78109,staking_address,user_address);
var state_78130__$1 = (function (){var statearr_78132 = state_78130;
(statearr_78132[(9)] = inst_78114);

(statearr_78132[(8)] = inst_78113__$1);

return statearr_78132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(8),inst_78115);
} else {
if((state_val_78131 === (1))){
var inst_78091 = lpdashboard.core._LT_staked_prop(staking_address,user_address);
var state_78130__$1 = state_78130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(2),inst_78091);
} else {
if((state_val_78131 === (4))){
var inst_78101 = (state_78130[(10)]);
var inst_78101__$1 = (state_78130[(2)]);
var inst_78102 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["total-unis:",inst_78101__$1], 0));
var inst_78103 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_78130__$1 = (function (){var statearr_78133 = state_78130;
(statearr_78133[(11)] = inst_78102);

(statearr_78133[(10)] = inst_78101__$1);

return statearr_78133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(5),inst_78103);
} else {
if((state_val_78131 === (6))){
var inst_78109 = (state_78130[(7)]);
var inst_78109__$1 = (state_78130[(2)]);
var inst_78110 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rt:",inst_78109__$1], 0));
var inst_78111 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_78109__$1,user_address);
var state_78130__$1 = (function (){var statearr_78134 = state_78130;
(statearr_78134[(12)] = inst_78110);

(statearr_78134[(7)] = inst_78109__$1);

return statearr_78134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(7),inst_78111);
} else {
if((state_val_78131 === (3))){
var inst_78093 = (state_78130[(13)]);
var inst_78097 = (state_78130[(14)]);
var inst_78096 = (state_78130[(2)]);
var inst_78097__$1 = lpdashboard.core.staked_lps(inst_78093,inst_78096);
var inst_78098 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["my-unis:",inst_78097__$1], 0));
var inst_78099 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_78130__$1 = (function (){var statearr_78135 = state_78130;
(statearr_78135[(15)] = inst_78098);

(statearr_78135[(14)] = inst_78097__$1);

return statearr_78135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(4),inst_78099);
} else {
if((state_val_78131 === (2))){
var inst_78093 = (state_78130[(2)]);
var inst_78094 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_78130__$1 = (function (){var statearr_78136 = state_78130;
(statearr_78136[(13)] = inst_78093);

return statearr_78136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(3),inst_78094);
} else {
if((state_val_78131 === (9))){
var inst_78119 = (state_78130[(16)]);
var inst_78101 = (state_78130[(10)]);
var inst_78105 = (state_78130[(17)]);
var inst_78097 = (state_78130[(14)]);
var inst_78109 = (state_78130[(7)]);
var inst_78113 = (state_78130[(8)]);
var inst_78122 = (state_78130[(2)]);
var inst_78123 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tpr",inst_78122], 0));
var inst_78124 = lpdashboard.core.staked_positions(inst_78122,inst_78101,inst_78097,inst_78105);
var inst_78125 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_78126 = [inst_78113,inst_78109,inst_78119];
var inst_78127 = cljs.core.PersistentHashMap.fromArrays(inst_78125,inst_78126);
var inst_78128 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_78124,inst_78127);
var state_78130__$1 = (function (){var statearr_78137 = state_78130;
(statearr_78137[(18)] = inst_78123);

return statearr_78137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78130__$1,inst_78128);
} else {
if((state_val_78131 === (5))){
var inst_78105 = (state_78130[(17)]);
var inst_78105__$1 = (state_78130[(2)]);
var inst_78106 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lp-symbols:",inst_78105__$1], 0));
var inst_78107 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_78130__$1 = (function (){var statearr_78138 = state_78130;
(statearr_78138[(19)] = inst_78106);

(statearr_78138[(17)] = inst_78105__$1);

return statearr_78138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(6),inst_78107);
} else {
if((state_val_78131 === (8))){
var inst_78117 = (state_78130[(2)]);
var inst_78118 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rtr:",inst_78117], 0));
var inst_78119 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_78117);
var inst_78120 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_78130__$1 = (function (){var statearr_78139 = state_78130;
(statearr_78139[(16)] = inst_78119);

(statearr_78139[(20)] = inst_78118);

return statearr_78139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78130__$1,(9),inst_78120);
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
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0 = (function (){
var statearr_78140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78140[(0)] = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__);

(statearr_78140[(1)] = (1));

return statearr_78140;
});
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1 = (function (state_78130){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78130);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78141){var ex__36688__auto__ = e78141;
var statearr_78142_79141 = state_78130;
(statearr_78142_79141[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78130[(4)]))){
var statearr_78143_79142 = state_78130;
(statearr_78143_79142[(1)] = cljs.core.first((state_78130[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79143 = state_78130;
state_78130 = G__79143;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__ = function(state_78130){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1.call(this,state_78130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78144 = f__36777__auto__();
(statearr_78144[(6)] = c__36776__auto__);

return statearr_78144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_lpbar = (function lpdashboard$core$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78196){
var state_val_78197 = (state_78196[(1)]);
if((state_val_78197 === (7))){
var inst_78165 = (state_78196[(2)]);
var inst_78166 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_78196__$1 = (function (){var statearr_78198 = state_78196;
(statearr_78198[(7)] = inst_78165);

return statearr_78198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78196__$1,(8),inst_78166);
} else {
if((state_val_78197 === (1))){
var inst_78145 = (state_78196[(8)]);
var inst_78145__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.lpbar_abi,staking_address);
var inst_78146 = inst_78145__$1.lpBalance(user_address);
var inst_78147 = cljs.core.async.interop.p__GT_c(inst_78146);
var state_78196__$1 = (function (){var statearr_78199 = state_78196;
(statearr_78199[(8)] = inst_78145__$1);

return statearr_78199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78196__$1,(2),inst_78147);
} else {
if((state_val_78197 === (4))){
var inst_78149 = (state_78196[(9)]);
var state_78196__$1 = state_78196;
var statearr_78200_79144 = state_78196__$1;
(statearr_78200_79144[(2)] = inst_78149);

(statearr_78200_79144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (15))){
var inst_78194 = (state_78196[(2)]);
var state_78196__$1 = state_78196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78196__$1,inst_78194);
} else {
if((state_val_78197 === (13))){
var inst_78159 = (state_78196[(10)]);
var inst_78165 = (state_78196[(7)]);
var inst_78168 = (state_78196[(11)]);
var inst_78162 = (state_78196[(12)]);
var inst_78187 = lpdashboard.core.staked_positions(inst_78168,inst_78162,inst_78159,inst_78165);
var state_78196__$1 = state_78196;
var statearr_78201_79145 = state_78196__$1;
(statearr_78201_79145[(2)] = inst_78187);

(statearr_78201_79145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (6))){
var inst_78162 = (state_78196[(2)]);
var inst_78163 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_78196__$1 = (function (){var statearr_78202 = state_78196;
(statearr_78202[(12)] = inst_78162);

return statearr_78202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78196__$1,(7),inst_78163);
} else {
if((state_val_78197 === (3))){
var inst_78149 = (state_78196[(9)]);
var inst_78156 = (function(){throw inst_78149})();
var state_78196__$1 = state_78196;
var statearr_78203_79146 = state_78196__$1;
(statearr_78203_79146[(2)] = inst_78156);

(statearr_78203_79146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (12))){
var inst_78182 = (state_78196[(13)]);
var inst_78182__$1 = (state_78196[(2)]);
var inst_78183 = clojure.string.lower_case(inst_78182__$1);
var inst_78184 = clojure.string.lower_case(lp_address);
var inst_78185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78183,inst_78184);
var state_78196__$1 = (function (){var statearr_78204 = state_78196;
(statearr_78204[(13)] = inst_78182__$1);

return statearr_78204;
})();
if(inst_78185){
var statearr_78205_79147 = state_78196__$1;
(statearr_78205_79147[(1)] = (13));

} else {
var statearr_78206_79148 = state_78196__$1;
(statearr_78206_79148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (2))){
var inst_78149 = (state_78196[(9)]);
var inst_78149__$1 = (state_78196[(2)]);
var inst_78150 = (inst_78149__$1 instanceof cljs.core.ExceptionInfo);
var inst_78151 = cljs.core.ex_data(inst_78149__$1);
var inst_78152 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78151);
var inst_78153 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78152,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78154 = ((inst_78150) && (inst_78153));
var state_78196__$1 = (function (){var statearr_78207 = state_78196;
(statearr_78207[(9)] = inst_78149__$1);

return statearr_78207;
})();
if(cljs.core.truth_(inst_78154)){
var statearr_78208_79149 = state_78196__$1;
(statearr_78208_79149[(1)] = (3));

} else {
var statearr_78209_79150 = state_78196__$1;
(statearr_78209_79150[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (11))){
var inst_78172 = (state_78196[(14)]);
var state_78196__$1 = state_78196;
var statearr_78210_79151 = state_78196__$1;
(statearr_78210_79151[(2)] = inst_78172);

(statearr_78210_79151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (9))){
var inst_78172 = (state_78196[(14)]);
var inst_78172__$1 = (state_78196[(2)]);
var inst_78173 = (inst_78172__$1 instanceof cljs.core.ExceptionInfo);
var inst_78174 = cljs.core.ex_data(inst_78172__$1);
var inst_78175 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78174);
var inst_78176 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78175,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78177 = ((inst_78173) && (inst_78176));
var state_78196__$1 = (function (){var statearr_78211 = state_78196;
(statearr_78211[(14)] = inst_78172__$1);

return statearr_78211;
})();
if(cljs.core.truth_(inst_78177)){
var statearr_78212_79152 = state_78196__$1;
(statearr_78212_79152[(1)] = (10));

} else {
var statearr_78213_79153 = state_78196__$1;
(statearr_78213_79153[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (5))){
var inst_78159 = (state_78196[(2)]);
var inst_78160 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_78196__$1 = (function (){var statearr_78214 = state_78196;
(statearr_78214[(10)] = inst_78159);

return statearr_78214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78196__$1,(6),inst_78160);
} else {
if((state_val_78197 === (14))){
var inst_78182 = (state_78196[(13)]);
var inst_78189 = console.log("lp addresses do not match:",staking_address,lp_address,inst_78182);
var inst_78190 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_78191 = [(0),(0)];
var inst_78192 = cljs.core.PersistentHashMap.fromArrays(inst_78190,inst_78191);
var state_78196__$1 = (function (){var statearr_78215 = state_78196;
(statearr_78215[(15)] = inst_78189);

return statearr_78215;
})();
var statearr_78216_79154 = state_78196__$1;
(statearr_78216_79154[(2)] = inst_78192);

(statearr_78216_79154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (10))){
var inst_78172 = (state_78196[(14)]);
var inst_78179 = (function(){throw inst_78172})();
var state_78196__$1 = state_78196;
var statearr_78217_79155 = state_78196__$1;
(statearr_78217_79155[(2)] = inst_78179);

(statearr_78217_79155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78197 === (8))){
var inst_78145 = (state_78196[(8)]);
var inst_78168 = (state_78196[(2)]);
var inst_78169 = inst_78145.lp();
var inst_78170 = cljs.core.async.interop.p__GT_c(inst_78169);
var state_78196__$1 = (function (){var statearr_78218 = state_78196;
(statearr_78218[(11)] = inst_78168);

return statearr_78218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78196__$1,(9),inst_78170);
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
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0 = (function (){
var statearr_78219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78219[(0)] = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__);

(statearr_78219[(1)] = (1));

return statearr_78219;
});
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1 = (function (state_78196){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78196);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78220){var ex__36688__auto__ = e78220;
var statearr_78221_79156 = state_78196;
(statearr_78221_79156[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78196[(4)]))){
var statearr_78222_79157 = state_78196;
(statearr_78222_79157[(1)] = cljs.core.first((state_78196[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79158 = state_78196;
state_78196 = G__79158;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__ = function(state_78196){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1.call(this,state_78196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78223 = f__36777__auto__();
(statearr_78223[(6)] = c__36776__auto__);

return statearr_78223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_sashimi_plate = (function lpdashboard$core$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78305){
var state_val_78306 = (state_78305[(1)]);
if((state_val_78306 === (7))){
var inst_78253 = (state_78305[(7)]);
var inst_78253__$1 = (state_78305[(2)]);
var inst_78254 = (inst_78253__$1 instanceof cljs.core.ExceptionInfo);
var inst_78255 = cljs.core.ex_data(inst_78253__$1);
var inst_78256 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78255);
var inst_78257 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78256,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78258 = ((inst_78254) && (inst_78257));
var state_78305__$1 = (function (){var statearr_78307 = state_78305;
(statearr_78307[(7)] = inst_78253__$1);

return statearr_78307;
})();
if(cljs.core.truth_(inst_78258)){
var statearr_78308_79159 = state_78305__$1;
(statearr_78308_79159[(1)] = (8));

} else {
var statearr_78309_79160 = state_78305__$1;
(statearr_78309_79160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (20))){
var inst_78248 = (state_78305[(8)]);
var inst_78279 = (state_78305[(9)]);
var inst_78298 = console.log("lp addresses do not match:",inst_78248,lp_address,inst_78279);
var inst_78299 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_78300 = [(0),(0)];
var inst_78301 = cljs.core.PersistentHashMap.fromArrays(inst_78299,inst_78300);
var state_78305__$1 = (function (){var statearr_78310 = state_78305;
(statearr_78310[(10)] = inst_78298);

return statearr_78310;
})();
var statearr_78311_79161 = state_78305__$1;
(statearr_78311_79161[(2)] = inst_78301);

(statearr_78311_79161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (1))){
var inst_78224 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,staking_address);
var inst_78225 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address);
var state_78305__$1 = (function (){var statearr_78312 = state_78305;
(statearr_78312[(11)] = inst_78224);

return statearr_78312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(2),inst_78225);
} else {
if((state_val_78306 === (4))){
var inst_78233 = (state_78305[(12)]);
var inst_78240 = (function(){throw inst_78233})();
var state_78305__$1 = state_78305;
var statearr_78313_79162 = state_78305__$1;
(statearr_78313_79162[(2)] = inst_78240);

(statearr_78313_79162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (15))){
var inst_78282 = (state_78305[(2)]);
var inst_78283 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_78305__$1 = (function (){var statearr_78314 = state_78305;
(statearr_78314[(13)] = inst_78282);

return statearr_78314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(16),inst_78283);
} else {
if((state_val_78306 === (21))){
var inst_78303 = (state_78305[(2)]);
var state_78305__$1 = state_78305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78305__$1,inst_78303);
} else {
if((state_val_78306 === (13))){
var inst_78268 = (state_78305[(14)]);
var state_78305__$1 = state_78305;
var statearr_78315_79163 = state_78305__$1;
(statearr_78315_79163[(2)] = inst_78268);

(statearr_78315_79163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (6))){
var inst_78248 = (state_78305[(8)]);
var inst_78227 = (state_78305[(15)]);
var inst_78249 = (state_78305[(16)]);
var inst_78246 = (state_78305[(17)]);
var inst_78243 = (state_78305[(2)]);
var inst_78244 = lpdashboard.ethereum.sashimi_iface.parseTransaction(inst_78243);
var inst_78245 = inst_78244.args;
var inst_78246__$1 = inst_78245.pid;
var inst_78247 = cljs.core.first(inst_78227);
var inst_78248__$1 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_78247);
var inst_78249__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,inst_78248__$1);
var inst_78250 = inst_78249__$1.userInfo(inst_78246__$1,user_address);
var inst_78251 = cljs.core.async.interop.p__GT_c(inst_78250);
var state_78305__$1 = (function (){var statearr_78316 = state_78305;
(statearr_78316[(8)] = inst_78248__$1);

(statearr_78316[(16)] = inst_78249__$1);

(statearr_78316[(17)] = inst_78246__$1);

return statearr_78316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(7),inst_78251);
} else {
if((state_val_78306 === (17))){
var inst_78288 = (state_78305[(2)]);
var inst_78289 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_78305__$1 = (function (){var statearr_78317 = state_78305;
(statearr_78317[(18)] = inst_78288);

return statearr_78317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(18),inst_78289);
} else {
if((state_val_78306 === (3))){
var inst_78233 = (state_78305[(12)]);
var inst_78233__$1 = (state_78305[(2)]);
var inst_78234 = (inst_78233__$1 instanceof cljs.core.ExceptionInfo);
var inst_78235 = cljs.core.ex_data(inst_78233__$1);
var inst_78236 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78235);
var inst_78237 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78236,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78238 = ((inst_78234) && (inst_78237));
var state_78305__$1 = (function (){var statearr_78318 = state_78305;
(statearr_78318[(12)] = inst_78233__$1);

return statearr_78318;
})();
if(cljs.core.truth_(inst_78238)){
var statearr_78319_79164 = state_78305__$1;
(statearr_78319_79164[(1)] = (4));

} else {
var statearr_78320_79165 = state_78305__$1;
(statearr_78320_79165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (12))){
var inst_78268 = (state_78305[(14)]);
var inst_78275 = (function(){throw inst_78268})();
var state_78305__$1 = state_78305;
var statearr_78321_79166 = state_78305__$1;
(statearr_78321_79166[(2)] = inst_78275);

(statearr_78321_79166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (2))){
var inst_78227 = (state_78305[(15)]);
var inst_78227__$1 = (state_78305[(2)]);
var inst_78228 = cljs.core.first(inst_78227__$1);
var inst_78229 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_78228);
var inst_78230 = lpdashboard.core.provider.getTransaction(inst_78229);
var inst_78231 = cljs.core.async.interop.p__GT_c(inst_78230);
var state_78305__$1 = (function (){var statearr_78322 = state_78305;
(statearr_78322[(15)] = inst_78227__$1);

return statearr_78322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(3),inst_78231);
} else {
if((state_val_78306 === (19))){
var inst_78285 = (state_78305[(19)]);
var inst_78291 = (state_78305[(20)]);
var inst_78264 = (state_78305[(21)]);
var inst_78288 = (state_78305[(18)]);
var inst_78296 = lpdashboard.core.staked_positions(inst_78291,inst_78285,inst_78264,inst_78288);
var state_78305__$1 = state_78305;
var statearr_78323_79167 = state_78305__$1;
(statearr_78323_79167[(2)] = inst_78296);

(statearr_78323_79167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (11))){
var inst_78268 = (state_78305[(14)]);
var inst_78268__$1 = (state_78305[(2)]);
var inst_78269 = (inst_78268__$1 instanceof cljs.core.ExceptionInfo);
var inst_78270 = cljs.core.ex_data(inst_78268__$1);
var inst_78271 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78270);
var inst_78272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78271,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78273 = ((inst_78269) && (inst_78272));
var state_78305__$1 = (function (){var statearr_78324 = state_78305;
(statearr_78324[(14)] = inst_78268__$1);

return statearr_78324;
})();
if(cljs.core.truth_(inst_78273)){
var statearr_78325_79168 = state_78305__$1;
(statearr_78325_79168[(1)] = (12));

} else {
var statearr_78326_79169 = state_78305__$1;
(statearr_78326_79169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (9))){
var inst_78253 = (state_78305[(7)]);
var state_78305__$1 = state_78305;
var statearr_78327_79170 = state_78305__$1;
(statearr_78327_79170[(2)] = inst_78253);

(statearr_78327_79170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (5))){
var inst_78233 = (state_78305[(12)]);
var state_78305__$1 = state_78305;
var statearr_78328_79171 = state_78305__$1;
(statearr_78328_79171[(2)] = inst_78233);

(statearr_78328_79171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (14))){
var inst_78278 = (state_78305[(2)]);
var inst_78279 = cljs.core.first(inst_78278);
var inst_78280 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_78305__$1 = (function (){var statearr_78329 = state_78305;
(statearr_78329[(9)] = inst_78279);

return statearr_78329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(15),inst_78280);
} else {
if((state_val_78306 === (16))){
var inst_78285 = (state_78305[(2)]);
var inst_78286 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_78305__$1 = (function (){var statearr_78330 = state_78305;
(statearr_78330[(19)] = inst_78285);

return statearr_78330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(17),inst_78286);
} else {
if((state_val_78306 === (10))){
var inst_78249 = (state_78305[(16)]);
var inst_78246 = (state_78305[(17)]);
var inst_78263 = (state_78305[(2)]);
var inst_78264 = cljs.core.first(inst_78263);
var inst_78265 = inst_78249.poolInfo(inst_78246);
var inst_78266 = cljs.core.async.interop.p__GT_c(inst_78265);
var state_78305__$1 = (function (){var statearr_78331 = state_78305;
(statearr_78331[(21)] = inst_78264);

return statearr_78331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78305__$1,(11),inst_78266);
} else {
if((state_val_78306 === (18))){
var inst_78279 = (state_78305[(9)]);
var inst_78291 = (state_78305[(2)]);
var inst_78292 = clojure.string.lower_case(inst_78279);
var inst_78293 = clojure.string.lower_case(lp_address);
var inst_78294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78292,inst_78293);
var state_78305__$1 = (function (){var statearr_78332 = state_78305;
(statearr_78332[(20)] = inst_78291);

return statearr_78332;
})();
if(inst_78294){
var statearr_78333_79172 = state_78305__$1;
(statearr_78333_79172[(1)] = (19));

} else {
var statearr_78334_79173 = state_78305__$1;
(statearr_78334_79173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78306 === (8))){
var inst_78253 = (state_78305[(7)]);
var inst_78260 = (function(){throw inst_78253})();
var state_78305__$1 = state_78305;
var statearr_78335_79174 = state_78305__$1;
(statearr_78335_79174[(2)] = inst_78260);

(statearr_78335_79174[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0 = (function (){
var statearr_78336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78336[(0)] = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__);

(statearr_78336[(1)] = (1));

return statearr_78336;
});
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1 = (function (state_78305){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78305);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78337){var ex__36688__auto__ = e78337;
var statearr_78338_79175 = state_78305;
(statearr_78338_79175[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78305[(4)]))){
var statearr_78339_79176 = state_78305;
(statearr_78339_79176[(1)] = cljs.core.first((state_78305[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79177 = state_78305;
state_78305 = G__79177;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__ = function(state_78305){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1.call(this,state_78305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78340 = f__36777__auto__();
(statearr_78340[(6)] = c__36776__auto__);

return statearr_78340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_by_event = (function lpdashboard$core$_LT_staked_lp_positions_by_event(lp_destination,user_address){
var staking_address = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var lp_address = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var tx_hash = new cljs.core.Keyword(null,"txhash","txhash",149174990).cljs$core$IFn$_invoke$arity$1(lp_destination);
var sc = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.event_detector_abi,staking_address);
var sc_uni = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.uni_detector_abi,staking_address);
var cheff_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var deposit_filter = (sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Deposit.call(null,user_address));
var _ = (deposit_filter.fromBlock = (0));
var ___$1 = (deposit_filter.toBlock = "latest");
var staked_filter = (sc.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Staked.call(null,user_address));
var ___$2 = (staked_filter.fromBlock = (0));
var ___$3 = (staked_filter.toBlock = "latest");
var staked_filter2 = (sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc_uni.filters.Staked.call(null,user_address));
var ___$4 = (staked_filter2.fromBlock = (0));
var ___$5 = (staked_filter2.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78518){
var state_val_78519 = (state_78518[(1)]);
if((state_val_78519 === (7))){
var inst_78368 = (state_78518[(7)]);
var inst_78375 = (function(){throw inst_78368})();
var state_78518__$1 = state_78518;
var statearr_78520_79178 = state_78518__$1;
(statearr_78520_79178[(2)] = inst_78375);

(statearr_78520_79178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (20))){
var inst_78514 = (state_78518[(2)]);
var state_78518__$1 = state_78518;
var statearr_78521_79179 = state_78518__$1;
(statearr_78521_79179[(2)] = inst_78514);

(statearr_78521_79179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (27))){
var inst_78430 = (state_78518[(8)]);
var state_78518__$1 = state_78518;
var statearr_78522_79180 = state_78518__$1;
(statearr_78522_79180[(2)] = inst_78430);

(statearr_78522_79180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (1))){
var inst_78347 = (function (){return (function (p1__78341_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__78341_SHARP_.transactionHash);
});
})();
var inst_78348 = lpdashboard.core.provider.getLogs(staked_filter);
var inst_78349 = cljs.core.async.interop.p__GT_c(inst_78348);
var state_78518__$1 = (function (){var statearr_78523 = state_78518;
(statearr_78523[(9)] = inst_78347);

return statearr_78523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(2),inst_78349);
} else {
if((state_val_78519 === (24))){
var inst_78425 = (state_78518[(10)]);
var inst_78410 = (state_78518[(11)]);
var inst_78424 = (state_78518[(2)]);
var inst_78425__$1 = cljs.core.first(inst_78424);
var inst_78426 = lpdashboard.utils.ebn__GT_bn(inst_78425__$1,(18));
var inst_78427 = cheff_contract.poolInfo(inst_78410);
var inst_78428 = cljs.core.async.interop.p__GT_c(inst_78427);
var state_78518__$1 = (function (){var statearr_78524 = state_78518;
(statearr_78524[(10)] = inst_78425__$1);

(statearr_78524[(12)] = inst_78426);

return statearr_78524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(25),inst_78428);
} else {
if((state_val_78519 === (39))){
var inst_78463 = (state_78518[(13)]);
var inst_78363 = (state_78518[(14)]);
var inst_78453 = (state_78518[(15)]);
var inst_78468 = (state_78518[(16)]);
var inst_78440 = (state_78518[(17)]);
var inst_78441 = (state_78518[(18)]);
var inst_78457 = (state_78518[(19)]);
var inst_78447 = (state_78518[(20)]);
var inst_78460 = (state_78518[(21)]);
var inst_78425 = (state_78518[(10)]);
var inst_78472 = (state_78518[(22)]);
var inst_78380 = (state_78518[(23)]);
var inst_78444 = (state_78518[(24)]);
var inst_78470 = (state_78518[(25)]);
var inst_78466 = (state_78518[(26)]);
var inst_78410 = (state_78518[(11)]);
var inst_78450 = (state_78518[(27)]);
var inst_78406 = (state_78518[(28)]);
var inst_78426 = (state_78518[(12)]);
var inst_78409 = (state_78518[(29)]);
var inst_78480 = (state_78518[(30)]);
var inst_78483 = (state_78518[(2)]);
var inst_78484 = (function (){var staking_pool_lp_address = inst_78441;
var lp_symbols = inst_78447;
var lp_transfers_in = inst_78466;
var rewards_token = inst_78453;
var pool_pid = inst_78410;
var deposit_data = inst_78409;
var lp_deposits = inst_78470;
var my_lps_staked_SINGLEQUOTE_ = inst_78426;
var my_lps_staked = inst_78425;
var all_staking_deposits = inst_78463;
var staked = inst_78363;
var total_pool_reserves = inst_78450;
var pids = inst_78472;
var pool_info = inst_78440;
var reward_transfers = inst_78460;
var staked2 = inst_78380;
var total_unis = inst_78444;
var lp_decimals = (18);
var lp_transfers_hashes = inst_78468;
var all_staking_withdrawals = inst_78483;
var pid = inst_78480;
var rewards_earned = inst_78457;
var deposit = inst_78406;
return (function (p1__78345_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__78345_SHARP_),pid);
});
})();
var inst_78485 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_78483,inst_78463);
var inst_78486 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78484,inst_78485);
var inst_78487 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_78486);
var inst_78488 = cljs.core.set(inst_78487);
var inst_78489 = (function (){var staking_pool_lp_address = inst_78441;
var lp_symbols = inst_78447;
var lp_transfers_in = inst_78466;
var rewards_token = inst_78453;
var pool_pid = inst_78410;
var deposit_data = inst_78409;
var lp_deposits = inst_78470;
var my_lps_staked_SINGLEQUOTE_ = inst_78426;
var my_lps_staked = inst_78425;
var all_staking_deposits = inst_78463;
var staked = inst_78363;
var total_pool_reserves = inst_78450;
var pids = inst_78472;
var pool_info = inst_78440;
var reward_transfers = inst_78460;
var staked2 = inst_78380;
var total_unis = inst_78444;
var relevant_txids = inst_78488;
var lp_decimals = (18);
var lp_transfers_hashes = inst_78468;
var all_staking_withdrawals = inst_78483;
var pid = inst_78480;
var rewards_earned = inst_78457;
var deposit = inst_78406;
return (function (p1__78346_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__78346_SHARP_));
});
})();
var inst_78490 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78489,inst_78460);
var inst_78491 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_78490);
var inst_78492 = clojure.string.lower_case(inst_78441);
var inst_78493 = clojure.string.lower_case(lp_address);
var inst_78494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78492,inst_78493);
var state_78518__$1 = (function (){var statearr_78525 = state_78518;
(statearr_78525[(31)] = inst_78491);

return statearr_78525;
})();
if(inst_78494){
var statearr_78526_79181 = state_78518__$1;
(statearr_78526_79181[(1)] = (40));

} else {
var statearr_78527_79182 = state_78518__$1;
(statearr_78527_79182[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (4))){
var inst_78351 = (state_78518[(32)]);
var state_78518__$1 = state_78518;
var statearr_78528_79183 = state_78518__$1;
(statearr_78528_79183[(2)] = inst_78351);

(statearr_78528_79183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (15))){
var inst_78394 = (state_78518[(33)]);
var inst_78401 = (function(){throw inst_78394})();
var state_78518__$1 = state_78518;
var statearr_78529_79184 = state_78518__$1;
(statearr_78529_79184[(2)] = inst_78401);

(statearr_78529_79184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (21))){
var inst_78414 = (state_78518[(34)]);
var inst_78414__$1 = (state_78518[(2)]);
var inst_78415 = (inst_78414__$1 instanceof cljs.core.ExceptionInfo);
var inst_78416 = cljs.core.ex_data(inst_78414__$1);
var inst_78417 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78416);
var inst_78418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78417,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78419 = ((inst_78415) && (inst_78418));
var state_78518__$1 = (function (){var statearr_78530 = state_78518;
(statearr_78530[(34)] = inst_78414__$1);

return statearr_78530;
})();
if(cljs.core.truth_(inst_78419)){
var statearr_78531_79185 = state_78518__$1;
(statearr_78531_79185[(1)] = (22));

} else {
var statearr_78532_79186 = state_78518__$1;
(statearr_78532_79186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (31))){
var inst_78450 = (state_78518[(2)]);
var inst_78451 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_78518__$1 = (function (){var statearr_78533 = state_78518;
(statearr_78533[(27)] = inst_78450);

return statearr_78533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(32),inst_78451);
} else {
if((state_val_78519 === (32))){
var inst_78453 = (state_78518[(15)]);
var inst_78453__$1 = (state_78518[(2)]);
var inst_78454 = [new cljs.core.Keyword(null,"qty","qty",155560951)];
var inst_78455 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_78456 = [inst_78455];
var inst_78457 = cljs.core.PersistentHashMap.fromArrays(inst_78454,inst_78456);
var inst_78458 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_78453__$1,staking_address,user_address);
var state_78518__$1 = (function (){var statearr_78534 = state_78518;
(statearr_78534[(15)] = inst_78453__$1);

(statearr_78534[(19)] = inst_78457);

return statearr_78534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(33),inst_78458);
} else {
if((state_val_78519 === (40))){
var inst_78453 = (state_78518[(15)]);
var inst_78457 = (state_78518[(19)]);
var inst_78447 = (state_78518[(20)]);
var inst_78444 = (state_78518[(24)]);
var inst_78450 = (state_78518[(27)]);
var inst_78426 = (state_78518[(12)]);
var inst_78491 = (state_78518[(31)]);
var inst_78496 = lpdashboard.core.staked_positions(inst_78450,inst_78444,inst_78426,inst_78447);
var inst_78497 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_78498 = [inst_78457,inst_78453,inst_78491];
var inst_78499 = cljs.core.PersistentHashMap.fromArrays(inst_78497,inst_78498);
var inst_78500 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_78496,inst_78499);
var state_78518__$1 = state_78518;
var statearr_78535_79187 = state_78518__$1;
(statearr_78535_79187[(2)] = inst_78500);

(statearr_78535_79187[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (33))){
var inst_78460 = (state_78518[(2)]);
var inst_78461 = lpdashboard.ethereum._LT_user_token_deposits(lpdashboard.core.provider,staking_address,user_address);
var state_78518__$1 = (function (){var statearr_78536 = state_78518;
(statearr_78536[(21)] = inst_78460);

return statearr_78536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(34),inst_78461);
} else {
if((state_val_78519 === (13))){
var inst_78388 = (state_78518[(2)]);
var state_78518__$1 = state_78518;
var statearr_78537_79188 = state_78518__$1;
(statearr_78537_79188[(2)] = inst_78388);

(statearr_78537_79188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (22))){
var inst_78414 = (state_78518[(34)]);
var inst_78421 = (function(){throw inst_78414})();
var state_78518__$1 = state_78518;
var statearr_78538_79189 = state_78518__$1;
(statearr_78538_79189[(2)] = inst_78421);

(statearr_78538_79189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (36))){
var inst_78472 = (state_78518[(22)]);
var inst_78476 = cljs.core.first(inst_78472);
var state_78518__$1 = state_78518;
var statearr_78539_79190 = state_78518__$1;
(statearr_78539_79190[(2)] = inst_78476);

(statearr_78539_79190[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (41))){
var inst_78453 = (state_78518[(15)]);
var inst_78441 = (state_78518[(18)]);
var inst_78457 = (state_78518[(19)]);
var inst_78447 = (state_78518[(20)]);
var inst_78444 = (state_78518[(24)]);
var inst_78410 = (state_78518[(11)]);
var inst_78450 = (state_78518[(27)]);
var inst_78491 = (state_78518[(31)]);
var inst_78502 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78410);
var inst_78503 = console.log("lp addresses do not match:",staking_address,lp_address,inst_78441,"pid",inst_78502);
var inst_78504 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_78505 = lpdashboard.core.staked_positions(inst_78450,inst_78444,inst_78504,inst_78447);
var inst_78506 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_78507 = [inst_78457,inst_78453,inst_78491];
var inst_78508 = cljs.core.PersistentHashMap.fromArrays(inst_78506,inst_78507);
var inst_78509 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_78505,inst_78508);
var state_78518__$1 = (function (){var statearr_78540 = state_78518;
(statearr_78540[(35)] = inst_78503);

return statearr_78540;
})();
var statearr_78541_79191 = state_78518__$1;
(statearr_78541_79191[(2)] = inst_78509);

(statearr_78541_79191[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (29))){
var inst_78444 = (state_78518[(2)]);
var inst_78445 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_78518__$1 = (function (){var statearr_78542 = state_78518;
(statearr_78542[(24)] = inst_78444);

return statearr_78542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(30),inst_78445);
} else {
if((state_val_78519 === (6))){
var inst_78368 = (state_78518[(7)]);
var inst_78368__$1 = (state_78518[(2)]);
var inst_78369 = (inst_78368__$1 instanceof cljs.core.ExceptionInfo);
var inst_78370 = cljs.core.ex_data(inst_78368__$1);
var inst_78371 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78370);
var inst_78372 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78371,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78373 = ((inst_78369) && (inst_78372));
var state_78518__$1 = (function (){var statearr_78543 = state_78518;
(statearr_78543[(7)] = inst_78368__$1);

return statearr_78543;
})();
if(cljs.core.truth_(inst_78373)){
var statearr_78544_79192 = state_78518__$1;
(statearr_78544_79192[(1)] = (7));

} else {
var statearr_78545_79193 = state_78518__$1;
(statearr_78545_79193[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (28))){
var inst_78440 = (state_78518[(17)]);
var inst_78440__$1 = (state_78518[(2)]);
var inst_78441 = cljs.core.first(inst_78440__$1);
var inst_78442 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_78518__$1 = (function (){var statearr_78546 = state_78518;
(statearr_78546[(17)] = inst_78440__$1);

(statearr_78546[(18)] = inst_78441);

return statearr_78546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(29),inst_78442);
} else {
if((state_val_78519 === (25))){
var inst_78430 = (state_78518[(8)]);
var inst_78430__$1 = (state_78518[(2)]);
var inst_78431 = (inst_78430__$1 instanceof cljs.core.ExceptionInfo);
var inst_78432 = cljs.core.ex_data(inst_78430__$1);
var inst_78433 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78432);
var inst_78434 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78433,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78435 = ((inst_78431) && (inst_78434));
var state_78518__$1 = (function (){var statearr_78547 = state_78518;
(statearr_78547[(8)] = inst_78430__$1);

return statearr_78547;
})();
if(cljs.core.truth_(inst_78435)){
var statearr_78548_79194 = state_78518__$1;
(statearr_78548_79194[(1)] = (26));

} else {
var statearr_78549_79195 = state_78518__$1;
(statearr_78549_79195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (34))){
var inst_78463 = (state_78518[(2)]);
var inst_78464 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,lp_address,user_address,staking_address);
var state_78518__$1 = (function (){var statearr_78550 = state_78518;
(statearr_78550[(13)] = inst_78463);

return statearr_78550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(35),inst_78464);
} else {
if((state_val_78519 === (17))){
var inst_78390 = (state_78518[(36)]);
var inst_78406 = (state_78518[(28)]);
var inst_78404 = (state_78518[(2)]);
var inst_78405 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78390,inst_78404);
var inst_78406__$1 = cljs.core.first(inst_78405);
var inst_78407 = (inst_78406__$1 == null);
var state_78518__$1 = (function (){var statearr_78551 = state_78518;
(statearr_78551[(28)] = inst_78406__$1);

return statearr_78551;
})();
if(cljs.core.truth_(inst_78407)){
var statearr_78552_79196 = state_78518__$1;
(statearr_78552_79196[(1)] = (18));

} else {
var statearr_78553_79197 = state_78518__$1;
(statearr_78553_79197[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (3))){
var inst_78351 = (state_78518[(32)]);
var inst_78358 = (function(){throw inst_78351})();
var state_78518__$1 = state_78518;
var statearr_78554_79198 = state_78518__$1;
(statearr_78554_79198[(2)] = inst_78358);

(statearr_78554_79198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (12))){
var inst_78516 = (state_78518[(2)]);
var state_78518__$1 = state_78518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78518__$1,inst_78516);
} else {
if((state_val_78519 === (2))){
var inst_78351 = (state_78518[(32)]);
var inst_78351__$1 = (state_78518[(2)]);
var inst_78352 = (inst_78351__$1 instanceof cljs.core.ExceptionInfo);
var inst_78353 = cljs.core.ex_data(inst_78351__$1);
var inst_78354 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78353);
var inst_78355 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78354,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78356 = ((inst_78352) && (inst_78355));
var state_78518__$1 = (function (){var statearr_78555 = state_78518;
(statearr_78555[(32)] = inst_78351__$1);

return statearr_78555;
})();
if(cljs.core.truth_(inst_78356)){
var statearr_78556_79199 = state_78518__$1;
(statearr_78556_79199[(1)] = (3));

} else {
var statearr_78557_79200 = state_78518__$1;
(statearr_78557_79200[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (23))){
var inst_78414 = (state_78518[(34)]);
var state_78518__$1 = state_78518;
var statearr_78558_79201 = state_78518__$1;
(statearr_78558_79201[(2)] = inst_78414);

(statearr_78558_79201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (35))){
var inst_78463 = (state_78518[(13)]);
var inst_78363 = (state_78518[(14)]);
var inst_78453 = (state_78518[(15)]);
var inst_78468 = (state_78518[(16)]);
var inst_78440 = (state_78518[(17)]);
var inst_78441 = (state_78518[(18)]);
var inst_78457 = (state_78518[(19)]);
var inst_78447 = (state_78518[(20)]);
var inst_78460 = (state_78518[(21)]);
var inst_78425 = (state_78518[(10)]);
var inst_78472 = (state_78518[(22)]);
var inst_78380 = (state_78518[(23)]);
var inst_78444 = (state_78518[(24)]);
var inst_78470 = (state_78518[(25)]);
var inst_78466 = (state_78518[(26)]);
var inst_78410 = (state_78518[(11)]);
var inst_78450 = (state_78518[(27)]);
var inst_78406 = (state_78518[(28)]);
var inst_78426 = (state_78518[(12)]);
var inst_78409 = (state_78518[(29)]);
var inst_78466__$1 = (state_78518[(2)]);
var inst_78467 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_78466__$1);
var inst_78468__$1 = cljs.core.set(inst_78467);
var inst_78469 = (function (){var staking_pool_lp_address = inst_78441;
var lp_symbols = inst_78447;
var lp_transfers_in = inst_78466__$1;
var rewards_token = inst_78453;
var pool_pid = inst_78410;
var deposit_data = inst_78409;
var my_lps_staked_SINGLEQUOTE_ = inst_78426;
var my_lps_staked = inst_78425;
var all_staking_deposits = inst_78463;
var staked = inst_78363;
var total_pool_reserves = inst_78450;
var pool_info = inst_78440;
var reward_transfers = inst_78460;
var staked2 = inst_78380;
var total_unis = inst_78444;
var lp_decimals = (18);
var lp_transfers_hashes = inst_78468__$1;
var rewards_earned = inst_78457;
var deposit = inst_78406;
return (function (p1__78344_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__78344_SHARP_));
});
})();
var inst_78470__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78469,inst_78463);
var inst_78471 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_78470__$1);
var inst_78472__$1 = cljs.core.set(inst_78471);
var inst_78473 = cljs.core.count(inst_78472__$1);
var inst_78474 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_78473,(1));
var state_78518__$1 = (function (){var statearr_78559 = state_78518;
(statearr_78559[(16)] = inst_78468__$1);

(statearr_78559[(22)] = inst_78472__$1);

(statearr_78559[(25)] = inst_78470__$1);

(statearr_78559[(26)] = inst_78466__$1);

return statearr_78559;
})();
if(inst_78474){
var statearr_78560_79202 = state_78518__$1;
(statearr_78560_79202[(1)] = (36));

} else {
var statearr_78561_79203 = state_78518__$1;
(statearr_78561_79203[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (19))){
var state_78518__$1 = state_78518;
var statearr_78562_79204 = state_78518__$1;
(statearr_78562_79204[(2)] = null);

(statearr_78562_79204[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (11))){
var inst_78363 = (state_78518[(14)]);
var inst_78380 = (state_78518[(23)]);
var inst_78390 = (function (){var staked = inst_78363;
var staked2 = inst_78380;
return (function (p1__78343_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__78343_SHARP_.transactionHash);
});
})();
var inst_78391 = lpdashboard.core.provider.getLogs(deposit_filter);
var inst_78392 = cljs.core.async.interop.p__GT_c(inst_78391);
var state_78518__$1 = (function (){var statearr_78563 = state_78518;
(statearr_78563[(36)] = inst_78390);

return statearr_78563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(14),inst_78392);
} else {
if((state_val_78519 === (9))){
var inst_78363 = (state_78518[(14)]);
var inst_78364 = (state_78518[(37)]);
var inst_78380 = (state_78518[(23)]);
var inst_78378 = (state_78518[(2)]);
var inst_78379 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78364,inst_78378);
var inst_78380__$1 = cljs.core.first(inst_78379);
var inst_78381 = (inst_78363 == null);
var inst_78382 = (inst_78380__$1 == null);
var inst_78383 = ((inst_78381) && (inst_78382));
var inst_78384 = cljs.core.not(inst_78383);
var state_78518__$1 = (function (){var statearr_78564 = state_78518;
(statearr_78564[(23)] = inst_78380__$1);

return statearr_78564;
})();
if(inst_78384){
var statearr_78565_79205 = state_78518__$1;
(statearr_78565_79205[(1)] = (10));

} else {
var statearr_78566_79206 = state_78518__$1;
(statearr_78566_79206[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (5))){
var inst_78363 = (state_78518[(14)]);
var inst_78347 = (state_78518[(9)]);
var inst_78361 = (state_78518[(2)]);
var inst_78362 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78347,inst_78361);
var inst_78363__$1 = cljs.core.first(inst_78362);
var inst_78364 = (function (){var staked = inst_78363__$1;
return (function (p1__78342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__78342_SHARP_.transactionHash);
});
})();
var inst_78365 = lpdashboard.core.provider.getLogs(staked_filter2);
var inst_78366 = cljs.core.async.interop.p__GT_c(inst_78365);
var state_78518__$1 = (function (){var statearr_78567 = state_78518;
(statearr_78567[(14)] = inst_78363__$1);

(statearr_78567[(37)] = inst_78364);

return statearr_78567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(6),inst_78366);
} else {
if((state_val_78519 === (14))){
var inst_78394 = (state_78518[(33)]);
var inst_78394__$1 = (state_78518[(2)]);
var inst_78395 = (inst_78394__$1 instanceof cljs.core.ExceptionInfo);
var inst_78396 = cljs.core.ex_data(inst_78394__$1);
var inst_78397 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78396);
var inst_78398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78397,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78399 = ((inst_78395) && (inst_78398));
var state_78518__$1 = (function (){var statearr_78568 = state_78518;
(statearr_78568[(33)] = inst_78394__$1);

return statearr_78568;
})();
if(cljs.core.truth_(inst_78399)){
var statearr_78569_79207 = state_78518__$1;
(statearr_78569_79207[(1)] = (15));

} else {
var statearr_78570_79208 = state_78518__$1;
(statearr_78570_79208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (26))){
var inst_78430 = (state_78518[(8)]);
var inst_78437 = (function(){throw inst_78430})();
var state_78518__$1 = state_78518;
var statearr_78571_79209 = state_78518__$1;
(statearr_78571_79209[(2)] = inst_78437);

(statearr_78571_79209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (16))){
var inst_78394 = (state_78518[(33)]);
var state_78518__$1 = state_78518;
var statearr_78572_79210 = state_78518__$1;
(statearr_78572_79210[(2)] = inst_78394);

(statearr_78572_79210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (38))){
var inst_78480 = (state_78518[(2)]);
var inst_78481 = lpdashboard.ethereum._LT_user_token_withdrawals(lpdashboard.core.provider,staking_address,user_address);
var state_78518__$1 = (function (){var statearr_78573 = state_78518;
(statearr_78573[(30)] = inst_78480);

return statearr_78573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(39),inst_78481);
} else {
if((state_val_78519 === (30))){
var inst_78447 = (state_78518[(2)]);
var inst_78448 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_78518__$1 = (function (){var statearr_78574 = state_78518;
(statearr_78574[(20)] = inst_78447);

return statearr_78574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(31),inst_78448);
} else {
if((state_val_78519 === (10))){
var inst_78386 = lpdashboard.core._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_78518__$1 = state_78518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(13),inst_78386);
} else {
if((state_val_78519 === (18))){
var inst_78410 = (state_78518[(11)]);
var inst_78406 = (state_78518[(28)]);
var inst_78409 = (state_78518[(29)]);
var inst_78409__$1 = lpdashboard.ethereum.decode_event_data(inst_78406);
var inst_78410__$1 = inst_78409__$1.pid;
var inst_78411 = cheff_contract.userInfo(inst_78410__$1,user_address);
var inst_78412 = cljs.core.async.interop.p__GT_c(inst_78411);
var state_78518__$1 = (function (){var statearr_78575 = state_78518;
(statearr_78575[(11)] = inst_78410__$1);

(statearr_78575[(29)] = inst_78409__$1);

return statearr_78575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78518__$1,(21),inst_78412);
} else {
if((state_val_78519 === (42))){
var inst_78511 = (state_78518[(2)]);
var state_78518__$1 = state_78518;
var statearr_78576_79211 = state_78518__$1;
(statearr_78576_79211[(2)] = inst_78511);

(statearr_78576_79211[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (37))){
var inst_78472 = (state_78518[(22)]);
var inst_78478 = cljs.core.first(inst_78472);
var state_78518__$1 = state_78518;
var statearr_78577_79212 = state_78518__$1;
(statearr_78577_79212[(2)] = inst_78478);

(statearr_78577_79212[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78519 === (8))){
var inst_78368 = (state_78518[(7)]);
var state_78518__$1 = state_78518;
var statearr_78578_79213 = state_78518__$1;
(statearr_78578_79213[(2)] = inst_78368);

(statearr_78578_79213[(1)] = (9));


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
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0 = (function (){
var statearr_78579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78579[(0)] = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__);

(statearr_78579[(1)] = (1));

return statearr_78579;
});
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1 = (function (state_78518){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78518);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78580){var ex__36688__auto__ = e78580;
var statearr_78581_79214 = state_78518;
(statearr_78581_79214[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78518[(4)]))){
var statearr_78582_79215 = state_78518;
(statearr_78582_79215[(1)] = cljs.core.first((state_78518[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79216 = state_78518;
state_78518 = G__79216;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__ = function(state_78518){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1.call(this,state_78518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78583 = f__36777__auto__();
(statearr_78583[(6)] = c__36776__auto__);

return statearr_78583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions = (function lpdashboard$core$_LT_staked_lp_positions(lp_destination,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78626){
var state_val_78627 = (state_78626[(1)]);
if((state_val_78627 === (7))){
var inst_78597 = (state_78626[(7)]);
var inst_78604 = (function(){throw inst_78597})();
var state_78626__$1 = state_78626;
var statearr_78628_79217 = state_78626__$1;
(statearr_78628_79217[(2)] = inst_78604);

(statearr_78628_79217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (1))){
var inst_78585 = (state_78626[(8)]);
var inst_78584 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_78585__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_78586 = lpdashboard.ethereum.make_erc20(inst_78585__$1);
var state_78626__$1 = (function (){var statearr_78629 = state_78626;
(statearr_78629[(9)] = inst_78584);

(statearr_78629[(8)] = inst_78585__$1);

(statearr_78629[(10)] = inst_78586);

return statearr_78629;
})();
var statearr_78630_79218 = state_78626__$1;
(statearr_78630_79218[(2)] = null);

(statearr_78630_79218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (4))){
var inst_78584 = (state_78626[(9)]);
var inst_78585 = (state_78626[(8)]);
var inst_78587 = (state_78626[(2)]);
var inst_78588 = console.log("no name for lp, stkaing:",inst_78584,inst_78585);
var state_78626__$1 = (function (){var statearr_78631 = state_78626;
(statearr_78631[(11)] = inst_78587);

return statearr_78631;
})();
var statearr_78632_79219 = state_78626__$1;
(statearr_78632_79219[(2)] = inst_78588);

(statearr_78632_79219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (15))){
var inst_78619 = lpdashboard.core._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_78626__$1 = state_78626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78626__$1,(16),inst_78619);
} else {
if((state_val_78627 === (13))){
var inst_78584 = (state_78626[(9)]);
var inst_78585 = (state_78626[(8)]);
var inst_78615 = lpdashboard.core._LT_staked_lp_positions_sashimi_plate(inst_78584,inst_78585,user_address);
var state_78626__$1 = state_78626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78626__$1,(14),inst_78615);
} else {
if((state_val_78627 === (6))){
var inst_78597 = (state_78626[(7)]);
var inst_78597__$1 = (state_78626[(2)]);
var inst_78598 = (inst_78597__$1 instanceof cljs.core.ExceptionInfo);
var inst_78599 = cljs.core.ex_data(inst_78597__$1);
var inst_78600 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_78599);
var inst_78601 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_78600,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_78602 = ((inst_78598) && (inst_78601));
var state_78626__$1 = (function (){var statearr_78633 = state_78626;
(statearr_78633[(7)] = inst_78597__$1);

return statearr_78633;
})();
if(cljs.core.truth_(inst_78602)){
var statearr_78634_79220 = state_78626__$1;
(statearr_78634_79220[(1)] = (7));

} else {
var statearr_78635_79221 = state_78626__$1;
(statearr_78635_79221[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (3))){
var inst_78610 = (state_78626[(2)]);
var state_78626__$1 = state_78626;
var G__78636_79222 = inst_78610;
switch (G__78636_79222) {
case "LpBar":
var statearr_78637_79224 = state_78626__$1;
(statearr_78637_79224[(1)] = (11));


break;
case "sv Uniswap V2":
var statearr_78638_79225 = state_78626__$1;
(statearr_78638_79225[(1)] = (13));


break;
default:
var statearr_78639_79226 = state_78626__$1;
(statearr_78639_79226[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (12))){
var inst_78613 = (state_78626[(2)]);
var state_78626__$1 = state_78626;
var statearr_78640_79227 = state_78626__$1;
(statearr_78640_79227[(2)] = inst_78613);

(statearr_78640_79227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (2))){
var inst_78586 = (state_78626[(10)]);
var _ = (function (){var statearr_78641 = state_78626;
(statearr_78641[(4)] = cljs.core.cons((5),(state_78626[(4)])));

return statearr_78641;
})();
var inst_78594 = inst_78586.name();
var inst_78595 = cljs.core.async.interop.p__GT_c(inst_78594);
var state_78626__$1 = state_78626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78626__$1,(6),inst_78595);
} else {
if((state_val_78627 === (11))){
var inst_78584 = (state_78626[(9)]);
var inst_78585 = (state_78626[(8)]);
var inst_78611 = lpdashboard.core._LT_staked_lp_positions_lpbar(inst_78584,inst_78585,user_address);
var state_78626__$1 = state_78626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78626__$1,(12),inst_78611);
} else {
if((state_val_78627 === (9))){
var inst_78607 = (state_78626[(2)]);
var _ = (function (){var statearr_78643 = state_78626;
(statearr_78643[(4)] = cljs.core.rest((state_78626[(4)])));

return statearr_78643;
})();
var state_78626__$1 = state_78626;
var statearr_78644_79228 = state_78626__$1;
(statearr_78644_79228[(2)] = inst_78607);

(statearr_78644_79228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (5))){
var _ = (function (){var statearr_78645 = state_78626;
(statearr_78645[(4)] = cljs.core.rest((state_78626[(4)])));

return statearr_78645;
})();
var state_78626__$1 = state_78626;
var ex78642 = (state_78626__$1[(2)]);
var statearr_78646_79229 = state_78626__$1;
(statearr_78646_79229[(5)] = ex78642);


if((ex78642 instanceof Error)){
var statearr_78647_79230 = state_78626__$1;
(statearr_78647_79230[(1)] = (4));

(statearr_78647_79230[(5)] = null);

} else {
throw ex78642;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (14))){
var inst_78617 = (state_78626[(2)]);
var state_78626__$1 = state_78626;
var statearr_78648_79231 = state_78626__$1;
(statearr_78648_79231[(2)] = inst_78617);

(statearr_78648_79231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (16))){
var inst_78621 = (state_78626[(2)]);
var state_78626__$1 = state_78626;
var statearr_78649_79232 = state_78626__$1;
(statearr_78649_79232[(2)] = inst_78621);

(statearr_78649_79232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78627 === (10))){
var inst_78624 = (state_78626[(2)]);
var state_78626__$1 = state_78626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78626__$1,inst_78624);
} else {
if((state_val_78627 === (8))){
var inst_78597 = (state_78626[(7)]);
var state_78626__$1 = state_78626;
var statearr_78650_79233 = state_78626__$1;
(statearr_78650_79233[(2)] = inst_78597);

(statearr_78650_79233[(1)] = (9));


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
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_78651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78651[(0)] = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__);

(statearr_78651[(1)] = (1));

return statearr_78651;
});
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1 = (function (state_78626){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78626);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78652){var ex__36688__auto__ = e78652;
var statearr_78653_79234 = state_78626;
(statearr_78653_79234[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78626[(4)]))){
var statearr_78654_79235 = state_78626;
(statearr_78654_79235[(1)] = cljs.core.first((state_78626[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79236 = state_78626;
state_78626 = G__79236;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__ = function(state_78626){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1.call(this,state_78626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78655 = f__36777__auto__();
(statearr_78655[(6)] = c__36776__auto__);

return statearr_78655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_graph_uniswap_positions = (function lpdashboard$core$_LT_graph_uniswap_positions(user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78669){
var state_val_78670 = (state_78669[(1)]);
if((state_val_78670 === (1))){
var inst_78656 = lpdashboard.thegraph._LT_user_lp_snapshots(user_address);
var state_78669__$1 = state_78669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78669__$1,(2),inst_78656);
} else {
if((state_val_78670 === (2))){
var inst_78658 = (state_78669[(7)]);
var inst_78658__$1 = (state_78669[(2)]);
var inst_78659 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_78660 = (lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1(inst_78658__$1) : lpdashboard.core.most_recent_snapshots.call(null,inst_78658__$1));
var inst_78661 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78659,inst_78660);
var inst_78662 = lpdashboard.thegraph._LT_user_lps(user_address,inst_78661);
var state_78669__$1 = (function (){var statearr_78671 = state_78669;
(statearr_78671[(7)] = inst_78658__$1);

return statearr_78671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78669__$1,(3),inst_78662);
} else {
if((state_val_78670 === (3))){
var inst_78658 = (state_78669[(7)]);
var inst_78664 = (state_78669[(2)]);
var inst_78665 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.Keyword(null,"positions","positions",-1380538434)];
var inst_78666 = [user_address,inst_78658,inst_78664];
var inst_78667 = cljs.core.PersistentHashMap.fromArrays(inst_78665,inst_78666);
var state_78669__$1 = state_78669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78669__$1,inst_78667);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_78672 = [null,null,null,null,null,null,null,null];
(statearr_78672[(0)] = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__);

(statearr_78672[(1)] = (1));

return statearr_78672;
});
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1 = (function (state_78669){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78669);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78673){var ex__36688__auto__ = e78673;
var statearr_78674_79237 = state_78669;
(statearr_78674_79237[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78669[(4)]))){
var statearr_78675_79238 = state_78669;
(statearr_78675_79238[(1)] = cljs.core.first((state_78669[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79239 = state_78669;
state_78669 = G__79239;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = function(state_78669){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1.call(this,state_78669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78676 = f__36777__auto__();
(statearr_78676[(6)] = c__36776__auto__);

return statearr_78676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.lp_proportion = (function lpdashboard$core$lp_proportion(s){
return bignumber.core._SLASH_(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(s));
});
lpdashboard.core.abridged_snapshot = (function lpdashboard$core$abridged_snapshot(s){
var datetime = (new Date(((1000) * new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(s))));
var token0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var token1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var prop = lpdashboard.core.lp_proportion(s);
var token0_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(s));
var token1_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(s));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datetime","datetime",494675702),datetime,new cljs.core.Keyword(null,"balances","balances",-1047003019),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token0),token0_balance,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token1),token1_balance])], null);
});
lpdashboard.core.snapshot_balances = (function lpdashboard$core$snapshot_balances(s){
var datetime = (new Date(((1000) * new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(s))));
var token0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var token1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var prop = lpdashboard.core.lp_proportion(s);
var token0_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(s));
var token1_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(s));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),token0,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),token1,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),token0_balance,new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),token1_balance], null);
});
lpdashboard.core.last_lp_snapshots = (function lpdashboard$core$last_lp_snapshots(snapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),snapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__78677_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__78677_SHARP_);
})),cljs.core.vals(pair_snapshots));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312))(s),new cljs.core.Keyword(null,"pos","pos",-864607220),lpdashboard.core.snapshot_balances(s)], null);
}),last_snapshots);
});
/**
 * Returns most recent snapshot for each LP pair where
 * `gsnapshots` is a coll of LPSnapshots as returned
 *  by `thegraph/<user-lp-snapshots`
 */
lpdashboard.core.most_recent_snapshots = (function lpdashboard$core$most_recent_snapshots(gsnapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),gsnapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__78678_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__78678_SHARP_);
})),cljs.core.vals(pair_snapshots));
return last_snapshots;
});
lpdashboard.core.gposition__GT_pool = (function lpdashboard$core$gposition__GT_pool(gposition){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var pair_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),pair_address,new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address0,address1], null)], null);
});
lpdashboard.core.gposition__GT_token_info = (function lpdashboard$core$gposition__GT_token_info(gposition,token_prices){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
var symbol0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token0);
var symbol1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token1);
var name0 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token0);
var name1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token1);
var decimals0 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token0);
var decimals1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token1);
var token0_price = (function (){var fexpr__78679 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address0);
return (fexpr__78679.cljs$core$IFn$_invoke$arity$1 ? fexpr__78679.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__78679.call(null,token_prices));
})();
var token1_price = (function (){var fexpr__78680 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address1);
return (fexpr__78680.cljs$core$IFn$_invoke$arity$1 ? fexpr__78680.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__78680.call(null,token_prices));
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address0,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol0,new cljs.core.Keyword(null,"address","address",559499426),address0,new cljs.core.Keyword(null,"name","name",1843675177),name0,new cljs.core.Keyword(null,"decimals","decimals",1715096484),decimals0,new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137).cljs$core$IFn$_invoke$arity$1(token0_price),"usd",new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(token0_price),"eth",new cljs.core.Keyword(null,"eth","eth",1381694970).cljs$core$IFn$_invoke$arity$1(token0_price)], null)], null)], null),address1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol1,new cljs.core.Keyword(null,"address","address",559499426),address1,new cljs.core.Keyword(null,"name","name",1843675177),name1,new cljs.core.Keyword(null,"decimals","decimals",1715096484),decimals1,new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137).cljs$core$IFn$_invoke$arity$1(token1_price),"usd",new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(token1_price),"eth",new cljs.core.Keyword(null,"eth","eth",1381694970).cljs$core$IFn$_invoke$arity$1(token1_price)], null)], null)], null)]);
});
lpdashboard.core.gposition__GT_lpsnapshot = (function lpdashboard$core$gposition__GT_lpsnapshot(gposition,staked_positions){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
var reserve0 = new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair);
var reserve1 = new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair);
var total_shares = new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair);
var user_shares = new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(gposition);
var relevant_stakes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78681_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__78681_SHARP_));
}),staked_positions);
var lp_stakes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),(cljs.core.truth_(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s))], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s))], null)], null):cljs.core.PersistentVector.EMPTY)], null);
}),relevant_stakes);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),lpdashboard.utils.make_unix_ts(),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),total_shares,new cljs.core.Keyword(null,"reserves","reserves",-1935017122),cljs.core.PersistentArrayMap.createAsIfByAssoc([address0,reserve0,address1,reserve1])], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),user_shares,new cljs.core.Keyword(null,"staked","staked",-1857531165),lp_stakes], null);
});
lpdashboard.core.make_lp = (function lpdashboard$core$make_lp(gposition,staked_positions,mints,burns){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var lp_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),lp_address,new cljs.core.Keyword(null,"excahnge","excahnge",2142352275),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address0,address1], null)], null),new cljs.core.Keyword(null,"unkown-destinations","unkown-destinations",386546499),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mints","mints",-278208376),mints,new cljs.core.Keyword(null,"burns","burns",1858509067),burns,new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.gposition__GT_lpsnapshot(gposition,staked_positions)], null)], null)]);
});
/**
 * Makes an initial user state from a map of
 *   the most recent avail `graph-snapshots`
 *   as returned by `<graph-uniswap-positions``
 */
lpdashboard.core.make_state = (function lpdashboard$core$make_state(graph_positions,staked_positions,token_info,mints,burns){
var user_address = new cljs.core.Keyword(null,"user-address","user-address",-2070986675).cljs$core$IFn$_invoke$arity$1(graph_positions);
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(graph_positions);
var snapshot_lps = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78682_SHARP_){
return lpdashboard.core.make_lp(p1__78682_SHARP_,staked_positions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__78682_SHARP_))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__78682_SHARP_))));
}),positions));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),user_address,new cljs.core.Keyword(null,"token-info","token-info",-589167623),token_info,new cljs.core.Keyword(null,"lps","lps",2143562451),snapshot_lps], null);
});
lpdashboard.core.get_current_earned = (function lpdashboard$core$get_current_earned(lp_snapshot){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qty = new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot))))));
var qty_SINGLEQUOTE_ = (cljs.core.truth_(qty)?qty:(new module$node_modules$bignumber_DOT_js$bignumber("0")));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),qty_SINGLEQUOTE_,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
});
lpdashboard.core.token_claimed_from_contract = (function lpdashboard$core$token_claimed_from_contract(rewards_map){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(rewards_map);
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(rewards_map));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.all_claims_for_contract = (function lpdashboard$core$all_claims_for_contract(rewards_maps){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_claimed_from_contract,rewards_maps);
});
lpdashboard.core.all_snapshot_claimed = (function lpdashboard$core$all_snapshot_claimed(snapshot){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.all_claims_for_contract,new cljs.core.Keyword(null,"rewards","rewards",-1173924062)),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot)));
});
lpdashboard.core.get_current_claimed = (function lpdashboard$core$get_current_claimed(lp_snapshot){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot))))));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.lp_position_map_example = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentArrayMap(null, 2, ["MTA",3998.584402,"WETH",12.744], null),new cljs.core.Keyword(null,"reward","reward",-887240948),new cljs.core.PersistentArrayMap(null, 1, ["MTA",824.8436457935455], null),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, ["MTA",2500.5402,"WETH",20.744], null),new cljs.core.Keyword(null,"fees","fees",-2100264520),new cljs.core.PersistentArrayMap(null, 1, ["ETH",0.0021], null)], null);
lpdashboard.core.token_symbol = (function lpdashboard$core$token_symbol(token_address,token_info){
if((token_address == null)){
return token_address;
} else {
var symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,clojure.string.lower_case(token_address)));
var or__4126__auto__ = symbol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return token_address;
}
}
});
lpdashboard.core.minted_lp = (function lpdashboard$core$minted_lp(lp_position){
return null;
});
lpdashboard.core.burned_lp = (function lpdashboard$core$burned_lp(lp_position){
return null;
});
lpdashboard.core.tokens_deposited = (function lpdashboard$core$tokens_deposited(lp_position){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token1 = cljs.core.first(tokens);
var token2 = cljs.core.second(tokens);
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deposits","deposits",-1544951296),mints);
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78686_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78686_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78687_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78687_SHARP_,token2);
}),deposits);
var token1_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token1_deposits));
var token2_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token2_deposits));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token1,token1_total,token2,token2_total]);
});
lpdashboard.core.tokens_withdrawn = (function lpdashboard$core$tokens_withdrawn(lp_position){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token1 = cljs.core.first(tokens);
var token2 = cljs.core.second(tokens);
var mints = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),mints);
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78688_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78688_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78689_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78689_SHARP_,token2);
}),deposits);
var token1_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token1_deposits));
var token2_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token2_deposits));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token1,token1_total,token2,token2_total]);
});
lpdashboard.core.eth_fees = (function lpdashboard$core$eth_fees(parsed_tx){
var gas_price = new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var gas_used = new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var eth_paid = bignumber.core._STAR_(gas_used,gas_price);
return eth_paid;
});
lpdashboard.core.fees_paid = (function lpdashboard$core$fees_paid(lp_position){
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var minting_fees = ((cljs.core.empty_QMARK_(mints))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.eth_fees,mints)));
var burns = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var burning_fees = ((cljs.core.empty_QMARK_(burns))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.eth_fees,burns)));
return bignumber.core._PLUS_(burning_fees,minting_fees);
});
lpdashboard.core.pretty_price = (function lpdashboard$core$pretty_price(p__78690){
var vec__78691 = p__78690;
var token_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78691,(0),null);
var token_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78691,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token_data),new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(token_data)]);
});
lpdashboard.core.lp_prices = (function lpdashboard$core$lp_prices(lp_position,token_info){
var latest_snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position));
var pool_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var earned = lpdashboard.core.all_snapshot_claimed(latest_snapshot);
var rewards_tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),earned);
var all_tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pool_tokens,rewards_tokens));
return cljs.core.select_keys(token_info,all_tokens);
});
lpdashboard.core.symbol__GT_price = (function lpdashboard$core$symbol__GT_price(symbol,token_prices,vs_price){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78694_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__78694_SHARP_));
}),cljs.core.vals(token_prices))))),clojure.string.lower_case(vs_price));
});
lpdashboard.core.rewards_in_currency = (function lpdashboard$core$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78695_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__78695_SHARP_),lpdashboard.core.symbol__GT_price(p1__78695_SHARP_,token_prices,currency));
}),rewarded_currencies)));
if(cljs.core.truth_(res.isNaN())){
return (new module$node_modules$bignumber_DOT_js$bignumber("0"));
} else {
return res;
}
});
lpdashboard.core.tokens_at_prices = (function lpdashboard$core$tokens_at_prices(tokens,token_prices){
var reward_tokens = cljs.core.keys(tokens);
var tokens_usd = lpdashboard.core.rewards_in_currency(tokens,"usd",token_prices);
var tokens_eth = lpdashboard.core.rewards_in_currency(tokens,"eth",token_prices);
return new cljs.core.PersistentArrayMap(null, 2, ["USD",tokens_usd,"ETH",tokens_eth], null);
});
lpdashboard.core.gas_at_prices = (function lpdashboard$core$gas_at_prices(fees_paid,token_prices){
return new cljs.core.PersistentArrayMap(null, 2, ["ETH",fees_paid,"USD",bignumber.core._STAR_(fees_paid,lpdashboard.core.symbol__GT_price("WETH",token_prices,"usd"))], null);
});
lpdashboard.core.lp_pnl = (function lpdashboard$core$lp_pnl(diffs,total_fees,rewards,token_prices){
var pool_pnl = lpdashboard.core.tokens_at_prices(diffs,token_prices);
var rewards__$1 = lpdashboard.core.tokens_at_prices(rewards,token_prices);
var gas_costs = lpdashboard.core.gas_at_prices(total_fees,token_prices);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),pool_pnl,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards__$1,new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904),gas_costs,new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pool_pnl,rewards__$1], 0)),gas_costs], 0))], null);
});
lpdashboard.core.lp_position_map = (function lpdashboard$core$lp_position_map(lp_position,token_info){
var pool_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78696_SHARP_){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,p1__78696_SHARP_));
}),pool_tokens);
var latest_snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position));
var pool_lps = cljs.core.identity(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(latest_snapshot)));
var wallet_lps = cljs.core.identity(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(latest_snapshot));
var staked_lps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872)),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(latest_snapshot))));
var user_lps = bignumber.core._PLUS_(wallet_lps,staked_lps);
var lp_portion = bignumber.core._SLASH_(user_lps,pool_lps);
var token_reserves = new cljs.core.Keyword(null,"reserves","reserves",-1935017122).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(latest_snapshot));
var reserve_shares = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.isNaN())){
return (new module$node_modules$bignumber_DOT_js$bignumber("0.00"));
} else {
return x;
}
}),(function (p1__78697_SHARP_){
return bignumber.core._STAR_(lp_portion,p1__78697_SHARP_);
})),cljs.core.vals(token_reserves));
var current = cljs.core.zipmap(token_symbols,reserve_shares);
var earned = lpdashboard.core.get_current_earned(latest_snapshot);
var earned_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__78698_SHARP_){
return lpdashboard.core.token_symbol(p1__78698_SHARP_,token_info);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),earned),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),earned));
var claimed = cljs.core.identity(lpdashboard.core.all_snapshot_claimed(latest_snapshot));
var claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78699_SHARP_){
return lpdashboard.core.token_symbol(p1__78699_SHARP_,token_info);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),claimed)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
var rewards = bignumber.core._PLUS_(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(earned),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.first(claimed)));
var rewards_token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(earned);
var rtoken_symbol = lpdashboard.core.token_symbol(rewards_token,token_info);
var rewards_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(rtoken_symbol))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([rtoken_symbol,rewards]));
var rewards_SINGLEQUOTE___$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([claimed_SINGLEQUOTE_,earned_SINGLEQUOTE_], 0));
var minted_lp = lpdashboard.core.minted_lp(lp_position);
var total_invested = lpdashboard.core.tokens_deposited(lp_position);
var total_invested_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78700_SHARP_){
return lpdashboard.core.token_symbol(p1__78700_SHARP_,token_info);
}),cljs.core.keys(total_invested)),cljs.core.vals(total_invested));
var burned_lp = lpdashboard.core.burned_lp(lp_position);
var total_withdrawals = lpdashboard.core.tokens_withdrawn(lp_position);
var total_withdrawals_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78701_SHARP_){
return lpdashboard.core.token_symbol(p1__78701_SHARP_,token_info);
}),cljs.core.keys(total_withdrawals)),cljs.core.vals(total_withdrawals));
var token_symbols__$1 = cljs.core.keys(total_invested_SINGLEQUOTE_);
var total_initial = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78702_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_invested_SINGLEQUOTE_,p1__78702_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78703_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_withdrawals_SINGLEQUOTE_,p1__78703_SHARP_);
}),token_symbols__$1)));
var token_diffs = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78704_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,p1__78704_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78705_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_initial,p1__78705_SHARP_);
}),token_symbols__$1)));
var total_fees = lpdashboard.core.fees_paid(lp_position);
var relevant_prices = lpdashboard.core.lp_prices(lp_position,token_info);
var pnl = lpdashboard.core.lp_pnl(token_diffs,total_fees,rewards_SINGLEQUOTE___$1,token_info);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.Keyword(null,"pnl","pnl",-430398483),new cljs.core.Keyword(null,"invested","invested",19182926),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"fees","fees",-2100264520),new cljs.core.Keyword(null,"symbols","symbols",1211743)],[new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position)),rewards_SINGLEQUOTE___$1,pnl,total_invested_SINGLEQUOTE_,token_diffs,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.pretty_price,relevant_prices)),total_withdrawals_SINGLEQUOTE_,current,total_initial,new cljs.core.PersistentArrayMap(null, 1, ["ETH",total_fees], null),token_symbols__$1]);
});
lpdashboard.core.make_burn_map = (function lpdashboard$core$make_burn_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = cljs.core.first(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = cljs.core.second(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = lpdashboard.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = lpdashboard.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.decode_transfer_data,re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78706_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__78706_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__78706_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78707_SHARP_){
return lpdashboard.ethereum.decode_burn_data(p1__78707_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78708_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__78708_SHARP_)));
}),burn_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_burns));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_burns));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
lpdashboard.core.make_mint_map = (function lpdashboard$core$make_mint_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = cljs.core.first(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = cljs.core.second(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = lpdashboard.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = lpdashboard.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78709_SHARP_){
return lpdashboard.ethereum.decode_transfer_data(p1__78709_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78710_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__78710_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__78710_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78711_SHARP_){
return lpdashboard.ethereum.decode_mint_data(p1__78711_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78712_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__78712_SHARP_)));
}),mint_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_mints));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_mints));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
lpdashboard.core._LT_get_lp_mints = (function lpdashboard$core$_LT_get_lp_mints(lp_pool,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78739){
var state_val_78740 = (state_78739[(1)]);
if((state_val_78740 === (1))){
var inst_78717 = (state_78739[(7)]);
var inst_78715 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_78716 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_78717__$1 = cljs.core.first(inst_78716);
var inst_78718 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_78719 = cljs.core.second(inst_78718);
var inst_78720 = lpdashboard.ethereum._LT_token_decimals(inst_78717__$1);
var state_78739__$1 = (function (){var statearr_78741 = state_78739;
(statearr_78741[(8)] = inst_78715);

(statearr_78741[(7)] = inst_78717__$1);

(statearr_78741[(9)] = inst_78719);

return statearr_78741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78739__$1,(2),inst_78720);
} else {
if((state_val_78740 === (2))){
var inst_78719 = (state_78739[(9)]);
var inst_78722 = (state_78739[(2)]);
var inst_78723 = lpdashboard.ethereum._LT_token_decimals(inst_78719);
var state_78739__$1 = (function (){var statearr_78742 = state_78739;
(statearr_78742[(10)] = inst_78722);

return statearr_78742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78739__$1,(3),inst_78723);
} else {
if((state_val_78740 === (3))){
var inst_78715 = (state_78739[(8)]);
var inst_78725 = (state_78739[(2)]);
var inst_78726 = lpdashboard.ethereum._LT_user_lp_mint_transfers(lpdashboard.core.provider,inst_78715,user_address);
var state_78739__$1 = (function (){var statearr_78743 = state_78739;
(statearr_78743[(11)] = inst_78725);

return statearr_78743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78739__$1,(4),inst_78726);
} else {
if((state_val_78740 === (4))){
var inst_78715 = (state_78739[(8)]);
var inst_78731 = (state_78739[(12)]);
var inst_78722 = (state_78739[(10)]);
var inst_78717 = (state_78739[(7)]);
var inst_78725 = (state_78739[(11)]);
var inst_78728 = (state_78739[(13)]);
var inst_78719 = (state_78739[(9)]);
var inst_78728__$1 = (state_78739[(2)]);
var inst_78729 = (function (){var pair_address = inst_78715;
var token1_address = inst_78717;
var token2_address = inst_78719;
var token1_decimals = inst_78722;
var token2_decimals = inst_78725;
var mint_transfers = inst_78728__$1;
return (function (p1__78713_SHARP_){
return p1__78713_SHARP_.transactionHash;
});
})();
var inst_78730 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78729,inst_78728__$1);
var inst_78731__$1 = cljs.core.set(inst_78730);
var inst_78732 = lpdashboard.ethereum._LT_get_trxs(inst_78731__$1);
var state_78739__$1 = (function (){var statearr_78744 = state_78739;
(statearr_78744[(12)] = inst_78731__$1);

(statearr_78744[(13)] = inst_78728__$1);

return statearr_78744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78739__$1,(5),inst_78732);
} else {
if((state_val_78740 === (5))){
var inst_78715 = (state_78739[(8)]);
var inst_78731 = (state_78739[(12)]);
var inst_78722 = (state_78739[(10)]);
var inst_78717 = (state_78739[(7)]);
var inst_78725 = (state_78739[(11)]);
var inst_78728 = (state_78739[(13)]);
var inst_78719 = (state_78739[(9)]);
var inst_78734 = (state_78739[(2)]);
var inst_78735 = (function (){var pair_address = inst_78715;
var token1_address = inst_78717;
var token2_address = inst_78719;
var token1_decimals = inst_78722;
var token2_decimals = inst_78725;
var mint_transfers = inst_78728;
var mint_hashes = inst_78731;
var mint_txrs = inst_78734;
return (function (p1__78714_SHARP_){
return lpdashboard.core.make_mint_map(lp_pool,user_address,p1__78714_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_78736 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78735,inst_78734);
var inst_78737 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_78736);
var state_78739__$1 = state_78739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78739__$1,inst_78737);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0 = (function (){
var statearr_78745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78745[(0)] = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__);

(statearr_78745[(1)] = (1));

return statearr_78745;
});
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1 = (function (state_78739){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78739);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78746){var ex__36688__auto__ = e78746;
var statearr_78747_79240 = state_78739;
(statearr_78747_79240[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78739[(4)]))){
var statearr_78748_79241 = state_78739;
(statearr_78748_79241[(1)] = cljs.core.first((state_78739[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79242 = state_78739;
state_78739 = G__79242;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__ = function(state_78739){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1.call(this,state_78739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78749 = f__36777__auto__();
(statearr_78749[(6)] = c__36776__auto__);

return statearr_78749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_lp_burns = (function lpdashboard$core$_LT_get_lp_burns(lp_pool,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78776){
var state_val_78777 = (state_78776[(1)]);
if((state_val_78777 === (1))){
var inst_78754 = (state_78776[(7)]);
var inst_78752 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_78753 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_78754__$1 = cljs.core.first(inst_78753);
var inst_78755 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_78756 = cljs.core.second(inst_78755);
var inst_78757 = lpdashboard.ethereum._LT_token_decimals(inst_78754__$1);
var state_78776__$1 = (function (){var statearr_78778 = state_78776;
(statearr_78778[(7)] = inst_78754__$1);

(statearr_78778[(8)] = inst_78756);

(statearr_78778[(9)] = inst_78752);

return statearr_78778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78776__$1,(2),inst_78757);
} else {
if((state_val_78777 === (2))){
var inst_78756 = (state_78776[(8)]);
var inst_78759 = (state_78776[(2)]);
var inst_78760 = lpdashboard.ethereum._LT_token_decimals(inst_78756);
var state_78776__$1 = (function (){var statearr_78779 = state_78776;
(statearr_78779[(10)] = inst_78759);

return statearr_78779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78776__$1,(3),inst_78760);
} else {
if((state_val_78777 === (3))){
var inst_78752 = (state_78776[(9)]);
var inst_78762 = (state_78776[(2)]);
var inst_78763 = lpdashboard.ethereum._LT_user_lp_burn_transfers(lpdashboard.core.provider,inst_78752,user_address);
var state_78776__$1 = (function (){var statearr_78780 = state_78776;
(statearr_78780[(11)] = inst_78762);

return statearr_78780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78776__$1,(4),inst_78763);
} else {
if((state_val_78777 === (4))){
var inst_78754 = (state_78776[(7)]);
var inst_78756 = (state_78776[(8)]);
var inst_78762 = (state_78776[(11)]);
var inst_78768 = (state_78776[(12)]);
var inst_78765 = (state_78776[(13)]);
var inst_78759 = (state_78776[(10)]);
var inst_78752 = (state_78776[(9)]);
var inst_78765__$1 = (state_78776[(2)]);
var inst_78766 = (function (){var pair_address = inst_78752;
var token1_address = inst_78754;
var token2_address = inst_78756;
var token1_decimals = inst_78759;
var token2_decimals = inst_78762;
var burn_transfers = inst_78765__$1;
return (function (p1__78750_SHARP_){
return p1__78750_SHARP_.transactionHash;
});
})();
var inst_78767 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78766,inst_78765__$1);
var inst_78768__$1 = cljs.core.set(inst_78767);
var inst_78769 = lpdashboard.ethereum._LT_get_trxs(inst_78768__$1);
var state_78776__$1 = (function (){var statearr_78781 = state_78776;
(statearr_78781[(12)] = inst_78768__$1);

(statearr_78781[(13)] = inst_78765__$1);

return statearr_78781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78776__$1,(5),inst_78769);
} else {
if((state_val_78777 === (5))){
var inst_78754 = (state_78776[(7)]);
var inst_78756 = (state_78776[(8)]);
var inst_78762 = (state_78776[(11)]);
var inst_78768 = (state_78776[(12)]);
var inst_78765 = (state_78776[(13)]);
var inst_78759 = (state_78776[(10)]);
var inst_78752 = (state_78776[(9)]);
var inst_78771 = (state_78776[(2)]);
var inst_78772 = (function (){var pair_address = inst_78752;
var token1_address = inst_78754;
var token2_address = inst_78756;
var token1_decimals = inst_78759;
var token2_decimals = inst_78762;
var burn_transfers = inst_78765;
var burn_hashes = inst_78768;
var burn_txrs = inst_78771;
return (function (p1__78751_SHARP_){
return lpdashboard.core.make_burn_map(lp_pool,user_address,p1__78751_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_78773 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78772,inst_78771);
var inst_78774 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_78773);
var state_78776__$1 = state_78776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78776__$1,inst_78774);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0 = (function (){
var statearr_78782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78782[(0)] = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__);

(statearr_78782[(1)] = (1));

return statearr_78782;
});
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1 = (function (state_78776){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78776);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78783){var ex__36688__auto__ = e78783;
var statearr_78784_79243 = state_78776;
(statearr_78784_79243[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78776[(4)]))){
var statearr_78785_79244 = state_78776;
(statearr_78785_79244[(1)] = cljs.core.first((state_78776[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79245 = state_78776;
state_78776 = G__79245;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__ = function(state_78776){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1.call(this,state_78776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78786 = f__36777__auto__();
(statearr_78786[(6)] = c__36776__auto__);

return statearr_78786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_user_mints = (function lpdashboard$core$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78795){
var state_val_78796 = (state_78795[(1)]);
if((state_val_78796 === (1))){
var inst_78787 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_78788 = [inst_78787];
var inst_78789 = lpdashboard.core._LT_get_lp_mints(p,user_address);
var state_78795__$1 = (function (){var statearr_78797 = state_78795;
(statearr_78797[(7)] = inst_78788);

return statearr_78797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78795__$1,(2),inst_78789);
} else {
if((state_val_78796 === (2))){
var inst_78788 = (state_78795[(7)]);
var inst_78791 = (state_78795[(2)]);
var inst_78792 = [inst_78791];
var inst_78793 = cljs.core.PersistentHashMap.fromArrays(inst_78788,inst_78792);
var state_78795__$1 = state_78795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78795__$1,inst_78793);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0 = (function (){
var statearr_78798 = [null,null,null,null,null,null,null,null];
(statearr_78798[(0)] = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__);

(statearr_78798[(1)] = (1));

return statearr_78798;
});
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1 = (function (state_78795){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78795);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78799){var ex__36688__auto__ = e78799;
var statearr_78800_79246 = state_78795;
(statearr_78800_79246[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78795[(4)]))){
var statearr_78801_79247 = state_78795;
(statearr_78801_79247[(1)] = cljs.core.first((state_78795[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79248 = state_78795;
state_78795 = G__79248;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = function(state_78795){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1.call(this,state_78795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78802 = f__36777__auto__();
(statearr_78802[(6)] = c__36776__auto__);

return statearr_78802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_get_user_burns = (function lpdashboard$core$_LT_get_user_burns(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78811){
var state_val_78812 = (state_78811[(1)]);
if((state_val_78812 === (1))){
var inst_78803 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_78804 = [inst_78803];
var inst_78805 = lpdashboard.core._LT_get_lp_burns(p,user_address);
var state_78811__$1 = (function (){var statearr_78813 = state_78811;
(statearr_78813[(7)] = inst_78804);

return statearr_78813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78811__$1,(2),inst_78805);
} else {
if((state_val_78812 === (2))){
var inst_78804 = (state_78811[(7)]);
var inst_78807 = (state_78811[(2)]);
var inst_78808 = [inst_78807];
var inst_78809 = cljs.core.PersistentHashMap.fromArrays(inst_78804,inst_78808);
var state_78811__$1 = state_78811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78811__$1,inst_78809);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0 = (function (){
var statearr_78814 = [null,null,null,null,null,null,null,null];
(statearr_78814[(0)] = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__);

(statearr_78814[(1)] = (1));

return statearr_78814;
});
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1 = (function (state_78811){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78811);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78815){var ex__36688__auto__ = e78815;
var statearr_78816_79249 = state_78811;
(statearr_78816_79249[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78811[(4)]))){
var statearr_78817_79250 = state_78811;
(statearr_78817_79250[(1)] = cljs.core.first((state_78811[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79251 = state_78811;
state_78811 = G__79251;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = function(state_78811){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1.call(this,state_78811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78818 = f__36777__auto__();
(statearr_78818[(6)] = c__36776__auto__);

return statearr_78818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_user_lp_destinations = (function lpdashboard$core$_LT_user_lp_destinations(snapshots,user_address){
var token_addresses = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),lpdashboard.core.last_lp_snapshots(snapshots));
var destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78824){
var state_val_78825 = (state_78824[(1)]);
if((state_val_78825 === (1))){
var inst_78820 = lpdashboard.ethereum._LT_user_token_destinations(lpdashboard.core.provider,x,user_address);
var state_78824__$1 = state_78824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78824__$1,(2),inst_78820);
} else {
if((state_val_78825 === (2))){
var inst_78822 = (state_78824[(2)]);
var state_78824__$1 = state_78824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78824__$1,inst_78822);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_78826 = [null,null,null,null,null,null,null];
(statearr_78826[(0)] = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__);

(statearr_78826[(1)] = (1));

return statearr_78826;
});
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1 = (function (state_78824){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78824);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78827){var ex__36688__auto__ = e78827;
var statearr_78828_79252 = state_78824;
(statearr_78828_79252[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78824[(4)]))){
var statearr_78829_79253 = state_78824;
(statearr_78829_79253[(1)] = cljs.core.first((state_78824[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79254 = state_78824;
state_78824 = G__79254;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = function(state_78824){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1.call(this,state_78824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78830 = f__36777__auto__();
(statearr_78830[(6)] = c__36776__auto__);

return statearr_78830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__78819_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__78819_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
lpdashboard.core._LT_user_lp_positions = (function lpdashboard$core$_LT_user_lp_positions(destinations,user_address){
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78841){
var state_val_78842 = (state_78841[(1)]);
if((state_val_78842 === (1))){
var inst_78832 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_78833 = lpdashboard.core._LT_staked_lp_positions(x,user_address);
var state_78841__$1 = (function (){var statearr_78843 = state_78841;
(statearr_78843[(7)] = inst_78832);

return statearr_78843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78841__$1,(2),inst_78833);
} else {
if((state_val_78842 === (2))){
var inst_78832 = (state_78841[(7)]);
var inst_78835 = (state_78841[(2)]);
var inst_78836 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_78837 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_78838 = [inst_78835,inst_78836,inst_78837];
var inst_78839 = cljs.core.PersistentHashMap.fromArrays(inst_78832,inst_78838);
var state_78841__$1 = state_78841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78841__$1,inst_78839);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_78844 = [null,null,null,null,null,null,null,null];
(statearr_78844[(0)] = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__);

(statearr_78844[(1)] = (1));

return statearr_78844;
});
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1 = (function (state_78841){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78841);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78845){var ex__36688__auto__ = e78845;
var statearr_78846_79255 = state_78841;
(statearr_78846_79255[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78841[(4)]))){
var statearr_78847_79256 = state_78841;
(statearr_78847_79256[(1)] = cljs.core.first((state_78841[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79257 = state_78841;
state_78841 = G__79257;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = function(state_78841){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1.call(this,state_78841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78848 = f__36777__auto__();
(statearr_78848[(6)] = c__36776__auto__);

return statearr_78848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__78831_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__78831_SHARP_)));
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions)));
});
lpdashboard.core._LT_user_get_staked = (function lpdashboard$core$_LT_user_get_staked(user_address,user_snapshots){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78861){
var state_val_78862 = (state_78861[(1)]);
if((state_val_78862 === (1))){
var inst_78850 = lpdashboard.core.last_lp_snapshots(user_snapshots);
var inst_78851 = lpdashboard.core._LT_user_lp_destinations(user_snapshots,user_address);
var state_78861__$1 = (function (){var statearr_78863 = state_78861;
(statearr_78863[(7)] = inst_78850);

return statearr_78863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78861__$1,(2),inst_78851);
} else {
if((state_val_78862 === (2))){
var inst_78853 = (state_78861[(8)]);
var inst_78853__$1 = (state_78861[(2)]);
var inst_78854 = lpdashboard.core._LT_user_lp_positions(inst_78853__$1,user_address);
var state_78861__$1 = (function (){var statearr_78864 = state_78861;
(statearr_78864[(8)] = inst_78853__$1);

return statearr_78864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78861__$1,(3),inst_78854);
} else {
if((state_val_78862 === (3))){
var inst_78853 = (state_78861[(8)]);
var inst_78850 = (state_78861[(7)]);
var inst_78856 = (state_78861[(2)]);
var inst_78857 = (function (){var lsnapshots = inst_78850;
var user_destinations = inst_78853;
var user_positions = inst_78856;
return (function (p1__78849_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__78849_SHARP_)));
});
})();
var inst_78858 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_78856,inst_78850);
var inst_78859 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_78857,inst_78858);
var state_78861__$1 = state_78861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78861__$1,inst_78859);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0 = (function (){
var statearr_78865 = [null,null,null,null,null,null,null,null,null];
(statearr_78865[(0)] = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__);

(statearr_78865[(1)] = (1));

return statearr_78865;
});
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1 = (function (state_78861){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78861);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e78866){var ex__36688__auto__ = e78866;
var statearr_78867_79258 = state_78861;
(statearr_78867_79258[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78861[(4)]))){
var statearr_78868_79259 = state_78861;
(statearr_78868_79259[(1)] = cljs.core.first((state_78861[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79260 = state_78861;
state_78861 = G__79260;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = function(state_78861){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1.call(this,state_78861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_78869 = f__36777__auto__();
(statearr_78869[(6)] = c__36776__auto__);

return statearr_78869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.sum_pairs = (function lpdashboard$core$sum_pairs(pair_positions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78871){
var vec__78872 = p__78871;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78872,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.assoc,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"pos","pos",-864607220)),v)),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"pos","pos",-864607220)),v))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78870_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__78870_SHARP_,new cljs.core.Keyword(null,"dst","dst",844682948));
}),pair_positions)));
});
lpdashboard.core.get_pair = (function lpdashboard$core$get_pair(pair_positions,token0,token1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78875_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token0,new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__78875_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token1,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__78875_SHARP_)))));
}),pair_positions);
});
lpdashboard.core.rsfarmer_address = "0x1231c75850bf52851736891a39790a82bcc2e2c4";
lpdashboard.core.rsfarmer_dst1 = "0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1";
lpdashboard.core.rsfarmer_lp2 = "0x2155128c06c4ee4b751c23d9403c07648afa5f5a";
lpdashboard.core.rsfarmer_lp1 = "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852";
lpdashboard.core.rsfarmer_dst3 = "0xc5D00a4E730fC2e1C77764A74E5F1308A460de7F";
lpdashboard.core.rsfarmer_lp3 = "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc";
lpdashboard.core.pool_in_sashimi = "0x1629b0259e6e5c315b8eea09fd1a4d0a26291f98";
lpdashboard.core.sashimi_cheff = "0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D";
lpdashboard.core.reward_tokens = (function lpdashboard$core$reward_tokens(staked_positions){
return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"pos","pos",-864607220)),staked_positions))));
});
lpdashboard.core.pooled_tokens = (function lpdashboard$core$pooled_tokens(positions){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token0","token0",1683274894)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token1","token1",879943564))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),positions)], 0))));
});
lpdashboard.core.make_token_info = (function lpdashboard$core$make_token_info(token_infos,token_prices){
var z = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),token_infos),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ti){
var token_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_prices,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(ti));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ti,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(token_price)),cljs.core.vals(token_price))], null)], null));
}),token_infos));
return z;
});
lpdashboard.core.snapshot__GT_symbols = (function lpdashboard$core$snapshot__GT_symbols(snapshot){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(snapshot))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(snapshot)))].join('');
});
lpdashboard.core._LT_get_account_state = (function lpdashboard$core$_LT_get_account_state(account_or_name){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_78991){
var state_val_78992 = (state_78991[(1)]);
if((state_val_78992 === (1))){
var inst_78878 = lpdashboard.ethereum._LT_resolve_address(account_or_name);
var state_78991__$1 = state_78991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(2),inst_78878);
} else {
if((state_val_78992 === (2))){
var inst_78880 = (state_78991[(7)]);
var inst_78880__$1 = (state_78991[(2)]);
var inst_78881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78882 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78883 = (new cljs.core.PersistentVector(null,1,(5),inst_78881,inst_78882,null));
var inst_78884 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78883,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Seeking Uniswap \uD83E\uDD84 Pools ..."], 0));
var inst_78885 = lpdashboard.core._LT_graph_uniswap_positions(inst_78880__$1);
var state_78991__$1 = (function (){var statearr_78993 = state_78991;
(statearr_78993[(8)] = inst_78884);

(statearr_78993[(7)] = inst_78880__$1);

return statearr_78993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(3),inst_78885);
} else {
if((state_val_78992 === (3))){
var inst_78887 = (state_78991[(9)]);
var inst_78891 = (state_78991[(10)]);
var inst_78889 = (state_78991[(11)]);
var inst_78896 = (state_78991[(12)]);
var inst_78880 = (state_78991[(7)]);
var inst_78887__$1 = (state_78991[(2)]);
var inst_78888 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_78887__$1);
var inst_78889__$1 = lpdashboard.core.last_lp_snapshots(inst_78888);
var inst_78890 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.snapshot__GT_symbols,inst_78889__$1);
var inst_78891__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_78890);
var inst_78892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78893 = cljs.core.count(inst_78889__$1);
var inst_78894 = ["Account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name),"\nhas provided liquidity to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78893)," pools:\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78891__$1)].join('');
var inst_78895 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_78894];
var inst_78896__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_78892,inst_78895,null));
var inst_78897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78898 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78899 = (new cljs.core.PersistentVector(null,1,(5),inst_78897,inst_78898,null));
var inst_78900 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78899,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78896__$1], 0));
var inst_78901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78902 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78903 = (new cljs.core.PersistentVector(null,1,(5),inst_78901,inst_78902,null));
var inst_78904 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78903,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Locating Staked LP Tokens ..."], 0));
var inst_78905 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_78887__$1);
var inst_78906 = lpdashboard.core._LT_user_get_staked(inst_78880,inst_78905);
var state_78991__$1 = (function (){var statearr_78994 = state_78991;
(statearr_78994[(13)] = inst_78900);

(statearr_78994[(9)] = inst_78887__$1);

(statearr_78994[(10)] = inst_78891__$1);

(statearr_78994[(11)] = inst_78889__$1);

(statearr_78994[(12)] = inst_78896__$1);

(statearr_78994[(14)] = inst_78904);

return statearr_78994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(4),inst_78906);
} else {
if((state_val_78992 === (4))){
var inst_78887 = (state_78991[(9)]);
var inst_78891 = (state_78991[(10)]);
var inst_78889 = (state_78991[(11)]);
var inst_78896 = (state_78991[(12)]);
var inst_78880 = (state_78991[(7)]);
var inst_78908 = (state_78991[(15)]);
var inst_78908__$1 = (state_78991[(2)]);
var inst_78909 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_78908__$1);
var inst_78910 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_78909);
var inst_78911 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_78910);
var inst_78912 = cljs.core.count(inst_78911);
var inst_78913 = ["Account has staked LP tokens in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78912)," distinct staking contracts ..."].join('');
var inst_78914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78915 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78916 = (new cljs.core.PersistentVector(null,1,(5),inst_78914,inst_78915,null));
var inst_78917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78916,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78913], 0));
var inst_78918 = (function (){var account = inst_78880;
var _ = inst_78917;
var graph_positions = inst_78887;
var last_snaps = inst_78889;
var pair_symbols = inst_78891;
var many_pools_step = inst_78896;
var staked = inst_78908__$1;
var many_stakes_step = inst_78913;
return (function (p1__78877_SHARP_){
return clojure.set.rename_keys(p1__78877_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"address","address",559499426)], null));
});
})();
var inst_78919 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_78920 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_78887);
var inst_78921 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_78920);
var inst_78922 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_78919,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78921], 0));
var inst_78923 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_78918,inst_78922);
var inst_78924 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_78887);
var inst_78925 = lpdashboard.core.pooled_tokens(inst_78924);
var inst_78926 = lpdashboard.core.reward_tokens(inst_78908__$1);
var inst_78927 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_78925,inst_78926,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"], 0));
var inst_78928 = cljs.core.set(inst_78927);
var inst_78929 = lpdashboard.ethereum._LT_erc20_infos(inst_78926);
var state_78991__$1 = (function (){var statearr_78995 = state_78991;
(statearr_78995[(16)] = inst_78923);

(statearr_78995[(17)] = inst_78928);

(statearr_78995[(15)] = inst_78908__$1);

return statearr_78995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(5),inst_78929);
} else {
if((state_val_78992 === (5))){
var inst_78923 = (state_78991[(16)]);
var inst_78928 = (state_78991[(17)]);
var inst_78931 = (state_78991[(2)]);
var inst_78932 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_78923,inst_78931);
var inst_78933 = cljs.core.set(inst_78932);
var inst_78934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78935 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78936 = (new cljs.core.PersistentVector(null,1,(5),inst_78934,inst_78935,null));
var inst_78937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78938 = ["Getting token prices..."];
var inst_78939 = (new cljs.core.PersistentVector(null,1,(5),inst_78937,inst_78938,null));
var inst_78940 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78936,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78939], 0));
var inst_78941 = lpdashboard.coingecko._LT_token_prices(inst_78928);
var state_78991__$1 = (function (){var statearr_78996 = state_78991;
(statearr_78996[(18)] = inst_78940);

(statearr_78996[(19)] = inst_78933);

return statearr_78996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(6),inst_78941);
} else {
if((state_val_78992 === (6))){
var inst_78887 = (state_78991[(9)]);
var inst_78945 = (state_78991[(20)]);
var inst_78880 = (state_78991[(7)]);
var inst_78943 = (state_78991[(2)]);
var inst_78944 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_78887);
var inst_78945__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.gposition__GT_pool,inst_78944);
var inst_78946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78947 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78948 = (new cljs.core.PersistentVector(null,1,(5),inst_78946,inst_78947,null));
var inst_78949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78950 = ["Getting LP Mint events from account..."];
var inst_78951 = (new cljs.core.PersistentVector(null,1,(5),inst_78949,inst_78950,null));
var inst_78952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78948,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78951], 0));
var inst_78953 = lpdashboard.core._LT_get_user_mints(inst_78880,inst_78945__$1);
var state_78991__$1 = (function (){var statearr_78997 = state_78991;
(statearr_78997[(21)] = inst_78952);

(statearr_78997[(20)] = inst_78945__$1);

(statearr_78997[(22)] = inst_78943);

return statearr_78997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(7),inst_78953);
} else {
if((state_val_78992 === (7))){
var inst_78945 = (state_78991[(20)]);
var inst_78955 = (state_78991[(23)]);
var inst_78880 = (state_78991[(7)]);
var inst_78955__$1 = (state_78991[(2)]);
var inst_78956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78957 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78958 = (new cljs.core.PersistentVector(null,1,(5),inst_78956,inst_78957,null));
var inst_78959 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78960 = cljs.core.vals(inst_78955__$1);
var inst_78961 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_78960);
var inst_78962 = cljs.core.count(inst_78961);
var inst_78963 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78962)," LP Mint events by account"].join('');
var inst_78964 = [inst_78963];
var inst_78965 = (new cljs.core.PersistentVector(null,1,(5),inst_78959,inst_78964,null));
var inst_78966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78958,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78965], 0));
var inst_78967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78968 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78969 = (new cljs.core.PersistentVector(null,1,(5),inst_78967,inst_78968,null));
var inst_78970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78971 = ["Getting LP Burn events from account..."];
var inst_78972 = (new cljs.core.PersistentVector(null,1,(5),inst_78970,inst_78971,null));
var inst_78973 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78969,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78972], 0));
var inst_78974 = lpdashboard.core._LT_get_user_burns(inst_78880,inst_78945);
var state_78991__$1 = (function (){var statearr_78998 = state_78991;
(statearr_78998[(24)] = inst_78973);

(statearr_78998[(23)] = inst_78955__$1);

(statearr_78998[(25)] = inst_78966);

return statearr_78998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78991__$1,(8),inst_78974);
} else {
if((state_val_78992 === (8))){
var inst_78887 = (state_78991[(9)]);
var inst_78933 = (state_78991[(19)]);
var inst_78943 = (state_78991[(22)]);
var inst_78955 = (state_78991[(23)]);
var inst_78908 = (state_78991[(15)]);
var inst_78976 = (state_78991[(2)]);
var inst_78977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78978 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_78979 = (new cljs.core.PersistentVector(null,1,(5),inst_78977,inst_78978,null));
var inst_78980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_78981 = cljs.core.vals(inst_78976);
var inst_78982 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_78981);
var inst_78983 = cljs.core.count(inst_78982);
var inst_78984 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_78983)," LP Burn events from account"].join('');
var inst_78985 = [inst_78984];
var inst_78986 = (new cljs.core.PersistentVector(null,1,(5),inst_78980,inst_78985,null));
var inst_78987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_78979,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_78986], 0));
var inst_78988 = lpdashboard.core.make_token_info(inst_78933,inst_78943);
var inst_78989 = lpdashboard.core.make_state(inst_78887,inst_78908,inst_78988,inst_78955,inst_78976);
var state_78991__$1 = (function (){var statearr_78999 = state_78991;
(statearr_78999[(26)] = inst_78987);

return statearr_78999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78991__$1,inst_78989);
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
});
return (function() {
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0 = (function (){
var statearr_79000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79000[(0)] = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__);

(statearr_79000[(1)] = (1));

return statearr_79000;
});
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1 = (function (state_78991){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_78991);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e79001){var ex__36688__auto__ = e79001;
var statearr_79002_79261 = state_78991;
(statearr_79002_79261[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_78991[(4)]))){
var statearr_79003_79262 = state_78991;
(statearr_79003_79262[(1)] = cljs.core.first((state_78991[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79263 = state_78991;
state_78991 = G__79263;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__ = function(state_78991){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1.call(this,state_78991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_79004 = f__36777__auto__();
(statearr_79004[(6)] = c__36776__auto__);

return statearr_79004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.lend_uni_address = "0xab3f9bf1d81ddb224a2014e98b238638824bcf20";
lpdashboard.core.lend_address = "0x80fb784b7ed66730e8b1dbd9820afd29931aab03";
lpdashboard.core.yfi_address = "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e";
lpdashboard.core.yfi_uni_address = "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28";
lpdashboard.core.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
lpdashboard.core.comp_uni_address = "0xcffdded873554f362ac02f8fb1f02e5ada10516f";
lpdashboard.core.snx_address = "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f";
lpdashboard.core.zapp_in_address = "0x80c5e6908368cb9db503ba968d7ec5a565bfb389";
lpdashboard.core.symbol__GT_address = (function lpdashboard$core$symbol__GT_address(symbol,state){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__79005_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__79005_SHARP_),symbol);
}),cljs.core.vals(new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)))));
});
lpdashboard.core.tokens__GT_lp = (function lpdashboard$core$tokens__GT_lp(token1,token2,state){
return null;
});
lpdashboard.core.lp_tokens = (function lpdashboard$core$lp_tokens(lp){
return new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp));
});
lpdashboard.core.pair__GT_address = (function lpdashboard$core$pair__GT_address(symbol1,symbol2,state){
var token1 = lpdashboard.core.symbol__GT_address(symbol1,state);
var token2 = lpdashboard.core.symbol__GT_address(symbol2,state);
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__79006_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__79006_SHARP_)),token1)) && (cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__79006_SHARP_)),token2)));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))))));
});
lpdashboard.core.symbols__GT_lp = (function lpdashboard$core$symbols__GT_lp(symbol1,symbol2,state){
var lp_address = lpdashboard.core.pair__GT_address(symbol1,symbol2,state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state),lp_address);
});
lpdashboard.core.symbols__GT_pos = (function lpdashboard$core$symbols__GT_pos(symbol1,symbol2,state){
var lp = lpdashboard.core.symbols__GT_lp(symbol1,symbol2,state);
return lpdashboard.core.lp_position_map(lp,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state));
});
lpdashboard.core.compute_total = (function lpdashboard$core$compute_total(pnl_key,state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79007_SHARP_){
var G__79008 = new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lpdashboard.core.lp_position_map(p1__79007_SHARP_,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)));
return (pnl_key.cljs$core$IFn$_invoke$arity$1 ? pnl_key.cljs$core$IFn$_invoke$arity$1(G__79008) : pnl_key.call(null,G__79008));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))));
});
lpdashboard.core.compute_totals = (function lpdashboard$core$compute_totals(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rewards","rewards",-1173924062),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),state),new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),state),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),state)], null);
});

//# sourceMappingURL=lpdashboard.core.js.map
