import { DefaultButton, Dropdown, IDropdownOption, Panel, PrimaryButton } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { FormEvent, Props, useCallback, useEffect, useState } from "react";
import TemplateServiceInstance from "../service/TemplateService";

const buttonStyles = { root: { marginRight: 8 } };

interface Ft3AsTemplateSelectorProps {
    isOpen: boolean;
    availableTemplates: string[];
    onTemplateSelected: (templateUrl: string) => void;
    onClose: () => void;
}
export default function Ft3AsTemplateSelector(props: Ft3AsTemplateSelectorProps) {
    
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(props.isOpen);
    // const [availableTemplates, setAvailableTemplates] = useState<IDropdownOption[]>([]);
    const availableTemplates= props.availableTemplates.map<IDropdownOption>(t => {
        return {
            key: t, text: t
        }
    });
    const [selectedItem, setSelectedItem] = useState<IDropdownOption>();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const templates = await TemplateServiceInstance.getAvailableTemplates();
    //         // TODO: ideally this mapping should return as key full template url and as text the simplified name
    //         const options = templates.map<IDropdownOption>((template: string) => {
    //             return {
    //                 key: template, text: template
    //             }
    //         });
    //         setAvailableTemplates(options);
    //     }
    //     fetchData().catch(reason => console.error(reason));
    // }, []);

    const onRenderFooterContent = useCallback(
        () => (
            <div>
                <PrimaryButton onClick={dismissPanel} styles={buttonStyles}>
                    Save
                </PrimaryButton>
                <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
            </div>
        ),
        [dismissPanel],
    );

    const onChange = (event: FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
        setSelectedItem(item);
    };

    return (<Panel
        isOpen={isOpen}
        onDismiss={dismissPanel}
        headerText="Select a checklist template"
        closeButtonAriaLabel="Close"
        // onRenderFooterContent={onRenderFooterContent}
        // isFooterAtBottom={true}
        >
        <p>Template list</p>
        {/* <Dropdown
            label="Select template"
            selectedKey={selectedItem ? selectedItem.key : undefined}
            options={availableTemplates}
            placeholder="Select a template"
            onChange={onChange} /> */}
    </Panel>)
}