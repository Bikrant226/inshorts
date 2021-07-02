if (self.CavalryLogger) { CavalryLogger.start_js(["GjGIKdM"]); }

__d("CometFeedTombstoneFactory_tombstoneFeedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedTombstoneFactory_tombstoneFeedUnit",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,concreteType:"Tombstone",kind:"LinkedField",name:"tombstone",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"group_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"author_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"feedback_id",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"executed_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryNFXActionTombstone_executedAction"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canUndo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_loading",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"negativeFeedbackActionID",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"DeletedPostTombstoneContent",kind:"LinkedField",name:"deleted_post_tombstone",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGroupRemovePostAsAdminTombstoneContent_deletedPostTombstoneContent"},{args:null,kind:"FragmentSpread",name:"CometGroupRemoveContentAsAdminTombstoneContent_deletedPostTombstoneContent"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"support_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryNFXActionTombstone_supportAction"}],storageKey:null}],storageKey:null}]}],type:"TombstoneFeedUnit",abstractKey:null};e.exports=a}),null);
__d("CometFeedTombstoneFactory.react",["CometCard.react","CometFeedTombstoneFactory_tombstoneFeedUnit.graphql","CometPlaceholder.react","CometProgressIndicator.react","CometRelay","CometRow.react","CometRowItem.react","JSResourceForInteraction","lazyLoadComponent","react","recoverableViolation","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometFeedStoryNFXActionTombstone.react").__setRef("CometFeedTombstoneFactory.react")),j=c("lazyLoadComponent")(c("JSResourceForInteraction")("ProfileCometHideFromTimelineTombstone.react").__setRef("CometFeedTombstoneFactory.react")),k=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometFeedStoryAdsNFXTombstone.react").__setRef("CometFeedTombstoneFactory.react")),l=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometGroupRemovePostAsAdminTombstone.react").__setRef("CometFeedTombstoneFactory.react")),m=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometGroupPendingPostsApproveTombstone.react").__setRef("CometFeedTombstoneFactory.react")),n=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometGroupPendingAnonymousPostsApproveTombstone.react").__setRef("CometFeedTombstoneFactory.react")),o=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometGroupPendingPostsDeclineTombstone.react").__setRef("CometFeedTombstoneFactory.react")),p=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometGroupContentModerationQueueDeletionTombstone.react").__setRef("CometFeedTombstoneFactory.react")),q=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometPhotoReviewFollowUpTombstone.react").__setRef("CometFeedTombstoneFactory.react")),r=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometGroupHideContentTombstone.react").__setRef("CometFeedTombstoneFactory.react")),s=d("react");function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedTombstoneFactory_tombstoneFeedUnit.graphql"),a.tombstoneFeedUnit);a=a.tombstone;var e=a==null?void 0:a.id,f=a==null?void 0:a.group_id,g=a==null?void 0:a.author_id,t=a==null?void 0:a.feedback_id,u=a==null?void 0:a.executed_action,v=a==null?void 0:a.action,w=(a==null?void 0:a.canUndo)===!0,x=a==null?void 0:a.subTitle,y=a==null?void 0:a.title,z=(a==null?void 0:a.is_loading)===!0,A=a==null?void 0:a.negativeFeedbackActionID,B=a==null?void 0:a.deleted_post_tombstone;a=a==null?void 0:a.support_action;var C=s.jsx(c("CometCard.react"),{children:s.jsx("div",{className:"ihqw7lf3 taijpn5t j83agx80 bp9cbjyn",children:s.jsx(c("CometRow.react"),{children:s.jsx(c("CometRowItem.react"),{children:s.jsx(c("CometProgressIndicator.react"),{})})})})});switch(v){case"TIMELINE_HIDE":return s.jsx(c("CometPlaceholder.react"),{fallback:null,children:s.jsx(j,{})});case"HIDE_AD":case"REPORT_AD":return s.jsx(c("CometPlaceholder.react"),{fallback:null,children:s.jsx(k,{canUndo:w,feedUnitID:e,negativeFeedbackActionID:A,subTitle:x,title:y})});case"NFX_ACTION":return s.jsx(c("CometPlaceholder.react"),{fallback:null,children:s.jsx(i,{canUndo:w,executedAction:u,feedUnitID:e,isLoading:z,subtitle:x,supportAction:a,title:y})});case"HIDE_GROUP_CONTENT ":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(r,{id:e,negativeFeedbackActionID:A,subtitle:x,title:y})});case"REMOVE_POST":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(l,{deletedPostTombstone$key:B,feedbackID:t,groupID:f,memberID:g,subtitle:x})});case"APPROVE_PENDING_POST":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(m,{groupID:f,memberID:g,storyID:e,subtitle:x})});case"APPROVE_PENDING_ANONYMOUS_POST":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(n,{storyID:e,subtitle:x})});case"DECLINE_PENDING_POST":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(o,{groupID:f,memberID:g,storyID:e,subtitle:x})});case"DELETE_GROUP_REPORTED_CONTENT":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(p,{deletedPostTombstone$key:B,feedbackID:t,groupID:f,memberID:g,subtitle:x})});case"DELETE_GROUP_ALERTED_CONTENT":return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(p,{deletedPostTombstone$key:B,feedbackID:t,groupID:f,memberID:g,subtitle:x})});case"PHOTO_REVIEW_REJECT":if(y==null)throw c("unrecoverableViolation")('Title must not be null for photo review "reject" follow-up',"photo_review");return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(q,{followUpTitle:y,followUpType:"reject"})});case"PHOTO_REVIEW_NOT_ME":if(y==null)throw c("unrecoverableViolation")('Title must not be null for photo review "not me" follow-up',"photo_review");return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(q,{followUpTitle:y,followUpType:"not_me"})});case"PHOTO_REVIEW_CONFIRM":if(y==null||x==null)throw c("unrecoverableViolation")('Title and subtitle must not be null for photo review "confirm" follow-up',"photo_review");return s.jsx(c("CometPlaceholder.react"),{fallback:C,children:s.jsx(q,{followUpSubtitle:x,followUpTitle:y,followUpType:"confirm"})});default:c("recoverableViolation")("tombstoneAction did not match in CometFeedTombstoneFactory","comet_feed");return null}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometQuickPromotionMenuContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext();g["default"]=b}),98);