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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_70825){
var state_val_70826 = (state_70825[(1)]);
if((state_val_70826 === (1))){
var inst_70807 = lpdashboard.core.render_loading();
var inst_70808 = (lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1(account) : lpdashboard.core._LT_get_account_state.call(null,account));
var state_70825__$1 = (function (){var statearr_70827 = state_70825;
(statearr_70827[(7)] = inst_70807);

return statearr_70827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70825__$1,(2),inst_70808);
} else {
if((state_val_70826 === (2))){
var inst_70810 = (state_70825[(2)]);
var inst_70811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70812 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_70813 = (new cljs.core.PersistentVector(null,1,(5),inst_70811,inst_70812,null));
var inst_70814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70815 = ["Computing account PNL ..."];
var inst_70816 = (new cljs.core.PersistentVector(null,1,(5),inst_70814,inst_70815,null));
var inst_70817 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_70813,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_70816], 0));
var inst_70818 = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(inst_70810) : lpdashboard.core.compute_totals.call(null,inst_70810));
var inst_70819 = (function (){var _ = inst_70817;
var account_state = inst_70810;
var totals = inst_70818;
return (function (p1__70806_SHARP_){
var G__70828 = p1__70806_SHARP_;
var G__70829 = new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(account_state);
return (lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2(G__70828,G__70829) : lpdashboard.core.lp_position_map.call(null,G__70828,G__70829));
});
})();
var inst_70820 = new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(inst_70810);
var inst_70821 = cljs.core.vals(inst_70820);
var inst_70822 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_70819,inst_70821);
var inst_70823 = lpdashboard.core.render_totals(account,inst_70810,inst_70822,inst_70818,"USD");
var state_70825__$1 = state_70825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70825__$1,inst_70823);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$render_account_$_state_machine__36685__auto__ = null;
var lpdashboard$core$render_account_$_state_machine__36685__auto____0 = (function (){
var statearr_70830 = [null,null,null,null,null,null,null,null];
(statearr_70830[(0)] = lpdashboard$core$render_account_$_state_machine__36685__auto__);

(statearr_70830[(1)] = (1));

return statearr_70830;
});
var lpdashboard$core$render_account_$_state_machine__36685__auto____1 = (function (state_70825){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_70825);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e70831){var ex__36688__auto__ = e70831;
var statearr_70832_72389 = state_70825;
(statearr_70832_72389[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_70825[(4)]))){
var statearr_70833_72390 = state_70825;
(statearr_70833_72390[(1)] = cljs.core.first((state_70825[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72391 = state_70825;
state_70825 = G__72391;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$render_account_$_state_machine__36685__auto__ = function(state_70825){
switch(arguments.length){
case 0:
return lpdashboard$core$render_account_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$render_account_$_state_machine__36685__auto____1.call(this,state_70825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$render_account_$_state_machine__36685__auto____0;
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$render_account_$_state_machine__36685__auto____1;
return lpdashboard$core$render_account_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_70834 = f__36777__auto__();
(statearr_70834[(6)] = c__36776__auto__);

return statearr_70834;
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
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(lp_pos))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Pool PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Staking Rewards: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70835){
var vec__70836 = p__70835;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invested: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70839){
var vec__70840 = p__70839;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70840,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70840,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"invested","invested",19182926).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Withdrawn: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70843){
var vec__70844 = p__70843;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70844,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70844,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Diffs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70847){
var vec__70848 = p__70847;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70848,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70848,(1),null);
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_70880){
var state_val_70881 = (state_70880[(1)]);
if((state_val_70881 === (7))){
var inst_70862 = (state_70880[(7)]);
var inst_70869 = (function(){throw inst_70862})();
var state_70880__$1 = state_70880;
var statearr_70882_72392 = state_70880__$1;
(statearr_70882_72392[(2)] = inst_70869);

(statearr_70882_72392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70881 === (1))){
var state_70880__$1 = state_70880;
var statearr_70883_72393 = state_70880__$1;
(statearr_70883_72393[(2)] = null);

(statearr_70883_72393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70881 === (4))){
var inst_70851 = (state_70880[(2)]);
var inst_70852 = console.log("Could not enable web3 in browser",inst_70851);
var state_70880__$1 = state_70880;
var statearr_70884_72394 = state_70880__$1;
(statearr_70884_72394[(2)] = inst_70852);

(statearr_70884_72394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70881 === (6))){
var inst_70862 = (state_70880[(7)]);
var inst_70862__$1 = (state_70880[(2)]);
var inst_70863 = (inst_70862__$1 instanceof cljs.core.ExceptionInfo);
var inst_70864 = cljs.core.ex_data(inst_70862__$1);
var inst_70865 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_70864);
var inst_70866 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70865,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_70867 = ((inst_70863) && (inst_70866));
var state_70880__$1 = (function (){var statearr_70885 = state_70880;
(statearr_70885[(7)] = inst_70862__$1);

return statearr_70885;
})();
if(cljs.core.truth_(inst_70867)){
var statearr_70886_72395 = state_70880__$1;
(statearr_70886_72395[(1)] = (7));

} else {
var statearr_70887_72396 = state_70880__$1;
(statearr_70887_72396[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70881 === (3))){
var inst_70878 = (state_70880[(2)]);
var state_70880__$1 = state_70880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70880__$1,inst_70878);
} else {
if((state_val_70881 === (2))){
var _ = (function (){var statearr_70889 = state_70880;
(statearr_70889[(4)] = cljs.core.cons((5),(state_70880[(4)])));

return statearr_70889;
})();
var inst_70858 = window.ethereum;
var inst_70859 = inst_70858.enable();
var inst_70860 = cljs.core.async.interop.p__GT_c(inst_70859);
var state_70880__$1 = state_70880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70880__$1,(6),inst_70860);
} else {
if((state_val_70881 === (9))){
var inst_70872 = (state_70880[(2)]);
var inst_70873 = cljs.core.first(inst_70872);
var inst_70874 = console.log("connected-account",inst_70873);
var inst_70875 = lpdashboard.core.render_account(inst_70873);
var _ = (function (){var statearr_70890 = state_70880;
(statearr_70890[(4)] = cljs.core.rest((state_70880[(4)])));

return statearr_70890;
})();
var state_70880__$1 = (function (){var statearr_70891 = state_70880;
(statearr_70891[(8)] = inst_70874);

return statearr_70891;
})();
var statearr_70892_72397 = state_70880__$1;
(statearr_70892_72397[(2)] = inst_70875);

(statearr_70892_72397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70881 === (5))){
var _ = (function (){var statearr_70893 = state_70880;
(statearr_70893[(4)] = cljs.core.rest((state_70880[(4)])));

return statearr_70893;
})();
var state_70880__$1 = state_70880;
var ex70888 = (state_70880__$1[(2)]);
var statearr_70894_72398 = state_70880__$1;
(statearr_70894_72398[(5)] = ex70888);


if((ex70888 instanceof Error)){
var statearr_70895_72399 = state_70880__$1;
(statearr_70895_72399[(1)] = (4));

(statearr_70895_72399[(5)] = null);

} else {
throw ex70888;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70881 === (8))){
var inst_70862 = (state_70880[(7)]);
var state_70880__$1 = state_70880;
var statearr_70896_72400 = state_70880__$1;
(statearr_70896_72400[(2)] = inst_70862);

(statearr_70896_72400[(1)] = (9));


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
var statearr_70897 = [null,null,null,null,null,null,null,null,null];
(statearr_70897[(0)] = lpdashboard$core$web3_connect_$_state_machine__36685__auto__);

(statearr_70897[(1)] = (1));

return statearr_70897;
});
var lpdashboard$core$web3_connect_$_state_machine__36685__auto____1 = (function (state_70880){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_70880);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e70898){var ex__36688__auto__ = e70898;
var statearr_70899_72401 = state_70880;
(statearr_70899_72401[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_70880[(4)]))){
var statearr_70900_72402 = state_70880;
(statearr_70900_72402[(1)] = cljs.core.first((state_70880[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72403 = state_70880;
state_70880 = G__72403;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$web3_connect_$_state_machine__36685__auto__ = function(state_70880){
switch(arguments.length){
case 0:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____1.call(this,state_70880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____0;
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____1;
return lpdashboard$core$web3_connect_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_70901 = f__36777__auto__();
(statearr_70901[(6)] = c__36776__auto__);

return statearr_70901;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__70902_SHARP_){
return cljs.core.reset_BANG_(value,p1__70902_SHARP_.target.value);
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
}),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"------- ACCOUNT PNL --------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL From Pools: ",new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards Accrued: ",new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------OPEN LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70903_SHARP_){
return lpdashboard.core.render_lp_pos(p1__70903_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__70903_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70904_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__70904_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------CLOSED LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70905_SHARP_){
return lpdashboard.core.render_lp_pos(p1__70905_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__70905_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70906_SHARP_){
return bignumber.core._GT__EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__70906_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null)], null)], null);
});
lpdashboard.core.start = (function lpdashboard$core$start(){
var G__70907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.hello_world], null);
var G__70908 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__70907,G__70908) : reagent.core.render_component.call(null,G__70907,G__70908));
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_70929){
var state_val_70930 = (state_70929[(1)]);
if((state_val_70930 === (1))){
var inst_70909 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var inst_70910 = lpdashboard.ethereum._LT_token_decimals(rewards_address);
var state_70929__$1 = (function (){var statearr_70931 = state_70929;
(statearr_70931[(7)] = inst_70909);

return statearr_70931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70929__$1,(2),inst_70910);
} else {
if((state_val_70930 === (2))){
var inst_70909 = (state_70929[(7)]);
var inst_70912 = (state_70929[(2)]);
var inst_70913 = inst_70909.earned(user_address);
var inst_70914 = cljs.core.async.interop.p__GT_c(inst_70913);
var state_70929__$1 = (function (){var statearr_70932 = state_70929;
(statearr_70932[(8)] = inst_70912);

return statearr_70932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70929__$1,(3),inst_70914);
} else {
if((state_val_70930 === (3))){
var inst_70916 = (state_70929[(9)]);
var inst_70916__$1 = (state_70929[(2)]);
var inst_70917 = (inst_70916__$1 instanceof cljs.core.ExceptionInfo);
var inst_70918 = cljs.core.ex_data(inst_70916__$1);
var inst_70919 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_70918);
var inst_70920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70919,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_70921 = ((inst_70917) && (inst_70920));
var state_70929__$1 = (function (){var statearr_70933 = state_70929;
(statearr_70933[(9)] = inst_70916__$1);

return statearr_70933;
})();
if(cljs.core.truth_(inst_70921)){
var statearr_70934_72404 = state_70929__$1;
(statearr_70934_72404[(1)] = (4));

} else {
var statearr_70935_72405 = state_70929__$1;
(statearr_70935_72405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70930 === (4))){
var inst_70916 = (state_70929[(9)]);
var inst_70923 = (function(){throw inst_70916})();
var state_70929__$1 = state_70929;
var statearr_70936_72406 = state_70929__$1;
(statearr_70936_72406[(2)] = inst_70923);

(statearr_70936_72406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70930 === (5))){
var inst_70916 = (state_70929[(9)]);
var state_70929__$1 = state_70929;
var statearr_70937_72407 = state_70929__$1;
(statearr_70937_72407[(2)] = inst_70916);

(statearr_70937_72407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70930 === (6))){
var inst_70912 = (state_70929[(8)]);
var inst_70926 = (state_70929[(2)]);
var inst_70927 = lpdashboard.utils.ebn__GT_bn(inst_70926,inst_70912);
var state_70929__$1 = state_70929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70929__$1,inst_70927);
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
var statearr_70938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70938[(0)] = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__);

(statearr_70938[(1)] = (1));

return statearr_70938;
});
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1 = (function (state_70929){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_70929);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e70939){var ex__36688__auto__ = e70939;
var statearr_70940_72408 = state_70929;
(statearr_70940_72408[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_70929[(4)]))){
var statearr_70941_72409 = state_70929;
(statearr_70941_72409[(1)] = cljs.core.first((state_70929[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72410 = state_70929;
state_70929 = G__72410;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__ = function(state_70929){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1.call(this,state_70929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_70942 = f__36777__auto__();
(statearr_70942[(6)] = c__36776__auto__);

return statearr_70942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_rewards_token = (function lpdashboard$core$_LT_staking_rewards_token(staking_address){
var staking_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71016){
var state_val_71017 = (state_71016[(1)]);
if((state_val_71017 === (7))){
var inst_70945 = (state_71016[(2)]);
var inst_70946 = console.log("prob getting sushi failback:",staking_address);
var state_71016__$1 = (function (){var statearr_71018 = state_71016;
(statearr_71018[(7)] = inst_70945);

(statearr_71018[(8)] = inst_70946);

return statearr_71018;
})();
var statearr_71019_72411 = state_71016__$1;
(statearr_71019_72411[(2)] = null);

(statearr_71019_72411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (20))){
var inst_70989 = (state_71016[(2)]);
var _ = (function (){var statearr_71020 = state_71016;
(statearr_71020[(4)] = cljs.core.rest((state_71016[(4)])));

return statearr_71020;
})();
var state_71016__$1 = state_71016;
var statearr_71021_72412 = state_71016__$1;
(statearr_71021_72412[(2)] = inst_70989);

(statearr_71021_72412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (1))){
var state_71016__$1 = state_71016;
var statearr_71022_72413 = state_71016__$1;
(statearr_71022_72413[(2)] = null);

(statearr_71022_72413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (24))){
var inst_71001 = (state_71016[(9)]);
var state_71016__$1 = state_71016;
var statearr_71023_72414 = state_71016__$1;
(statearr_71023_72414[(2)] = inst_71001);

(statearr_71023_72414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (4))){
var inst_70943 = (state_71016[(2)]);
var inst_70944 = console.log("prob getting rewards token:",staking_address);
var state_71016__$1 = (function (){var statearr_71025 = state_71016;
(statearr_71025[(10)] = inst_70943);

(statearr_71025[(11)] = inst_70944);

return statearr_71025;
})();
var statearr_71026_72415 = state_71016__$1;
(statearr_71026_72415[(2)] = null);

(statearr_71026_72415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (15))){
var inst_70967 = (state_71016[(2)]);
var _ = (function (){var statearr_71027 = state_71016;
(statearr_71027[(4)] = cljs.core.rest((state_71016[(4)])));

return statearr_71027;
})();
var state_71016__$1 = state_71016;
var statearr_71028_72416 = state_71016__$1;
(statearr_71028_72416[(2)] = inst_70967);

(statearr_71028_72416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (21))){
var _ = (function (){var statearr_71029 = state_71016;
(statearr_71029[(4)] = cljs.core.rest((state_71016[(4)])));

return statearr_71029;
})();
var state_71016__$1 = state_71016;
var ex71024 = (state_71016__$1[(2)]);
var statearr_71030_72417 = state_71016__$1;
(statearr_71030_72417[(5)] = ex71024);


if((ex71024 instanceof Error)){
var statearr_71031_72418 = state_71016__$1;
(statearr_71031_72418[(1)] = (4));

(statearr_71031_72418[(5)] = null);

} else {
throw ex71024;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (13))){
var inst_70957 = (state_71016[(12)]);
var inst_70964 = (function(){throw inst_70957})();
var state_71016__$1 = state_71016;
var statearr_71032_72419 = state_71016__$1;
(statearr_71032_72419[(2)] = inst_70964);

(statearr_71032_72419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (22))){
var inst_71001 = (state_71016[(9)]);
var inst_71001__$1 = (state_71016[(2)]);
var inst_71002 = (inst_71001__$1 instanceof cljs.core.ExceptionInfo);
var inst_71003 = cljs.core.ex_data(inst_71001__$1);
var inst_71004 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71003);
var inst_71005 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71004,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71006 = ((inst_71002) && (inst_71005));
var state_71016__$1 = (function (){var statearr_71033 = state_71016;
(statearr_71033[(9)] = inst_71001__$1);

return statearr_71033;
})();
if(cljs.core.truth_(inst_71006)){
var statearr_71034_72420 = state_71016__$1;
(statearr_71034_72420[(1)] = (23));

} else {
var statearr_71035_72421 = state_71016__$1;
(statearr_71035_72421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (6))){
var inst_70992 = (state_71016[(2)]);
var state_71016__$1 = state_71016;
var statearr_71036_72422 = state_71016__$1;
(statearr_71036_72422[(2)] = inst_70992);

(statearr_71036_72422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (25))){
var inst_71011 = (state_71016[(2)]);
var _ = (function (){var statearr_71037 = state_71016;
(statearr_71037[(4)] = cljs.core.rest((state_71016[(4)])));

return statearr_71037;
})();
var state_71016__$1 = state_71016;
var statearr_71038_72423 = state_71016__$1;
(statearr_71038_72423[(2)] = inst_71011);

(statearr_71038_72423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (17))){
var inst_70979 = (state_71016[(13)]);
var inst_70979__$1 = (state_71016[(2)]);
var inst_70980 = (inst_70979__$1 instanceof cljs.core.ExceptionInfo);
var inst_70981 = cljs.core.ex_data(inst_70979__$1);
var inst_70982 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_70981);
var inst_70983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70982,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_70984 = ((inst_70980) && (inst_70983));
var state_71016__$1 = (function (){var statearr_71039 = state_71016;
(statearr_71039[(13)] = inst_70979__$1);

return statearr_71039;
})();
if(cljs.core.truth_(inst_70984)){
var statearr_71040_72424 = state_71016__$1;
(statearr_71040_72424[(1)] = (18));

} else {
var statearr_71041_72425 = state_71016__$1;
(statearr_71041_72425[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (3))){
var inst_71014 = (state_71016[(2)]);
var state_71016__$1 = state_71016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71016__$1,inst_71014);
} else {
if((state_val_71017 === (12))){
var inst_70957 = (state_71016[(12)]);
var inst_70957__$1 = (state_71016[(2)]);
var inst_70958 = (inst_70957__$1 instanceof cljs.core.ExceptionInfo);
var inst_70959 = cljs.core.ex_data(inst_70957__$1);
var inst_70960 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_70959);
var inst_70961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70960,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_70962 = ((inst_70958) && (inst_70961));
var state_71016__$1 = (function (){var statearr_71042 = state_71016;
(statearr_71042[(12)] = inst_70957__$1);

return statearr_71042;
})();
if(cljs.core.truth_(inst_70962)){
var statearr_71043_72426 = state_71016__$1;
(statearr_71043_72426[(1)] = (13));

} else {
var statearr_71044_72427 = state_71016__$1;
(statearr_71044_72427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (2))){
var _ = (function (){var statearr_71045 = state_71016;
(statearr_71045[(4)] = cljs.core.cons((21),(state_71016[(4)])));

return statearr_71045;
})();
var inst_70998 = staking_contract.rewardsToken();
var inst_70999 = cljs.core.async.interop.p__GT_c(inst_70998);
var state_71016__$1 = state_71016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71016__$1,(22),inst_70999);
} else {
if((state_val_71017 === (23))){
var inst_71001 = (state_71016[(9)]);
var inst_71008 = (function(){throw inst_71001})();
var state_71016__$1 = state_71016;
var statearr_71047_72428 = state_71016__$1;
(statearr_71047_72428[(2)] = inst_71008);

(statearr_71047_72428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (19))){
var inst_70979 = (state_71016[(13)]);
var state_71016__$1 = state_71016;
var statearr_71048_72429 = state_71016__$1;
(statearr_71048_72429[(2)] = inst_70979);

(statearr_71048_72429[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (11))){
var _ = (function (){var statearr_71049 = state_71016;
(statearr_71049[(4)] = cljs.core.rest((state_71016[(4)])));

return statearr_71049;
})();
var state_71016__$1 = state_71016;
var ex71046 = (state_71016__$1[(2)]);
var statearr_71050_72430 = state_71016__$1;
(statearr_71050_72430[(5)] = ex71046);


if((ex71046 instanceof Error)){
var statearr_71051_72431 = state_71016__$1;
(statearr_71051_72431[(1)] = (10));

(statearr_71051_72431[(5)] = null);

} else {
throw ex71046;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (9))){
var inst_70970 = (state_71016[(2)]);
var state_71016__$1 = state_71016;
var statearr_71052_72432 = state_71016__$1;
(statearr_71052_72432[(2)] = inst_70970);

(statearr_71052_72432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (5))){
var _ = (function (){var statearr_71054 = state_71016;
(statearr_71054[(4)] = cljs.core.cons((16),(state_71016[(4)])));

return statearr_71054;
})();
var inst_70976 = staking_contract.sushi();
var inst_70977 = cljs.core.async.interop.p__GT_c(inst_70976);
var state_71016__$1 = state_71016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71016__$1,(17),inst_70977);
} else {
if((state_val_71017 === (14))){
var inst_70957 = (state_71016[(12)]);
var state_71016__$1 = state_71016;
var statearr_71055_72433 = state_71016__$1;
(statearr_71055_72433[(2)] = inst_70957);

(statearr_71055_72433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (16))){
var _ = (function (){var statearr_71056 = state_71016;
(statearr_71056[(4)] = cljs.core.rest((state_71016[(4)])));

return statearr_71056;
})();
var state_71016__$1 = state_71016;
var ex71053 = (state_71016__$1[(2)]);
var statearr_71057_72434 = state_71016__$1;
(statearr_71057_72434[(5)] = ex71053);


if((ex71053 instanceof Error)){
var statearr_71058_72435 = state_71016__$1;
(statearr_71058_72435[(1)] = (7));

(statearr_71058_72435[(5)] = null);

} else {
throw ex71053;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (10))){
var inst_70947 = (state_71016[(2)]);
var inst_70948 = console.log("prob getting cream failback:",staking_address);
var state_71016__$1 = (function (){var statearr_71059 = state_71016;
(statearr_71059[(14)] = inst_70947);

return statearr_71059;
})();
var statearr_71060_72436 = state_71016__$1;
(statearr_71060_72436[(2)] = inst_70948);

(statearr_71060_72436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (18))){
var inst_70979 = (state_71016[(13)]);
var inst_70986 = (function(){throw inst_70979})();
var state_71016__$1 = state_71016;
var statearr_71061_72437 = state_71016__$1;
(statearr_71061_72437[(2)] = inst_70986);

(statearr_71061_72437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71017 === (8))){
var _ = (function (){var statearr_71062 = state_71016;
(statearr_71062[(4)] = cljs.core.cons((11),(state_71016[(4)])));

return statearr_71062;
})();
var inst_70954 = staking_contract.cream();
var inst_70955 = cljs.core.async.interop.p__GT_c(inst_70954);
var state_71016__$1 = state_71016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71016__$1,(12),inst_70955);
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
var statearr_71063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71063[(0)] = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__);

(statearr_71063[(1)] = (1));

return statearr_71063;
});
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1 = (function (state_71016){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71016);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71064){var ex__36688__auto__ = e71064;
var statearr_71065_72438 = state_71016;
(statearr_71065_72438[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71016[(4)]))){
var statearr_71066_72439 = state_71016;
(statearr_71066_72439[(1)] = cljs.core.first((state_71016[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72440 = state_71016;
state_71016 = G__72440;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__ = function(state_71016){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1.call(this,state_71016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71067 = f__36777__auto__();
(statearr_71067[(6)] = c__36776__auto__);

return statearr_71067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_prop = (function lpdashboard$core$_LT_staked_prop(staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71104){
var state_val_71105 = (state_71104[(1)]);
if((state_val_71105 === (7))){
var inst_71090 = (state_71104[(7)]);
var inst_71090__$1 = (state_71104[(2)]);
var inst_71091 = (inst_71090__$1 instanceof cljs.core.ExceptionInfo);
var inst_71092 = cljs.core.ex_data(inst_71090__$1);
var inst_71093 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71092);
var inst_71094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71093,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71095 = ((inst_71091) && (inst_71094));
var state_71104__$1 = (function (){var statearr_71106 = state_71104;
(statearr_71106[(7)] = inst_71090__$1);

return statearr_71106;
})();
if(cljs.core.truth_(inst_71095)){
var statearr_71107_72441 = state_71104__$1;
(statearr_71107_72441[(1)] = (8));

} else {
var statearr_71108_72442 = state_71104__$1;
(statearr_71108_72442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71105 === (1))){
var inst_71068 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_71069 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_71104__$1 = (function (){var statearr_71109 = state_71104;
(statearr_71109[(8)] = inst_71068);

return statearr_71109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71104__$1,(2),inst_71069);
} else {
if((state_val_71105 === (4))){
var inst_71075 = (state_71104[(9)]);
var inst_71082 = (function(){throw inst_71075})();
var state_71104__$1 = state_71104;
var statearr_71110_72443 = state_71104__$1;
(statearr_71110_72443[(2)] = inst_71082);

(statearr_71110_72443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71105 === (6))){
var inst_71068 = (state_71104[(8)]);
var inst_71071 = (state_71104[(10)]);
var inst_71085 = (state_71104[(2)]);
var inst_71086 = lpdashboard.utils.ebn__GT_bn(inst_71085,inst_71071);
var inst_71087 = inst_71068.totalSupply();
var inst_71088 = cljs.core.async.interop.p__GT_c(inst_71087);
var state_71104__$1 = (function (){var statearr_71111 = state_71104;
(statearr_71111[(11)] = inst_71086);

return statearr_71111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71104__$1,(7),inst_71088);
} else {
if((state_val_71105 === (3))){
var inst_71075 = (state_71104[(9)]);
var inst_71075__$1 = (state_71104[(2)]);
var inst_71076 = (inst_71075__$1 instanceof cljs.core.ExceptionInfo);
var inst_71077 = cljs.core.ex_data(inst_71075__$1);
var inst_71078 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71077);
var inst_71079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71078,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71080 = ((inst_71076) && (inst_71079));
var state_71104__$1 = (function (){var statearr_71112 = state_71104;
(statearr_71112[(9)] = inst_71075__$1);

return statearr_71112;
})();
if(cljs.core.truth_(inst_71080)){
var statearr_71113_72444 = state_71104__$1;
(statearr_71113_72444[(1)] = (4));

} else {
var statearr_71114_72445 = state_71104__$1;
(statearr_71114_72445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71105 === (2))){
var inst_71068 = (state_71104[(8)]);
var inst_71071 = (state_71104[(2)]);
var inst_71072 = inst_71068.balanceOf(user_address);
var inst_71073 = cljs.core.async.interop.p__GT_c(inst_71072);
var state_71104__$1 = (function (){var statearr_71115 = state_71104;
(statearr_71115[(10)] = inst_71071);

return statearr_71115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71104__$1,(3),inst_71073);
} else {
if((state_val_71105 === (9))){
var inst_71090 = (state_71104[(7)]);
var state_71104__$1 = state_71104;
var statearr_71116_72446 = state_71104__$1;
(statearr_71116_72446[(2)] = inst_71090);

(statearr_71116_72446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71105 === (5))){
var inst_71075 = (state_71104[(9)]);
var state_71104__$1 = state_71104;
var statearr_71117_72447 = state_71104__$1;
(statearr_71117_72447[(2)] = inst_71075);

(statearr_71117_72447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71105 === (10))){
var inst_71086 = (state_71104[(11)]);
var inst_71071 = (state_71104[(10)]);
var inst_71100 = (state_71104[(2)]);
var inst_71101 = lpdashboard.utils.ebn__GT_bn(inst_71100,inst_71071);
var inst_71102 = bignumber.core._SLASH_(inst_71086,inst_71101);
var state_71104__$1 = state_71104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71104__$1,inst_71102);
} else {
if((state_val_71105 === (8))){
var inst_71090 = (state_71104[(7)]);
var inst_71097 = (function(){throw inst_71090})();
var state_71104__$1 = state_71104;
var statearr_71118_72448 = state_71104__$1;
(statearr_71118_72448[(2)] = inst_71097);

(statearr_71118_72448[(1)] = (10));


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
var statearr_71119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71119[(0)] = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__);

(statearr_71119[(1)] = (1));

return statearr_71119;
});
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1 = (function (state_71104){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71104);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71120){var ex__36688__auto__ = e71120;
var statearr_71121_72449 = state_71104;
(statearr_71121_72449[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71104[(4)]))){
var statearr_71122_72450 = state_71104;
(statearr_71122_72450[(1)] = cljs.core.first((state_71104[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72451 = state_71104;
state_71104 = G__72451;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__ = function(state_71104){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1.call(this,state_71104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71123 = f__36777__auto__();
(statearr_71123[(6)] = c__36776__auto__);

return statearr_71123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_pool_lps = (function lpdashboard$core$_LT_staking_pool_lps(lp_address,staking_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71155){
var state_val_71156 = (state_71155[(1)]);
if((state_val_71156 === (7))){
var inst_71142 = (state_71155[(7)]);
var inst_71149 = (function(){throw inst_71142})();
var state_71155__$1 = state_71155;
var statearr_71157_72452 = state_71155__$1;
(statearr_71157_72452[(2)] = inst_71149);

(statearr_71157_72452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (1))){
var inst_71124 = (state_71155[(8)]);
var inst_71124__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_71125 = inst_71124__$1.decimals();
var inst_71126 = cljs.core.async.interop.p__GT_c(inst_71125);
var state_71155__$1 = (function (){var statearr_71158 = state_71155;
(statearr_71158[(8)] = inst_71124__$1);

return statearr_71158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71155__$1,(2),inst_71126);
} else {
if((state_val_71156 === (4))){
var inst_71128 = (state_71155[(9)]);
var state_71155__$1 = state_71155;
var statearr_71159_72453 = state_71155__$1;
(statearr_71159_72453[(2)] = inst_71128);

(statearr_71159_72453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (6))){
var inst_71142 = (state_71155[(7)]);
var inst_71142__$1 = (state_71155[(2)]);
var inst_71143 = (inst_71142__$1 instanceof cljs.core.ExceptionInfo);
var inst_71144 = cljs.core.ex_data(inst_71142__$1);
var inst_71145 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71144);
var inst_71146 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71145,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71147 = ((inst_71143) && (inst_71146));
var state_71155__$1 = (function (){var statearr_71160 = state_71155;
(statearr_71160[(7)] = inst_71142__$1);

return statearr_71160;
})();
if(cljs.core.truth_(inst_71147)){
var statearr_71161_72454 = state_71155__$1;
(statearr_71161_72454[(1)] = (7));

} else {
var statearr_71162_72455 = state_71155__$1;
(statearr_71162_72455[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (3))){
var inst_71128 = (state_71155[(9)]);
var inst_71135 = (function(){throw inst_71128})();
var state_71155__$1 = state_71155;
var statearr_71163_72456 = state_71155__$1;
(statearr_71163_72456[(2)] = inst_71135);

(statearr_71163_72456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (2))){
var inst_71128 = (state_71155[(9)]);
var inst_71128__$1 = (state_71155[(2)]);
var inst_71129 = (inst_71128__$1 instanceof cljs.core.ExceptionInfo);
var inst_71130 = cljs.core.ex_data(inst_71128__$1);
var inst_71131 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71130);
var inst_71132 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71131,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71133 = ((inst_71129) && (inst_71132));
var state_71155__$1 = (function (){var statearr_71164 = state_71155;
(statearr_71164[(9)] = inst_71128__$1);

return statearr_71164;
})();
if(cljs.core.truth_(inst_71133)){
var statearr_71165_72457 = state_71155__$1;
(statearr_71165_72457[(1)] = (3));

} else {
var statearr_71166_72458 = state_71155__$1;
(statearr_71166_72458[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (9))){
var inst_71138 = (state_71155[(10)]);
var inst_71152 = (state_71155[(2)]);
var inst_71153 = lpdashboard.utils.ebn__GT_bn(inst_71152,inst_71138);
var state_71155__$1 = state_71155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71155__$1,inst_71153);
} else {
if((state_val_71156 === (5))){
var inst_71124 = (state_71155[(8)]);
var inst_71138 = (state_71155[(2)]);
var inst_71139 = inst_71124.balanceOf(staking_address);
var inst_71140 = cljs.core.async.interop.p__GT_c(inst_71139);
var state_71155__$1 = (function (){var statearr_71167 = state_71155;
(statearr_71167[(10)] = inst_71138);

return statearr_71167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71155__$1,(6),inst_71140);
} else {
if((state_val_71156 === (8))){
var inst_71142 = (state_71155[(7)]);
var state_71155__$1 = state_71155;
var statearr_71168_72459 = state_71155__$1;
(statearr_71168_72459[(2)] = inst_71142);

(statearr_71168_72459[(1)] = (9));


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
var statearr_71169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71169[(0)] = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__);

(statearr_71169[(1)] = (1));

return statearr_71169;
});
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1 = (function (state_71155){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71155);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71170){var ex__36688__auto__ = e71170;
var statearr_71171_72460 = state_71155;
(statearr_71171_72460[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71155[(4)]))){
var statearr_71172_72461 = state_71155;
(statearr_71172_72461[(1)] = cljs.core.first((state_71155[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72462 = state_71155;
state_71155 = G__72462;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__ = function(state_71155){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1.call(this,state_71155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71173 = f__36777__auto__();
(statearr_71173[(6)] = c__36776__auto__);

return statearr_71173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_lps = (function lpdashboard$core$_LT_total_pool_lps(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71194){
var state_val_71195 = (state_71194[(1)]);
if((state_val_71195 === (1))){
var inst_71174 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_71175 = lpdashboard.ethereum._LT_token_decimals(lp_address);
var state_71194__$1 = (function (){var statearr_71196 = state_71194;
(statearr_71196[(7)] = inst_71174);

return statearr_71196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71194__$1,(2),inst_71175);
} else {
if((state_val_71195 === (2))){
var inst_71174 = (state_71194[(7)]);
var inst_71177 = (state_71194[(2)]);
var inst_71178 = inst_71174.totalSupply();
var inst_71179 = cljs.core.async.interop.p__GT_c(inst_71178);
var state_71194__$1 = (function (){var statearr_71197 = state_71194;
(statearr_71197[(8)] = inst_71177);

return statearr_71197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71194__$1,(3),inst_71179);
} else {
if((state_val_71195 === (3))){
var inst_71181 = (state_71194[(9)]);
var inst_71181__$1 = (state_71194[(2)]);
var inst_71182 = (inst_71181__$1 instanceof cljs.core.ExceptionInfo);
var inst_71183 = cljs.core.ex_data(inst_71181__$1);
var inst_71184 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71183);
var inst_71185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71184,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71186 = ((inst_71182) && (inst_71185));
var state_71194__$1 = (function (){var statearr_71198 = state_71194;
(statearr_71198[(9)] = inst_71181__$1);

return statearr_71198;
})();
if(cljs.core.truth_(inst_71186)){
var statearr_71199_72463 = state_71194__$1;
(statearr_71199_72463[(1)] = (4));

} else {
var statearr_71200_72464 = state_71194__$1;
(statearr_71200_72464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (4))){
var inst_71181 = (state_71194[(9)]);
var inst_71188 = (function(){throw inst_71181})();
var state_71194__$1 = state_71194;
var statearr_71201_72465 = state_71194__$1;
(statearr_71201_72465[(2)] = inst_71188);

(statearr_71201_72465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (5))){
var inst_71181 = (state_71194[(9)]);
var state_71194__$1 = state_71194;
var statearr_71202_72466 = state_71194__$1;
(statearr_71202_72466[(2)] = inst_71181);

(statearr_71202_72466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (6))){
var inst_71177 = (state_71194[(8)]);
var inst_71191 = (state_71194[(2)]);
var inst_71192 = lpdashboard.utils.ebn__GT_bn(inst_71191,inst_71177);
var state_71194__$1 = state_71194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71194__$1,inst_71192);
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
var statearr_71203 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71203[(0)] = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__);

(statearr_71203[(1)] = (1));

return statearr_71203;
});
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1 = (function (state_71194){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71194);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71204){var ex__36688__auto__ = e71204;
var statearr_71205_72467 = state_71194;
(statearr_71205_72467[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71194[(4)]))){
var statearr_71206_72468 = state_71194;
(statearr_71206_72468[(1)] = cljs.core.first((state_71194[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72469 = state_71194;
state_71194 = G__72469;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__ = function(state_71194){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1.call(this,state_71194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71207 = f__36777__auto__();
(statearr_71207[(6)] = c__36776__auto__);

return statearr_71207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_tokens = (function lpdashboard$core$_LT_lp_pool_tokens(lp_address){
var lp_contract = lpdashboard.ethereum.make_erc20(lp_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71240){
var state_val_71241 = (state_71240[(1)]);
if((state_val_71241 === (7))){
var inst_71226 = (state_71240[(7)]);
var inst_71233 = (function(){throw inst_71226})();
var state_71240__$1 = state_71240;
var statearr_71242_72470 = state_71240__$1;
(statearr_71242_72470[(2)] = inst_71233);

(statearr_71242_72470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71241 === (1))){
var inst_71208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71209 = lp_contract.token0();
var inst_71210 = cljs.core.async.interop.p__GT_c(inst_71209);
var state_71240__$1 = (function (){var statearr_71243 = state_71240;
(statearr_71243[(8)] = inst_71208);

return statearr_71243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71240__$1,(2),inst_71210);
} else {
if((state_val_71241 === (4))){
var inst_71212 = (state_71240[(9)]);
var state_71240__$1 = state_71240;
var statearr_71244_72471 = state_71240__$1;
(statearr_71244_72471[(2)] = inst_71212);

(statearr_71244_72471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71241 === (6))){
var inst_71226 = (state_71240[(7)]);
var inst_71226__$1 = (state_71240[(2)]);
var inst_71227 = (inst_71226__$1 instanceof cljs.core.ExceptionInfo);
var inst_71228 = cljs.core.ex_data(inst_71226__$1);
var inst_71229 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71228);
var inst_71230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71229,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71231 = ((inst_71227) && (inst_71230));
var state_71240__$1 = (function (){var statearr_71245 = state_71240;
(statearr_71245[(7)] = inst_71226__$1);

return statearr_71245;
})();
if(cljs.core.truth_(inst_71231)){
var statearr_71246_72472 = state_71240__$1;
(statearr_71246_72472[(1)] = (7));

} else {
var statearr_71247_72473 = state_71240__$1;
(statearr_71247_72473[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71241 === (3))){
var inst_71212 = (state_71240[(9)]);
var inst_71219 = (function(){throw inst_71212})();
var state_71240__$1 = state_71240;
var statearr_71248_72474 = state_71240__$1;
(statearr_71248_72474[(2)] = inst_71219);

(statearr_71248_72474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71241 === (2))){
var inst_71212 = (state_71240[(9)]);
var inst_71212__$1 = (state_71240[(2)]);
var inst_71213 = (inst_71212__$1 instanceof cljs.core.ExceptionInfo);
var inst_71214 = cljs.core.ex_data(inst_71212__$1);
var inst_71215 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71214);
var inst_71216 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71215,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71217 = ((inst_71213) && (inst_71216));
var state_71240__$1 = (function (){var statearr_71249 = state_71240;
(statearr_71249[(9)] = inst_71212__$1);

return statearr_71249;
})();
if(cljs.core.truth_(inst_71217)){
var statearr_71250_72475 = state_71240__$1;
(statearr_71250_72475[(1)] = (3));

} else {
var statearr_71251_72476 = state_71240__$1;
(statearr_71251_72476[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71241 === (9))){
var inst_71208 = (state_71240[(8)]);
var inst_71222 = (state_71240[(10)]);
var inst_71236 = (state_71240[(2)]);
var inst_71237 = [inst_71222,inst_71236];
var inst_71238 = (new cljs.core.PersistentVector(null,2,(5),inst_71208,inst_71237,null));
var state_71240__$1 = state_71240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71240__$1,inst_71238);
} else {
if((state_val_71241 === (5))){
var inst_71222 = (state_71240[(2)]);
var inst_71223 = lp_contract.token1();
var inst_71224 = cljs.core.async.interop.p__GT_c(inst_71223);
var state_71240__$1 = (function (){var statearr_71252 = state_71240;
(statearr_71252[(10)] = inst_71222);

return statearr_71252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71240__$1,(6),inst_71224);
} else {
if((state_val_71241 === (8))){
var inst_71226 = (state_71240[(7)]);
var state_71240__$1 = state_71240;
var statearr_71253_72477 = state_71240__$1;
(statearr_71253_72477[(2)] = inst_71226);

(statearr_71253_72477[(1)] = (9));


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
var statearr_71254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71254[(0)] = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__);

(statearr_71254[(1)] = (1));

return statearr_71254;
});
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1 = (function (state_71240){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71240);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71255){var ex__36688__auto__ = e71255;
var statearr_71256_72478 = state_71240;
(statearr_71256_72478[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71240[(4)]))){
var statearr_71257_72479 = state_71240;
(statearr_71257_72479[(1)] = cljs.core.first((state_71240[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72480 = state_71240;
state_71240 = G__72480;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__ = function(state_71240){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1.call(this,state_71240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71258 = f__36777__auto__();
(statearr_71258[(6)] = c__36776__auto__);

return statearr_71258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_symbols = (function lpdashboard$core$_LT_lp_pool_symbols(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71298){
var state_val_71299 = (state_71298[(1)]);
if((state_val_71299 === (7))){
var inst_71284 = (state_71298[(7)]);
var inst_71284__$1 = (state_71298[(2)]);
var inst_71285 = (inst_71284__$1 instanceof cljs.core.ExceptionInfo);
var inst_71286 = cljs.core.ex_data(inst_71284__$1);
var inst_71287 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71286);
var inst_71288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71287,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71289 = ((inst_71285) && (inst_71288));
var state_71298__$1 = (function (){var statearr_71300 = state_71298;
(statearr_71300[(7)] = inst_71284__$1);

return statearr_71300;
})();
if(cljs.core.truth_(inst_71289)){
var statearr_71301_72481 = state_71298__$1;
(statearr_71301_72481[(1)] = (8));

} else {
var statearr_71302_72482 = state_71298__$1;
(statearr_71302_72482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71299 === (1))){
var inst_71259 = lpdashboard.core._LT_lp_pool_tokens(lp_address);
var state_71298__$1 = state_71298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71298__$1,(2),inst_71259);
} else {
if((state_val_71299 === (4))){
var inst_71270 = (state_71298[(8)]);
var inst_71277 = (function(){throw inst_71270})();
var state_71298__$1 = state_71298;
var statearr_71303_72483 = state_71298__$1;
(statearr_71303_72483[(2)] = inst_71277);

(statearr_71303_72483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71299 === (6))){
var inst_71265 = (state_71298[(9)]);
var inst_71280 = (state_71298[(2)]);
var inst_71281 = inst_71265.symbol();
var inst_71282 = cljs.core.async.interop.p__GT_c(inst_71281);
var state_71298__$1 = (function (){var statearr_71304 = state_71298;
(statearr_71304[(10)] = inst_71280);

return statearr_71304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71298__$1,(7),inst_71282);
} else {
if((state_val_71299 === (3))){
var inst_71270 = (state_71298[(8)]);
var inst_71270__$1 = (state_71298[(2)]);
var inst_71271 = (inst_71270__$1 instanceof cljs.core.ExceptionInfo);
var inst_71272 = cljs.core.ex_data(inst_71270__$1);
var inst_71273 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71272);
var inst_71274 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71273,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71275 = ((inst_71271) && (inst_71274));
var state_71298__$1 = (function (){var statearr_71305 = state_71298;
(statearr_71305[(8)] = inst_71270__$1);

return statearr_71305;
})();
if(cljs.core.truth_(inst_71275)){
var statearr_71306_72484 = state_71298__$1;
(statearr_71306_72484[(1)] = (4));

} else {
var statearr_71307_72485 = state_71298__$1;
(statearr_71307_72485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71299 === (2))){
var inst_71261 = (state_71298[(2)]);
var inst_71262 = cljs.core.first(inst_71261);
var inst_71263 = lpdashboard.ethereum.make_erc20(inst_71262);
var inst_71264 = cljs.core.second(inst_71261);
var inst_71265 = lpdashboard.ethereum.make_erc20(inst_71264);
var inst_71266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71267 = inst_71263.symbol();
var inst_71268 = cljs.core.async.interop.p__GT_c(inst_71267);
var state_71298__$1 = (function (){var statearr_71308 = state_71298;
(statearr_71308[(9)] = inst_71265);

(statearr_71308[(11)] = inst_71266);

return statearr_71308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71298__$1,(3),inst_71268);
} else {
if((state_val_71299 === (9))){
var inst_71284 = (state_71298[(7)]);
var state_71298__$1 = state_71298;
var statearr_71309_72486 = state_71298__$1;
(statearr_71309_72486[(2)] = inst_71284);

(statearr_71309_72486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71299 === (5))){
var inst_71270 = (state_71298[(8)]);
var state_71298__$1 = state_71298;
var statearr_71310_72487 = state_71298__$1;
(statearr_71310_72487[(2)] = inst_71270);

(statearr_71310_72487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71299 === (10))){
var inst_71280 = (state_71298[(10)]);
var inst_71266 = (state_71298[(11)]);
var inst_71294 = (state_71298[(2)]);
var inst_71295 = [inst_71280,inst_71294];
var inst_71296 = (new cljs.core.PersistentVector(null,2,(5),inst_71266,inst_71295,null));
var state_71298__$1 = state_71298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71298__$1,inst_71296);
} else {
if((state_val_71299 === (8))){
var inst_71284 = (state_71298[(7)]);
var inst_71291 = (function(){throw inst_71284})();
var state_71298__$1 = state_71298;
var statearr_71311_72488 = state_71298__$1;
(statearr_71311_72488[(2)] = inst_71291);

(statearr_71311_72488[(1)] = (10));


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
var statearr_71312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71312[(0)] = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__);

(statearr_71312[(1)] = (1));

return statearr_71312;
});
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1 = (function (state_71298){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71298);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71313){var ex__36688__auto__ = e71313;
var statearr_71314_72489 = state_71298;
(statearr_71314_72489[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71298[(4)]))){
var statearr_71315_72490 = state_71298;
(statearr_71315_72490[(1)] = cljs.core.first((state_71298[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72491 = state_71298;
state_71298 = G__72491;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__ = function(state_71298){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1.call(this,state_71298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71316 = f__36777__auto__();
(statearr_71316[(6)] = c__36776__auto__);

return statearr_71316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_reserves = (function lpdashboard$core$_LT_total_pool_reserves(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71374){
var state_val_71375 = (state_71374[(1)]);
if((state_val_71375 === (7))){
var inst_71335 = (state_71374[(7)]);
var inst_71342 = (function(){throw inst_71335})();
var state_71374__$1 = state_71374;
var statearr_71376_72492 = state_71374__$1;
(statearr_71376_72492[(2)] = inst_71342);

(statearr_71376_72492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (1))){
var inst_71317 = (state_71374[(8)]);
var inst_71317__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_71318 = inst_71317__$1.token0();
var inst_71319 = cljs.core.async.interop.p__GT_c(inst_71318);
var state_71374__$1 = (function (){var statearr_71377 = state_71374;
(statearr_71377[(8)] = inst_71317__$1);

return statearr_71377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71374__$1,(2),inst_71319);
} else {
if((state_val_71375 === (4))){
var inst_71321 = (state_71374[(9)]);
var state_71374__$1 = state_71374;
var statearr_71378_72493 = state_71374__$1;
(statearr_71378_72493[(2)] = inst_71321);

(statearr_71378_72493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (15))){
var inst_71351 = (state_71374[(10)]);
var inst_71348 = (state_71374[(11)]);
var inst_71365 = (state_71374[(2)]);
var inst_71366 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71367 = cljs.core.first(inst_71365);
var inst_71368 = lpdashboard.utils.ebn__GT_bn(inst_71367,inst_71348);
var inst_71369 = cljs.core.second(inst_71365);
var inst_71370 = lpdashboard.utils.ebn__GT_bn(inst_71369,inst_71351);
var inst_71371 = [inst_71368,inst_71370];
var inst_71372 = (new cljs.core.PersistentVector(null,2,(5),inst_71366,inst_71371,null));
var state_71374__$1 = state_71374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71374__$1,inst_71372);
} else {
if((state_val_71375 === (13))){
var inst_71355 = (state_71374[(12)]);
var inst_71362 = (function(){throw inst_71355})();
var state_71374__$1 = state_71374;
var statearr_71379_72494 = state_71374__$1;
(statearr_71379_72494[(2)] = inst_71362);

(statearr_71379_72494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (6))){
var inst_71335 = (state_71374[(7)]);
var inst_71335__$1 = (state_71374[(2)]);
var inst_71336 = (inst_71335__$1 instanceof cljs.core.ExceptionInfo);
var inst_71337 = cljs.core.ex_data(inst_71335__$1);
var inst_71338 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71337);
var inst_71339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71338,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71340 = ((inst_71336) && (inst_71339));
var state_71374__$1 = (function (){var statearr_71380 = state_71374;
(statearr_71380[(7)] = inst_71335__$1);

return statearr_71380;
})();
if(cljs.core.truth_(inst_71340)){
var statearr_71381_72495 = state_71374__$1;
(statearr_71381_72495[(1)] = (7));

} else {
var statearr_71382_72496 = state_71374__$1;
(statearr_71382_72496[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (3))){
var inst_71321 = (state_71374[(9)]);
var inst_71328 = (function(){throw inst_71321})();
var state_71374__$1 = state_71374;
var statearr_71383_72497 = state_71374__$1;
(statearr_71383_72497[(2)] = inst_71328);

(statearr_71383_72497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (12))){
var inst_71355 = (state_71374[(12)]);
var inst_71355__$1 = (state_71374[(2)]);
var inst_71356 = (inst_71355__$1 instanceof cljs.core.ExceptionInfo);
var inst_71357 = cljs.core.ex_data(inst_71355__$1);
var inst_71358 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71357);
var inst_71359 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71358,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71360 = ((inst_71356) && (inst_71359));
var state_71374__$1 = (function (){var statearr_71384 = state_71374;
(statearr_71384[(12)] = inst_71355__$1);

return statearr_71384;
})();
if(cljs.core.truth_(inst_71360)){
var statearr_71385_72498 = state_71374__$1;
(statearr_71385_72498[(1)] = (13));

} else {
var statearr_71386_72499 = state_71374__$1;
(statearr_71386_72499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (2))){
var inst_71321 = (state_71374[(9)]);
var inst_71321__$1 = (state_71374[(2)]);
var inst_71322 = (inst_71321__$1 instanceof cljs.core.ExceptionInfo);
var inst_71323 = cljs.core.ex_data(inst_71321__$1);
var inst_71324 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71323);
var inst_71325 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71324,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71326 = ((inst_71322) && (inst_71325));
var state_71374__$1 = (function (){var statearr_71387 = state_71374;
(statearr_71387[(9)] = inst_71321__$1);

return statearr_71387;
})();
if(cljs.core.truth_(inst_71326)){
var statearr_71388_72500 = state_71374__$1;
(statearr_71388_72500[(1)] = (3));

} else {
var statearr_71389_72501 = state_71374__$1;
(statearr_71389_72501[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (11))){
var inst_71317 = (state_71374[(8)]);
var inst_71351 = (state_71374[(2)]);
var inst_71352 = inst_71317.getReserves();
var inst_71353 = cljs.core.async.interop.p__GT_c(inst_71352);
var state_71374__$1 = (function (){var statearr_71390 = state_71374;
(statearr_71390[(10)] = inst_71351);

return statearr_71390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71374__$1,(12),inst_71353);
} else {
if((state_val_71375 === (9))){
var inst_71331 = (state_71374[(13)]);
var inst_71345 = (state_71374[(2)]);
var inst_71346 = lpdashboard.ethereum._LT_token_decimals(inst_71331);
var state_71374__$1 = (function (){var statearr_71391 = state_71374;
(statearr_71391[(14)] = inst_71345);

return statearr_71391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71374__$1,(10),inst_71346);
} else {
if((state_val_71375 === (5))){
var inst_71317 = (state_71374[(8)]);
var inst_71331 = (state_71374[(2)]);
var inst_71332 = inst_71317.token1();
var inst_71333 = cljs.core.async.interop.p__GT_c(inst_71332);
var state_71374__$1 = (function (){var statearr_71392 = state_71374;
(statearr_71392[(13)] = inst_71331);

return statearr_71392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71374__$1,(6),inst_71333);
} else {
if((state_val_71375 === (14))){
var inst_71355 = (state_71374[(12)]);
var state_71374__$1 = state_71374;
var statearr_71393_72502 = state_71374__$1;
(statearr_71393_72502[(2)] = inst_71355);

(statearr_71393_72502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71375 === (10))){
var inst_71345 = (state_71374[(14)]);
var inst_71348 = (state_71374[(2)]);
var inst_71349 = lpdashboard.ethereum._LT_token_decimals(inst_71345);
var state_71374__$1 = (function (){var statearr_71394 = state_71374;
(statearr_71394[(11)] = inst_71348);

return statearr_71394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71374__$1,(11),inst_71349);
} else {
if((state_val_71375 === (8))){
var inst_71335 = (state_71374[(7)]);
var state_71374__$1 = state_71374;
var statearr_71395_72503 = state_71374__$1;
(statearr_71395_72503[(2)] = inst_71335);

(statearr_71395_72503[(1)] = (9));


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
var statearr_71396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71396[(0)] = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__);

(statearr_71396[(1)] = (1));

return statearr_71396;
});
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1 = (function (state_71374){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71374);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71397){var ex__36688__auto__ = e71397;
var statearr_71398_72504 = state_71374;
(statearr_71398_72504[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71374[(4)]))){
var statearr_71399_72505 = state_71374;
(statearr_71399_72505[(1)] = cljs.core.first((state_71374[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72506 = state_71374;
state_71374 = G__72506;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__ = function(state_71374){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1.call(this,state_71374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71400 = f__36777__auto__();
(statearr_71400[(6)] = c__36776__auto__);

return statearr_71400;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71426){
var state_val_71427 = (state_71426[(1)]);
if((state_val_71427 === (1))){
var inst_71401 = (state_71426[(7)]);
var inst_71401__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var inst_71402 = inst_71401__$1.poolLength();
var inst_71403 = cljs.core.async.interop.p__GT_c(inst_71402);
var state_71426__$1 = (function (){var statearr_71428 = state_71426;
(statearr_71428[(7)] = inst_71401__$1);

return statearr_71428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71426__$1,(2),inst_71403);
} else {
if((state_val_71427 === (2))){
var inst_71405 = (state_71426[(8)]);
var inst_71405__$1 = (state_71426[(2)]);
var inst_71406 = (inst_71405__$1 instanceof cljs.core.ExceptionInfo);
var inst_71407 = cljs.core.ex_data(inst_71405__$1);
var inst_71408 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71407);
var inst_71409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71408,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71410 = ((inst_71406) && (inst_71409));
var state_71426__$1 = (function (){var statearr_71429 = state_71426;
(statearr_71429[(8)] = inst_71405__$1);

return statearr_71429;
})();
if(cljs.core.truth_(inst_71410)){
var statearr_71430_72507 = state_71426__$1;
(statearr_71430_72507[(1)] = (3));

} else {
var statearr_71431_72508 = state_71426__$1;
(statearr_71431_72508[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71427 === (3))){
var inst_71405 = (state_71426[(8)]);
var inst_71412 = (function(){throw inst_71405})();
var state_71426__$1 = state_71426;
var statearr_71432_72509 = state_71426__$1;
(statearr_71432_72509[(2)] = inst_71412);

(statearr_71432_72509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71427 === (4))){
var inst_71405 = (state_71426[(8)]);
var state_71426__$1 = state_71426;
var statearr_71433_72510 = state_71426__$1;
(statearr_71433_72510[(2)] = inst_71405);

(statearr_71433_72510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71427 === (5))){
var inst_71401 = (state_71426[(7)]);
var inst_71415 = (state_71426[(2)]);
var inst_71416 = cljs.core.identity(inst_71415);
var inst_71417 = (function (){var contract = inst_71401;
var many_pools = inst_71416;
return (function (p){
var c__36776__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71454){
var state_val_71455 = (state_71454[(1)]);
if((state_val_71455 === (1))){
var inst_71434 = contract.poolInfo(p);
var inst_71435 = cljs.core.async.interop.p__GT_c(inst_71434);
var state_71454__$1 = state_71454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71454__$1,(2),inst_71435);
} else {
if((state_val_71455 === (2))){
var inst_71437 = (state_71454[(7)]);
var inst_71437__$1 = (state_71454[(2)]);
var inst_71438 = (inst_71437__$1 instanceof cljs.core.ExceptionInfo);
var inst_71439 = cljs.core.ex_data(inst_71437__$1);
var inst_71440 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71439);
var inst_71441 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71440,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71442 = ((inst_71438) && (inst_71441));
var state_71454__$1 = (function (){var statearr_71456 = state_71454;
(statearr_71456[(7)] = inst_71437__$1);

return statearr_71456;
})();
if(cljs.core.truth_(inst_71442)){
var statearr_71457_72511 = state_71454__$1;
(statearr_71457_72511[(1)] = (3));

} else {
var statearr_71458_72512 = state_71454__$1;
(statearr_71458_72512[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (3))){
var inst_71437 = (state_71454[(7)]);
var inst_71444 = (function(){throw inst_71437})();
var state_71454__$1 = state_71454;
var statearr_71459_72513 = state_71454__$1;
(statearr_71459_72513[(2)] = inst_71444);

(statearr_71459_72513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (4))){
var inst_71437 = (state_71454[(7)]);
var state_71454__$1 = state_71454;
var statearr_71460_72514 = state_71454__$1;
(statearr_71460_72514[(2)] = inst_71437);

(statearr_71460_72514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (5))){
var inst_71447 = (state_71454[(2)]);
var inst_71448 = cljs.core.first(inst_71447);
var inst_71449 = clojure.string.lower_case(inst_71448);
var inst_71450 = [inst_71449];
var inst_71451 = [p];
var inst_71452 = cljs.core.PersistentHashMap.fromArrays(inst_71450,inst_71451);
var state_71454__$1 = state_71454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71454__$1,inst_71452);
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
var statearr_71461 = [null,null,null,null,null,null,null,null];
(statearr_71461[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_71461[(1)] = (1));

return statearr_71461;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_71454){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71454);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71462){var ex__36688__auto__ = e71462;
var statearr_71463_72515 = state_71454;
(statearr_71463_72515[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71454[(4)]))){
var statearr_71464_72516 = state_71454;
(statearr_71464_72516[(1)] = cljs.core.first((state_71454[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72517 = state_71454;
state_71454 = G__72517;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_71454){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_71454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71465 = f__36777__auto__();
(statearr_71465[(6)] = c__36776__auto____$1);

return statearr_71465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto____$1;
});
})();
var inst_71418 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_71416);
var inst_71419 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_71417,inst_71418);
var inst_71420 = cljs.core.PersistentHashMap.EMPTY;
var inst_71421 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_71419);
var inst_71422 = cljs.core.async.reduce(cljs.core.merge,inst_71420,inst_71421);
var state_71426__$1 = state_71426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71426__$1,(6),inst_71422);
} else {
if((state_val_71427 === (6))){
var inst_71424 = (state_71426[(2)]);
var state_71426__$1 = state_71426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71426__$1,inst_71424);
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
var statearr_71466 = [null,null,null,null,null,null,null,null,null];
(statearr_71466[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_71466[(1)] = (1));

return statearr_71466;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_71426){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71426);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71467){var ex__36688__auto__ = e71467;
var statearr_71468_72518 = state_71426;
(statearr_71468_72518[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71426[(4)]))){
var statearr_71469_72519 = state_71426;
(statearr_71469_72519[(1)] = cljs.core.first((state_71426[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72520 = state_71426;
state_71426 = G__72520;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_71426){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_71426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71470 = f__36777__auto__();
(statearr_71470[(6)] = c__36776__auto__);

return statearr_71470;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71510){
var state_val_71511 = (state_71510[(1)]);
if((state_val_71511 === (7))){
var inst_71489 = (state_71510[(7)]);
var inst_71493 = (state_71510[(8)]);
var inst_71493__$1 = (state_71510[(2)]);
var inst_71494 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re:",inst_71493__$1], 0));
var inst_71495 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_71489,staking_address,user_address);
var state_71510__$1 = (function (){var statearr_71512 = state_71510;
(statearr_71512[(9)] = inst_71494);

(statearr_71512[(8)] = inst_71493__$1);

return statearr_71512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(8),inst_71495);
} else {
if((state_val_71511 === (1))){
var inst_71471 = lpdashboard.core._LT_staked_prop(staking_address,user_address);
var state_71510__$1 = state_71510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(2),inst_71471);
} else {
if((state_val_71511 === (4))){
var inst_71481 = (state_71510[(10)]);
var inst_71481__$1 = (state_71510[(2)]);
var inst_71482 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["total-unis:",inst_71481__$1], 0));
var inst_71483 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_71510__$1 = (function (){var statearr_71513 = state_71510;
(statearr_71513[(10)] = inst_71481__$1);

(statearr_71513[(11)] = inst_71482);

return statearr_71513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(5),inst_71483);
} else {
if((state_val_71511 === (6))){
var inst_71489 = (state_71510[(7)]);
var inst_71489__$1 = (state_71510[(2)]);
var inst_71490 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rt:",inst_71489__$1], 0));
var inst_71491 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_71489__$1,user_address);
var state_71510__$1 = (function (){var statearr_71514 = state_71510;
(statearr_71514[(12)] = inst_71490);

(statearr_71514[(7)] = inst_71489__$1);

return statearr_71514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(7),inst_71491);
} else {
if((state_val_71511 === (3))){
var inst_71473 = (state_71510[(13)]);
var inst_71477 = (state_71510[(14)]);
var inst_71476 = (state_71510[(2)]);
var inst_71477__$1 = lpdashboard.core.staked_lps(inst_71473,inst_71476);
var inst_71478 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["my-unis:",inst_71477__$1], 0));
var inst_71479 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_71510__$1 = (function (){var statearr_71515 = state_71510;
(statearr_71515[(14)] = inst_71477__$1);

(statearr_71515[(15)] = inst_71478);

return statearr_71515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(4),inst_71479);
} else {
if((state_val_71511 === (2))){
var inst_71473 = (state_71510[(2)]);
var inst_71474 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_71510__$1 = (function (){var statearr_71516 = state_71510;
(statearr_71516[(13)] = inst_71473);

return statearr_71516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(3),inst_71474);
} else {
if((state_val_71511 === (9))){
var inst_71485 = (state_71510[(16)]);
var inst_71481 = (state_71510[(10)]);
var inst_71499 = (state_71510[(17)]);
var inst_71489 = (state_71510[(7)]);
var inst_71477 = (state_71510[(14)]);
var inst_71493 = (state_71510[(8)]);
var inst_71502 = (state_71510[(2)]);
var inst_71503 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tpr",inst_71502], 0));
var inst_71504 = lpdashboard.core.staked_positions(inst_71502,inst_71481,inst_71477,inst_71485);
var inst_71505 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_71506 = [inst_71493,inst_71489,inst_71499];
var inst_71507 = cljs.core.PersistentHashMap.fromArrays(inst_71505,inst_71506);
var inst_71508 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_71504,inst_71507);
var state_71510__$1 = (function (){var statearr_71517 = state_71510;
(statearr_71517[(18)] = inst_71503);

return statearr_71517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71510__$1,inst_71508);
} else {
if((state_val_71511 === (5))){
var inst_71485 = (state_71510[(16)]);
var inst_71485__$1 = (state_71510[(2)]);
var inst_71486 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lp-symbols:",inst_71485__$1], 0));
var inst_71487 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_71510__$1 = (function (){var statearr_71518 = state_71510;
(statearr_71518[(19)] = inst_71486);

(statearr_71518[(16)] = inst_71485__$1);

return statearr_71518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(6),inst_71487);
} else {
if((state_val_71511 === (8))){
var inst_71497 = (state_71510[(2)]);
var inst_71498 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rtr:",inst_71497], 0));
var inst_71499 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_71497);
var inst_71500 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_71510__$1 = (function (){var statearr_71519 = state_71510;
(statearr_71519[(17)] = inst_71499);

(statearr_71519[(20)] = inst_71498);

return statearr_71519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71510__$1,(9),inst_71500);
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
var statearr_71520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71520[(0)] = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__);

(statearr_71520[(1)] = (1));

return statearr_71520;
});
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1 = (function (state_71510){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71510);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71521){var ex__36688__auto__ = e71521;
var statearr_71522_72521 = state_71510;
(statearr_71522_72521[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71510[(4)]))){
var statearr_71523_72522 = state_71510;
(statearr_71523_72522[(1)] = cljs.core.first((state_71510[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72523 = state_71510;
state_71510 = G__72523;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__ = function(state_71510){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1.call(this,state_71510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71524 = f__36777__auto__();
(statearr_71524[(6)] = c__36776__auto__);

return statearr_71524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_lpbar = (function lpdashboard$core$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71576){
var state_val_71577 = (state_71576[(1)]);
if((state_val_71577 === (7))){
var inst_71545 = (state_71576[(2)]);
var inst_71546 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_71576__$1 = (function (){var statearr_71578 = state_71576;
(statearr_71578[(7)] = inst_71545);

return statearr_71578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71576__$1,(8),inst_71546);
} else {
if((state_val_71577 === (1))){
var inst_71525 = (state_71576[(8)]);
var inst_71525__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.lpbar_abi,staking_address);
var inst_71526 = inst_71525__$1.lpBalance(user_address);
var inst_71527 = cljs.core.async.interop.p__GT_c(inst_71526);
var state_71576__$1 = (function (){var statearr_71579 = state_71576;
(statearr_71579[(8)] = inst_71525__$1);

return statearr_71579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71576__$1,(2),inst_71527);
} else {
if((state_val_71577 === (4))){
var inst_71529 = (state_71576[(9)]);
var state_71576__$1 = state_71576;
var statearr_71580_72524 = state_71576__$1;
(statearr_71580_72524[(2)] = inst_71529);

(statearr_71580_72524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (15))){
var inst_71574 = (state_71576[(2)]);
var state_71576__$1 = state_71576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71576__$1,inst_71574);
} else {
if((state_val_71577 === (13))){
var inst_71542 = (state_71576[(10)]);
var inst_71548 = (state_71576[(11)]);
var inst_71545 = (state_71576[(7)]);
var inst_71539 = (state_71576[(12)]);
var inst_71567 = lpdashboard.core.staked_positions(inst_71548,inst_71542,inst_71539,inst_71545);
var state_71576__$1 = state_71576;
var statearr_71581_72525 = state_71576__$1;
(statearr_71581_72525[(2)] = inst_71567);

(statearr_71581_72525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (6))){
var inst_71542 = (state_71576[(2)]);
var inst_71543 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_71576__$1 = (function (){var statearr_71582 = state_71576;
(statearr_71582[(10)] = inst_71542);

return statearr_71582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71576__$1,(7),inst_71543);
} else {
if((state_val_71577 === (3))){
var inst_71529 = (state_71576[(9)]);
var inst_71536 = (function(){throw inst_71529})();
var state_71576__$1 = state_71576;
var statearr_71583_72526 = state_71576__$1;
(statearr_71583_72526[(2)] = inst_71536);

(statearr_71583_72526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (12))){
var inst_71562 = (state_71576[(13)]);
var inst_71562__$1 = (state_71576[(2)]);
var inst_71563 = clojure.string.lower_case(inst_71562__$1);
var inst_71564 = clojure.string.lower_case(lp_address);
var inst_71565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71563,inst_71564);
var state_71576__$1 = (function (){var statearr_71584 = state_71576;
(statearr_71584[(13)] = inst_71562__$1);

return statearr_71584;
})();
if(inst_71565){
var statearr_71585_72527 = state_71576__$1;
(statearr_71585_72527[(1)] = (13));

} else {
var statearr_71586_72528 = state_71576__$1;
(statearr_71586_72528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (2))){
var inst_71529 = (state_71576[(9)]);
var inst_71529__$1 = (state_71576[(2)]);
var inst_71530 = (inst_71529__$1 instanceof cljs.core.ExceptionInfo);
var inst_71531 = cljs.core.ex_data(inst_71529__$1);
var inst_71532 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71531);
var inst_71533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71532,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71534 = ((inst_71530) && (inst_71533));
var state_71576__$1 = (function (){var statearr_71587 = state_71576;
(statearr_71587[(9)] = inst_71529__$1);

return statearr_71587;
})();
if(cljs.core.truth_(inst_71534)){
var statearr_71588_72529 = state_71576__$1;
(statearr_71588_72529[(1)] = (3));

} else {
var statearr_71589_72530 = state_71576__$1;
(statearr_71589_72530[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (11))){
var inst_71552 = (state_71576[(14)]);
var state_71576__$1 = state_71576;
var statearr_71590_72531 = state_71576__$1;
(statearr_71590_72531[(2)] = inst_71552);

(statearr_71590_72531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (9))){
var inst_71552 = (state_71576[(14)]);
var inst_71552__$1 = (state_71576[(2)]);
var inst_71553 = (inst_71552__$1 instanceof cljs.core.ExceptionInfo);
var inst_71554 = cljs.core.ex_data(inst_71552__$1);
var inst_71555 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71554);
var inst_71556 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71555,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71557 = ((inst_71553) && (inst_71556));
var state_71576__$1 = (function (){var statearr_71591 = state_71576;
(statearr_71591[(14)] = inst_71552__$1);

return statearr_71591;
})();
if(cljs.core.truth_(inst_71557)){
var statearr_71592_72532 = state_71576__$1;
(statearr_71592_72532[(1)] = (10));

} else {
var statearr_71593_72533 = state_71576__$1;
(statearr_71593_72533[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (5))){
var inst_71539 = (state_71576[(2)]);
var inst_71540 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_71576__$1 = (function (){var statearr_71594 = state_71576;
(statearr_71594[(12)] = inst_71539);

return statearr_71594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71576__$1,(6),inst_71540);
} else {
if((state_val_71577 === (14))){
var inst_71562 = (state_71576[(13)]);
var inst_71569 = console.log("lp addresses do not match:",staking_address,lp_address,inst_71562);
var inst_71570 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_71571 = [(0),(0)];
var inst_71572 = cljs.core.PersistentHashMap.fromArrays(inst_71570,inst_71571);
var state_71576__$1 = (function (){var statearr_71595 = state_71576;
(statearr_71595[(15)] = inst_71569);

return statearr_71595;
})();
var statearr_71596_72534 = state_71576__$1;
(statearr_71596_72534[(2)] = inst_71572);

(statearr_71596_72534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (10))){
var inst_71552 = (state_71576[(14)]);
var inst_71559 = (function(){throw inst_71552})();
var state_71576__$1 = state_71576;
var statearr_71597_72535 = state_71576__$1;
(statearr_71597_72535[(2)] = inst_71559);

(statearr_71597_72535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71577 === (8))){
var inst_71525 = (state_71576[(8)]);
var inst_71548 = (state_71576[(2)]);
var inst_71549 = inst_71525.lp();
var inst_71550 = cljs.core.async.interop.p__GT_c(inst_71549);
var state_71576__$1 = (function (){var statearr_71598 = state_71576;
(statearr_71598[(11)] = inst_71548);

return statearr_71598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71576__$1,(9),inst_71550);
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
var statearr_71599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71599[(0)] = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__);

(statearr_71599[(1)] = (1));

return statearr_71599;
});
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1 = (function (state_71576){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71576);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71600){var ex__36688__auto__ = e71600;
var statearr_71601_72536 = state_71576;
(statearr_71601_72536[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71576[(4)]))){
var statearr_71602_72537 = state_71576;
(statearr_71602_72537[(1)] = cljs.core.first((state_71576[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72538 = state_71576;
state_71576 = G__72538;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__ = function(state_71576){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1.call(this,state_71576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71603 = f__36777__auto__();
(statearr_71603[(6)] = c__36776__auto__);

return statearr_71603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_sashimi_plate = (function lpdashboard$core$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71685){
var state_val_71686 = (state_71685[(1)]);
if((state_val_71686 === (7))){
var inst_71633 = (state_71685[(7)]);
var inst_71633__$1 = (state_71685[(2)]);
var inst_71634 = (inst_71633__$1 instanceof cljs.core.ExceptionInfo);
var inst_71635 = cljs.core.ex_data(inst_71633__$1);
var inst_71636 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71635);
var inst_71637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71636,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71638 = ((inst_71634) && (inst_71637));
var state_71685__$1 = (function (){var statearr_71687 = state_71685;
(statearr_71687[(7)] = inst_71633__$1);

return statearr_71687;
})();
if(cljs.core.truth_(inst_71638)){
var statearr_71688_72539 = state_71685__$1;
(statearr_71688_72539[(1)] = (8));

} else {
var statearr_71689_72540 = state_71685__$1;
(statearr_71689_72540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (20))){
var inst_71628 = (state_71685[(8)]);
var inst_71659 = (state_71685[(9)]);
var inst_71678 = console.log("lp addresses do not match:",inst_71628,lp_address,inst_71659);
var inst_71679 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_71680 = [(0),(0)];
var inst_71681 = cljs.core.PersistentHashMap.fromArrays(inst_71679,inst_71680);
var state_71685__$1 = (function (){var statearr_71690 = state_71685;
(statearr_71690[(10)] = inst_71678);

return statearr_71690;
})();
var statearr_71691_72541 = state_71685__$1;
(statearr_71691_72541[(2)] = inst_71681);

(statearr_71691_72541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (1))){
var inst_71604 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,staking_address);
var inst_71605 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address);
var state_71685__$1 = (function (){var statearr_71692 = state_71685;
(statearr_71692[(11)] = inst_71604);

return statearr_71692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(2),inst_71605);
} else {
if((state_val_71686 === (4))){
var inst_71613 = (state_71685[(12)]);
var inst_71620 = (function(){throw inst_71613})();
var state_71685__$1 = state_71685;
var statearr_71693_72542 = state_71685__$1;
(statearr_71693_72542[(2)] = inst_71620);

(statearr_71693_72542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (15))){
var inst_71662 = (state_71685[(2)]);
var inst_71663 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_71685__$1 = (function (){var statearr_71694 = state_71685;
(statearr_71694[(13)] = inst_71662);

return statearr_71694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(16),inst_71663);
} else {
if((state_val_71686 === (21))){
var inst_71683 = (state_71685[(2)]);
var state_71685__$1 = state_71685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71685__$1,inst_71683);
} else {
if((state_val_71686 === (13))){
var inst_71648 = (state_71685[(14)]);
var state_71685__$1 = state_71685;
var statearr_71695_72543 = state_71685__$1;
(statearr_71695_72543[(2)] = inst_71648);

(statearr_71695_72543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (6))){
var inst_71626 = (state_71685[(15)]);
var inst_71607 = (state_71685[(16)]);
var inst_71628 = (state_71685[(8)]);
var inst_71629 = (state_71685[(17)]);
var inst_71623 = (state_71685[(2)]);
var inst_71624 = lpdashboard.ethereum.sashimi_iface.parseTransaction(inst_71623);
var inst_71625 = inst_71624.args;
var inst_71626__$1 = inst_71625.pid;
var inst_71627 = cljs.core.first(inst_71607);
var inst_71628__$1 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_71627);
var inst_71629__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,inst_71628__$1);
var inst_71630 = inst_71629__$1.userInfo(inst_71626__$1,user_address);
var inst_71631 = cljs.core.async.interop.p__GT_c(inst_71630);
var state_71685__$1 = (function (){var statearr_71696 = state_71685;
(statearr_71696[(15)] = inst_71626__$1);

(statearr_71696[(8)] = inst_71628__$1);

(statearr_71696[(17)] = inst_71629__$1);

return statearr_71696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(7),inst_71631);
} else {
if((state_val_71686 === (17))){
var inst_71668 = (state_71685[(2)]);
var inst_71669 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_71685__$1 = (function (){var statearr_71697 = state_71685;
(statearr_71697[(18)] = inst_71668);

return statearr_71697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(18),inst_71669);
} else {
if((state_val_71686 === (3))){
var inst_71613 = (state_71685[(12)]);
var inst_71613__$1 = (state_71685[(2)]);
var inst_71614 = (inst_71613__$1 instanceof cljs.core.ExceptionInfo);
var inst_71615 = cljs.core.ex_data(inst_71613__$1);
var inst_71616 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71615);
var inst_71617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71616,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71618 = ((inst_71614) && (inst_71617));
var state_71685__$1 = (function (){var statearr_71698 = state_71685;
(statearr_71698[(12)] = inst_71613__$1);

return statearr_71698;
})();
if(cljs.core.truth_(inst_71618)){
var statearr_71699_72544 = state_71685__$1;
(statearr_71699_72544[(1)] = (4));

} else {
var statearr_71700_72545 = state_71685__$1;
(statearr_71700_72545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (12))){
var inst_71648 = (state_71685[(14)]);
var inst_71655 = (function(){throw inst_71648})();
var state_71685__$1 = state_71685;
var statearr_71701_72546 = state_71685__$1;
(statearr_71701_72546[(2)] = inst_71655);

(statearr_71701_72546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (2))){
var inst_71607 = (state_71685[(16)]);
var inst_71607__$1 = (state_71685[(2)]);
var inst_71608 = cljs.core.first(inst_71607__$1);
var inst_71609 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_71608);
var inst_71610 = lpdashboard.core.provider.getTransaction(inst_71609);
var inst_71611 = cljs.core.async.interop.p__GT_c(inst_71610);
var state_71685__$1 = (function (){var statearr_71702 = state_71685;
(statearr_71702[(16)] = inst_71607__$1);

return statearr_71702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(3),inst_71611);
} else {
if((state_val_71686 === (19))){
var inst_71665 = (state_71685[(19)]);
var inst_71671 = (state_71685[(20)]);
var inst_71644 = (state_71685[(21)]);
var inst_71668 = (state_71685[(18)]);
var inst_71676 = lpdashboard.core.staked_positions(inst_71671,inst_71665,inst_71644,inst_71668);
var state_71685__$1 = state_71685;
var statearr_71703_72547 = state_71685__$1;
(statearr_71703_72547[(2)] = inst_71676);

(statearr_71703_72547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (11))){
var inst_71648 = (state_71685[(14)]);
var inst_71648__$1 = (state_71685[(2)]);
var inst_71649 = (inst_71648__$1 instanceof cljs.core.ExceptionInfo);
var inst_71650 = cljs.core.ex_data(inst_71648__$1);
var inst_71651 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71650);
var inst_71652 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71651,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71653 = ((inst_71649) && (inst_71652));
var state_71685__$1 = (function (){var statearr_71704 = state_71685;
(statearr_71704[(14)] = inst_71648__$1);

return statearr_71704;
})();
if(cljs.core.truth_(inst_71653)){
var statearr_71705_72548 = state_71685__$1;
(statearr_71705_72548[(1)] = (12));

} else {
var statearr_71706_72549 = state_71685__$1;
(statearr_71706_72549[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (9))){
var inst_71633 = (state_71685[(7)]);
var state_71685__$1 = state_71685;
var statearr_71707_72550 = state_71685__$1;
(statearr_71707_72550[(2)] = inst_71633);

(statearr_71707_72550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (5))){
var inst_71613 = (state_71685[(12)]);
var state_71685__$1 = state_71685;
var statearr_71708_72551 = state_71685__$1;
(statearr_71708_72551[(2)] = inst_71613);

(statearr_71708_72551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (14))){
var inst_71658 = (state_71685[(2)]);
var inst_71659 = cljs.core.first(inst_71658);
var inst_71660 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_71685__$1 = (function (){var statearr_71709 = state_71685;
(statearr_71709[(9)] = inst_71659);

return statearr_71709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(15),inst_71660);
} else {
if((state_val_71686 === (16))){
var inst_71665 = (state_71685[(2)]);
var inst_71666 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_71685__$1 = (function (){var statearr_71710 = state_71685;
(statearr_71710[(19)] = inst_71665);

return statearr_71710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(17),inst_71666);
} else {
if((state_val_71686 === (10))){
var inst_71626 = (state_71685[(15)]);
var inst_71629 = (state_71685[(17)]);
var inst_71643 = (state_71685[(2)]);
var inst_71644 = cljs.core.first(inst_71643);
var inst_71645 = inst_71629.poolInfo(inst_71626);
var inst_71646 = cljs.core.async.interop.p__GT_c(inst_71645);
var state_71685__$1 = (function (){var statearr_71711 = state_71685;
(statearr_71711[(21)] = inst_71644);

return statearr_71711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71685__$1,(11),inst_71646);
} else {
if((state_val_71686 === (18))){
var inst_71659 = (state_71685[(9)]);
var inst_71671 = (state_71685[(2)]);
var inst_71672 = clojure.string.lower_case(inst_71659);
var inst_71673 = clojure.string.lower_case(lp_address);
var inst_71674 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71672,inst_71673);
var state_71685__$1 = (function (){var statearr_71712 = state_71685;
(statearr_71712[(20)] = inst_71671);

return statearr_71712;
})();
if(inst_71674){
var statearr_71713_72552 = state_71685__$1;
(statearr_71713_72552[(1)] = (19));

} else {
var statearr_71714_72553 = state_71685__$1;
(statearr_71714_72553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71686 === (8))){
var inst_71633 = (state_71685[(7)]);
var inst_71640 = (function(){throw inst_71633})();
var state_71685__$1 = state_71685;
var statearr_71715_72554 = state_71685__$1;
(statearr_71715_72554[(2)] = inst_71640);

(statearr_71715_72554[(1)] = (10));


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
var statearr_71716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71716[(0)] = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__);

(statearr_71716[(1)] = (1));

return statearr_71716;
});
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1 = (function (state_71685){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71685);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71717){var ex__36688__auto__ = e71717;
var statearr_71718_72555 = state_71685;
(statearr_71718_72555[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71685[(4)]))){
var statearr_71719_72556 = state_71685;
(statearr_71719_72556[(1)] = cljs.core.first((state_71685[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72557 = state_71685;
state_71685 = G__72557;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__ = function(state_71685){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1.call(this,state_71685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71720 = f__36777__auto__();
(statearr_71720[(6)] = c__36776__auto__);

return statearr_71720;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_71898){
var state_val_71899 = (state_71898[(1)]);
if((state_val_71899 === (7))){
var inst_71748 = (state_71898[(7)]);
var inst_71755 = (function(){throw inst_71748})();
var state_71898__$1 = state_71898;
var statearr_71900_72558 = state_71898__$1;
(statearr_71900_72558[(2)] = inst_71755);

(statearr_71900_72558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (20))){
var inst_71894 = (state_71898[(2)]);
var state_71898__$1 = state_71898;
var statearr_71901_72559 = state_71898__$1;
(statearr_71901_72559[(2)] = inst_71894);

(statearr_71901_72559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (27))){
var inst_71810 = (state_71898[(8)]);
var state_71898__$1 = state_71898;
var statearr_71902_72560 = state_71898__$1;
(statearr_71902_72560[(2)] = inst_71810);

(statearr_71902_72560[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (1))){
var inst_71727 = (function (){return (function (p1__71721_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__71721_SHARP_.transactionHash);
});
})();
var inst_71728 = lpdashboard.core.provider.getLogs(staked_filter);
var inst_71729 = cljs.core.async.interop.p__GT_c(inst_71728);
var state_71898__$1 = (function (){var statearr_71903 = state_71898;
(statearr_71903[(9)] = inst_71727);

return statearr_71903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(2),inst_71729);
} else {
if((state_val_71899 === (24))){
var inst_71805 = (state_71898[(10)]);
var inst_71790 = (state_71898[(11)]);
var inst_71804 = (state_71898[(2)]);
var inst_71805__$1 = cljs.core.first(inst_71804);
var inst_71806 = lpdashboard.utils.ebn__GT_bn(inst_71805__$1,(18));
var inst_71807 = cheff_contract.poolInfo(inst_71790);
var inst_71808 = cljs.core.async.interop.p__GT_c(inst_71807);
var state_71898__$1 = (function (){var statearr_71904 = state_71898;
(statearr_71904[(10)] = inst_71805__$1);

(statearr_71904[(12)] = inst_71806);

return statearr_71904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(25),inst_71808);
} else {
if((state_val_71899 === (39))){
var inst_71837 = (state_71898[(13)]);
var inst_71850 = (state_71898[(14)]);
var inst_71760 = (state_71898[(15)]);
var inst_71821 = (state_71898[(16)]);
var inst_71789 = (state_71898[(17)]);
var inst_71833 = (state_71898[(18)]);
var inst_71820 = (state_71898[(19)]);
var inst_71824 = (state_71898[(20)]);
var inst_71840 = (state_71898[(21)]);
var inst_71827 = (state_71898[(22)]);
var inst_71805 = (state_71898[(10)]);
var inst_71806 = (state_71898[(12)]);
var inst_71830 = (state_71898[(23)]);
var inst_71790 = (state_71898[(11)]);
var inst_71743 = (state_71898[(24)]);
var inst_71786 = (state_71898[(25)]);
var inst_71860 = (state_71898[(26)]);
var inst_71846 = (state_71898[(27)]);
var inst_71848 = (state_71898[(28)]);
var inst_71852 = (state_71898[(29)]);
var inst_71843 = (state_71898[(30)]);
var inst_71863 = (state_71898[(2)]);
var inst_71864 = (function (){var staking_pool_lp_address = inst_71821;
var lp_symbols = inst_71827;
var lp_transfers_in = inst_71846;
var rewards_token = inst_71833;
var pool_pid = inst_71790;
var deposit_data = inst_71789;
var lp_deposits = inst_71850;
var my_lps_staked_SINGLEQUOTE_ = inst_71806;
var my_lps_staked = inst_71805;
var all_staking_deposits = inst_71843;
var staked = inst_71743;
var total_pool_reserves = inst_71830;
var pids = inst_71852;
var pool_info = inst_71820;
var reward_transfers = inst_71840;
var staked2 = inst_71760;
var total_unis = inst_71824;
var lp_decimals = (18);
var lp_transfers_hashes = inst_71848;
var all_staking_withdrawals = inst_71863;
var pid = inst_71860;
var rewards_earned = inst_71837;
var deposit = inst_71786;
return (function (p1__71725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__71725_SHARP_),pid);
});
})();
var inst_71865 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_71863,inst_71843);
var inst_71866 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_71864,inst_71865);
var inst_71867 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_71866);
var inst_71868 = cljs.core.set(inst_71867);
var inst_71869 = (function (){var staking_pool_lp_address = inst_71821;
var lp_symbols = inst_71827;
var lp_transfers_in = inst_71846;
var rewards_token = inst_71833;
var pool_pid = inst_71790;
var deposit_data = inst_71789;
var lp_deposits = inst_71850;
var my_lps_staked_SINGLEQUOTE_ = inst_71806;
var my_lps_staked = inst_71805;
var all_staking_deposits = inst_71843;
var staked = inst_71743;
var total_pool_reserves = inst_71830;
var pids = inst_71852;
var pool_info = inst_71820;
var reward_transfers = inst_71840;
var staked2 = inst_71760;
var total_unis = inst_71824;
var relevant_txids = inst_71868;
var lp_decimals = (18);
var lp_transfers_hashes = inst_71848;
var all_staking_withdrawals = inst_71863;
var pid = inst_71860;
var rewards_earned = inst_71837;
var deposit = inst_71786;
return (function (p1__71726_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__71726_SHARP_));
});
})();
var inst_71870 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_71869,inst_71840);
var inst_71871 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_71870);
var inst_71872 = clojure.string.lower_case(inst_71821);
var inst_71873 = clojure.string.lower_case(lp_address);
var inst_71874 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71872,inst_71873);
var state_71898__$1 = (function (){var statearr_71905 = state_71898;
(statearr_71905[(31)] = inst_71871);

return statearr_71905;
})();
if(inst_71874){
var statearr_71906_72561 = state_71898__$1;
(statearr_71906_72561[(1)] = (40));

} else {
var statearr_71907_72562 = state_71898__$1;
(statearr_71907_72562[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (4))){
var inst_71731 = (state_71898[(32)]);
var state_71898__$1 = state_71898;
var statearr_71908_72563 = state_71898__$1;
(statearr_71908_72563[(2)] = inst_71731);

(statearr_71908_72563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (15))){
var inst_71774 = (state_71898[(33)]);
var inst_71781 = (function(){throw inst_71774})();
var state_71898__$1 = state_71898;
var statearr_71909_72564 = state_71898__$1;
(statearr_71909_72564[(2)] = inst_71781);

(statearr_71909_72564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (21))){
var inst_71794 = (state_71898[(34)]);
var inst_71794__$1 = (state_71898[(2)]);
var inst_71795 = (inst_71794__$1 instanceof cljs.core.ExceptionInfo);
var inst_71796 = cljs.core.ex_data(inst_71794__$1);
var inst_71797 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71796);
var inst_71798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71797,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71799 = ((inst_71795) && (inst_71798));
var state_71898__$1 = (function (){var statearr_71910 = state_71898;
(statearr_71910[(34)] = inst_71794__$1);

return statearr_71910;
})();
if(cljs.core.truth_(inst_71799)){
var statearr_71911_72565 = state_71898__$1;
(statearr_71911_72565[(1)] = (22));

} else {
var statearr_71912_72566 = state_71898__$1;
(statearr_71912_72566[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (31))){
var inst_71830 = (state_71898[(2)]);
var inst_71831 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_71898__$1 = (function (){var statearr_71913 = state_71898;
(statearr_71913[(23)] = inst_71830);

return statearr_71913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(32),inst_71831);
} else {
if((state_val_71899 === (32))){
var inst_71833 = (state_71898[(18)]);
var inst_71833__$1 = (state_71898[(2)]);
var inst_71834 = [new cljs.core.Keyword(null,"qty","qty",155560951)];
var inst_71835 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_71836 = [inst_71835];
var inst_71837 = cljs.core.PersistentHashMap.fromArrays(inst_71834,inst_71836);
var inst_71838 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_71833__$1,staking_address,user_address);
var state_71898__$1 = (function (){var statearr_71914 = state_71898;
(statearr_71914[(13)] = inst_71837);

(statearr_71914[(18)] = inst_71833__$1);

return statearr_71914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(33),inst_71838);
} else {
if((state_val_71899 === (40))){
var inst_71837 = (state_71898[(13)]);
var inst_71833 = (state_71898[(18)]);
var inst_71824 = (state_71898[(20)]);
var inst_71827 = (state_71898[(22)]);
var inst_71871 = (state_71898[(31)]);
var inst_71806 = (state_71898[(12)]);
var inst_71830 = (state_71898[(23)]);
var inst_71876 = lpdashboard.core.staked_positions(inst_71830,inst_71824,inst_71806,inst_71827);
var inst_71877 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_71878 = [inst_71837,inst_71833,inst_71871];
var inst_71879 = cljs.core.PersistentHashMap.fromArrays(inst_71877,inst_71878);
var inst_71880 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_71876,inst_71879);
var state_71898__$1 = state_71898;
var statearr_71915_72567 = state_71898__$1;
(statearr_71915_72567[(2)] = inst_71880);

(statearr_71915_72567[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (33))){
var inst_71840 = (state_71898[(2)]);
var inst_71841 = lpdashboard.ethereum._LT_user_token_deposits(lpdashboard.core.provider,staking_address,user_address);
var state_71898__$1 = (function (){var statearr_71916 = state_71898;
(statearr_71916[(21)] = inst_71840);

return statearr_71916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(34),inst_71841);
} else {
if((state_val_71899 === (13))){
var inst_71768 = (state_71898[(2)]);
var state_71898__$1 = state_71898;
var statearr_71917_72568 = state_71898__$1;
(statearr_71917_72568[(2)] = inst_71768);

(statearr_71917_72568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (22))){
var inst_71794 = (state_71898[(34)]);
var inst_71801 = (function(){throw inst_71794})();
var state_71898__$1 = state_71898;
var statearr_71918_72569 = state_71898__$1;
(statearr_71918_72569[(2)] = inst_71801);

(statearr_71918_72569[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (36))){
var inst_71852 = (state_71898[(29)]);
var inst_71856 = cljs.core.first(inst_71852);
var state_71898__$1 = state_71898;
var statearr_71919_72570 = state_71898__$1;
(statearr_71919_72570[(2)] = inst_71856);

(statearr_71919_72570[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (41))){
var inst_71837 = (state_71898[(13)]);
var inst_71821 = (state_71898[(16)]);
var inst_71833 = (state_71898[(18)]);
var inst_71824 = (state_71898[(20)]);
var inst_71827 = (state_71898[(22)]);
var inst_71871 = (state_71898[(31)]);
var inst_71830 = (state_71898[(23)]);
var inst_71790 = (state_71898[(11)]);
var inst_71882 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71790);
var inst_71883 = console.log("lp addresses do not match:",staking_address,lp_address,inst_71821,"pid",inst_71882);
var inst_71884 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_71885 = lpdashboard.core.staked_positions(inst_71830,inst_71824,inst_71884,inst_71827);
var inst_71886 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_71887 = [inst_71837,inst_71833,inst_71871];
var inst_71888 = cljs.core.PersistentHashMap.fromArrays(inst_71886,inst_71887);
var inst_71889 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_71885,inst_71888);
var state_71898__$1 = (function (){var statearr_71920 = state_71898;
(statearr_71920[(35)] = inst_71883);

return statearr_71920;
})();
var statearr_71921_72571 = state_71898__$1;
(statearr_71921_72571[(2)] = inst_71889);

(statearr_71921_72571[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (29))){
var inst_71824 = (state_71898[(2)]);
var inst_71825 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_71898__$1 = (function (){var statearr_71922 = state_71898;
(statearr_71922[(20)] = inst_71824);

return statearr_71922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(30),inst_71825);
} else {
if((state_val_71899 === (6))){
var inst_71748 = (state_71898[(7)]);
var inst_71748__$1 = (state_71898[(2)]);
var inst_71749 = (inst_71748__$1 instanceof cljs.core.ExceptionInfo);
var inst_71750 = cljs.core.ex_data(inst_71748__$1);
var inst_71751 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71750);
var inst_71752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71751,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71753 = ((inst_71749) && (inst_71752));
var state_71898__$1 = (function (){var statearr_71923 = state_71898;
(statearr_71923[(7)] = inst_71748__$1);

return statearr_71923;
})();
if(cljs.core.truth_(inst_71753)){
var statearr_71924_72572 = state_71898__$1;
(statearr_71924_72572[(1)] = (7));

} else {
var statearr_71925_72573 = state_71898__$1;
(statearr_71925_72573[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (28))){
var inst_71820 = (state_71898[(19)]);
var inst_71820__$1 = (state_71898[(2)]);
var inst_71821 = cljs.core.first(inst_71820__$1);
var inst_71822 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_71898__$1 = (function (){var statearr_71926 = state_71898;
(statearr_71926[(16)] = inst_71821);

(statearr_71926[(19)] = inst_71820__$1);

return statearr_71926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(29),inst_71822);
} else {
if((state_val_71899 === (25))){
var inst_71810 = (state_71898[(8)]);
var inst_71810__$1 = (state_71898[(2)]);
var inst_71811 = (inst_71810__$1 instanceof cljs.core.ExceptionInfo);
var inst_71812 = cljs.core.ex_data(inst_71810__$1);
var inst_71813 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71812);
var inst_71814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71813,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71815 = ((inst_71811) && (inst_71814));
var state_71898__$1 = (function (){var statearr_71927 = state_71898;
(statearr_71927[(8)] = inst_71810__$1);

return statearr_71927;
})();
if(cljs.core.truth_(inst_71815)){
var statearr_71928_72574 = state_71898__$1;
(statearr_71928_72574[(1)] = (26));

} else {
var statearr_71929_72575 = state_71898__$1;
(statearr_71929_72575[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (34))){
var inst_71843 = (state_71898[(2)]);
var inst_71844 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,lp_address,user_address,staking_address);
var state_71898__$1 = (function (){var statearr_71930 = state_71898;
(statearr_71930[(30)] = inst_71843);

return statearr_71930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(35),inst_71844);
} else {
if((state_val_71899 === (17))){
var inst_71786 = (state_71898[(25)]);
var inst_71770 = (state_71898[(36)]);
var inst_71784 = (state_71898[(2)]);
var inst_71785 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_71770,inst_71784);
var inst_71786__$1 = cljs.core.first(inst_71785);
var inst_71787 = (inst_71786__$1 == null);
var state_71898__$1 = (function (){var statearr_71931 = state_71898;
(statearr_71931[(25)] = inst_71786__$1);

return statearr_71931;
})();
if(cljs.core.truth_(inst_71787)){
var statearr_71932_72576 = state_71898__$1;
(statearr_71932_72576[(1)] = (18));

} else {
var statearr_71933_72577 = state_71898__$1;
(statearr_71933_72577[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (3))){
var inst_71731 = (state_71898[(32)]);
var inst_71738 = (function(){throw inst_71731})();
var state_71898__$1 = state_71898;
var statearr_71934_72578 = state_71898__$1;
(statearr_71934_72578[(2)] = inst_71738);

(statearr_71934_72578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (12))){
var inst_71896 = (state_71898[(2)]);
var state_71898__$1 = state_71898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71898__$1,inst_71896);
} else {
if((state_val_71899 === (2))){
var inst_71731 = (state_71898[(32)]);
var inst_71731__$1 = (state_71898[(2)]);
var inst_71732 = (inst_71731__$1 instanceof cljs.core.ExceptionInfo);
var inst_71733 = cljs.core.ex_data(inst_71731__$1);
var inst_71734 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71733);
var inst_71735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71734,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71736 = ((inst_71732) && (inst_71735));
var state_71898__$1 = (function (){var statearr_71935 = state_71898;
(statearr_71935[(32)] = inst_71731__$1);

return statearr_71935;
})();
if(cljs.core.truth_(inst_71736)){
var statearr_71936_72579 = state_71898__$1;
(statearr_71936_72579[(1)] = (3));

} else {
var statearr_71937_72580 = state_71898__$1;
(statearr_71937_72580[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (23))){
var inst_71794 = (state_71898[(34)]);
var state_71898__$1 = state_71898;
var statearr_71938_72581 = state_71898__$1;
(statearr_71938_72581[(2)] = inst_71794);

(statearr_71938_72581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (35))){
var inst_71837 = (state_71898[(13)]);
var inst_71850 = (state_71898[(14)]);
var inst_71760 = (state_71898[(15)]);
var inst_71821 = (state_71898[(16)]);
var inst_71789 = (state_71898[(17)]);
var inst_71833 = (state_71898[(18)]);
var inst_71820 = (state_71898[(19)]);
var inst_71824 = (state_71898[(20)]);
var inst_71840 = (state_71898[(21)]);
var inst_71827 = (state_71898[(22)]);
var inst_71805 = (state_71898[(10)]);
var inst_71806 = (state_71898[(12)]);
var inst_71830 = (state_71898[(23)]);
var inst_71790 = (state_71898[(11)]);
var inst_71743 = (state_71898[(24)]);
var inst_71786 = (state_71898[(25)]);
var inst_71846 = (state_71898[(27)]);
var inst_71848 = (state_71898[(28)]);
var inst_71852 = (state_71898[(29)]);
var inst_71843 = (state_71898[(30)]);
var inst_71846__$1 = (state_71898[(2)]);
var inst_71847 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_71846__$1);
var inst_71848__$1 = cljs.core.set(inst_71847);
var inst_71849 = (function (){var staking_pool_lp_address = inst_71821;
var lp_symbols = inst_71827;
var lp_transfers_in = inst_71846__$1;
var rewards_token = inst_71833;
var pool_pid = inst_71790;
var deposit_data = inst_71789;
var my_lps_staked_SINGLEQUOTE_ = inst_71806;
var my_lps_staked = inst_71805;
var all_staking_deposits = inst_71843;
var staked = inst_71743;
var total_pool_reserves = inst_71830;
var pool_info = inst_71820;
var reward_transfers = inst_71840;
var staked2 = inst_71760;
var total_unis = inst_71824;
var lp_decimals = (18);
var lp_transfers_hashes = inst_71848__$1;
var rewards_earned = inst_71837;
var deposit = inst_71786;
return (function (p1__71724_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__71724_SHARP_));
});
})();
var inst_71850__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_71849,inst_71843);
var inst_71851 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_71850__$1);
var inst_71852__$1 = cljs.core.set(inst_71851);
var inst_71853 = cljs.core.count(inst_71852__$1);
var inst_71854 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_71853,(1));
var state_71898__$1 = (function (){var statearr_71939 = state_71898;
(statearr_71939[(14)] = inst_71850__$1);

(statearr_71939[(27)] = inst_71846__$1);

(statearr_71939[(28)] = inst_71848__$1);

(statearr_71939[(29)] = inst_71852__$1);

return statearr_71939;
})();
if(inst_71854){
var statearr_71940_72582 = state_71898__$1;
(statearr_71940_72582[(1)] = (36));

} else {
var statearr_71941_72583 = state_71898__$1;
(statearr_71941_72583[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (19))){
var state_71898__$1 = state_71898;
var statearr_71942_72584 = state_71898__$1;
(statearr_71942_72584[(2)] = null);

(statearr_71942_72584[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (11))){
var inst_71760 = (state_71898[(15)]);
var inst_71743 = (state_71898[(24)]);
var inst_71770 = (function (){var staked = inst_71743;
var staked2 = inst_71760;
return (function (p1__71723_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__71723_SHARP_.transactionHash);
});
})();
var inst_71771 = lpdashboard.core.provider.getLogs(deposit_filter);
var inst_71772 = cljs.core.async.interop.p__GT_c(inst_71771);
var state_71898__$1 = (function (){var statearr_71943 = state_71898;
(statearr_71943[(36)] = inst_71770);

return statearr_71943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(14),inst_71772);
} else {
if((state_val_71899 === (9))){
var inst_71744 = (state_71898[(37)]);
var inst_71760 = (state_71898[(15)]);
var inst_71743 = (state_71898[(24)]);
var inst_71758 = (state_71898[(2)]);
var inst_71759 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_71744,inst_71758);
var inst_71760__$1 = cljs.core.first(inst_71759);
var inst_71761 = (inst_71743 == null);
var inst_71762 = (inst_71760__$1 == null);
var inst_71763 = ((inst_71761) && (inst_71762));
var inst_71764 = cljs.core.not(inst_71763);
var state_71898__$1 = (function (){var statearr_71944 = state_71898;
(statearr_71944[(15)] = inst_71760__$1);

return statearr_71944;
})();
if(inst_71764){
var statearr_71945_72585 = state_71898__$1;
(statearr_71945_72585[(1)] = (10));

} else {
var statearr_71946_72586 = state_71898__$1;
(statearr_71946_72586[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (5))){
var inst_71727 = (state_71898[(9)]);
var inst_71743 = (state_71898[(24)]);
var inst_71741 = (state_71898[(2)]);
var inst_71742 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_71727,inst_71741);
var inst_71743__$1 = cljs.core.first(inst_71742);
var inst_71744 = (function (){var staked = inst_71743__$1;
return (function (p1__71722_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__71722_SHARP_.transactionHash);
});
})();
var inst_71745 = lpdashboard.core.provider.getLogs(staked_filter2);
var inst_71746 = cljs.core.async.interop.p__GT_c(inst_71745);
var state_71898__$1 = (function (){var statearr_71947 = state_71898;
(statearr_71947[(37)] = inst_71744);

(statearr_71947[(24)] = inst_71743__$1);

return statearr_71947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(6),inst_71746);
} else {
if((state_val_71899 === (14))){
var inst_71774 = (state_71898[(33)]);
var inst_71774__$1 = (state_71898[(2)]);
var inst_71775 = (inst_71774__$1 instanceof cljs.core.ExceptionInfo);
var inst_71776 = cljs.core.ex_data(inst_71774__$1);
var inst_71777 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71776);
var inst_71778 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71777,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71779 = ((inst_71775) && (inst_71778));
var state_71898__$1 = (function (){var statearr_71948 = state_71898;
(statearr_71948[(33)] = inst_71774__$1);

return statearr_71948;
})();
if(cljs.core.truth_(inst_71779)){
var statearr_71949_72587 = state_71898__$1;
(statearr_71949_72587[(1)] = (15));

} else {
var statearr_71950_72588 = state_71898__$1;
(statearr_71950_72588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (26))){
var inst_71810 = (state_71898[(8)]);
var inst_71817 = (function(){throw inst_71810})();
var state_71898__$1 = state_71898;
var statearr_71951_72589 = state_71898__$1;
(statearr_71951_72589[(2)] = inst_71817);

(statearr_71951_72589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (16))){
var inst_71774 = (state_71898[(33)]);
var state_71898__$1 = state_71898;
var statearr_71952_72590 = state_71898__$1;
(statearr_71952_72590[(2)] = inst_71774);

(statearr_71952_72590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (38))){
var inst_71860 = (state_71898[(2)]);
var inst_71861 = lpdashboard.ethereum._LT_user_token_withdrawals(lpdashboard.core.provider,staking_address,user_address);
var state_71898__$1 = (function (){var statearr_71953 = state_71898;
(statearr_71953[(26)] = inst_71860);

return statearr_71953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(39),inst_71861);
} else {
if((state_val_71899 === (30))){
var inst_71827 = (state_71898[(2)]);
var inst_71828 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_71898__$1 = (function (){var statearr_71954 = state_71898;
(statearr_71954[(22)] = inst_71827);

return statearr_71954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(31),inst_71828);
} else {
if((state_val_71899 === (10))){
var inst_71766 = lpdashboard.core._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_71898__$1 = state_71898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(13),inst_71766);
} else {
if((state_val_71899 === (18))){
var inst_71789 = (state_71898[(17)]);
var inst_71790 = (state_71898[(11)]);
var inst_71786 = (state_71898[(25)]);
var inst_71789__$1 = lpdashboard.ethereum.decode_event_data(inst_71786);
var inst_71790__$1 = inst_71789__$1.pid;
var inst_71791 = cheff_contract.userInfo(inst_71790__$1,user_address);
var inst_71792 = cljs.core.async.interop.p__GT_c(inst_71791);
var state_71898__$1 = (function (){var statearr_71955 = state_71898;
(statearr_71955[(17)] = inst_71789__$1);

(statearr_71955[(11)] = inst_71790__$1);

return statearr_71955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71898__$1,(21),inst_71792);
} else {
if((state_val_71899 === (42))){
var inst_71891 = (state_71898[(2)]);
var state_71898__$1 = state_71898;
var statearr_71956_72591 = state_71898__$1;
(statearr_71956_72591[(2)] = inst_71891);

(statearr_71956_72591[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (37))){
var inst_71852 = (state_71898[(29)]);
var inst_71858 = cljs.core.first(inst_71852);
var state_71898__$1 = state_71898;
var statearr_71957_72592 = state_71898__$1;
(statearr_71957_72592[(2)] = inst_71858);

(statearr_71957_72592[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71899 === (8))){
var inst_71748 = (state_71898[(7)]);
var state_71898__$1 = state_71898;
var statearr_71958_72593 = state_71898__$1;
(statearr_71958_72593[(2)] = inst_71748);

(statearr_71958_72593[(1)] = (9));


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
var statearr_71959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71959[(0)] = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__);

(statearr_71959[(1)] = (1));

return statearr_71959;
});
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1 = (function (state_71898){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_71898);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e71960){var ex__36688__auto__ = e71960;
var statearr_71961_72594 = state_71898;
(statearr_71961_72594[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_71898[(4)]))){
var statearr_71962_72595 = state_71898;
(statearr_71962_72595[(1)] = cljs.core.first((state_71898[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72596 = state_71898;
state_71898 = G__72596;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__ = function(state_71898){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1.call(this,state_71898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_71963 = f__36777__auto__();
(statearr_71963[(6)] = c__36776__auto__);

return statearr_71963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions = (function lpdashboard$core$_LT_staked_lp_positions(lp_destination,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72006){
var state_val_72007 = (state_72006[(1)]);
if((state_val_72007 === (7))){
var inst_71977 = (state_72006[(7)]);
var inst_71984 = (function(){throw inst_71977})();
var state_72006__$1 = state_72006;
var statearr_72008_72597 = state_72006__$1;
(statearr_72008_72597[(2)] = inst_71984);

(statearr_72008_72597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (1))){
var inst_71965 = (state_72006[(8)]);
var inst_71964 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_71965__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_71966 = lpdashboard.ethereum.make_erc20(inst_71965__$1);
var state_72006__$1 = (function (){var statearr_72009 = state_72006;
(statearr_72009[(8)] = inst_71965__$1);

(statearr_72009[(9)] = inst_71966);

(statearr_72009[(10)] = inst_71964);

return statearr_72009;
})();
var statearr_72010_72598 = state_72006__$1;
(statearr_72010_72598[(2)] = null);

(statearr_72010_72598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (4))){
var inst_71965 = (state_72006[(8)]);
var inst_71964 = (state_72006[(10)]);
var inst_71967 = (state_72006[(2)]);
var inst_71968 = console.log("no name for lp, stkaing:",inst_71964,inst_71965);
var state_72006__$1 = (function (){var statearr_72011 = state_72006;
(statearr_72011[(11)] = inst_71967);

return statearr_72011;
})();
var statearr_72012_72599 = state_72006__$1;
(statearr_72012_72599[(2)] = inst_71968);

(statearr_72012_72599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (15))){
var inst_71999 = lpdashboard.core._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_72006__$1 = state_72006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72006__$1,(16),inst_71999);
} else {
if((state_val_72007 === (13))){
var inst_71965 = (state_72006[(8)]);
var inst_71964 = (state_72006[(10)]);
var inst_71995 = lpdashboard.core._LT_staked_lp_positions_sashimi_plate(inst_71964,inst_71965,user_address);
var state_72006__$1 = state_72006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72006__$1,(14),inst_71995);
} else {
if((state_val_72007 === (6))){
var inst_71977 = (state_72006[(7)]);
var inst_71977__$1 = (state_72006[(2)]);
var inst_71978 = (inst_71977__$1 instanceof cljs.core.ExceptionInfo);
var inst_71979 = cljs.core.ex_data(inst_71977__$1);
var inst_71980 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_71979);
var inst_71981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71980,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_71982 = ((inst_71978) && (inst_71981));
var state_72006__$1 = (function (){var statearr_72013 = state_72006;
(statearr_72013[(7)] = inst_71977__$1);

return statearr_72013;
})();
if(cljs.core.truth_(inst_71982)){
var statearr_72014_72600 = state_72006__$1;
(statearr_72014_72600[(1)] = (7));

} else {
var statearr_72015_72601 = state_72006__$1;
(statearr_72015_72601[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (3))){
var inst_71990 = (state_72006[(2)]);
var state_72006__$1 = state_72006;
var G__72016_72602 = inst_71990;
switch (G__72016_72602) {
case "LpBar":
var statearr_72017_72604 = state_72006__$1;
(statearr_72017_72604[(1)] = (11));


break;
case "sv Uniswap V2":
var statearr_72018_72605 = state_72006__$1;
(statearr_72018_72605[(1)] = (13));


break;
default:
var statearr_72019_72606 = state_72006__$1;
(statearr_72019_72606[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (12))){
var inst_71993 = (state_72006[(2)]);
var state_72006__$1 = state_72006;
var statearr_72020_72607 = state_72006__$1;
(statearr_72020_72607[(2)] = inst_71993);

(statearr_72020_72607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (2))){
var inst_71966 = (state_72006[(9)]);
var _ = (function (){var statearr_72021 = state_72006;
(statearr_72021[(4)] = cljs.core.cons((5),(state_72006[(4)])));

return statearr_72021;
})();
var inst_71974 = inst_71966.name();
var inst_71975 = cljs.core.async.interop.p__GT_c(inst_71974);
var state_72006__$1 = state_72006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72006__$1,(6),inst_71975);
} else {
if((state_val_72007 === (11))){
var inst_71965 = (state_72006[(8)]);
var inst_71964 = (state_72006[(10)]);
var inst_71991 = lpdashboard.core._LT_staked_lp_positions_lpbar(inst_71964,inst_71965,user_address);
var state_72006__$1 = state_72006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72006__$1,(12),inst_71991);
} else {
if((state_val_72007 === (9))){
var inst_71987 = (state_72006[(2)]);
var _ = (function (){var statearr_72023 = state_72006;
(statearr_72023[(4)] = cljs.core.rest((state_72006[(4)])));

return statearr_72023;
})();
var state_72006__$1 = state_72006;
var statearr_72024_72608 = state_72006__$1;
(statearr_72024_72608[(2)] = inst_71987);

(statearr_72024_72608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (5))){
var _ = (function (){var statearr_72025 = state_72006;
(statearr_72025[(4)] = cljs.core.rest((state_72006[(4)])));

return statearr_72025;
})();
var state_72006__$1 = state_72006;
var ex72022 = (state_72006__$1[(2)]);
var statearr_72026_72609 = state_72006__$1;
(statearr_72026_72609[(5)] = ex72022);


if((ex72022 instanceof Error)){
var statearr_72027_72610 = state_72006__$1;
(statearr_72027_72610[(1)] = (4));

(statearr_72027_72610[(5)] = null);

} else {
throw ex72022;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (14))){
var inst_71997 = (state_72006[(2)]);
var state_72006__$1 = state_72006;
var statearr_72028_72611 = state_72006__$1;
(statearr_72028_72611[(2)] = inst_71997);

(statearr_72028_72611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (16))){
var inst_72001 = (state_72006[(2)]);
var state_72006__$1 = state_72006;
var statearr_72029_72612 = state_72006__$1;
(statearr_72029_72612[(2)] = inst_72001);

(statearr_72029_72612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72007 === (10))){
var inst_72004 = (state_72006[(2)]);
var state_72006__$1 = state_72006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72006__$1,inst_72004);
} else {
if((state_val_72007 === (8))){
var inst_71977 = (state_72006[(7)]);
var state_72006__$1 = state_72006;
var statearr_72030_72613 = state_72006__$1;
(statearr_72030_72613[(2)] = inst_71977);

(statearr_72030_72613[(1)] = (9));


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
var statearr_72031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72031[(0)] = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__);

(statearr_72031[(1)] = (1));

return statearr_72031;
});
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1 = (function (state_72006){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72006);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72032){var ex__36688__auto__ = e72032;
var statearr_72033_72614 = state_72006;
(statearr_72033_72614[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72006[(4)]))){
var statearr_72034_72615 = state_72006;
(statearr_72034_72615[(1)] = cljs.core.first((state_72006[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72616 = state_72006;
state_72006 = G__72616;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__ = function(state_72006){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1.call(this,state_72006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72035 = f__36777__auto__();
(statearr_72035[(6)] = c__36776__auto__);

return statearr_72035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_graph_uniswap_positions = (function lpdashboard$core$_LT_graph_uniswap_positions(user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72049){
var state_val_72050 = (state_72049[(1)]);
if((state_val_72050 === (1))){
var inst_72036 = lpdashboard.thegraph._LT_user_lp_snapshots(user_address);
var state_72049__$1 = state_72049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72049__$1,(2),inst_72036);
} else {
if((state_val_72050 === (2))){
var inst_72038 = (state_72049[(7)]);
var inst_72038__$1 = (state_72049[(2)]);
var inst_72039 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_72040 = (lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1(inst_72038__$1) : lpdashboard.core.most_recent_snapshots.call(null,inst_72038__$1));
var inst_72041 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_72039,inst_72040);
var inst_72042 = lpdashboard.thegraph._LT_user_lps(user_address,inst_72041);
var state_72049__$1 = (function (){var statearr_72051 = state_72049;
(statearr_72051[(7)] = inst_72038__$1);

return statearr_72051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72049__$1,(3),inst_72042);
} else {
if((state_val_72050 === (3))){
var inst_72038 = (state_72049[(7)]);
var inst_72044 = (state_72049[(2)]);
var inst_72045 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.Keyword(null,"positions","positions",-1380538434)];
var inst_72046 = [user_address,inst_72038,inst_72044];
var inst_72047 = cljs.core.PersistentHashMap.fromArrays(inst_72045,inst_72046);
var state_72049__$1 = state_72049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72049__$1,inst_72047);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_72052 = [null,null,null,null,null,null,null,null];
(statearr_72052[(0)] = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__);

(statearr_72052[(1)] = (1));

return statearr_72052;
});
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1 = (function (state_72049){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72049);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72053){var ex__36688__auto__ = e72053;
var statearr_72054_72617 = state_72049;
(statearr_72054_72617[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72049[(4)]))){
var statearr_72055_72618 = state_72049;
(statearr_72055_72618[(1)] = cljs.core.first((state_72049[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72619 = state_72049;
state_72049 = G__72619;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = function(state_72049){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1.call(this,state_72049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72056 = f__36777__auto__();
(statearr_72056[(6)] = c__36776__auto__);

return statearr_72056;
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__72057_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__72057_SHARP_);
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
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__72058_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__72058_SHARP_);
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
var token0_price = (function (){var fexpr__72059 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address0);
return (fexpr__72059.cljs$core$IFn$_invoke$arity$1 ? fexpr__72059.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__72059.call(null,token_prices));
})();
var token1_price = (function (){var fexpr__72060 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address1);
return (fexpr__72060.cljs$core$IFn$_invoke$arity$1 ? fexpr__72060.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__72060.call(null,token_prices));
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
var relevant_stakes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72061_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__72061_SHARP_));
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
var snapshot_lps = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72062_SHARP_){
return lpdashboard.core.make_lp(p1__72062_SHARP_,staked_positions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__72062_SHARP_))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__72062_SHARP_))));
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
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72066_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72066_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72067_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72067_SHARP_,token2);
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
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72068_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72068_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72069_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72069_SHARP_,token2);
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
lpdashboard.core.pretty_price = (function lpdashboard$core$pretty_price(p__72070){
var vec__72071 = p__72070;
var token_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72071,(0),null);
var token_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72071,(1),null);
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72074_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__72074_SHARP_));
}),cljs.core.vals(token_prices))))),clojure.string.lower_case(vs_price));
});
lpdashboard.core.rewards_in_currency = (function lpdashboard$core$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72075_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__72075_SHARP_),lpdashboard.core.symbol__GT_price(p1__72075_SHARP_,token_prices,currency));
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
var token_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72076_SHARP_){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,p1__72076_SHARP_));
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
}),(function (p1__72077_SHARP_){
return bignumber.core._STAR_(lp_portion,p1__72077_SHARP_);
})),cljs.core.vals(token_reserves));
var current = cljs.core.zipmap(token_symbols,reserve_shares);
var earned = lpdashboard.core.get_current_earned(latest_snapshot);
var earned_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__72078_SHARP_){
return lpdashboard.core.token_symbol(p1__72078_SHARP_,token_info);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),earned),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),earned));
var claimed = cljs.core.identity(lpdashboard.core.all_snapshot_claimed(latest_snapshot));
var claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72079_SHARP_){
return lpdashboard.core.token_symbol(p1__72079_SHARP_,token_info);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),claimed)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
var rewards = bignumber.core._PLUS_(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(earned),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.first(claimed)));
var rewards_token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(earned);
var rtoken_symbol = lpdashboard.core.token_symbol(rewards_token,token_info);
var rewards_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(rtoken_symbol))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([rtoken_symbol,rewards]));
var rewards_SINGLEQUOTE___$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([claimed_SINGLEQUOTE_,earned_SINGLEQUOTE_], 0));
var minted_lp = lpdashboard.core.minted_lp(lp_position);
var total_invested = lpdashboard.core.tokens_deposited(lp_position);
var total_invested_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72080_SHARP_){
return lpdashboard.core.token_symbol(p1__72080_SHARP_,token_info);
}),cljs.core.keys(total_invested)),cljs.core.vals(total_invested));
var burned_lp = lpdashboard.core.burned_lp(lp_position);
var total_withdrawals = lpdashboard.core.tokens_withdrawn(lp_position);
var total_withdrawals_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72081_SHARP_){
return lpdashboard.core.token_symbol(p1__72081_SHARP_,token_info);
}),cljs.core.keys(total_withdrawals)),cljs.core.vals(total_withdrawals));
var token_symbols__$1 = cljs.core.keys(total_invested_SINGLEQUOTE_);
var total_initial = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72082_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_invested_SINGLEQUOTE_,p1__72082_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72083_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_withdrawals_SINGLEQUOTE_,p1__72083_SHARP_);
}),token_symbols__$1)));
var token_diffs = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72084_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,p1__72084_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72085_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_initial,p1__72085_SHARP_);
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
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72086_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__72086_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__72086_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72087_SHARP_){
return lpdashboard.ethereum.decode_burn_data(p1__72087_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72088_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__72088_SHARP_)));
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
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72089_SHARP_){
return lpdashboard.ethereum.decode_transfer_data(p1__72089_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72090_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__72090_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__72090_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72091_SHARP_){
return lpdashboard.ethereum.decode_mint_data(p1__72091_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72092_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__72092_SHARP_)));
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72119){
var state_val_72120 = (state_72119[(1)]);
if((state_val_72120 === (1))){
var inst_72097 = (state_72119[(7)]);
var inst_72095 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_72096 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_72097__$1 = cljs.core.first(inst_72096);
var inst_72098 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_72099 = cljs.core.second(inst_72098);
var inst_72100 = lpdashboard.ethereum._LT_token_decimals(inst_72097__$1);
var state_72119__$1 = (function (){var statearr_72121 = state_72119;
(statearr_72121[(8)] = inst_72095);

(statearr_72121[(7)] = inst_72097__$1);

(statearr_72121[(9)] = inst_72099);

return statearr_72121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72119__$1,(2),inst_72100);
} else {
if((state_val_72120 === (2))){
var inst_72099 = (state_72119[(9)]);
var inst_72102 = (state_72119[(2)]);
var inst_72103 = lpdashboard.ethereum._LT_token_decimals(inst_72099);
var state_72119__$1 = (function (){var statearr_72122 = state_72119;
(statearr_72122[(10)] = inst_72102);

return statearr_72122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72119__$1,(3),inst_72103);
} else {
if((state_val_72120 === (3))){
var inst_72095 = (state_72119[(8)]);
var inst_72105 = (state_72119[(2)]);
var inst_72106 = lpdashboard.ethereum._LT_user_lp_mint_transfers(lpdashboard.core.provider,inst_72095,user_address);
var state_72119__$1 = (function (){var statearr_72123 = state_72119;
(statearr_72123[(11)] = inst_72105);

return statearr_72123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72119__$1,(4),inst_72106);
} else {
if((state_val_72120 === (4))){
var inst_72108 = (state_72119[(12)]);
var inst_72111 = (state_72119[(13)]);
var inst_72095 = (state_72119[(8)]);
var inst_72102 = (state_72119[(10)]);
var inst_72105 = (state_72119[(11)]);
var inst_72097 = (state_72119[(7)]);
var inst_72099 = (state_72119[(9)]);
var inst_72108__$1 = (state_72119[(2)]);
var inst_72109 = (function (){var pair_address = inst_72095;
var token1_address = inst_72097;
var token2_address = inst_72099;
var token1_decimals = inst_72102;
var token2_decimals = inst_72105;
var mint_transfers = inst_72108__$1;
return (function (p1__72093_SHARP_){
return p1__72093_SHARP_.transactionHash;
});
})();
var inst_72110 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_72109,inst_72108__$1);
var inst_72111__$1 = cljs.core.set(inst_72110);
var inst_72112 = lpdashboard.ethereum._LT_get_trxs(inst_72111__$1);
var state_72119__$1 = (function (){var statearr_72124 = state_72119;
(statearr_72124[(12)] = inst_72108__$1);

(statearr_72124[(13)] = inst_72111__$1);

return statearr_72124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72119__$1,(5),inst_72112);
} else {
if((state_val_72120 === (5))){
var inst_72108 = (state_72119[(12)]);
var inst_72111 = (state_72119[(13)]);
var inst_72095 = (state_72119[(8)]);
var inst_72102 = (state_72119[(10)]);
var inst_72105 = (state_72119[(11)]);
var inst_72097 = (state_72119[(7)]);
var inst_72099 = (state_72119[(9)]);
var inst_72114 = (state_72119[(2)]);
var inst_72115 = (function (){var pair_address = inst_72095;
var token1_address = inst_72097;
var token2_address = inst_72099;
var token1_decimals = inst_72102;
var token2_decimals = inst_72105;
var mint_transfers = inst_72108;
var mint_hashes = inst_72111;
var mint_txrs = inst_72114;
return (function (p1__72094_SHARP_){
return lpdashboard.core.make_mint_map(lp_pool,user_address,p1__72094_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_72116 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_72115,inst_72114);
var inst_72117 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_72116);
var state_72119__$1 = state_72119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72119__$1,inst_72117);
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
var statearr_72125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72125[(0)] = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__);

(statearr_72125[(1)] = (1));

return statearr_72125;
});
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1 = (function (state_72119){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72119);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72126){var ex__36688__auto__ = e72126;
var statearr_72127_72620 = state_72119;
(statearr_72127_72620[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72119[(4)]))){
var statearr_72128_72621 = state_72119;
(statearr_72128_72621[(1)] = cljs.core.first((state_72119[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72622 = state_72119;
state_72119 = G__72622;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__ = function(state_72119){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1.call(this,state_72119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72129 = f__36777__auto__();
(statearr_72129[(6)] = c__36776__auto__);

return statearr_72129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_lp_burns = (function lpdashboard$core$_LT_get_lp_burns(lp_pool,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72156){
var state_val_72157 = (state_72156[(1)]);
if((state_val_72157 === (1))){
var inst_72134 = (state_72156[(7)]);
var inst_72132 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_72133 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_72134__$1 = cljs.core.first(inst_72133);
var inst_72135 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_72136 = cljs.core.second(inst_72135);
var inst_72137 = lpdashboard.ethereum._LT_token_decimals(inst_72134__$1);
var state_72156__$1 = (function (){var statearr_72158 = state_72156;
(statearr_72158[(8)] = inst_72136);

(statearr_72158[(9)] = inst_72132);

(statearr_72158[(7)] = inst_72134__$1);

return statearr_72158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72156__$1,(2),inst_72137);
} else {
if((state_val_72157 === (2))){
var inst_72136 = (state_72156[(8)]);
var inst_72139 = (state_72156[(2)]);
var inst_72140 = lpdashboard.ethereum._LT_token_decimals(inst_72136);
var state_72156__$1 = (function (){var statearr_72159 = state_72156;
(statearr_72159[(10)] = inst_72139);

return statearr_72159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72156__$1,(3),inst_72140);
} else {
if((state_val_72157 === (3))){
var inst_72132 = (state_72156[(9)]);
var inst_72142 = (state_72156[(2)]);
var inst_72143 = lpdashboard.ethereum._LT_user_lp_burn_transfers(lpdashboard.core.provider,inst_72132,user_address);
var state_72156__$1 = (function (){var statearr_72160 = state_72156;
(statearr_72160[(11)] = inst_72142);

return statearr_72160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72156__$1,(4),inst_72143);
} else {
if((state_val_72157 === (4))){
var inst_72142 = (state_72156[(11)]);
var inst_72145 = (state_72156[(12)]);
var inst_72136 = (state_72156[(8)]);
var inst_72148 = (state_72156[(13)]);
var inst_72132 = (state_72156[(9)]);
var inst_72139 = (state_72156[(10)]);
var inst_72134 = (state_72156[(7)]);
var inst_72145__$1 = (state_72156[(2)]);
var inst_72146 = (function (){var pair_address = inst_72132;
var token1_address = inst_72134;
var token2_address = inst_72136;
var token1_decimals = inst_72139;
var token2_decimals = inst_72142;
var burn_transfers = inst_72145__$1;
return (function (p1__72130_SHARP_){
return p1__72130_SHARP_.transactionHash;
});
})();
var inst_72147 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_72146,inst_72145__$1);
var inst_72148__$1 = cljs.core.set(inst_72147);
var inst_72149 = lpdashboard.ethereum._LT_get_trxs(inst_72148__$1);
var state_72156__$1 = (function (){var statearr_72161 = state_72156;
(statearr_72161[(12)] = inst_72145__$1);

(statearr_72161[(13)] = inst_72148__$1);

return statearr_72161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72156__$1,(5),inst_72149);
} else {
if((state_val_72157 === (5))){
var inst_72142 = (state_72156[(11)]);
var inst_72145 = (state_72156[(12)]);
var inst_72136 = (state_72156[(8)]);
var inst_72148 = (state_72156[(13)]);
var inst_72132 = (state_72156[(9)]);
var inst_72139 = (state_72156[(10)]);
var inst_72134 = (state_72156[(7)]);
var inst_72151 = (state_72156[(2)]);
var inst_72152 = (function (){var pair_address = inst_72132;
var token1_address = inst_72134;
var token2_address = inst_72136;
var token1_decimals = inst_72139;
var token2_decimals = inst_72142;
var burn_transfers = inst_72145;
var burn_hashes = inst_72148;
var burn_txrs = inst_72151;
return (function (p1__72131_SHARP_){
return lpdashboard.core.make_burn_map(lp_pool,user_address,p1__72131_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_72153 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_72152,inst_72151);
var inst_72154 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_72153);
var state_72156__$1 = state_72156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72156__$1,inst_72154);
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
var statearr_72162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72162[(0)] = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__);

(statearr_72162[(1)] = (1));

return statearr_72162;
});
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1 = (function (state_72156){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72156);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72163){var ex__36688__auto__ = e72163;
var statearr_72164_72623 = state_72156;
(statearr_72164_72623[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72156[(4)]))){
var statearr_72165_72624 = state_72156;
(statearr_72165_72624[(1)] = cljs.core.first((state_72156[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72625 = state_72156;
state_72156 = G__72625;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__ = function(state_72156){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1.call(this,state_72156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72166 = f__36777__auto__();
(statearr_72166[(6)] = c__36776__auto__);

return statearr_72166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_user_mints = (function lpdashboard$core$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72175){
var state_val_72176 = (state_72175[(1)]);
if((state_val_72176 === (1))){
var inst_72167 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_72168 = [inst_72167];
var inst_72169 = lpdashboard.core._LT_get_lp_mints(p,user_address);
var state_72175__$1 = (function (){var statearr_72177 = state_72175;
(statearr_72177[(7)] = inst_72168);

return statearr_72177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72175__$1,(2),inst_72169);
} else {
if((state_val_72176 === (2))){
var inst_72168 = (state_72175[(7)]);
var inst_72171 = (state_72175[(2)]);
var inst_72172 = [inst_72171];
var inst_72173 = cljs.core.PersistentHashMap.fromArrays(inst_72168,inst_72172);
var state_72175__$1 = state_72175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72175__$1,inst_72173);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0 = (function (){
var statearr_72178 = [null,null,null,null,null,null,null,null];
(statearr_72178[(0)] = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__);

(statearr_72178[(1)] = (1));

return statearr_72178;
});
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1 = (function (state_72175){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72175);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72179){var ex__36688__auto__ = e72179;
var statearr_72180_72626 = state_72175;
(statearr_72180_72626[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72175[(4)]))){
var statearr_72181_72627 = state_72175;
(statearr_72181_72627[(1)] = cljs.core.first((state_72175[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72628 = state_72175;
state_72175 = G__72628;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = function(state_72175){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1.call(this,state_72175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72182 = f__36777__auto__();
(statearr_72182[(6)] = c__36776__auto__);

return statearr_72182;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72191){
var state_val_72192 = (state_72191[(1)]);
if((state_val_72192 === (1))){
var inst_72183 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_72184 = [inst_72183];
var inst_72185 = lpdashboard.core._LT_get_lp_burns(p,user_address);
var state_72191__$1 = (function (){var statearr_72193 = state_72191;
(statearr_72193[(7)] = inst_72184);

return statearr_72193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72191__$1,(2),inst_72185);
} else {
if((state_val_72192 === (2))){
var inst_72184 = (state_72191[(7)]);
var inst_72187 = (state_72191[(2)]);
var inst_72188 = [inst_72187];
var inst_72189 = cljs.core.PersistentHashMap.fromArrays(inst_72184,inst_72188);
var state_72191__$1 = state_72191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72191__$1,inst_72189);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0 = (function (){
var statearr_72194 = [null,null,null,null,null,null,null,null];
(statearr_72194[(0)] = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__);

(statearr_72194[(1)] = (1));

return statearr_72194;
});
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1 = (function (state_72191){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72191);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72195){var ex__36688__auto__ = e72195;
var statearr_72196_72629 = state_72191;
(statearr_72196_72629[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72191[(4)]))){
var statearr_72197_72630 = state_72191;
(statearr_72197_72630[(1)] = cljs.core.first((state_72191[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72631 = state_72191;
state_72191 = G__72631;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = function(state_72191){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1.call(this,state_72191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72198 = f__36777__auto__();
(statearr_72198[(6)] = c__36776__auto__);

return statearr_72198;
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72204){
var state_val_72205 = (state_72204[(1)]);
if((state_val_72205 === (1))){
var inst_72200 = lpdashboard.ethereum._LT_user_token_destinations(lpdashboard.core.provider,x,user_address);
var state_72204__$1 = state_72204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72204__$1,(2),inst_72200);
} else {
if((state_val_72205 === (2))){
var inst_72202 = (state_72204[(2)]);
var state_72204__$1 = state_72204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72204__$1,inst_72202);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_72206 = [null,null,null,null,null,null,null];
(statearr_72206[(0)] = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__);

(statearr_72206[(1)] = (1));

return statearr_72206;
});
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1 = (function (state_72204){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72204);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72207){var ex__36688__auto__ = e72207;
var statearr_72208_72632 = state_72204;
(statearr_72208_72632[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72204[(4)]))){
var statearr_72209_72633 = state_72204;
(statearr_72209_72633[(1)] = cljs.core.first((state_72204[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72634 = state_72204;
state_72204 = G__72634;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = function(state_72204){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1.call(this,state_72204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72210 = f__36777__auto__();
(statearr_72210[(6)] = c__36776__auto__);

return statearr_72210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__72199_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__72199_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
lpdashboard.core._LT_user_lp_positions = (function lpdashboard$core$_LT_user_lp_positions(destinations,user_address){
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72221){
var state_val_72222 = (state_72221[(1)]);
if((state_val_72222 === (1))){
var inst_72212 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_72213 = lpdashboard.core._LT_staked_lp_positions(x,user_address);
var state_72221__$1 = (function (){var statearr_72223 = state_72221;
(statearr_72223[(7)] = inst_72212);

return statearr_72223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72221__$1,(2),inst_72213);
} else {
if((state_val_72222 === (2))){
var inst_72212 = (state_72221[(7)]);
var inst_72215 = (state_72221[(2)]);
var inst_72216 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_72217 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_72218 = [inst_72215,inst_72216,inst_72217];
var inst_72219 = cljs.core.PersistentHashMap.fromArrays(inst_72212,inst_72218);
var state_72221__$1 = state_72221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72221__$1,inst_72219);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_72224 = [null,null,null,null,null,null,null,null];
(statearr_72224[(0)] = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__);

(statearr_72224[(1)] = (1));

return statearr_72224;
});
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1 = (function (state_72221){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72221);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72225){var ex__36688__auto__ = e72225;
var statearr_72226_72635 = state_72221;
(statearr_72226_72635[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72221[(4)]))){
var statearr_72227_72636 = state_72221;
(statearr_72227_72636[(1)] = cljs.core.first((state_72221[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72637 = state_72221;
state_72221 = G__72637;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = function(state_72221){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1.call(this,state_72221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72228 = f__36777__auto__();
(statearr_72228[(6)] = c__36776__auto__);

return statearr_72228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__72211_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__72211_SHARP_)));
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions)));
});
lpdashboard.core._LT_user_get_staked = (function lpdashboard$core$_LT_user_get_staked(user_address,user_snapshots){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72241){
var state_val_72242 = (state_72241[(1)]);
if((state_val_72242 === (1))){
var inst_72230 = lpdashboard.core.last_lp_snapshots(user_snapshots);
var inst_72231 = lpdashboard.core._LT_user_lp_destinations(user_snapshots,user_address);
var state_72241__$1 = (function (){var statearr_72243 = state_72241;
(statearr_72243[(7)] = inst_72230);

return statearr_72243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72241__$1,(2),inst_72231);
} else {
if((state_val_72242 === (2))){
var inst_72233 = (state_72241[(8)]);
var inst_72233__$1 = (state_72241[(2)]);
var inst_72234 = lpdashboard.core._LT_user_lp_positions(inst_72233__$1,user_address);
var state_72241__$1 = (function (){var statearr_72244 = state_72241;
(statearr_72244[(8)] = inst_72233__$1);

return statearr_72244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72241__$1,(3),inst_72234);
} else {
if((state_val_72242 === (3))){
var inst_72233 = (state_72241[(8)]);
var inst_72230 = (state_72241[(7)]);
var inst_72236 = (state_72241[(2)]);
var inst_72237 = (function (){var lsnapshots = inst_72230;
var user_destinations = inst_72233;
var user_positions = inst_72236;
return (function (p1__72229_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__72229_SHARP_)));
});
})();
var inst_72238 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_72236,inst_72230);
var inst_72239 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_72237,inst_72238);
var state_72241__$1 = state_72241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72241__$1,inst_72239);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0 = (function (){
var statearr_72245 = [null,null,null,null,null,null,null,null,null];
(statearr_72245[(0)] = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__);

(statearr_72245[(1)] = (1));

return statearr_72245;
});
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1 = (function (state_72241){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72241);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72246){var ex__36688__auto__ = e72246;
var statearr_72247_72638 = state_72241;
(statearr_72247_72638[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72241[(4)]))){
var statearr_72248_72639 = state_72241;
(statearr_72248_72639[(1)] = cljs.core.first((state_72241[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72640 = state_72241;
state_72241 = G__72640;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = function(state_72241){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1.call(this,state_72241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72249 = f__36777__auto__();
(statearr_72249[(6)] = c__36776__auto__);

return statearr_72249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.sum_pairs = (function lpdashboard$core$sum_pairs(pair_positions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72251){
var vec__72252 = p__72251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72252,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.assoc,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"pos","pos",-864607220)),v)),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"pos","pos",-864607220)),v))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72250_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__72250_SHARP_,new cljs.core.Keyword(null,"dst","dst",844682948));
}),pair_positions)));
});
lpdashboard.core.get_pair = (function lpdashboard$core$get_pair(pair_positions,token0,token1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72255_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token0,new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__72255_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token1,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__72255_SHARP_)))));
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
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_72371){
var state_val_72372 = (state_72371[(1)]);
if((state_val_72372 === (1))){
var inst_72258 = lpdashboard.ethereum._LT_resolve_address(account_or_name);
var state_72371__$1 = state_72371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(2),inst_72258);
} else {
if((state_val_72372 === (2))){
var inst_72260 = (state_72371[(7)]);
var inst_72260__$1 = (state_72371[(2)]);
var inst_72261 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72262 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72263 = (new cljs.core.PersistentVector(null,1,(5),inst_72261,inst_72262,null));
var inst_72264 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72263,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Seeking Uniswap \uD83E\uDD84 Pools ..."], 0));
var inst_72265 = lpdashboard.core._LT_graph_uniswap_positions(inst_72260__$1);
var state_72371__$1 = (function (){var statearr_72373 = state_72371;
(statearr_72373[(7)] = inst_72260__$1);

(statearr_72373[(8)] = inst_72264);

return statearr_72373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(3),inst_72265);
} else {
if((state_val_72372 === (3))){
var inst_72271 = (state_72371[(9)]);
var inst_72267 = (state_72371[(10)]);
var inst_72260 = (state_72371[(7)]);
var inst_72269 = (state_72371[(11)]);
var inst_72276 = (state_72371[(12)]);
var inst_72267__$1 = (state_72371[(2)]);
var inst_72268 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_72267__$1);
var inst_72269__$1 = lpdashboard.core.last_lp_snapshots(inst_72268);
var inst_72270 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.snapshot__GT_symbols,inst_72269__$1);
var inst_72271__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_72270);
var inst_72272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72273 = cljs.core.count(inst_72269__$1);
var inst_72274 = ["Account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name),"\nhas provided liquidity to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72273)," pools:\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72271__$1)].join('');
var inst_72275 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_72274];
var inst_72276__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_72272,inst_72275,null));
var inst_72277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72278 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72279 = (new cljs.core.PersistentVector(null,1,(5),inst_72277,inst_72278,null));
var inst_72280 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72279,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72276__$1], 0));
var inst_72281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72282 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72283 = (new cljs.core.PersistentVector(null,1,(5),inst_72281,inst_72282,null));
var inst_72284 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72283,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Locating Staked LP Tokens ..."], 0));
var inst_72285 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_72267__$1);
var inst_72286 = lpdashboard.core._LT_user_get_staked(inst_72260,inst_72285);
var state_72371__$1 = (function (){var statearr_72374 = state_72371;
(statearr_72374[(9)] = inst_72271__$1);

(statearr_72374[(10)] = inst_72267__$1);

(statearr_72374[(13)] = inst_72284);

(statearr_72374[(11)] = inst_72269__$1);

(statearr_72374[(14)] = inst_72280);

(statearr_72374[(12)] = inst_72276__$1);

return statearr_72374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(4),inst_72286);
} else {
if((state_val_72372 === (4))){
var inst_72271 = (state_72371[(9)]);
var inst_72267 = (state_72371[(10)]);
var inst_72260 = (state_72371[(7)]);
var inst_72288 = (state_72371[(15)]);
var inst_72269 = (state_72371[(11)]);
var inst_72276 = (state_72371[(12)]);
var inst_72288__$1 = (state_72371[(2)]);
var inst_72289 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_72288__$1);
var inst_72290 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_72289);
var inst_72291 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_72290);
var inst_72292 = cljs.core.count(inst_72291);
var inst_72293 = ["Account has staked LP tokens in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72292)," distinct staking contracts ..."].join('');
var inst_72294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72295 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72296 = (new cljs.core.PersistentVector(null,1,(5),inst_72294,inst_72295,null));
var inst_72297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72296,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72293], 0));
var inst_72298 = (function (){var account = inst_72260;
var _ = inst_72297;
var graph_positions = inst_72267;
var last_snaps = inst_72269;
var pair_symbols = inst_72271;
var many_pools_step = inst_72276;
var staked = inst_72288__$1;
var many_stakes_step = inst_72293;
return (function (p1__72257_SHARP_){
return clojure.set.rename_keys(p1__72257_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"address","address",559499426)], null));
});
})();
var inst_72299 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_72300 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_72267);
var inst_72301 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_72300);
var inst_72302 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_72299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72301], 0));
var inst_72303 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_72298,inst_72302);
var inst_72304 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_72267);
var inst_72305 = lpdashboard.core.pooled_tokens(inst_72304);
var inst_72306 = lpdashboard.core.reward_tokens(inst_72288__$1);
var inst_72307 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_72305,inst_72306,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"], 0));
var inst_72308 = cljs.core.set(inst_72307);
var inst_72309 = lpdashboard.ethereum._LT_erc20_infos(inst_72306);
var state_72371__$1 = (function (){var statearr_72375 = state_72371;
(statearr_72375[(16)] = inst_72303);

(statearr_72375[(15)] = inst_72288__$1);

(statearr_72375[(17)] = inst_72308);

return statearr_72375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(5),inst_72309);
} else {
if((state_val_72372 === (5))){
var inst_72303 = (state_72371[(16)]);
var inst_72308 = (state_72371[(17)]);
var inst_72311 = (state_72371[(2)]);
var inst_72312 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_72303,inst_72311);
var inst_72313 = cljs.core.set(inst_72312);
var inst_72314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72315 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72316 = (new cljs.core.PersistentVector(null,1,(5),inst_72314,inst_72315,null));
var inst_72317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72318 = ["Getting token prices..."];
var inst_72319 = (new cljs.core.PersistentVector(null,1,(5),inst_72317,inst_72318,null));
var inst_72320 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72316,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72319], 0));
var inst_72321 = lpdashboard.coingecko._LT_token_prices(inst_72308);
var state_72371__$1 = (function (){var statearr_72376 = state_72371;
(statearr_72376[(18)] = inst_72320);

(statearr_72376[(19)] = inst_72313);

return statearr_72376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(6),inst_72321);
} else {
if((state_val_72372 === (6))){
var inst_72325 = (state_72371[(20)]);
var inst_72267 = (state_72371[(10)]);
var inst_72260 = (state_72371[(7)]);
var inst_72323 = (state_72371[(2)]);
var inst_72324 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_72267);
var inst_72325__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.gposition__GT_pool,inst_72324);
var inst_72326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72327 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72328 = (new cljs.core.PersistentVector(null,1,(5),inst_72326,inst_72327,null));
var inst_72329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72330 = ["Getting LP Mint events from account..."];
var inst_72331 = (new cljs.core.PersistentVector(null,1,(5),inst_72329,inst_72330,null));
var inst_72332 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72328,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72331], 0));
var inst_72333 = lpdashboard.core._LT_get_user_mints(inst_72260,inst_72325__$1);
var state_72371__$1 = (function (){var statearr_72377 = state_72371;
(statearr_72377[(20)] = inst_72325__$1);

(statearr_72377[(21)] = inst_72323);

(statearr_72377[(22)] = inst_72332);

return statearr_72377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(7),inst_72333);
} else {
if((state_val_72372 === (7))){
var inst_72325 = (state_72371[(20)]);
var inst_72260 = (state_72371[(7)]);
var inst_72335 = (state_72371[(23)]);
var inst_72335__$1 = (state_72371[(2)]);
var inst_72336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72337 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72338 = (new cljs.core.PersistentVector(null,1,(5),inst_72336,inst_72337,null));
var inst_72339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72340 = cljs.core.vals(inst_72335__$1);
var inst_72341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_72340);
var inst_72342 = cljs.core.count(inst_72341);
var inst_72343 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72342)," LP Mint events by account"].join('');
var inst_72344 = [inst_72343];
var inst_72345 = (new cljs.core.PersistentVector(null,1,(5),inst_72339,inst_72344,null));
var inst_72346 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72338,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72345], 0));
var inst_72347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72348 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72349 = (new cljs.core.PersistentVector(null,1,(5),inst_72347,inst_72348,null));
var inst_72350 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72351 = ["Getting LP Burn events from account..."];
var inst_72352 = (new cljs.core.PersistentVector(null,1,(5),inst_72350,inst_72351,null));
var inst_72353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72349,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72352], 0));
var inst_72354 = lpdashboard.core._LT_get_user_burns(inst_72260,inst_72325);
var state_72371__$1 = (function (){var statearr_72378 = state_72371;
(statearr_72378[(24)] = inst_72353);

(statearr_72378[(25)] = inst_72346);

(statearr_72378[(23)] = inst_72335__$1);

return statearr_72378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72371__$1,(8),inst_72354);
} else {
if((state_val_72372 === (8))){
var inst_72323 = (state_72371[(21)]);
var inst_72267 = (state_72371[(10)]);
var inst_72288 = (state_72371[(15)]);
var inst_72335 = (state_72371[(23)]);
var inst_72313 = (state_72371[(19)]);
var inst_72356 = (state_72371[(2)]);
var inst_72357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72358 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_72359 = (new cljs.core.PersistentVector(null,1,(5),inst_72357,inst_72358,null));
var inst_72360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72361 = cljs.core.vals(inst_72356);
var inst_72362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_72361);
var inst_72363 = cljs.core.count(inst_72362);
var inst_72364 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72363)," LP Burn events from account"].join('');
var inst_72365 = [inst_72364];
var inst_72366 = (new cljs.core.PersistentVector(null,1,(5),inst_72360,inst_72365,null));
var inst_72367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_72359,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72366], 0));
var inst_72368 = lpdashboard.core.make_token_info(inst_72313,inst_72323);
var inst_72369 = lpdashboard.core.make_state(inst_72267,inst_72288,inst_72368,inst_72335,inst_72356);
var state_72371__$1 = (function (){var statearr_72379 = state_72371;
(statearr_72379[(26)] = inst_72367);

return statearr_72379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72371__$1,inst_72369);
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
var statearr_72380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72380[(0)] = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__);

(statearr_72380[(1)] = (1));

return statearr_72380;
});
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1 = (function (state_72371){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_72371);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e72381){var ex__36688__auto__ = e72381;
var statearr_72382_72641 = state_72371;
(statearr_72382_72641[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_72371[(4)]))){
var statearr_72383_72642 = state_72371;
(statearr_72383_72642[(1)] = cljs.core.first((state_72371[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72643 = state_72371;
state_72371 = G__72643;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__ = function(state_72371){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1.call(this,state_72371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_72384 = f__36777__auto__();
(statearr_72384[(6)] = c__36776__auto__);

return statearr_72384;
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
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72385_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__72385_SHARP_),symbol);
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
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72386_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__72386_SHARP_)),token1)) && (cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__72386_SHARP_)),token2)));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72387_SHARP_){
var G__72388 = new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lpdashboard.core.lp_position_map(p1__72387_SHARP_,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)));
return (pnl_key.cljs$core$IFn$_invoke$arity$1 ? pnl_key.cljs$core$IFn$_invoke$arity$1(G__72388) : pnl_key.call(null,G__72388));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))));
});
lpdashboard.core.compute_totals = (function lpdashboard$core$compute_totals(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rewards","rewards",-1173924062),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),state),new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),state),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),state)], null);
});

//# sourceMappingURL=lpdashboard.core.js.map
