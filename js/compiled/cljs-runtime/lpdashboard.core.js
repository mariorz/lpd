goog.provide('lpdashboard.core');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.core.address0 = "0x0000000000000000000000000000000000000000";
lpdashboard.core.provider = lpdashboard.ethereum.provider;
lpdashboard.core.state_example = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),"some-address",new cljs.core.Keyword(null,"token-info","token-info",-589167623),new cljs.core.PersistentArrayMap(null, 3, ["eth",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"ETH",new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"name","name",1843675177),"Ether",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",100.0,"eth",(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",101.1,"eth",(1)], null)], null)], null),"0x3",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"COMP",new cljs.core.Keyword(null,"address","address",559499426),"0x33",new cljs.core.Keyword(null,"name","name",1843675177),"Compound",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null),"0x2",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MTA",new cljs.core.Keyword(null,"address","address",559499426),"0x21",new cljs.core.Keyword(null,"name","name",1843675177),"meta",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null)], null),new cljs.core.Keyword(null,"lps","lps",2143562451),new cljs.core.PersistentArrayMap(null, 1, ["0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["token0-address","token1-address"], null)], null),new cljs.core.Keyword(null,"unknown-destinations","unknown-destinations",1396541565),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address1",new cljs.core.Keyword(null,"reason","reason",-2070751759),"lp matching failed",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address2",new cljs.core.Keyword(null,"reason","reason",-2070751759),"could not identify contract",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"deposits","deposits",-1544951296),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"burns","burns",1858509067),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(2),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),(1223324),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(100),new cljs.core.Keyword(null,"reserves","reserves",-1935017122),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(25),"token1-address",(40)], null)], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(10),new cljs.core.Keyword(null,"staked","staked",-1857531165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-address","token-address",872304132),"z",new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"example",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"x",new cljs.core.Keyword(null,"lp-address","lp-address",-1398247764),"y",new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"reward-token-symbol","reward-token-symbol",-1647197588),"p",new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),(1),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),"z"], null);
if((typeof lpdashboard !== 'undefined') && (typeof lpdashboard.core !== 'undefined') && (typeof lpdashboard.core.app_state !== 'undefined')){
} else {
lpdashboard.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(((lpdashboard.core.provider == null))?"requires metamask":"connect to account or enter address"),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),null,new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),null,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),null], null));
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
return cljs.core.reset_BANG_(lpdashboard.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Requires metamask..",new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core.PersistentVector.EMPTY], null));
});
lpdashboard.core.render_account = (function lpdashboard$core$render_account(account){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28547){
var state_val_28548 = (state_28547[(1)]);
if((state_val_28548 === (1))){
var inst_28528 = lpdashboard.core.render_loading();
var inst_28529 = (lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1(account) : lpdashboard.core._LT_get_account_state.call(null,account));
var state_28547__$1 = (function (){var statearr_28551 = state_28547;
(statearr_28551[(7)] = inst_28528);

return statearr_28551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28547__$1,(2),inst_28529);
} else {
if((state_val_28548 === (2))){
var inst_28531 = (state_28547[(2)]);
var inst_28532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28534 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_28535 = (new cljs.core.PersistentVector(null,1,(5),inst_28532,inst_28534,null));
var inst_28536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28537 = ["Computing account PNL ..."];
var inst_28538 = (new cljs.core.PersistentVector(null,1,(5),inst_28536,inst_28537,null));
var inst_28539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_28535,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28538], 0));
var inst_28540 = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(inst_28531) : lpdashboard.core.compute_totals.call(null,inst_28531));
var inst_28541 = (function (){var _ = inst_28539;
var account_state = inst_28531;
var totals = inst_28540;
return (function (p1__28526_SHARP_){
var G__28553 = p1__28526_SHARP_;
var G__28554 = new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(account_state);
return (lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2(G__28553,G__28554) : lpdashboard.core.lp_position_map.call(null,G__28553,G__28554));
});
})();
var inst_28542 = new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(inst_28531);
var inst_28543 = cljs.core.vals(inst_28542);
var inst_28544 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_28541,inst_28543);
var inst_28545 = lpdashboard.core.render_totals(account,inst_28531,inst_28544,inst_28540,"USD");
var state_28547__$1 = state_28547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28547__$1,inst_28545);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$render_account_$_state_machine__27576__auto__ = null;
var lpdashboard$core$render_account_$_state_machine__27576__auto____0 = (function (){
var statearr_28557 = [null,null,null,null,null,null,null,null];
(statearr_28557[(0)] = lpdashboard$core$render_account_$_state_machine__27576__auto__);

(statearr_28557[(1)] = (1));

return statearr_28557;
});
var lpdashboard$core$render_account_$_state_machine__27576__auto____1 = (function (state_28547){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28547);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28559){var ex__27579__auto__ = e28559;
var statearr_28560_30197 = state_28547;
(statearr_28560_30197[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28547[(4)]))){
var statearr_28562_30198 = state_28547;
(statearr_28562_30198[(1)] = cljs.core.first((state_28547[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30199 = state_28547;
state_28547 = G__30199;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$render_account_$_state_machine__27576__auto__ = function(state_28547){
switch(arguments.length){
case 0:
return lpdashboard$core$render_account_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$render_account_$_state_machine__27576__auto____1.call(this,state_28547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$render_account_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$render_account_$_state_machine__27576__auto____0;
lpdashboard$core$render_account_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$render_account_$_state_machine__27576__auto____1;
return lpdashboard$core$render_account_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28566 = f__27668__auto__();
(statearr_28566[(6)] = c__27667__auto__);

return statearr_28566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core.render_lp_pos = (function lpdashboard$core$render_lp_pos(lp_pos,lp){
var snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp));
var stakes = new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot);
var farms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),stakes);
var rewards = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stakes], 0));
var claimed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards], 0));
var claim_txs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),claimed));
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(lp_pos))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Pool PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Staking Rewards: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28567){
var vec__28568 = p__28567;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28568,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invested: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28575){
var vec__28576 = p__28575;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28576,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28576,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"invested","invested",19182926).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Withdrawn: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28579){
var vec__28581 = p__28579;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28581,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Diffs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28586){
var vec__28587 = p__28586;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28587,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28587,(1),null);
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28619){
var state_val_28620 = (state_28619[(1)]);
if((state_val_28620 === (7))){
var inst_28601 = (state_28619[(7)]);
var inst_28608 = (function(){throw inst_28601})();
var state_28619__$1 = state_28619;
var statearr_28624_30200 = state_28619__$1;
(statearr_28624_30200[(2)] = inst_28608);

(statearr_28624_30200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (1))){
var state_28619__$1 = state_28619;
var statearr_28625_30201 = state_28619__$1;
(statearr_28625_30201[(2)] = null);

(statearr_28625_30201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (4))){
var inst_28590 = (state_28619[(2)]);
var inst_28591 = console.log("Could not enable web3 in browser",inst_28590);
var state_28619__$1 = state_28619;
var statearr_28627_30202 = state_28619__$1;
(statearr_28627_30202[(2)] = inst_28591);

(statearr_28627_30202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (6))){
var inst_28601 = (state_28619[(7)]);
var inst_28601__$1 = (state_28619[(2)]);
var inst_28602 = (inst_28601__$1 instanceof cljs.core.ExceptionInfo);
var inst_28603 = cljs.core.ex_data(inst_28601__$1);
var inst_28604 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28603);
var inst_28605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28604,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28606 = ((inst_28602) && (inst_28605));
var state_28619__$1 = (function (){var statearr_28628 = state_28619;
(statearr_28628[(7)] = inst_28601__$1);

return statearr_28628;
})();
if(cljs.core.truth_(inst_28606)){
var statearr_28629_30203 = state_28619__$1;
(statearr_28629_30203[(1)] = (7));

} else {
var statearr_28630_30204 = state_28619__$1;
(statearr_28630_30204[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (3))){
var inst_28617 = (state_28619[(2)]);
var state_28619__$1 = state_28619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28619__$1,inst_28617);
} else {
if((state_val_28620 === (2))){
var _ = (function (){var statearr_28635 = state_28619;
(statearr_28635[(4)] = cljs.core.cons((5),(state_28619[(4)])));

return statearr_28635;
})();
var inst_28597 = window.ethereum;
var inst_28598 = inst_28597.enable();
var inst_28599 = cljs.core.async.interop.p__GT_c(inst_28598);
var state_28619__$1 = state_28619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28619__$1,(6),inst_28599);
} else {
if((state_val_28620 === (9))){
var inst_28611 = (state_28619[(2)]);
var inst_28612 = cljs.core.first(inst_28611);
var inst_28613 = console.log("connected-account",inst_28612);
var inst_28614 = lpdashboard.core.render_account(inst_28612);
var _ = (function (){var statearr_28636 = state_28619;
(statearr_28636[(4)] = cljs.core.rest((state_28619[(4)])));

return statearr_28636;
})();
var state_28619__$1 = (function (){var statearr_28637 = state_28619;
(statearr_28637[(8)] = inst_28613);

return statearr_28637;
})();
var statearr_28638_30205 = state_28619__$1;
(statearr_28638_30205[(2)] = inst_28614);

(statearr_28638_30205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (5))){
var _ = (function (){var statearr_28639 = state_28619;
(statearr_28639[(4)] = cljs.core.rest((state_28619[(4)])));

return statearr_28639;
})();
var state_28619__$1 = state_28619;
var ex28634 = (state_28619__$1[(2)]);
var statearr_28640_30206 = state_28619__$1;
(statearr_28640_30206[(5)] = ex28634);


if((ex28634 instanceof Error)){
var statearr_28642_30207 = state_28619__$1;
(statearr_28642_30207[(1)] = (4));

(statearr_28642_30207[(5)] = null);

} else {
throw ex28634;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28620 === (8))){
var inst_28601 = (state_28619[(7)]);
var state_28619__$1 = state_28619;
var statearr_28645_30208 = state_28619__$1;
(statearr_28645_30208[(2)] = inst_28601);

(statearr_28645_30208[(1)] = (9));


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
var lpdashboard$core$web3_connect_$_state_machine__27576__auto__ = null;
var lpdashboard$core$web3_connect_$_state_machine__27576__auto____0 = (function (){
var statearr_28647 = [null,null,null,null,null,null,null,null,null];
(statearr_28647[(0)] = lpdashboard$core$web3_connect_$_state_machine__27576__auto__);

(statearr_28647[(1)] = (1));

return statearr_28647;
});
var lpdashboard$core$web3_connect_$_state_machine__27576__auto____1 = (function (state_28619){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28619);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28648){var ex__27579__auto__ = e28648;
var statearr_28649_30209 = state_28619;
(statearr_28649_30209[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28619[(4)]))){
var statearr_28650_30210 = state_28619;
(statearr_28650_30210[(1)] = cljs.core.first((state_28619[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30211 = state_28619;
state_28619 = G__30211;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$web3_connect_$_state_machine__27576__auto__ = function(state_28619){
switch(arguments.length){
case 0:
return lpdashboard$core$web3_connect_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$web3_connect_$_state_machine__27576__auto____1.call(this,state_28619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$web3_connect_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$web3_connect_$_state_machine__27576__auto____0;
lpdashboard$core$web3_connect_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$web3_connect_$_state_machine__27576__auto____1;
return lpdashboard$core$web3_connect_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28651 = f__27668__auto__();
(statearr_28651[(6)] = c__27667__auto__);

return statearr_28651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core.connecting_component = (function lpdashboard$core$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),lpdashboard.core.web3_connect], null)], null)], null);
});
lpdashboard.core.submit_component = (function lpdashboard$core$submit_component(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lpdashboard.core.render_account(cljs.core.deref(value));
})], null)], null);
});
lpdashboard.core.atom_input = (function lpdashboard$core$atom_input(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28656_SHARP_){
return cljs.core.reset_BANG_(value,p1__28656_SHARP_.target.value);
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
}),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"------- ACCOUNT PNL --------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL From Pools: ",new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards Accrued: ",new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------OPEN LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28657_SHARP_){
return lpdashboard.core.render_lp_pos(p1__28657_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__28657_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28658_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__28658_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------CLOSED LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28659_SHARP_){
return lpdashboard.core.render_lp_pos(p1__28659_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__28659_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28660_SHARP_){
return bignumber.core._GT__EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__28660_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null)], null)], null);
});
lpdashboard.core.start = (function lpdashboard$core$start(){
var G__28668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.hello_world], null);
var G__28669 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28668,G__28669) : reagent.core.render_component.call(null,G__28668,G__28669));
});
lpdashboard.core.init = (function lpdashboard$core$init(){
return lpdashboard.core.start();
});
goog.exportSymbol('lpdashboard.core.init', lpdashboard.core.init);
lpdashboard.core.stop = (function lpdashboard$core$stop(){
return console.log("stop");
});
lpdashboard.core._LT_staking_rewards_earned = (function lpdashboard$core$_LT_staking_rewards_earned(staking_address,rewards_address,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28693){
var state_val_28694 = (state_28693[(1)]);
if((state_val_28694 === (1))){
var inst_28671 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var inst_28672 = lpdashboard.ethereum._LT_token_decimals(rewards_address);
var state_28693__$1 = (function (){var statearr_28696 = state_28693;
(statearr_28696[(7)] = inst_28671);

return statearr_28696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28693__$1,(2),inst_28672);
} else {
if((state_val_28694 === (2))){
var inst_28671 = (state_28693[(7)]);
var inst_28674 = (state_28693[(2)]);
var inst_28676 = inst_28671.earned(user_address);
var inst_28677 = cljs.core.async.interop.p__GT_c(inst_28676);
var state_28693__$1 = (function (){var statearr_28697 = state_28693;
(statearr_28697[(8)] = inst_28674);

return statearr_28697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28693__$1,(3),inst_28677);
} else {
if((state_val_28694 === (3))){
var inst_28679 = (state_28693[(9)]);
var inst_28679__$1 = (state_28693[(2)]);
var inst_28680 = (inst_28679__$1 instanceof cljs.core.ExceptionInfo);
var inst_28682 = cljs.core.ex_data(inst_28679__$1);
var inst_28683 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28682);
var inst_28684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28683,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28685 = ((inst_28680) && (inst_28684));
var state_28693__$1 = (function (){var statearr_28701 = state_28693;
(statearr_28701[(9)] = inst_28679__$1);

return statearr_28701;
})();
if(cljs.core.truth_(inst_28685)){
var statearr_28702_30212 = state_28693__$1;
(statearr_28702_30212[(1)] = (4));

} else {
var statearr_28703_30213 = state_28693__$1;
(statearr_28703_30213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (4))){
var inst_28679 = (state_28693[(9)]);
var inst_28687 = (function(){throw inst_28679})();
var state_28693__$1 = state_28693;
var statearr_28704_30214 = state_28693__$1;
(statearr_28704_30214[(2)] = inst_28687);

(statearr_28704_30214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (5))){
var inst_28679 = (state_28693[(9)]);
var state_28693__$1 = state_28693;
var statearr_28705_30215 = state_28693__$1;
(statearr_28705_30215[(2)] = inst_28679);

(statearr_28705_30215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (6))){
var inst_28674 = (state_28693[(8)]);
var inst_28690 = (state_28693[(2)]);
var inst_28691 = lpdashboard.utils.ebn__GT_bn(inst_28690,inst_28674);
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28693__$1,inst_28691);
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
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto____0 = (function (){
var statearr_28706 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28706[(0)] = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto__);

(statearr_28706[(1)] = (1));

return statearr_28706;
});
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto____1 = (function (state_28693){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28693);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28708){var ex__27579__auto__ = e28708;
var statearr_28710_30216 = state_28693;
(statearr_28710_30216[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28693[(4)]))){
var statearr_28711_30217 = state_28693;
(statearr_28711_30217[(1)] = cljs.core.first((state_28693[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30218 = state_28693;
state_28693 = G__30218;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto__ = function(state_28693){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto____1.call(this,state_28693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28714 = f__27668__auto__();
(statearr_28714[(6)] = c__27667__auto__);

return statearr_28714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_staking_rewards_token = (function lpdashboard$core$_LT_staking_rewards_token(staking_address){
var staking_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (7))){
var inst_28718 = (state_28791[(2)]);
var inst_28720 = console.log("prob getting sushi failback:",staking_address);
var state_28791__$1 = (function (){var statearr_28797 = state_28791;
(statearr_28797[(7)] = inst_28718);

(statearr_28797[(8)] = inst_28720);

return statearr_28797;
})();
var statearr_28798_30219 = state_28791__$1;
(statearr_28798_30219[(2)] = null);

(statearr_28798_30219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (20))){
var inst_28764 = (state_28791[(2)]);
var _ = (function (){var statearr_28799 = state_28791;
(statearr_28799[(4)] = cljs.core.rest((state_28791[(4)])));

return statearr_28799;
})();
var state_28791__$1 = state_28791;
var statearr_28800_30220 = state_28791__$1;
(statearr_28800_30220[(2)] = inst_28764);

(statearr_28800_30220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (1))){
var state_28791__$1 = state_28791;
var statearr_28801_30221 = state_28791__$1;
(statearr_28801_30221[(2)] = null);

(statearr_28801_30221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (24))){
var inst_28776 = (state_28791[(9)]);
var state_28791__$1 = state_28791;
var statearr_28804_30222 = state_28791__$1;
(statearr_28804_30222[(2)] = inst_28776);

(statearr_28804_30222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (4))){
var inst_28716 = (state_28791[(2)]);
var inst_28717 = console.log("prob getting rewards token:",staking_address);
var state_28791__$1 = (function (){var statearr_28807 = state_28791;
(statearr_28807[(10)] = inst_28717);

(statearr_28807[(11)] = inst_28716);

return statearr_28807;
})();
var statearr_28808_30223 = state_28791__$1;
(statearr_28808_30223[(2)] = null);

(statearr_28808_30223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (15))){
var inst_28742 = (state_28791[(2)]);
var _ = (function (){var statearr_28809 = state_28791;
(statearr_28809[(4)] = cljs.core.rest((state_28791[(4)])));

return statearr_28809;
})();
var state_28791__$1 = state_28791;
var statearr_28810_30224 = state_28791__$1;
(statearr_28810_30224[(2)] = inst_28742);

(statearr_28810_30224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (21))){
var _ = (function (){var statearr_28811 = state_28791;
(statearr_28811[(4)] = cljs.core.rest((state_28791[(4)])));

return statearr_28811;
})();
var state_28791__$1 = state_28791;
var ex28805 = (state_28791__$1[(2)]);
var statearr_28812_30225 = state_28791__$1;
(statearr_28812_30225[(5)] = ex28805);


if((ex28805 instanceof Error)){
var statearr_28813_30226 = state_28791__$1;
(statearr_28813_30226[(1)] = (4));

(statearr_28813_30226[(5)] = null);

} else {
throw ex28805;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (13))){
var inst_28732 = (state_28791[(12)]);
var inst_28739 = (function(){throw inst_28732})();
var state_28791__$1 = state_28791;
var statearr_28816_30227 = state_28791__$1;
(statearr_28816_30227[(2)] = inst_28739);

(statearr_28816_30227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (22))){
var inst_28776 = (state_28791[(9)]);
var inst_28776__$1 = (state_28791[(2)]);
var inst_28777 = (inst_28776__$1 instanceof cljs.core.ExceptionInfo);
var inst_28778 = cljs.core.ex_data(inst_28776__$1);
var inst_28779 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28778);
var inst_28780 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28779,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28781 = ((inst_28777) && (inst_28780));
var state_28791__$1 = (function (){var statearr_28819 = state_28791;
(statearr_28819[(9)] = inst_28776__$1);

return statearr_28819;
})();
if(cljs.core.truth_(inst_28781)){
var statearr_28820_30228 = state_28791__$1;
(statearr_28820_30228[(1)] = (23));

} else {
var statearr_28821_30229 = state_28791__$1;
(statearr_28821_30229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28767 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28822_30230 = state_28791__$1;
(statearr_28822_30230[(2)] = inst_28767);

(statearr_28822_30230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (25))){
var inst_28786 = (state_28791[(2)]);
var _ = (function (){var statearr_28823 = state_28791;
(statearr_28823[(4)] = cljs.core.rest((state_28791[(4)])));

return statearr_28823;
})();
var state_28791__$1 = state_28791;
var statearr_28825_30231 = state_28791__$1;
(statearr_28825_30231[(2)] = inst_28786);

(statearr_28825_30231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (17))){
var inst_28754 = (state_28791[(13)]);
var inst_28754__$1 = (state_28791[(2)]);
var inst_28755 = (inst_28754__$1 instanceof cljs.core.ExceptionInfo);
var inst_28756 = cljs.core.ex_data(inst_28754__$1);
var inst_28757 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28756);
var inst_28758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28757,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28759 = ((inst_28755) && (inst_28758));
var state_28791__$1 = (function (){var statearr_28828 = state_28791;
(statearr_28828[(13)] = inst_28754__$1);

return statearr_28828;
})();
if(cljs.core.truth_(inst_28759)){
var statearr_28829_30232 = state_28791__$1;
(statearr_28829_30232[(1)] = (18));

} else {
var statearr_28830_30233 = state_28791__$1;
(statearr_28830_30233[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (12))){
var inst_28732 = (state_28791[(12)]);
var inst_28732__$1 = (state_28791[(2)]);
var inst_28733 = (inst_28732__$1 instanceof cljs.core.ExceptionInfo);
var inst_28734 = cljs.core.ex_data(inst_28732__$1);
var inst_28735 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28734);
var inst_28736 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28735,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28737 = ((inst_28733) && (inst_28736));
var state_28791__$1 = (function (){var statearr_28831 = state_28791;
(statearr_28831[(12)] = inst_28732__$1);

return statearr_28831;
})();
if(cljs.core.truth_(inst_28737)){
var statearr_28832_30234 = state_28791__$1;
(statearr_28832_30234[(1)] = (13));

} else {
var statearr_28833_30235 = state_28791__$1;
(statearr_28833_30235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (2))){
var _ = (function (){var statearr_28836 = state_28791;
(statearr_28836[(4)] = cljs.core.cons((21),(state_28791[(4)])));

return statearr_28836;
})();
var inst_28773 = staking_contract.rewardsToken();
var inst_28774 = cljs.core.async.interop.p__GT_c(inst_28773);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28791__$1,(22),inst_28774);
} else {
if((state_val_28792 === (23))){
var inst_28776 = (state_28791[(9)]);
var inst_28783 = (function(){throw inst_28776})();
var state_28791__$1 = state_28791;
var statearr_28840_30236 = state_28791__$1;
(statearr_28840_30236[(2)] = inst_28783);

(statearr_28840_30236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (19))){
var inst_28754 = (state_28791[(13)]);
var state_28791__$1 = state_28791;
var statearr_28841_30237 = state_28791__$1;
(statearr_28841_30237[(2)] = inst_28754);

(statearr_28841_30237[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (11))){
var _ = (function (){var statearr_28842 = state_28791;
(statearr_28842[(4)] = cljs.core.rest((state_28791[(4)])));

return statearr_28842;
})();
var state_28791__$1 = state_28791;
var ex28838 = (state_28791__$1[(2)]);
var statearr_28843_30238 = state_28791__$1;
(statearr_28843_30238[(5)] = ex28838);


if((ex28838 instanceof Error)){
var statearr_28845_30239 = state_28791__$1;
(statearr_28845_30239[(1)] = (10));

(statearr_28845_30239[(5)] = null);

} else {
throw ex28838;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (9))){
var inst_28745 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28847_30240 = state_28791__$1;
(statearr_28847_30240[(2)] = inst_28745);

(statearr_28847_30240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var _ = (function (){var statearr_28850 = state_28791;
(statearr_28850[(4)] = cljs.core.cons((16),(state_28791[(4)])));

return statearr_28850;
})();
var inst_28751 = staking_contract.sushi();
var inst_28752 = cljs.core.async.interop.p__GT_c(inst_28751);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28791__$1,(17),inst_28752);
} else {
if((state_val_28792 === (14))){
var inst_28732 = (state_28791[(12)]);
var state_28791__$1 = state_28791;
var statearr_28851_30241 = state_28791__$1;
(statearr_28851_30241[(2)] = inst_28732);

(statearr_28851_30241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (16))){
var _ = (function (){var statearr_28852 = state_28791;
(statearr_28852[(4)] = cljs.core.rest((state_28791[(4)])));

return statearr_28852;
})();
var state_28791__$1 = state_28791;
var ex28849 = (state_28791__$1[(2)]);
var statearr_28853_30242 = state_28791__$1;
(statearr_28853_30242[(5)] = ex28849);


if((ex28849 instanceof Error)){
var statearr_28854_30243 = state_28791__$1;
(statearr_28854_30243[(1)] = (7));

(statearr_28854_30243[(5)] = null);

} else {
throw ex28849;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (10))){
var inst_28721 = (state_28791[(2)]);
var inst_28722 = console.log("prob getting cream failback:",staking_address);
var state_28791__$1 = (function (){var statearr_28855 = state_28791;
(statearr_28855[(14)] = inst_28721);

return statearr_28855;
})();
var statearr_28856_30244 = state_28791__$1;
(statearr_28856_30244[(2)] = inst_28722);

(statearr_28856_30244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (18))){
var inst_28754 = (state_28791[(13)]);
var inst_28761 = (function(){throw inst_28754})();
var state_28791__$1 = state_28791;
var statearr_28857_30245 = state_28791__$1;
(statearr_28857_30245[(2)] = inst_28761);

(statearr_28857_30245[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var _ = (function (){var statearr_28858 = state_28791;
(statearr_28858[(4)] = cljs.core.cons((11),(state_28791[(4)])));

return statearr_28858;
})();
var inst_28728 = staking_contract.cream();
var inst_28729 = cljs.core.async.interop.p__GT_c(inst_28728);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28791__$1,(12),inst_28729);
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
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto____0 = (function (){
var statearr_28862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28862[(0)] = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto__);

(statearr_28862[(1)] = (1));

return statearr_28862;
});
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto____1 = (function (state_28791){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28791);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28863){var ex__27579__auto__ = e28863;
var statearr_28864_30246 = state_28791;
(statearr_28864_30246[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28791[(4)]))){
var statearr_28865_30247 = state_28791;
(statearr_28865_30247[(1)] = cljs.core.first((state_28791[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30248 = state_28791;
state_28791 = G__30248;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28866 = f__27668__auto__();
(statearr_28866[(6)] = c__27667__auto__);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_staked_prop = (function lpdashboard$core$_LT_staked_prop(staking_address,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28906){
var state_val_28907 = (state_28906[(1)]);
if((state_val_28907 === (7))){
var inst_28892 = (state_28906[(7)]);
var inst_28892__$1 = (state_28906[(2)]);
var inst_28893 = (inst_28892__$1 instanceof cljs.core.ExceptionInfo);
var inst_28894 = cljs.core.ex_data(inst_28892__$1);
var inst_28895 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28894);
var inst_28896 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28895,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28897 = ((inst_28893) && (inst_28896));
var state_28906__$1 = (function (){var statearr_28908 = state_28906;
(statearr_28908[(7)] = inst_28892__$1);

return statearr_28908;
})();
if(cljs.core.truth_(inst_28897)){
var statearr_28909_30249 = state_28906__$1;
(statearr_28909_30249[(1)] = (8));

} else {
var statearr_28910_30250 = state_28906__$1;
(statearr_28910_30250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28907 === (1))){
var inst_28869 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_28870 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_28906__$1 = (function (){var statearr_28912 = state_28906;
(statearr_28912[(8)] = inst_28869);

return statearr_28912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28906__$1,(2),inst_28870);
} else {
if((state_val_28907 === (4))){
var inst_28877 = (state_28906[(9)]);
var inst_28884 = (function(){throw inst_28877})();
var state_28906__$1 = state_28906;
var statearr_28915_30251 = state_28906__$1;
(statearr_28915_30251[(2)] = inst_28884);

(statearr_28915_30251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28907 === (6))){
var inst_28872 = (state_28906[(10)]);
var inst_28869 = (state_28906[(8)]);
var inst_28887 = (state_28906[(2)]);
var inst_28888 = lpdashboard.utils.ebn__GT_bn(inst_28887,inst_28872);
var inst_28889 = inst_28869.totalSupply();
var inst_28890 = cljs.core.async.interop.p__GT_c(inst_28889);
var state_28906__$1 = (function (){var statearr_28916 = state_28906;
(statearr_28916[(11)] = inst_28888);

return statearr_28916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28906__$1,(7),inst_28890);
} else {
if((state_val_28907 === (3))){
var inst_28877 = (state_28906[(9)]);
var inst_28877__$1 = (state_28906[(2)]);
var inst_28878 = (inst_28877__$1 instanceof cljs.core.ExceptionInfo);
var inst_28879 = cljs.core.ex_data(inst_28877__$1);
var inst_28880 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28879);
var inst_28881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28880,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28882 = ((inst_28878) && (inst_28881));
var state_28906__$1 = (function (){var statearr_28917 = state_28906;
(statearr_28917[(9)] = inst_28877__$1);

return statearr_28917;
})();
if(cljs.core.truth_(inst_28882)){
var statearr_28918_30252 = state_28906__$1;
(statearr_28918_30252[(1)] = (4));

} else {
var statearr_28919_30253 = state_28906__$1;
(statearr_28919_30253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28907 === (2))){
var inst_28869 = (state_28906[(8)]);
var inst_28872 = (state_28906[(2)]);
var inst_28874 = inst_28869.balanceOf(user_address);
var inst_28875 = cljs.core.async.interop.p__GT_c(inst_28874);
var state_28906__$1 = (function (){var statearr_28920 = state_28906;
(statearr_28920[(10)] = inst_28872);

return statearr_28920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28906__$1,(3),inst_28875);
} else {
if((state_val_28907 === (9))){
var inst_28892 = (state_28906[(7)]);
var state_28906__$1 = state_28906;
var statearr_28922_30254 = state_28906__$1;
(statearr_28922_30254[(2)] = inst_28892);

(statearr_28922_30254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28907 === (5))){
var inst_28877 = (state_28906[(9)]);
var state_28906__$1 = state_28906;
var statearr_28924_30255 = state_28906__$1;
(statearr_28924_30255[(2)] = inst_28877);

(statearr_28924_30255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28907 === (10))){
var inst_28888 = (state_28906[(11)]);
var inst_28872 = (state_28906[(10)]);
var inst_28902 = (state_28906[(2)]);
var inst_28903 = lpdashboard.utils.ebn__GT_bn(inst_28902,inst_28872);
var inst_28904 = bignumber.core._SLASH_(inst_28888,inst_28903);
var state_28906__$1 = state_28906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28906__$1,inst_28904);
} else {
if((state_val_28907 === (8))){
var inst_28892 = (state_28906[(7)]);
var inst_28899 = (function(){throw inst_28892})();
var state_28906__$1 = state_28906;
var statearr_28926_30256 = state_28906__$1;
(statearr_28926_30256[(2)] = inst_28899);

(statearr_28926_30256[(1)] = (10));


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
var lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto____0 = (function (){
var statearr_28927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28927[(0)] = lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto__);

(statearr_28927[(1)] = (1));

return statearr_28927;
});
var lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto____1 = (function (state_28906){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28906);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28928){var ex__27579__auto__ = e28928;
var statearr_28929_30257 = state_28906;
(statearr_28929_30257[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28906[(4)]))){
var statearr_28930_30258 = state_28906;
(statearr_28930_30258[(1)] = cljs.core.first((state_28906[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30259 = state_28906;
state_28906 = G__30259;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto__ = function(state_28906){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto____1.call(this,state_28906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staked_prop_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28931 = f__27668__auto__();
(statearr_28931[(6)] = c__27667__auto__);

return statearr_28931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_staking_pool_lps = (function lpdashboard$core$_LT_staking_pool_lps(lp_address,staking_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28963){
var state_val_28964 = (state_28963[(1)]);
if((state_val_28964 === (7))){
var inst_28950 = (state_28963[(7)]);
var inst_28957 = (function(){throw inst_28950})();
var state_28963__$1 = state_28963;
var statearr_28965_30260 = state_28963__$1;
(statearr_28965_30260[(2)] = inst_28957);

(statearr_28965_30260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (1))){
var inst_28932 = (state_28963[(8)]);
var inst_28932__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_28933 = inst_28932__$1.decimals();
var inst_28934 = cljs.core.async.interop.p__GT_c(inst_28933);
var state_28963__$1 = (function (){var statearr_28966 = state_28963;
(statearr_28966[(8)] = inst_28932__$1);

return statearr_28966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28963__$1,(2),inst_28934);
} else {
if((state_val_28964 === (4))){
var inst_28936 = (state_28963[(9)]);
var state_28963__$1 = state_28963;
var statearr_28967_30261 = state_28963__$1;
(statearr_28967_30261[(2)] = inst_28936);

(statearr_28967_30261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (6))){
var inst_28950 = (state_28963[(7)]);
var inst_28950__$1 = (state_28963[(2)]);
var inst_28951 = (inst_28950__$1 instanceof cljs.core.ExceptionInfo);
var inst_28952 = cljs.core.ex_data(inst_28950__$1);
var inst_28953 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28952);
var inst_28954 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28953,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28955 = ((inst_28951) && (inst_28954));
var state_28963__$1 = (function (){var statearr_28968 = state_28963;
(statearr_28968[(7)] = inst_28950__$1);

return statearr_28968;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_28969_30262 = state_28963__$1;
(statearr_28969_30262[(1)] = (7));

} else {
var statearr_28970_30263 = state_28963__$1;
(statearr_28970_30263[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (3))){
var inst_28936 = (state_28963[(9)]);
var inst_28943 = (function(){throw inst_28936})();
var state_28963__$1 = state_28963;
var statearr_28971_30264 = state_28963__$1;
(statearr_28971_30264[(2)] = inst_28943);

(statearr_28971_30264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (2))){
var inst_28936 = (state_28963[(9)]);
var inst_28936__$1 = (state_28963[(2)]);
var inst_28937 = (inst_28936__$1 instanceof cljs.core.ExceptionInfo);
var inst_28938 = cljs.core.ex_data(inst_28936__$1);
var inst_28939 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28938);
var inst_28940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28939,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28941 = ((inst_28937) && (inst_28940));
var state_28963__$1 = (function (){var statearr_28972 = state_28963;
(statearr_28972[(9)] = inst_28936__$1);

return statearr_28972;
})();
if(cljs.core.truth_(inst_28941)){
var statearr_28973_30265 = state_28963__$1;
(statearr_28973_30265[(1)] = (3));

} else {
var statearr_28974_30266 = state_28963__$1;
(statearr_28974_30266[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (9))){
var inst_28946 = (state_28963[(10)]);
var inst_28960 = (state_28963[(2)]);
var inst_28961 = lpdashboard.utils.ebn__GT_bn(inst_28960,inst_28946);
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28963__$1,inst_28961);
} else {
if((state_val_28964 === (5))){
var inst_28932 = (state_28963[(8)]);
var inst_28946 = (state_28963[(2)]);
var inst_28947 = inst_28932.balanceOf(staking_address);
var inst_28948 = cljs.core.async.interop.p__GT_c(inst_28947);
var state_28963__$1 = (function (){var statearr_28975 = state_28963;
(statearr_28975[(10)] = inst_28946);

return statearr_28975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28963__$1,(6),inst_28948);
} else {
if((state_val_28964 === (8))){
var inst_28950 = (state_28963[(7)]);
var state_28963__$1 = state_28963;
var statearr_28976_30267 = state_28963__$1;
(statearr_28976_30267[(2)] = inst_28950);

(statearr_28976_30267[(1)] = (9));


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
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto____1 = (function (state_28963){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28963);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28978){var ex__27579__auto__ = e28978;
var statearr_28979_30268 = state_28963;
(statearr_28979_30268[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28963[(4)]))){
var statearr_28980_30269 = state_28963;
(statearr_28980_30269[(1)] = cljs.core.first((state_28963[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30270 = state_28963;
state_28963 = G__30270;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto__ = function(state_28963){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto____1.call(this,state_28963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28981 = f__27668__auto__();
(statearr_28981[(6)] = c__27667__auto__);

return statearr_28981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_total_pool_lps = (function lpdashboard$core$_LT_total_pool_lps(lp_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29002){
var state_val_29003 = (state_29002[(1)]);
if((state_val_29003 === (1))){
var inst_28982 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_28983 = lpdashboard.ethereum._LT_token_decimals(lp_address);
var state_29002__$1 = (function (){var statearr_29004 = state_29002;
(statearr_29004[(7)] = inst_28982);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29002__$1,(2),inst_28983);
} else {
if((state_val_29003 === (2))){
var inst_28982 = (state_29002[(7)]);
var inst_28985 = (state_29002[(2)]);
var inst_28986 = inst_28982.totalSupply();
var inst_28987 = cljs.core.async.interop.p__GT_c(inst_28986);
var state_29002__$1 = (function (){var statearr_29005 = state_29002;
(statearr_29005[(8)] = inst_28985);

return statearr_29005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29002__$1,(3),inst_28987);
} else {
if((state_val_29003 === (3))){
var inst_28989 = (state_29002[(9)]);
var inst_28989__$1 = (state_29002[(2)]);
var inst_28990 = (inst_28989__$1 instanceof cljs.core.ExceptionInfo);
var inst_28991 = cljs.core.ex_data(inst_28989__$1);
var inst_28992 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28991);
var inst_28993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28992,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_28994 = ((inst_28990) && (inst_28993));
var state_29002__$1 = (function (){var statearr_29006 = state_29002;
(statearr_29006[(9)] = inst_28989__$1);

return statearr_29006;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29007_30271 = state_29002__$1;
(statearr_29007_30271[(1)] = (4));

} else {
var statearr_29008_30272 = state_29002__$1;
(statearr_29008_30272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (4))){
var inst_28989 = (state_29002[(9)]);
var inst_28996 = (function(){throw inst_28989})();
var state_29002__$1 = state_29002;
var statearr_29009_30273 = state_29002__$1;
(statearr_29009_30273[(2)] = inst_28996);

(statearr_29009_30273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (5))){
var inst_28989 = (state_29002[(9)]);
var state_29002__$1 = state_29002;
var statearr_29010_30274 = state_29002__$1;
(statearr_29010_30274[(2)] = inst_28989);

(statearr_29010_30274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29003 === (6))){
var inst_28985 = (state_29002[(8)]);
var inst_28999 = (state_29002[(2)]);
var inst_29000 = lpdashboard.utils.ebn__GT_bn(inst_28999,inst_28985);
var state_29002__$1 = state_29002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29002__$1,inst_29000);
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
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto____0 = (function (){
var statearr_29011 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29011[(0)] = lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto__);

(statearr_29011[(1)] = (1));

return statearr_29011;
});
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto____1 = (function (state_29002){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29002);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29012){var ex__27579__auto__ = e29012;
var statearr_29013_30275 = state_29002;
(statearr_29013_30275[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29002[(4)]))){
var statearr_29014_30276 = state_29002;
(statearr_29014_30276[(1)] = cljs.core.first((state_29002[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30277 = state_29002;
state_29002 = G__30277;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto__ = function(state_29002){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto____1.call(this,state_29002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29015 = f__27668__auto__();
(statearr_29015[(6)] = c__27667__auto__);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_lp_pool_tokens = (function lpdashboard$core$_LT_lp_pool_tokens(lp_address){
var lp_contract = lpdashboard.ethereum.make_erc20(lp_address);
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29048){
var state_val_29049 = (state_29048[(1)]);
if((state_val_29049 === (7))){
var inst_29034 = (state_29048[(7)]);
var inst_29041 = (function(){throw inst_29034})();
var state_29048__$1 = state_29048;
var statearr_29050_30278 = state_29048__$1;
(statearr_29050_30278[(2)] = inst_29041);

(statearr_29050_30278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (1))){
var inst_29016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29017 = lp_contract.token0();
var inst_29018 = cljs.core.async.interop.p__GT_c(inst_29017);
var state_29048__$1 = (function (){var statearr_29051 = state_29048;
(statearr_29051[(8)] = inst_29016);

return statearr_29051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29048__$1,(2),inst_29018);
} else {
if((state_val_29049 === (4))){
var inst_29020 = (state_29048[(9)]);
var state_29048__$1 = state_29048;
var statearr_29052_30279 = state_29048__$1;
(statearr_29052_30279[(2)] = inst_29020);

(statearr_29052_30279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (6))){
var inst_29034 = (state_29048[(7)]);
var inst_29034__$1 = (state_29048[(2)]);
var inst_29035 = (inst_29034__$1 instanceof cljs.core.ExceptionInfo);
var inst_29036 = cljs.core.ex_data(inst_29034__$1);
var inst_29037 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29036);
var inst_29038 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29037,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29039 = ((inst_29035) && (inst_29038));
var state_29048__$1 = (function (){var statearr_29053 = state_29048;
(statearr_29053[(7)] = inst_29034__$1);

return statearr_29053;
})();
if(cljs.core.truth_(inst_29039)){
var statearr_29054_30280 = state_29048__$1;
(statearr_29054_30280[(1)] = (7));

} else {
var statearr_29055_30281 = state_29048__$1;
(statearr_29055_30281[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (3))){
var inst_29020 = (state_29048[(9)]);
var inst_29027 = (function(){throw inst_29020})();
var state_29048__$1 = state_29048;
var statearr_29056_30282 = state_29048__$1;
(statearr_29056_30282[(2)] = inst_29027);

(statearr_29056_30282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (2))){
var inst_29020 = (state_29048[(9)]);
var inst_29020__$1 = (state_29048[(2)]);
var inst_29021 = (inst_29020__$1 instanceof cljs.core.ExceptionInfo);
var inst_29022 = cljs.core.ex_data(inst_29020__$1);
var inst_29023 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29022);
var inst_29024 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29023,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29025 = ((inst_29021) && (inst_29024));
var state_29048__$1 = (function (){var statearr_29057 = state_29048;
(statearr_29057[(9)] = inst_29020__$1);

return statearr_29057;
})();
if(cljs.core.truth_(inst_29025)){
var statearr_29058_30283 = state_29048__$1;
(statearr_29058_30283[(1)] = (3));

} else {
var statearr_29059_30284 = state_29048__$1;
(statearr_29059_30284[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29049 === (9))){
var inst_29030 = (state_29048[(10)]);
var inst_29016 = (state_29048[(8)]);
var inst_29044 = (state_29048[(2)]);
var inst_29045 = [inst_29030,inst_29044];
var inst_29046 = (new cljs.core.PersistentVector(null,2,(5),inst_29016,inst_29045,null));
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29048__$1,inst_29046);
} else {
if((state_val_29049 === (5))){
var inst_29030 = (state_29048[(2)]);
var inst_29031 = lp_contract.token1();
var inst_29032 = cljs.core.async.interop.p__GT_c(inst_29031);
var state_29048__$1 = (function (){var statearr_29060 = state_29048;
(statearr_29060[(10)] = inst_29030);

return statearr_29060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29048__$1,(6),inst_29032);
} else {
if((state_val_29049 === (8))){
var inst_29034 = (state_29048[(7)]);
var state_29048__$1 = state_29048;
var statearr_29061_30285 = state_29048__$1;
(statearr_29061_30285[(2)] = inst_29034);

(statearr_29061_30285[(1)] = (9));


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
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto____1 = (function (state_29048){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29048);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29063){var ex__27579__auto__ = e29063;
var statearr_29064_30286 = state_29048;
(statearr_29064_30286[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29048[(4)]))){
var statearr_29065_30287 = state_29048;
(statearr_29065_30287[(1)] = cljs.core.first((state_29048[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30288 = state_29048;
state_29048 = G__30288;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto__ = function(state_29048){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto____1.call(this,state_29048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29066 = f__27668__auto__();
(statearr_29066[(6)] = c__27667__auto__);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_lp_pool_symbols = (function lpdashboard$core$_LT_lp_pool_symbols(lp_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29106){
var state_val_29107 = (state_29106[(1)]);
if((state_val_29107 === (7))){
var inst_29092 = (state_29106[(7)]);
var inst_29092__$1 = (state_29106[(2)]);
var inst_29093 = (inst_29092__$1 instanceof cljs.core.ExceptionInfo);
var inst_29094 = cljs.core.ex_data(inst_29092__$1);
var inst_29095 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29094);
var inst_29096 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29095,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29097 = ((inst_29093) && (inst_29096));
var state_29106__$1 = (function (){var statearr_29108 = state_29106;
(statearr_29108[(7)] = inst_29092__$1);

return statearr_29108;
})();
if(cljs.core.truth_(inst_29097)){
var statearr_29109_30289 = state_29106__$1;
(statearr_29109_30289[(1)] = (8));

} else {
var statearr_29110_30290 = state_29106__$1;
(statearr_29110_30290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (1))){
var inst_29067 = lpdashboard.core._LT_lp_pool_tokens(lp_address);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29106__$1,(2),inst_29067);
} else {
if((state_val_29107 === (4))){
var inst_29078 = (state_29106[(8)]);
var inst_29085 = (function(){throw inst_29078})();
var state_29106__$1 = state_29106;
var statearr_29111_30291 = state_29106__$1;
(statearr_29111_30291[(2)] = inst_29085);

(statearr_29111_30291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (6))){
var inst_29073 = (state_29106[(9)]);
var inst_29088 = (state_29106[(2)]);
var inst_29089 = inst_29073.symbol();
var inst_29090 = cljs.core.async.interop.p__GT_c(inst_29089);
var state_29106__$1 = (function (){var statearr_29112 = state_29106;
(statearr_29112[(10)] = inst_29088);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29106__$1,(7),inst_29090);
} else {
if((state_val_29107 === (3))){
var inst_29078 = (state_29106[(8)]);
var inst_29078__$1 = (state_29106[(2)]);
var inst_29079 = (inst_29078__$1 instanceof cljs.core.ExceptionInfo);
var inst_29080 = cljs.core.ex_data(inst_29078__$1);
var inst_29081 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29080);
var inst_29082 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29081,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29083 = ((inst_29079) && (inst_29082));
var state_29106__$1 = (function (){var statearr_29113 = state_29106;
(statearr_29113[(8)] = inst_29078__$1);

return statearr_29113;
})();
if(cljs.core.truth_(inst_29083)){
var statearr_29114_30292 = state_29106__$1;
(statearr_29114_30292[(1)] = (4));

} else {
var statearr_29115_30293 = state_29106__$1;
(statearr_29115_30293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (2))){
var inst_29069 = (state_29106[(2)]);
var inst_29070 = cljs.core.first(inst_29069);
var inst_29071 = lpdashboard.ethereum.make_erc20(inst_29070);
var inst_29072 = cljs.core.second(inst_29069);
var inst_29073 = lpdashboard.ethereum.make_erc20(inst_29072);
var inst_29074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29075 = inst_29071.symbol();
var inst_29076 = cljs.core.async.interop.p__GT_c(inst_29075);
var state_29106__$1 = (function (){var statearr_29116 = state_29106;
(statearr_29116[(11)] = inst_29074);

(statearr_29116[(9)] = inst_29073);

return statearr_29116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29106__$1,(3),inst_29076);
} else {
if((state_val_29107 === (9))){
var inst_29092 = (state_29106[(7)]);
var state_29106__$1 = state_29106;
var statearr_29117_30294 = state_29106__$1;
(statearr_29117_30294[(2)] = inst_29092);

(statearr_29117_30294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (5))){
var inst_29078 = (state_29106[(8)]);
var state_29106__$1 = state_29106;
var statearr_29118_30295 = state_29106__$1;
(statearr_29118_30295[(2)] = inst_29078);

(statearr_29118_30295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (10))){
var inst_29074 = (state_29106[(11)]);
var inst_29088 = (state_29106[(10)]);
var inst_29102 = (state_29106[(2)]);
var inst_29103 = [inst_29088,inst_29102];
var inst_29104 = (new cljs.core.PersistentVector(null,2,(5),inst_29074,inst_29103,null));
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29106__$1,inst_29104);
} else {
if((state_val_29107 === (8))){
var inst_29092 = (state_29106[(7)]);
var inst_29099 = (function(){throw inst_29092})();
var state_29106__$1 = state_29106;
var statearr_29119_30296 = state_29106__$1;
(statearr_29119_30296[(2)] = inst_29099);

(statearr_29119_30296[(1)] = (10));


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
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto____0 = (function (){
var statearr_29120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29120[(0)] = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto__);

(statearr_29120[(1)] = (1));

return statearr_29120;
});
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto____1 = (function (state_29106){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29106);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29121){var ex__27579__auto__ = e29121;
var statearr_29122_30297 = state_29106;
(statearr_29122_30297[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29106[(4)]))){
var statearr_29123_30298 = state_29106;
(statearr_29123_30298[(1)] = cljs.core.first((state_29106[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30299 = state_29106;
state_29106 = G__30299;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto__ = function(state_29106){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto____1.call(this,state_29106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29124 = f__27668__auto__();
(statearr_29124[(6)] = c__27667__auto__);

return statearr_29124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_total_pool_reserves = (function lpdashboard$core$_LT_total_pool_reserves(lp_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29182){
var state_val_29183 = (state_29182[(1)]);
if((state_val_29183 === (7))){
var inst_29143 = (state_29182[(7)]);
var inst_29150 = (function(){throw inst_29143})();
var state_29182__$1 = state_29182;
var statearr_29184_30300 = state_29182__$1;
(statearr_29184_30300[(2)] = inst_29150);

(statearr_29184_30300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (1))){
var inst_29125 = (state_29182[(8)]);
var inst_29125__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_29126 = inst_29125__$1.token0();
var inst_29127 = cljs.core.async.interop.p__GT_c(inst_29126);
var state_29182__$1 = (function (){var statearr_29185 = state_29182;
(statearr_29185[(8)] = inst_29125__$1);

return statearr_29185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29182__$1,(2),inst_29127);
} else {
if((state_val_29183 === (4))){
var inst_29129 = (state_29182[(9)]);
var state_29182__$1 = state_29182;
var statearr_29186_30301 = state_29182__$1;
(statearr_29186_30301[(2)] = inst_29129);

(statearr_29186_30301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (15))){
var inst_29156 = (state_29182[(10)]);
var inst_29159 = (state_29182[(11)]);
var inst_29173 = (state_29182[(2)]);
var inst_29174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29175 = cljs.core.first(inst_29173);
var inst_29176 = lpdashboard.utils.ebn__GT_bn(inst_29175,inst_29156);
var inst_29177 = cljs.core.second(inst_29173);
var inst_29178 = lpdashboard.utils.ebn__GT_bn(inst_29177,inst_29159);
var inst_29179 = [inst_29176,inst_29178];
var inst_29180 = (new cljs.core.PersistentVector(null,2,(5),inst_29174,inst_29179,null));
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29182__$1,inst_29180);
} else {
if((state_val_29183 === (13))){
var inst_29163 = (state_29182[(12)]);
var inst_29170 = (function(){throw inst_29163})();
var state_29182__$1 = state_29182;
var statearr_29187_30302 = state_29182__$1;
(statearr_29187_30302[(2)] = inst_29170);

(statearr_29187_30302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (6))){
var inst_29143 = (state_29182[(7)]);
var inst_29143__$1 = (state_29182[(2)]);
var inst_29144 = (inst_29143__$1 instanceof cljs.core.ExceptionInfo);
var inst_29145 = cljs.core.ex_data(inst_29143__$1);
var inst_29146 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29145);
var inst_29147 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29146,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29148 = ((inst_29144) && (inst_29147));
var state_29182__$1 = (function (){var statearr_29188 = state_29182;
(statearr_29188[(7)] = inst_29143__$1);

return statearr_29188;
})();
if(cljs.core.truth_(inst_29148)){
var statearr_29189_30303 = state_29182__$1;
(statearr_29189_30303[(1)] = (7));

} else {
var statearr_29190_30304 = state_29182__$1;
(statearr_29190_30304[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (3))){
var inst_29129 = (state_29182[(9)]);
var inst_29136 = (function(){throw inst_29129})();
var state_29182__$1 = state_29182;
var statearr_29191_30305 = state_29182__$1;
(statearr_29191_30305[(2)] = inst_29136);

(statearr_29191_30305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (12))){
var inst_29163 = (state_29182[(12)]);
var inst_29163__$1 = (state_29182[(2)]);
var inst_29164 = (inst_29163__$1 instanceof cljs.core.ExceptionInfo);
var inst_29165 = cljs.core.ex_data(inst_29163__$1);
var inst_29166 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29165);
var inst_29167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29166,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29168 = ((inst_29164) && (inst_29167));
var state_29182__$1 = (function (){var statearr_29192 = state_29182;
(statearr_29192[(12)] = inst_29163__$1);

return statearr_29192;
})();
if(cljs.core.truth_(inst_29168)){
var statearr_29193_30306 = state_29182__$1;
(statearr_29193_30306[(1)] = (13));

} else {
var statearr_29194_30307 = state_29182__$1;
(statearr_29194_30307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (2))){
var inst_29129 = (state_29182[(9)]);
var inst_29129__$1 = (state_29182[(2)]);
var inst_29130 = (inst_29129__$1 instanceof cljs.core.ExceptionInfo);
var inst_29131 = cljs.core.ex_data(inst_29129__$1);
var inst_29132 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29131);
var inst_29133 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29132,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29134 = ((inst_29130) && (inst_29133));
var state_29182__$1 = (function (){var statearr_29195 = state_29182;
(statearr_29195[(9)] = inst_29129__$1);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29134)){
var statearr_29196_30308 = state_29182__$1;
(statearr_29196_30308[(1)] = (3));

} else {
var statearr_29197_30309 = state_29182__$1;
(statearr_29197_30309[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (11))){
var inst_29125 = (state_29182[(8)]);
var inst_29159 = (state_29182[(2)]);
var inst_29160 = inst_29125.getReserves();
var inst_29161 = cljs.core.async.interop.p__GT_c(inst_29160);
var state_29182__$1 = (function (){var statearr_29198 = state_29182;
(statearr_29198[(11)] = inst_29159);

return statearr_29198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29182__$1,(12),inst_29161);
} else {
if((state_val_29183 === (9))){
var inst_29139 = (state_29182[(13)]);
var inst_29153 = (state_29182[(2)]);
var inst_29154 = lpdashboard.ethereum._LT_token_decimals(inst_29139);
var state_29182__$1 = (function (){var statearr_29199 = state_29182;
(statearr_29199[(14)] = inst_29153);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29182__$1,(10),inst_29154);
} else {
if((state_val_29183 === (5))){
var inst_29125 = (state_29182[(8)]);
var inst_29139 = (state_29182[(2)]);
var inst_29140 = inst_29125.token1();
var inst_29141 = cljs.core.async.interop.p__GT_c(inst_29140);
var state_29182__$1 = (function (){var statearr_29200 = state_29182;
(statearr_29200[(13)] = inst_29139);

return statearr_29200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29182__$1,(6),inst_29141);
} else {
if((state_val_29183 === (14))){
var inst_29163 = (state_29182[(12)]);
var state_29182__$1 = state_29182;
var statearr_29201_30310 = state_29182__$1;
(statearr_29201_30310[(2)] = inst_29163);

(statearr_29201_30310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (10))){
var inst_29153 = (state_29182[(14)]);
var inst_29156 = (state_29182[(2)]);
var inst_29157 = lpdashboard.ethereum._LT_token_decimals(inst_29153);
var state_29182__$1 = (function (){var statearr_29202 = state_29182;
(statearr_29202[(10)] = inst_29156);

return statearr_29202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29182__$1,(11),inst_29157);
} else {
if((state_val_29183 === (8))){
var inst_29143 = (state_29182[(7)]);
var state_29182__$1 = state_29182;
var statearr_29203_30311 = state_29182__$1;
(statearr_29203_30311[(2)] = inst_29143);

(statearr_29203_30311[(1)] = (9));


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
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto____0 = (function (){
var statearr_29204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29204[(0)] = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto__);

(statearr_29204[(1)] = (1));

return statearr_29204;
});
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto____1 = (function (state_29182){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29182);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29205){var ex__27579__auto__ = e29205;
var statearr_29206_30312 = state_29182;
(statearr_29206_30312[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29182[(4)]))){
var statearr_29207_30313 = state_29182;
(statearr_29207_30313[(1)] = cljs.core.first((state_29182[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30314 = state_29182;
state_29182 = G__30314;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29208 = f__27668__auto__();
(statearr_29208[(6)] = c__27667__auto__);

return statearr_29208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29234){
var state_val_29235 = (state_29234[(1)]);
if((state_val_29235 === (1))){
var inst_29209 = (state_29234[(7)]);
var inst_29209__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var inst_29210 = inst_29209__$1.poolLength();
var inst_29211 = cljs.core.async.interop.p__GT_c(inst_29210);
var state_29234__$1 = (function (){var statearr_29236 = state_29234;
(statearr_29236[(7)] = inst_29209__$1);

return statearr_29236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29234__$1,(2),inst_29211);
} else {
if((state_val_29235 === (2))){
var inst_29213 = (state_29234[(8)]);
var inst_29213__$1 = (state_29234[(2)]);
var inst_29214 = (inst_29213__$1 instanceof cljs.core.ExceptionInfo);
var inst_29215 = cljs.core.ex_data(inst_29213__$1);
var inst_29216 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29215);
var inst_29217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29216,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29218 = ((inst_29214) && (inst_29217));
var state_29234__$1 = (function (){var statearr_29237 = state_29234;
(statearr_29237[(8)] = inst_29213__$1);

return statearr_29237;
})();
if(cljs.core.truth_(inst_29218)){
var statearr_29238_30315 = state_29234__$1;
(statearr_29238_30315[(1)] = (3));

} else {
var statearr_29239_30316 = state_29234__$1;
(statearr_29239_30316[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (3))){
var inst_29213 = (state_29234[(8)]);
var inst_29220 = (function(){throw inst_29213})();
var state_29234__$1 = state_29234;
var statearr_29240_30317 = state_29234__$1;
(statearr_29240_30317[(2)] = inst_29220);

(statearr_29240_30317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (4))){
var inst_29213 = (state_29234[(8)]);
var state_29234__$1 = state_29234;
var statearr_29241_30318 = state_29234__$1;
(statearr_29241_30318[(2)] = inst_29213);

(statearr_29241_30318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29235 === (5))){
var inst_29209 = (state_29234[(7)]);
var inst_29223 = (state_29234[(2)]);
var inst_29224 = cljs.core.identity(inst_29223);
var inst_29225 = (function (){var contract = inst_29209;
var many_pools = inst_29224;
return (function (p){
var c__27667__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29262){
var state_val_29263 = (state_29262[(1)]);
if((state_val_29263 === (1))){
var inst_29242 = contract.poolInfo(p);
var inst_29243 = cljs.core.async.interop.p__GT_c(inst_29242);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29262__$1,(2),inst_29243);
} else {
if((state_val_29263 === (2))){
var inst_29245 = (state_29262[(7)]);
var inst_29245__$1 = (state_29262[(2)]);
var inst_29246 = (inst_29245__$1 instanceof cljs.core.ExceptionInfo);
var inst_29247 = cljs.core.ex_data(inst_29245__$1);
var inst_29248 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29247);
var inst_29249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29248,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29250 = ((inst_29246) && (inst_29249));
var state_29262__$1 = (function (){var statearr_29264 = state_29262;
(statearr_29264[(7)] = inst_29245__$1);

return statearr_29264;
})();
if(cljs.core.truth_(inst_29250)){
var statearr_29265_30319 = state_29262__$1;
(statearr_29265_30319[(1)] = (3));

} else {
var statearr_29266_30320 = state_29262__$1;
(statearr_29266_30320[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (3))){
var inst_29245 = (state_29262[(7)]);
var inst_29252 = (function(){throw inst_29245})();
var state_29262__$1 = state_29262;
var statearr_29267_30321 = state_29262__$1;
(statearr_29267_30321[(2)] = inst_29252);

(statearr_29267_30321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (4))){
var inst_29245 = (state_29262[(7)]);
var state_29262__$1 = state_29262;
var statearr_29268_30322 = state_29262__$1;
(statearr_29268_30322[(2)] = inst_29245);

(statearr_29268_30322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29263 === (5))){
var inst_29255 = (state_29262[(2)]);
var inst_29256 = cljs.core.first(inst_29255);
var inst_29257 = clojure.string.lower_case(inst_29256);
var inst_29258 = [inst_29257];
var inst_29259 = [p];
var inst_29260 = cljs.core.PersistentHashMap.fromArrays(inst_29258,inst_29259);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29262__$1,inst_29260);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____0 = (function (){
var statearr_29269 = [null,null,null,null,null,null,null,null];
(statearr_29269[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__);

(statearr_29269[(1)] = (1));

return statearr_29269;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____1 = (function (state_29262){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29262);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29270){var ex__27579__auto__ = e29270;
var statearr_29271_30323 = state_29262;
(statearr_29271_30323[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29262[(4)]))){
var statearr_29272_30324 = state_29262;
(statearr_29272_30324[(1)] = cljs.core.first((state_29262[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30325 = state_29262;
state_29262 = G__30325;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__ = function(state_29262){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____1.call(this,state_29262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29273 = f__27668__auto__();
(statearr_29273[(6)] = c__27667__auto____$1);

return statearr_29273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto____$1;
});
})();
var inst_29226 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_29224);
var inst_29227 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_29225,inst_29226);
var inst_29228 = cljs.core.PersistentHashMap.EMPTY;
var inst_29229 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_29227);
var inst_29230 = cljs.core.async.reduce(cljs.core.merge,inst_29228,inst_29229);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29234__$1,(6),inst_29230);
} else {
if((state_val_29235 === (6))){
var inst_29232 = (state_29234[(2)]);
var state_29234__$1 = state_29234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29234__$1,inst_29232);
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
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____0 = (function (){
var statearr_29274 = [null,null,null,null,null,null,null,null,null];
(statearr_29274[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__);

(statearr_29274[(1)] = (1));

return statearr_29274;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____1 = (function (state_29234){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29234);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29275){var ex__27579__auto__ = e29275;
var statearr_29276_30326 = state_29234;
(statearr_29276_30326[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29234[(4)]))){
var statearr_29277_30327 = state_29234;
(statearr_29277_30327[(1)] = cljs.core.first((state_29234[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30328 = state_29234;
state_29234 = G__30328;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__ = function(state_29234){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____1.call(this,state_29234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29278 = f__27668__auto__();
(statearr_29278[(6)] = c__27667__auto__);

return statearr_29278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core.make_paid_rewards = (function lpdashboard$core$make_paid_rewards(parsed_transfer){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(parsed_transfer)], null);
});
lpdashboard.core._LT_staked_lp_positions_sr = (function lpdashboard$core$_LT_staked_lp_positions_sr(lp_address,staking_address,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29318){
var state_val_29319 = (state_29318[(1)]);
if((state_val_29319 === (7))){
var inst_29301 = (state_29318[(7)]);
var inst_29297 = (state_29318[(8)]);
var inst_29301__$1 = (state_29318[(2)]);
var inst_29302 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re:",inst_29301__$1], 0));
var inst_29303 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_29297,staking_address,user_address);
var state_29318__$1 = (function (){var statearr_29320 = state_29318;
(statearr_29320[(7)] = inst_29301__$1);

(statearr_29320[(9)] = inst_29302);

return statearr_29320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(8),inst_29303);
} else {
if((state_val_29319 === (1))){
var inst_29279 = lpdashboard.core._LT_staked_prop(staking_address,user_address);
var state_29318__$1 = state_29318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(2),inst_29279);
} else {
if((state_val_29319 === (4))){
var inst_29289 = (state_29318[(10)]);
var inst_29289__$1 = (state_29318[(2)]);
var inst_29290 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["total-unis:",inst_29289__$1], 0));
var inst_29291 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_29318__$1 = (function (){var statearr_29321 = state_29318;
(statearr_29321[(11)] = inst_29290);

(statearr_29321[(10)] = inst_29289__$1);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(5),inst_29291);
} else {
if((state_val_29319 === (6))){
var inst_29297 = (state_29318[(8)]);
var inst_29297__$1 = (state_29318[(2)]);
var inst_29298 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rt:",inst_29297__$1], 0));
var inst_29299 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_29297__$1,user_address);
var state_29318__$1 = (function (){var statearr_29322 = state_29318;
(statearr_29322[(8)] = inst_29297__$1);

(statearr_29322[(12)] = inst_29298);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(7),inst_29299);
} else {
if((state_val_29319 === (3))){
var inst_29281 = (state_29318[(13)]);
var inst_29285 = (state_29318[(14)]);
var inst_29284 = (state_29318[(2)]);
var inst_29285__$1 = lpdashboard.core.staked_lps(inst_29281,inst_29284);
var inst_29286 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["my-unis:",inst_29285__$1], 0));
var inst_29287 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_29318__$1 = (function (){var statearr_29323 = state_29318;
(statearr_29323[(14)] = inst_29285__$1);

(statearr_29323[(15)] = inst_29286);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(4),inst_29287);
} else {
if((state_val_29319 === (2))){
var inst_29281 = (state_29318[(2)]);
var inst_29282 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_29318__$1 = (function (){var statearr_29324 = state_29318;
(statearr_29324[(13)] = inst_29281);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(3),inst_29282);
} else {
if((state_val_29319 === (9))){
var inst_29301 = (state_29318[(7)]);
var inst_29307 = (state_29318[(16)]);
var inst_29293 = (state_29318[(17)]);
var inst_29289 = (state_29318[(10)]);
var inst_29285 = (state_29318[(14)]);
var inst_29297 = (state_29318[(8)]);
var inst_29310 = (state_29318[(2)]);
var inst_29311 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tpr",inst_29310], 0));
var inst_29312 = lpdashboard.core.staked_positions(inst_29310,inst_29289,inst_29285,inst_29293);
var inst_29313 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_29314 = [inst_29301,inst_29297,inst_29307];
var inst_29315 = cljs.core.PersistentHashMap.fromArrays(inst_29313,inst_29314);
var inst_29316 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_29312,inst_29315);
var state_29318__$1 = (function (){var statearr_29325 = state_29318;
(statearr_29325[(18)] = inst_29311);

return statearr_29325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29318__$1,inst_29316);
} else {
if((state_val_29319 === (5))){
var inst_29293 = (state_29318[(17)]);
var inst_29293__$1 = (state_29318[(2)]);
var inst_29294 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lp-symbols:",inst_29293__$1], 0));
var inst_29295 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_29318__$1 = (function (){var statearr_29326 = state_29318;
(statearr_29326[(19)] = inst_29294);

(statearr_29326[(17)] = inst_29293__$1);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(6),inst_29295);
} else {
if((state_val_29319 === (8))){
var inst_29305 = (state_29318[(2)]);
var inst_29306 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rtr:",inst_29305], 0));
var inst_29307 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_29305);
var inst_29308 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_29318__$1 = (function (){var statearr_29327 = state_29318;
(statearr_29327[(20)] = inst_29306);

(statearr_29327[(16)] = inst_29307);

return statearr_29327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29318__$1,(9),inst_29308);
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
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto____0 = (function (){
var statearr_29328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29328[(0)] = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto__);

(statearr_29328[(1)] = (1));

return statearr_29328;
});
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto____1 = (function (state_29318){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29318);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29329){var ex__27579__auto__ = e29329;
var statearr_29330_30329 = state_29318;
(statearr_29330_30329[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29318[(4)]))){
var statearr_29331_30330 = state_29318;
(statearr_29331_30330[(1)] = cljs.core.first((state_29318[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30331 = state_29318;
state_29318 = G__30331;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto__ = function(state_29318){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto____1.call(this,state_29318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29332 = f__27668__auto__();
(statearr_29332[(6)] = c__27667__auto__);

return statearr_29332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_staked_lp_positions_lpbar = (function lpdashboard$core$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29353 = (state_29384[(2)]);
var inst_29354 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_29384__$1 = (function (){var statearr_29386 = state_29384;
(statearr_29386[(7)] = inst_29353);

return statearr_29386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(8),inst_29354);
} else {
if((state_val_29385 === (1))){
var inst_29333 = (state_29384[(8)]);
var inst_29333__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.lpbar_abi,staking_address);
var inst_29334 = inst_29333__$1.lpBalance(user_address);
var inst_29335 = cljs.core.async.interop.p__GT_c(inst_29334);
var state_29384__$1 = (function (){var statearr_29387 = state_29384;
(statearr_29387[(8)] = inst_29333__$1);

return statearr_29387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(2),inst_29335);
} else {
if((state_val_29385 === (4))){
var inst_29337 = (state_29384[(9)]);
var state_29384__$1 = state_29384;
var statearr_29388_30332 = state_29384__$1;
(statearr_29388_30332[(2)] = inst_29337);

(statearr_29388_30332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (15))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (13))){
var inst_29350 = (state_29384[(10)]);
var inst_29356 = (state_29384[(11)]);
var inst_29353 = (state_29384[(7)]);
var inst_29347 = (state_29384[(12)]);
var inst_29375 = lpdashboard.core.staked_positions(inst_29356,inst_29350,inst_29347,inst_29353);
var state_29384__$1 = state_29384;
var statearr_29389_30333 = state_29384__$1;
(statearr_29389_30333[(2)] = inst_29375);

(statearr_29389_30333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var inst_29350 = (state_29384[(2)]);
var inst_29351 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_29384__$1 = (function (){var statearr_29390 = state_29384;
(statearr_29390[(10)] = inst_29350);

return statearr_29390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(7),inst_29351);
} else {
if((state_val_29385 === (3))){
var inst_29337 = (state_29384[(9)]);
var inst_29344 = (function(){throw inst_29337})();
var state_29384__$1 = state_29384;
var statearr_29391_30334 = state_29384__$1;
(statearr_29391_30334[(2)] = inst_29344);

(statearr_29391_30334[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (12))){
var inst_29370 = (state_29384[(13)]);
var inst_29370__$1 = (state_29384[(2)]);
var inst_29371 = clojure.string.lower_case(inst_29370__$1);
var inst_29372 = clojure.string.lower_case(lp_address);
var inst_29373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29371,inst_29372);
var state_29384__$1 = (function (){var statearr_29392 = state_29384;
(statearr_29392[(13)] = inst_29370__$1);

return statearr_29392;
})();
if(inst_29373){
var statearr_29393_30335 = state_29384__$1;
(statearr_29393_30335[(1)] = (13));

} else {
var statearr_29394_30336 = state_29384__$1;
(statearr_29394_30336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (2))){
var inst_29337 = (state_29384[(9)]);
var inst_29337__$1 = (state_29384[(2)]);
var inst_29338 = (inst_29337__$1 instanceof cljs.core.ExceptionInfo);
var inst_29339 = cljs.core.ex_data(inst_29337__$1);
var inst_29340 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29339);
var inst_29341 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29340,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29342 = ((inst_29338) && (inst_29341));
var state_29384__$1 = (function (){var statearr_29395 = state_29384;
(statearr_29395[(9)] = inst_29337__$1);

return statearr_29395;
})();
if(cljs.core.truth_(inst_29342)){
var statearr_29396_30337 = state_29384__$1;
(statearr_29396_30337[(1)] = (3));

} else {
var statearr_29397_30338 = state_29384__$1;
(statearr_29397_30338[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (11))){
var inst_29360 = (state_29384[(14)]);
var state_29384__$1 = state_29384;
var statearr_29398_30339 = state_29384__$1;
(statearr_29398_30339[(2)] = inst_29360);

(statearr_29398_30339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (9))){
var inst_29360 = (state_29384[(14)]);
var inst_29360__$1 = (state_29384[(2)]);
var inst_29361 = (inst_29360__$1 instanceof cljs.core.ExceptionInfo);
var inst_29362 = cljs.core.ex_data(inst_29360__$1);
var inst_29363 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29362);
var inst_29364 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29363,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29365 = ((inst_29361) && (inst_29364));
var state_29384__$1 = (function (){var statearr_29399 = state_29384;
(statearr_29399[(14)] = inst_29360__$1);

return statearr_29399;
})();
if(cljs.core.truth_(inst_29365)){
var statearr_29400_30340 = state_29384__$1;
(statearr_29400_30340[(1)] = (10));

} else {
var statearr_29401_30341 = state_29384__$1;
(statearr_29401_30341[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var inst_29347 = (state_29384[(2)]);
var inst_29348 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_29384__$1 = (function (){var statearr_29402 = state_29384;
(statearr_29402[(12)] = inst_29347);

return statearr_29402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(6),inst_29348);
} else {
if((state_val_29385 === (14))){
var inst_29370 = (state_29384[(13)]);
var inst_29377 = console.log("lp addresses do not match:",staking_address,lp_address,inst_29370);
var inst_29378 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_29379 = [(0),(0)];
var inst_29380 = cljs.core.PersistentHashMap.fromArrays(inst_29378,inst_29379);
var state_29384__$1 = (function (){var statearr_29403 = state_29384;
(statearr_29403[(15)] = inst_29377);

return statearr_29403;
})();
var statearr_29404_30342 = state_29384__$1;
(statearr_29404_30342[(2)] = inst_29380);

(statearr_29404_30342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var inst_29360 = (state_29384[(14)]);
var inst_29367 = (function(){throw inst_29360})();
var state_29384__$1 = state_29384;
var statearr_29405_30343 = state_29384__$1;
(statearr_29405_30343[(2)] = inst_29367);

(statearr_29405_30343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29333 = (state_29384[(8)]);
var inst_29356 = (state_29384[(2)]);
var inst_29357 = inst_29333.lp();
var inst_29358 = cljs.core.async.interop.p__GT_c(inst_29357);
var state_29384__$1 = (function (){var statearr_29406 = state_29384;
(statearr_29406[(11)] = inst_29356);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29384__$1,(9),inst_29358);
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
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto____0 = (function (){
var statearr_29407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29407[(0)] = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto__);

(statearr_29407[(1)] = (1));

return statearr_29407;
});
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto____1 = (function (state_29384){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29384);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29408){var ex__27579__auto__ = e29408;
var statearr_29409_30344 = state_29384;
(statearr_29409_30344[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29384[(4)]))){
var statearr_29410_30345 = state_29384;
(statearr_29410_30345[(1)] = cljs.core.first((state_29384[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_29384;
state_29384 = G__30346;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29411 = f__27668__auto__();
(statearr_29411[(6)] = c__27667__auto__);

return statearr_29411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_staked_lp_positions_sashimi_plate = (function lpdashboard$core$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29493){
var state_val_29494 = (state_29493[(1)]);
if((state_val_29494 === (7))){
var inst_29441 = (state_29493[(7)]);
var inst_29441__$1 = (state_29493[(2)]);
var inst_29442 = (inst_29441__$1 instanceof cljs.core.ExceptionInfo);
var inst_29443 = cljs.core.ex_data(inst_29441__$1);
var inst_29444 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29443);
var inst_29445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29444,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29446 = ((inst_29442) && (inst_29445));
var state_29493__$1 = (function (){var statearr_29495 = state_29493;
(statearr_29495[(7)] = inst_29441__$1);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29446)){
var statearr_29496_30347 = state_29493__$1;
(statearr_29496_30347[(1)] = (8));

} else {
var statearr_29497_30348 = state_29493__$1;
(statearr_29497_30348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (20))){
var inst_29436 = (state_29493[(8)]);
var inst_29467 = (state_29493[(9)]);
var inst_29486 = console.log("lp addresses do not match:",inst_29436,lp_address,inst_29467);
var inst_29487 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_29488 = [(0),(0)];
var inst_29489 = cljs.core.PersistentHashMap.fromArrays(inst_29487,inst_29488);
var state_29493__$1 = (function (){var statearr_29498 = state_29493;
(statearr_29498[(10)] = inst_29486);

return statearr_29498;
})();
var statearr_29499_30349 = state_29493__$1;
(statearr_29499_30349[(2)] = inst_29489);

(statearr_29499_30349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (1))){
var inst_29412 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,staking_address);
var inst_29413 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address);
var state_29493__$1 = (function (){var statearr_29500 = state_29493;
(statearr_29500[(11)] = inst_29412);

return statearr_29500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(2),inst_29413);
} else {
if((state_val_29494 === (4))){
var inst_29421 = (state_29493[(12)]);
var inst_29428 = (function(){throw inst_29421})();
var state_29493__$1 = state_29493;
var statearr_29501_30350 = state_29493__$1;
(statearr_29501_30350[(2)] = inst_29428);

(statearr_29501_30350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (15))){
var inst_29470 = (state_29493[(2)]);
var inst_29471 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_29493__$1 = (function (){var statearr_29502 = state_29493;
(statearr_29502[(13)] = inst_29470);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(16),inst_29471);
} else {
if((state_val_29494 === (21))){
var inst_29491 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29493__$1,inst_29491);
} else {
if((state_val_29494 === (13))){
var inst_29456 = (state_29493[(14)]);
var state_29493__$1 = state_29493;
var statearr_29503_30351 = state_29493__$1;
(statearr_29503_30351[(2)] = inst_29456);

(statearr_29503_30351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (6))){
var inst_29436 = (state_29493[(8)]);
var inst_29434 = (state_29493[(15)]);
var inst_29415 = (state_29493[(16)]);
var inst_29437 = (state_29493[(17)]);
var inst_29431 = (state_29493[(2)]);
var inst_29432 = lpdashboard.ethereum.sashimi_iface.parseTransaction(inst_29431);
var inst_29433 = inst_29432.args;
var inst_29434__$1 = inst_29433.pid;
var inst_29435 = cljs.core.first(inst_29415);
var inst_29436__$1 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_29435);
var inst_29437__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,inst_29436__$1);
var inst_29438 = inst_29437__$1.userInfo(inst_29434__$1,user_address);
var inst_29439 = cljs.core.async.interop.p__GT_c(inst_29438);
var state_29493__$1 = (function (){var statearr_29504 = state_29493;
(statearr_29504[(8)] = inst_29436__$1);

(statearr_29504[(15)] = inst_29434__$1);

(statearr_29504[(17)] = inst_29437__$1);

return statearr_29504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(7),inst_29439);
} else {
if((state_val_29494 === (17))){
var inst_29476 = (state_29493[(2)]);
var inst_29477 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_29493__$1 = (function (){var statearr_29505 = state_29493;
(statearr_29505[(18)] = inst_29476);

return statearr_29505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(18),inst_29477);
} else {
if((state_val_29494 === (3))){
var inst_29421 = (state_29493[(12)]);
var inst_29421__$1 = (state_29493[(2)]);
var inst_29422 = (inst_29421__$1 instanceof cljs.core.ExceptionInfo);
var inst_29423 = cljs.core.ex_data(inst_29421__$1);
var inst_29424 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29423);
var inst_29425 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29424,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29426 = ((inst_29422) && (inst_29425));
var state_29493__$1 = (function (){var statearr_29506 = state_29493;
(statearr_29506[(12)] = inst_29421__$1);

return statearr_29506;
})();
if(cljs.core.truth_(inst_29426)){
var statearr_29507_30352 = state_29493__$1;
(statearr_29507_30352[(1)] = (4));

} else {
var statearr_29508_30353 = state_29493__$1;
(statearr_29508_30353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (12))){
var inst_29456 = (state_29493[(14)]);
var inst_29463 = (function(){throw inst_29456})();
var state_29493__$1 = state_29493;
var statearr_29509_30354 = state_29493__$1;
(statearr_29509_30354[(2)] = inst_29463);

(statearr_29509_30354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (2))){
var inst_29415 = (state_29493[(16)]);
var inst_29415__$1 = (state_29493[(2)]);
var inst_29416 = cljs.core.first(inst_29415__$1);
var inst_29417 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_29416);
var inst_29418 = lpdashboard.core.provider.getTransaction(inst_29417);
var inst_29419 = cljs.core.async.interop.p__GT_c(inst_29418);
var state_29493__$1 = (function (){var statearr_29510 = state_29493;
(statearr_29510[(16)] = inst_29415__$1);

return statearr_29510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(3),inst_29419);
} else {
if((state_val_29494 === (19))){
var inst_29479 = (state_29493[(19)]);
var inst_29476 = (state_29493[(18)]);
var inst_29473 = (state_29493[(20)]);
var inst_29452 = (state_29493[(21)]);
var inst_29484 = lpdashboard.core.staked_positions(inst_29479,inst_29473,inst_29452,inst_29476);
var state_29493__$1 = state_29493;
var statearr_29511_30355 = state_29493__$1;
(statearr_29511_30355[(2)] = inst_29484);

(statearr_29511_30355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (11))){
var inst_29456 = (state_29493[(14)]);
var inst_29456__$1 = (state_29493[(2)]);
var inst_29457 = (inst_29456__$1 instanceof cljs.core.ExceptionInfo);
var inst_29458 = cljs.core.ex_data(inst_29456__$1);
var inst_29459 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29458);
var inst_29460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29459,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29461 = ((inst_29457) && (inst_29460));
var state_29493__$1 = (function (){var statearr_29512 = state_29493;
(statearr_29512[(14)] = inst_29456__$1);

return statearr_29512;
})();
if(cljs.core.truth_(inst_29461)){
var statearr_29513_30356 = state_29493__$1;
(statearr_29513_30356[(1)] = (12));

} else {
var statearr_29514_30357 = state_29493__$1;
(statearr_29514_30357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (9))){
var inst_29441 = (state_29493[(7)]);
var state_29493__$1 = state_29493;
var statearr_29515_30358 = state_29493__$1;
(statearr_29515_30358[(2)] = inst_29441);

(statearr_29515_30358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (5))){
var inst_29421 = (state_29493[(12)]);
var state_29493__$1 = state_29493;
var statearr_29516_30359 = state_29493__$1;
(statearr_29516_30359[(2)] = inst_29421);

(statearr_29516_30359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (14))){
var inst_29466 = (state_29493[(2)]);
var inst_29467 = cljs.core.first(inst_29466);
var inst_29468 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_29493__$1 = (function (){var statearr_29517 = state_29493;
(statearr_29517[(9)] = inst_29467);

return statearr_29517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(15),inst_29468);
} else {
if((state_val_29494 === (16))){
var inst_29473 = (state_29493[(2)]);
var inst_29474 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_29493__$1 = (function (){var statearr_29518 = state_29493;
(statearr_29518[(20)] = inst_29473);

return statearr_29518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(17),inst_29474);
} else {
if((state_val_29494 === (10))){
var inst_29434 = (state_29493[(15)]);
var inst_29437 = (state_29493[(17)]);
var inst_29451 = (state_29493[(2)]);
var inst_29452 = cljs.core.first(inst_29451);
var inst_29453 = inst_29437.poolInfo(inst_29434);
var inst_29454 = cljs.core.async.interop.p__GT_c(inst_29453);
var state_29493__$1 = (function (){var statearr_29519 = state_29493;
(statearr_29519[(21)] = inst_29452);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29493__$1,(11),inst_29454);
} else {
if((state_val_29494 === (18))){
var inst_29467 = (state_29493[(9)]);
var inst_29479 = (state_29493[(2)]);
var inst_29480 = clojure.string.lower_case(inst_29467);
var inst_29481 = clojure.string.lower_case(lp_address);
var inst_29482 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29480,inst_29481);
var state_29493__$1 = (function (){var statearr_29520 = state_29493;
(statearr_29520[(19)] = inst_29479);

return statearr_29520;
})();
if(inst_29482){
var statearr_29521_30360 = state_29493__$1;
(statearr_29521_30360[(1)] = (19));

} else {
var statearr_29522_30361 = state_29493__$1;
(statearr_29522_30361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (8))){
var inst_29441 = (state_29493[(7)]);
var inst_29448 = (function(){throw inst_29441})();
var state_29493__$1 = state_29493;
var statearr_29523_30362 = state_29493__$1;
(statearr_29523_30362[(2)] = inst_29448);

(statearr_29523_30362[(1)] = (10));


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
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto____0 = (function (){
var statearr_29524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29524[(0)] = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto__);

(statearr_29524[(1)] = (1));

return statearr_29524;
});
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto____1 = (function (state_29493){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29493);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29525){var ex__27579__auto__ = e29525;
var statearr_29526_30363 = state_29493;
(statearr_29526_30363[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29493[(4)]))){
var statearr_29527_30364 = state_29493;
(statearr_29527_30364[(1)] = cljs.core.first((state_29493[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30365 = state_29493;
state_29493 = G__30365;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto__ = function(state_29493){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto____1.call(this,state_29493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29528 = f__27668__auto__();
(statearr_29528[(6)] = c__27667__auto__);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (7))){
var inst_29556 = (state_29706[(7)]);
var inst_29563 = (function(){throw inst_29556})();
var state_29706__$1 = state_29706;
var statearr_29708_30366 = state_29706__$1;
(statearr_29708_30366[(2)] = inst_29563);

(statearr_29708_30366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (20))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29709_30367 = state_29706__$1;
(statearr_29709_30367[(2)] = inst_29702);

(statearr_29709_30367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (27))){
var inst_29618 = (state_29706[(8)]);
var state_29706__$1 = state_29706;
var statearr_29710_30368 = state_29706__$1;
(statearr_29710_30368[(2)] = inst_29618);

(statearr_29710_30368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (1))){
var inst_29535 = (function (){return (function (p1__29529_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__29529_SHARP_.transactionHash);
});
})();
var inst_29536 = lpdashboard.core.provider.getLogs(staked_filter);
var inst_29537 = cljs.core.async.interop.p__GT_c(inst_29536);
var state_29706__$1 = (function (){var statearr_29711 = state_29706;
(statearr_29711[(9)] = inst_29535);

return statearr_29711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(2),inst_29537);
} else {
if((state_val_29707 === (24))){
var inst_29613 = (state_29706[(10)]);
var inst_29598 = (state_29706[(11)]);
var inst_29612 = (state_29706[(2)]);
var inst_29613__$1 = cljs.core.first(inst_29612);
var inst_29614 = lpdashboard.utils.ebn__GT_bn(inst_29613__$1,(18));
var inst_29615 = cheff_contract.poolInfo(inst_29598);
var inst_29616 = cljs.core.async.interop.p__GT_c(inst_29615);
var state_29706__$1 = (function (){var statearr_29712 = state_29706;
(statearr_29712[(12)] = inst_29614);

(statearr_29712[(10)] = inst_29613__$1);

return statearr_29712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(25),inst_29616);
} else {
if((state_val_29707 === (39))){
var inst_29632 = (state_29706[(13)]);
var inst_29648 = (state_29706[(14)]);
var inst_29614 = (state_29706[(12)]);
var inst_29613 = (state_29706[(10)]);
var inst_29635 = (state_29706[(15)]);
var inst_29660 = (state_29706[(16)]);
var inst_29656 = (state_29706[(17)]);
var inst_29641 = (state_29706[(18)]);
var inst_29638 = (state_29706[(19)]);
var inst_29568 = (state_29706[(20)]);
var inst_29658 = (state_29706[(21)]);
var inst_29629 = (state_29706[(22)]);
var inst_29654 = (state_29706[(23)]);
var inst_29551 = (state_29706[(24)]);
var inst_29651 = (state_29706[(25)]);
var inst_29598 = (state_29706[(11)]);
var inst_29668 = (state_29706[(26)]);
var inst_29628 = (state_29706[(27)]);
var inst_29597 = (state_29706[(28)]);
var inst_29594 = (state_29706[(29)]);
var inst_29645 = (state_29706[(30)]);
var inst_29671 = (state_29706[(2)]);
var inst_29672 = (function (){var staking_pool_lp_address = inst_29629;
var lp_symbols = inst_29635;
var lp_transfers_in = inst_29654;
var rewards_token = inst_29641;
var pool_pid = inst_29598;
var deposit_data = inst_29597;
var lp_deposits = inst_29658;
var my_lps_staked_SINGLEQUOTE_ = inst_29614;
var my_lps_staked = inst_29613;
var all_staking_deposits = inst_29651;
var staked = inst_29551;
var total_pool_reserves = inst_29638;
var pids = inst_29660;
var pool_info = inst_29628;
var reward_transfers = inst_29648;
var staked2 = inst_29568;
var total_unis = inst_29632;
var lp_decimals = (18);
var lp_transfers_hashes = inst_29656;
var all_staking_withdrawals = inst_29671;
var pid = inst_29668;
var rewards_earned = inst_29645;
var deposit = inst_29594;
return (function (p1__29533_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__29533_SHARP_),pid);
});
})();
var inst_29673 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_29671,inst_29651);
var inst_29674 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_29672,inst_29673);
var inst_29675 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_29674);
var inst_29676 = cljs.core.set(inst_29675);
var inst_29677 = (function (){var staking_pool_lp_address = inst_29629;
var lp_symbols = inst_29635;
var lp_transfers_in = inst_29654;
var rewards_token = inst_29641;
var pool_pid = inst_29598;
var deposit_data = inst_29597;
var lp_deposits = inst_29658;
var my_lps_staked_SINGLEQUOTE_ = inst_29614;
var my_lps_staked = inst_29613;
var all_staking_deposits = inst_29651;
var staked = inst_29551;
var total_pool_reserves = inst_29638;
var pids = inst_29660;
var pool_info = inst_29628;
var reward_transfers = inst_29648;
var staked2 = inst_29568;
var total_unis = inst_29632;
var relevant_txids = inst_29676;
var lp_decimals = (18);
var lp_transfers_hashes = inst_29656;
var all_staking_withdrawals = inst_29671;
var pid = inst_29668;
var rewards_earned = inst_29645;
var deposit = inst_29594;
return (function (p1__29534_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__29534_SHARP_));
});
})();
var inst_29678 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_29677,inst_29648);
var inst_29679 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_29678);
var inst_29680 = clojure.string.lower_case(inst_29629);
var inst_29681 = clojure.string.lower_case(lp_address);
var inst_29682 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29680,inst_29681);
var state_29706__$1 = (function (){var statearr_29713 = state_29706;
(statearr_29713[(31)] = inst_29679);

return statearr_29713;
})();
if(inst_29682){
var statearr_29714_30369 = state_29706__$1;
(statearr_29714_30369[(1)] = (40));

} else {
var statearr_29715_30370 = state_29706__$1;
(statearr_29715_30370[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (4))){
var inst_29539 = (state_29706[(32)]);
var state_29706__$1 = state_29706;
var statearr_29716_30371 = state_29706__$1;
(statearr_29716_30371[(2)] = inst_29539);

(statearr_29716_30371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (15))){
var inst_29582 = (state_29706[(33)]);
var inst_29589 = (function(){throw inst_29582})();
var state_29706__$1 = state_29706;
var statearr_29717_30372 = state_29706__$1;
(statearr_29717_30372[(2)] = inst_29589);

(statearr_29717_30372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (21))){
var inst_29602 = (state_29706[(34)]);
var inst_29602__$1 = (state_29706[(2)]);
var inst_29603 = (inst_29602__$1 instanceof cljs.core.ExceptionInfo);
var inst_29604 = cljs.core.ex_data(inst_29602__$1);
var inst_29605 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29604);
var inst_29606 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29605,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29607 = ((inst_29603) && (inst_29606));
var state_29706__$1 = (function (){var statearr_29718 = state_29706;
(statearr_29718[(34)] = inst_29602__$1);

return statearr_29718;
})();
if(cljs.core.truth_(inst_29607)){
var statearr_29719_30373 = state_29706__$1;
(statearr_29719_30373[(1)] = (22));

} else {
var statearr_29720_30374 = state_29706__$1;
(statearr_29720_30374[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (31))){
var inst_29638 = (state_29706[(2)]);
var inst_29639 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_29706__$1 = (function (){var statearr_29721 = state_29706;
(statearr_29721[(19)] = inst_29638);

return statearr_29721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(32),inst_29639);
} else {
if((state_val_29707 === (32))){
var inst_29641 = (state_29706[(18)]);
var inst_29641__$1 = (state_29706[(2)]);
var inst_29642 = [new cljs.core.Keyword(null,"qty","qty",155560951)];
var inst_29643 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_29644 = [inst_29643];
var inst_29645 = cljs.core.PersistentHashMap.fromArrays(inst_29642,inst_29644);
var inst_29646 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_29641__$1,staking_address,user_address);
var state_29706__$1 = (function (){var statearr_29722 = state_29706;
(statearr_29722[(18)] = inst_29641__$1);

(statearr_29722[(30)] = inst_29645);

return statearr_29722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(33),inst_29646);
} else {
if((state_val_29707 === (40))){
var inst_29632 = (state_29706[(13)]);
var inst_29614 = (state_29706[(12)]);
var inst_29635 = (state_29706[(15)]);
var inst_29679 = (state_29706[(31)]);
var inst_29641 = (state_29706[(18)]);
var inst_29638 = (state_29706[(19)]);
var inst_29645 = (state_29706[(30)]);
var inst_29684 = lpdashboard.core.staked_positions(inst_29638,inst_29632,inst_29614,inst_29635);
var inst_29685 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_29686 = [inst_29645,inst_29641,inst_29679];
var inst_29687 = cljs.core.PersistentHashMap.fromArrays(inst_29685,inst_29686);
var inst_29688 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_29684,inst_29687);
var state_29706__$1 = state_29706;
var statearr_29723_30375 = state_29706__$1;
(statearr_29723_30375[(2)] = inst_29688);

(statearr_29723_30375[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (33))){
var inst_29648 = (state_29706[(2)]);
var inst_29649 = (lpdashboard.core._LT_user_token_deposits.cljs$core$IFn$_invoke$arity$3 ? lpdashboard.core._LT_user_token_deposits.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address) : lpdashboard.core._LT_user_token_deposits.call(null,lpdashboard.core.provider,staking_address,user_address));
var state_29706__$1 = (function (){var statearr_29724 = state_29706;
(statearr_29724[(14)] = inst_29648);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(34),inst_29649);
} else {
if((state_val_29707 === (13))){
var inst_29576 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29725_30376 = state_29706__$1;
(statearr_29725_30376[(2)] = inst_29576);

(statearr_29725_30376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (22))){
var inst_29602 = (state_29706[(34)]);
var inst_29609 = (function(){throw inst_29602})();
var state_29706__$1 = state_29706;
var statearr_29726_30377 = state_29706__$1;
(statearr_29726_30377[(2)] = inst_29609);

(statearr_29726_30377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (36))){
var inst_29660 = (state_29706[(16)]);
var inst_29664 = cljs.core.first(inst_29660);
var state_29706__$1 = state_29706;
var statearr_29727_30378 = state_29706__$1;
(statearr_29727_30378[(2)] = inst_29664);

(statearr_29727_30378[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (41))){
var inst_29632 = (state_29706[(13)]);
var inst_29635 = (state_29706[(15)]);
var inst_29679 = (state_29706[(31)]);
var inst_29641 = (state_29706[(18)]);
var inst_29638 = (state_29706[(19)]);
var inst_29629 = (state_29706[(22)]);
var inst_29598 = (state_29706[(11)]);
var inst_29645 = (state_29706[(30)]);
var inst_29690 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29598);
var inst_29691 = console.log("lp addresses do not match:",staking_address,lp_address,inst_29629,"pid",inst_29690);
var inst_29692 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_29693 = lpdashboard.core.staked_positions(inst_29638,inst_29632,inst_29692,inst_29635);
var inst_29694 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_29695 = [inst_29645,inst_29641,inst_29679];
var inst_29696 = cljs.core.PersistentHashMap.fromArrays(inst_29694,inst_29695);
var inst_29697 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_29693,inst_29696);
var state_29706__$1 = (function (){var statearr_29728 = state_29706;
(statearr_29728[(35)] = inst_29691);

return statearr_29728;
})();
var statearr_29729_30379 = state_29706__$1;
(statearr_29729_30379[(2)] = inst_29697);

(statearr_29729_30379[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (29))){
var inst_29632 = (state_29706[(2)]);
var inst_29633 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_29706__$1 = (function (){var statearr_29730 = state_29706;
(statearr_29730[(13)] = inst_29632);

return statearr_29730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(30),inst_29633);
} else {
if((state_val_29707 === (6))){
var inst_29556 = (state_29706[(7)]);
var inst_29556__$1 = (state_29706[(2)]);
var inst_29557 = (inst_29556__$1 instanceof cljs.core.ExceptionInfo);
var inst_29558 = cljs.core.ex_data(inst_29556__$1);
var inst_29559 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29558);
var inst_29560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29559,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29561 = ((inst_29557) && (inst_29560));
var state_29706__$1 = (function (){var statearr_29731 = state_29706;
(statearr_29731[(7)] = inst_29556__$1);

return statearr_29731;
})();
if(cljs.core.truth_(inst_29561)){
var statearr_29732_30380 = state_29706__$1;
(statearr_29732_30380[(1)] = (7));

} else {
var statearr_29733_30381 = state_29706__$1;
(statearr_29733_30381[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (28))){
var inst_29628 = (state_29706[(27)]);
var inst_29628__$1 = (state_29706[(2)]);
var inst_29629 = cljs.core.first(inst_29628__$1);
var inst_29630 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_29706__$1 = (function (){var statearr_29734 = state_29706;
(statearr_29734[(22)] = inst_29629);

(statearr_29734[(27)] = inst_29628__$1);

return statearr_29734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(29),inst_29630);
} else {
if((state_val_29707 === (25))){
var inst_29618 = (state_29706[(8)]);
var inst_29618__$1 = (state_29706[(2)]);
var inst_29619 = (inst_29618__$1 instanceof cljs.core.ExceptionInfo);
var inst_29620 = cljs.core.ex_data(inst_29618__$1);
var inst_29621 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29620);
var inst_29622 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29621,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29623 = ((inst_29619) && (inst_29622));
var state_29706__$1 = (function (){var statearr_29735 = state_29706;
(statearr_29735[(8)] = inst_29618__$1);

return statearr_29735;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29736_30382 = state_29706__$1;
(statearr_29736_30382[(1)] = (26));

} else {
var statearr_29737_30383 = state_29706__$1;
(statearr_29737_30383[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (34))){
var inst_29651 = (state_29706[(2)]);
var inst_29652 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,lp_address,user_address,staking_address);
var state_29706__$1 = (function (){var statearr_29738 = state_29706;
(statearr_29738[(25)] = inst_29651);

return statearr_29738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(35),inst_29652);
} else {
if((state_val_29707 === (17))){
var inst_29578 = (state_29706[(36)]);
var inst_29594 = (state_29706[(29)]);
var inst_29592 = (state_29706[(2)]);
var inst_29593 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_29578,inst_29592);
var inst_29594__$1 = cljs.core.first(inst_29593);
var inst_29595 = (inst_29594__$1 == null);
var state_29706__$1 = (function (){var statearr_29739 = state_29706;
(statearr_29739[(29)] = inst_29594__$1);

return statearr_29739;
})();
if(cljs.core.truth_(inst_29595)){
var statearr_29740_30384 = state_29706__$1;
(statearr_29740_30384[(1)] = (18));

} else {
var statearr_29741_30385 = state_29706__$1;
(statearr_29741_30385[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (3))){
var inst_29539 = (state_29706[(32)]);
var inst_29546 = (function(){throw inst_29539})();
var state_29706__$1 = state_29706;
var statearr_29742_30386 = state_29706__$1;
(statearr_29742_30386[(2)] = inst_29546);

(statearr_29742_30386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (12))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (2))){
var inst_29539 = (state_29706[(32)]);
var inst_29539__$1 = (state_29706[(2)]);
var inst_29540 = (inst_29539__$1 instanceof cljs.core.ExceptionInfo);
var inst_29541 = cljs.core.ex_data(inst_29539__$1);
var inst_29542 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29541);
var inst_29543 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29542,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29544 = ((inst_29540) && (inst_29543));
var state_29706__$1 = (function (){var statearr_29743 = state_29706;
(statearr_29743[(32)] = inst_29539__$1);

return statearr_29743;
})();
if(cljs.core.truth_(inst_29544)){
var statearr_29744_30387 = state_29706__$1;
(statearr_29744_30387[(1)] = (3));

} else {
var statearr_29745_30388 = state_29706__$1;
(statearr_29745_30388[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (23))){
var inst_29602 = (state_29706[(34)]);
var state_29706__$1 = state_29706;
var statearr_29746_30389 = state_29706__$1;
(statearr_29746_30389[(2)] = inst_29602);

(statearr_29746_30389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (35))){
var inst_29632 = (state_29706[(13)]);
var inst_29648 = (state_29706[(14)]);
var inst_29614 = (state_29706[(12)]);
var inst_29613 = (state_29706[(10)]);
var inst_29635 = (state_29706[(15)]);
var inst_29660 = (state_29706[(16)]);
var inst_29656 = (state_29706[(17)]);
var inst_29641 = (state_29706[(18)]);
var inst_29638 = (state_29706[(19)]);
var inst_29568 = (state_29706[(20)]);
var inst_29658 = (state_29706[(21)]);
var inst_29629 = (state_29706[(22)]);
var inst_29654 = (state_29706[(23)]);
var inst_29551 = (state_29706[(24)]);
var inst_29651 = (state_29706[(25)]);
var inst_29598 = (state_29706[(11)]);
var inst_29628 = (state_29706[(27)]);
var inst_29597 = (state_29706[(28)]);
var inst_29594 = (state_29706[(29)]);
var inst_29645 = (state_29706[(30)]);
var inst_29654__$1 = (state_29706[(2)]);
var inst_29655 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_29654__$1);
var inst_29656__$1 = cljs.core.set(inst_29655);
var inst_29657 = (function (){var staking_pool_lp_address = inst_29629;
var lp_symbols = inst_29635;
var lp_transfers_in = inst_29654__$1;
var rewards_token = inst_29641;
var pool_pid = inst_29598;
var deposit_data = inst_29597;
var my_lps_staked_SINGLEQUOTE_ = inst_29614;
var my_lps_staked = inst_29613;
var all_staking_deposits = inst_29651;
var staked = inst_29551;
var total_pool_reserves = inst_29638;
var pool_info = inst_29628;
var reward_transfers = inst_29648;
var staked2 = inst_29568;
var total_unis = inst_29632;
var lp_decimals = (18);
var lp_transfers_hashes = inst_29656__$1;
var rewards_earned = inst_29645;
var deposit = inst_29594;
return (function (p1__29532_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__29532_SHARP_));
});
})();
var inst_29658__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_29657,inst_29651);
var inst_29659 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_29658__$1);
var inst_29660__$1 = cljs.core.set(inst_29659);
var inst_29661 = cljs.core.count(inst_29660__$1);
var inst_29662 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_29661,(1));
var state_29706__$1 = (function (){var statearr_29747 = state_29706;
(statearr_29747[(16)] = inst_29660__$1);

(statearr_29747[(17)] = inst_29656__$1);

(statearr_29747[(21)] = inst_29658__$1);

(statearr_29747[(23)] = inst_29654__$1);

return statearr_29747;
})();
if(inst_29662){
var statearr_29748_30390 = state_29706__$1;
(statearr_29748_30390[(1)] = (36));

} else {
var statearr_29749_30391 = state_29706__$1;
(statearr_29749_30391[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (19))){
var state_29706__$1 = state_29706;
var statearr_29750_30392 = state_29706__$1;
(statearr_29750_30392[(2)] = null);

(statearr_29750_30392[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (11))){
var inst_29568 = (state_29706[(20)]);
var inst_29551 = (state_29706[(24)]);
var inst_29578 = (function (){var staked = inst_29551;
var staked2 = inst_29568;
return (function (p1__29531_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__29531_SHARP_.transactionHash);
});
})();
var inst_29579 = lpdashboard.core.provider.getLogs(deposit_filter);
var inst_29580 = cljs.core.async.interop.p__GT_c(inst_29579);
var state_29706__$1 = (function (){var statearr_29751 = state_29706;
(statearr_29751[(36)] = inst_29578);

return statearr_29751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(14),inst_29580);
} else {
if((state_val_29707 === (9))){
var inst_29552 = (state_29706[(37)]);
var inst_29568 = (state_29706[(20)]);
var inst_29551 = (state_29706[(24)]);
var inst_29566 = (state_29706[(2)]);
var inst_29567 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_29552,inst_29566);
var inst_29568__$1 = cljs.core.first(inst_29567);
var inst_29569 = (inst_29551 == null);
var inst_29570 = (inst_29568__$1 == null);
var inst_29571 = ((inst_29569) && (inst_29570));
var inst_29572 = cljs.core.not(inst_29571);
var state_29706__$1 = (function (){var statearr_29752 = state_29706;
(statearr_29752[(20)] = inst_29568__$1);

return statearr_29752;
})();
if(inst_29572){
var statearr_29753_30393 = state_29706__$1;
(statearr_29753_30393[(1)] = (10));

} else {
var statearr_29754_30394 = state_29706__$1;
(statearr_29754_30394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (5))){
var inst_29551 = (state_29706[(24)]);
var inst_29535 = (state_29706[(9)]);
var inst_29549 = (state_29706[(2)]);
var inst_29550 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_29535,inst_29549);
var inst_29551__$1 = cljs.core.first(inst_29550);
var inst_29552 = (function (){var staked = inst_29551__$1;
return (function (p1__29530_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__29530_SHARP_.transactionHash);
});
})();
var inst_29553 = lpdashboard.core.provider.getLogs(staked_filter2);
var inst_29554 = cljs.core.async.interop.p__GT_c(inst_29553);
var state_29706__$1 = (function (){var statearr_29755 = state_29706;
(statearr_29755[(37)] = inst_29552);

(statearr_29755[(24)] = inst_29551__$1);

return statearr_29755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(6),inst_29554);
} else {
if((state_val_29707 === (14))){
var inst_29582 = (state_29706[(33)]);
var inst_29582__$1 = (state_29706[(2)]);
var inst_29583 = (inst_29582__$1 instanceof cljs.core.ExceptionInfo);
var inst_29584 = cljs.core.ex_data(inst_29582__$1);
var inst_29585 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29584);
var inst_29586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29585,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29587 = ((inst_29583) && (inst_29586));
var state_29706__$1 = (function (){var statearr_29756 = state_29706;
(statearr_29756[(33)] = inst_29582__$1);

return statearr_29756;
})();
if(cljs.core.truth_(inst_29587)){
var statearr_29757_30395 = state_29706__$1;
(statearr_29757_30395[(1)] = (15));

} else {
var statearr_29758_30396 = state_29706__$1;
(statearr_29758_30396[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (26))){
var inst_29618 = (state_29706[(8)]);
var inst_29625 = (function(){throw inst_29618})();
var state_29706__$1 = state_29706;
var statearr_29759_30397 = state_29706__$1;
(statearr_29759_30397[(2)] = inst_29625);

(statearr_29759_30397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (16))){
var inst_29582 = (state_29706[(33)]);
var state_29706__$1 = state_29706;
var statearr_29760_30398 = state_29706__$1;
(statearr_29760_30398[(2)] = inst_29582);

(statearr_29760_30398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (38))){
var inst_29668 = (state_29706[(2)]);
var inst_29669 = (lpdashboard.core._LT_user_token_withdrawals.cljs$core$IFn$_invoke$arity$3 ? lpdashboard.core._LT_user_token_withdrawals.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address) : lpdashboard.core._LT_user_token_withdrawals.call(null,lpdashboard.core.provider,staking_address,user_address));
var state_29706__$1 = (function (){var statearr_29761 = state_29706;
(statearr_29761[(26)] = inst_29668);

return statearr_29761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(39),inst_29669);
} else {
if((state_val_29707 === (30))){
var inst_29635 = (state_29706[(2)]);
var inst_29636 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_29706__$1 = (function (){var statearr_29762 = state_29706;
(statearr_29762[(15)] = inst_29635);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(31),inst_29636);
} else {
if((state_val_29707 === (10))){
var inst_29574 = lpdashboard.core._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(13),inst_29574);
} else {
if((state_val_29707 === (18))){
var inst_29598 = (state_29706[(11)]);
var inst_29597 = (state_29706[(28)]);
var inst_29594 = (state_29706[(29)]);
var inst_29597__$1 = lpdashboard.ethereum.decode_event_data(inst_29594);
var inst_29598__$1 = inst_29597__$1.pid;
var inst_29599 = cheff_contract.userInfo(inst_29598__$1,user_address);
var inst_29600 = cljs.core.async.interop.p__GT_c(inst_29599);
var state_29706__$1 = (function (){var statearr_29763 = state_29706;
(statearr_29763[(11)] = inst_29598__$1);

(statearr_29763[(28)] = inst_29597__$1);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29706__$1,(21),inst_29600);
} else {
if((state_val_29707 === (42))){
var inst_29699 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29764_30399 = state_29706__$1;
(statearr_29764_30399[(2)] = inst_29699);

(statearr_29764_30399[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (37))){
var inst_29660 = (state_29706[(16)]);
var inst_29666 = cljs.core.first(inst_29660);
var state_29706__$1 = state_29706;
var statearr_29765_30400 = state_29706__$1;
(statearr_29765_30400[(2)] = inst_29666);

(statearr_29765_30400[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (8))){
var inst_29556 = (state_29706[(7)]);
var state_29706__$1 = state_29706;
var statearr_29766_30401 = state_29706__$1;
(statearr_29766_30401[(2)] = inst_29556);

(statearr_29766_30401[(1)] = (9));


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
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto____0 = (function (){
var statearr_29767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29767[(0)] = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto__);

(statearr_29767[(1)] = (1));

return statearr_29767;
});
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto____1 = (function (state_29706){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29706);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29768){var ex__27579__auto__ = e29768;
var statearr_29769_30402 = state_29706;
(statearr_29769_30402[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29706[(4)]))){
var statearr_29770_30403 = state_29706;
(statearr_29770_30403[(1)] = cljs.core.first((state_29706[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30404 = state_29706;
state_29706 = G__30404;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29771 = f__27668__auto__();
(statearr_29771[(6)] = c__27667__auto__);

return statearr_29771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_staked_lp_positions = (function lpdashboard$core$_LT_staked_lp_positions(lp_destination,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29814){
var state_val_29815 = (state_29814[(1)]);
if((state_val_29815 === (7))){
var inst_29785 = (state_29814[(7)]);
var inst_29792 = (function(){throw inst_29785})();
var state_29814__$1 = state_29814;
var statearr_29816_30405 = state_29814__$1;
(statearr_29816_30405[(2)] = inst_29792);

(statearr_29816_30405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (1))){
var inst_29773 = (state_29814[(8)]);
var inst_29772 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_29773__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_29774 = lpdashboard.ethereum.make_erc20(inst_29773__$1);
var state_29814__$1 = (function (){var statearr_29817 = state_29814;
(statearr_29817[(8)] = inst_29773__$1);

(statearr_29817[(9)] = inst_29772);

(statearr_29817[(10)] = inst_29774);

return statearr_29817;
})();
var statearr_29818_30406 = state_29814__$1;
(statearr_29818_30406[(2)] = null);

(statearr_29818_30406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (4))){
var inst_29773 = (state_29814[(8)]);
var inst_29772 = (state_29814[(9)]);
var inst_29775 = (state_29814[(2)]);
var inst_29776 = console.log("no name for lp, stkaing:",inst_29772,inst_29773);
var state_29814__$1 = (function (){var statearr_29819 = state_29814;
(statearr_29819[(11)] = inst_29775);

return statearr_29819;
})();
var statearr_29820_30407 = state_29814__$1;
(statearr_29820_30407[(2)] = inst_29776);

(statearr_29820_30407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (15))){
var inst_29807 = lpdashboard.core._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29814__$1,(16),inst_29807);
} else {
if((state_val_29815 === (13))){
var inst_29773 = (state_29814[(8)]);
var inst_29772 = (state_29814[(9)]);
var inst_29803 = lpdashboard.core._LT_staked_lp_positions_sashimi_plate(inst_29772,inst_29773,user_address);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29814__$1,(14),inst_29803);
} else {
if((state_val_29815 === (6))){
var inst_29785 = (state_29814[(7)]);
var inst_29785__$1 = (state_29814[(2)]);
var inst_29786 = (inst_29785__$1 instanceof cljs.core.ExceptionInfo);
var inst_29787 = cljs.core.ex_data(inst_29785__$1);
var inst_29788 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29787);
var inst_29789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29788,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_29790 = ((inst_29786) && (inst_29789));
var state_29814__$1 = (function (){var statearr_29821 = state_29814;
(statearr_29821[(7)] = inst_29785__$1);

return statearr_29821;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29822_30408 = state_29814__$1;
(statearr_29822_30408[(1)] = (7));

} else {
var statearr_29823_30409 = state_29814__$1;
(statearr_29823_30409[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (3))){
var inst_29798 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var G__29824_30410 = inst_29798;
switch (G__29824_30410) {
case "LpBar":
var statearr_29825_30412 = state_29814__$1;
(statearr_29825_30412[(1)] = (11));


break;
case "sv Uniswap V2":
var statearr_29826_30413 = state_29814__$1;
(statearr_29826_30413[(1)] = (13));


break;
default:
var statearr_29827_30414 = state_29814__$1;
(statearr_29827_30414[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (12))){
var inst_29801 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var statearr_29828_30415 = state_29814__$1;
(statearr_29828_30415[(2)] = inst_29801);

(statearr_29828_30415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (2))){
var inst_29774 = (state_29814[(10)]);
var _ = (function (){var statearr_29829 = state_29814;
(statearr_29829[(4)] = cljs.core.cons((5),(state_29814[(4)])));

return statearr_29829;
})();
var inst_29782 = inst_29774.name();
var inst_29783 = cljs.core.async.interop.p__GT_c(inst_29782);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29814__$1,(6),inst_29783);
} else {
if((state_val_29815 === (11))){
var inst_29773 = (state_29814[(8)]);
var inst_29772 = (state_29814[(9)]);
var inst_29799 = lpdashboard.core._LT_staked_lp_positions_lpbar(inst_29772,inst_29773,user_address);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29814__$1,(12),inst_29799);
} else {
if((state_val_29815 === (9))){
var inst_29795 = (state_29814[(2)]);
var _ = (function (){var statearr_29831 = state_29814;
(statearr_29831[(4)] = cljs.core.rest((state_29814[(4)])));

return statearr_29831;
})();
var state_29814__$1 = state_29814;
var statearr_29832_30416 = state_29814__$1;
(statearr_29832_30416[(2)] = inst_29795);

(statearr_29832_30416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (5))){
var _ = (function (){var statearr_29833 = state_29814;
(statearr_29833[(4)] = cljs.core.rest((state_29814[(4)])));

return statearr_29833;
})();
var state_29814__$1 = state_29814;
var ex29830 = (state_29814__$1[(2)]);
var statearr_29834_30417 = state_29814__$1;
(statearr_29834_30417[(5)] = ex29830);


if((ex29830 instanceof Error)){
var statearr_29835_30418 = state_29814__$1;
(statearr_29835_30418[(1)] = (4));

(statearr_29835_30418[(5)] = null);

} else {
throw ex29830;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (14))){
var inst_29805 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var statearr_29836_30419 = state_29814__$1;
(statearr_29836_30419[(2)] = inst_29805);

(statearr_29836_30419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (16))){
var inst_29809 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
var statearr_29837_30420 = state_29814__$1;
(statearr_29837_30420[(2)] = inst_29809);

(statearr_29837_30420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29815 === (10))){
var inst_29812 = (state_29814[(2)]);
var state_29814__$1 = state_29814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29814__$1,inst_29812);
} else {
if((state_val_29815 === (8))){
var inst_29785 = (state_29814[(7)]);
var state_29814__$1 = state_29814;
var statearr_29838_30421 = state_29814__$1;
(statearr_29838_30421[(2)] = inst_29785);

(statearr_29838_30421[(1)] = (9));


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
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto____0 = (function (){
var statearr_29839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29839[(0)] = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto__);

(statearr_29839[(1)] = (1));

return statearr_29839;
});
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto____1 = (function (state_29814){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29814);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29840){var ex__27579__auto__ = e29840;
var statearr_29841_30422 = state_29814;
(statearr_29841_30422[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29814[(4)]))){
var statearr_29842_30423 = state_29814;
(statearr_29842_30423[(1)] = cljs.core.first((state_29814[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30424 = state_29814;
state_29814 = G__30424;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto__ = function(state_29814){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto____1.call(this,state_29814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29843 = f__27668__auto__();
(statearr_29843[(6)] = c__27667__auto__);

return statearr_29843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_graph_uniswap_positions = (function lpdashboard$core$_LT_graph_uniswap_positions(user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29857){
var state_val_29858 = (state_29857[(1)]);
if((state_val_29858 === (1))){
var inst_29844 = lpdashboard.thegraph._LT_user_lp_snapshots(user_address);
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29857__$1,(2),inst_29844);
} else {
if((state_val_29858 === (2))){
var inst_29846 = (state_29857[(7)]);
var inst_29846__$1 = (state_29857[(2)]);
var inst_29847 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_29848 = (lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1(inst_29846__$1) : lpdashboard.core.most_recent_snapshots.call(null,inst_29846__$1));
var inst_29849 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_29847,inst_29848);
var inst_29850 = lpdashboard.thegraph._LT_user_lps(user_address,inst_29849);
var state_29857__$1 = (function (){var statearr_29859 = state_29857;
(statearr_29859[(7)] = inst_29846__$1);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29857__$1,(3),inst_29850);
} else {
if((state_val_29858 === (3))){
var inst_29846 = (state_29857[(7)]);
var inst_29852 = (state_29857[(2)]);
var inst_29853 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.Keyword(null,"positions","positions",-1380538434)];
var inst_29854 = [user_address,inst_29846,inst_29852];
var inst_29855 = cljs.core.PersistentHashMap.fromArrays(inst_29853,inst_29854);
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29857__$1,inst_29855);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto____0 = (function (){
var statearr_29860 = [null,null,null,null,null,null,null,null];
(statearr_29860[(0)] = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto__);

(statearr_29860[(1)] = (1));

return statearr_29860;
});
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto____1 = (function (state_29857){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29857);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29861){var ex__27579__auto__ = e29861;
var statearr_29862_30425 = state_29857;
(statearr_29862_30425[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29857[(4)]))){
var statearr_29863_30426 = state_29857;
(statearr_29863_30426[(1)] = cljs.core.first((state_29857[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30427 = state_29857;
state_29857 = G__30427;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto__ = function(state_29857){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto____1.call(this,state_29857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29864 = f__27668__auto__();
(statearr_29864[(6)] = c__27667__auto__);

return statearr_29864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__29865_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__29865_SHARP_);
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__29866_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__29866_SHARP_);
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
var token0_price = (function (){var fexpr__29867 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address0);
return (fexpr__29867.cljs$core$IFn$_invoke$arity$1 ? fexpr__29867.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__29867.call(null,token_prices));
})();
var token1_price = (function (){var fexpr__29868 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address1);
return (fexpr__29868.cljs$core$IFn$_invoke$arity$1 ? fexpr__29868.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__29868.call(null,token_prices));
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
var relevant_stakes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29869_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__29869_SHARP_));
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
var snapshot_lps = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29870_SHARP_){
return lpdashboard.core.make_lp(p1__29870_SHARP_,staked_positions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__29870_SHARP_))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__29870_SHARP_))));
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
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29874_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29874_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29875_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29875_SHARP_,token2);
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
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29876_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29876_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29877_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29877_SHARP_,token2);
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
lpdashboard.core.pretty_price = (function lpdashboard$core$pretty_price(p__29878){
var vec__29879 = p__29878;
var token_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(0),null);
var token_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(1),null);
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29882_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__29882_SHARP_));
}),cljs.core.vals(token_prices))))),clojure.string.lower_case(vs_price));
});
lpdashboard.core.rewards_in_currency = (function lpdashboard$core$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29883_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__29883_SHARP_),lpdashboard.core.symbol__GT_price(p1__29883_SHARP_,token_prices,currency));
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
var token_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29884_SHARP_){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,p1__29884_SHARP_));
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
}),(function (p1__29885_SHARP_){
return bignumber.core._STAR_(lp_portion,p1__29885_SHARP_);
})),cljs.core.vals(token_reserves));
var current = cljs.core.zipmap(token_symbols,reserve_shares);
var earned = lpdashboard.core.get_current_earned(latest_snapshot);
var earned_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__29886_SHARP_){
return lpdashboard.core.token_symbol(p1__29886_SHARP_,token_info);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),earned),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),earned));
var claimed = cljs.core.identity(lpdashboard.core.all_snapshot_claimed(latest_snapshot));
var claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29887_SHARP_){
return lpdashboard.core.token_symbol(p1__29887_SHARP_,token_info);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),claimed)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
var rewards = bignumber.core._PLUS_(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(earned),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.first(claimed)));
var rewards_token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(earned);
var rtoken_symbol = lpdashboard.core.token_symbol(rewards_token,token_info);
var rewards_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(rtoken_symbol))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([rtoken_symbol,rewards]));
var rewards_SINGLEQUOTE___$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([claimed_SINGLEQUOTE_,earned_SINGLEQUOTE_], 0));
var minted_lp = lpdashboard.core.minted_lp(lp_position);
var total_invested = lpdashboard.core.tokens_deposited(lp_position);
var total_invested_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29888_SHARP_){
return lpdashboard.core.token_symbol(p1__29888_SHARP_,token_info);
}),cljs.core.keys(total_invested)),cljs.core.vals(total_invested));
var burned_lp = lpdashboard.core.burned_lp(lp_position);
var total_withdrawals = lpdashboard.core.tokens_withdrawn(lp_position);
var total_withdrawals_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29889_SHARP_){
return lpdashboard.core.token_symbol(p1__29889_SHARP_,token_info);
}),cljs.core.keys(total_withdrawals)),cljs.core.vals(total_withdrawals));
var token_symbols__$1 = cljs.core.keys(total_invested_SINGLEQUOTE_);
var total_initial = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29890_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_invested_SINGLEQUOTE_,p1__29890_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29891_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_withdrawals_SINGLEQUOTE_,p1__29891_SHARP_);
}),token_symbols__$1)));
var token_diffs = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29892_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,p1__29892_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29893_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_initial,p1__29893_SHARP_);
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
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29894_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__29894_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__29894_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29895_SHARP_){
return lpdashboard.ethereum.decode_burn_data(p1__29895_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29896_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__29896_SHARP_)));
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
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29897_SHARP_){
return lpdashboard.ethereum.decode_transfer_data(p1__29897_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29898_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__29898_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__29898_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29899_SHARP_){
return lpdashboard.ethereum.decode_mint_data(p1__29899_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29900_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__29900_SHARP_)));
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29927){
var state_val_29928 = (state_29927[(1)]);
if((state_val_29928 === (1))){
var inst_29905 = (state_29927[(7)]);
var inst_29903 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_29904 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_29905__$1 = cljs.core.first(inst_29904);
var inst_29906 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_29907 = cljs.core.second(inst_29906);
var inst_29908 = lpdashboard.ethereum._LT_token_decimals(inst_29905__$1);
var state_29927__$1 = (function (){var statearr_29929 = state_29927;
(statearr_29929[(8)] = inst_29903);

(statearr_29929[(9)] = inst_29907);

(statearr_29929[(7)] = inst_29905__$1);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29927__$1,(2),inst_29908);
} else {
if((state_val_29928 === (2))){
var inst_29907 = (state_29927[(9)]);
var inst_29910 = (state_29927[(2)]);
var inst_29911 = lpdashboard.ethereum._LT_token_decimals(inst_29907);
var state_29927__$1 = (function (){var statearr_29930 = state_29927;
(statearr_29930[(10)] = inst_29910);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29927__$1,(3),inst_29911);
} else {
if((state_val_29928 === (3))){
var inst_29903 = (state_29927[(8)]);
var inst_29913 = (state_29927[(2)]);
var inst_29914 = lpdashboard.ethereum._LT_user_lp_mint_transfers(lpdashboard.core.provider,inst_29903,user_address);
var state_29927__$1 = (function (){var statearr_29931 = state_29927;
(statearr_29931[(11)] = inst_29913);

return statearr_29931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29927__$1,(4),inst_29914);
} else {
if((state_val_29928 === (4))){
var inst_29903 = (state_29927[(8)]);
var inst_29913 = (state_29927[(11)]);
var inst_29919 = (state_29927[(12)]);
var inst_29916 = (state_29927[(13)]);
var inst_29907 = (state_29927[(9)]);
var inst_29910 = (state_29927[(10)]);
var inst_29905 = (state_29927[(7)]);
var inst_29916__$1 = (state_29927[(2)]);
var inst_29917 = (function (){var pair_address = inst_29903;
var token1_address = inst_29905;
var token2_address = inst_29907;
var token1_decimals = inst_29910;
var token2_decimals = inst_29913;
var mint_transfers = inst_29916__$1;
return (function (p1__29901_SHARP_){
return p1__29901_SHARP_.transactionHash;
});
})();
var inst_29918 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_29917,inst_29916__$1);
var inst_29919__$1 = cljs.core.set(inst_29918);
var inst_29920 = lpdashboard.ethereum._LT_get_trxs(inst_29919__$1);
var state_29927__$1 = (function (){var statearr_29932 = state_29927;
(statearr_29932[(12)] = inst_29919__$1);

(statearr_29932[(13)] = inst_29916__$1);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29927__$1,(5),inst_29920);
} else {
if((state_val_29928 === (5))){
var inst_29903 = (state_29927[(8)]);
var inst_29913 = (state_29927[(11)]);
var inst_29919 = (state_29927[(12)]);
var inst_29916 = (state_29927[(13)]);
var inst_29907 = (state_29927[(9)]);
var inst_29910 = (state_29927[(10)]);
var inst_29905 = (state_29927[(7)]);
var inst_29922 = (state_29927[(2)]);
var inst_29923 = (function (){var pair_address = inst_29903;
var token1_address = inst_29905;
var token2_address = inst_29907;
var token1_decimals = inst_29910;
var token2_decimals = inst_29913;
var mint_transfers = inst_29916;
var mint_hashes = inst_29919;
var mint_txrs = inst_29922;
return (function (p1__29902_SHARP_){
return lpdashboard.core.make_mint_map(lp_pool,user_address,p1__29902_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_29924 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_29923,inst_29922);
var inst_29925 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_29924);
var state_29927__$1 = state_29927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29927__$1,inst_29925);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto____0 = (function (){
var statearr_29933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29933[(0)] = lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto__);

(statearr_29933[(1)] = (1));

return statearr_29933;
});
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto____1 = (function (state_29927){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29927);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29934){var ex__27579__auto__ = e29934;
var statearr_29935_30428 = state_29927;
(statearr_29935_30428[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29927[(4)]))){
var statearr_29936_30429 = state_29927;
(statearr_29936_30429[(1)] = cljs.core.first((state_29927[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30430 = state_29927;
state_29927 = G__30430;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto__ = function(state_29927){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto____1.call(this,state_29927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29937 = f__27668__auto__();
(statearr_29937[(6)] = c__27667__auto__);

return statearr_29937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_get_lp_burns = (function lpdashboard$core$_LT_get_lp_burns(lp_pool,user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29964){
var state_val_29965 = (state_29964[(1)]);
if((state_val_29965 === (1))){
var inst_29942 = (state_29964[(7)]);
var inst_29940 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_29941 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_29942__$1 = cljs.core.first(inst_29941);
var inst_29943 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_29944 = cljs.core.second(inst_29943);
var inst_29945 = lpdashboard.ethereum._LT_token_decimals(inst_29942__$1);
var state_29964__$1 = (function (){var statearr_29966 = state_29964;
(statearr_29966[(8)] = inst_29944);

(statearr_29966[(9)] = inst_29940);

(statearr_29966[(7)] = inst_29942__$1);

return statearr_29966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29964__$1,(2),inst_29945);
} else {
if((state_val_29965 === (2))){
var inst_29944 = (state_29964[(8)]);
var inst_29947 = (state_29964[(2)]);
var inst_29948 = lpdashboard.ethereum._LT_token_decimals(inst_29944);
var state_29964__$1 = (function (){var statearr_29967 = state_29964;
(statearr_29967[(10)] = inst_29947);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29964__$1,(3),inst_29948);
} else {
if((state_val_29965 === (3))){
var inst_29940 = (state_29964[(9)]);
var inst_29950 = (state_29964[(2)]);
var inst_29951 = lpdashboard.ethereum._LT_user_lp_burn_transfers(lpdashboard.core.provider,inst_29940,user_address);
var state_29964__$1 = (function (){var statearr_29968 = state_29964;
(statearr_29968[(11)] = inst_29950);

return statearr_29968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29964__$1,(4),inst_29951);
} else {
if((state_val_29965 === (4))){
var inst_29953 = (state_29964[(12)]);
var inst_29944 = (state_29964[(8)]);
var inst_29956 = (state_29964[(13)]);
var inst_29947 = (state_29964[(10)]);
var inst_29940 = (state_29964[(9)]);
var inst_29942 = (state_29964[(7)]);
var inst_29950 = (state_29964[(11)]);
var inst_29953__$1 = (state_29964[(2)]);
var inst_29954 = (function (){var pair_address = inst_29940;
var token1_address = inst_29942;
var token2_address = inst_29944;
var token1_decimals = inst_29947;
var token2_decimals = inst_29950;
var burn_transfers = inst_29953__$1;
return (function (p1__29938_SHARP_){
return p1__29938_SHARP_.transactionHash;
});
})();
var inst_29955 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_29954,inst_29953__$1);
var inst_29956__$1 = cljs.core.set(inst_29955);
var inst_29957 = lpdashboard.ethereum._LT_get_trxs(inst_29956__$1);
var state_29964__$1 = (function (){var statearr_29969 = state_29964;
(statearr_29969[(12)] = inst_29953__$1);

(statearr_29969[(13)] = inst_29956__$1);

return statearr_29969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29964__$1,(5),inst_29957);
} else {
if((state_val_29965 === (5))){
var inst_29953 = (state_29964[(12)]);
var inst_29944 = (state_29964[(8)]);
var inst_29956 = (state_29964[(13)]);
var inst_29947 = (state_29964[(10)]);
var inst_29940 = (state_29964[(9)]);
var inst_29942 = (state_29964[(7)]);
var inst_29950 = (state_29964[(11)]);
var inst_29959 = (state_29964[(2)]);
var inst_29960 = (function (){var pair_address = inst_29940;
var token1_address = inst_29942;
var token2_address = inst_29944;
var token1_decimals = inst_29947;
var token2_decimals = inst_29950;
var burn_transfers = inst_29953;
var burn_hashes = inst_29956;
var burn_txrs = inst_29959;
return (function (p1__29939_SHARP_){
return lpdashboard.core.make_burn_map(lp_pool,user_address,p1__29939_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_29961 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_29960,inst_29959);
var inst_29962 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_29961);
var state_29964__$1 = state_29964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29964__$1,inst_29962);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto____0 = (function (){
var statearr_29970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29970[(0)] = lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto__);

(statearr_29970[(1)] = (1));

return statearr_29970;
});
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto____1 = (function (state_29964){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29964);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29971){var ex__27579__auto__ = e29971;
var statearr_29972_30431 = state_29964;
(statearr_29972_30431[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29964[(4)]))){
var statearr_29973_30432 = state_29964;
(statearr_29973_30432[(1)] = cljs.core.first((state_29964[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30433 = state_29964;
state_29964 = G__30433;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto__ = function(state_29964){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto____1.call(this,state_29964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29974 = f__27668__auto__();
(statearr_29974[(6)] = c__27667__auto__);

return statearr_29974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core._LT_get_user_mints = (function lpdashboard$core$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29983){
var state_val_29984 = (state_29983[(1)]);
if((state_val_29984 === (1))){
var inst_29975 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_29976 = [inst_29975];
var inst_29977 = lpdashboard.core._LT_get_lp_mints(p,user_address);
var state_29983__$1 = (function (){var statearr_29985 = state_29983;
(statearr_29985[(7)] = inst_29976);

return statearr_29985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29983__$1,(2),inst_29977);
} else {
if((state_val_29984 === (2))){
var inst_29976 = (state_29983[(7)]);
var inst_29979 = (state_29983[(2)]);
var inst_29980 = [inst_29979];
var inst_29981 = cljs.core.PersistentHashMap.fromArrays(inst_29976,inst_29980);
var state_29983__$1 = state_29983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29983__$1,inst_29981);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto____0 = (function (){
var statearr_29986 = [null,null,null,null,null,null,null,null];
(statearr_29986[(0)] = lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto__);

(statearr_29986[(1)] = (1));

return statearr_29986;
});
var lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto____1 = (function (state_29983){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29983);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e29987){var ex__27579__auto__ = e29987;
var statearr_29988_30434 = state_29983;
(statearr_29988_30434[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29983[(4)]))){
var statearr_29989_30435 = state_29983;
(statearr_29989_30435[(1)] = cljs.core.first((state_29983[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30436 = state_29983;
state_29983 = G__30436;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto__ = function(state_29983){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto____1.call(this,state_29983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_get_user_mints_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_29990 = f__27668__auto__();
(statearr_29990[(6)] = c__27667__auto__);

return statearr_29990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_get_user_burns = (function lpdashboard$core$_LT_get_user_burns(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_29999){
var state_val_30000 = (state_29999[(1)]);
if((state_val_30000 === (1))){
var inst_29991 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_29992 = [inst_29991];
var inst_29993 = lpdashboard.core._LT_get_lp_burns(p,user_address);
var state_29999__$1 = (function (){var statearr_30001 = state_29999;
(statearr_30001[(7)] = inst_29992);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29999__$1,(2),inst_29993);
} else {
if((state_val_30000 === (2))){
var inst_29992 = (state_29999[(7)]);
var inst_29995 = (state_29999[(2)]);
var inst_29996 = [inst_29995];
var inst_29997 = cljs.core.PersistentHashMap.fromArrays(inst_29992,inst_29996);
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29999__$1,inst_29997);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto____0 = (function (){
var statearr_30002 = [null,null,null,null,null,null,null,null];
(statearr_30002[(0)] = lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto__);

(statearr_30002[(1)] = (1));

return statearr_30002;
});
var lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto____1 = (function (state_29999){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_29999);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e30003){var ex__27579__auto__ = e30003;
var statearr_30004_30437 = state_29999;
(statearr_30004_30437[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_29999[(4)]))){
var statearr_30005_30438 = state_29999;
(statearr_30005_30438[(1)] = cljs.core.first((state_29999[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30439 = state_29999;
state_29999 = G__30439;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto__ = function(state_29999){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto____1.call(this,state_29999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_get_user_burns_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_30006 = f__27668__auto__();
(statearr_30006[(6)] = c__27667__auto__);

return statearr_30006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_user_lp_destinations = (function lpdashboard$core$_LT_user_lp_destinations(snapshots,user_address){
var token_addresses = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),lpdashboard.core.last_lp_snapshots(snapshots));
var destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_30012){
var state_val_30013 = (state_30012[(1)]);
if((state_val_30013 === (1))){
var inst_30008 = lpdashboard.ethereum._LT_user_token_destinations(lpdashboard.core.provider,x,user_address);
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30012__$1,(2),inst_30008);
} else {
if((state_val_30013 === (2))){
var inst_30010 = (state_30012[(2)]);
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30012__$1,inst_30010);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto____0 = (function (){
var statearr_30014 = [null,null,null,null,null,null,null];
(statearr_30014[(0)] = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto__);

(statearr_30014[(1)] = (1));

return statearr_30014;
});
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto____1 = (function (state_30012){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_30012);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e30015){var ex__27579__auto__ = e30015;
var statearr_30016_30440 = state_30012;
(statearr_30016_30440[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_30012[(4)]))){
var statearr_30017_30441 = state_30012;
(statearr_30017_30441[(1)] = cljs.core.first((state_30012[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30442 = state_30012;
state_30012 = G__30442;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto__ = function(state_30012){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto____1.call(this,state_30012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_30018 = f__27668__auto__();
(statearr_30018[(6)] = c__27667__auto__);

return statearr_30018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__30007_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__30007_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
lpdashboard.core._LT_user_lp_positions = (function lpdashboard$core$_LT_user_lp_positions(destinations,user_address){
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_30029){
var state_val_30030 = (state_30029[(1)]);
if((state_val_30030 === (1))){
var inst_30020 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_30021 = lpdashboard.core._LT_staked_lp_positions(x,user_address);
var state_30029__$1 = (function (){var statearr_30031 = state_30029;
(statearr_30031[(7)] = inst_30020);

return statearr_30031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30029__$1,(2),inst_30021);
} else {
if((state_val_30030 === (2))){
var inst_30020 = (state_30029[(7)]);
var inst_30023 = (state_30029[(2)]);
var inst_30024 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_30025 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_30026 = [inst_30023,inst_30024,inst_30025];
var inst_30027 = cljs.core.PersistentHashMap.fromArrays(inst_30020,inst_30026);
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30029__$1,inst_30027);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto____0 = (function (){
var statearr_30032 = [null,null,null,null,null,null,null,null];
(statearr_30032[(0)] = lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto__);

(statearr_30032[(1)] = (1));

return statearr_30032;
});
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto____1 = (function (state_30029){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_30029);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e30033){var ex__27579__auto__ = e30033;
var statearr_30034_30443 = state_30029;
(statearr_30034_30443[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_30029[(4)]))){
var statearr_30035_30444 = state_30029;
(statearr_30035_30444[(1)] = cljs.core.first((state_30029[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30445 = state_30029;
state_30029 = G__30445;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto__ = function(state_30029){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto____1.call(this,state_30029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_30036 = f__27668__auto__();
(statearr_30036[(6)] = c__27667__auto__);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
}),destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__30019_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__30019_SHARP_)));
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions)));
});
lpdashboard.core._LT_user_get_staked = (function lpdashboard$core$_LT_user_get_staked(user_address,user_snapshots){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_30049){
var state_val_30050 = (state_30049[(1)]);
if((state_val_30050 === (1))){
var inst_30038 = lpdashboard.core.last_lp_snapshots(user_snapshots);
var inst_30039 = lpdashboard.core._LT_user_lp_destinations(user_snapshots,user_address);
var state_30049__$1 = (function (){var statearr_30051 = state_30049;
(statearr_30051[(7)] = inst_30038);

return statearr_30051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30049__$1,(2),inst_30039);
} else {
if((state_val_30050 === (2))){
var inst_30041 = (state_30049[(8)]);
var inst_30041__$1 = (state_30049[(2)]);
var inst_30042 = lpdashboard.core._LT_user_lp_positions(inst_30041__$1,user_address);
var state_30049__$1 = (function (){var statearr_30052 = state_30049;
(statearr_30052[(8)] = inst_30041__$1);

return statearr_30052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30049__$1,(3),inst_30042);
} else {
if((state_val_30050 === (3))){
var inst_30041 = (state_30049[(8)]);
var inst_30038 = (state_30049[(7)]);
var inst_30044 = (state_30049[(2)]);
var inst_30045 = (function (){var lsnapshots = inst_30038;
var user_destinations = inst_30041;
var user_positions = inst_30044;
return (function (p1__30037_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__30037_SHARP_)));
});
})();
var inst_30046 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_30044,inst_30038);
var inst_30047 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_30045,inst_30046);
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30049__$1,inst_30047);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto____0 = (function (){
var statearr_30053 = [null,null,null,null,null,null,null,null,null];
(statearr_30053[(0)] = lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto__);

(statearr_30053[(1)] = (1));

return statearr_30053;
});
var lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto____1 = (function (state_30049){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_30049);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e30054){var ex__27579__auto__ = e30054;
var statearr_30055_30446 = state_30049;
(statearr_30055_30446[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_30049[(4)]))){
var statearr_30056_30447 = state_30049;
(statearr_30056_30447[(1)] = cljs.core.first((state_30049[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30448 = state_30049;
state_30049 = G__30448;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto__ = function(state_30049){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto____1.call(this,state_30049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_user_get_staked_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_30057 = f__27668__auto__();
(statearr_30057[(6)] = c__27667__auto__);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.core.sum_pairs = (function lpdashboard$core$sum_pairs(pair_positions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30059){
var vec__30060 = p__30059;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.assoc,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"pos","pos",-864607220)),v)),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"pos","pos",-864607220)),v))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30058_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30058_SHARP_,new cljs.core.Keyword(null,"dst","dst",844682948));
}),pair_positions)));
});
lpdashboard.core.get_pair = (function lpdashboard$core$get_pair(pair_positions,token0,token1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30063_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token0,new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__30063_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token1,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__30063_SHARP_)))));
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
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_30179){
var state_val_30180 = (state_30179[(1)]);
if((state_val_30180 === (1))){
var inst_30066 = lpdashboard.ethereum._LT_resolve_address(account_or_name);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(2),inst_30066);
} else {
if((state_val_30180 === (2))){
var inst_30068 = (state_30179[(7)]);
var inst_30068__$1 = (state_30179[(2)]);
var inst_30069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30070 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30071 = (new cljs.core.PersistentVector(null,1,(5),inst_30069,inst_30070,null));
var inst_30072 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30071,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Searching Uniswap \uD83E\uDD84 Pools ..."], 0));
var inst_30073 = lpdashboard.core._LT_graph_uniswap_positions(inst_30068__$1);
var state_30179__$1 = (function (){var statearr_30181 = state_30179;
(statearr_30181[(8)] = inst_30072);

(statearr_30181[(7)] = inst_30068__$1);

return statearr_30181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(3),inst_30073);
} else {
if((state_val_30180 === (3))){
var inst_30084 = (state_30179[(9)]);
var inst_30068 = (state_30179[(7)]);
var inst_30075 = (state_30179[(10)]);
var inst_30077 = (state_30179[(11)]);
var inst_30079 = (state_30179[(12)]);
var inst_30075__$1 = (state_30179[(2)]);
var inst_30076 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_30075__$1);
var inst_30077__$1 = lpdashboard.core.last_lp_snapshots(inst_30076);
var inst_30078 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.snapshot__GT_symbols,inst_30077__$1);
var inst_30079__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_30078);
var inst_30080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30081 = cljs.core.count(inst_30077__$1);
var inst_30082 = ["Account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name),"\nhas provided liquidity to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30081)," pools:\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30079__$1)].join('');
var inst_30083 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_30082];
var inst_30084__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_30080,inst_30083,null));
var inst_30085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30086 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30087 = (new cljs.core.PersistentVector(null,1,(5),inst_30085,inst_30086,null));
var inst_30088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30087,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30084__$1], 0));
var inst_30089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30090 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30091 = (new cljs.core.PersistentVector(null,1,(5),inst_30089,inst_30090,null));
var inst_30092 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30091,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Locating Staked LP Tokens ..."], 0));
var inst_30093 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_30075__$1);
var inst_30094 = lpdashboard.core._LT_user_get_staked(inst_30068,inst_30093);
var state_30179__$1 = (function (){var statearr_30182 = state_30179;
(statearr_30182[(13)] = inst_30088);

(statearr_30182[(14)] = inst_30092);

(statearr_30182[(9)] = inst_30084__$1);

(statearr_30182[(10)] = inst_30075__$1);

(statearr_30182[(11)] = inst_30077__$1);

(statearr_30182[(12)] = inst_30079__$1);

return statearr_30182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(4),inst_30094);
} else {
if((state_val_30180 === (4))){
var inst_30096 = (state_30179[(15)]);
var inst_30084 = (state_30179[(9)]);
var inst_30068 = (state_30179[(7)]);
var inst_30075 = (state_30179[(10)]);
var inst_30077 = (state_30179[(11)]);
var inst_30079 = (state_30179[(12)]);
var inst_30096__$1 = (state_30179[(2)]);
var inst_30097 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_30096__$1);
var inst_30098 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_30097);
var inst_30099 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_30098);
var inst_30100 = cljs.core.count(inst_30099);
var inst_30101 = ["Account has staked LP tokens in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30100)," distinct staking contracts ..."].join('');
var inst_30102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30103 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30104 = (new cljs.core.PersistentVector(null,1,(5),inst_30102,inst_30103,null));
var inst_30105 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30104,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30101], 0));
var inst_30106 = (function (){var account = inst_30068;
var _ = inst_30105;
var graph_positions = inst_30075;
var last_snaps = inst_30077;
var pair_symbols = inst_30079;
var many_pools_step = inst_30084;
var staked = inst_30096__$1;
var many_stakes_step = inst_30101;
return (function (p1__30065_SHARP_){
return clojure.set.rename_keys(p1__30065_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"address","address",559499426)], null));
});
})();
var inst_30107 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_30108 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_30075);
var inst_30109 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_30108);
var inst_30110 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_30107,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30109], 0));
var inst_30111 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_30106,inst_30110);
var inst_30112 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_30075);
var inst_30113 = lpdashboard.core.pooled_tokens(inst_30112);
var inst_30114 = lpdashboard.core.reward_tokens(inst_30096__$1);
var inst_30115 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_30113,inst_30114,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"], 0));
var inst_30116 = cljs.core.set(inst_30115);
var inst_30117 = lpdashboard.ethereum._LT_erc20_infos(inst_30114);
var state_30179__$1 = (function (){var statearr_30183 = state_30179;
(statearr_30183[(15)] = inst_30096__$1);

(statearr_30183[(16)] = inst_30111);

(statearr_30183[(17)] = inst_30116);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(5),inst_30117);
} else {
if((state_val_30180 === (5))){
var inst_30111 = (state_30179[(16)]);
var inst_30116 = (state_30179[(17)]);
var inst_30119 = (state_30179[(2)]);
var inst_30120 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_30111,inst_30119);
var inst_30121 = cljs.core.set(inst_30120);
var inst_30122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30123 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30124 = (new cljs.core.PersistentVector(null,1,(5),inst_30122,inst_30123,null));
var inst_30125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30126 = ["Fetching token prices..."];
var inst_30127 = (new cljs.core.PersistentVector(null,1,(5),inst_30125,inst_30126,null));
var inst_30128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30124,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30127], 0));
var inst_30129 = lpdashboard.coingecko._LT_token_prices(inst_30116);
var state_30179__$1 = (function (){var statearr_30184 = state_30179;
(statearr_30184[(18)] = inst_30121);

(statearr_30184[(19)] = inst_30128);

return statearr_30184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(6),inst_30129);
} else {
if((state_val_30180 === (6))){
var inst_30133 = (state_30179[(20)]);
var inst_30068 = (state_30179[(7)]);
var inst_30075 = (state_30179[(10)]);
var inst_30131 = (state_30179[(2)]);
var inst_30132 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_30075);
var inst_30133__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.gposition__GT_pool,inst_30132);
var inst_30134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30135 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30136 = (new cljs.core.PersistentVector(null,1,(5),inst_30134,inst_30135,null));
var inst_30137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30138 = ["Searching for LP Mint events from account..."];
var inst_30139 = (new cljs.core.PersistentVector(null,1,(5),inst_30137,inst_30138,null));
var inst_30140 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30136,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30139], 0));
var inst_30141 = lpdashboard.core._LT_get_user_mints(inst_30068,inst_30133__$1);
var state_30179__$1 = (function (){var statearr_30185 = state_30179;
(statearr_30185[(21)] = inst_30131);

(statearr_30185[(20)] = inst_30133__$1);

(statearr_30185[(22)] = inst_30140);

return statearr_30185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(7),inst_30141);
} else {
if((state_val_30180 === (7))){
var inst_30133 = (state_30179[(20)]);
var inst_30143 = (state_30179[(23)]);
var inst_30068 = (state_30179[(7)]);
var inst_30143__$1 = (state_30179[(2)]);
var inst_30144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30145 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30146 = (new cljs.core.PersistentVector(null,1,(5),inst_30144,inst_30145,null));
var inst_30147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30148 = cljs.core.vals(inst_30143__$1);
var inst_30149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_30148);
var inst_30150 = cljs.core.count(inst_30149);
var inst_30151 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30150)," LP Mint events by account"].join('');
var inst_30152 = [inst_30151];
var inst_30153 = (new cljs.core.PersistentVector(null,1,(5),inst_30147,inst_30152,null));
var inst_30154 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30146,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30153], 0));
var inst_30155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30156 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30157 = (new cljs.core.PersistentVector(null,1,(5),inst_30155,inst_30156,null));
var inst_30158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30159 = ["Searching for LP Burn events from account..."];
var inst_30160 = (new cljs.core.PersistentVector(null,1,(5),inst_30158,inst_30159,null));
var inst_30161 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30157,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30160], 0));
var inst_30162 = lpdashboard.core._LT_get_user_burns(inst_30068,inst_30133);
var state_30179__$1 = (function (){var statearr_30186 = state_30179;
(statearr_30186[(24)] = inst_30154);

(statearr_30186[(23)] = inst_30143__$1);

(statearr_30186[(25)] = inst_30161);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30179__$1,(8),inst_30162);
} else {
if((state_val_30180 === (8))){
var inst_30121 = (state_30179[(18)]);
var inst_30096 = (state_30179[(15)]);
var inst_30131 = (state_30179[(21)]);
var inst_30143 = (state_30179[(23)]);
var inst_30075 = (state_30179[(10)]);
var inst_30164 = (state_30179[(2)]);
var inst_30165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30166 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_30167 = (new cljs.core.PersistentVector(null,1,(5),inst_30165,inst_30166,null));
var inst_30168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30169 = cljs.core.vals(inst_30164);
var inst_30170 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_30169);
var inst_30171 = cljs.core.count(inst_30170);
var inst_30172 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30171)," LP Burn events from account"].join('');
var inst_30173 = [inst_30172];
var inst_30174 = (new cljs.core.PersistentVector(null,1,(5),inst_30168,inst_30173,null));
var inst_30175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_30167,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30174], 0));
var inst_30176 = lpdashboard.core.make_token_info(inst_30121,inst_30131);
var inst_30177 = lpdashboard.core.make_state(inst_30075,inst_30096,inst_30176,inst_30143,inst_30164);
var state_30179__$1 = (function (){var statearr_30187 = state_30179;
(statearr_30187[(26)] = inst_30175);

return statearr_30187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30179__$1,inst_30177);
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
var lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto__ = null;
var lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto____0 = (function (){
var statearr_30188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30188[(0)] = lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto__);

(statearr_30188[(1)] = (1));

return statearr_30188;
});
var lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto____1 = (function (state_30179){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_30179);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e30189){var ex__27579__auto__ = e30189;
var statearr_30190_30449 = state_30179;
(statearr_30190_30449[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_30179[(4)]))){
var statearr_30191_30450 = state_30179;
(statearr_30191_30450[(1)] = cljs.core.first((state_30179[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30451 = state_30179;
state_30179 = G__30451;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto__ = function(state_30179){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto____1.call(this,state_30179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto____0;
lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto____1;
return lpdashboard$core$_LT_get_account_state_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_30192 = f__27668__auto__();
(statearr_30192[(6)] = c__27667__auto__);

return statearr_30192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
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
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30193_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__30193_SHARP_),symbol);
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
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30194_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__30194_SHARP_)),token1)) && (cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__30194_SHARP_)),token2)));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30195_SHARP_){
var G__30196 = new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lpdashboard.core.lp_position_map(p1__30195_SHARP_,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)));
return (pnl_key.cljs$core$IFn$_invoke$arity$1 ? pnl_key.cljs$core$IFn$_invoke$arity$1(G__30196) : pnl_key.call(null,G__30196));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))));
});
lpdashboard.core.compute_totals = (function lpdashboard$core$compute_totals(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rewards","rewards",-1173924062),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),state),new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),state),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),state)], null);
});

//# sourceMappingURL=lpdashboard.core.js.map
