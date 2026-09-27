import "./hide.css";
import "./theme.css";
import { definePluginSettings } from "@api/Settings";
import {
    OptionType,
    SettingsDefinition,
    PluginSettingBooleanDef,
} from "@utils/types";
import definePlugin, { StartAt } from "@utils/types";
import SettingsUi from "./components/Settings";
import ATTR_MAP from "./settings";

function applyOption(attrName: string, enabled: boolean) {
    document.documentElement.toggleAttribute(attrName, enabled);
}

type AttrMapKeys = {
    [K in keyof typeof ATTR_MAP]: keyof (typeof ATTR_MAP)[K];
}[keyof typeof ATTR_MAP];

const dynamicOptions = Object.values(ATTR_MAP).reduce(
    (acc, group) => {
        for (const [key, item] of Object.entries(group)) {
            acc[key] = {
                type: OptionType.BOOLEAN,
                description: item.description,
                default: false,
                restartNeeded: item.restart ?? false,
                hidden: true,
                onChange: (v: boolean) => {
                    item.func?.(v) ?? applyOption(item.id, v);
                },
            };
        }
        return acc;
    },
    {} as Record<string, PluginSettingBooleanDef>,
);

const settingsOptions = {
    config: {
        type: OptionType.COMPONENT,
        component: SettingsUi,
    },

    ...dynamicOptions,

    // enableCustomPickerHeight: {
    //     type: OptionType.BOOLEAN,
    //     description:
    //         "Включить кастомную высоту и изменение размера для Expression Picker",
    //     default: false,
    //     restartNeeded: true,
    // },

    pickerHeight: {
        type: OptionType.STRING,
        description: "Height of expression picker",
        default: "100%",
        hidden: true,
    },
} satisfies SettingsDefinition;

export const settings = definePluginSettings(settingsOptions) as ReturnType<
    typeof definePluginSettings
> & {
    store: Record<AttrMapKeys, boolean> & {
        pickerHeight: string;
    };
};

export default definePlugin({
    name: "CleanDiscord",
    authors: [{ name: "Krabike", id: 650720589232996352n }],
    description: "Super cool customization for discord",
    tags: ["Appearance", "Customisation"],
    settings,

    patches: [
        {
            find: "updatedUnsyncedSettings({expressionPickerWidth:",
            predicate: () => settings.store.enableCustomStickerHeight,
            replacement: [
                {
                    match: /(ref:\s*H,)/,
                    replace: `ref: el => {
                        H.current = el;
                        if (el && !el.querySelector('.custom-top-resizer')) {
                            const r = document.createElement('div');
                            r.className = 'custom-top-resizer';
                            r.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:4px;cursor:ns-resize;z-index:9999;';
                            r.onmousedown = e => {
                                e.preventDefault();
                                e.stopPropagation();
                                const startY = e.clientY;
                                const startH = el.offsetHeight;
                                let currentH = startH;
                                const onMove = ev => {
                                    const delta = startY - ev.clientY;
                                    currentH = Math.max(200, Math.min(window.innerHeight - 80, startH + delta));
                                    el.style.height = currentH + 'px';
                                };
                                const onUp = () => {
                                    window.removeEventListener('mousemove', onMove);
                                    window.removeEventListener('mouseup', onUp);
                                    if (Vencord.Settings.plugins.CleanDiscord) {
                                        Vencord.Settings.plugins.CleanDiscord.pickerHeight = currentH;
                                    }
                                    setPickerHeight(currentH);
                                };
                                window.addEventListener('mousemove', onMove);
                                window.addEventListener('mouseup', onUp);
                            };
                            el.appendChild(r);
                        }
                    },`,
                },
                {
                    match: /style:\s*\{width:\s*null==(\w+)\s*\?\s*void\s*0\s*:\s*\1,\s*([^\}]+)\}/,
                    replace:
                        "style:{width:null==$1?void 0:$1,height:(Vencord.Settings.plugins.CleanDiscord?.pickerHeight || pickerHeight || 400)+'px',bottom:0,top:'auto',maxHeight:'85vh',minHeight:'200px',$2}",
                },
            ],
        },
    ],

    startAt: StartAt.DOMContentLoaded,
    start() {
        for (const group of Object.values(ATTR_MAP)) {
            for (const [key, item] of Object.entries(group)) {
                const enabled = settings.store[key];
                applyOption(item.id, Boolean(enabled));
            }
        }
    },

    stop() {
        for (const group of Object.values(ATTR_MAP)) {
            for (const item of Object.values(group)) {
                document.documentElement.removeAttribute(item.id);
            }
        }
    },
});
