import { FormSwitch } from "@components/FormSwitch";
import { ExpandableSection } from "@components/ExpandableCard";
import { settings } from "../index";
import ATTR_MAP from "../settings";

function SettingsUi() {
    const s = settings.use();

    return (
        <>
            {Object.entries(ATTR_MAP).map(([category, items]) => (
                <ExpandableSection
                    key={category}
                    children={category}
                    renderContent={() =>
                        Object.entries(items).map(([key, item]) => (
                            <FormSwitch
                                title={(
                                    key[0].toUpperCase() + key.slice(1)
                                ).replace(/(?<!^)(\p{Lu})/gu, " $1")}
                                description={`${item.description} ${item.restart ? "(restart needed)" : ""}`}
                                value={s[key]}
                                onChange={(v) => (s[key] = v)}
                            />
                        ))
                    }
                />
            ))}
        </>
    );
}

export default SettingsUi;
