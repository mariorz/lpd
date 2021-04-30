goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5753__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5753__auto__)){
var network_js = temp__5753__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5753__auto___57360 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5753__auto___57360)){
var app_db_reaction_57361 = temp__5753__auto___57360;
re_frisk.subs_graph.set_root_node(app_db_reaction_57361);
} else {
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__56861_57362 = cljs.core.seq(traces);
var chunk__56862_57363 = null;
var count__56863_57364 = (0);
var i__56864_57365 = (0);
while(true){
if((i__56864_57365 < count__56863_57364)){
var map__57092_57366 = chunk__56862_57363.cljs$core$IIndexed$_nth$arity$2(null,i__56864_57365);
var map__57092_57367__$1 = (((((!((map__57092_57366 == null))))?(((((map__57092_57366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57092_57366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57092_57366):map__57092_57366);
var subs_57368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57092_57367__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__57094_57369 = cljs.core.seq(subs_57368);
var chunk__57095_57370 = null;
var count__57096_57371 = (0);
var i__57097_57372 = (0);
while(true){
if((i__57097_57372 < count__57096_57371)){
var map__57132_57373 = chunk__57095_57370.cljs$core$IIndexed$_nth$arity$2(null,i__57097_57372);
var map__57132_57374__$1 = (((((!((map__57132_57373 == null))))?(((((map__57132_57373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57132_57373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57132_57373):map__57132_57373);
var op_type_57375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57132_57374__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_57376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57132_57374__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_57377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57132_57374__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_57378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57132_57374__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___57379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_57376);
if(cljs.core.truth_(temp__5751__auto___57379)){
var old_reaction_57380 = temp__5751__auto___57379;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_57375,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_57380))){
var updated_node_57381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_57380,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57375,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57375)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57376,updated_node_57381);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_57381], null)));
} else {
}
} else {
}
} else {
var data_57382 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_57376,new cljs.core.Keyword(null,"label","label",1718410804),operation_57378,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57375)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57375], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57376,data_57382);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_57382);
}

if(cljs.core.truth_(input_signals_57377)){
var seq__57140_57383 = cljs.core.seq(input_signals_57377);
var chunk__57141_57384 = null;
var count__57142_57385 = (0);
var i__57143_57386 = (0);
while(true){
if((i__57143_57386 < count__57142_57385)){
var input_reaction_57387 = chunk__57141_57384.cljs$core$IIndexed$_nth$arity$2(null,i__57143_57386);
var reaction_path_57388 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57387),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57376)].join('');
var temp__5751__auto___57389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57388);
if(cljs.core.truth_(temp__5751__auto___57389)){
var old_edge_57391 = temp__5751__auto___57389;
var updated_edge_57393 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57391,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57388,updated_edge_57393);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57393], null)));
} else {
}
} else {
var data_57395 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57388,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57387,new cljs.core.Keyword(null,"to","to",192099007),reaction_57376,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57388,data_57395);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57395));
} else {
}
}


var G__57399 = seq__57140_57383;
var G__57400 = chunk__57141_57384;
var G__57401 = count__57142_57385;
var G__57402 = (i__57143_57386 + (1));
seq__57140_57383 = G__57399;
chunk__57141_57384 = G__57400;
count__57142_57385 = G__57401;
i__57143_57386 = G__57402;
continue;
} else {
var temp__5753__auto___57403 = cljs.core.seq(seq__57140_57383);
if(temp__5753__auto___57403){
var seq__57140_57404__$1 = temp__5753__auto___57403;
if(cljs.core.chunked_seq_QMARK_(seq__57140_57404__$1)){
var c__4556__auto___57405 = cljs.core.chunk_first(seq__57140_57404__$1);
var G__57406 = cljs.core.chunk_rest(seq__57140_57404__$1);
var G__57407 = c__4556__auto___57405;
var G__57408 = cljs.core.count(c__4556__auto___57405);
var G__57409 = (0);
seq__57140_57383 = G__57406;
chunk__57141_57384 = G__57407;
count__57142_57385 = G__57408;
i__57143_57386 = G__57409;
continue;
} else {
var input_reaction_57410 = cljs.core.first(seq__57140_57404__$1);
var reaction_path_57413 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57410),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57376)].join('');
var temp__5751__auto___57414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57413);
if(cljs.core.truth_(temp__5751__auto___57414)){
var old_edge_57415 = temp__5751__auto___57414;
var updated_edge_57416 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57415,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57413,updated_edge_57416);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57416], null)));
} else {
}
} else {
var data_57417 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57413,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57410,new cljs.core.Keyword(null,"to","to",192099007),reaction_57376,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57413,data_57417);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57417));
} else {
}
}


var G__57424 = cljs.core.next(seq__57140_57404__$1);
var G__57425 = null;
var G__57426 = (0);
var G__57427 = (0);
seq__57140_57383 = G__57424;
chunk__57141_57384 = G__57425;
count__57142_57385 = G__57426;
i__57143_57386 = G__57427;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__57428 = seq__57094_57369;
var G__57429 = chunk__57095_57370;
var G__57430 = count__57096_57371;
var G__57431 = (i__57097_57372 + (1));
seq__57094_57369 = G__57428;
chunk__57095_57370 = G__57429;
count__57096_57371 = G__57430;
i__57097_57372 = G__57431;
continue;
} else {
var temp__5753__auto___57433 = cljs.core.seq(seq__57094_57369);
if(temp__5753__auto___57433){
var seq__57094_57434__$1 = temp__5753__auto___57433;
if(cljs.core.chunked_seq_QMARK_(seq__57094_57434__$1)){
var c__4556__auto___57435 = cljs.core.chunk_first(seq__57094_57434__$1);
var G__57436 = cljs.core.chunk_rest(seq__57094_57434__$1);
var G__57437 = c__4556__auto___57435;
var G__57438 = cljs.core.count(c__4556__auto___57435);
var G__57439 = (0);
seq__57094_57369 = G__57436;
chunk__57095_57370 = G__57437;
count__57096_57371 = G__57438;
i__57097_57372 = G__57439;
continue;
} else {
var map__57156_57440 = cljs.core.first(seq__57094_57434__$1);
var map__57156_57441__$1 = (((((!((map__57156_57440 == null))))?(((((map__57156_57440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57156_57440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57156_57440):map__57156_57440);
var op_type_57442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156_57441__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_57443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156_57441__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_57444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156_57441__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_57445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57156_57441__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___57453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_57443);
if(cljs.core.truth_(temp__5751__auto___57453)){
var old_reaction_57454 = temp__5751__auto___57453;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_57442,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_57454))){
var updated_node_57455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_57454,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57442,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57442)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57443,updated_node_57455);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_57455], null)));
} else {
}
} else {
}
} else {
var data_57459 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_57443,new cljs.core.Keyword(null,"label","label",1718410804),operation_57445,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57442)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57442], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57443,data_57459);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_57459);
}

if(cljs.core.truth_(input_signals_57444)){
var seq__57163_57460 = cljs.core.seq(input_signals_57444);
var chunk__57164_57461 = null;
var count__57165_57462 = (0);
var i__57166_57463 = (0);
while(true){
if((i__57166_57463 < count__57165_57462)){
var input_reaction_57464 = chunk__57164_57461.cljs$core$IIndexed$_nth$arity$2(null,i__57166_57463);
var reaction_path_57465 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57464),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57443)].join('');
var temp__5751__auto___57466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57465);
if(cljs.core.truth_(temp__5751__auto___57466)){
var old_edge_57467 = temp__5751__auto___57466;
var updated_edge_57468 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57467,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57465,updated_edge_57468);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57468], null)));
} else {
}
} else {
var data_57475 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57465,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57464,new cljs.core.Keyword(null,"to","to",192099007),reaction_57443,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57465,data_57475);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57475));
} else {
}
}


var G__57476 = seq__57163_57460;
var G__57477 = chunk__57164_57461;
var G__57478 = count__57165_57462;
var G__57479 = (i__57166_57463 + (1));
seq__57163_57460 = G__57476;
chunk__57164_57461 = G__57477;
count__57165_57462 = G__57478;
i__57166_57463 = G__57479;
continue;
} else {
var temp__5753__auto___57480__$1 = cljs.core.seq(seq__57163_57460);
if(temp__5753__auto___57480__$1){
var seq__57163_57481__$1 = temp__5753__auto___57480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57163_57481__$1)){
var c__4556__auto___57482 = cljs.core.chunk_first(seq__57163_57481__$1);
var G__57483 = cljs.core.chunk_rest(seq__57163_57481__$1);
var G__57484 = c__4556__auto___57482;
var G__57485 = cljs.core.count(c__4556__auto___57482);
var G__57486 = (0);
seq__57163_57460 = G__57483;
chunk__57164_57461 = G__57484;
count__57165_57462 = G__57485;
i__57166_57463 = G__57486;
continue;
} else {
var input_reaction_57487 = cljs.core.first(seq__57163_57481__$1);
var reaction_path_57488 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57487),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57443)].join('');
var temp__5751__auto___57489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57488);
if(cljs.core.truth_(temp__5751__auto___57489)){
var old_edge_57490 = temp__5751__auto___57489;
var updated_edge_57491 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57490,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57488,updated_edge_57491);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57491], null)));
} else {
}
} else {
var data_57492 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57488,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57487,new cljs.core.Keyword(null,"to","to",192099007),reaction_57443,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57488,data_57492);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57492));
} else {
}
}


var G__57494 = cljs.core.next(seq__57163_57481__$1);
var G__57495 = null;
var G__57496 = (0);
var G__57497 = (0);
seq__57163_57460 = G__57494;
chunk__57164_57461 = G__57495;
count__57165_57462 = G__57496;
i__57166_57463 = G__57497;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__57498 = cljs.core.next(seq__57094_57434__$1);
var G__57499 = null;
var G__57500 = (0);
var G__57501 = (0);
seq__57094_57369 = G__57498;
chunk__57095_57370 = G__57499;
count__57096_57371 = G__57500;
i__57097_57372 = G__57501;
continue;
}
} else {
}
}
break;
}


var G__57502 = seq__56861_57362;
var G__57503 = chunk__56862_57363;
var G__57504 = count__56863_57364;
var G__57505 = (i__56864_57365 + (1));
seq__56861_57362 = G__57502;
chunk__56862_57363 = G__57503;
count__56863_57364 = G__57504;
i__56864_57365 = G__57505;
continue;
} else {
var temp__5753__auto___57508 = cljs.core.seq(seq__56861_57362);
if(temp__5753__auto___57508){
var seq__56861_57509__$1 = temp__5753__auto___57508;
if(cljs.core.chunked_seq_QMARK_(seq__56861_57509__$1)){
var c__4556__auto___57510 = cljs.core.chunk_first(seq__56861_57509__$1);
var G__57511 = cljs.core.chunk_rest(seq__56861_57509__$1);
var G__57512 = c__4556__auto___57510;
var G__57513 = cljs.core.count(c__4556__auto___57510);
var G__57514 = (0);
seq__56861_57362 = G__57511;
chunk__56862_57363 = G__57512;
count__56863_57364 = G__57513;
i__56864_57365 = G__57514;
continue;
} else {
var map__57177_57515 = cljs.core.first(seq__56861_57509__$1);
var map__57177_57516__$1 = (((((!((map__57177_57515 == null))))?(((((map__57177_57515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57177_57515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57177_57515):map__57177_57515);
var subs_57517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57177_57516__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__57179_57519 = cljs.core.seq(subs_57517);
var chunk__57180_57520 = null;
var count__57181_57521 = (0);
var i__57182_57522 = (0);
while(true){
if((i__57182_57522 < count__57181_57521)){
var map__57238_57525 = chunk__57180_57520.cljs$core$IIndexed$_nth$arity$2(null,i__57182_57522);
var map__57238_57526__$1 = (((((!((map__57238_57525 == null))))?(((((map__57238_57525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57238_57525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57238_57525):map__57238_57525);
var op_type_57527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57238_57526__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_57528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57238_57526__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_57529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57238_57526__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_57530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57238_57526__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___57531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_57528);
if(cljs.core.truth_(temp__5751__auto___57531)){
var old_reaction_57534 = temp__5751__auto___57531;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_57527,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_57534))){
var updated_node_57535 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_57534,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57527,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57527)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57528,updated_node_57535);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_57535], null)));
} else {
}
} else {
}
} else {
var data_57537 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_57528,new cljs.core.Keyword(null,"label","label",1718410804),operation_57530,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57527)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57527], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57528,data_57537);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_57537);
}

if(cljs.core.truth_(input_signals_57529)){
var seq__57240_57540 = cljs.core.seq(input_signals_57529);
var chunk__57241_57541 = null;
var count__57242_57542 = (0);
var i__57243_57543 = (0);
while(true){
if((i__57243_57543 < count__57242_57542)){
var input_reaction_57544 = chunk__57241_57541.cljs$core$IIndexed$_nth$arity$2(null,i__57243_57543);
var reaction_path_57545 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57544),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57528)].join('');
var temp__5751__auto___57549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57545);
if(cljs.core.truth_(temp__5751__auto___57549)){
var old_edge_57550 = temp__5751__auto___57549;
var updated_edge_57551 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57550,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57545,updated_edge_57551);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57551], null)));
} else {
}
} else {
var data_57552 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57545,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57544,new cljs.core.Keyword(null,"to","to",192099007),reaction_57528,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57545,data_57552);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57552));
} else {
}
}


var G__57556 = seq__57240_57540;
var G__57557 = chunk__57241_57541;
var G__57558 = count__57242_57542;
var G__57559 = (i__57243_57543 + (1));
seq__57240_57540 = G__57556;
chunk__57241_57541 = G__57557;
count__57242_57542 = G__57558;
i__57243_57543 = G__57559;
continue;
} else {
var temp__5753__auto___57561__$1 = cljs.core.seq(seq__57240_57540);
if(temp__5753__auto___57561__$1){
var seq__57240_57562__$1 = temp__5753__auto___57561__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57240_57562__$1)){
var c__4556__auto___57563 = cljs.core.chunk_first(seq__57240_57562__$1);
var G__57564 = cljs.core.chunk_rest(seq__57240_57562__$1);
var G__57565 = c__4556__auto___57563;
var G__57566 = cljs.core.count(c__4556__auto___57563);
var G__57567 = (0);
seq__57240_57540 = G__57564;
chunk__57241_57541 = G__57565;
count__57242_57542 = G__57566;
i__57243_57543 = G__57567;
continue;
} else {
var input_reaction_57568 = cljs.core.first(seq__57240_57562__$1);
var reaction_path_57569 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57568),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57528)].join('');
var temp__5751__auto___57570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57569);
if(cljs.core.truth_(temp__5751__auto___57570)){
var old_edge_57571 = temp__5751__auto___57570;
var updated_edge_57572 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57571,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57569,updated_edge_57572);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57572], null)));
} else {
}
} else {
var data_57573 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57569,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57568,new cljs.core.Keyword(null,"to","to",192099007),reaction_57528,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57569,data_57573);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57573));
} else {
}
}


var G__57574 = cljs.core.next(seq__57240_57562__$1);
var G__57575 = null;
var G__57576 = (0);
var G__57577 = (0);
seq__57240_57540 = G__57574;
chunk__57241_57541 = G__57575;
count__57242_57542 = G__57576;
i__57243_57543 = G__57577;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__57579 = seq__57179_57519;
var G__57580 = chunk__57180_57520;
var G__57581 = count__57181_57521;
var G__57582 = (i__57182_57522 + (1));
seq__57179_57519 = G__57579;
chunk__57180_57520 = G__57580;
count__57181_57521 = G__57581;
i__57182_57522 = G__57582;
continue;
} else {
var temp__5753__auto___57584__$1 = cljs.core.seq(seq__57179_57519);
if(temp__5753__auto___57584__$1){
var seq__57179_57585__$1 = temp__5753__auto___57584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57179_57585__$1)){
var c__4556__auto___57586 = cljs.core.chunk_first(seq__57179_57585__$1);
var G__57587 = cljs.core.chunk_rest(seq__57179_57585__$1);
var G__57588 = c__4556__auto___57586;
var G__57589 = cljs.core.count(c__4556__auto___57586);
var G__57590 = (0);
seq__57179_57519 = G__57587;
chunk__57180_57520 = G__57588;
count__57181_57521 = G__57589;
i__57182_57522 = G__57590;
continue;
} else {
var map__57264_57591 = cljs.core.first(seq__57179_57585__$1);
var map__57264_57592__$1 = (((((!((map__57264_57591 == null))))?(((((map__57264_57591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57264_57591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57264_57591):map__57264_57591);
var op_type_57593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264_57592__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_57594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264_57592__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_57595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264_57592__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_57596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57264_57592__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___57597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_57594);
if(cljs.core.truth_(temp__5751__auto___57597)){
var old_reaction_57598 = temp__5751__auto___57597;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_57593,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_57598))){
var updated_node_57599 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_57598,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57593,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57593)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57594,updated_node_57599);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_57599], null)));
} else {
}
} else {
}
} else {
var data_57600 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_57594,new cljs.core.Keyword(null,"label","label",1718410804),operation_57596,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57593)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57593], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_57594,data_57600);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_57600);
}

if(cljs.core.truth_(input_signals_57595)){
var seq__57266_57601 = cljs.core.seq(input_signals_57595);
var chunk__57267_57602 = null;
var count__57268_57603 = (0);
var i__57269_57604 = (0);
while(true){
if((i__57269_57604 < count__57268_57603)){
var input_reaction_57605 = chunk__57267_57602.cljs$core$IIndexed$_nth$arity$2(null,i__57269_57604);
var reaction_path_57606 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57605),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57594)].join('');
var temp__5751__auto___57607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57606);
if(cljs.core.truth_(temp__5751__auto___57607)){
var old_edge_57608 = temp__5751__auto___57607;
var updated_edge_57609 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57608,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57606,updated_edge_57609);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57609], null)));
} else {
}
} else {
var data_57610 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57606,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57605,new cljs.core.Keyword(null,"to","to",192099007),reaction_57594,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57606,data_57610);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57610));
} else {
}
}


var G__57614 = seq__57266_57601;
var G__57615 = chunk__57267_57602;
var G__57616 = count__57268_57603;
var G__57617 = (i__57269_57604 + (1));
seq__57266_57601 = G__57614;
chunk__57267_57602 = G__57615;
count__57268_57603 = G__57616;
i__57269_57604 = G__57617;
continue;
} else {
var temp__5753__auto___57619__$2 = cljs.core.seq(seq__57266_57601);
if(temp__5753__auto___57619__$2){
var seq__57266_57620__$1 = temp__5753__auto___57619__$2;
if(cljs.core.chunked_seq_QMARK_(seq__57266_57620__$1)){
var c__4556__auto___57621 = cljs.core.chunk_first(seq__57266_57620__$1);
var G__57622 = cljs.core.chunk_rest(seq__57266_57620__$1);
var G__57623 = c__4556__auto___57621;
var G__57624 = cljs.core.count(c__4556__auto___57621);
var G__57625 = (0);
seq__57266_57601 = G__57622;
chunk__57267_57602 = G__57623;
count__57268_57603 = G__57624;
i__57269_57604 = G__57625;
continue;
} else {
var input_reaction_57627 = cljs.core.first(seq__57266_57620__$1);
var reaction_path_57628 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57627),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57594)].join('');
var temp__5751__auto___57629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_57628);
if(cljs.core.truth_(temp__5751__auto___57629)){
var old_edge_57630 = temp__5751__auto___57629;
var updated_edge_57631 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_57630,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57628,updated_edge_57631);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_57631], null)));
} else {
}
} else {
var data_57635 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_57628,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57627,new cljs.core.Keyword(null,"to","to",192099007),reaction_57594,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_57628,data_57635);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_57635));
} else {
}
}


var G__57637 = cljs.core.next(seq__57266_57620__$1);
var G__57638 = null;
var G__57639 = (0);
var G__57640 = (0);
seq__57266_57601 = G__57637;
chunk__57267_57602 = G__57638;
count__57268_57603 = G__57639;
i__57269_57604 = G__57640;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__57642 = cljs.core.next(seq__57179_57585__$1);
var G__57643 = null;
var G__57644 = (0);
var G__57645 = (0);
seq__57179_57519 = G__57642;
chunk__57180_57520 = G__57643;
count__57181_57521 = G__57644;
i__57182_57522 = G__57645;
continue;
}
} else {
}
}
break;
}


var G__57646 = cljs.core.next(seq__56861_57509__$1);
var G__57647 = null;
var G__57648 = (0);
var G__57649 = (0);
seq__56861_57362 = G__57646;
chunk__56862_57363 = G__57647;
count__56863_57364 = G__57648;
i__56864_57365 = G__57649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__57283 = cljs.core.seq(cljs.core.deref(new_nodes));
var chunk__57284 = null;
var count__57285 = (0);
var i__57286 = (0);
while(true){
if((i__57286 < count__57285)){
var data = chunk__57284.cljs$core$IIndexed$_nth$arity$2(null,i__57286);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__57650 = seq__57283;
var G__57651 = chunk__57284;
var G__57652 = count__57285;
var G__57653 = (i__57286 + (1));
seq__57283 = G__57650;
chunk__57284 = G__57651;
count__57285 = G__57652;
i__57286 = G__57653;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57283);
if(temp__5753__auto__){
var seq__57283__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57283__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57283__$1);
var G__57660 = cljs.core.chunk_rest(seq__57283__$1);
var G__57661 = c__4556__auto__;
var G__57662 = cljs.core.count(c__4556__auto__);
var G__57663 = (0);
seq__57283 = G__57660;
chunk__57284 = G__57661;
count__57285 = G__57662;
i__57286 = G__57663;
continue;
} else {
var data = cljs.core.first(seq__57283__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__57667 = cljs.core.next(seq__57283__$1);
var G__57668 = null;
var G__57669 = (0);
var G__57670 = (0);
seq__57283 = G__57667;
chunk__57284 = G__57668;
count__57285 = G__57669;
i__57286 = G__57670;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__57291){
var map__57292 = p__57291;
var map__57292__$1 = (((((!((map__57292 == null))))?(((((map__57292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57292):map__57292);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57292__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57292__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__57294_57672 = cljs.core.seq(subs);
var chunk__57295_57673 = null;
var count__57296_57674 = (0);
var i__57297_57675 = (0);
while(true){
if((i__57297_57675 < count__57296_57674)){
var map__57319_57677 = chunk__57295_57673.cljs$core$IIndexed$_nth$arity$2(null,i__57297_57675);
var map__57319_57678__$1 = (((((!((map__57319_57677 == null))))?(((((map__57319_57677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57319_57677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57319_57677):map__57319_57677);
var op_type_57679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57319_57678__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_57680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57319_57678__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_57681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57319_57678__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_57682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57319_57678__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___57683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_57680);
if(cljs.core.truth_(temp__5751__auto___57683)){
var old_reaction_57684 = temp__5751__auto___57683;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_57679,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_57684))){
var updated_node_57685 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_57684,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57679,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57679)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_57680,updated_node_57685);
} else {
}
} else {
var data_57686 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_57680,new cljs.core.Keyword(null,"label","label",1718410804),operation_57682,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57679)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57679], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_57680,data_57686);
}

if(cljs.core.truth_(input_signals_57681)){
var seq__57321_57687 = cljs.core.seq(input_signals_57681);
var chunk__57322_57688 = null;
var count__57323_57689 = (0);
var i__57324_57690 = (0);
while(true){
if((i__57324_57690 < count__57323_57689)){
var input_reaction_57691 = chunk__57322_57688.cljs$core$IIndexed$_nth$arity$2(null,i__57324_57690);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57691),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57680)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57691),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57680)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57691,new cljs.core.Keyword(null,"to","to",192099007),reaction_57680], null));
}


var G__57692 = seq__57321_57687;
var G__57693 = chunk__57322_57688;
var G__57694 = count__57323_57689;
var G__57695 = (i__57324_57690 + (1));
seq__57321_57687 = G__57692;
chunk__57322_57688 = G__57693;
count__57323_57689 = G__57694;
i__57324_57690 = G__57695;
continue;
} else {
var temp__5753__auto___57696__$1 = cljs.core.seq(seq__57321_57687);
if(temp__5753__auto___57696__$1){
var seq__57321_57697__$1 = temp__5753__auto___57696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57321_57697__$1)){
var c__4556__auto___57698 = cljs.core.chunk_first(seq__57321_57697__$1);
var G__57699 = cljs.core.chunk_rest(seq__57321_57697__$1);
var G__57700 = c__4556__auto___57698;
var G__57701 = cljs.core.count(c__4556__auto___57698);
var G__57702 = (0);
seq__57321_57687 = G__57699;
chunk__57322_57688 = G__57700;
count__57323_57689 = G__57701;
i__57324_57690 = G__57702;
continue;
} else {
var input_reaction_57703 = cljs.core.first(seq__57321_57697__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57703),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57680)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57703),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57680)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57703,new cljs.core.Keyword(null,"to","to",192099007),reaction_57680], null));
}


var G__57704 = cljs.core.next(seq__57321_57697__$1);
var G__57705 = null;
var G__57706 = (0);
var G__57707 = (0);
seq__57321_57687 = G__57704;
chunk__57322_57688 = G__57705;
count__57323_57689 = G__57706;
i__57324_57690 = G__57707;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__57708 = seq__57294_57672;
var G__57709 = chunk__57295_57673;
var G__57710 = count__57296_57674;
var G__57711 = (i__57297_57675 + (1));
seq__57294_57672 = G__57708;
chunk__57295_57673 = G__57709;
count__57296_57674 = G__57710;
i__57297_57675 = G__57711;
continue;
} else {
var temp__5753__auto___57714__$1 = cljs.core.seq(seq__57294_57672);
if(temp__5753__auto___57714__$1){
var seq__57294_57715__$1 = temp__5753__auto___57714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57294_57715__$1)){
var c__4556__auto___57718 = cljs.core.chunk_first(seq__57294_57715__$1);
var G__57726 = cljs.core.chunk_rest(seq__57294_57715__$1);
var G__57727 = c__4556__auto___57718;
var G__57728 = cljs.core.count(c__4556__auto___57718);
var G__57729 = (0);
seq__57294_57672 = G__57726;
chunk__57295_57673 = G__57727;
count__57296_57674 = G__57728;
i__57297_57675 = G__57729;
continue;
} else {
var map__57336_57730 = cljs.core.first(seq__57294_57715__$1);
var map__57336_57731__$1 = (((((!((map__57336_57730 == null))))?(((((map__57336_57730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57336_57730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57336_57730):map__57336_57730);
var op_type_57732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336_57731__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_57733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336_57731__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_57734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336_57731__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_57735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336_57731__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___57736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_57733);
if(cljs.core.truth_(temp__5751__auto___57736)){
var old_reaction_57737 = temp__5751__auto___57736;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_57732,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_57737))){
var updated_node_57738 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_57737,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57732,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57732)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_57733,updated_node_57738);
} else {
}
} else {
var data_57746 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_57733,new cljs.core.Keyword(null,"label","label",1718410804),operation_57735,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_57732)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_57732], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_57733,data_57746);
}

if(cljs.core.truth_(input_signals_57734)){
var seq__57344_57754 = cljs.core.seq(input_signals_57734);
var chunk__57345_57755 = null;
var count__57346_57756 = (0);
var i__57347_57757 = (0);
while(true){
if((i__57347_57757 < count__57346_57756)){
var input_reaction_57758 = chunk__57345_57755.cljs$core$IIndexed$_nth$arity$2(null,i__57347_57757);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57758),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57733)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57758),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57733)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57758,new cljs.core.Keyword(null,"to","to",192099007),reaction_57733], null));
}


var G__57759 = seq__57344_57754;
var G__57760 = chunk__57345_57755;
var G__57761 = count__57346_57756;
var G__57762 = (i__57347_57757 + (1));
seq__57344_57754 = G__57759;
chunk__57345_57755 = G__57760;
count__57346_57756 = G__57761;
i__57347_57757 = G__57762;
continue;
} else {
var temp__5753__auto___57763__$2 = cljs.core.seq(seq__57344_57754);
if(temp__5753__auto___57763__$2){
var seq__57344_57764__$1 = temp__5753__auto___57763__$2;
if(cljs.core.chunked_seq_QMARK_(seq__57344_57764__$1)){
var c__4556__auto___57765 = cljs.core.chunk_first(seq__57344_57764__$1);
var G__57766 = cljs.core.chunk_rest(seq__57344_57764__$1);
var G__57767 = c__4556__auto___57765;
var G__57768 = cljs.core.count(c__4556__auto___57765);
var G__57769 = (0);
seq__57344_57754 = G__57766;
chunk__57345_57755 = G__57767;
count__57346_57756 = G__57768;
i__57347_57757 = G__57769;
continue;
} else {
var input_reaction_57770 = cljs.core.first(seq__57344_57764__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57770),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57733)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_57770),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_57733)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_57770,new cljs.core.Keyword(null,"to","to",192099007),reaction_57733], null));
}


var G__57771 = cljs.core.next(seq__57344_57764__$1);
var G__57772 = null;
var G__57773 = (0);
var G__57774 = (0);
seq__57344_57754 = G__57771;
chunk__57345_57755 = G__57772;
count__57346_57756 = G__57773;
i__57347_57757 = G__57774;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__57775 = cljs.core.next(seq__57294_57715__$1);
var G__57776 = null;
var G__57777 = (0);
var G__57778 = (0);
seq__57294_57672 = G__57775;
chunk__57295_57673 = G__57776;
count__57296_57674 = G__57777;
i__57297_57675 = G__57778;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
