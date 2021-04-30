goog.provide('revert.common_views');
var module$node_modules$react_sparklines$build$index=shadow.js.require("module$node_modules$react_sparklines$build$index", {});
revert.common_views.show_provider_modal = (function revert$common_views$show_provider_modal(){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87238){
var state_val_87239 = (state_87238[(1)]);
if((state_val_87239 === (1))){
var inst_87203 = revert.ethereum.select_provider();
var state_87238__$1 = state_87238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87238__$1,(2),inst_87203);
} else {
if((state_val_87239 === (2))){
var inst_87207 = (state_87238[(7)]);
var inst_87207__$1 = (state_87238[(2)]);
var inst_87222 = (inst_87207__$1 == null);
var inst_87223 = cljs.core.not(inst_87222);
var state_87238__$1 = (function (){var statearr_87243 = state_87238;
(statearr_87243[(7)] = inst_87207__$1);

return statearr_87243;
})();
if(inst_87223){
var statearr_87245_87406 = state_87238__$1;
(statearr_87245_87406[(1)] = (3));

} else {
var statearr_87247_87407 = state_87238__$1;
(statearr_87247_87407[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87239 === (3))){
var inst_87207 = (state_87238[(7)]);
var inst_87232 = ["/account/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_87207)].join('');
var inst_87233 = revert.utils.set_hash_BANG_(inst_87232);
var state_87238__$1 = state_87238;
var statearr_87251_87410 = state_87238__$1;
(statearr_87251_87410[(2)] = inst_87233);

(statearr_87251_87410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87239 === (4))){
var state_87238__$1 = state_87238;
var statearr_87256_87414 = state_87238__$1;
(statearr_87256_87414[(2)] = null);

(statearr_87256_87414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87239 === (5))){
var inst_87236 = (state_87238[(2)]);
var state_87238__$1 = state_87238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87238__$1,inst_87236);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$common_views$show_provider_modal_$_state_machine__52186__auto__ = null;
var revert$common_views$show_provider_modal_$_state_machine__52186__auto____0 = (function (){
var statearr_87259 = [null,null,null,null,null,null,null,null];
(statearr_87259[(0)] = revert$common_views$show_provider_modal_$_state_machine__52186__auto__);

(statearr_87259[(1)] = (1));

return statearr_87259;
});
var revert$common_views$show_provider_modal_$_state_machine__52186__auto____1 = (function (state_87238){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87238);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87264){var ex__52189__auto__ = e87264;
var statearr_87266_87425 = state_87238;
(statearr_87266_87425[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87238[(4)]))){
var statearr_87269_87427 = state_87238;
(statearr_87269_87427[(1)] = cljs.core.first((state_87238[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87428 = state_87238;
state_87238 = G__87428;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$common_views$show_provider_modal_$_state_machine__52186__auto__ = function(state_87238){
switch(arguments.length){
case 0:
return revert$common_views$show_provider_modal_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$common_views$show_provider_modal_$_state_machine__52186__auto____1.call(this,state_87238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$common_views$show_provider_modal_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$common_views$show_provider_modal_$_state_machine__52186__auto____0;
revert$common_views$show_provider_modal_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$common_views$show_provider_modal_$_state_machine__52186__auto____1;
return revert$common_views$show_provider_modal_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87279 = f__52209__auto__();
(statearr_87279[(6)] = c__52208__auto__);

return statearr_87279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.common_views.connecting_component = (function revert$common_views$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account",new cljs.core.Keyword(null,"class","class",-2030961996),"connect",new cljs.core.Keyword(null,"id","id",-1388402092),"connect-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect-account","connect-account",719884578)], null));
})], null)], null)], null);
});
revert.common_views.site_header = (function revert$common_views$site_header(){
var connected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connected","connected",-169833045)], null)));
var account = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app-inner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/Logo.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"connect"], null),((cljs.core.not(connected))?revert.common_views.connecting_component():[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(account,(0),(7)),"...",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(account,(cljs.core.count(account) - (4)))].join(''))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"top-line"], null)], null)], null);
});
revert.common_views.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
revert.common_views.spark_line_bars = (function revert$common_views$spark_line_bars(series){
if((cljs.core.count(series) > (1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.take_last((30),series)).toNumber().toLocaleString("en-US",({"style": "currency", "currency": "USD"})))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$react_sparklines$build$index.Sparklines),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(25),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.take_last((30),series)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$react_sparklines$build$index.SparklinesBars)], null)], null)], null);
} else {
return null;
}
});
revert.common_views.spark_line = (function revert$common_views$spark_line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___87461 = arguments.length;
var i__4737__auto___87465 = (0);
while(true){
if((i__4737__auto___87465 < len__4736__auto___87461)){
args__4742__auto__.push((arguments[i__4737__auto___87465]));

var G__87468 = (i__4737__auto___87465 + (1));
i__4737__auto___87465 = G__87468;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return revert.common_views.spark_line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(revert.common_views.spark_line.cljs$core$IFn$_invoke$arity$variadic = (function (series,p__87368){
var map__87370 = p__87368;
var map__87370__$1 = (((((!((map__87370 == null))))?(((((map__87370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87370):map__87370);
var currency = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__87370__$1,new cljs.core.Keyword(null,"currency","currency",-898327568),false);
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__87370__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),false);
var series_SINGLEQUOTE_ = cljs.core.take_last((30),series);
var refvalue = cljs.core.first(series_SINGLEQUOTE_);
var max_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,series_SINGLEQUOTE_);
var min_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,series_SINGLEQUOTE_);
var margin = (4);
var height = (25);
var vfactorn = (height - (margin * (2)));
var vfactord = (max_value - min_value);
var vfactor = (vfactorn / vfactord);
var refval = (((max_value - refvalue) * vfactor) + margin);
if((cljs.core.count(series_SINGLEQUOTE_) > (1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(currency)?cljs.core.last(series_SINGLEQUOTE_).toNumber().toLocaleString("en-US",({"style": "currency", "currency": "USD"})):cljs.core.last(series_SINGLEQUOTE_).toNumber().toLocaleString())),(cljs.core.truth_(percentage)?"%":null)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$react_sparklines$build$index.Sparklines),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"data","data",-232669377),series_SINGLEQUOTE_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$react_sparklines$build$index.SparklinesLine),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"fill","fill",883462889),"#ccc"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$react_sparklines$build$index.SparklinesReferenceLine),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"custom",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),0.75,new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"2, 2"], null),new cljs.core.Keyword(null,"value","value",305978217),refval], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$react_sparklines$build$index.SparklinesSpots)], null)], null)], null);
} else {
return null;
}
}));

(revert.common_views.spark_line.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(revert.common_views.spark_line.cljs$lang$applyTo = (function (seq87361){
var G__87363 = cljs.core.first(seq87361);
var seq87361__$1 = cljs.core.next(seq87361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87363,seq87361__$1);
}));

revert.common_views.footer_links = (function revert$common_views$footer_links(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"landing-footer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text"], null),"REVERT \u00A9 2021"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"About"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/revertfinance",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Twitter"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/HXfxKHrRmf",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Discord"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://t.me/revert_finance",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Telegram"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://157lkj525va.typeform.com/to/L16U1psx",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Report"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer-text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://etherscan.io/address/0x8cadb20a4811f363dadb863a190708bed26245f8",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Support"], null)], null)], null)], null);
});

//# sourceMappingURL=revert.common_views.js.map
