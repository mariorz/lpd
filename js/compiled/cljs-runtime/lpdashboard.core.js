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
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41592){
var state_val_41593 = (state_41592[(1)]);
if((state_val_41593 === (1))){
var inst_41574 = lpdashboard.core.render_loading();
var inst_41575 = (lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1(account) : lpdashboard.core._LT_get_account_state.call(null,account));
var state_41592__$1 = (function (){var statearr_41594 = state_41592;
(statearr_41594[(7)] = inst_41574);

return statearr_41594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41592__$1,(2),inst_41575);
} else {
if((state_val_41593 === (2))){
var inst_41577 = (state_41592[(2)]);
var inst_41578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41579 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_41580 = (new cljs.core.PersistentVector(null,1,(5),inst_41578,inst_41579,null));
var inst_41581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41582 = ["Computing account PNL ..."];
var inst_41583 = (new cljs.core.PersistentVector(null,1,(5),inst_41581,inst_41582,null));
var inst_41584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_41580,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41583], 0));
var inst_41585 = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(inst_41577) : lpdashboard.core.compute_totals.call(null,inst_41577));
var inst_41586 = (function (){var _ = inst_41584;
var account_state = inst_41577;
var totals = inst_41585;
return (function (p1__41573_SHARP_){
var G__41595 = p1__41573_SHARP_;
var G__41596 = new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(account_state);
return (lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2(G__41595,G__41596) : lpdashboard.core.lp_position_map.call(null,G__41595,G__41596));
});
})();
var inst_41587 = new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(inst_41577);
var inst_41588 = cljs.core.vals(inst_41587);
var inst_41589 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41586,inst_41588);
var inst_41590 = lpdashboard.core.render_totals(account,inst_41577,inst_41589,inst_41585,"USD");
var state_41592__$1 = state_41592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41592__$1,inst_41590);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$render_account_$_state_machine__36685__auto__ = null;
var lpdashboard$core$render_account_$_state_machine__36685__auto____0 = (function (){
var statearr_41597 = [null,null,null,null,null,null,null,null];
(statearr_41597[(0)] = lpdashboard$core$render_account_$_state_machine__36685__auto__);

(statearr_41597[(1)] = (1));

return statearr_41597;
});
var lpdashboard$core$render_account_$_state_machine__36685__auto____1 = (function (state_41592){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41592);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41598){var ex__36688__auto__ = e41598;
var statearr_41599_43156 = state_41592;
(statearr_41599_43156[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41592[(4)]))){
var statearr_41600_43157 = state_41592;
(statearr_41600_43157[(1)] = cljs.core.first((state_41592[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43158 = state_41592;
state_41592 = G__43158;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$render_account_$_state_machine__36685__auto__ = function(state_41592){
switch(arguments.length){
case 0:
return lpdashboard$core$render_account_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$render_account_$_state_machine__36685__auto____1.call(this,state_41592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$render_account_$_state_machine__36685__auto____0;
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$render_account_$_state_machine__36685__auto____1;
return lpdashboard$core$render_account_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41601 = f__36777__auto__();
(statearr_41601[(6)] = c__36776__auto__);

return statearr_41601;
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
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(lp_pos))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Pool PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Staking Rewards: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41602){
var vec__41603 = p__41602;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41603,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41603,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invested: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41606){
var vec__41607 = p__41606;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41607,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41607,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"invested","invested",19182926).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Withdrawn: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41610){
var vec__41611 = p__41610;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41611,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41611,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Diffs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41614){
var vec__41615 = p__41614;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41615,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41615,(1),null);
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41647){
var state_val_41648 = (state_41647[(1)]);
if((state_val_41648 === (7))){
var inst_41629 = (state_41647[(7)]);
var inst_41636 = (function(){throw inst_41629})();
var state_41647__$1 = state_41647;
var statearr_41649_43159 = state_41647__$1;
(statearr_41649_43159[(2)] = inst_41636);

(statearr_41649_43159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (1))){
var state_41647__$1 = state_41647;
var statearr_41650_43160 = state_41647__$1;
(statearr_41650_43160[(2)] = null);

(statearr_41650_43160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (4))){
var inst_41618 = (state_41647[(2)]);
var inst_41619 = console.log("Could not enable web3 in browser",inst_41618);
var state_41647__$1 = state_41647;
var statearr_41651_43161 = state_41647__$1;
(statearr_41651_43161[(2)] = inst_41619);

(statearr_41651_43161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (6))){
var inst_41629 = (state_41647[(7)]);
var inst_41629__$1 = (state_41647[(2)]);
var inst_41630 = (inst_41629__$1 instanceof cljs.core.ExceptionInfo);
var inst_41631 = cljs.core.ex_data(inst_41629__$1);
var inst_41632 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41631);
var inst_41633 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41632,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41634 = ((inst_41630) && (inst_41633));
var state_41647__$1 = (function (){var statearr_41652 = state_41647;
(statearr_41652[(7)] = inst_41629__$1);

return statearr_41652;
})();
if(cljs.core.truth_(inst_41634)){
var statearr_41653_43162 = state_41647__$1;
(statearr_41653_43162[(1)] = (7));

} else {
var statearr_41654_43163 = state_41647__$1;
(statearr_41654_43163[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (3))){
var inst_41645 = (state_41647[(2)]);
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41647__$1,inst_41645);
} else {
if((state_val_41648 === (2))){
var _ = (function (){var statearr_41656 = state_41647;
(statearr_41656[(4)] = cljs.core.cons((5),(state_41647[(4)])));

return statearr_41656;
})();
var inst_41625 = window.ethereum;
var inst_41626 = inst_41625.enable();
var inst_41627 = cljs.core.async.interop.p__GT_c(inst_41626);
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41647__$1,(6),inst_41627);
} else {
if((state_val_41648 === (9))){
var inst_41639 = (state_41647[(2)]);
var inst_41640 = cljs.core.first(inst_41639);
var inst_41641 = console.log("connected-account",inst_41640);
var inst_41642 = lpdashboard.core.render_account(inst_41640);
var _ = (function (){var statearr_41657 = state_41647;
(statearr_41657[(4)] = cljs.core.rest((state_41647[(4)])));

return statearr_41657;
})();
var state_41647__$1 = (function (){var statearr_41658 = state_41647;
(statearr_41658[(8)] = inst_41641);

return statearr_41658;
})();
var statearr_41659_43164 = state_41647__$1;
(statearr_41659_43164[(2)] = inst_41642);

(statearr_41659_43164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (5))){
var _ = (function (){var statearr_41660 = state_41647;
(statearr_41660[(4)] = cljs.core.rest((state_41647[(4)])));

return statearr_41660;
})();
var state_41647__$1 = state_41647;
var ex41655 = (state_41647__$1[(2)]);
var statearr_41661_43165 = state_41647__$1;
(statearr_41661_43165[(5)] = ex41655);


if((ex41655 instanceof Error)){
var statearr_41662_43166 = state_41647__$1;
(statearr_41662_43166[(1)] = (4));

(statearr_41662_43166[(5)] = null);

} else {
throw ex41655;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41648 === (8))){
var inst_41629 = (state_41647[(7)]);
var state_41647__$1 = state_41647;
var statearr_41663_43167 = state_41647__$1;
(statearr_41663_43167[(2)] = inst_41629);

(statearr_41663_43167[(1)] = (9));


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
var statearr_41664 = [null,null,null,null,null,null,null,null,null];
(statearr_41664[(0)] = lpdashboard$core$web3_connect_$_state_machine__36685__auto__);

(statearr_41664[(1)] = (1));

return statearr_41664;
});
var lpdashboard$core$web3_connect_$_state_machine__36685__auto____1 = (function (state_41647){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41647);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41665){var ex__36688__auto__ = e41665;
var statearr_41666_43168 = state_41647;
(statearr_41666_43168[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41647[(4)]))){
var statearr_41667_43169 = state_41647;
(statearr_41667_43169[(1)] = cljs.core.first((state_41647[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43170 = state_41647;
state_41647 = G__43170;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$web3_connect_$_state_machine__36685__auto__ = function(state_41647){
switch(arguments.length){
case 0:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____1.call(this,state_41647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____0;
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____1;
return lpdashboard$core$web3_connect_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41668 = f__36777__auto__();
(statearr_41668[(6)] = c__36776__auto__);

return statearr_41668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__41669_SHARP_){
return cljs.core.reset_BANG_(value,p1__41669_SHARP_.target.value);
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
}),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"------- ACCOUNT PNL --------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL From Pools: ",new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards Accrued: ",new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------OPEN LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41670_SHARP_){
return lpdashboard.core.render_lp_pos(p1__41670_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__41670_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41671_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__41671_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------CLOSED LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41672_SHARP_){
return lpdashboard.core.render_lp_pos(p1__41672_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__41672_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41673_SHARP_){
return bignumber.core._GT__EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__41673_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null)], null)], null);
});
lpdashboard.core.start = (function lpdashboard$core$start(){
var G__41674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.hello_world], null);
var G__41675 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__41674,G__41675) : reagent.core.render_component.call(null,G__41674,G__41675));
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41696){
var state_val_41697 = (state_41696[(1)]);
if((state_val_41697 === (1))){
var inst_41676 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var inst_41677 = lpdashboard.ethereum._LT_token_decimals(rewards_address);
var state_41696__$1 = (function (){var statearr_41698 = state_41696;
(statearr_41698[(7)] = inst_41676);

return statearr_41698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41696__$1,(2),inst_41677);
} else {
if((state_val_41697 === (2))){
var inst_41676 = (state_41696[(7)]);
var inst_41679 = (state_41696[(2)]);
var inst_41680 = inst_41676.earned(user_address);
var inst_41681 = cljs.core.async.interop.p__GT_c(inst_41680);
var state_41696__$1 = (function (){var statearr_41699 = state_41696;
(statearr_41699[(8)] = inst_41679);

return statearr_41699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41696__$1,(3),inst_41681);
} else {
if((state_val_41697 === (3))){
var inst_41683 = (state_41696[(9)]);
var inst_41683__$1 = (state_41696[(2)]);
var inst_41684 = (inst_41683__$1 instanceof cljs.core.ExceptionInfo);
var inst_41685 = cljs.core.ex_data(inst_41683__$1);
var inst_41686 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41685);
var inst_41687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41686,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41688 = ((inst_41684) && (inst_41687));
var state_41696__$1 = (function (){var statearr_41700 = state_41696;
(statearr_41700[(9)] = inst_41683__$1);

return statearr_41700;
})();
if(cljs.core.truth_(inst_41688)){
var statearr_41701_43171 = state_41696__$1;
(statearr_41701_43171[(1)] = (4));

} else {
var statearr_41702_43172 = state_41696__$1;
(statearr_41702_43172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (4))){
var inst_41683 = (state_41696[(9)]);
var inst_41690 = (function(){throw inst_41683})();
var state_41696__$1 = state_41696;
var statearr_41703_43173 = state_41696__$1;
(statearr_41703_43173[(2)] = inst_41690);

(statearr_41703_43173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (5))){
var inst_41683 = (state_41696[(9)]);
var state_41696__$1 = state_41696;
var statearr_41704_43174 = state_41696__$1;
(statearr_41704_43174[(2)] = inst_41683);

(statearr_41704_43174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (6))){
var inst_41679 = (state_41696[(8)]);
var inst_41693 = (state_41696[(2)]);
var inst_41694 = lpdashboard.utils.ebn__GT_bn(inst_41693,inst_41679);
var state_41696__$1 = state_41696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41696__$1,inst_41694);
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
var statearr_41705 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41705[(0)] = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__);

(statearr_41705[(1)] = (1));

return statearr_41705;
});
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1 = (function (state_41696){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41696);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41706){var ex__36688__auto__ = e41706;
var statearr_41707_43175 = state_41696;
(statearr_41707_43175[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41696[(4)]))){
var statearr_41708_43176 = state_41696;
(statearr_41708_43176[(1)] = cljs.core.first((state_41696[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43177 = state_41696;
state_41696 = G__43177;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__ = function(state_41696){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1.call(this,state_41696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41709 = f__36777__auto__();
(statearr_41709[(6)] = c__36776__auto__);

return statearr_41709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_rewards_token = (function lpdashboard$core$_LT_staking_rewards_token(staking_address){
var staking_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41783){
var state_val_41784 = (state_41783[(1)]);
if((state_val_41784 === (7))){
var inst_41712 = (state_41783[(2)]);
var inst_41713 = console.log("prob getting sushi failback:",staking_address);
var state_41783__$1 = (function (){var statearr_41785 = state_41783;
(statearr_41785[(7)] = inst_41713);

(statearr_41785[(8)] = inst_41712);

return statearr_41785;
})();
var statearr_41786_43178 = state_41783__$1;
(statearr_41786_43178[(2)] = null);

(statearr_41786_43178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (20))){
var inst_41756 = (state_41783[(2)]);
var _ = (function (){var statearr_41787 = state_41783;
(statearr_41787[(4)] = cljs.core.rest((state_41783[(4)])));

return statearr_41787;
})();
var state_41783__$1 = state_41783;
var statearr_41788_43179 = state_41783__$1;
(statearr_41788_43179[(2)] = inst_41756);

(statearr_41788_43179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (1))){
var state_41783__$1 = state_41783;
var statearr_41789_43180 = state_41783__$1;
(statearr_41789_43180[(2)] = null);

(statearr_41789_43180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (24))){
var inst_41768 = (state_41783[(9)]);
var state_41783__$1 = state_41783;
var statearr_41790_43181 = state_41783__$1;
(statearr_41790_43181[(2)] = inst_41768);

(statearr_41790_43181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (4))){
var inst_41710 = (state_41783[(2)]);
var inst_41711 = console.log("prob getting rewards token:",staking_address);
var state_41783__$1 = (function (){var statearr_41792 = state_41783;
(statearr_41792[(10)] = inst_41710);

(statearr_41792[(11)] = inst_41711);

return statearr_41792;
})();
var statearr_41793_43182 = state_41783__$1;
(statearr_41793_43182[(2)] = null);

(statearr_41793_43182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (15))){
var inst_41734 = (state_41783[(2)]);
var _ = (function (){var statearr_41794 = state_41783;
(statearr_41794[(4)] = cljs.core.rest((state_41783[(4)])));

return statearr_41794;
})();
var state_41783__$1 = state_41783;
var statearr_41795_43183 = state_41783__$1;
(statearr_41795_43183[(2)] = inst_41734);

(statearr_41795_43183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (21))){
var _ = (function (){var statearr_41796 = state_41783;
(statearr_41796[(4)] = cljs.core.rest((state_41783[(4)])));

return statearr_41796;
})();
var state_41783__$1 = state_41783;
var ex41791 = (state_41783__$1[(2)]);
var statearr_41797_43184 = state_41783__$1;
(statearr_41797_43184[(5)] = ex41791);


if((ex41791 instanceof Error)){
var statearr_41798_43185 = state_41783__$1;
(statearr_41798_43185[(1)] = (4));

(statearr_41798_43185[(5)] = null);

} else {
throw ex41791;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (13))){
var inst_41724 = (state_41783[(12)]);
var inst_41731 = (function(){throw inst_41724})();
var state_41783__$1 = state_41783;
var statearr_41799_43186 = state_41783__$1;
(statearr_41799_43186[(2)] = inst_41731);

(statearr_41799_43186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (22))){
var inst_41768 = (state_41783[(9)]);
var inst_41768__$1 = (state_41783[(2)]);
var inst_41769 = (inst_41768__$1 instanceof cljs.core.ExceptionInfo);
var inst_41770 = cljs.core.ex_data(inst_41768__$1);
var inst_41771 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41770);
var inst_41772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41771,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41773 = ((inst_41769) && (inst_41772));
var state_41783__$1 = (function (){var statearr_41800 = state_41783;
(statearr_41800[(9)] = inst_41768__$1);

return statearr_41800;
})();
if(cljs.core.truth_(inst_41773)){
var statearr_41801_43187 = state_41783__$1;
(statearr_41801_43187[(1)] = (23));

} else {
var statearr_41802_43188 = state_41783__$1;
(statearr_41802_43188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (6))){
var inst_41759 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41803_43189 = state_41783__$1;
(statearr_41803_43189[(2)] = inst_41759);

(statearr_41803_43189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (25))){
var inst_41778 = (state_41783[(2)]);
var _ = (function (){var statearr_41804 = state_41783;
(statearr_41804[(4)] = cljs.core.rest((state_41783[(4)])));

return statearr_41804;
})();
var state_41783__$1 = state_41783;
var statearr_41805_43190 = state_41783__$1;
(statearr_41805_43190[(2)] = inst_41778);

(statearr_41805_43190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (17))){
var inst_41746 = (state_41783[(13)]);
var inst_41746__$1 = (state_41783[(2)]);
var inst_41747 = (inst_41746__$1 instanceof cljs.core.ExceptionInfo);
var inst_41748 = cljs.core.ex_data(inst_41746__$1);
var inst_41749 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41748);
var inst_41750 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41749,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41751 = ((inst_41747) && (inst_41750));
var state_41783__$1 = (function (){var statearr_41806 = state_41783;
(statearr_41806[(13)] = inst_41746__$1);

return statearr_41806;
})();
if(cljs.core.truth_(inst_41751)){
var statearr_41807_43191 = state_41783__$1;
(statearr_41807_43191[(1)] = (18));

} else {
var statearr_41808_43192 = state_41783__$1;
(statearr_41808_43192[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (3))){
var inst_41781 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41783__$1,inst_41781);
} else {
if((state_val_41784 === (12))){
var inst_41724 = (state_41783[(12)]);
var inst_41724__$1 = (state_41783[(2)]);
var inst_41725 = (inst_41724__$1 instanceof cljs.core.ExceptionInfo);
var inst_41726 = cljs.core.ex_data(inst_41724__$1);
var inst_41727 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41726);
var inst_41728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41727,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41729 = ((inst_41725) && (inst_41728));
var state_41783__$1 = (function (){var statearr_41809 = state_41783;
(statearr_41809[(12)] = inst_41724__$1);

return statearr_41809;
})();
if(cljs.core.truth_(inst_41729)){
var statearr_41810_43193 = state_41783__$1;
(statearr_41810_43193[(1)] = (13));

} else {
var statearr_41811_43194 = state_41783__$1;
(statearr_41811_43194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (2))){
var _ = (function (){var statearr_41812 = state_41783;
(statearr_41812[(4)] = cljs.core.cons((21),(state_41783[(4)])));

return statearr_41812;
})();
var inst_41765 = staking_contract.rewardsToken();
var inst_41766 = cljs.core.async.interop.p__GT_c(inst_41765);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41783__$1,(22),inst_41766);
} else {
if((state_val_41784 === (23))){
var inst_41768 = (state_41783[(9)]);
var inst_41775 = (function(){throw inst_41768})();
var state_41783__$1 = state_41783;
var statearr_41814_43195 = state_41783__$1;
(statearr_41814_43195[(2)] = inst_41775);

(statearr_41814_43195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (19))){
var inst_41746 = (state_41783[(13)]);
var state_41783__$1 = state_41783;
var statearr_41815_43196 = state_41783__$1;
(statearr_41815_43196[(2)] = inst_41746);

(statearr_41815_43196[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (11))){
var _ = (function (){var statearr_41816 = state_41783;
(statearr_41816[(4)] = cljs.core.rest((state_41783[(4)])));

return statearr_41816;
})();
var state_41783__$1 = state_41783;
var ex41813 = (state_41783__$1[(2)]);
var statearr_41817_43197 = state_41783__$1;
(statearr_41817_43197[(5)] = ex41813);


if((ex41813 instanceof Error)){
var statearr_41818_43198 = state_41783__$1;
(statearr_41818_43198[(1)] = (10));

(statearr_41818_43198[(5)] = null);

} else {
throw ex41813;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (9))){
var inst_41737 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41819_43199 = state_41783__$1;
(statearr_41819_43199[(2)] = inst_41737);

(statearr_41819_43199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (5))){
var _ = (function (){var statearr_41821 = state_41783;
(statearr_41821[(4)] = cljs.core.cons((16),(state_41783[(4)])));

return statearr_41821;
})();
var inst_41743 = staking_contract.sushi();
var inst_41744 = cljs.core.async.interop.p__GT_c(inst_41743);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41783__$1,(17),inst_41744);
} else {
if((state_val_41784 === (14))){
var inst_41724 = (state_41783[(12)]);
var state_41783__$1 = state_41783;
var statearr_41822_43200 = state_41783__$1;
(statearr_41822_43200[(2)] = inst_41724);

(statearr_41822_43200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (16))){
var _ = (function (){var statearr_41823 = state_41783;
(statearr_41823[(4)] = cljs.core.rest((state_41783[(4)])));

return statearr_41823;
})();
var state_41783__$1 = state_41783;
var ex41820 = (state_41783__$1[(2)]);
var statearr_41824_43201 = state_41783__$1;
(statearr_41824_43201[(5)] = ex41820);


if((ex41820 instanceof Error)){
var statearr_41825_43202 = state_41783__$1;
(statearr_41825_43202[(1)] = (7));

(statearr_41825_43202[(5)] = null);

} else {
throw ex41820;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (10))){
var inst_41714 = (state_41783[(2)]);
var inst_41715 = console.log("prob getting cream failback:",staking_address);
var state_41783__$1 = (function (){var statearr_41826 = state_41783;
(statearr_41826[(14)] = inst_41714);

return statearr_41826;
})();
var statearr_41827_43203 = state_41783__$1;
(statearr_41827_43203[(2)] = inst_41715);

(statearr_41827_43203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (18))){
var inst_41746 = (state_41783[(13)]);
var inst_41753 = (function(){throw inst_41746})();
var state_41783__$1 = state_41783;
var statearr_41828_43204 = state_41783__$1;
(statearr_41828_43204[(2)] = inst_41753);

(statearr_41828_43204[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (8))){
var _ = (function (){var statearr_41829 = state_41783;
(statearr_41829[(4)] = cljs.core.cons((11),(state_41783[(4)])));

return statearr_41829;
})();
var inst_41721 = staking_contract.cream();
var inst_41722 = cljs.core.async.interop.p__GT_c(inst_41721);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41783__$1,(12),inst_41722);
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
var statearr_41830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41830[(0)] = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__);

(statearr_41830[(1)] = (1));

return statearr_41830;
});
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1 = (function (state_41783){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41783);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41831){var ex__36688__auto__ = e41831;
var statearr_41832_43205 = state_41783;
(statearr_41832_43205[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41783[(4)]))){
var statearr_41833_43206 = state_41783;
(statearr_41833_43206[(1)] = cljs.core.first((state_41783[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43207 = state_41783;
state_41783 = G__43207;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__ = function(state_41783){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1.call(this,state_41783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41834 = f__36777__auto__();
(statearr_41834[(6)] = c__36776__auto__);

return statearr_41834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_prop = (function lpdashboard$core$_LT_staked_prop(staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41871){
var state_val_41872 = (state_41871[(1)]);
if((state_val_41872 === (7))){
var inst_41857 = (state_41871[(7)]);
var inst_41857__$1 = (state_41871[(2)]);
var inst_41858 = (inst_41857__$1 instanceof cljs.core.ExceptionInfo);
var inst_41859 = cljs.core.ex_data(inst_41857__$1);
var inst_41860 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41859);
var inst_41861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41860,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41862 = ((inst_41858) && (inst_41861));
var state_41871__$1 = (function (){var statearr_41873 = state_41871;
(statearr_41873[(7)] = inst_41857__$1);

return statearr_41873;
})();
if(cljs.core.truth_(inst_41862)){
var statearr_41874_43208 = state_41871__$1;
(statearr_41874_43208[(1)] = (8));

} else {
var statearr_41875_43209 = state_41871__$1;
(statearr_41875_43209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (1))){
var inst_41835 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_41836 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_41871__$1 = (function (){var statearr_41876 = state_41871;
(statearr_41876[(8)] = inst_41835);

return statearr_41876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41871__$1,(2),inst_41836);
} else {
if((state_val_41872 === (4))){
var inst_41842 = (state_41871[(9)]);
var inst_41849 = (function(){throw inst_41842})();
var state_41871__$1 = state_41871;
var statearr_41877_43210 = state_41871__$1;
(statearr_41877_43210[(2)] = inst_41849);

(statearr_41877_43210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (6))){
var inst_41835 = (state_41871[(8)]);
var inst_41838 = (state_41871[(10)]);
var inst_41852 = (state_41871[(2)]);
var inst_41853 = lpdashboard.utils.ebn__GT_bn(inst_41852,inst_41838);
var inst_41854 = inst_41835.totalSupply();
var inst_41855 = cljs.core.async.interop.p__GT_c(inst_41854);
var state_41871__$1 = (function (){var statearr_41878 = state_41871;
(statearr_41878[(11)] = inst_41853);

return statearr_41878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41871__$1,(7),inst_41855);
} else {
if((state_val_41872 === (3))){
var inst_41842 = (state_41871[(9)]);
var inst_41842__$1 = (state_41871[(2)]);
var inst_41843 = (inst_41842__$1 instanceof cljs.core.ExceptionInfo);
var inst_41844 = cljs.core.ex_data(inst_41842__$1);
var inst_41845 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41844);
var inst_41846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41845,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41847 = ((inst_41843) && (inst_41846));
var state_41871__$1 = (function (){var statearr_41879 = state_41871;
(statearr_41879[(9)] = inst_41842__$1);

return statearr_41879;
})();
if(cljs.core.truth_(inst_41847)){
var statearr_41880_43211 = state_41871__$1;
(statearr_41880_43211[(1)] = (4));

} else {
var statearr_41881_43212 = state_41871__$1;
(statearr_41881_43212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (2))){
var inst_41835 = (state_41871[(8)]);
var inst_41838 = (state_41871[(2)]);
var inst_41839 = inst_41835.balanceOf(user_address);
var inst_41840 = cljs.core.async.interop.p__GT_c(inst_41839);
var state_41871__$1 = (function (){var statearr_41882 = state_41871;
(statearr_41882[(10)] = inst_41838);

return statearr_41882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41871__$1,(3),inst_41840);
} else {
if((state_val_41872 === (9))){
var inst_41857 = (state_41871[(7)]);
var state_41871__$1 = state_41871;
var statearr_41883_43213 = state_41871__$1;
(statearr_41883_43213[(2)] = inst_41857);

(statearr_41883_43213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (5))){
var inst_41842 = (state_41871[(9)]);
var state_41871__$1 = state_41871;
var statearr_41884_43214 = state_41871__$1;
(statearr_41884_43214[(2)] = inst_41842);

(statearr_41884_43214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (10))){
var inst_41853 = (state_41871[(11)]);
var inst_41838 = (state_41871[(10)]);
var inst_41867 = (state_41871[(2)]);
var inst_41868 = lpdashboard.utils.ebn__GT_bn(inst_41867,inst_41838);
var inst_41869 = bignumber.core._SLASH_(inst_41853,inst_41868);
var state_41871__$1 = state_41871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41871__$1,inst_41869);
} else {
if((state_val_41872 === (8))){
var inst_41857 = (state_41871[(7)]);
var inst_41864 = (function(){throw inst_41857})();
var state_41871__$1 = state_41871;
var statearr_41885_43215 = state_41871__$1;
(statearr_41885_43215[(2)] = inst_41864);

(statearr_41885_43215[(1)] = (10));


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
var statearr_41886 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41886[(0)] = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__);

(statearr_41886[(1)] = (1));

return statearr_41886;
});
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1 = (function (state_41871){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41871);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41887){var ex__36688__auto__ = e41887;
var statearr_41888_43216 = state_41871;
(statearr_41888_43216[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41871[(4)]))){
var statearr_41889_43217 = state_41871;
(statearr_41889_43217[(1)] = cljs.core.first((state_41871[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43218 = state_41871;
state_41871 = G__43218;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__ = function(state_41871){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1.call(this,state_41871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41890 = f__36777__auto__();
(statearr_41890[(6)] = c__36776__auto__);

return statearr_41890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_pool_lps = (function lpdashboard$core$_LT_staking_pool_lps(lp_address,staking_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41922){
var state_val_41923 = (state_41922[(1)]);
if((state_val_41923 === (7))){
var inst_41909 = (state_41922[(7)]);
var inst_41916 = (function(){throw inst_41909})();
var state_41922__$1 = state_41922;
var statearr_41924_43219 = state_41922__$1;
(statearr_41924_43219[(2)] = inst_41916);

(statearr_41924_43219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (1))){
var inst_41891 = (state_41922[(8)]);
var inst_41891__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_41892 = inst_41891__$1.decimals();
var inst_41893 = cljs.core.async.interop.p__GT_c(inst_41892);
var state_41922__$1 = (function (){var statearr_41925 = state_41922;
(statearr_41925[(8)] = inst_41891__$1);

return statearr_41925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41922__$1,(2),inst_41893);
} else {
if((state_val_41923 === (4))){
var inst_41895 = (state_41922[(9)]);
var state_41922__$1 = state_41922;
var statearr_41926_43220 = state_41922__$1;
(statearr_41926_43220[(2)] = inst_41895);

(statearr_41926_43220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (6))){
var inst_41909 = (state_41922[(7)]);
var inst_41909__$1 = (state_41922[(2)]);
var inst_41910 = (inst_41909__$1 instanceof cljs.core.ExceptionInfo);
var inst_41911 = cljs.core.ex_data(inst_41909__$1);
var inst_41912 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41911);
var inst_41913 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41912,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41914 = ((inst_41910) && (inst_41913));
var state_41922__$1 = (function (){var statearr_41927 = state_41922;
(statearr_41927[(7)] = inst_41909__$1);

return statearr_41927;
})();
if(cljs.core.truth_(inst_41914)){
var statearr_41928_43221 = state_41922__$1;
(statearr_41928_43221[(1)] = (7));

} else {
var statearr_41929_43222 = state_41922__$1;
(statearr_41929_43222[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (3))){
var inst_41895 = (state_41922[(9)]);
var inst_41902 = (function(){throw inst_41895})();
var state_41922__$1 = state_41922;
var statearr_41930_43223 = state_41922__$1;
(statearr_41930_43223[(2)] = inst_41902);

(statearr_41930_43223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (2))){
var inst_41895 = (state_41922[(9)]);
var inst_41895__$1 = (state_41922[(2)]);
var inst_41896 = (inst_41895__$1 instanceof cljs.core.ExceptionInfo);
var inst_41897 = cljs.core.ex_data(inst_41895__$1);
var inst_41898 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41897);
var inst_41899 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41898,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41900 = ((inst_41896) && (inst_41899));
var state_41922__$1 = (function (){var statearr_41931 = state_41922;
(statearr_41931[(9)] = inst_41895__$1);

return statearr_41931;
})();
if(cljs.core.truth_(inst_41900)){
var statearr_41932_43224 = state_41922__$1;
(statearr_41932_43224[(1)] = (3));

} else {
var statearr_41933_43225 = state_41922__$1;
(statearr_41933_43225[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (9))){
var inst_41905 = (state_41922[(10)]);
var inst_41919 = (state_41922[(2)]);
var inst_41920 = lpdashboard.utils.ebn__GT_bn(inst_41919,inst_41905);
var state_41922__$1 = state_41922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41922__$1,inst_41920);
} else {
if((state_val_41923 === (5))){
var inst_41891 = (state_41922[(8)]);
var inst_41905 = (state_41922[(2)]);
var inst_41906 = inst_41891.balanceOf(staking_address);
var inst_41907 = cljs.core.async.interop.p__GT_c(inst_41906);
var state_41922__$1 = (function (){var statearr_41934 = state_41922;
(statearr_41934[(10)] = inst_41905);

return statearr_41934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41922__$1,(6),inst_41907);
} else {
if((state_val_41923 === (8))){
var inst_41909 = (state_41922[(7)]);
var state_41922__$1 = state_41922;
var statearr_41935_43226 = state_41922__$1;
(statearr_41935_43226[(2)] = inst_41909);

(statearr_41935_43226[(1)] = (9));


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
var statearr_41936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41936[(0)] = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__);

(statearr_41936[(1)] = (1));

return statearr_41936;
});
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1 = (function (state_41922){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41922);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41937){var ex__36688__auto__ = e41937;
var statearr_41938_43227 = state_41922;
(statearr_41938_43227[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41922[(4)]))){
var statearr_41939_43228 = state_41922;
(statearr_41939_43228[(1)] = cljs.core.first((state_41922[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43229 = state_41922;
state_41922 = G__43229;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__ = function(state_41922){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1.call(this,state_41922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41940 = f__36777__auto__();
(statearr_41940[(6)] = c__36776__auto__);

return statearr_41940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_lps = (function lpdashboard$core$_LT_total_pool_lps(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_41961){
var state_val_41962 = (state_41961[(1)]);
if((state_val_41962 === (1))){
var inst_41941 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_41942 = lpdashboard.ethereum._LT_token_decimals(lp_address);
var state_41961__$1 = (function (){var statearr_41963 = state_41961;
(statearr_41963[(7)] = inst_41941);

return statearr_41963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41961__$1,(2),inst_41942);
} else {
if((state_val_41962 === (2))){
var inst_41941 = (state_41961[(7)]);
var inst_41944 = (state_41961[(2)]);
var inst_41945 = inst_41941.totalSupply();
var inst_41946 = cljs.core.async.interop.p__GT_c(inst_41945);
var state_41961__$1 = (function (){var statearr_41964 = state_41961;
(statearr_41964[(8)] = inst_41944);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41961__$1,(3),inst_41946);
} else {
if((state_val_41962 === (3))){
var inst_41948 = (state_41961[(9)]);
var inst_41948__$1 = (state_41961[(2)]);
var inst_41949 = (inst_41948__$1 instanceof cljs.core.ExceptionInfo);
var inst_41950 = cljs.core.ex_data(inst_41948__$1);
var inst_41951 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41950);
var inst_41952 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41951,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41953 = ((inst_41949) && (inst_41952));
var state_41961__$1 = (function (){var statearr_41965 = state_41961;
(statearr_41965[(9)] = inst_41948__$1);

return statearr_41965;
})();
if(cljs.core.truth_(inst_41953)){
var statearr_41966_43230 = state_41961__$1;
(statearr_41966_43230[(1)] = (4));

} else {
var statearr_41967_43231 = state_41961__$1;
(statearr_41967_43231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (4))){
var inst_41948 = (state_41961[(9)]);
var inst_41955 = (function(){throw inst_41948})();
var state_41961__$1 = state_41961;
var statearr_41968_43232 = state_41961__$1;
(statearr_41968_43232[(2)] = inst_41955);

(statearr_41968_43232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (5))){
var inst_41948 = (state_41961[(9)]);
var state_41961__$1 = state_41961;
var statearr_41969_43233 = state_41961__$1;
(statearr_41969_43233[(2)] = inst_41948);

(statearr_41969_43233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (6))){
var inst_41944 = (state_41961[(8)]);
var inst_41958 = (state_41961[(2)]);
var inst_41959 = lpdashboard.utils.ebn__GT_bn(inst_41958,inst_41944);
var state_41961__$1 = state_41961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41961__$1,inst_41959);
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
var statearr_41970 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41970[(0)] = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__);

(statearr_41970[(1)] = (1));

return statearr_41970;
});
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1 = (function (state_41961){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_41961);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e41971){var ex__36688__auto__ = e41971;
var statearr_41972_43234 = state_41961;
(statearr_41972_43234[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_41961[(4)]))){
var statearr_41973_43235 = state_41961;
(statearr_41973_43235[(1)] = cljs.core.first((state_41961[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43236 = state_41961;
state_41961 = G__43236;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__ = function(state_41961){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1.call(this,state_41961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_41974 = f__36777__auto__();
(statearr_41974[(6)] = c__36776__auto__);

return statearr_41974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_tokens = (function lpdashboard$core$_LT_lp_pool_tokens(lp_address){
var lp_contract = lpdashboard.ethereum.make_erc20(lp_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42007){
var state_val_42008 = (state_42007[(1)]);
if((state_val_42008 === (7))){
var inst_41993 = (state_42007[(7)]);
var inst_42000 = (function(){throw inst_41993})();
var state_42007__$1 = state_42007;
var statearr_42009_43237 = state_42007__$1;
(statearr_42009_43237[(2)] = inst_42000);

(statearr_42009_43237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42008 === (1))){
var inst_41975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41976 = lp_contract.token0();
var inst_41977 = cljs.core.async.interop.p__GT_c(inst_41976);
var state_42007__$1 = (function (){var statearr_42010 = state_42007;
(statearr_42010[(8)] = inst_41975);

return statearr_42010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42007__$1,(2),inst_41977);
} else {
if((state_val_42008 === (4))){
var inst_41979 = (state_42007[(9)]);
var state_42007__$1 = state_42007;
var statearr_42011_43238 = state_42007__$1;
(statearr_42011_43238[(2)] = inst_41979);

(statearr_42011_43238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42008 === (6))){
var inst_41993 = (state_42007[(7)]);
var inst_41993__$1 = (state_42007[(2)]);
var inst_41994 = (inst_41993__$1 instanceof cljs.core.ExceptionInfo);
var inst_41995 = cljs.core.ex_data(inst_41993__$1);
var inst_41996 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41995);
var inst_41997 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41996,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41998 = ((inst_41994) && (inst_41997));
var state_42007__$1 = (function (){var statearr_42012 = state_42007;
(statearr_42012[(7)] = inst_41993__$1);

return statearr_42012;
})();
if(cljs.core.truth_(inst_41998)){
var statearr_42013_43239 = state_42007__$1;
(statearr_42013_43239[(1)] = (7));

} else {
var statearr_42014_43240 = state_42007__$1;
(statearr_42014_43240[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42008 === (3))){
var inst_41979 = (state_42007[(9)]);
var inst_41986 = (function(){throw inst_41979})();
var state_42007__$1 = state_42007;
var statearr_42015_43241 = state_42007__$1;
(statearr_42015_43241[(2)] = inst_41986);

(statearr_42015_43241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42008 === (2))){
var inst_41979 = (state_42007[(9)]);
var inst_41979__$1 = (state_42007[(2)]);
var inst_41980 = (inst_41979__$1 instanceof cljs.core.ExceptionInfo);
var inst_41981 = cljs.core.ex_data(inst_41979__$1);
var inst_41982 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41981);
var inst_41983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41982,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_41984 = ((inst_41980) && (inst_41983));
var state_42007__$1 = (function (){var statearr_42016 = state_42007;
(statearr_42016[(9)] = inst_41979__$1);

return statearr_42016;
})();
if(cljs.core.truth_(inst_41984)){
var statearr_42017_43242 = state_42007__$1;
(statearr_42017_43242[(1)] = (3));

} else {
var statearr_42018_43243 = state_42007__$1;
(statearr_42018_43243[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42008 === (9))){
var inst_41975 = (state_42007[(8)]);
var inst_41989 = (state_42007[(10)]);
var inst_42003 = (state_42007[(2)]);
var inst_42004 = [inst_41989,inst_42003];
var inst_42005 = (new cljs.core.PersistentVector(null,2,(5),inst_41975,inst_42004,null));
var state_42007__$1 = state_42007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42007__$1,inst_42005);
} else {
if((state_val_42008 === (5))){
var inst_41989 = (state_42007[(2)]);
var inst_41990 = lp_contract.token1();
var inst_41991 = cljs.core.async.interop.p__GT_c(inst_41990);
var state_42007__$1 = (function (){var statearr_42019 = state_42007;
(statearr_42019[(10)] = inst_41989);

return statearr_42019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42007__$1,(6),inst_41991);
} else {
if((state_val_42008 === (8))){
var inst_41993 = (state_42007[(7)]);
var state_42007__$1 = state_42007;
var statearr_42020_43244 = state_42007__$1;
(statearr_42020_43244[(2)] = inst_41993);

(statearr_42020_43244[(1)] = (9));


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
var statearr_42021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42021[(0)] = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__);

(statearr_42021[(1)] = (1));

return statearr_42021;
});
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1 = (function (state_42007){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42007);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42022){var ex__36688__auto__ = e42022;
var statearr_42023_43245 = state_42007;
(statearr_42023_43245[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42007[(4)]))){
var statearr_42024_43246 = state_42007;
(statearr_42024_43246[(1)] = cljs.core.first((state_42007[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43247 = state_42007;
state_42007 = G__43247;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__ = function(state_42007){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1.call(this,state_42007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42025 = f__36777__auto__();
(statearr_42025[(6)] = c__36776__auto__);

return statearr_42025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_symbols = (function lpdashboard$core$_LT_lp_pool_symbols(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42065){
var state_val_42066 = (state_42065[(1)]);
if((state_val_42066 === (7))){
var inst_42051 = (state_42065[(7)]);
var inst_42051__$1 = (state_42065[(2)]);
var inst_42052 = (inst_42051__$1 instanceof cljs.core.ExceptionInfo);
var inst_42053 = cljs.core.ex_data(inst_42051__$1);
var inst_42054 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42053);
var inst_42055 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42054,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42056 = ((inst_42052) && (inst_42055));
var state_42065__$1 = (function (){var statearr_42067 = state_42065;
(statearr_42067[(7)] = inst_42051__$1);

return statearr_42067;
})();
if(cljs.core.truth_(inst_42056)){
var statearr_42068_43248 = state_42065__$1;
(statearr_42068_43248[(1)] = (8));

} else {
var statearr_42069_43249 = state_42065__$1;
(statearr_42069_43249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (1))){
var inst_42026 = lpdashboard.core._LT_lp_pool_tokens(lp_address);
var state_42065__$1 = state_42065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42065__$1,(2),inst_42026);
} else {
if((state_val_42066 === (4))){
var inst_42037 = (state_42065[(8)]);
var inst_42044 = (function(){throw inst_42037})();
var state_42065__$1 = state_42065;
var statearr_42070_43250 = state_42065__$1;
(statearr_42070_43250[(2)] = inst_42044);

(statearr_42070_43250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (6))){
var inst_42032 = (state_42065[(9)]);
var inst_42047 = (state_42065[(2)]);
var inst_42048 = inst_42032.symbol();
var inst_42049 = cljs.core.async.interop.p__GT_c(inst_42048);
var state_42065__$1 = (function (){var statearr_42071 = state_42065;
(statearr_42071[(10)] = inst_42047);

return statearr_42071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42065__$1,(7),inst_42049);
} else {
if((state_val_42066 === (3))){
var inst_42037 = (state_42065[(8)]);
var inst_42037__$1 = (state_42065[(2)]);
var inst_42038 = (inst_42037__$1 instanceof cljs.core.ExceptionInfo);
var inst_42039 = cljs.core.ex_data(inst_42037__$1);
var inst_42040 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42039);
var inst_42041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42040,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42042 = ((inst_42038) && (inst_42041));
var state_42065__$1 = (function (){var statearr_42072 = state_42065;
(statearr_42072[(8)] = inst_42037__$1);

return statearr_42072;
})();
if(cljs.core.truth_(inst_42042)){
var statearr_42073_43251 = state_42065__$1;
(statearr_42073_43251[(1)] = (4));

} else {
var statearr_42074_43252 = state_42065__$1;
(statearr_42074_43252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (2))){
var inst_42028 = (state_42065[(2)]);
var inst_42029 = cljs.core.first(inst_42028);
var inst_42030 = lpdashboard.ethereum.make_erc20(inst_42029);
var inst_42031 = cljs.core.second(inst_42028);
var inst_42032 = lpdashboard.ethereum.make_erc20(inst_42031);
var inst_42033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42034 = inst_42030.symbol();
var inst_42035 = cljs.core.async.interop.p__GT_c(inst_42034);
var state_42065__$1 = (function (){var statearr_42075 = state_42065;
(statearr_42075[(9)] = inst_42032);

(statearr_42075[(11)] = inst_42033);

return statearr_42075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42065__$1,(3),inst_42035);
} else {
if((state_val_42066 === (9))){
var inst_42051 = (state_42065[(7)]);
var state_42065__$1 = state_42065;
var statearr_42076_43253 = state_42065__$1;
(statearr_42076_43253[(2)] = inst_42051);

(statearr_42076_43253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (5))){
var inst_42037 = (state_42065[(8)]);
var state_42065__$1 = state_42065;
var statearr_42077_43254 = state_42065__$1;
(statearr_42077_43254[(2)] = inst_42037);

(statearr_42077_43254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42066 === (10))){
var inst_42033 = (state_42065[(11)]);
var inst_42047 = (state_42065[(10)]);
var inst_42061 = (state_42065[(2)]);
var inst_42062 = [inst_42047,inst_42061];
var inst_42063 = (new cljs.core.PersistentVector(null,2,(5),inst_42033,inst_42062,null));
var state_42065__$1 = state_42065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42065__$1,inst_42063);
} else {
if((state_val_42066 === (8))){
var inst_42051 = (state_42065[(7)]);
var inst_42058 = (function(){throw inst_42051})();
var state_42065__$1 = state_42065;
var statearr_42078_43255 = state_42065__$1;
(statearr_42078_43255[(2)] = inst_42058);

(statearr_42078_43255[(1)] = (10));


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
var statearr_42079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42079[(0)] = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__);

(statearr_42079[(1)] = (1));

return statearr_42079;
});
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1 = (function (state_42065){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42065);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42080){var ex__36688__auto__ = e42080;
var statearr_42081_43256 = state_42065;
(statearr_42081_43256[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42065[(4)]))){
var statearr_42082_43257 = state_42065;
(statearr_42082_43257[(1)] = cljs.core.first((state_42065[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43258 = state_42065;
state_42065 = G__43258;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__ = function(state_42065){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1.call(this,state_42065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42083 = f__36777__auto__();
(statearr_42083[(6)] = c__36776__auto__);

return statearr_42083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_reserves = (function lpdashboard$core$_LT_total_pool_reserves(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42141){
var state_val_42142 = (state_42141[(1)]);
if((state_val_42142 === (7))){
var inst_42102 = (state_42141[(7)]);
var inst_42109 = (function(){throw inst_42102})();
var state_42141__$1 = state_42141;
var statearr_42143_43259 = state_42141__$1;
(statearr_42143_43259[(2)] = inst_42109);

(statearr_42143_43259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (1))){
var inst_42084 = (state_42141[(8)]);
var inst_42084__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_42085 = inst_42084__$1.token0();
var inst_42086 = cljs.core.async.interop.p__GT_c(inst_42085);
var state_42141__$1 = (function (){var statearr_42144 = state_42141;
(statearr_42144[(8)] = inst_42084__$1);

return statearr_42144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42141__$1,(2),inst_42086);
} else {
if((state_val_42142 === (4))){
var inst_42088 = (state_42141[(9)]);
var state_42141__$1 = state_42141;
var statearr_42145_43260 = state_42141__$1;
(statearr_42145_43260[(2)] = inst_42088);

(statearr_42145_43260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (15))){
var inst_42118 = (state_42141[(10)]);
var inst_42115 = (state_42141[(11)]);
var inst_42132 = (state_42141[(2)]);
var inst_42133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42134 = cljs.core.first(inst_42132);
var inst_42135 = lpdashboard.utils.ebn__GT_bn(inst_42134,inst_42115);
var inst_42136 = cljs.core.second(inst_42132);
var inst_42137 = lpdashboard.utils.ebn__GT_bn(inst_42136,inst_42118);
var inst_42138 = [inst_42135,inst_42137];
var inst_42139 = (new cljs.core.PersistentVector(null,2,(5),inst_42133,inst_42138,null));
var state_42141__$1 = state_42141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42141__$1,inst_42139);
} else {
if((state_val_42142 === (13))){
var inst_42122 = (state_42141[(12)]);
var inst_42129 = (function(){throw inst_42122})();
var state_42141__$1 = state_42141;
var statearr_42146_43261 = state_42141__$1;
(statearr_42146_43261[(2)] = inst_42129);

(statearr_42146_43261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (6))){
var inst_42102 = (state_42141[(7)]);
var inst_42102__$1 = (state_42141[(2)]);
var inst_42103 = (inst_42102__$1 instanceof cljs.core.ExceptionInfo);
var inst_42104 = cljs.core.ex_data(inst_42102__$1);
var inst_42105 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42104);
var inst_42106 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42105,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42107 = ((inst_42103) && (inst_42106));
var state_42141__$1 = (function (){var statearr_42147 = state_42141;
(statearr_42147[(7)] = inst_42102__$1);

return statearr_42147;
})();
if(cljs.core.truth_(inst_42107)){
var statearr_42148_43262 = state_42141__$1;
(statearr_42148_43262[(1)] = (7));

} else {
var statearr_42149_43263 = state_42141__$1;
(statearr_42149_43263[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (3))){
var inst_42088 = (state_42141[(9)]);
var inst_42095 = (function(){throw inst_42088})();
var state_42141__$1 = state_42141;
var statearr_42150_43264 = state_42141__$1;
(statearr_42150_43264[(2)] = inst_42095);

(statearr_42150_43264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (12))){
var inst_42122 = (state_42141[(12)]);
var inst_42122__$1 = (state_42141[(2)]);
var inst_42123 = (inst_42122__$1 instanceof cljs.core.ExceptionInfo);
var inst_42124 = cljs.core.ex_data(inst_42122__$1);
var inst_42125 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42124);
var inst_42126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42125,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42127 = ((inst_42123) && (inst_42126));
var state_42141__$1 = (function (){var statearr_42151 = state_42141;
(statearr_42151[(12)] = inst_42122__$1);

return statearr_42151;
})();
if(cljs.core.truth_(inst_42127)){
var statearr_42152_43265 = state_42141__$1;
(statearr_42152_43265[(1)] = (13));

} else {
var statearr_42153_43266 = state_42141__$1;
(statearr_42153_43266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (2))){
var inst_42088 = (state_42141[(9)]);
var inst_42088__$1 = (state_42141[(2)]);
var inst_42089 = (inst_42088__$1 instanceof cljs.core.ExceptionInfo);
var inst_42090 = cljs.core.ex_data(inst_42088__$1);
var inst_42091 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42090);
var inst_42092 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42091,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42093 = ((inst_42089) && (inst_42092));
var state_42141__$1 = (function (){var statearr_42154 = state_42141;
(statearr_42154[(9)] = inst_42088__$1);

return statearr_42154;
})();
if(cljs.core.truth_(inst_42093)){
var statearr_42155_43267 = state_42141__$1;
(statearr_42155_43267[(1)] = (3));

} else {
var statearr_42156_43268 = state_42141__$1;
(statearr_42156_43268[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (11))){
var inst_42084 = (state_42141[(8)]);
var inst_42118 = (state_42141[(2)]);
var inst_42119 = inst_42084.getReserves();
var inst_42120 = cljs.core.async.interop.p__GT_c(inst_42119);
var state_42141__$1 = (function (){var statearr_42157 = state_42141;
(statearr_42157[(10)] = inst_42118);

return statearr_42157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42141__$1,(12),inst_42120);
} else {
if((state_val_42142 === (9))){
var inst_42098 = (state_42141[(13)]);
var inst_42112 = (state_42141[(2)]);
var inst_42113 = lpdashboard.ethereum._LT_token_decimals(inst_42098);
var state_42141__$1 = (function (){var statearr_42158 = state_42141;
(statearr_42158[(14)] = inst_42112);

return statearr_42158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42141__$1,(10),inst_42113);
} else {
if((state_val_42142 === (5))){
var inst_42084 = (state_42141[(8)]);
var inst_42098 = (state_42141[(2)]);
var inst_42099 = inst_42084.token1();
var inst_42100 = cljs.core.async.interop.p__GT_c(inst_42099);
var state_42141__$1 = (function (){var statearr_42159 = state_42141;
(statearr_42159[(13)] = inst_42098);

return statearr_42159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42141__$1,(6),inst_42100);
} else {
if((state_val_42142 === (14))){
var inst_42122 = (state_42141[(12)]);
var state_42141__$1 = state_42141;
var statearr_42160_43269 = state_42141__$1;
(statearr_42160_43269[(2)] = inst_42122);

(statearr_42160_43269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (10))){
var inst_42112 = (state_42141[(14)]);
var inst_42115 = (state_42141[(2)]);
var inst_42116 = lpdashboard.ethereum._LT_token_decimals(inst_42112);
var state_42141__$1 = (function (){var statearr_42161 = state_42141;
(statearr_42161[(11)] = inst_42115);

return statearr_42161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42141__$1,(11),inst_42116);
} else {
if((state_val_42142 === (8))){
var inst_42102 = (state_42141[(7)]);
var state_42141__$1 = state_42141;
var statearr_42162_43270 = state_42141__$1;
(statearr_42162_43270[(2)] = inst_42102);

(statearr_42162_43270[(1)] = (9));


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
var statearr_42163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42163[(0)] = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__);

(statearr_42163[(1)] = (1));

return statearr_42163;
});
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1 = (function (state_42141){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42141);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42164){var ex__36688__auto__ = e42164;
var statearr_42165_43271 = state_42141;
(statearr_42165_43271[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42141[(4)]))){
var statearr_42166_43272 = state_42141;
(statearr_42166_43272[(1)] = cljs.core.first((state_42141[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43273 = state_42141;
state_42141 = G__43273;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__ = function(state_42141){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1.call(this,state_42141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42167 = f__36777__auto__();
(statearr_42167[(6)] = c__36776__auto__);

return statearr_42167;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42193){
var state_val_42194 = (state_42193[(1)]);
if((state_val_42194 === (1))){
var inst_42168 = (state_42193[(7)]);
var inst_42168__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var inst_42169 = inst_42168__$1.poolLength();
var inst_42170 = cljs.core.async.interop.p__GT_c(inst_42169);
var state_42193__$1 = (function (){var statearr_42195 = state_42193;
(statearr_42195[(7)] = inst_42168__$1);

return statearr_42195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42193__$1,(2),inst_42170);
} else {
if((state_val_42194 === (2))){
var inst_42172 = (state_42193[(8)]);
var inst_42172__$1 = (state_42193[(2)]);
var inst_42173 = (inst_42172__$1 instanceof cljs.core.ExceptionInfo);
var inst_42174 = cljs.core.ex_data(inst_42172__$1);
var inst_42175 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42174);
var inst_42176 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42175,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42177 = ((inst_42173) && (inst_42176));
var state_42193__$1 = (function (){var statearr_42196 = state_42193;
(statearr_42196[(8)] = inst_42172__$1);

return statearr_42196;
})();
if(cljs.core.truth_(inst_42177)){
var statearr_42197_43274 = state_42193__$1;
(statearr_42197_43274[(1)] = (3));

} else {
var statearr_42198_43275 = state_42193__$1;
(statearr_42198_43275[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (3))){
var inst_42172 = (state_42193[(8)]);
var inst_42179 = (function(){throw inst_42172})();
var state_42193__$1 = state_42193;
var statearr_42199_43276 = state_42193__$1;
(statearr_42199_43276[(2)] = inst_42179);

(statearr_42199_43276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (4))){
var inst_42172 = (state_42193[(8)]);
var state_42193__$1 = state_42193;
var statearr_42200_43277 = state_42193__$1;
(statearr_42200_43277[(2)] = inst_42172);

(statearr_42200_43277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42194 === (5))){
var inst_42168 = (state_42193[(7)]);
var inst_42182 = (state_42193[(2)]);
var inst_42183 = cljs.core.identity(inst_42182);
var inst_42184 = (function (){var contract = inst_42168;
var many_pools = inst_42183;
return (function (p){
var c__36776__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42221){
var state_val_42222 = (state_42221[(1)]);
if((state_val_42222 === (1))){
var inst_42201 = contract.poolInfo(p);
var inst_42202 = cljs.core.async.interop.p__GT_c(inst_42201);
var state_42221__$1 = state_42221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42221__$1,(2),inst_42202);
} else {
if((state_val_42222 === (2))){
var inst_42204 = (state_42221[(7)]);
var inst_42204__$1 = (state_42221[(2)]);
var inst_42205 = (inst_42204__$1 instanceof cljs.core.ExceptionInfo);
var inst_42206 = cljs.core.ex_data(inst_42204__$1);
var inst_42207 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42206);
var inst_42208 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42207,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42209 = ((inst_42205) && (inst_42208));
var state_42221__$1 = (function (){var statearr_42223 = state_42221;
(statearr_42223[(7)] = inst_42204__$1);

return statearr_42223;
})();
if(cljs.core.truth_(inst_42209)){
var statearr_42224_43278 = state_42221__$1;
(statearr_42224_43278[(1)] = (3));

} else {
var statearr_42225_43279 = state_42221__$1;
(statearr_42225_43279[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (3))){
var inst_42204 = (state_42221[(7)]);
var inst_42211 = (function(){throw inst_42204})();
var state_42221__$1 = state_42221;
var statearr_42226_43280 = state_42221__$1;
(statearr_42226_43280[(2)] = inst_42211);

(statearr_42226_43280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (4))){
var inst_42204 = (state_42221[(7)]);
var state_42221__$1 = state_42221;
var statearr_42227_43281 = state_42221__$1;
(statearr_42227_43281[(2)] = inst_42204);

(statearr_42227_43281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (5))){
var inst_42214 = (state_42221[(2)]);
var inst_42215 = cljs.core.first(inst_42214);
var inst_42216 = clojure.string.lower_case(inst_42215);
var inst_42217 = [inst_42216];
var inst_42218 = [p];
var inst_42219 = cljs.core.PersistentHashMap.fromArrays(inst_42217,inst_42218);
var state_42221__$1 = state_42221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42221__$1,inst_42219);
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
var statearr_42228 = [null,null,null,null,null,null,null,null];
(statearr_42228[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_42228[(1)] = (1));

return statearr_42228;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_42221){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42221);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42229){var ex__36688__auto__ = e42229;
var statearr_42230_43282 = state_42221;
(statearr_42230_43282[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42221[(4)]))){
var statearr_42231_43283 = state_42221;
(statearr_42231_43283[(1)] = cljs.core.first((state_42221[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43284 = state_42221;
state_42221 = G__43284;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_42221){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_42221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42232 = f__36777__auto__();
(statearr_42232[(6)] = c__36776__auto____$1);

return statearr_42232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto____$1;
});
})();
var inst_42185 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_42183);
var inst_42186 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42184,inst_42185);
var inst_42187 = cljs.core.PersistentHashMap.EMPTY;
var inst_42188 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_42186);
var inst_42189 = cljs.core.async.reduce(cljs.core.merge,inst_42187,inst_42188);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42193__$1,(6),inst_42189);
} else {
if((state_val_42194 === (6))){
var inst_42191 = (state_42193[(2)]);
var state_42193__$1 = state_42193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42193__$1,inst_42191);
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
var statearr_42233 = [null,null,null,null,null,null,null,null,null];
(statearr_42233[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_42233[(1)] = (1));

return statearr_42233;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_42193){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42193);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42234){var ex__36688__auto__ = e42234;
var statearr_42235_43285 = state_42193;
(statearr_42235_43285[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42193[(4)]))){
var statearr_42236_43286 = state_42193;
(statearr_42236_43286[(1)] = cljs.core.first((state_42193[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43287 = state_42193;
state_42193 = G__43287;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_42193){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_42193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42237 = f__36777__auto__();
(statearr_42237[(6)] = c__36776__auto__);

return statearr_42237;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42277){
var state_val_42278 = (state_42277[(1)]);
if((state_val_42278 === (7))){
var inst_42260 = (state_42277[(7)]);
var inst_42256 = (state_42277[(8)]);
var inst_42260__$1 = (state_42277[(2)]);
var inst_42261 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re:",inst_42260__$1], 0));
var inst_42262 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_42256,staking_address,user_address);
var state_42277__$1 = (function (){var statearr_42279 = state_42277;
(statearr_42279[(9)] = inst_42261);

(statearr_42279[(7)] = inst_42260__$1);

return statearr_42279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(8),inst_42262);
} else {
if((state_val_42278 === (1))){
var inst_42238 = lpdashboard.core._LT_staked_prop(staking_address,user_address);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(2),inst_42238);
} else {
if((state_val_42278 === (4))){
var inst_42248 = (state_42277[(10)]);
var inst_42248__$1 = (state_42277[(2)]);
var inst_42249 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["total-unis:",inst_42248__$1], 0));
var inst_42250 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_42277__$1 = (function (){var statearr_42280 = state_42277;
(statearr_42280[(11)] = inst_42249);

(statearr_42280[(10)] = inst_42248__$1);

return statearr_42280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(5),inst_42250);
} else {
if((state_val_42278 === (6))){
var inst_42256 = (state_42277[(8)]);
var inst_42256__$1 = (state_42277[(2)]);
var inst_42257 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rt:",inst_42256__$1], 0));
var inst_42258 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_42256__$1,user_address);
var state_42277__$1 = (function (){var statearr_42281 = state_42277;
(statearr_42281[(12)] = inst_42257);

(statearr_42281[(8)] = inst_42256__$1);

return statearr_42281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(7),inst_42258);
} else {
if((state_val_42278 === (3))){
var inst_42244 = (state_42277[(13)]);
var inst_42240 = (state_42277[(14)]);
var inst_42243 = (state_42277[(2)]);
var inst_42244__$1 = lpdashboard.core.staked_lps(inst_42240,inst_42243);
var inst_42245 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["my-unis:",inst_42244__$1], 0));
var inst_42246 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_42277__$1 = (function (){var statearr_42282 = state_42277;
(statearr_42282[(13)] = inst_42244__$1);

(statearr_42282[(15)] = inst_42245);

return statearr_42282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(4),inst_42246);
} else {
if((state_val_42278 === (2))){
var inst_42240 = (state_42277[(2)]);
var inst_42241 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_42277__$1 = (function (){var statearr_42283 = state_42277;
(statearr_42283[(14)] = inst_42240);

return statearr_42283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(3),inst_42241);
} else {
if((state_val_42278 === (9))){
var inst_42244 = (state_42277[(13)]);
var inst_42266 = (state_42277[(16)]);
var inst_42260 = (state_42277[(7)]);
var inst_42248 = (state_42277[(10)]);
var inst_42256 = (state_42277[(8)]);
var inst_42252 = (state_42277[(17)]);
var inst_42269 = (state_42277[(2)]);
var inst_42270 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tpr",inst_42269], 0));
var inst_42271 = lpdashboard.core.staked_positions(inst_42269,inst_42248,inst_42244,inst_42252);
var inst_42272 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_42273 = [inst_42260,inst_42256,inst_42266];
var inst_42274 = cljs.core.PersistentHashMap.fromArrays(inst_42272,inst_42273);
var inst_42275 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_42271,inst_42274);
var state_42277__$1 = (function (){var statearr_42284 = state_42277;
(statearr_42284[(18)] = inst_42270);

return statearr_42284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42277__$1,inst_42275);
} else {
if((state_val_42278 === (5))){
var inst_42252 = (state_42277[(17)]);
var inst_42252__$1 = (state_42277[(2)]);
var inst_42253 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lp-symbols:",inst_42252__$1], 0));
var inst_42254 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_42277__$1 = (function (){var statearr_42285 = state_42277;
(statearr_42285[(19)] = inst_42253);

(statearr_42285[(17)] = inst_42252__$1);

return statearr_42285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(6),inst_42254);
} else {
if((state_val_42278 === (8))){
var inst_42264 = (state_42277[(2)]);
var inst_42265 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rtr:",inst_42264], 0));
var inst_42266 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_42264);
var inst_42267 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_42277__$1 = (function (){var statearr_42286 = state_42277;
(statearr_42286[(20)] = inst_42265);

(statearr_42286[(16)] = inst_42266);

return statearr_42286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(9),inst_42267);
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
var statearr_42287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42287[(0)] = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__);

(statearr_42287[(1)] = (1));

return statearr_42287;
});
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1 = (function (state_42277){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42277);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42288){var ex__36688__auto__ = e42288;
var statearr_42289_43288 = state_42277;
(statearr_42289_43288[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42277[(4)]))){
var statearr_42290_43289 = state_42277;
(statearr_42290_43289[(1)] = cljs.core.first((state_42277[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43290 = state_42277;
state_42277 = G__43290;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__ = function(state_42277){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1.call(this,state_42277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42291 = f__36777__auto__();
(statearr_42291[(6)] = c__36776__auto__);

return statearr_42291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_lpbar = (function lpdashboard$core$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42343){
var state_val_42344 = (state_42343[(1)]);
if((state_val_42344 === (7))){
var inst_42312 = (state_42343[(2)]);
var inst_42313 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_42343__$1 = (function (){var statearr_42345 = state_42343;
(statearr_42345[(7)] = inst_42312);

return statearr_42345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(8),inst_42313);
} else {
if((state_val_42344 === (1))){
var inst_42292 = (state_42343[(8)]);
var inst_42292__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.lpbar_abi,staking_address);
var inst_42293 = inst_42292__$1.lpBalance(user_address);
var inst_42294 = cljs.core.async.interop.p__GT_c(inst_42293);
var state_42343__$1 = (function (){var statearr_42346 = state_42343;
(statearr_42346[(8)] = inst_42292__$1);

return statearr_42346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(2),inst_42294);
} else {
if((state_val_42344 === (4))){
var inst_42296 = (state_42343[(9)]);
var state_42343__$1 = state_42343;
var statearr_42347_43291 = state_42343__$1;
(statearr_42347_43291[(2)] = inst_42296);

(statearr_42347_43291[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (15))){
var inst_42341 = (state_42343[(2)]);
var state_42343__$1 = state_42343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42343__$1,inst_42341);
} else {
if((state_val_42344 === (13))){
var inst_42306 = (state_42343[(10)]);
var inst_42312 = (state_42343[(7)]);
var inst_42309 = (state_42343[(11)]);
var inst_42315 = (state_42343[(12)]);
var inst_42334 = lpdashboard.core.staked_positions(inst_42315,inst_42309,inst_42306,inst_42312);
var state_42343__$1 = state_42343;
var statearr_42348_43292 = state_42343__$1;
(statearr_42348_43292[(2)] = inst_42334);

(statearr_42348_43292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (6))){
var inst_42309 = (state_42343[(2)]);
var inst_42310 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_42343__$1 = (function (){var statearr_42349 = state_42343;
(statearr_42349[(11)] = inst_42309);

return statearr_42349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(7),inst_42310);
} else {
if((state_val_42344 === (3))){
var inst_42296 = (state_42343[(9)]);
var inst_42303 = (function(){throw inst_42296})();
var state_42343__$1 = state_42343;
var statearr_42350_43293 = state_42343__$1;
(statearr_42350_43293[(2)] = inst_42303);

(statearr_42350_43293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (12))){
var inst_42329 = (state_42343[(13)]);
var inst_42329__$1 = (state_42343[(2)]);
var inst_42330 = clojure.string.lower_case(inst_42329__$1);
var inst_42331 = clojure.string.lower_case(lp_address);
var inst_42332 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42330,inst_42331);
var state_42343__$1 = (function (){var statearr_42351 = state_42343;
(statearr_42351[(13)] = inst_42329__$1);

return statearr_42351;
})();
if(inst_42332){
var statearr_42352_43294 = state_42343__$1;
(statearr_42352_43294[(1)] = (13));

} else {
var statearr_42353_43295 = state_42343__$1;
(statearr_42353_43295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (2))){
var inst_42296 = (state_42343[(9)]);
var inst_42296__$1 = (state_42343[(2)]);
var inst_42297 = (inst_42296__$1 instanceof cljs.core.ExceptionInfo);
var inst_42298 = cljs.core.ex_data(inst_42296__$1);
var inst_42299 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42298);
var inst_42300 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42299,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42301 = ((inst_42297) && (inst_42300));
var state_42343__$1 = (function (){var statearr_42354 = state_42343;
(statearr_42354[(9)] = inst_42296__$1);

return statearr_42354;
})();
if(cljs.core.truth_(inst_42301)){
var statearr_42355_43296 = state_42343__$1;
(statearr_42355_43296[(1)] = (3));

} else {
var statearr_42356_43297 = state_42343__$1;
(statearr_42356_43297[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (11))){
var inst_42319 = (state_42343[(14)]);
var state_42343__$1 = state_42343;
var statearr_42357_43298 = state_42343__$1;
(statearr_42357_43298[(2)] = inst_42319);

(statearr_42357_43298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (9))){
var inst_42319 = (state_42343[(14)]);
var inst_42319__$1 = (state_42343[(2)]);
var inst_42320 = (inst_42319__$1 instanceof cljs.core.ExceptionInfo);
var inst_42321 = cljs.core.ex_data(inst_42319__$1);
var inst_42322 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42321);
var inst_42323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42322,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42324 = ((inst_42320) && (inst_42323));
var state_42343__$1 = (function (){var statearr_42358 = state_42343;
(statearr_42358[(14)] = inst_42319__$1);

return statearr_42358;
})();
if(cljs.core.truth_(inst_42324)){
var statearr_42359_43299 = state_42343__$1;
(statearr_42359_43299[(1)] = (10));

} else {
var statearr_42360_43300 = state_42343__$1;
(statearr_42360_43300[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (5))){
var inst_42306 = (state_42343[(2)]);
var inst_42307 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_42343__$1 = (function (){var statearr_42361 = state_42343;
(statearr_42361[(10)] = inst_42306);

return statearr_42361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(6),inst_42307);
} else {
if((state_val_42344 === (14))){
var inst_42329 = (state_42343[(13)]);
var inst_42336 = console.log("lp addresses do not match:",staking_address,lp_address,inst_42329);
var inst_42337 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_42338 = [(0),(0)];
var inst_42339 = cljs.core.PersistentHashMap.fromArrays(inst_42337,inst_42338);
var state_42343__$1 = (function (){var statearr_42362 = state_42343;
(statearr_42362[(15)] = inst_42336);

return statearr_42362;
})();
var statearr_42363_43301 = state_42343__$1;
(statearr_42363_43301[(2)] = inst_42339);

(statearr_42363_43301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (10))){
var inst_42319 = (state_42343[(14)]);
var inst_42326 = (function(){throw inst_42319})();
var state_42343__$1 = state_42343;
var statearr_42364_43302 = state_42343__$1;
(statearr_42364_43302[(2)] = inst_42326);

(statearr_42364_43302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (8))){
var inst_42292 = (state_42343[(8)]);
var inst_42315 = (state_42343[(2)]);
var inst_42316 = inst_42292.lp();
var inst_42317 = cljs.core.async.interop.p__GT_c(inst_42316);
var state_42343__$1 = (function (){var statearr_42365 = state_42343;
(statearr_42365[(12)] = inst_42315);

return statearr_42365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(9),inst_42317);
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
var statearr_42366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42366[(0)] = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__);

(statearr_42366[(1)] = (1));

return statearr_42366;
});
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1 = (function (state_42343){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42343);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42367){var ex__36688__auto__ = e42367;
var statearr_42368_43303 = state_42343;
(statearr_42368_43303[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42343[(4)]))){
var statearr_42369_43304 = state_42343;
(statearr_42369_43304[(1)] = cljs.core.first((state_42343[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43305 = state_42343;
state_42343 = G__43305;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__ = function(state_42343){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1.call(this,state_42343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42370 = f__36777__auto__();
(statearr_42370[(6)] = c__36776__auto__);

return statearr_42370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_sashimi_plate = (function lpdashboard$core$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42452){
var state_val_42453 = (state_42452[(1)]);
if((state_val_42453 === (7))){
var inst_42400 = (state_42452[(7)]);
var inst_42400__$1 = (state_42452[(2)]);
var inst_42401 = (inst_42400__$1 instanceof cljs.core.ExceptionInfo);
var inst_42402 = cljs.core.ex_data(inst_42400__$1);
var inst_42403 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42402);
var inst_42404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42403,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42405 = ((inst_42401) && (inst_42404));
var state_42452__$1 = (function (){var statearr_42454 = state_42452;
(statearr_42454[(7)] = inst_42400__$1);

return statearr_42454;
})();
if(cljs.core.truth_(inst_42405)){
var statearr_42455_43306 = state_42452__$1;
(statearr_42455_43306[(1)] = (8));

} else {
var statearr_42456_43307 = state_42452__$1;
(statearr_42456_43307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (20))){
var inst_42395 = (state_42452[(8)]);
var inst_42426 = (state_42452[(9)]);
var inst_42445 = console.log("lp addresses do not match:",inst_42395,lp_address,inst_42426);
var inst_42446 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_42447 = [(0),(0)];
var inst_42448 = cljs.core.PersistentHashMap.fromArrays(inst_42446,inst_42447);
var state_42452__$1 = (function (){var statearr_42457 = state_42452;
(statearr_42457[(10)] = inst_42445);

return statearr_42457;
})();
var statearr_42458_43308 = state_42452__$1;
(statearr_42458_43308[(2)] = inst_42448);

(statearr_42458_43308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (1))){
var inst_42371 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,staking_address);
var inst_42372 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address);
var state_42452__$1 = (function (){var statearr_42459 = state_42452;
(statearr_42459[(11)] = inst_42371);

return statearr_42459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(2),inst_42372);
} else {
if((state_val_42453 === (4))){
var inst_42380 = (state_42452[(12)]);
var inst_42387 = (function(){throw inst_42380})();
var state_42452__$1 = state_42452;
var statearr_42460_43309 = state_42452__$1;
(statearr_42460_43309[(2)] = inst_42387);

(statearr_42460_43309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (15))){
var inst_42429 = (state_42452[(2)]);
var inst_42430 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_42452__$1 = (function (){var statearr_42461 = state_42452;
(statearr_42461[(13)] = inst_42429);

return statearr_42461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(16),inst_42430);
} else {
if((state_val_42453 === (21))){
var inst_42450 = (state_42452[(2)]);
var state_42452__$1 = state_42452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42452__$1,inst_42450);
} else {
if((state_val_42453 === (13))){
var inst_42415 = (state_42452[(14)]);
var state_42452__$1 = state_42452;
var statearr_42462_43310 = state_42452__$1;
(statearr_42462_43310[(2)] = inst_42415);

(statearr_42462_43310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (6))){
var inst_42395 = (state_42452[(8)]);
var inst_42393 = (state_42452[(15)]);
var inst_42396 = (state_42452[(16)]);
var inst_42374 = (state_42452[(17)]);
var inst_42390 = (state_42452[(2)]);
var inst_42391 = lpdashboard.ethereum.sashimi_iface.parseTransaction(inst_42390);
var inst_42392 = inst_42391.args;
var inst_42393__$1 = inst_42392.pid;
var inst_42394 = cljs.core.first(inst_42374);
var inst_42395__$1 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_42394);
var inst_42396__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,inst_42395__$1);
var inst_42397 = inst_42396__$1.userInfo(inst_42393__$1,user_address);
var inst_42398 = cljs.core.async.interop.p__GT_c(inst_42397);
var state_42452__$1 = (function (){var statearr_42463 = state_42452;
(statearr_42463[(8)] = inst_42395__$1);

(statearr_42463[(15)] = inst_42393__$1);

(statearr_42463[(16)] = inst_42396__$1);

return statearr_42463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(7),inst_42398);
} else {
if((state_val_42453 === (17))){
var inst_42435 = (state_42452[(2)]);
var inst_42436 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_42452__$1 = (function (){var statearr_42464 = state_42452;
(statearr_42464[(18)] = inst_42435);

return statearr_42464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(18),inst_42436);
} else {
if((state_val_42453 === (3))){
var inst_42380 = (state_42452[(12)]);
var inst_42380__$1 = (state_42452[(2)]);
var inst_42381 = (inst_42380__$1 instanceof cljs.core.ExceptionInfo);
var inst_42382 = cljs.core.ex_data(inst_42380__$1);
var inst_42383 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42382);
var inst_42384 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42383,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42385 = ((inst_42381) && (inst_42384));
var state_42452__$1 = (function (){var statearr_42465 = state_42452;
(statearr_42465[(12)] = inst_42380__$1);

return statearr_42465;
})();
if(cljs.core.truth_(inst_42385)){
var statearr_42466_43311 = state_42452__$1;
(statearr_42466_43311[(1)] = (4));

} else {
var statearr_42467_43312 = state_42452__$1;
(statearr_42467_43312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (12))){
var inst_42415 = (state_42452[(14)]);
var inst_42422 = (function(){throw inst_42415})();
var state_42452__$1 = state_42452;
var statearr_42468_43313 = state_42452__$1;
(statearr_42468_43313[(2)] = inst_42422);

(statearr_42468_43313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (2))){
var inst_42374 = (state_42452[(17)]);
var inst_42374__$1 = (state_42452[(2)]);
var inst_42375 = cljs.core.first(inst_42374__$1);
var inst_42376 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_42375);
var inst_42377 = lpdashboard.core.provider.getTransaction(inst_42376);
var inst_42378 = cljs.core.async.interop.p__GT_c(inst_42377);
var state_42452__$1 = (function (){var statearr_42469 = state_42452;
(statearr_42469[(17)] = inst_42374__$1);

return statearr_42469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(3),inst_42378);
} else {
if((state_val_42453 === (19))){
var inst_42438 = (state_42452[(19)]);
var inst_42411 = (state_42452[(20)]);
var inst_42432 = (state_42452[(21)]);
var inst_42435 = (state_42452[(18)]);
var inst_42443 = lpdashboard.core.staked_positions(inst_42438,inst_42432,inst_42411,inst_42435);
var state_42452__$1 = state_42452;
var statearr_42470_43314 = state_42452__$1;
(statearr_42470_43314[(2)] = inst_42443);

(statearr_42470_43314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (11))){
var inst_42415 = (state_42452[(14)]);
var inst_42415__$1 = (state_42452[(2)]);
var inst_42416 = (inst_42415__$1 instanceof cljs.core.ExceptionInfo);
var inst_42417 = cljs.core.ex_data(inst_42415__$1);
var inst_42418 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42417);
var inst_42419 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42418,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42420 = ((inst_42416) && (inst_42419));
var state_42452__$1 = (function (){var statearr_42471 = state_42452;
(statearr_42471[(14)] = inst_42415__$1);

return statearr_42471;
})();
if(cljs.core.truth_(inst_42420)){
var statearr_42472_43315 = state_42452__$1;
(statearr_42472_43315[(1)] = (12));

} else {
var statearr_42473_43316 = state_42452__$1;
(statearr_42473_43316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (9))){
var inst_42400 = (state_42452[(7)]);
var state_42452__$1 = state_42452;
var statearr_42474_43317 = state_42452__$1;
(statearr_42474_43317[(2)] = inst_42400);

(statearr_42474_43317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (5))){
var inst_42380 = (state_42452[(12)]);
var state_42452__$1 = state_42452;
var statearr_42475_43318 = state_42452__$1;
(statearr_42475_43318[(2)] = inst_42380);

(statearr_42475_43318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (14))){
var inst_42425 = (state_42452[(2)]);
var inst_42426 = cljs.core.first(inst_42425);
var inst_42427 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_42452__$1 = (function (){var statearr_42476 = state_42452;
(statearr_42476[(9)] = inst_42426);

return statearr_42476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(15),inst_42427);
} else {
if((state_val_42453 === (16))){
var inst_42432 = (state_42452[(2)]);
var inst_42433 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_42452__$1 = (function (){var statearr_42477 = state_42452;
(statearr_42477[(21)] = inst_42432);

return statearr_42477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(17),inst_42433);
} else {
if((state_val_42453 === (10))){
var inst_42393 = (state_42452[(15)]);
var inst_42396 = (state_42452[(16)]);
var inst_42410 = (state_42452[(2)]);
var inst_42411 = cljs.core.first(inst_42410);
var inst_42412 = inst_42396.poolInfo(inst_42393);
var inst_42413 = cljs.core.async.interop.p__GT_c(inst_42412);
var state_42452__$1 = (function (){var statearr_42478 = state_42452;
(statearr_42478[(20)] = inst_42411);

return statearr_42478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42452__$1,(11),inst_42413);
} else {
if((state_val_42453 === (18))){
var inst_42426 = (state_42452[(9)]);
var inst_42438 = (state_42452[(2)]);
var inst_42439 = clojure.string.lower_case(inst_42426);
var inst_42440 = clojure.string.lower_case(lp_address);
var inst_42441 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42439,inst_42440);
var state_42452__$1 = (function (){var statearr_42479 = state_42452;
(statearr_42479[(19)] = inst_42438);

return statearr_42479;
})();
if(inst_42441){
var statearr_42480_43319 = state_42452__$1;
(statearr_42480_43319[(1)] = (19));

} else {
var statearr_42481_43320 = state_42452__$1;
(statearr_42481_43320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42453 === (8))){
var inst_42400 = (state_42452[(7)]);
var inst_42407 = (function(){throw inst_42400})();
var state_42452__$1 = state_42452;
var statearr_42482_43321 = state_42452__$1;
(statearr_42482_43321[(2)] = inst_42407);

(statearr_42482_43321[(1)] = (10));


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
var statearr_42483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42483[(0)] = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__);

(statearr_42483[(1)] = (1));

return statearr_42483;
});
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1 = (function (state_42452){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42452);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42484){var ex__36688__auto__ = e42484;
var statearr_42485_43322 = state_42452;
(statearr_42485_43322[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42452[(4)]))){
var statearr_42486_43323 = state_42452;
(statearr_42486_43323[(1)] = cljs.core.first((state_42452[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43324 = state_42452;
state_42452 = G__43324;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__ = function(state_42452){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1.call(this,state_42452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42487 = f__36777__auto__();
(statearr_42487[(6)] = c__36776__auto__);

return statearr_42487;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42665){
var state_val_42666 = (state_42665[(1)]);
if((state_val_42666 === (7))){
var inst_42515 = (state_42665[(7)]);
var inst_42522 = (function(){throw inst_42515})();
var state_42665__$1 = state_42665;
var statearr_42667_43325 = state_42665__$1;
(statearr_42667_43325[(2)] = inst_42522);

(statearr_42667_43325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (20))){
var inst_42661 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42668_43326 = state_42665__$1;
(statearr_42668_43326[(2)] = inst_42661);

(statearr_42668_43326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (27))){
var inst_42577 = (state_42665[(8)]);
var state_42665__$1 = state_42665;
var statearr_42669_43327 = state_42665__$1;
(statearr_42669_43327[(2)] = inst_42577);

(statearr_42669_43327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (1))){
var inst_42494 = (function (){return (function (p1__42488_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__42488_SHARP_.transactionHash);
});
})();
var inst_42495 = lpdashboard.core.provider.getLogs(staked_filter);
var inst_42496 = cljs.core.async.interop.p__GT_c(inst_42495);
var state_42665__$1 = (function (){var statearr_42670 = state_42665;
(statearr_42670[(9)] = inst_42494);

return statearr_42670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(2),inst_42496);
} else {
if((state_val_42666 === (24))){
var inst_42572 = (state_42665[(10)]);
var inst_42557 = (state_42665[(11)]);
var inst_42571 = (state_42665[(2)]);
var inst_42572__$1 = cljs.core.first(inst_42571);
var inst_42573 = lpdashboard.utils.ebn__GT_bn(inst_42572__$1,(18));
var inst_42574 = cheff_contract.poolInfo(inst_42557);
var inst_42575 = cljs.core.async.interop.p__GT_c(inst_42574);
var state_42665__$1 = (function (){var statearr_42671 = state_42665;
(statearr_42671[(10)] = inst_42572__$1);

(statearr_42671[(12)] = inst_42573);

return statearr_42671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(25),inst_42575);
} else {
if((state_val_42666 === (39))){
var inst_42597 = (state_42665[(13)]);
var inst_42613 = (state_42665[(14)]);
var inst_42600 = (state_42665[(15)]);
var inst_42587 = (state_42665[(16)]);
var inst_42556 = (state_42665[(17)]);
var inst_42594 = (state_42665[(18)]);
var inst_42572 = (state_42665[(10)]);
var inst_42527 = (state_42665[(19)]);
var inst_42510 = (state_42665[(20)]);
var inst_42553 = (state_42665[(21)]);
var inst_42610 = (state_42665[(22)]);
var inst_42615 = (state_42665[(23)]);
var inst_42607 = (state_42665[(24)]);
var inst_42604 = (state_42665[(25)]);
var inst_42557 = (state_42665[(11)]);
var inst_42591 = (state_42665[(26)]);
var inst_42627 = (state_42665[(27)]);
var inst_42588 = (state_42665[(28)]);
var inst_42617 = (state_42665[(29)]);
var inst_42619 = (state_42665[(30)]);
var inst_42573 = (state_42665[(12)]);
var inst_42630 = (state_42665[(2)]);
var inst_42631 = (function (){var staking_pool_lp_address = inst_42588;
var lp_symbols = inst_42594;
var lp_transfers_in = inst_42613;
var rewards_token = inst_42600;
var pool_pid = inst_42557;
var deposit_data = inst_42556;
var lp_deposits = inst_42617;
var my_lps_staked_SINGLEQUOTE_ = inst_42573;
var my_lps_staked = inst_42572;
var all_staking_deposits = inst_42610;
var staked = inst_42510;
var total_pool_reserves = inst_42597;
var pids = inst_42619;
var pool_info = inst_42587;
var reward_transfers = inst_42607;
var staked2 = inst_42527;
var total_unis = inst_42591;
var lp_decimals = (18);
var lp_transfers_hashes = inst_42615;
var all_staking_withdrawals = inst_42630;
var pid = inst_42627;
var rewards_earned = inst_42604;
var deposit = inst_42553;
return (function (p1__42492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__42492_SHARP_),pid);
});
})();
var inst_42632 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_42630,inst_42610);
var inst_42633 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_42631,inst_42632);
var inst_42634 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_42633);
var inst_42635 = cljs.core.set(inst_42634);
var inst_42636 = (function (){var staking_pool_lp_address = inst_42588;
var lp_symbols = inst_42594;
var lp_transfers_in = inst_42613;
var rewards_token = inst_42600;
var pool_pid = inst_42557;
var deposit_data = inst_42556;
var lp_deposits = inst_42617;
var my_lps_staked_SINGLEQUOTE_ = inst_42573;
var my_lps_staked = inst_42572;
var all_staking_deposits = inst_42610;
var staked = inst_42510;
var total_pool_reserves = inst_42597;
var pids = inst_42619;
var pool_info = inst_42587;
var reward_transfers = inst_42607;
var staked2 = inst_42527;
var total_unis = inst_42591;
var relevant_txids = inst_42635;
var lp_decimals = (18);
var lp_transfers_hashes = inst_42615;
var all_staking_withdrawals = inst_42630;
var pid = inst_42627;
var rewards_earned = inst_42604;
var deposit = inst_42553;
return (function (p1__42493_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__42493_SHARP_));
});
})();
var inst_42637 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_42636,inst_42607);
var inst_42638 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_42637);
var inst_42639 = clojure.string.lower_case(inst_42588);
var inst_42640 = clojure.string.lower_case(lp_address);
var inst_42641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42639,inst_42640);
var state_42665__$1 = (function (){var statearr_42672 = state_42665;
(statearr_42672[(31)] = inst_42638);

return statearr_42672;
})();
if(inst_42641){
var statearr_42673_43328 = state_42665__$1;
(statearr_42673_43328[(1)] = (40));

} else {
var statearr_42674_43329 = state_42665__$1;
(statearr_42674_43329[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (4))){
var inst_42498 = (state_42665[(32)]);
var state_42665__$1 = state_42665;
var statearr_42675_43330 = state_42665__$1;
(statearr_42675_43330[(2)] = inst_42498);

(statearr_42675_43330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (15))){
var inst_42541 = (state_42665[(33)]);
var inst_42548 = (function(){throw inst_42541})();
var state_42665__$1 = state_42665;
var statearr_42676_43331 = state_42665__$1;
(statearr_42676_43331[(2)] = inst_42548);

(statearr_42676_43331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (21))){
var inst_42561 = (state_42665[(34)]);
var inst_42561__$1 = (state_42665[(2)]);
var inst_42562 = (inst_42561__$1 instanceof cljs.core.ExceptionInfo);
var inst_42563 = cljs.core.ex_data(inst_42561__$1);
var inst_42564 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42563);
var inst_42565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42564,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42566 = ((inst_42562) && (inst_42565));
var state_42665__$1 = (function (){var statearr_42677 = state_42665;
(statearr_42677[(34)] = inst_42561__$1);

return statearr_42677;
})();
if(cljs.core.truth_(inst_42566)){
var statearr_42678_43332 = state_42665__$1;
(statearr_42678_43332[(1)] = (22));

} else {
var statearr_42679_43333 = state_42665__$1;
(statearr_42679_43333[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (31))){
var inst_42597 = (state_42665[(2)]);
var inst_42598 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_42665__$1 = (function (){var statearr_42680 = state_42665;
(statearr_42680[(13)] = inst_42597);

return statearr_42680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(32),inst_42598);
} else {
if((state_val_42666 === (32))){
var inst_42600 = (state_42665[(15)]);
var inst_42600__$1 = (state_42665[(2)]);
var inst_42601 = [new cljs.core.Keyword(null,"qty","qty",155560951)];
var inst_42602 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_42603 = [inst_42602];
var inst_42604 = cljs.core.PersistentHashMap.fromArrays(inst_42601,inst_42603);
var inst_42605 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_42600__$1,staking_address,user_address);
var state_42665__$1 = (function (){var statearr_42681 = state_42665;
(statearr_42681[(15)] = inst_42600__$1);

(statearr_42681[(25)] = inst_42604);

return statearr_42681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(33),inst_42605);
} else {
if((state_val_42666 === (40))){
var inst_42597 = (state_42665[(13)]);
var inst_42638 = (state_42665[(31)]);
var inst_42600 = (state_42665[(15)]);
var inst_42594 = (state_42665[(18)]);
var inst_42604 = (state_42665[(25)]);
var inst_42591 = (state_42665[(26)]);
var inst_42573 = (state_42665[(12)]);
var inst_42643 = lpdashboard.core.staked_positions(inst_42597,inst_42591,inst_42573,inst_42594);
var inst_42644 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_42645 = [inst_42604,inst_42600,inst_42638];
var inst_42646 = cljs.core.PersistentHashMap.fromArrays(inst_42644,inst_42645);
var inst_42647 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_42643,inst_42646);
var state_42665__$1 = state_42665;
var statearr_42682_43334 = state_42665__$1;
(statearr_42682_43334[(2)] = inst_42647);

(statearr_42682_43334[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (33))){
var inst_42607 = (state_42665[(2)]);
var inst_42608 = lpdashboard.ethereum._LT_user_token_deposits(lpdashboard.core.provider,staking_address,user_address);
var state_42665__$1 = (function (){var statearr_42683 = state_42665;
(statearr_42683[(24)] = inst_42607);

return statearr_42683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(34),inst_42608);
} else {
if((state_val_42666 === (13))){
var inst_42535 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42684_43335 = state_42665__$1;
(statearr_42684_43335[(2)] = inst_42535);

(statearr_42684_43335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (22))){
var inst_42561 = (state_42665[(34)]);
var inst_42568 = (function(){throw inst_42561})();
var state_42665__$1 = state_42665;
var statearr_42685_43336 = state_42665__$1;
(statearr_42685_43336[(2)] = inst_42568);

(statearr_42685_43336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (36))){
var inst_42619 = (state_42665[(30)]);
var inst_42623 = cljs.core.first(inst_42619);
var state_42665__$1 = state_42665;
var statearr_42686_43337 = state_42665__$1;
(statearr_42686_43337[(2)] = inst_42623);

(statearr_42686_43337[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (41))){
var inst_42597 = (state_42665[(13)]);
var inst_42638 = (state_42665[(31)]);
var inst_42600 = (state_42665[(15)]);
var inst_42594 = (state_42665[(18)]);
var inst_42604 = (state_42665[(25)]);
var inst_42557 = (state_42665[(11)]);
var inst_42591 = (state_42665[(26)]);
var inst_42588 = (state_42665[(28)]);
var inst_42649 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42557);
var inst_42650 = console.log("lp addresses do not match:",staking_address,lp_address,inst_42588,"pid",inst_42649);
var inst_42651 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_42652 = lpdashboard.core.staked_positions(inst_42597,inst_42591,inst_42651,inst_42594);
var inst_42653 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_42654 = [inst_42604,inst_42600,inst_42638];
var inst_42655 = cljs.core.PersistentHashMap.fromArrays(inst_42653,inst_42654);
var inst_42656 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_42652,inst_42655);
var state_42665__$1 = (function (){var statearr_42687 = state_42665;
(statearr_42687[(35)] = inst_42650);

return statearr_42687;
})();
var statearr_42688_43338 = state_42665__$1;
(statearr_42688_43338[(2)] = inst_42656);

(statearr_42688_43338[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (29))){
var inst_42591 = (state_42665[(2)]);
var inst_42592 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_42665__$1 = (function (){var statearr_42689 = state_42665;
(statearr_42689[(26)] = inst_42591);

return statearr_42689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(30),inst_42592);
} else {
if((state_val_42666 === (6))){
var inst_42515 = (state_42665[(7)]);
var inst_42515__$1 = (state_42665[(2)]);
var inst_42516 = (inst_42515__$1 instanceof cljs.core.ExceptionInfo);
var inst_42517 = cljs.core.ex_data(inst_42515__$1);
var inst_42518 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42517);
var inst_42519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42518,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42520 = ((inst_42516) && (inst_42519));
var state_42665__$1 = (function (){var statearr_42690 = state_42665;
(statearr_42690[(7)] = inst_42515__$1);

return statearr_42690;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42691_43339 = state_42665__$1;
(statearr_42691_43339[(1)] = (7));

} else {
var statearr_42692_43340 = state_42665__$1;
(statearr_42692_43340[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (28))){
var inst_42587 = (state_42665[(16)]);
var inst_42587__$1 = (state_42665[(2)]);
var inst_42588 = cljs.core.first(inst_42587__$1);
var inst_42589 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_42665__$1 = (function (){var statearr_42693 = state_42665;
(statearr_42693[(16)] = inst_42587__$1);

(statearr_42693[(28)] = inst_42588);

return statearr_42693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(29),inst_42589);
} else {
if((state_val_42666 === (25))){
var inst_42577 = (state_42665[(8)]);
var inst_42577__$1 = (state_42665[(2)]);
var inst_42578 = (inst_42577__$1 instanceof cljs.core.ExceptionInfo);
var inst_42579 = cljs.core.ex_data(inst_42577__$1);
var inst_42580 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42579);
var inst_42581 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42580,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42582 = ((inst_42578) && (inst_42581));
var state_42665__$1 = (function (){var statearr_42694 = state_42665;
(statearr_42694[(8)] = inst_42577__$1);

return statearr_42694;
})();
if(cljs.core.truth_(inst_42582)){
var statearr_42695_43341 = state_42665__$1;
(statearr_42695_43341[(1)] = (26));

} else {
var statearr_42696_43342 = state_42665__$1;
(statearr_42696_43342[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (34))){
var inst_42610 = (state_42665[(2)]);
var inst_42611 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,lp_address,user_address,staking_address);
var state_42665__$1 = (function (){var statearr_42697 = state_42665;
(statearr_42697[(22)] = inst_42610);

return statearr_42697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(35),inst_42611);
} else {
if((state_val_42666 === (17))){
var inst_42553 = (state_42665[(21)]);
var inst_42537 = (state_42665[(36)]);
var inst_42551 = (state_42665[(2)]);
var inst_42552 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_42537,inst_42551);
var inst_42553__$1 = cljs.core.first(inst_42552);
var inst_42554 = (inst_42553__$1 == null);
var state_42665__$1 = (function (){var statearr_42698 = state_42665;
(statearr_42698[(21)] = inst_42553__$1);

return statearr_42698;
})();
if(cljs.core.truth_(inst_42554)){
var statearr_42699_43343 = state_42665__$1;
(statearr_42699_43343[(1)] = (18));

} else {
var statearr_42700_43344 = state_42665__$1;
(statearr_42700_43344[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (3))){
var inst_42498 = (state_42665[(32)]);
var inst_42505 = (function(){throw inst_42498})();
var state_42665__$1 = state_42665;
var statearr_42701_43345 = state_42665__$1;
(statearr_42701_43345[(2)] = inst_42505);

(statearr_42701_43345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (12))){
var inst_42663 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42665__$1,inst_42663);
} else {
if((state_val_42666 === (2))){
var inst_42498 = (state_42665[(32)]);
var inst_42498__$1 = (state_42665[(2)]);
var inst_42499 = (inst_42498__$1 instanceof cljs.core.ExceptionInfo);
var inst_42500 = cljs.core.ex_data(inst_42498__$1);
var inst_42501 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42500);
var inst_42502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42501,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42503 = ((inst_42499) && (inst_42502));
var state_42665__$1 = (function (){var statearr_42702 = state_42665;
(statearr_42702[(32)] = inst_42498__$1);

return statearr_42702;
})();
if(cljs.core.truth_(inst_42503)){
var statearr_42703_43346 = state_42665__$1;
(statearr_42703_43346[(1)] = (3));

} else {
var statearr_42704_43347 = state_42665__$1;
(statearr_42704_43347[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (23))){
var inst_42561 = (state_42665[(34)]);
var state_42665__$1 = state_42665;
var statearr_42705_43348 = state_42665__$1;
(statearr_42705_43348[(2)] = inst_42561);

(statearr_42705_43348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (35))){
var inst_42597 = (state_42665[(13)]);
var inst_42613 = (state_42665[(14)]);
var inst_42600 = (state_42665[(15)]);
var inst_42587 = (state_42665[(16)]);
var inst_42556 = (state_42665[(17)]);
var inst_42594 = (state_42665[(18)]);
var inst_42572 = (state_42665[(10)]);
var inst_42527 = (state_42665[(19)]);
var inst_42510 = (state_42665[(20)]);
var inst_42553 = (state_42665[(21)]);
var inst_42610 = (state_42665[(22)]);
var inst_42615 = (state_42665[(23)]);
var inst_42607 = (state_42665[(24)]);
var inst_42604 = (state_42665[(25)]);
var inst_42557 = (state_42665[(11)]);
var inst_42591 = (state_42665[(26)]);
var inst_42588 = (state_42665[(28)]);
var inst_42617 = (state_42665[(29)]);
var inst_42619 = (state_42665[(30)]);
var inst_42573 = (state_42665[(12)]);
var inst_42613__$1 = (state_42665[(2)]);
var inst_42614 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_42613__$1);
var inst_42615__$1 = cljs.core.set(inst_42614);
var inst_42616 = (function (){var staking_pool_lp_address = inst_42588;
var lp_symbols = inst_42594;
var lp_transfers_in = inst_42613__$1;
var rewards_token = inst_42600;
var pool_pid = inst_42557;
var deposit_data = inst_42556;
var my_lps_staked_SINGLEQUOTE_ = inst_42573;
var my_lps_staked = inst_42572;
var all_staking_deposits = inst_42610;
var staked = inst_42510;
var total_pool_reserves = inst_42597;
var pool_info = inst_42587;
var reward_transfers = inst_42607;
var staked2 = inst_42527;
var total_unis = inst_42591;
var lp_decimals = (18);
var lp_transfers_hashes = inst_42615__$1;
var rewards_earned = inst_42604;
var deposit = inst_42553;
return (function (p1__42491_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__42491_SHARP_));
});
})();
var inst_42617__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_42616,inst_42610);
var inst_42618 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_42617__$1);
var inst_42619__$1 = cljs.core.set(inst_42618);
var inst_42620 = cljs.core.count(inst_42619__$1);
var inst_42621 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_42620,(1));
var state_42665__$1 = (function (){var statearr_42706 = state_42665;
(statearr_42706[(14)] = inst_42613__$1);

(statearr_42706[(23)] = inst_42615__$1);

(statearr_42706[(29)] = inst_42617__$1);

(statearr_42706[(30)] = inst_42619__$1);

return statearr_42706;
})();
if(inst_42621){
var statearr_42707_43349 = state_42665__$1;
(statearr_42707_43349[(1)] = (36));

} else {
var statearr_42708_43350 = state_42665__$1;
(statearr_42708_43350[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (19))){
var state_42665__$1 = state_42665;
var statearr_42709_43351 = state_42665__$1;
(statearr_42709_43351[(2)] = null);

(statearr_42709_43351[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (11))){
var inst_42527 = (state_42665[(19)]);
var inst_42510 = (state_42665[(20)]);
var inst_42537 = (function (){var staked = inst_42510;
var staked2 = inst_42527;
return (function (p1__42490_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__42490_SHARP_.transactionHash);
});
})();
var inst_42538 = lpdashboard.core.provider.getLogs(deposit_filter);
var inst_42539 = cljs.core.async.interop.p__GT_c(inst_42538);
var state_42665__$1 = (function (){var statearr_42710 = state_42665;
(statearr_42710[(36)] = inst_42537);

return statearr_42710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(14),inst_42539);
} else {
if((state_val_42666 === (9))){
var inst_42527 = (state_42665[(19)]);
var inst_42510 = (state_42665[(20)]);
var inst_42511 = (state_42665[(37)]);
var inst_42525 = (state_42665[(2)]);
var inst_42526 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_42511,inst_42525);
var inst_42527__$1 = cljs.core.first(inst_42526);
var inst_42528 = (inst_42510 == null);
var inst_42529 = (inst_42527__$1 == null);
var inst_42530 = ((inst_42528) && (inst_42529));
var inst_42531 = cljs.core.not(inst_42530);
var state_42665__$1 = (function (){var statearr_42711 = state_42665;
(statearr_42711[(19)] = inst_42527__$1);

return statearr_42711;
})();
if(inst_42531){
var statearr_42712_43352 = state_42665__$1;
(statearr_42712_43352[(1)] = (10));

} else {
var statearr_42713_43353 = state_42665__$1;
(statearr_42713_43353[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (5))){
var inst_42510 = (state_42665[(20)]);
var inst_42494 = (state_42665[(9)]);
var inst_42508 = (state_42665[(2)]);
var inst_42509 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_42494,inst_42508);
var inst_42510__$1 = cljs.core.first(inst_42509);
var inst_42511 = (function (){var staked = inst_42510__$1;
return (function (p1__42489_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__42489_SHARP_.transactionHash);
});
})();
var inst_42512 = lpdashboard.core.provider.getLogs(staked_filter2);
var inst_42513 = cljs.core.async.interop.p__GT_c(inst_42512);
var state_42665__$1 = (function (){var statearr_42714 = state_42665;
(statearr_42714[(20)] = inst_42510__$1);

(statearr_42714[(37)] = inst_42511);

return statearr_42714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(6),inst_42513);
} else {
if((state_val_42666 === (14))){
var inst_42541 = (state_42665[(33)]);
var inst_42541__$1 = (state_42665[(2)]);
var inst_42542 = (inst_42541__$1 instanceof cljs.core.ExceptionInfo);
var inst_42543 = cljs.core.ex_data(inst_42541__$1);
var inst_42544 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42543);
var inst_42545 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42544,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42546 = ((inst_42542) && (inst_42545));
var state_42665__$1 = (function (){var statearr_42715 = state_42665;
(statearr_42715[(33)] = inst_42541__$1);

return statearr_42715;
})();
if(cljs.core.truth_(inst_42546)){
var statearr_42716_43354 = state_42665__$1;
(statearr_42716_43354[(1)] = (15));

} else {
var statearr_42717_43355 = state_42665__$1;
(statearr_42717_43355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (26))){
var inst_42577 = (state_42665[(8)]);
var inst_42584 = (function(){throw inst_42577})();
var state_42665__$1 = state_42665;
var statearr_42718_43356 = state_42665__$1;
(statearr_42718_43356[(2)] = inst_42584);

(statearr_42718_43356[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (16))){
var inst_42541 = (state_42665[(33)]);
var state_42665__$1 = state_42665;
var statearr_42719_43357 = state_42665__$1;
(statearr_42719_43357[(2)] = inst_42541);

(statearr_42719_43357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (38))){
var inst_42627 = (state_42665[(2)]);
var inst_42628 = lpdashboard.ethereum._LT_user_token_withdrawals(lpdashboard.core.provider,staking_address,user_address);
var state_42665__$1 = (function (){var statearr_42720 = state_42665;
(statearr_42720[(27)] = inst_42627);

return statearr_42720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(39),inst_42628);
} else {
if((state_val_42666 === (30))){
var inst_42594 = (state_42665[(2)]);
var inst_42595 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_42665__$1 = (function (){var statearr_42721 = state_42665;
(statearr_42721[(18)] = inst_42594);

return statearr_42721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(31),inst_42595);
} else {
if((state_val_42666 === (10))){
var inst_42533 = lpdashboard.core._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_42665__$1 = state_42665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(13),inst_42533);
} else {
if((state_val_42666 === (18))){
var inst_42556 = (state_42665[(17)]);
var inst_42553 = (state_42665[(21)]);
var inst_42557 = (state_42665[(11)]);
var inst_42556__$1 = lpdashboard.ethereum.decode_event_data(inst_42553);
var inst_42557__$1 = inst_42556__$1.pid;
var inst_42558 = cheff_contract.userInfo(inst_42557__$1,user_address);
var inst_42559 = cljs.core.async.interop.p__GT_c(inst_42558);
var state_42665__$1 = (function (){var statearr_42722 = state_42665;
(statearr_42722[(17)] = inst_42556__$1);

(statearr_42722[(11)] = inst_42557__$1);

return statearr_42722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42665__$1,(21),inst_42559);
} else {
if((state_val_42666 === (42))){
var inst_42658 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42723_43358 = state_42665__$1;
(statearr_42723_43358[(2)] = inst_42658);

(statearr_42723_43358[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (37))){
var inst_42619 = (state_42665[(30)]);
var inst_42625 = cljs.core.first(inst_42619);
var state_42665__$1 = state_42665;
var statearr_42724_43359 = state_42665__$1;
(statearr_42724_43359[(2)] = inst_42625);

(statearr_42724_43359[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (8))){
var inst_42515 = (state_42665[(7)]);
var state_42665__$1 = state_42665;
var statearr_42725_43360 = state_42665__$1;
(statearr_42725_43360[(2)] = inst_42515);

(statearr_42725_43360[(1)] = (9));


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
var statearr_42726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42726[(0)] = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__);

(statearr_42726[(1)] = (1));

return statearr_42726;
});
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1 = (function (state_42665){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42665);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42727){var ex__36688__auto__ = e42727;
var statearr_42728_43361 = state_42665;
(statearr_42728_43361[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42665[(4)]))){
var statearr_42729_43362 = state_42665;
(statearr_42729_43362[(1)] = cljs.core.first((state_42665[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43363 = state_42665;
state_42665 = G__43363;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__ = function(state_42665){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1.call(this,state_42665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42730 = f__36777__auto__();
(statearr_42730[(6)] = c__36776__auto__);

return statearr_42730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions = (function lpdashboard$core$_LT_staked_lp_positions(lp_destination,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42773){
var state_val_42774 = (state_42773[(1)]);
if((state_val_42774 === (7))){
var inst_42744 = (state_42773[(7)]);
var inst_42751 = (function(){throw inst_42744})();
var state_42773__$1 = state_42773;
var statearr_42775_43364 = state_42773__$1;
(statearr_42775_43364[(2)] = inst_42751);

(statearr_42775_43364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (1))){
var inst_42732 = (state_42773[(8)]);
var inst_42731 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_42732__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_42733 = lpdashboard.ethereum.make_erc20(inst_42732__$1);
var state_42773__$1 = (function (){var statearr_42776 = state_42773;
(statearr_42776[(9)] = inst_42733);

(statearr_42776[(8)] = inst_42732__$1);

(statearr_42776[(10)] = inst_42731);

return statearr_42776;
})();
var statearr_42777_43365 = state_42773__$1;
(statearr_42777_43365[(2)] = null);

(statearr_42777_43365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (4))){
var inst_42732 = (state_42773[(8)]);
var inst_42731 = (state_42773[(10)]);
var inst_42734 = (state_42773[(2)]);
var inst_42735 = console.log("no name for lp, stkaing:",inst_42731,inst_42732);
var state_42773__$1 = (function (){var statearr_42778 = state_42773;
(statearr_42778[(11)] = inst_42734);

return statearr_42778;
})();
var statearr_42779_43366 = state_42773__$1;
(statearr_42779_43366[(2)] = inst_42735);

(statearr_42779_43366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (15))){
var inst_42766 = lpdashboard.core._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42773__$1,(16),inst_42766);
} else {
if((state_val_42774 === (13))){
var inst_42732 = (state_42773[(8)]);
var inst_42731 = (state_42773[(10)]);
var inst_42762 = lpdashboard.core._LT_staked_lp_positions_sashimi_plate(inst_42731,inst_42732,user_address);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42773__$1,(14),inst_42762);
} else {
if((state_val_42774 === (6))){
var inst_42744 = (state_42773[(7)]);
var inst_42744__$1 = (state_42773[(2)]);
var inst_42745 = (inst_42744__$1 instanceof cljs.core.ExceptionInfo);
var inst_42746 = cljs.core.ex_data(inst_42744__$1);
var inst_42747 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42746);
var inst_42748 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42747,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_42749 = ((inst_42745) && (inst_42748));
var state_42773__$1 = (function (){var statearr_42780 = state_42773;
(statearr_42780[(7)] = inst_42744__$1);

return statearr_42780;
})();
if(cljs.core.truth_(inst_42749)){
var statearr_42781_43367 = state_42773__$1;
(statearr_42781_43367[(1)] = (7));

} else {
var statearr_42782_43368 = state_42773__$1;
(statearr_42782_43368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (3))){
var inst_42757 = (state_42773[(2)]);
var state_42773__$1 = state_42773;
var G__42783_43369 = inst_42757;
switch (G__42783_43369) {
case "LpBar":
var statearr_42784_43371 = state_42773__$1;
(statearr_42784_43371[(1)] = (11));


break;
case "sv Uniswap V2":
var statearr_42785_43372 = state_42773__$1;
(statearr_42785_43372[(1)] = (13));


break;
default:
var statearr_42786_43373 = state_42773__$1;
(statearr_42786_43373[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (12))){
var inst_42760 = (state_42773[(2)]);
var state_42773__$1 = state_42773;
var statearr_42787_43374 = state_42773__$1;
(statearr_42787_43374[(2)] = inst_42760);

(statearr_42787_43374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (2))){
var inst_42733 = (state_42773[(9)]);
var _ = (function (){var statearr_42788 = state_42773;
(statearr_42788[(4)] = cljs.core.cons((5),(state_42773[(4)])));

return statearr_42788;
})();
var inst_42741 = inst_42733.name();
var inst_42742 = cljs.core.async.interop.p__GT_c(inst_42741);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42773__$1,(6),inst_42742);
} else {
if((state_val_42774 === (11))){
var inst_42732 = (state_42773[(8)]);
var inst_42731 = (state_42773[(10)]);
var inst_42758 = lpdashboard.core._LT_staked_lp_positions_lpbar(inst_42731,inst_42732,user_address);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42773__$1,(12),inst_42758);
} else {
if((state_val_42774 === (9))){
var inst_42754 = (state_42773[(2)]);
var _ = (function (){var statearr_42790 = state_42773;
(statearr_42790[(4)] = cljs.core.rest((state_42773[(4)])));

return statearr_42790;
})();
var state_42773__$1 = state_42773;
var statearr_42791_43375 = state_42773__$1;
(statearr_42791_43375[(2)] = inst_42754);

(statearr_42791_43375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (5))){
var _ = (function (){var statearr_42792 = state_42773;
(statearr_42792[(4)] = cljs.core.rest((state_42773[(4)])));

return statearr_42792;
})();
var state_42773__$1 = state_42773;
var ex42789 = (state_42773__$1[(2)]);
var statearr_42793_43376 = state_42773__$1;
(statearr_42793_43376[(5)] = ex42789);


if((ex42789 instanceof Error)){
var statearr_42794_43377 = state_42773__$1;
(statearr_42794_43377[(1)] = (4));

(statearr_42794_43377[(5)] = null);

} else {
throw ex42789;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (14))){
var inst_42764 = (state_42773[(2)]);
var state_42773__$1 = state_42773;
var statearr_42795_43378 = state_42773__$1;
(statearr_42795_43378[(2)] = inst_42764);

(statearr_42795_43378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (16))){
var inst_42768 = (state_42773[(2)]);
var state_42773__$1 = state_42773;
var statearr_42796_43379 = state_42773__$1;
(statearr_42796_43379[(2)] = inst_42768);

(statearr_42796_43379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42774 === (10))){
var inst_42771 = (state_42773[(2)]);
var state_42773__$1 = state_42773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42773__$1,inst_42771);
} else {
if((state_val_42774 === (8))){
var inst_42744 = (state_42773[(7)]);
var state_42773__$1 = state_42773;
var statearr_42797_43380 = state_42773__$1;
(statearr_42797_43380[(2)] = inst_42744);

(statearr_42797_43380[(1)] = (9));


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
var statearr_42798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42798[(0)] = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__);

(statearr_42798[(1)] = (1));

return statearr_42798;
});
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1 = (function (state_42773){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42773);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42799){var ex__36688__auto__ = e42799;
var statearr_42800_43381 = state_42773;
(statearr_42800_43381[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42773[(4)]))){
var statearr_42801_43382 = state_42773;
(statearr_42801_43382[(1)] = cljs.core.first((state_42773[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43383 = state_42773;
state_42773 = G__43383;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__ = function(state_42773){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1.call(this,state_42773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42802 = f__36777__auto__();
(statearr_42802[(6)] = c__36776__auto__);

return statearr_42802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_graph_uniswap_positions = (function lpdashboard$core$_LT_graph_uniswap_positions(user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42816){
var state_val_42817 = (state_42816[(1)]);
if((state_val_42817 === (1))){
var inst_42803 = lpdashboard.thegraph._LT_user_lp_snapshots(user_address);
var state_42816__$1 = state_42816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42816__$1,(2),inst_42803);
} else {
if((state_val_42817 === (2))){
var inst_42805 = (state_42816[(7)]);
var inst_42805__$1 = (state_42816[(2)]);
var inst_42806 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_42807 = (lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1(inst_42805__$1) : lpdashboard.core.most_recent_snapshots.call(null,inst_42805__$1));
var inst_42808 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42806,inst_42807);
var inst_42809 = lpdashboard.thegraph._LT_user_lps(user_address,inst_42808);
var state_42816__$1 = (function (){var statearr_42818 = state_42816;
(statearr_42818[(7)] = inst_42805__$1);

return statearr_42818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42816__$1,(3),inst_42809);
} else {
if((state_val_42817 === (3))){
var inst_42805 = (state_42816[(7)]);
var inst_42811 = (state_42816[(2)]);
var inst_42812 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.Keyword(null,"positions","positions",-1380538434)];
var inst_42813 = [user_address,inst_42805,inst_42811];
var inst_42814 = cljs.core.PersistentHashMap.fromArrays(inst_42812,inst_42813);
var state_42816__$1 = state_42816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42816__$1,inst_42814);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_42819 = [null,null,null,null,null,null,null,null];
(statearr_42819[(0)] = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__);

(statearr_42819[(1)] = (1));

return statearr_42819;
});
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1 = (function (state_42816){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42816);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42820){var ex__36688__auto__ = e42820;
var statearr_42821_43384 = state_42816;
(statearr_42821_43384[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42816[(4)]))){
var statearr_42822_43385 = state_42816;
(statearr_42822_43385[(1)] = cljs.core.first((state_42816[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43386 = state_42816;
state_42816 = G__43386;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = function(state_42816){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1.call(this,state_42816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42823 = f__36777__auto__();
(statearr_42823[(6)] = c__36776__auto__);

return statearr_42823;
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__42824_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__42824_SHARP_);
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__42825_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__42825_SHARP_);
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
var token0_price = (function (){var fexpr__42826 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address0);
return (fexpr__42826.cljs$core$IFn$_invoke$arity$1 ? fexpr__42826.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__42826.call(null,token_prices));
})();
var token1_price = (function (){var fexpr__42827 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address1);
return (fexpr__42827.cljs$core$IFn$_invoke$arity$1 ? fexpr__42827.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__42827.call(null,token_prices));
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
var relevant_stakes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42828_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__42828_SHARP_));
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
var snapshot_lps = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42829_SHARP_){
return lpdashboard.core.make_lp(p1__42829_SHARP_,staked_positions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__42829_SHARP_))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__42829_SHARP_))));
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
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42833_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42833_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42834_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42834_SHARP_,token2);
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
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42835_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42835_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42836_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__42836_SHARP_,token2);
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
lpdashboard.core.pretty_price = (function lpdashboard$core$pretty_price(p__42837){
var vec__42838 = p__42837;
var token_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42838,(0),null);
var token_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42838,(1),null);
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42841_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__42841_SHARP_));
}),cljs.core.vals(token_prices))))),clojure.string.lower_case(vs_price));
});
lpdashboard.core.rewards_in_currency = (function lpdashboard$core$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42842_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__42842_SHARP_),lpdashboard.core.symbol__GT_price(p1__42842_SHARP_,token_prices,currency));
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
var token_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42843_SHARP_){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,p1__42843_SHARP_));
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
}),(function (p1__42844_SHARP_){
return bignumber.core._STAR_(lp_portion,p1__42844_SHARP_);
})),cljs.core.vals(token_reserves));
var current = cljs.core.zipmap(token_symbols,reserve_shares);
var earned = lpdashboard.core.get_current_earned(latest_snapshot);
var earned_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__42845_SHARP_){
return lpdashboard.core.token_symbol(p1__42845_SHARP_,token_info);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),earned),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),earned));
var claimed = cljs.core.identity(lpdashboard.core.all_snapshot_claimed(latest_snapshot));
var claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42846_SHARP_){
return lpdashboard.core.token_symbol(p1__42846_SHARP_,token_info);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),claimed)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
var rewards = bignumber.core._PLUS_(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(earned),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.first(claimed)));
var rewards_token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(earned);
var rtoken_symbol = lpdashboard.core.token_symbol(rewards_token,token_info);
var rewards_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(rtoken_symbol))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([rtoken_symbol,rewards]));
var rewards_SINGLEQUOTE___$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([claimed_SINGLEQUOTE_,earned_SINGLEQUOTE_], 0));
var minted_lp = lpdashboard.core.minted_lp(lp_position);
var total_invested = lpdashboard.core.tokens_deposited(lp_position);
var total_invested_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42847_SHARP_){
return lpdashboard.core.token_symbol(p1__42847_SHARP_,token_info);
}),cljs.core.keys(total_invested)),cljs.core.vals(total_invested));
var burned_lp = lpdashboard.core.burned_lp(lp_position);
var total_withdrawals = lpdashboard.core.tokens_withdrawn(lp_position);
var total_withdrawals_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42848_SHARP_){
return lpdashboard.core.token_symbol(p1__42848_SHARP_,token_info);
}),cljs.core.keys(total_withdrawals)),cljs.core.vals(total_withdrawals));
var token_symbols__$1 = cljs.core.keys(total_invested_SINGLEQUOTE_);
var total_initial = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42849_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_invested_SINGLEQUOTE_,p1__42849_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42850_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_withdrawals_SINGLEQUOTE_,p1__42850_SHARP_);
}),token_symbols__$1)));
var token_diffs = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42851_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,p1__42851_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42852_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_initial,p1__42852_SHARP_);
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
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42853_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__42853_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__42853_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42854_SHARP_){
return lpdashboard.ethereum.decode_burn_data(p1__42854_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42855_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__42855_SHARP_)));
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
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42856_SHARP_){
return lpdashboard.ethereum.decode_transfer_data(p1__42856_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42857_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__42857_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__42857_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42858_SHARP_){
return lpdashboard.ethereum.decode_mint_data(p1__42858_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42859_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__42859_SHARP_)));
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42886){
var state_val_42887 = (state_42886[(1)]);
if((state_val_42887 === (1))){
var inst_42864 = (state_42886[(7)]);
var inst_42862 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_42863 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_42864__$1 = cljs.core.first(inst_42863);
var inst_42865 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_42866 = cljs.core.second(inst_42865);
var inst_42867 = lpdashboard.ethereum._LT_token_decimals(inst_42864__$1);
var state_42886__$1 = (function (){var statearr_42888 = state_42886;
(statearr_42888[(8)] = inst_42866);

(statearr_42888[(7)] = inst_42864__$1);

(statearr_42888[(9)] = inst_42862);

return statearr_42888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42886__$1,(2),inst_42867);
} else {
if((state_val_42887 === (2))){
var inst_42866 = (state_42886[(8)]);
var inst_42869 = (state_42886[(2)]);
var inst_42870 = lpdashboard.ethereum._LT_token_decimals(inst_42866);
var state_42886__$1 = (function (){var statearr_42889 = state_42886;
(statearr_42889[(10)] = inst_42869);

return statearr_42889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42886__$1,(3),inst_42870);
} else {
if((state_val_42887 === (3))){
var inst_42862 = (state_42886[(9)]);
var inst_42872 = (state_42886[(2)]);
var inst_42873 = lpdashboard.ethereum._LT_user_lp_mint_transfers(lpdashboard.core.provider,inst_42862,user_address);
var state_42886__$1 = (function (){var statearr_42890 = state_42886;
(statearr_42890[(11)] = inst_42872);

return statearr_42890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42886__$1,(4),inst_42873);
} else {
if((state_val_42887 === (4))){
var inst_42875 = (state_42886[(12)]);
var inst_42866 = (state_42886[(8)]);
var inst_42878 = (state_42886[(13)]);
var inst_42872 = (state_42886[(11)]);
var inst_42864 = (state_42886[(7)]);
var inst_42869 = (state_42886[(10)]);
var inst_42862 = (state_42886[(9)]);
var inst_42875__$1 = (state_42886[(2)]);
var inst_42876 = (function (){var pair_address = inst_42862;
var token1_address = inst_42864;
var token2_address = inst_42866;
var token1_decimals = inst_42869;
var token2_decimals = inst_42872;
var mint_transfers = inst_42875__$1;
return (function (p1__42860_SHARP_){
return p1__42860_SHARP_.transactionHash;
});
})();
var inst_42877 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42876,inst_42875__$1);
var inst_42878__$1 = cljs.core.set(inst_42877);
var inst_42879 = lpdashboard.ethereum._LT_get_trxs(inst_42878__$1);
var state_42886__$1 = (function (){var statearr_42891 = state_42886;
(statearr_42891[(12)] = inst_42875__$1);

(statearr_42891[(13)] = inst_42878__$1);

return statearr_42891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42886__$1,(5),inst_42879);
} else {
if((state_val_42887 === (5))){
var inst_42875 = (state_42886[(12)]);
var inst_42866 = (state_42886[(8)]);
var inst_42878 = (state_42886[(13)]);
var inst_42872 = (state_42886[(11)]);
var inst_42864 = (state_42886[(7)]);
var inst_42869 = (state_42886[(10)]);
var inst_42862 = (state_42886[(9)]);
var inst_42881 = (state_42886[(2)]);
var inst_42882 = (function (){var pair_address = inst_42862;
var token1_address = inst_42864;
var token2_address = inst_42866;
var token1_decimals = inst_42869;
var token2_decimals = inst_42872;
var mint_transfers = inst_42875;
var mint_hashes = inst_42878;
var mint_txrs = inst_42881;
return (function (p1__42861_SHARP_){
return lpdashboard.core.make_mint_map(lp_pool,user_address,p1__42861_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_42883 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42882,inst_42881);
var inst_42884 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_42883);
var state_42886__$1 = state_42886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42886__$1,inst_42884);
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
var statearr_42892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42892[(0)] = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__);

(statearr_42892[(1)] = (1));

return statearr_42892;
});
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1 = (function (state_42886){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42886);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42893){var ex__36688__auto__ = e42893;
var statearr_42894_43387 = state_42886;
(statearr_42894_43387[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42886[(4)]))){
var statearr_42895_43388 = state_42886;
(statearr_42895_43388[(1)] = cljs.core.first((state_42886[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43389 = state_42886;
state_42886 = G__43389;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__ = function(state_42886){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1.call(this,state_42886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42896 = f__36777__auto__();
(statearr_42896[(6)] = c__36776__auto__);

return statearr_42896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_lp_burns = (function lpdashboard$core$_LT_get_lp_burns(lp_pool,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42923){
var state_val_42924 = (state_42923[(1)]);
if((state_val_42924 === (1))){
var inst_42901 = (state_42923[(7)]);
var inst_42899 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_42900 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_42901__$1 = cljs.core.first(inst_42900);
var inst_42902 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_42903 = cljs.core.second(inst_42902);
var inst_42904 = lpdashboard.ethereum._LT_token_decimals(inst_42901__$1);
var state_42923__$1 = (function (){var statearr_42925 = state_42923;
(statearr_42925[(8)] = inst_42899);

(statearr_42925[(7)] = inst_42901__$1);

(statearr_42925[(9)] = inst_42903);

return statearr_42925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42923__$1,(2),inst_42904);
} else {
if((state_val_42924 === (2))){
var inst_42903 = (state_42923[(9)]);
var inst_42906 = (state_42923[(2)]);
var inst_42907 = lpdashboard.ethereum._LT_token_decimals(inst_42903);
var state_42923__$1 = (function (){var statearr_42926 = state_42923;
(statearr_42926[(10)] = inst_42906);

return statearr_42926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42923__$1,(3),inst_42907);
} else {
if((state_val_42924 === (3))){
var inst_42899 = (state_42923[(8)]);
var inst_42909 = (state_42923[(2)]);
var inst_42910 = lpdashboard.ethereum._LT_user_lp_burn_transfers(lpdashboard.core.provider,inst_42899,user_address);
var state_42923__$1 = (function (){var statearr_42927 = state_42923;
(statearr_42927[(11)] = inst_42909);

return statearr_42927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42923__$1,(4),inst_42910);
} else {
if((state_val_42924 === (4))){
var inst_42899 = (state_42923[(8)]);
var inst_42901 = (state_42923[(7)]);
var inst_42903 = (state_42923[(9)]);
var inst_42915 = (state_42923[(12)]);
var inst_42909 = (state_42923[(11)]);
var inst_42912 = (state_42923[(13)]);
var inst_42906 = (state_42923[(10)]);
var inst_42912__$1 = (state_42923[(2)]);
var inst_42913 = (function (){var pair_address = inst_42899;
var token1_address = inst_42901;
var token2_address = inst_42903;
var token1_decimals = inst_42906;
var token2_decimals = inst_42909;
var burn_transfers = inst_42912__$1;
return (function (p1__42897_SHARP_){
return p1__42897_SHARP_.transactionHash;
});
})();
var inst_42914 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42913,inst_42912__$1);
var inst_42915__$1 = cljs.core.set(inst_42914);
var inst_42916 = lpdashboard.ethereum._LT_get_trxs(inst_42915__$1);
var state_42923__$1 = (function (){var statearr_42928 = state_42923;
(statearr_42928[(12)] = inst_42915__$1);

(statearr_42928[(13)] = inst_42912__$1);

return statearr_42928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42923__$1,(5),inst_42916);
} else {
if((state_val_42924 === (5))){
var inst_42899 = (state_42923[(8)]);
var inst_42901 = (state_42923[(7)]);
var inst_42903 = (state_42923[(9)]);
var inst_42915 = (state_42923[(12)]);
var inst_42909 = (state_42923[(11)]);
var inst_42912 = (state_42923[(13)]);
var inst_42906 = (state_42923[(10)]);
var inst_42918 = (state_42923[(2)]);
var inst_42919 = (function (){var pair_address = inst_42899;
var token1_address = inst_42901;
var token2_address = inst_42903;
var token1_decimals = inst_42906;
var token2_decimals = inst_42909;
var burn_transfers = inst_42912;
var burn_hashes = inst_42915;
var burn_txrs = inst_42918;
return (function (p1__42898_SHARP_){
return lpdashboard.core.make_burn_map(lp_pool,user_address,p1__42898_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_42920 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_42919,inst_42918);
var inst_42921 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_42920);
var state_42923__$1 = state_42923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42923__$1,inst_42921);
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
var statearr_42929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42929[(0)] = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__);

(statearr_42929[(1)] = (1));

return statearr_42929;
});
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1 = (function (state_42923){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42923);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42930){var ex__36688__auto__ = e42930;
var statearr_42931_43390 = state_42923;
(statearr_42931_43390[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42923[(4)]))){
var statearr_42932_43391 = state_42923;
(statearr_42932_43391[(1)] = cljs.core.first((state_42923[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43392 = state_42923;
state_42923 = G__43392;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__ = function(state_42923){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1.call(this,state_42923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42933 = f__36777__auto__();
(statearr_42933[(6)] = c__36776__auto__);

return statearr_42933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_user_mints = (function lpdashboard$core$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42942){
var state_val_42943 = (state_42942[(1)]);
if((state_val_42943 === (1))){
var inst_42934 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_42935 = [inst_42934];
var inst_42936 = lpdashboard.core._LT_get_lp_mints(p,user_address);
var state_42942__$1 = (function (){var statearr_42944 = state_42942;
(statearr_42944[(7)] = inst_42935);

return statearr_42944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42942__$1,(2),inst_42936);
} else {
if((state_val_42943 === (2))){
var inst_42935 = (state_42942[(7)]);
var inst_42938 = (state_42942[(2)]);
var inst_42939 = [inst_42938];
var inst_42940 = cljs.core.PersistentHashMap.fromArrays(inst_42935,inst_42939);
var state_42942__$1 = state_42942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42942__$1,inst_42940);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0 = (function (){
var statearr_42945 = [null,null,null,null,null,null,null,null];
(statearr_42945[(0)] = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__);

(statearr_42945[(1)] = (1));

return statearr_42945;
});
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1 = (function (state_42942){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42942);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42946){var ex__36688__auto__ = e42946;
var statearr_42947_43393 = state_42942;
(statearr_42947_43393[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42942[(4)]))){
var statearr_42948_43394 = state_42942;
(statearr_42948_43394[(1)] = cljs.core.first((state_42942[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43395 = state_42942;
state_42942 = G__43395;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = function(state_42942){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1.call(this,state_42942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42949 = f__36777__auto__();
(statearr_42949[(6)] = c__36776__auto__);

return statearr_42949;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42958){
var state_val_42959 = (state_42958[(1)]);
if((state_val_42959 === (1))){
var inst_42950 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_42951 = [inst_42950];
var inst_42952 = lpdashboard.core._LT_get_lp_burns(p,user_address);
var state_42958__$1 = (function (){var statearr_42960 = state_42958;
(statearr_42960[(7)] = inst_42951);

return statearr_42960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42958__$1,(2),inst_42952);
} else {
if((state_val_42959 === (2))){
var inst_42951 = (state_42958[(7)]);
var inst_42954 = (state_42958[(2)]);
var inst_42955 = [inst_42954];
var inst_42956 = cljs.core.PersistentHashMap.fromArrays(inst_42951,inst_42955);
var state_42958__$1 = state_42958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42958__$1,inst_42956);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0 = (function (){
var statearr_42961 = [null,null,null,null,null,null,null,null];
(statearr_42961[(0)] = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__);

(statearr_42961[(1)] = (1));

return statearr_42961;
});
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1 = (function (state_42958){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42958);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42962){var ex__36688__auto__ = e42962;
var statearr_42963_43396 = state_42958;
(statearr_42963_43396[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42958[(4)]))){
var statearr_42964_43397 = state_42958;
(statearr_42964_43397[(1)] = cljs.core.first((state_42958[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43398 = state_42958;
state_42958 = G__43398;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = function(state_42958){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1.call(this,state_42958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42965 = f__36777__auto__();
(statearr_42965[(6)] = c__36776__auto__);

return statearr_42965;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42971){
var state_val_42972 = (state_42971[(1)]);
if((state_val_42972 === (1))){
var inst_42967 = lpdashboard.ethereum._LT_user_token_destinations(lpdashboard.core.provider,x,user_address);
var state_42971__$1 = state_42971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42971__$1,(2),inst_42967);
} else {
if((state_val_42972 === (2))){
var inst_42969 = (state_42971[(2)]);
var state_42971__$1 = state_42971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42971__$1,inst_42969);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_42973 = [null,null,null,null,null,null,null];
(statearr_42973[(0)] = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__);

(statearr_42973[(1)] = (1));

return statearr_42973;
});
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1 = (function (state_42971){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42971);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42974){var ex__36688__auto__ = e42974;
var statearr_42975_43399 = state_42971;
(statearr_42975_43399[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42971[(4)]))){
var statearr_42976_43400 = state_42971;
(statearr_42976_43400[(1)] = cljs.core.first((state_42971[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43401 = state_42971;
state_42971 = G__43401;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = function(state_42971){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1.call(this,state_42971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42977 = f__36777__auto__();
(statearr_42977[(6)] = c__36776__auto__);

return statearr_42977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__42966_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__42966_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
lpdashboard.core._LT_user_lp_positions = (function lpdashboard$core$_LT_user_lp_positions(destinations,user_address){
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_42988){
var state_val_42989 = (state_42988[(1)]);
if((state_val_42989 === (1))){
var inst_42979 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_42980 = lpdashboard.core._LT_staked_lp_positions(x,user_address);
var state_42988__$1 = (function (){var statearr_42990 = state_42988;
(statearr_42990[(7)] = inst_42979);

return statearr_42990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42988__$1,(2),inst_42980);
} else {
if((state_val_42989 === (2))){
var inst_42979 = (state_42988[(7)]);
var inst_42982 = (state_42988[(2)]);
var inst_42983 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_42984 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_42985 = [inst_42982,inst_42983,inst_42984];
var inst_42986 = cljs.core.PersistentHashMap.fromArrays(inst_42979,inst_42985);
var state_42988__$1 = state_42988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42988__$1,inst_42986);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_42991 = [null,null,null,null,null,null,null,null];
(statearr_42991[(0)] = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__);

(statearr_42991[(1)] = (1));

return statearr_42991;
});
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1 = (function (state_42988){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_42988);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e42992){var ex__36688__auto__ = e42992;
var statearr_42993_43402 = state_42988;
(statearr_42993_43402[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_42988[(4)]))){
var statearr_42994_43403 = state_42988;
(statearr_42994_43403[(1)] = cljs.core.first((state_42988[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43404 = state_42988;
state_42988 = G__43404;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = function(state_42988){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1.call(this,state_42988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_42995 = f__36777__auto__();
(statearr_42995[(6)] = c__36776__auto__);

return statearr_42995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__42978_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__42978_SHARP_)));
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions)));
});
lpdashboard.core._LT_user_get_staked = (function lpdashboard$core$_LT_user_get_staked(user_address,user_snapshots){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_43008){
var state_val_43009 = (state_43008[(1)]);
if((state_val_43009 === (1))){
var inst_42997 = lpdashboard.core.last_lp_snapshots(user_snapshots);
var inst_42998 = lpdashboard.core._LT_user_lp_destinations(user_snapshots,user_address);
var state_43008__$1 = (function (){var statearr_43010 = state_43008;
(statearr_43010[(7)] = inst_42997);

return statearr_43010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43008__$1,(2),inst_42998);
} else {
if((state_val_43009 === (2))){
var inst_43000 = (state_43008[(8)]);
var inst_43000__$1 = (state_43008[(2)]);
var inst_43001 = lpdashboard.core._LT_user_lp_positions(inst_43000__$1,user_address);
var state_43008__$1 = (function (){var statearr_43011 = state_43008;
(statearr_43011[(8)] = inst_43000__$1);

return statearr_43011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43008__$1,(3),inst_43001);
} else {
if((state_val_43009 === (3))){
var inst_42997 = (state_43008[(7)]);
var inst_43000 = (state_43008[(8)]);
var inst_43003 = (state_43008[(2)]);
var inst_43004 = (function (){var lsnapshots = inst_42997;
var user_destinations = inst_43000;
var user_positions = inst_43003;
return (function (p1__42996_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__42996_SHARP_)));
});
})();
var inst_43005 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_43003,inst_42997);
var inst_43006 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_43004,inst_43005);
var state_43008__$1 = state_43008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43008__$1,inst_43006);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0 = (function (){
var statearr_43012 = [null,null,null,null,null,null,null,null,null];
(statearr_43012[(0)] = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__);

(statearr_43012[(1)] = (1));

return statearr_43012;
});
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1 = (function (state_43008){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_43008);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e43013){var ex__36688__auto__ = e43013;
var statearr_43014_43405 = state_43008;
(statearr_43014_43405[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_43008[(4)]))){
var statearr_43015_43406 = state_43008;
(statearr_43015_43406[(1)] = cljs.core.first((state_43008[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43407 = state_43008;
state_43008 = G__43407;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = function(state_43008){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1.call(this,state_43008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_43016 = f__36777__auto__();
(statearr_43016[(6)] = c__36776__auto__);

return statearr_43016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.sum_pairs = (function lpdashboard$core$sum_pairs(pair_positions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43018){
var vec__43019 = p__43018;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43019,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.assoc,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"pos","pos",-864607220)),v)),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"pos","pos",-864607220)),v))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43017_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43017_SHARP_,new cljs.core.Keyword(null,"dst","dst",844682948));
}),pair_positions)));
});
lpdashboard.core.get_pair = (function lpdashboard$core$get_pair(pair_positions,token0,token1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43022_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token0,new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__43022_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token1,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__43022_SHARP_)))));
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_43138){
var state_val_43139 = (state_43138[(1)]);
if((state_val_43139 === (1))){
var inst_43025 = lpdashboard.ethereum._LT_resolve_address(account_or_name);
var state_43138__$1 = state_43138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(2),inst_43025);
} else {
if((state_val_43139 === (2))){
var inst_43027 = (state_43138[(7)]);
var inst_43027__$1 = (state_43138[(2)]);
var inst_43028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43029 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43030 = (new cljs.core.PersistentVector(null,1,(5),inst_43028,inst_43029,null));
var inst_43031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43030,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Searching Uniswap \uD83E\uDD84 Pools ..."], 0));
var inst_43032 = lpdashboard.core._LT_graph_uniswap_positions(inst_43027__$1);
var state_43138__$1 = (function (){var statearr_43140 = state_43138;
(statearr_43140[(7)] = inst_43027__$1);

(statearr_43140[(8)] = inst_43031);

return statearr_43140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(3),inst_43032);
} else {
if((state_val_43139 === (3))){
var inst_43027 = (state_43138[(7)]);
var inst_43038 = (state_43138[(9)]);
var inst_43043 = (state_43138[(10)]);
var inst_43034 = (state_43138[(11)]);
var inst_43036 = (state_43138[(12)]);
var inst_43034__$1 = (state_43138[(2)]);
var inst_43035 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_43034__$1);
var inst_43036__$1 = lpdashboard.core.last_lp_snapshots(inst_43035);
var inst_43037 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.snapshot__GT_symbols,inst_43036__$1);
var inst_43038__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_43037);
var inst_43039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43040 = cljs.core.count(inst_43036__$1);
var inst_43041 = ["Account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name),"\nhas provided liquidity to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43040)," pools:\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43038__$1)].join('');
var inst_43042 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_43041];
var inst_43043__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_43039,inst_43042,null));
var inst_43044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43045 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43046 = (new cljs.core.PersistentVector(null,1,(5),inst_43044,inst_43045,null));
var inst_43047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43046,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43043__$1], 0));
var inst_43048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43049 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43050 = (new cljs.core.PersistentVector(null,1,(5),inst_43048,inst_43049,null));
var inst_43051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43050,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Locating Staked LP Tokens ..."], 0));
var inst_43052 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_43034__$1);
var inst_43053 = lpdashboard.core._LT_user_get_staked(inst_43027,inst_43052);
var state_43138__$1 = (function (){var statearr_43141 = state_43138;
(statearr_43141[(13)] = inst_43051);

(statearr_43141[(9)] = inst_43038__$1);

(statearr_43141[(10)] = inst_43043__$1);

(statearr_43141[(11)] = inst_43034__$1);

(statearr_43141[(14)] = inst_43047);

(statearr_43141[(12)] = inst_43036__$1);

return statearr_43141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(4),inst_43053);
} else {
if((state_val_43139 === (4))){
var inst_43027 = (state_43138[(7)]);
var inst_43055 = (state_43138[(15)]);
var inst_43038 = (state_43138[(9)]);
var inst_43043 = (state_43138[(10)]);
var inst_43034 = (state_43138[(11)]);
var inst_43036 = (state_43138[(12)]);
var inst_43055__$1 = (state_43138[(2)]);
var inst_43056 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_43055__$1);
var inst_43057 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_43056);
var inst_43058 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_43057);
var inst_43059 = cljs.core.count(inst_43058);
var inst_43060 = ["Account has staked LP tokens in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43059)," distinct staking contracts ..."].join('');
var inst_43061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43062 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43063 = (new cljs.core.PersistentVector(null,1,(5),inst_43061,inst_43062,null));
var inst_43064 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43063,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43060], 0));
var inst_43065 = (function (){var account = inst_43027;
var _ = inst_43064;
var graph_positions = inst_43034;
var last_snaps = inst_43036;
var pair_symbols = inst_43038;
var many_pools_step = inst_43043;
var staked = inst_43055__$1;
var many_stakes_step = inst_43060;
return (function (p1__43024_SHARP_){
return clojure.set.rename_keys(p1__43024_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"address","address",559499426)], null));
});
})();
var inst_43066 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_43067 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_43034);
var inst_43068 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_43067);
var inst_43069 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_43066,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43068], 0));
var inst_43070 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_43065,inst_43069);
var inst_43071 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_43034);
var inst_43072 = lpdashboard.core.pooled_tokens(inst_43071);
var inst_43073 = lpdashboard.core.reward_tokens(inst_43055__$1);
var inst_43074 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_43072,inst_43073,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"], 0));
var inst_43075 = cljs.core.set(inst_43074);
var inst_43076 = lpdashboard.ethereum._LT_erc20_infos(inst_43073);
var state_43138__$1 = (function (){var statearr_43142 = state_43138;
(statearr_43142[(16)] = inst_43070);

(statearr_43142[(17)] = inst_43075);

(statearr_43142[(15)] = inst_43055__$1);

return statearr_43142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(5),inst_43076);
} else {
if((state_val_43139 === (5))){
var inst_43070 = (state_43138[(16)]);
var inst_43075 = (state_43138[(17)]);
var inst_43078 = (state_43138[(2)]);
var inst_43079 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_43070,inst_43078);
var inst_43080 = cljs.core.set(inst_43079);
var inst_43081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43082 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43083 = (new cljs.core.PersistentVector(null,1,(5),inst_43081,inst_43082,null));
var inst_43084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43085 = ["Fetching token prices..."];
var inst_43086 = (new cljs.core.PersistentVector(null,1,(5),inst_43084,inst_43085,null));
var inst_43087 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43083,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43086], 0));
var inst_43088 = lpdashboard.coingecko._LT_token_prices(inst_43075);
var state_43138__$1 = (function (){var statearr_43143 = state_43138;
(statearr_43143[(18)] = inst_43080);

(statearr_43143[(19)] = inst_43087);

return statearr_43143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(6),inst_43088);
} else {
if((state_val_43139 === (6))){
var inst_43027 = (state_43138[(7)]);
var inst_43034 = (state_43138[(11)]);
var inst_43092 = (state_43138[(20)]);
var inst_43090 = (state_43138[(2)]);
var inst_43091 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_43034);
var inst_43092__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.gposition__GT_pool,inst_43091);
var inst_43093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43094 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43095 = (new cljs.core.PersistentVector(null,1,(5),inst_43093,inst_43094,null));
var inst_43096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43097 = ["Searching for LP Mint events from account..."];
var inst_43098 = (new cljs.core.PersistentVector(null,1,(5),inst_43096,inst_43097,null));
var inst_43099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43095,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43098], 0));
var inst_43100 = lpdashboard.core._LT_get_user_mints(inst_43027,inst_43092__$1);
var state_43138__$1 = (function (){var statearr_43144 = state_43138;
(statearr_43144[(21)] = inst_43090);

(statearr_43144[(22)] = inst_43099);

(statearr_43144[(20)] = inst_43092__$1);

return statearr_43144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(7),inst_43100);
} else {
if((state_val_43139 === (7))){
var inst_43027 = (state_43138[(7)]);
var inst_43092 = (state_43138[(20)]);
var inst_43102 = (state_43138[(23)]);
var inst_43102__$1 = (state_43138[(2)]);
var inst_43103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43104 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43105 = (new cljs.core.PersistentVector(null,1,(5),inst_43103,inst_43104,null));
var inst_43106 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43107 = cljs.core.vals(inst_43102__$1);
var inst_43108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_43107);
var inst_43109 = cljs.core.count(inst_43108);
var inst_43110 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43109)," LP Mint events by account"].join('');
var inst_43111 = [inst_43110];
var inst_43112 = (new cljs.core.PersistentVector(null,1,(5),inst_43106,inst_43111,null));
var inst_43113 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43105,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43112], 0));
var inst_43114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43115 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43116 = (new cljs.core.PersistentVector(null,1,(5),inst_43114,inst_43115,null));
var inst_43117 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43118 = ["Searching for LP Burn events from account..."];
var inst_43119 = (new cljs.core.PersistentVector(null,1,(5),inst_43117,inst_43118,null));
var inst_43120 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43116,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43119], 0));
var inst_43121 = lpdashboard.core._LT_get_user_burns(inst_43027,inst_43092);
var state_43138__$1 = (function (){var statearr_43145 = state_43138;
(statearr_43145[(24)] = inst_43120);

(statearr_43145[(25)] = inst_43113);

(statearr_43145[(23)] = inst_43102__$1);

return statearr_43145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43138__$1,(8),inst_43121);
} else {
if((state_val_43139 === (8))){
var inst_43090 = (state_43138[(21)]);
var inst_43055 = (state_43138[(15)]);
var inst_43080 = (state_43138[(18)]);
var inst_43034 = (state_43138[(11)]);
var inst_43102 = (state_43138[(23)]);
var inst_43123 = (state_43138[(2)]);
var inst_43124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43125 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_43126 = (new cljs.core.PersistentVector(null,1,(5),inst_43124,inst_43125,null));
var inst_43127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43128 = cljs.core.vals(inst_43123);
var inst_43129 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_43128);
var inst_43130 = cljs.core.count(inst_43129);
var inst_43131 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43130)," LP Burn events from account"].join('');
var inst_43132 = [inst_43131];
var inst_43133 = (new cljs.core.PersistentVector(null,1,(5),inst_43127,inst_43132,null));
var inst_43134 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_43126,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43133], 0));
var inst_43135 = lpdashboard.core.make_token_info(inst_43080,inst_43090);
var inst_43136 = lpdashboard.core.make_state(inst_43034,inst_43055,inst_43135,inst_43102,inst_43123);
var state_43138__$1 = (function (){var statearr_43146 = state_43138;
(statearr_43146[(26)] = inst_43134);

return statearr_43146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43138__$1,inst_43136);
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
var statearr_43147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43147[(0)] = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__);

(statearr_43147[(1)] = (1));

return statearr_43147;
});
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1 = (function (state_43138){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_43138);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e43148){var ex__36688__auto__ = e43148;
var statearr_43149_43408 = state_43138;
(statearr_43149_43408[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_43138[(4)]))){
var statearr_43150_43409 = state_43138;
(statearr_43150_43409[(1)] = cljs.core.first((state_43138[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43410 = state_43138;
state_43138 = G__43410;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__ = function(state_43138){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1.call(this,state_43138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_43151 = f__36777__auto__();
(statearr_43151[(6)] = c__36776__auto__);

return statearr_43151;
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
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43152_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__43152_SHARP_),symbol);
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
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43153_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__43153_SHARP_)),token1)) && (cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__43153_SHARP_)),token2)));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43154_SHARP_){
var G__43155 = new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lpdashboard.core.lp_position_map(p1__43154_SHARP_,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)));
return (pnl_key.cljs$core$IFn$_invoke$arity$1 ? pnl_key.cljs$core$IFn$_invoke$arity$1(G__43155) : pnl_key.call(null,G__43155));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))));
});
lpdashboard.core.compute_totals = (function lpdashboard$core$compute_totals(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rewards","rewards",-1173924062),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),state),new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),state),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),state)], null);
});

//# sourceMappingURL=lpdashboard.core.js.map
