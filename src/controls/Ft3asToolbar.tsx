import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { IButtonProps } from '@fluentui/react/lib/Button';
import { setVirtualParent } from '@fluentui/dom-utilities';
import { FocusTrapZone as FocusZone } from '@fluentui/react/lib/FocusTrapZone';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const Ft3asToolbar: React.FunctionComponent = () => {
    return (
        <FocusZone>
            <CommandBar
                items={_items}
                overflowItems={_overflowItems}
                overflowButtonProps={overflowProps}
                farItems={_farItems}
                ariaLabel="Inbox actions"
                primaryGroupAriaLabel="Email actions"
                farItemsGroupAriaLabel="More actions"
            />
        </FocusZone>
    );
};

const _items: ICommandBarItemProps[] = [
    {
        key: 'importChecklist',
        text: 'Import checklist',
        iconProps: { iconName: 'CheckList' },
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    },
    {
        key: 'uploadFile',
        text: 'Upload responses',
        iconProps: { iconName: 'Upload' },
        onClick: (ev?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined) => {
            ev?.persist();

            Promise.resolve().then(() => {
                const inputElement = document.createElement('input');
                inputElement.style.visibility = 'hidden';
                inputElement.setAttribute('type', 'file');

                document.body.appendChild(inputElement);

                const target = ev?.target as HTMLElement | undefined;

                if (target) {
                    setVirtualParent(inputElement, target);
                }

                inputElement.click();

                if (target) {
                    setVirtualParent(inputElement, null);
                }

                setTimeout(() => {
                    inputElement.remove();
                }, 10000);
            });
        },
    },
    {
        key: 'download',
        text: 'Download',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download'),
    },
    {
        key: 'excel',
        text: 'Export Excel',
        iconProps: { iconName: 'ExcelDocument' },
        onClick: () => console.log('Export Excel'),
    },
    
];

const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
    {
        key: 'tile',
        text: 'Grid view',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Grid view',
        iconOnly: true,
        iconProps: { iconName: 'Tiles' },
        onClick: () => console.log('Tiles'),
    },
    {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
        iconOnly: true,
        iconProps: { iconName: 'Info' },
        onClick: () => console.log('Info'),
    },
];
