goog.provide('revert.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),(function (_,___$1){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95746){
var state_val_95747 = (state_95746[(1)]);
if((state_val_95747 === (1))){
var inst_95732 = revert.ethereum.select_provider();
var state_95746__$1 = state_95746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95746__$1,(2),inst_95732);
} else {
if((state_val_95747 === (2))){
var inst_95734 = (state_95746[(7)]);
var inst_95734__$1 = (state_95746[(2)]);
var state_95746__$1 = (function (){var statearr_95748 = state_95746;
(statearr_95748[(7)] = inst_95734__$1);

return statearr_95748;
})();
if(cljs.core.truth_(inst_95734__$1)){
var statearr_95749_95899 = state_95746__$1;
(statearr_95749_95899[(1)] = (3));

} else {
var statearr_95750_95900 = state_95746__$1;
(statearr_95750_95900[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95747 === (3))){
var inst_95734 = (state_95746[(7)]);
var inst_95736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95737 = [new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),true];
var inst_95738 = (new cljs.core.PersistentVector(null,2,(5),inst_95736,inst_95737,null));
var inst_95739 = re_frame.core.dispatch(inst_95738);
var inst_95740 = ["/account/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_95734)].join('');
var inst_95741 = revert.utils.set_hash_BANG_(inst_95740);
var state_95746__$1 = (function (){var statearr_95751 = state_95746;
(statearr_95751[(8)] = inst_95739);

return statearr_95751;
})();
var statearr_95752_95901 = state_95746__$1;
(statearr_95752_95901[(2)] = inst_95741);

(statearr_95752_95901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95747 === (4))){
var state_95746__$1 = state_95746;
var statearr_95753_95902 = state_95746__$1;
(statearr_95753_95902[(2)] = null);

(statearr_95753_95902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95747 === (5))){
var inst_95744 = (state_95746[(2)]);
var state_95746__$1 = state_95746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95746__$1,inst_95744);
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
var statearr_95754 = [null,null,null,null,null,null,null,null,null];
(statearr_95754[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95754[(1)] = (1));

return statearr_95754;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95746){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95746);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95755){var ex__52189__auto__ = e95755;
var statearr_95756_95903 = state_95746;
(statearr_95756_95903[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95746[(4)]))){
var statearr_95757_95904 = state_95746;
(statearr_95757_95904[(1)] = cljs.core.first((state_95746[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95905 = state_95746;
state_95746 = G__95905;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95746){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95758 = f__52209__auto__();
(statearr_95758[(6)] = c__52208__auto__);

return statearr_95758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),(function (p__95759){
var vec__95760 = p__95759;
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95760,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95760,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95775){
var state_val_95776 = (state_95775[(1)]);
if((state_val_95776 === (1))){
var inst_95763 = revert.pools._LT_pool_histories(pool_addresses,days);
var state_95775__$1 = state_95775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95775__$1,(2),inst_95763);
} else {
if((state_val_95776 === (2))){
var inst_95765 = (state_95775[(7)]);
var inst_95765__$1 = (state_95775[(2)]);
var state_95775__$1 = (function (){var statearr_95777 = state_95775;
(statearr_95777[(7)] = inst_95765__$1);

return statearr_95777;
})();
if(cljs.core.truth_(inst_95765__$1)){
var statearr_95778_95906 = state_95775__$1;
(statearr_95778_95906[(1)] = (3));

} else {
var statearr_95779_95907 = state_95775__$1;
(statearr_95779_95907[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95776 === (3))){
var inst_95765 = (state_95775[(7)]);
var inst_95767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95768 = [new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),inst_95765];
var inst_95769 = (new cljs.core.PersistentVector(null,2,(5),inst_95767,inst_95768,null));
var inst_95770 = re_frame.core.dispatch(inst_95769);
var state_95775__$1 = state_95775;
var statearr_95780_95908 = state_95775__$1;
(statearr_95780_95908[(2)] = inst_95770);

(statearr_95780_95908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95776 === (4))){
var state_95775__$1 = state_95775;
var statearr_95781_95909 = state_95775__$1;
(statearr_95781_95909[(2)] = null);

(statearr_95781_95909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95776 === (5))){
var inst_95773 = (state_95775[(2)]);
var state_95775__$1 = state_95775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95775__$1,inst_95773);
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
var statearr_95782 = [null,null,null,null,null,null,null,null];
(statearr_95782[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95782[(1)] = (1));

return statearr_95782;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95775){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95775);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95783){var ex__52189__auto__ = e95783;
var statearr_95784_95910 = state_95775;
(statearr_95784_95910[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95775[(4)]))){
var statearr_95785_95911 = state_95775;
(statearr_95785_95911[(1)] = cljs.core.first((state_95775[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95912 = state_95775;
state_95775 = G__95912;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95775){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95786 = f__52209__auto__();
(statearr_95786[(6)] = c__52208__auto__);

return statearr_95786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),(function (account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95799){
var state_val_95800 = (state_95799[(1)]);
if((state_val_95800 === (1))){
var inst_95787 = revert.pools._LT_fetch_account(account);
var state_95799__$1 = state_95799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95799__$1,(2),inst_95787);
} else {
if((state_val_95800 === (2))){
var inst_95789 = (state_95799[(7)]);
var inst_95789__$1 = (state_95799[(2)]);
var state_95799__$1 = (function (){var statearr_95801 = state_95799;
(statearr_95801[(7)] = inst_95789__$1);

return statearr_95801;
})();
if(cljs.core.truth_(inst_95789__$1)){
var statearr_95802_95913 = state_95799__$1;
(statearr_95802_95913[(1)] = (3));

} else {
var statearr_95803_95914 = state_95799__$1;
(statearr_95803_95914[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95800 === (3))){
var inst_95789 = (state_95799[(7)]);
var inst_95791 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95792 = [new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),inst_95789];
var inst_95793 = (new cljs.core.PersistentVector(null,2,(5),inst_95791,inst_95792,null));
var inst_95794 = re_frame.core.dispatch(inst_95793);
var state_95799__$1 = state_95799;
var statearr_95804_95915 = state_95799__$1;
(statearr_95804_95915[(2)] = inst_95794);

(statearr_95804_95915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95800 === (4))){
var state_95799__$1 = state_95799;
var statearr_95805_95916 = state_95799__$1;
(statearr_95805_95916[(2)] = null);

(statearr_95805_95916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95800 === (5))){
var inst_95797 = (state_95799[(2)]);
var state_95799__$1 = state_95799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95799__$1,inst_95797);
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
var statearr_95806 = [null,null,null,null,null,null,null,null];
(statearr_95806[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95806[(1)] = (1));

return statearr_95806;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95799){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95799);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95807){var ex__52189__auto__ = e95807;
var statearr_95808_95917 = state_95799;
(statearr_95808_95917[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95799[(4)]))){
var statearr_95809_95918 = state_95799;
(statearr_95809_95918[(1)] = cljs.core.first((state_95799[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95919 = state_95799;
state_95799 = G__95919;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95799){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95810 = f__52209__auto__();
(statearr_95810[(6)] = c__52208__auto__);

return statearr_95810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-stakings","fetch-pool-stakings",1573671547),(function (p__95811){
var vec__95812 = p__95811;
var user_account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95812,(0),null);
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95812,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95827){
var state_val_95828 = (state_95827[(1)]);
if((state_val_95828 === (1))){
var inst_95815 = revert.rewards._LT_token_stakings(user_account,pool_addresses);
var state_95827__$1 = state_95827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95827__$1,(2),inst_95815);
} else {
if((state_val_95828 === (2))){
var inst_95817 = (state_95827[(7)]);
var inst_95817__$1 = (state_95827[(2)]);
var state_95827__$1 = (function (){var statearr_95829 = state_95827;
(statearr_95829[(7)] = inst_95817__$1);

return statearr_95829;
})();
if(cljs.core.truth_(inst_95817__$1)){
var statearr_95830_95920 = state_95827__$1;
(statearr_95830_95920[(1)] = (3));

} else {
var statearr_95831_95921 = state_95827__$1;
(statearr_95831_95921[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95828 === (3))){
var inst_95817 = (state_95827[(7)]);
var inst_95819 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95820 = [new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),inst_95817];
var inst_95821 = (new cljs.core.PersistentVector(null,2,(5),inst_95819,inst_95820,null));
var inst_95822 = re_frame.core.dispatch(inst_95821);
var state_95827__$1 = state_95827;
var statearr_95832_95922 = state_95827__$1;
(statearr_95832_95922[(2)] = inst_95822);

(statearr_95832_95922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95828 === (4))){
var state_95827__$1 = state_95827;
var statearr_95833_95923 = state_95827__$1;
(statearr_95833_95923[(2)] = null);

(statearr_95833_95923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95828 === (5))){
var inst_95825 = (state_95827[(2)]);
var state_95827__$1 = state_95827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95827__$1,inst_95825);
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
var statearr_95834 = [null,null,null,null,null,null,null,null];
(statearr_95834[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95834[(1)] = (1));

return statearr_95834;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95827){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95827);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95835){var ex__52189__auto__ = e95835;
var statearr_95836_95924 = state_95827;
(statearr_95836_95924[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95827[(4)]))){
var statearr_95837_95925 = state_95827;
(statearr_95837_95925[(1)] = cljs.core.first((state_95827[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95926 = state_95827;
state_95827 = G__95926;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95827){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95838 = f__52209__auto__();
(statearr_95838[(6)] = c__52208__auto__);

return statearr_95838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),(function (token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95848){
var state_val_95849 = (state_95848[(1)]);
if((state_val_95849 === (1))){
var inst_95839 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(token_addresses,revert.utils.weth_address);
var inst_95840 = revert.erc20._LT_infos(inst_95839);
var state_95848__$1 = state_95848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95848__$1,(2),inst_95840);
} else {
if((state_val_95849 === (2))){
var inst_95842 = (state_95848[(2)]);
var inst_95843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95844 = [new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),inst_95842];
var inst_95845 = (new cljs.core.PersistentVector(null,2,(5),inst_95843,inst_95844,null));
var inst_95846 = re_frame.core.dispatch(inst_95845);
var state_95848__$1 = state_95848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95848__$1,inst_95846);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_95850 = [null,null,null,null,null,null,null];
(statearr_95850[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95850[(1)] = (1));

return statearr_95850;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95848){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95848);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95851){var ex__52189__auto__ = e95851;
var statearr_95852_95927 = state_95848;
(statearr_95852_95927[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95848[(4)]))){
var statearr_95853_95928 = state_95848;
(statearr_95853_95928[(1)] = cljs.core.first((state_95848[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95929 = state_95848;
state_95848 = G__95929;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95848){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95854 = f__52209__auto__();
(statearr_95854[(6)] = c__52208__auto__);

return statearr_95854;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_95863){
var state_val_95864 = (state_95863[(1)]);
if((state_val_95864 === (1))){
var inst_95855 = revert.core._LT_get_block_nums(block_numbers);
var state_95863__$1 = state_95863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95863__$1,(2),inst_95855);
} else {
if((state_val_95864 === (2))){
var inst_95857 = (state_95863[(2)]);
var inst_95858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_95859 = [new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),inst_95857];
var inst_95860 = (new cljs.core.PersistentVector(null,2,(5),inst_95858,inst_95859,null));
var inst_95861 = re_frame.core.dispatch(inst_95860);
var state_95863__$1 = state_95863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95863__$1,inst_95861);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_95865 = [null,null,null,null,null,null,null];
(statearr_95865[(0)] = revert$core$state_machine__52186__auto__);

(statearr_95865[(1)] = (1));

return statearr_95865;
});
var revert$core$state_machine__52186__auto____1 = (function (state_95863){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_95863);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e95866){var ex__52189__auto__ = e95866;
var statearr_95867_95930 = state_95863;
(statearr_95867_95930[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_95863[(4)]))){
var statearr_95868_95931 = state_95863;
(statearr_95868_95931[(1)] = cljs.core.first((state_95863[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95932 = state_95863;
state_95863 = G__95932;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_95863){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_95863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_95869 = f__52209__auto__();
(statearr_95869[(6)] = c__52208__auto__);

return statearr_95869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
var action__52358__auto___95933 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95870 = params__52359__auto__;
var map__95870__$1 = (((((!((map__95870 == null))))?(((((map__95870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95870):map__95870);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95872 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__52358__auto___95933);

var action__52358__auto___95934 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95875 = params__52359__auto__;
var map__95875__$1 = (((((!((map__95875 == null))))?(((((map__95875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95875):map__95875);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95877 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__52358__auto___95934);

var action__52358__auto___95935 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95880 = params__52359__auto__;
var map__95880__$1 = (((((!((map__95880 == null))))?(((((map__95880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95880):map__95880);
var account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95880__$1,new cljs.core.Keyword(null,"account","account",718006320));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95882 = params__52359__auto__;
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95882,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/account/:account",action__52358__auto___95935);

var action__52358__auto___95936 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95885 = params__52359__auto__;
var map__95885__$1 = (((((!((map__95885 == null))))?(((((map__95885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95885):map__95885);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95885__$1,new cljs.core.Keyword(null,"address","address",559499426));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95887 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95887,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address",action__52358__auto___95936);

var action__52358__auto___95937 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__95890 = params__52359__auto__;
var map__95890__$1 = (((((!((map__95890 == null))))?(((((map__95890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__95890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__95890):map__95890);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95890__$1,new cljs.core.Keyword(null,"address","address",559499426));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95890__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e95892){if((e95892 instanceof Error)){
var err = e95892;
return (30);
} else {
throw e95892;

}
}})()], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__95893 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95893,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95893,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e95896){if((e95896 instanceof Error)){
var err = e95896;
return (30);
} else {
throw e95896;

}
}})()], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address/:days",action__52358__auto___95937);

if((typeof revert !== 'undefined') && (typeof revert.core !== 'undefined') && (typeof revert.core.history !== 'undefined')){
} else {
revert.core.history = (function (){var G__95897 = (new goog.History());
goog.events.listen(G__95897,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__95897.setEnabled(true);

return G__95897;
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
}catch (e95898){if((e95898 instanceof Error)){
var err = e95898;
return console.log("disableAll not available");
} else {
throw e95898;

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
