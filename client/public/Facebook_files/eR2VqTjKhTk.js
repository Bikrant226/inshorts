if (self.CavalryLogger) { CavalryLogger.start_js(["SeEESo9"]); }

__d("FriendingCometFriendRequestsPanelPaginationQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:20,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"friending_channel",value:"REQUESTS_JEWEL"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e={kind:"Variable",name:"scale",variableName:"scale"},f=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestsPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"FriendingCometFriendRequestsPanel_viewerConnection"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestsPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:b,concreteType:"FriendingPossibilitiesConnection",kind:"LinkedField",name:"friending_possibilities",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"FriendingPossibilitiesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},e,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:f,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[c,d,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Literal",name:"height",value:20},e,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:f,storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],type:"FriendNode",abstractKey:"__isFriendNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:b,filters:["friending_channel"],handle:"connection",key:"FriendingCometFriendRequestsPanel_friending_possibilities",kind:"LinkedHandle",name:"friending_possibilities"}],storageKey:null}]},params:{id:"4533978409949134",metadata:{},name:"FriendingCometFriendRequestsPanelPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("FriendingCometFriendRequestsPanel_viewerConnection.graphql",["FriendingCometFriendRequestsPanelPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["friending_possibilities"];return{argumentDefinitions:[{defaultValue:20,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("FriendingCometFriendRequestsPanelPaginationQuery.graphql")}},name:"FriendingCometFriendRequestsPanel_viewerConnection",selections:[{alias:"friending_possibilities",args:[{kind:"Literal",name:"friending_channel",value:"REQUESTS_JEWEL"}],concreteType:"FriendingPossibilitiesConnection",kind:"LinkedField",name:"__FriendingCometFriendRequestsPanel_friending_possibilities_connection",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"FriendingPossibilitiesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometFriendRequestsListItem_user"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:'__FriendingCometFriendRequestsPanel_friending_possibilities_connection(friending_channel:"REQUESTS_JEWEL")'}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("FriendingCometPYMKListItem_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometPYMKListItem_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometListItemWithButtons_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometPYMKPanelPaginationQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:"FRIENDS_CENTER",kind:"LocalArgument",name:"location"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b={kind:"Variable",name:"location",variableName:"location"},c=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},b],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={kind:"Variable",name:"scale",variableName:"scale"},g=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometPYMKPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"},b],kind:"FragmentSpread",name:"FriendingCometPYMKPanel_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometPYMKPanelPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:c,concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"people_you_may_know",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},f,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:g,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[d,e,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Literal",name:"height",value:20},f,{kind:"Literal",name:"width",value:20}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:g,storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],type:"FriendNode",abstractKey:"__isFriendNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:c,filters:["location"],handle:"connection",key:"FriendingCometPYMKPanel_people_you_may_know",kind:"LinkedHandle",name:"people_you_may_know"}],storageKey:null}]},params:{id:"3872788706142213",metadata:{},name:"FriendingCometPYMKPanelPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("FriendingCometPYMKPanel_viewer.graphql",["FriendingCometPYMKPanelPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["people_you_may_know"];return{argumentDefinitions:[{defaultValue:10,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:"FRIENDS_CENTER",kind:"LocalArgument",name:"location"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["viewer"],operation:b("FriendingCometPYMKPanelPaginationQuery.graphql")}},name:"FriendingCometPYMKPanel_viewer",selections:[{alias:"people_you_may_know",args:[{kind:"Variable",name:"location",variableName:"location"}],concreteType:"PeopleYouMayKnowConnection",kind:"LinkedField",name:"__FriendingCometPYMKPanel_people_you_may_know_connection",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_signature",storageKey:null},{alias:null,args:null,concreteType:"PeopleYouMayKnowEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"FriendingCometPYMKListItem_user"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("FriendingCometManageFriendsDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2832366396868895",metadata:{},name:"FriendingCometManageFriendsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ProactiveFriendingAlertImpressionUpdateResponsePayload",kind:"LinkedField",name:"proactive_friending_alert_impression_update",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:b},params:{id:"2963531890425143",metadata:{},name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometFriendRequestsScrollHoldingContainer.react",["BaseScrollableAreaContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useLayoutEffect,l=b.useRef;function a(a){var b=i(c("BaseScrollableAreaContext")),d=l(null),e=l(null),f=l(0),g=l(null),m=b[b.length-1];j(function(){var a=m.getDOMNode();if(a!=null){f.current=a.scrollTop;var b=function(){f.current=a.scrollTop};a.addEventListener("scroll",b,{passive:!0});return function(){a.removeEventListener("scroll",b,{passive:!0})}}},[m]);k(function(){if(d.current!=null){var b=d.current.getBoundingClientRect();if(e.current!=null){if(g.current===a.firstRequesterID){g.current=a.firstRequesterID;e.current=b;return}var c=b.height-e.current.height,h=m.getDOMNode();h!=null&&h.scrollTop===f.current&&(h.scrollTop+=c)}g.current=a.firstRequesterID;e.current=b}});return h.jsx("div",{ref:d,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometFriendsTabInteractionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743629");c=b("FalcoLoggerInternal").create("friending_comet_friends_tab_interaction",a);e.exports=c}),null);
__d("FriendingCometPanel.react",["TetraUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"rtmu0sqt qzhwtbm6",children:h.jsx(c("TetraUnitHeader.react"),{action:a.headlineAddOn,actionLinkProps:a.headlineAddOnLinkProps,headline:a.heading,level:3,onActionPress:a.onHeadlineAddOnPress})}),a.children]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometFriendRequestsPanel.react",["fbt","ix","CometListItemGlimmer.react","CometRelay","FriendingCometFriendRequestsListItem.react","FriendingCometFriendRequestsPanel_viewerConnection.graphql","FriendingCometFriendRequestsScrollHoldingContainer.react","FriendingCometFriendsTabInteractionFalcoEvent","FriendingCometPanel.react","FriendingCometTestIDHelper","TetraButton.react","TetraIcon.react","TetraText.react","WebPixelRatio","XCometFriendingSectionControllerRouteBuilder","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useRef,m=e.useTransition;function a(a){var e=m(),f=e[0],g=e[1];e=d("CometRelay").useBlockingPaginationFragment(j!==void 0?j:j=b("FriendingCometFriendRequestsPanel_viewerConnection.graphql"),a.viewerConnection);var n=e.data,o=e.hasNext,p=e.loadNext,q=e.refetch,r=n==null?void 0:(e=n.friending_possibilities)==null?void 0:e.edges;e=(n=n==null?void 0:(e=n.friending_possibilities)==null?void 0:e.count)!=null?n:0;a=(n=a.shouldShowSeeAllButton)!=null?n:!0;var s=l(!1),t=10;n=function(){if(!o||f)return;if(r!=null){var a;((a=r[r.length-1])==null?void 0:(a=a.node)==null?void 0:a.friendship_status)==="INCOMING_REQUEST"?g(function(){p(t,{onComplete:function(a){a!=null&&q({count:r.length+t,scale:d("WebPixelRatio").get()})}})}):g(function(){q({count:r.length+t,scale:d("WebPixelRatio").get()})})}s.current?c("FriendingCometFriendsTabInteractionFalcoEvent").log(function(){return{event:"friend_requests_see_more_click"}}):(c("FriendingCometFriendsTabInteractionFalcoEvent").log(function(){return{event:"friend_requests_see_more_first_click"}}),s.current=!0)};var u=function(){c("FriendingCometFriendsTabInteractionFalcoEvent").log(function(){return{event:"friend_requests_see_all_click"}})},v=null,w=null;if(r!=null){v=r.map(function(a,b){var d,e=a==null?void 0:a.node;return e==null?null:k.jsx(c("FriendingCometFriendRequestsListItem.react"),{isSeen:(d=a==null?void 0:a.is_seen)!=null?d:!0,position:b+1,timeReceived:(d=a==null?void 0:a.time)!=null?d:0,user:e},(a=e==null?void 0:e.id)!=null?a:b)});if(f)w=k.jsx(c("CometListItemGlimmer.react"),{imageSize:60,imageStyle:"circle",numberOfItems:1});else if(o){var x=e-v.length<t?e-v.length:t;w=k.jsx("div",{className:"n1l5q3vz dhix69tm wkznzc2l n851cfcs",children:k.jsx("div",{className:"k4urcfbm","data-testid":void 0,children:k.jsx(c("TetraButton.react"),{addOnSecondary:k.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(i("492450"),16)}),label:h._("See {numRequestsToShow} More",[h._param("numRequestsToShow",x)]),onPress:n,size:"medium",type:"secondary"})})})}}(v==null||v.length===0)&&(v=k.jsx("div",{className:"oqcyycmt swg4t2nn sej5wr8e",children:k.jsx(c("TetraText.react"),{color:"secondary",type:"meta3",children:h._("No new requests")})}));x=e===0?h._("Friend requests"):h._({"*":"{number} friend requests","_1":"1 friend request"},[h._plural(e,"number")]);n=null;e="";a&&(n=h._("See all"),e=c("XCometFriendingSectionControllerRouteBuilder").buildURL({friending_section:"requests"}));return k.jsxs(c("FriendingCometPanel.react"),{heading:x,headlineAddOn:n,headlineAddOnLinkProps:{url:e},onHeadlineAddOnPress:u,children:[k.jsx(c("FriendingCometFriendRequestsScrollHoldingContainer.react"),{firstRequesterID:r==null||r.length===0?null:(a=r[0].node)==null?void 0:a.id,children:v}),w]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometNullStateView.react",["fbt","CometContentArea.react","NullStatePeople","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.hasRequestsOrSuggestions;a=a?h._("Select people's names to preview their profile."):h._("When you have friend requests or suggestions, you'll see them here.");return i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{headline:a,icon:c("NullStatePeople")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometPYMKListItem.react",["fbt","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometListItemWithButtons.react","FriendingCometPYMKListItem_user.graphql","FriendingCometTestIDHelper","RegularPymkAddFalcoEvent","RegularPymkImpFalcoEvent","RegularPymkProfileFalcoEvent","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useRef;function a(a){var e,f=d("CometRelay").useFragment(i!==void 0?i:i=b("FriendingCometPYMKListItem_user.graphql"),a.user),g=a.onDelete,m=f.friendship_status,n=f.id,o=f.name,p=f.profile_picture,q=f.url;p=p==null?void 0:p.uri;var r=a.signature,s=d("CometRelay").useRelayEnvironment(),t=l(!1),u=l(!1),v=d("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:(e=n)!=null?e:"0",addFriendSource:"people_you_may_know"});e=k(function(){n!=null&&(d("FriendingCometFriendRequestSendMutation").commit(s,n,"people_you_may_know",v,"friends_center"),c("RegularPymkAddFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_center",pymk_signature:r}}))},[s,v,n,r]);var w=k(function(){n!=null&&(u.current=!0,d("FriendingCometFriendRequestCancelMutation").commit(s,n,"pymk",v))},[s,v,n]),x=k(function(){n!=null&&c("RegularPymkProfileFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_center",pymk_signature:r}})},[n,r]),y=k(function(){n!=null&&!t.current&&(c("RegularPymkImpFalcoEvent").log(function(){return{pymk_id:n,pymk_location:"friends_center",pymk_signature:r}}),t.current=!0)},[n,r]);y=c("useVisibilityObserver")({onVisible:y});if(n==null||q==null||p==null||o==null)return null;var z=null;switch(m){case"CAN_REQUEST":z=u.current?h._("Request cancelled"):null;u.current=!1;return j.jsx("div",{"data-testid":void 0,ref:y,children:j.jsx(c("FriendingCometListItemWithButtons.react"),{href:q,iconSrc:p,message:z,onAddFriend:e,onClick:x,onDelete:g,reduceEmphasisPrimary:a.reduceEmphasisPrimary,routeTarget:"content",title:o,user:f})});case"OUTGOING_REQUEST":z=h._("Request sent");return j.jsx("div",{"data-testid":void 0,ref:y,children:j.jsx(c("FriendingCometListItemWithButtons.react"),{href:q,iconSrc:p,message:z,onCancelRequest:w,onClick:x,routeTarget:"content",title:o,user:f})});case"INCOMING_REQUEST":case"ARE_FRIENDS":return null}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometPYMKPanel.react",["fbt","CometListItemGlimmer.react","CometRelay","FriendingCometPYMKBlacklistSuggestionMutation","FriendingCometPYMKListItem.react","FriendingCometPYMKPanel_viewer.graphql","FriendingCometPanel.react","FriendingCometTestIDHelper","RegularPymkXoutFalcoEvent","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useTransition,m=30;function a(a){var e=l(),f=e[0],g=e[1];e=d("CometRelay").useBlockingPaginationFragment(i!==void 0?i:i=b("FriendingCometPYMKPanel_viewer.graphql"),a.viewer);var n=e.data,o=e.hasNext,p=e.loadNext;e=n==null?void 0:(e=n.people_you_may_know)==null?void 0:e.edges;var q=n==null?void 0:(n=n.people_you_may_know)==null?void 0:n.tracking_signature,r=d("CometRelay").useRelayEnvironment();n=k(function(){if(!o||f)return;g(function(){p(m)})},[o,f,p,g]);n=c("useVisibilityObserver")({onVisible:n});var s=null;if(e!=null){var t=function(a){return function(){a!=null&&(d("FriendingCometPYMKBlacklistSuggestionMutation").commit(r,"FriendingCometPYMKPanel_people_you_may_know",d("CometRelay").VIEWER_ID,a,"FRIENDS_CENTER","FRIENDS_CENTER"),c("RegularPymkXoutFalcoEvent").log(function(){return{pymk_id:a,pymk_location:"friends_center",pymk_signature:q}}))}};s=e.map(function(b,d){b=b==null?void 0:b.node;return b==null?null:j.jsx(c("FriendingCometPYMKListItem.react"),{onDelete:t(b.id),reduceEmphasisPrimary:a.reduceEmphasisPrimary,signature:q,user:b},(b=b==null?void 0:b.id)!=null?b:d)});o&&s.push(j.jsx("div",{"data-testid":void 0,ref:n,children:j.jsx(c("CometListItemGlimmer.react"),{imageSize:60,imageStyle:"circle",numberOfItems:2})},"glimmer"))}return s!=null&&s.length!==0?j.jsx(c("FriendingCometPanel.react"),{heading:h._("People you may know"),children:s}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometManageFriendsDialog.entrypoint",["FriendingCometManageFriendsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("FriendingCometManageFriendsDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("FriendingCometManageFriendsDialog.react").__setRef("FriendingCometManageFriendsDialog.entrypoint")};g["default"]=a}),98);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation",["CometRelay","FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql");function a(a,b,c){return d("CometRelay").commitMutation(a,{mutation:i,onError:c,variables:{input:b}})}g.commit=a}),98);
__d("ManageFriendsEntryPointClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743888");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_click",a);e.exports=c}),null);
__d("ManageFriendsEntryPointDismissalFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743889");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_dismissal",a);e.exports=c}),null);
__d("ManageFriendsEntryPointImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743890");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_impression",a);e.exports=c}),null);
__d("FriendingCometFriendLimitWarning.react",["fbt","ix","CometCard.react","CometRelay","FriendingCometManageFriendsDialog.entrypoint","FriendingCometProactiveFriendingAlertImpressionUpdateMutation","ManageFriendsEntryPointClickFalcoEvent","ManageFriendsEntryPointDismissalFalcoEvent","ManageFriendsEntryPointImpressionFalcoEvent","TetraButton.react","TetraCircleButton.react","TetraIcon.react","TetraTextPairing.react","fbicon","react","useCometEntryPointDialog","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useRef;function a(a){var b=d("CometRelay").useRelayEnvironment();a=c("useCometEntryPointDialog")(c("FriendingCometManageFriendsDialog.entrypoint"),{});var e=a[0],f=l(!1);a=k(function(){f.current||(d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation").commit(b,{}),c("ManageFriendsEntryPointImpressionFalcoEvent").log(function(){return{entry_point:"proactive_module"}}),f.current=!0)},[b]);a=c("useVisibilityObserver")({onVisible:a});var g=j.jsx("div",{className:"datstx6m",children:j.jsx("div",{className:"ciadx1gn l9j0dhe7 a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys taijpn5t mudddibn j83agx80 rq0escxv sk4xxmp2 agehan2d n8ej3o3l rt8b4zig spb7xbtv bkmhp75w emlxlaya s45kfl79 ibgm0fz6 bp9cbjyn",children:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("502061"),16)})})}),m=j.jsx("div",{className:"knvmm38d h676nmdw oi9244e8 ama3r5zh buofh1pr",children:j.jsx(c("TetraTextPairing.react"),{body:h._("The maximum is 5,000. Consider removing some friends before adding new ones."),headline:h._("Reaching friend limit"),level:3})}),n=j.jsx("div",{className:"datstx6m",children:j.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("478238"),20),label:h._("Close"),onPress:function(){d("CometRelay").commitLocalUpdate(b,function(a){a=a.get(d("CometRelay").VIEWER_ID);a==null?void 0:a.setValue(!1,"should_show_proactive_friending_alert")}),c("ManageFriendsEntryPointDismissalFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},size:32})}),o=j.jsx(c("TetraButton.react"),{label:h._("Manage Friends"),onPress:function(){e({}),c("ManageFriendsEntryPointClickFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},padding:"wide",type:"secondary"});return j.jsx("div",{className:"jei6r52m dhix69tm wkznzc2l n851cfcs",ref:a,children:j.jsx(c("CometCard.react"),{dropShadow:2,children:j.jsxs("div",{className:"lb8aey2d a5h7je3r oj5qckz4 p6qk8glf",children:[j.jsxs("div",{className:"j83agx80",children:[g,m,n]}),o]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometSectionTabViewLeftRail.react",["fbt","CometLeftRailBreadcrumbs.react","CometLeftRailComponent.react","CometLeftRailHeader.react","CometRouteParams","XCometFriendingControllerRouteBuilder","XCometFriendingSectionControllerRouteBuilder","qex","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b,e=d("CometRouteParams").useRouteParams();e=e.friending_section;b=(b=c("qex")._("1907930"))!=null?b:!1;var f=c("XCometFriendingControllerRouteBuilder").buildURL({}),g=[{label:h._("Friends"),url:f}];b||g.push({label:a.title,url:c("XCometFriendingSectionControllerRouteBuilder").buildURL({friending_section:e})});return i.jsx(c("CometLeftRailComponent.react"),{header:i.jsx(c("CometLeftRailHeader.react"),{backActionAddOn:b?{linkProps:{passthroughProps:{ref_tab:e},url:f}}:void 0,meta:i.jsx(c("CometLeftRailBreadcrumbs.react"),{breadcrumbs:g}),title:a.title}),primaryNav:a.leftRail})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometSectionTabView.react",["CometLeftRailAndMainContentContainer.react","FriendingCometSectionTabViewLeftRail.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b;return h.jsx(c("CometLeftRailAndMainContentContainer.react"),{leftRailContent:h.jsx(c("FriendingCometSectionTabViewLeftRail.react"),{leftRail:a.leftRail,title:a.title}),leftRailHeading:a.title,mainContent:(b=a.children)!=null?b:a.mainContent,mainContentHeading:a.title})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendsCenterOpenedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743630");c=b("FalcoLoggerInternal").create("friends_center_opened",a);e.exports=c}),null);