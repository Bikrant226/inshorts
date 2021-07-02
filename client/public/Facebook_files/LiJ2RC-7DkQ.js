if (self.CavalryLogger) { CavalryLogger.start_js(["BC6WxhD"]); }

__d("ProfileCometActionSearchProfileHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionSearchProfileHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[a],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionSearchProfileHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionSearchProfileHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionSearchProfileHandler",abstractKey:null};e.exports=a}),null);
__d("ProfileCometManageSectionsDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3895165277192815",metadata:{},name:"ProfileCometManageSectionsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometTabs_cometProfileTabs$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"tab_key",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometTabs_cometProfileTabs$normalization",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_user",plural:!1,selections:[{alias:null,args:null,concreteType:"WoodhengeCreatorInfo",kind:"LinkedField",name:"profile_plus_woodhenge_creator_info",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"viewer_subscription_tier",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mentions_tab_tooltip_nux_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{alias:null,args:null,concreteType:"MemorializedUserInfo",kind:"LinkedField",name:"memorialized_user_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_tributes_section",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"TimelineNavAppSectionsConnection",kind:"LinkedField",name:"timeline_nav_app_sections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineNavAppSectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TimelineAppSection",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayable_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"AllTimelineAppCollectionsConnection",kind:"LinkedField",name:"all_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineAppCollection",kind:"LinkedField",name:"nodes",plural:!0,selections:[b,a],storageKey:null}],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_currently_live",storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometTabs_cometProfileTabs.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"tab_key",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTabs_cometProfileTabs",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_user",plural:!1,selections:[{alias:null,args:null,concreteType:"WoodhengeCreatorInfo",kind:"LinkedField",name:"profile_plus_woodhenge_creator_info",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"viewer_subscription_tier",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mentions_tab_tooltip_nux_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{alias:null,args:null,concreteType:"MemorializedUserInfo",kind:"LinkedField",name:"memorialized_user_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_tributes_section",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TimelineNavAppSectionsConnection",kind:"LinkedField",name:"timeline_nav_app_sections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineNavAppSectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TimelineAppSection",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayable_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"AllTimelineAppCollectionsConnection",kind:"LinkedField",name:"all_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineAppCollection",kind:"LinkedField",name:"nodes",plural:!0,selections:[a],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_currently_live",storageKey:null}],storageKey:null}],type:"ProfileDefaultTabs",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometTabs_mentions_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTabs_mentions_nux",selections:[{args:null,kind:"FragmentSpread",name:"useMaybeNUX_nux"}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("CometUsersEntityScopedTypeaheadDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4122624657824558",metadata:{},name:"CometUsersEntityScopedTypeaheadDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometUsersEntityScopedTypeaheadDialog.entrypoint",["CometUsersEntityScopedTypeaheadDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.entityID;return{queries:{CometUsersEntityScopedTypeaheadDialogQueryRef:{parameters:b("CometUsersEntityScopedTypeaheadDialogQuery$Parameters"),variables:{entityID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometUsersEntityScopedTypeaheadDialog.react").__setRef("CometUsersEntityScopedTypeaheadDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometActionSearchProfileHandler.react",["CometRelay","CometUsersEntityScopedTypeaheadDialog.entrypoint","ProfileCometActionSearchProfileHandler_handler.graphql","react","unrecoverableViolation","useSearchCometResultsTypeaheadDialogTriggerClickHandler"],(function(a,b,c,d,e,f,g){"use strict";var h;d("react");function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionSearchProfileHandler_handler.graphql"),a.handler);a=a.children;e=(e=e.profile_action)==null?void 0:(e=e.profile_owner)==null?void 0:e.id;if(e==null)throw c("unrecoverableViolation")("No profile owner is available when attempting to render scoped search entry point","profile_comet");e=c("useSearchCometResultsTypeaheadDialogTriggerClickHandler")(c("CometUsersEntityScopedTypeaheadDialog.entrypoint"),e,"user");var f=e[0],g=e[1],i=e[2],j=e[3];e=e[4];return a({onHoverIn:i,onHoverOut:j,onPress:f,onPressIn:e,ref:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometManageSectionsDialog.entrypoint",["JSResourceForInteraction","ProfileCometManageSectionsDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{parameters:c("ProfileCometManageSectionsDialogQuery$Parameters"),variables:{id:a}}}}},root:c("JSResourceForInteraction")("ProfileCometManageSectionsDialog.react").__setRef("ProfileCometManageSectionsDialog.entrypoint")};g["default"]=a}),98);
__d("XCometProfileVanityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/",Object.freeze({show_switched_toast:!1,show_podcast_settings:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometProfileVanityTributesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/tributes/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/{sk}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityTimelineControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/timeline/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometVanityWoodhengeSupportersURLControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/supporters/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("ProfileCometURIUtils",["ProfileCometContext","XCometProfileControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","XCometVanityWoodhengeSupportersURLControllerRouteBuilder","react","unrecoverableViolation","useCurrentRouteEntityKey"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(a){var b=h(c("ProfileCometContext"));b=b.profileID;var d=c("useCurrentRouteEntityKey")();b=d!=null&&d.entity_type==="profile"&&d.entity_id===b&&d.section===a;return b}function b(){var a=h(c("ProfileCometContext")),b=a.profileID;a=a.profileVanity;if(a!=null&&a!=="")return c("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:a});if(b!=null)return c("XCometProfileControllerRouteBuilder").buildURL({id:b});throw new(c("unrecoverableViolation"))("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function e(a){var b=h(c("ProfileCometContext")),d=b.profileID;b=b.profileVanity;if(b!=null&&b!==""){if(a==="timeline")return c("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:b});if(a==="tributes")return c("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:b});return a==="supporters"?c("XCometVanityWoodhengeSupportersURLControllerRouteBuilder").buildURL({vanity:b}):c("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:b})}if(d!=null)return c("XCometProfileControllerRouteBuilder").buildURL({id:d,sk:a});throw new(c("unrecoverableViolation"))("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}g.useIsProfileSectionActive=a;g.useURIForProfile=b;g.useURIForProfileSection=e}),98);
__d("ProfileCometTabs.react",["fbt","CometBadge.react","CometEntityHeaderTabBar.react","CometRelay","ProfileCometContext","ProfileCometManageSectionsDialog.entrypoint","ProfileCometTabs_cometProfileTabs.graphql","ProfileCometTabs_mentions_nux.graphql","ProfileCometURIUtils","ProfileCometUtils","react","requireDeferred","useCometCallout","useCometEntityKey","useCometEntryPointDialog","useMaybeNUX","useProfileEngagementData"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react"),l=d("react").useContext,m=c("requireDeferred")("ProfileEngagementTypedLoggerLite").__setRef("ProfileCometTabs.react"),n={mentionsNux:{maxWidth:"nqmqzb3c"}};function a(a){var e,f=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometTabs_cometProfileTabs.graphql"),a.cometProfileTabs);a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometTabs_mentions_nux.graphql"),a.nux);f=f.profile_user;var g=l(c("ProfileCometContext")),o=g.profileID;g=g.viewerID;var p=c("useCometEntryPointDialog")(c("ProfileCometManageSectionsDialog.entrypoint"),{profileID:o},"button"),q=p[0];p[1];var r=p[2],s=p[3];p=p[4];var t=c("useProfileEngagementData")({engagement_type:"click",product_bucket:"nav_bar",subsurface:"nav_bar",surface:"timeline"}),u=d("ProfileCometUtils").isViewingSelfProfile(o,g);a=c("useMaybeNUX")(a);var v=a[0];a=a[1];e={arrowStyle:"inset",hasCloseButton:!0,label:(e=f==null?void 0:f.mentions_tab_tooltip_nux_text)!=null?e:"",onHide:a,position:"above",type:"accent",xstyle:n.mentionsNux};var w=c("useCometCallout")(e,(a=v)!=null?a:!1),x=(e=f==null?void 0:f.is_currently_live)!=null?e:!1;a=(v=f==null?void 0:f.is_viewer_friend)!=null?v:!1;v=(e=f==null?void 0:(e=f.wem_private_sharing_bundle)==null?void 0:(v=e.private_sharing_control_model_for_user)==null?void 0:v.private_sharing_enabled)!=null?e:!1;var y=!u&&v&&!a,z=(e=c("useCometEntityKey")())==null?void 0:e.section;v=d("ProfileCometURIUtils").useURIForProfile();a=(e=f==null?void 0:(a=f.memorialized_user_info)==null?void 0:a.has_tributes_section)!=null?e:!1;var A=(e=f==null?void 0:f.is_memorialized)!=null?e:!1,B=[];e=d("ProfileCometURIUtils").useURIForProfileSection("tributes");var C=d("ProfileCometURIUtils").useIsProfileSectionActive("tributes"),D=d("ProfileCometURIUtils").useURIForProfileSection("timeline"),E=d("ProfileCometURIUtils").useIsProfileSectionActive("timeline"),F=d("ProfileCometURIUtils").useIsProfileSectionActive("pretributestimeline"),G=d("ProfileCometURIUtils").useIsProfileSectionActive("grid"),H=d("ProfileCometURIUtils").useURIForProfileSection("supporters"),I=d("ProfileCometURIUtils").useIsProfileSectionActive("supporters");a&&B.push({isActive:function(){return C},label:h._("Tributes"),linkProps:{replace:!0,url:e},onPress:function(){m.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},t,{item_type:"tributes"}))})}});B.push({isActive:function(){return A?F:E||G},label:h._("Posts"),linkProps:{replace:!0,url:a?D:v},onPress:function(){m.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},t,{item_type:"timeline"}))})}});((f==null?void 0:(e=f.profile_plus_woodhenge_creator_info)==null?void 0:e.viewer_subscription_tier)!=null||u&&(f==null?void 0:f.profile_plus_woodhenge_creator_info)!=null)&&B.push({isActive:function(){return I},label:h._("Supporter hub"),linkProps:{replace:!0,url:H},onPress:function(){m.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},t,{item_type:"timeline"}))})}});D=f==null?void 0:(a=f.timeline_nav_app_sections)==null?void 0:a.edges;D&&D.forEach(function(a){a=a.node;if(!a)return;var b=a.displayable_count,d=a.name,e=a.section_type,f=a.tab_key,g=a.tracking,h=a.url;if(h==null||d==null)return;var i=(a=a.all_collections)==null?void 0:a.nodes;B.push({badge:e==="LIVE_VIDEOS"&&x?k.jsx(c("CometBadge.react"),{}):(a=b)!=null?a:void 0,isActive:function(){var a=z===f;if(a)return!0;if(z==="album"&&e==="PHOTOS")return!0;return i==null?!1:i.some(function(a){a=a.tab_key;return a===z})},label:d,linkProps:{replace:!0,url:e==="PHOTOS"&&y?null:h},onPress:function(){m.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},t,{item_type:g}))})},tabRef:e==="MENTIONS"?w:void 0})});o===g&&B.push({isActive:function(){return!1},label:h._("Manage Sections"),onHoverIn:r,onHoverOut:s,onPress:function(){m.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},t,{item_type:"manage_sections"}))}),q({profileID:o})},onPressIn:p});return k.jsx(c("CometEntityHeaderTabBar.react"),{maxTabs:6,tabs:B})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);