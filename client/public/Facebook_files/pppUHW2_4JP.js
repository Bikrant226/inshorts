if (self.CavalryLogger) { CavalryLogger.start_js(["Fhob3qD"]); }

__d("CoplayDiscoveryContentContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3711499398971707",metadata:{live:{config_id:"comet_coplay_discovery_rooms_query"}},name:"CoplayDiscoveryContentContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingCoplayRejoinRoomModalContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3964182193665550",metadata:{},name:"CometGamingCoplayRejoinRoomModalContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingGamesRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4454812287886717",metadata:{},name:"CometGamingGamesRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4057390964340501",metadata:{},name:"CometGamingLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4099031310166595",metadata:{},name:"CometGamingVideoRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootHeroBannerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4131624830258358",metadata:{},name:"CometGamingVideoRootHeroBannerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3866730166752555",metadata:{},name:"CometGamingVideoGameHubHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4016240365156902",metadata:{},name:"CometGamingVideoGameHubRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamesHubStaticSectionsPostPlayQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4153189878037245",metadata:{},name:"CometGamesHubStaticSectionsPostPlayQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildCometGamingRoute.entrypoint",["CometGamingCoplayRejoinRoomModalContainerQuery$Parameters","CometGamingLeftRailContainerQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometGamingRoot.react").__setRef("buildCometGamingRoute.entrypoint"),function(a){return{coplayRejoinRoomModalQueryReference:{parameters:b("CometGamingCoplayRejoinRoomModalContainerQuery$Parameters"),variables:{}},leftRailQueryReference:{parameters:b("CometGamingLeftRailContainerQuery$Parameters"),variables:{include_recently_played:c("gkx")("1989101")}}}});g["default"]=a}),98);
__d("CometGamingGamesRoot.entrypoint",["CometGamesHubStaticSectionsPostPlayQuery$Parameters","CometGamingGamesRootQuery$Parameters","CoplayDiscoveryContentContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("WebPixelRatio").get(),i=35,j=c("gkx")("976093"),k=c("gkx")("1250838");a=c("buildCometGamingRoute.entrypoint")(c("JSResourceForInteraction")("CometGamingGamesRoot.react").__setRef("CometGamingGamesRoot.entrypoint"),function(a){var d=c("qex")._("39")===!0,e=a.routeParams.category,f=c("qex")._("428")===!0?e==null:e==null||e===400,g=a.routeProps.unit_qe_params,l=g.showEditorsChoice,m=g.showFeatured,n=g.showGameOfWeek,o=g.showGamesToRelax,p=g.showGetStarted,q=g.showHiddenGems,r=g.showNewAndUpdated,s=g.showTopDap;g=g.showTopPicks;m={extraProps:{category:e,launchedGameID:a.routeParams.launched_game_id,sessionID:a.routeParams.game_session_id,storeVisitSource:a.routeParams.store_visit_source},queries:{coplayDiscoveryQuery:{parameters:b("CoplayDiscoveryContentContainerQuery$Parameters"),variables:{is_logged_in:k}},gamesRootQuery:{parameters:b("CometGamingGamesRootQuery$Parameters"),variables:{can_see_achievements:a.routeParams.launched_game_id!=null&&((e=c("qex")._("178"))!=null?e:!1),first:i,game_type:a.routeParams.category,has_launched_game_id:a.routeParams.launched_game_id!=null,has_no_category:f,has_showcase_app_id:a.routeProps.showcase_game_id!=null,is_logged_out_with_no_category:j&&f,launched_game_id:(e=a.routeParams.launched_game_id)!=null?e:"0",nullable_launched_game_id:a.routeParams.launched_game_id,run_perf_fix_query:d,scale:h,show_editors_choice:l,show_featured:m,show_game_of_week:n,show_games_to_relax:o,show_get_started:p,show_hidden_gems:q,show_new_and_updated:r,show_top_dap:s,show_top_picks:g,showcase_app_id:(f=a.routeProps.showcase_game_id)!=null?f:"0",sort_type:"recommended"}},postPlayQuery:{parameters:b("CometGamesHubStaticSectionsPostPlayQuery$Parameters"),variables:{can_see_achievements:a.routeParams.launched_game_id!=null&&((e=c("qex")._("178"))!=null?e:!1),has_launched_game_id:a.routeParams.launched_game_id!=null,launched_game_id:(l=a.routeParams.launched_game_id)!=null?l:"0",nullable_launched_game_id:a.routeParams.launched_game_id,run_perf_fix_query:d}}}};d&&(m.queries.gamesRootQuery.variables.can_see_achievements=!1,m.queries.gamesRootQuery.variables.has_launched_game_id=!1,m.queries.gamesRootQuery.variables.launched_game_id="0",m.queries.gamesRootQuery.variables.nullable_launched_game_id=null);return m});g["default"]=a}),98);
__d("CometGamingWebGamesFullPageCompatRoot.entrypoint",["JSResourceForInteraction","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometGamingRoute.entrypoint")(c("JSResourceForInteraction")("CometFullPageEntryPointCompatRoot.react").__setRef("CometGamingWebGamesFullPageCompatRoot.entrypoint"),function(a){a=a.routeProps.maintainKey;return{extraProps:{routeProps:{maintainKey:a}}}});g["default"]=a}),98);
__d("CometGamingVideoRoot.entrypoint",["CometGamingVideoRootContentQuery$Parameters","CometGamingVideoRootHeroBannerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometGamingRoute.entrypoint")(c("JSResourceForInteraction")("CometGamingVideoRoot.react").__setRef("CometGamingVideoRoot.entrypoint"),function(a){a=a.routeParams;var c=d("WebPixelRatio").get();return{queries:{contentQueryReference:{parameters:b("CometGamingVideoRootContentQuery$Parameters"),variables:{scale:c}},heroBannerQueryReference:{parameters:b("CometGamingVideoRootHeroBannerQuery$Parameters"),variables:{videoID:a.video_id}}}}});g["default"]=a}),98);
__d("CometGamingVideoGameHubRoot.entrypoint",["CometGamingVideoGameHubHeaderQuery$Parameters","CometGamingVideoGameHubRootContentQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";var h=d("WebPixelRatio").get();a=c("buildCometGamingRoute.entrypoint")(c("JSResourceForInteraction")("CometGamingVideoGameHubRoot.react").__setRef("CometGamingVideoGameHubRoot.entrypoint"),function(a){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoGameHubRootContentQuery$Parameters"),variables:{game_id:a.routeProps.game_id,scale:h}},headerQueryReference:{parameters:b("CometGamingVideoGameHubHeaderQuery$Parameters"),variables:{params:{game_id:a.routeProps.game_id}}}}}});g["default"]=a}),98);