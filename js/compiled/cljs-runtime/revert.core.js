goog.provide('revert.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"prompt-select-provider","prompt-select-provider",1228413569),(function (_,___$1){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_116913){
var state_val_116914 = (state_116913[(1)]);
if((state_val_116914 === (1))){
var inst_116899 = revert.ethereum.select_provider();
var state_116913__$1 = state_116913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116913__$1,(2),inst_116899);
} else {
if((state_val_116914 === (2))){
var inst_116901 = (state_116913[(7)]);
var inst_116901__$1 = (state_116913[(2)]);
var state_116913__$1 = (function (){var statearr_116915 = state_116913;
(statearr_116915[(7)] = inst_116901__$1);

return statearr_116915;
})();
if(cljs.core.truth_(inst_116901__$1)){
var statearr_116916_117141 = state_116913__$1;
(statearr_116916_117141[(1)] = (3));

} else {
var statearr_116917_117142 = state_116913__$1;
(statearr_116917_117142[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116914 === (3))){
var inst_116901 = (state_116913[(7)]);
var inst_116903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116904 = [new cljs.core.Keyword(null,"set-connected","set-connected",1369874993),true];
var inst_116905 = (new cljs.core.PersistentVector(null,2,(5),inst_116903,inst_116904,null));
var inst_116906 = re_frame.core.dispatch(inst_116905);
var inst_116907 = ["/account/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_116901)].join('');
var inst_116908 = revert.utils.set_hash_BANG_(inst_116907);
var state_116913__$1 = (function (){var statearr_116918 = state_116913;
(statearr_116918[(8)] = inst_116906);

return statearr_116918;
})();
var statearr_116919_117143 = state_116913__$1;
(statearr_116919_117143[(2)] = inst_116908);

(statearr_116919_117143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116914 === (4))){
var state_116913__$1 = state_116913;
var statearr_116920_117144 = state_116913__$1;
(statearr_116920_117144[(2)] = null);

(statearr_116920_117144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116914 === (5))){
var inst_116911 = (state_116913[(2)]);
var state_116913__$1 = state_116913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_116913__$1,inst_116911);
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
var statearr_116921 = [null,null,null,null,null,null,null,null,null];
(statearr_116921[(0)] = revert$core$state_machine__52186__auto__);

(statearr_116921[(1)] = (1));

return statearr_116921;
});
var revert$core$state_machine__52186__auto____1 = (function (state_116913){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_116913);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e116922){var ex__52189__auto__ = e116922;
var statearr_116923_117145 = state_116913;
(statearr_116923_117145[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_116913[(4)]))){
var statearr_116924_117146 = state_116913;
(statearr_116924_117146[(1)] = cljs.core.first((state_116913[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117147 = state_116913;
state_116913 = G__117147;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_116913){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_116913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_116925 = f__52209__auto__();
(statearr_116925[(6)] = c__52208__auto__);

return statearr_116925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-histories","fetch-pool-histories",1631185364),(function (p__116926){
var vec__116927 = p__116926;
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116927,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116927,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_116976){
var state_val_116977 = (state_116976[(1)]);
if((state_val_116977 === (7))){
var inst_116945 = cljs.core.count(pool_addresses);
var inst_116946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_116945,(1));
var state_116976__$1 = state_116976;
if(inst_116946){
var statearr_116978_117148 = state_116976__$1;
(statearr_116978_117148[(1)] = (9));

} else {
var statearr_116979_117149 = state_116976__$1;
(statearr_116979_117149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (1))){
var inst_116930 = revert.pools._LT_pool_histories(pool_addresses,days);
var state_116976__$1 = state_116976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116976__$1,(2),inst_116930);
} else {
if((state_val_116977 === (4))){
var inst_116932 = (state_116976[(7)]);
var state_116976__$1 = state_116976;
var statearr_116980_117150 = state_116976__$1;
(statearr_116980_117150[(2)] = inst_116932);

(statearr_116980_117150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (15))){
var inst_116957 = (state_116976[(2)]);
var state_116976__$1 = state_116976;
if(cljs.core.truth_(inst_116957)){
var statearr_116981_117151 = state_116976__$1;
(statearr_116981_117151[(1)] = (16));

} else {
var statearr_116982_117152 = state_116976__$1;
(statearr_116982_117152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (13))){
var inst_116951 = (state_116976[(8)]);
var inst_116953 = cljs.core.empty_QMARK_(inst_116951);
var inst_116954 = (!(inst_116953));
var state_116976__$1 = state_116976;
var statearr_116983_117153 = state_116976__$1;
(statearr_116983_117153[(2)] = inst_116954);

(statearr_116983_117153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (6))){
var inst_116932 = (state_116976[(7)]);
var inst_116940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116941 = [new cljs.core.Keyword(null,"pool-histories-fecthed","pool-histories-fecthed",-1260832953),inst_116932];
var inst_116942 = (new cljs.core.PersistentVector(null,2,(5),inst_116940,inst_116941,null));
var inst_116943 = re_frame.core.dispatch(inst_116942);
var state_116976__$1 = state_116976;
var statearr_116984_117154 = state_116976__$1;
(statearr_116984_117154[(2)] = inst_116943);

(statearr_116984_117154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (17))){
var state_116976__$1 = state_116976;
var statearr_116985_117155 = state_116976__$1;
(statearr_116985_117155[(2)] = null);

(statearr_116985_117155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (3))){
var inst_116932 = (state_116976[(7)]);
var inst_116934 = cljs.core.empty_QMARK_(inst_116932);
var inst_116935 = (!(inst_116934));
var state_116976__$1 = state_116976;
var statearr_116986_117156 = state_116976__$1;
(statearr_116986_117156[(2)] = inst_116935);

(statearr_116986_117156[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (12))){
var inst_116951 = (state_116976[(8)]);
var inst_116951__$1 = (state_116976[(2)]);
var state_116976__$1 = (function (){var statearr_116987 = state_116976;
(statearr_116987[(8)] = inst_116951__$1);

return statearr_116987;
})();
if(cljs.core.truth_(inst_116951__$1)){
var statearr_116988_117157 = state_116976__$1;
(statearr_116988_117157[(1)] = (13));

} else {
var statearr_116989_117158 = state_116976__$1;
(statearr_116989_117158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (2))){
var inst_116932 = (state_116976[(7)]);
var inst_116932__$1 = (state_116976[(2)]);
var state_116976__$1 = (function (){var statearr_116990 = state_116976;
(statearr_116990[(7)] = inst_116932__$1);

return statearr_116990;
})();
if(cljs.core.truth_(inst_116932__$1)){
var statearr_116991_117159 = state_116976__$1;
(statearr_116991_117159[(1)] = (3));

} else {
var statearr_116992_117160 = state_116976__$1;
(statearr_116992_117160[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (11))){
var inst_116972 = (state_116976[(2)]);
var state_116976__$1 = state_116976;
var statearr_116993_117161 = state_116976__$1;
(statearr_116993_117161[(2)] = inst_116972);

(statearr_116993_117161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (9))){
var inst_116948 = cljs.core.first(pool_addresses);
var inst_116949 = revert.poolsv3._LT_pool_histories(inst_116948,days);
var state_116976__$1 = state_116976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116976__$1,(12),inst_116949);
} else {
if((state_val_116977 === (5))){
var inst_116938 = (state_116976[(2)]);
var state_116976__$1 = state_116976;
if(cljs.core.truth_(inst_116938)){
var statearr_116994_117162 = state_116976__$1;
(statearr_116994_117162[(1)] = (6));

} else {
var statearr_116995_117163 = state_116976__$1;
(statearr_116995_117163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (14))){
var inst_116951 = (state_116976[(8)]);
var state_116976__$1 = state_116976;
var statearr_116996_117164 = state_116976__$1;
(statearr_116996_117164[(2)] = inst_116951);

(statearr_116996_117164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (16))){
var inst_116951 = (state_116976[(8)]);
var inst_116959 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116960 = [new cljs.core.Keyword(null,"v3pool-histories-fecthed","v3pool-histories-fecthed",1695054153),inst_116951];
var inst_116961 = (new cljs.core.PersistentVector(null,2,(5),inst_116959,inst_116960,null));
var inst_116962 = re_frame.core.dispatch(inst_116961);
var state_116976__$1 = state_116976;
var statearr_116997_117165 = state_116976__$1;
(statearr_116997_117165[(2)] = inst_116962);

(statearr_116997_117165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (10))){
var inst_116932 = (state_116976[(7)]);
var inst_116967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116968 = [new cljs.core.Keyword(null,"v3pool-histories-fecthed","v3pool-histories-fecthed",1695054153),inst_116932];
var inst_116969 = (new cljs.core.PersistentVector(null,2,(5),inst_116967,inst_116968,null));
var inst_116970 = re_frame.core.dispatch(inst_116969);
var state_116976__$1 = state_116976;
var statearr_116998_117166 = state_116976__$1;
(statearr_116998_117166[(2)] = inst_116970);

(statearr_116998_117166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (18))){
var inst_116965 = (state_116976[(2)]);
var state_116976__$1 = state_116976;
var statearr_116999_117167 = state_116976__$1;
(statearr_116999_117167[(2)] = inst_116965);

(statearr_116999_117167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116977 === (8))){
var inst_116974 = (state_116976[(2)]);
var state_116976__$1 = state_116976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_116976__$1,inst_116974);
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
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_117000 = [null,null,null,null,null,null,null,null,null];
(statearr_117000[(0)] = revert$core$state_machine__52186__auto__);

(statearr_117000[(1)] = (1));

return statearr_117000;
});
var revert$core$state_machine__52186__auto____1 = (function (state_116976){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_116976);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e117001){var ex__52189__auto__ = e117001;
var statearr_117002_117168 = state_116976;
(statearr_117002_117168[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_116976[(4)]))){
var statearr_117003_117169 = state_116976;
(statearr_117003_117169[(1)] = cljs.core.first((state_116976[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117170 = state_116976;
state_116976 = G__117170;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_116976){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_116976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_117004 = f__52209__auto__();
(statearr_117004[(6)] = c__52208__auto__);

return statearr_117004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-account","fetch-account",444755627),(function (account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_117017){
var state_val_117018 = (state_117017[(1)]);
if((state_val_117018 === (1))){
var inst_117005 = revert.pools._LT_fetch_account(account);
var state_117017__$1 = state_117017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117017__$1,(2),inst_117005);
} else {
if((state_val_117018 === (2))){
var inst_117007 = (state_117017[(7)]);
var inst_117007__$1 = (state_117017[(2)]);
var state_117017__$1 = (function (){var statearr_117019 = state_117017;
(statearr_117019[(7)] = inst_117007__$1);

return statearr_117019;
})();
if(cljs.core.truth_(inst_117007__$1)){
var statearr_117020_117171 = state_117017__$1;
(statearr_117020_117171[(1)] = (3));

} else {
var statearr_117021_117172 = state_117017__$1;
(statearr_117021_117172[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117018 === (3))){
var inst_117007 = (state_117017[(7)]);
var inst_117009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117010 = [new cljs.core.Keyword(null,"account-fetched","account-fetched",1979852734),inst_117007];
var inst_117011 = (new cljs.core.PersistentVector(null,2,(5),inst_117009,inst_117010,null));
var inst_117012 = re_frame.core.dispatch(inst_117011);
var state_117017__$1 = state_117017;
var statearr_117022_117173 = state_117017__$1;
(statearr_117022_117173[(2)] = inst_117012);

(statearr_117022_117173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117018 === (4))){
var state_117017__$1 = state_117017;
var statearr_117023_117174 = state_117017__$1;
(statearr_117023_117174[(2)] = null);

(statearr_117023_117174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117018 === (5))){
var inst_117015 = (state_117017[(2)]);
var state_117017__$1 = state_117017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117017__$1,inst_117015);
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
var statearr_117024 = [null,null,null,null,null,null,null,null];
(statearr_117024[(0)] = revert$core$state_machine__52186__auto__);

(statearr_117024[(1)] = (1));

return statearr_117024;
});
var revert$core$state_machine__52186__auto____1 = (function (state_117017){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_117017);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e117025){var ex__52189__auto__ = e117025;
var statearr_117026_117175 = state_117017;
(statearr_117026_117175[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_117017[(4)]))){
var statearr_117027_117176 = state_117017;
(statearr_117027_117176[(1)] = cljs.core.first((state_117017[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117177 = state_117017;
state_117017 = G__117177;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_117017){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_117017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_117028 = f__52209__auto__();
(statearr_117028[(6)] = c__52208__auto__);

return statearr_117028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-univ3-account-state","fetch-univ3-account-state",944054743),(function (account){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_117041){
var state_val_117042 = (state_117041[(1)]);
if((state_val_117042 === (1))){
var inst_117029 = revert.poolsv3._LT_fetch_account_state(account);
var state_117041__$1 = state_117041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117041__$1,(2),inst_117029);
} else {
if((state_val_117042 === (2))){
var inst_117031 = (state_117041[(7)]);
var inst_117031__$1 = (state_117041[(2)]);
var state_117041__$1 = (function (){var statearr_117043 = state_117041;
(statearr_117043[(7)] = inst_117031__$1);

return statearr_117043;
})();
if(cljs.core.truth_(inst_117031__$1)){
var statearr_117044_117178 = state_117041__$1;
(statearr_117044_117178[(1)] = (3));

} else {
var statearr_117045_117179 = state_117041__$1;
(statearr_117045_117179[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117042 === (3))){
var inst_117031 = (state_117041[(7)]);
var inst_117033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117034 = [new cljs.core.Keyword(null,"univ3-account-state-fetched","univ3-account-state-fetched",1517628553),inst_117031];
var inst_117035 = (new cljs.core.PersistentVector(null,2,(5),inst_117033,inst_117034,null));
var inst_117036 = re_frame.core.dispatch(inst_117035);
var state_117041__$1 = state_117041;
var statearr_117046_117180 = state_117041__$1;
(statearr_117046_117180[(2)] = inst_117036);

(statearr_117046_117180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117042 === (4))){
var state_117041__$1 = state_117041;
var statearr_117047_117181 = state_117041__$1;
(statearr_117047_117181[(2)] = null);

(statearr_117047_117181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117042 === (5))){
var inst_117039 = (state_117041[(2)]);
var state_117041__$1 = state_117041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117041__$1,inst_117039);
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
var statearr_117048 = [null,null,null,null,null,null,null,null];
(statearr_117048[(0)] = revert$core$state_machine__52186__auto__);

(statearr_117048[(1)] = (1));

return statearr_117048;
});
var revert$core$state_machine__52186__auto____1 = (function (state_117041){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_117041);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e117049){var ex__52189__auto__ = e117049;
var statearr_117050_117182 = state_117041;
(statearr_117050_117182[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_117041[(4)]))){
var statearr_117051_117183 = state_117041;
(statearr_117051_117183[(1)] = cljs.core.first((state_117041[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117184 = state_117041;
state_117041 = G__117184;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_117041){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_117041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_117052 = f__52209__auto__();
(statearr_117052[(6)] = c__52208__auto__);

return statearr_117052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-pool-stakings","fetch-pool-stakings",1573671547),(function (p__117053){
var vec__117054 = p__117053;
var user_account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117054,(0),null);
var pool_addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117054,(1),null);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_117069){
var state_val_117070 = (state_117069[(1)]);
if((state_val_117070 === (1))){
var inst_117057 = revert.rewards._LT_token_stakings(user_account,pool_addresses);
var state_117069__$1 = state_117069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117069__$1,(2),inst_117057);
} else {
if((state_val_117070 === (2))){
var inst_117059 = (state_117069[(7)]);
var inst_117059__$1 = (state_117069[(2)]);
var state_117069__$1 = (function (){var statearr_117071 = state_117069;
(statearr_117071[(7)] = inst_117059__$1);

return statearr_117071;
})();
if(cljs.core.truth_(inst_117059__$1)){
var statearr_117072_117185 = state_117069__$1;
(statearr_117072_117185[(1)] = (3));

} else {
var statearr_117073_117186 = state_117069__$1;
(statearr_117073_117186[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117070 === (3))){
var inst_117059 = (state_117069[(7)]);
var inst_117061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117062 = [new cljs.core.Keyword(null,"pool-stakings-fetched","pool-stakings-fetched",1266931468),inst_117059];
var inst_117063 = (new cljs.core.PersistentVector(null,2,(5),inst_117061,inst_117062,null));
var inst_117064 = re_frame.core.dispatch(inst_117063);
var state_117069__$1 = state_117069;
var statearr_117074_117187 = state_117069__$1;
(statearr_117074_117187[(2)] = inst_117064);

(statearr_117074_117187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117070 === (4))){
var state_117069__$1 = state_117069;
var statearr_117075_117188 = state_117069__$1;
(statearr_117075_117188[(2)] = null);

(statearr_117075_117188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117070 === (5))){
var inst_117067 = (state_117069[(2)]);
var state_117069__$1 = state_117069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117069__$1,inst_117067);
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
var statearr_117076 = [null,null,null,null,null,null,null,null];
(statearr_117076[(0)] = revert$core$state_machine__52186__auto__);

(statearr_117076[(1)] = (1));

return statearr_117076;
});
var revert$core$state_machine__52186__auto____1 = (function (state_117069){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_117069);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e117077){var ex__52189__auto__ = e117077;
var statearr_117078_117189 = state_117069;
(statearr_117078_117189[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_117069[(4)]))){
var statearr_117079_117190 = state_117069;
(statearr_117079_117190[(1)] = cljs.core.first((state_117069[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117191 = state_117069;
state_117069 = G__117191;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_117069){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_117069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_117080 = f__52209__auto__();
(statearr_117080[(6)] = c__52208__auto__);

return statearr_117080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"fetch-token-infos","fetch-token-infos",-1890152120),(function (token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_117090){
var state_val_117091 = (state_117090[(1)]);
if((state_val_117091 === (1))){
var inst_117081 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(token_addresses,revert.utils.weth_address);
var inst_117082 = revert.erc20._LT_infos(inst_117081);
var state_117090__$1 = state_117090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117090__$1,(2),inst_117082);
} else {
if((state_val_117091 === (2))){
var inst_117084 = (state_117090[(2)]);
var inst_117085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117086 = [new cljs.core.Keyword(null,"token-infos-fetched","token-infos-fetched",-852219659),inst_117084];
var inst_117087 = (new cljs.core.PersistentVector(null,2,(5),inst_117085,inst_117086,null));
var inst_117088 = re_frame.core.dispatch(inst_117087);
var state_117090__$1 = state_117090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117090__$1,inst_117088);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_117092 = [null,null,null,null,null,null,null];
(statearr_117092[(0)] = revert$core$state_machine__52186__auto__);

(statearr_117092[(1)] = (1));

return statearr_117092;
});
var revert$core$state_machine__52186__auto____1 = (function (state_117090){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_117090);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e117093){var ex__52189__auto__ = e117093;
var statearr_117094_117192 = state_117090;
(statearr_117094_117192[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_117090[(4)]))){
var statearr_117095_117193 = state_117090;
(statearr_117095_117193[(1)] = cljs.core.first((state_117090[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117194 = state_117090;
state_117090 = G__117194;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_117090){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_117090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_117096 = f__52209__auto__();
(statearr_117096[(6)] = c__52208__auto__);

return statearr_117096;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_117105){
var state_val_117106 = (state_117105[(1)]);
if((state_val_117106 === (1))){
var inst_117097 = revert.core._LT_get_block_nums(block_numbers);
var state_117105__$1 = state_117105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117105__$1,(2),inst_117097);
} else {
if((state_val_117106 === (2))){
var inst_117099 = (state_117105[(2)]);
var inst_117100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117101 = [new cljs.core.Keyword(null,"block-timestamps-fetched","block-timestamps-fetched",1784879543),inst_117099];
var inst_117102 = (new cljs.core.PersistentVector(null,2,(5),inst_117100,inst_117101,null));
var inst_117103 = re_frame.core.dispatch(inst_117102);
var state_117105__$1 = state_117105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117105__$1,inst_117103);
} else {
return null;
}
}
});
return (function() {
var revert$core$state_machine__52186__auto__ = null;
var revert$core$state_machine__52186__auto____0 = (function (){
var statearr_117107 = [null,null,null,null,null,null,null];
(statearr_117107[(0)] = revert$core$state_machine__52186__auto__);

(statearr_117107[(1)] = (1));

return statearr_117107;
});
var revert$core$state_machine__52186__auto____1 = (function (state_117105){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_117105);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e117108){var ex__52189__auto__ = e117108;
var statearr_117109_117195 = state_117105;
(statearr_117109_117195[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_117105[(4)]))){
var statearr_117110_117196 = state_117105;
(statearr_117110_117196[(1)] = cljs.core.first((state_117105[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117197 = state_117105;
state_117105 = G__117197;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$core$state_machine__52186__auto__ = function(state_117105){
switch(arguments.length){
case 0:
return revert$core$state_machine__52186__auto____0.call(this);
case 1:
return revert$core$state_machine__52186__auto____1.call(this,state_117105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$core$state_machine__52186__auto____0;
revert$core$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$core$state_machine__52186__auto____1;
return revert$core$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_117111 = f__52209__auto__();
(statearr_117111[(6)] = c__52208__auto__);

return statearr_117111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));
var action__52358__auto___117198 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__117112 = params__52359__auto__;
var map__117112__$1 = (((((!((map__117112 == null))))?(((((map__117112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__117112):map__117112);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__117114 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"all","all",892129742)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__52358__auto___117198);

var action__52358__auto___117199 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__117117 = params__52359__auto__;
var map__117117__$1 = (((((!((map__117117 == null))))?(((((map__117117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__117117):map__117117);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__117119 = params__52359__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__52358__auto___117199);

var action__52358__auto___117200 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__117122 = params__52359__auto__;
var map__117122__$1 = (((((!((map__117122 == null))))?(((((map__117122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__117122):map__117122);
var account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117122__$1,new cljs.core.Keyword(null,"account","account",718006320));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__117124 = params__52359__auto__;
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117124,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-account","set-account",1327453416),account], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/account/:account",action__52358__auto___117200);

var action__52358__auto___117201 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__117127 = params__52359__auto__;
var map__117127__$1 = (((((!((map__117127 == null))))?(((((map__117127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__117127):map__117127);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117127__$1,new cljs.core.Keyword(null,"address","address",559499426));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__117129 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117129,(0),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(30)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address",action__52358__auto___117201);

var action__52358__auto___117202 = (function (params__52359__auto__){
if(cljs.core.map_QMARK_(params__52359__auto__)){
var map__117132 = params__52359__auto__;
var map__117132__$1 = (((((!((map__117132 == null))))?(((((map__117132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__117132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__117132):map__117132);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117132__$1,new cljs.core.Keyword(null,"address","address",559499426));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117132__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e117134){if((e117134 instanceof Error)){
var err = e117134;
return (30);
} else {
throw e117134;

}
}})()], null));
} else {
if(cljs.core.vector_QMARK_(params__52359__auto__)){
var vec__117135 = params__52359__auto__;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117135,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117135,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pool","set-pool",1846593914),address,(function (){try{return revert.utils.str__GT_int(days);
}catch (e117138){if((e117138 instanceof Error)){
var err = e117138;
return (30);
} else {
throw e117138;

}
}})()], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/pool/:address/:days",action__52358__auto___117202);

if((typeof revert !== 'undefined') && (typeof revert.core !== 'undefined') && (typeof revert.core.history !== 'undefined')){
} else {
revert.core.history = (function (){var G__117139 = (new goog.History());
goog.events.listen(G__117139,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__117139.setEnabled(true);

return G__117139;
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
}catch (e117140){if((e117140 instanceof Error)){
var err = e117140;
return console.log("disableAll not available");
} else {
throw e117140;

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
