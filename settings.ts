import settings from "./index";

interface TAttrItem {
    id: string;
    description: string;
    restart?: boolean;
    func?: (enabled: boolean) => void;
}

type TAttrGroup = Record<string, TAttrItem>;
type TAttrMap = Record<string, TAttrGroup>;

const ATTR_MAP: TAttrMap = {
    "General & UI Tweaks": {
        toggleCustomTheme: {
            id: "data-clean-discord-theme",
            description: "CleanDiscord custom theme",
        },
        enableCustomStickerHeight: {
            id: "data-custom-sticket-heaight",
            description: "Custom sticker picker height",
            restart: true,
            func: (enabled: boolean) => {
                if (!enabled && settings.store) {
                    settings.store.pickerHeight = "100%";
                }
            },
        },
        AllPopoverDividers: {
            id: "data-delete-all-dividers",
            description: "Dividers in context menus",
        },
        activitiesHide: {
            id: "data-activities-hide",
            description: "Hide Activity status & controls",
        },
        topBarMisc: {
            id: "data-top-bar-misc",
            description: "Top bar elements",
        },
        demoNitro: { 
            id: "data-demo-nitro", 
            description: "Nitro upsells & badges" 
        },
        callUserCardMoreOprions: {
            id: "data-user-card-more-options",
            description: "'More Options' button in call cards",
        },
        disconnectArrow: {
            id: "data-disconnect-arrow",
            description: "Disconnect button arrow icon",
        },
        guildSidebarEventsBoosts: {
            id: "data-guild-events-boosts",
            description: "Server events & Boost indicators",
        },
        dmNitroShopQuests: {
            id: "data-dm-nitro-shop-quests",
            description: "Nitro, Shop, and Quests tabs in Direct Messages",
        },
        callHeaderNitroIcon: {
            id: "data-call-header-nitro-icon",
            description: "Nitro icon in call header",
        },
        watchStreamBtn: {
            id: "data-watch-stream-btn",
            description: "'Watch Stream' button",
        },
        userMuteDeafenArrows: {
            id: "data-user-mute-deafen-arrows",
            description: "Audio settings dropdown arrows next to Mute/Deafen",
        },
    },

    "Chat Input Bar": {
        BottomInputBtns: {
            id: "data-bottom-input-btns",
            description: "Action buttons inside chat bar",
        },
        BottomInputStickerBtn: {
            id: "data-bottom-input-sticker-btn",
            description: "Sticker picker button",
        },
        BottomInputEmojiBtn: {
            id: "data-bottom-input-emoji-btn",
            description: "Emoji picker button",
        },
        BottomInputAppBtn: {
            id: "data-bottom-input-app-btn",
            description: "App Launcher / Command button",
        },
    },

    "My Profile Menu": {
        selfPopoverOptions: {
            id: "data-user-options-self",
            description: "Context menu settings for your own profile",
        },
        selfPopoverDisable: {
            id: "data-user-disable-self",
            description: "Disable personal context menu completely",
        },
        selfHideProfile: {
            id: "data-user-profile-self",
            description: "Hide 'Profile'",
        },
        selfHideMention: {
            id: "data-user-mention-self",
            description: "Hide 'Mention'",
        },
        selfHideMute: {
            id: "data-user-mute-self",
            description: "Hide 'Mute'",
        },
        selfHideDeafen: {
            id: "data-user-deafen-self",
            description: "Hide 'Deafen'",
        },
        selfHideChangeNickname: {
            id: "data-user-change-nickname-self",
            description: "Hide 'Edit Server Profile'",
        },
        selfHideApps: {
            id: "data-user-apps-self",
            description: "Hide 'Apps'",
        },
        selfHideRoles: {
            id: "data-user-roles-self",
            description: "Hide 'Roles'",
        },
        selfMoveTo: {
            id: "data-user-move",
            description: "Hide 'Move To'",
        },
        selfModView: {
            id: "data-user-mod-view",
            description: "Hide 'Mod View'",
        },
        selfModServerMute: {
            id: "data-user-mod-server-mute",
            description: "Hide 'Server Mute'",
        },
        selfModServerDeafen: {
            id: "data-user-mod-server-deafen",
            description: "Hide 'Server Deafen'",
        },
        selfHideUserId: {
            id: "data-user-id-self",
            description: "Hide 'Copy User ID'",
        },
    },

    "User Profiles": {
        userPopoverOptions: {
            id: "data-user-options",
            description: "Context menu settings for other users",
        },
        userPopoverDisable: {
            id: "data-user-disable",
            description: "Disable user context menus completely",
        },
        userProfile: {
            id: "data-user-profile",
            description: "Hide 'Profile'",
        },
        userMention: {
            id: "data-user-mention",
            description: "Hide 'Mention'",
        },
        userMessage: {
            id: "data-user-message",
            description: "Hide 'Message'",
        },
        userCall: { id: "data-user-call", description: "Hide 'Call'" },
        userNote: { id: "data-user-note", description: "Hide 'Add Note'" },
        userVolume: {
            id: "data-user-volume",
            description: "Hide 'User Volume' slider",
        },
        userMute: { id: "data-user-mute", description: "Hide 'Mute'" },
        userMuteSoundboard: {
            id: "data-user-mute-soundboard",
            description: "Hide 'Mute Soundboard'",
        },
        userAddFriendNickname: {
            id: "data-user-add-friend-nickname",
            description: "Hide 'Add Friend Nickname'",
        },
        userApps: { id: "data-user-apps", description: "Hide 'Apps'" },
        userInviteToServer: {
            id: "data-user-invite-to-server",
            description: "Hide 'Invite to Server'",
        },
        userRemoveFriend: {
            id: "data-user-remove-friend",
            description: "Hide 'Remove Friend'",
        },
        userAddFriend: {
            id: "data-user-add-friend",
            description: "Hide 'Add Friend'",
        },
        userIgnore: {
            id: "data-user-ignore",
            description: "Hide 'Ignore'",
        },
        userBlock: {
            id: "data-user-block",
            description: "Hide 'Block'",
        },
        userRoles: { id: "data-user-roles", description: "Hide 'Roles'" },
        userChangeNickname: {
            id: "data-user-change-nickname",
            description: "Hide 'Change Nickname'",
        },
        userDisableVideo: {
            id: "data-user-disable-video",
            description: "Hide 'Disable Video'",
        },
        userModView: {
            id: "data-user-mod-view",
            description: "Hide 'Mod View'",
        },
        userKick: { id: "data-user-kick", description: "Hide 'Kick'" },
        userBan: { id: "data-user-ban", description: "Hide 'Ban'" },
        userVerification: {
            id: "data-user-verification",
            description: "Hide 'Verification' status",
        },
        userMove: { id: "data-user-move", description: "Hide 'Move To'" },
        userServerMute: {
            id: "data-user-server-mute",
            description: "Hide 'Server Mute'",
        },
        userServerDeafen: {
            id: "data-user-server-deafen",
            description: "Hide 'Server Deafen'",
        },
        userDisconnect: {
            id: "data-user-disconnect",
            description: "Hide 'Disconnect'",
        },
        userMarkReadDm: {
            id: "data-user-mark-read-dm",
            description: "Hide 'Mark DM as Read'",
        },
        userPinDm: {
            id: "data-user-pin-dm",
            description: "Hide 'Pin DM'",
        },
        userCloseDm: {
            id: "data-user-close-dm",
            description: "Hide 'Close DM'",
        },
        userMuteDm: {
            id: "data-user-mute-dm",
            description: "Hide 'Mute DM'",
        },
        userCallPopout: {
            id: "data-user-call-popout",
            description: "Hide 'Pop Out Call'",
        },
        userCallNoVideoHide: {
            id: "data-user-call-no-video-hide",
            description: "Hide non-video participants in calls",
        },
        userRequestStream: {
            id: "data-user-request-stream",
            description: "Hide 'Request Screen Share'",
        },
        userUserId: {
            id: "data-user-id",
            description: "Hide 'Copy User ID'",
        },
    },

    "Group Chats": {
        GroupPopoverOptions: {
            id: "data-group-options",
            description: "Group DM context menu options",
        },
        GroupPopoverDisable: {
            id: "data-group-disable",
            description: "Disable Group DM context menu",
        },
        GroupMarkRead: {
            id: "data-group-mark-read",
            description: "Hide 'Mark as Read'",
        },
        GroupPin: {
            id: "data-group-pin",
            description: "Hide 'Pin Group'",
        },
        GroupEdit: {
            id: "data-group-edit",
            description: "Hide 'Edit Group'",
        },
        GroupMute: {
            id: "data-group-mute",
            description: "Hide 'Mute Group'",
        },
        GroupLeave: {
            id: "data-group-leave",
            description: "Hide 'Leave Group'",
        },
        GroupId: {
            id: "data-group-id",
            description: "Hide 'Copy Group ID'",
        },
    },

    "Own Call Settings": {
        selfCallPopoverOptions: {
            id: "data-self-call-options",
            description: "Context menu options for your own call tile",
        },
        selfCallPopoverDisable: {
            id: "data-self-call-disable",
            description: "Disable context menu on your call tile",
        },
        selfCallHideProfile: {
            id: "data-self-call-profile",
            description: "Hide 'Profile' in call menu",
        },
        selfCallHideChangeVideoBg: {
            id: "data-self-call-change-bg",
            description: "Hide 'Change Video Background'",
        },
        selfCallHidePopOut: {
            id: "data-self-call-popout",
            description: "Hide 'Pop Out'",
        },
        selfCallHideNoVideo: {
            id: "data-self-call-no-video",
            description: "Hide non-video participants",
        },
        selfCallHideSelfVideo: {
            id: "data-self-call-user",
            description: "Hide own camera feed",
        },
        selfCallHideVoiceMute: {
            id: "data-self-call-voice-mute",
            description: "Hide 'Mute Microphone'",
        },
        selfCallHideVoiceDeafen: {
            id: "data-self-call-voice-deafen",
            description: "Hide 'Deafen'",
        },
    },

    "Own Screen Share": {
        selfDemoPopoverOptions: {
            id: "data-self-demo-options",
            description: "Context menu options for your active stream",
        },
        selfDemoPopoverDisable: {
            id: "data-self-demo-disable",
            description: "Disable context menu on your own stream",
        },
        selfDemoHideStop: {
            id: "data-self-demo-stop",
            description: "Hide 'Stop Streaming'",
        },
        selfDemoHideChangeWindows: {
            id: "data-self-demo-change-windows",
            description: "Hide 'Change Window'",
        },
        selfDemoHideSettings: {
            id: "data-self-demo-settings",
            description: "Hide 'Stream Settings'",
        },
        selfDemoHideAudio: {
            id: "data-self-demo-audio-enable",
            description: "Hide 'Mute/Unmute Stream Audio'",
        },
        selfDemoHidePopout: {
            id: "data-self-demo-popout",
            description: "Hide 'Pop Out Stream'",
        },
        selfDemoHideMoreOprions: {
            id: "data-self-demo-more-options",
            description: "Hide 'More Options'",
        },
    },

    "Streams & Screen Shares": {
        demoPopoverOptions: {
            id: "data-demo-options",
            description: "Context menu options for streams you are watching",
        },
        demoPopoverDisable: {
            id: "data-demo-disable",
            description: "Disable context menu on watched streams",
        },
        demoStopWatching: {
            id: "data-demo-watching",
            description: "Hide 'Stop Watching'",
        },
        demoMute: { 
            id: "data-demo-mute", 
            description: "Hide 'Mute Stream'" 
        },
        demoVolume: {
            id: "data-demo-volume",
            description: "Hide 'Stream Volume' slider",
        },
        demoPopout: {
            id: "data-demo-popout",
            description: "Hide 'Pop Out Stream'",
        },
        demoAttenuation: {
            id: "data-demo-attenuation",
            description: "Hide 'Audio Attenuation'",
        },
        demoMoreOptions: {
            id: "data-demo-more-options",
            description: "Hide 'More Options'",
        },
    },

    "Text Channels": {
        textChannelPopoverOptions: {
            id: "data-text-channel-options",
            description: "Text channel context menu settings",
        },
        textChannelPopoverDisable: {
            id: "data-text-channel-disable",
            description: "Disable text channel context menu",
        },
        textChannelMarkRead: {
            id: "data-text-channel-mark-read",
            description: "Hide 'Mark as Read'",
        },
        textChannelInvite: {
            id: "data-text-channel-invite",
            description: "Hide 'Invite People'",
        },
        textChannelPin: {
            id: "data-text-channel-pin",
            description: "Hide 'Pin Channel'",
        },
        textChannelCopyLink: {
            id: "data-text-channel-copy-link",
            description: "Hide 'Copy Link'",
        },
        textChannelMute: {
            id: "data-text-channel-mute",
            description: "Hide 'Mute Channel'",
        },
        textChannelUnmute: {
            id: "data-text-channel-unmute",
            description: "Hide 'Unmute Channel'",
        },
        textChannelNotifications: {
            id: "data-text-channel-notifications",
            description: "Hide 'Notification Settings'",
        },
        textChannelEdit: {
            id: "data-text-channel-edit",
            description: "Hide 'Edit Channel'",
        },
        textChannelClone: {
            id: "data-text-channel-clone",
            description: "Hide 'Clone Channel'",
        },
        textChannelCreate: {
            id: "data-text-channel-create",
            description: "Hide 'Create Text Channel'",
        },
        textChannelDelete: {
            id: "data-text-channel-delete",
            description: "Hide 'Delete Channel'",
        },
        textChannelOptOutCategory: {
            id: "data-text-channel-opt-out-category",
            description: "Hide 'Collapse Category'",
        },
        textChannelClearSpoiler: {
            id: "data-text-channel-clear-spoiler",
            description: "Hide 'Clear Spoilers'",
        },
        textChannelOptINtoChannel: {
            id: "data-text-channel-opt-into-channel",
            description: "Hide 'Show Channel'",
        },
        textChannelId: {
            id: "data-text-channel-id",
            description: "Hide 'Copy Channel ID'",
        },
    },

    "Voice Channels": {
        voiceChannelPopoverOptions: {
            id: "data-voice-channel-options",
            description: "Voice channel context menu settings",
        },
        voiceChannelPopoverDisable: {
            id: "data-voice-channel-disable",
            description: "Disable voice channel context menu",
        },
        voiceChannelMarkRead: {
            id: "data-voice-channel-mark-read",
            description: "Hide 'Mark as Read'",
        },
        voiceChannelInvite: {
            id: "data-voice-channel-invite",
            description: "Hide 'Invite People'",
        },
        voiceChannelPin: {
            id: "data-voice-channel-pin",
            description: "Hide 'Pin Channel'",
        },
        voiceChannelCopyLink: {
            id: "data-voice-channel-copy-link",
            description: "Hide 'Copy Link'",
        },
        voiceChannelOpenChat: {
            id: "data-voice-channel-open-chat",
            description: "Hide 'Open Text Chat'",
        },
        voiceChannelSetStatus: {
            id: "data-voice-channel-set-status",
            description: "Hide 'Set Channel Status'",
        },
        voiceChannelHideVoiceNames: {
            id: "data-voice-channel-hide-voice-names",
            description: "Hide member list under voice channel",
        },
        voiceChannelMute: {
            id: "data-voice-channel-mute",
            description: "Hide 'Mute Channel'",
        },
        voiceChannelEdit: {
            id: "data-voice-channel-edit",
            description: "Hide 'Edit Channel'",
        },
        voiceChannelClone: {
            id: "data-voice-channel-clone",
            description: "Hide 'Clone Channel'",
        },
        voiceChannelCreate: {
            id: "data-voice-channel-create",
            description: "Hide 'Create Voice Channel'",
        },
        voiceChannelDelete: {
            id: "data-voice-channel-delete",
            description: "Hide 'Delete Channel'",
        },
        voiceChannelId: {
            id: "data-voice-channel-id",
            description: "Hide 'Copy Channel ID'",
        },
    },

    "Message Context Menu": {
        messagePopoverOptions: {
            id: "data-message-options",
            description: "Message action menu settings",
        },
        messagePopoverDisable: {
            id: "data-message-disable",
            description: "Disable message action menu",
        },
        messageQuickReactions: {
            id: "data-message-quick-reactions",
            description: "Hide quick reaction bar",
        },
        messageAddReaction: {
            id: "data-message-add-reaction",
            description: "Hide 'Add Reaction'",
        },
        messageReactions: {
            id: "data-message-reactions",
            description: "Hide 'View Reactions'",
        },
        messageReply: {
            id: "data-message-reply",
            description: "Hide 'Reply'",
        },
        messageForward: {
            id: "data-message-forward",
            description: "Hide 'Forward'",
        },
        messageThread: {
            id: "data-message-thread",
            description: "Hide 'Create Thread'",
        },
        messagePin: {
            id: "data-message-pin",
            description: "Hide 'Pin Message'",
        },
        messageApps: {
            id: "data-message-apps",
            description: "Hide 'Apps'",
        },
        messageMarkUnread: {
            id: "data-message-mark-unread",
            description: "Hide 'Mark Unread'",
        },
        messageCopyLink: {
            id: "data-message-copy-link",
            description: "Hide 'Copy Message Link'",
        },
        messageEmojiReactions: {
            id: "data-message-emoji-reactions",
            description: "Hide emoji reaction picker",
        },
        messageRemoveReactions: {
            id: "data-message-remove-reactions",
            description: "Hide 'Remove All Reactions'",
        },
        messageDelete: {
            id: "data-message-delete",
            description: "Hide 'Delete Message'",
        },
        messageReport: {
            id: "data-message-report",
            description: "Hide 'Report Message'",
        },
        messageCopyText: {
            id: "data-message-copy-text",
            description: "Hide 'Copy Text'",
        },
        messageTts: {
            id: "data-message-tts",
            description: "Hide 'Speak Message'",
        },
        messageSaveVoiceAudio: {
            id: "data-message-save-voice-audio",
            description: "Hide 'Save Voice Message'",
        },
        messageId: {
            id: "data-message-id",
            description: "Hide 'Copy Message ID'",
        },
    },
};

export default ATTR_MAP;