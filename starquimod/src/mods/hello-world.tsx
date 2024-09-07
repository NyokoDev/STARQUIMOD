import { VanillaComponentResolver } from "classes/VanillaComponentResolver";
import { ModuleRegistryAppend, ModuleRegistryExtend } from "cs2/modding";
import React, { ComponentType, FC } from 'react';
import { PanelComponentBase } from "./panelcomponentbase";


export const PanelComponent: ModuleRegistryExtend = (Component: ComponentType<any>) => {
    return (props) => {
        const { children, ...otherProps } = props || {};
        return (
            <>

                <PanelComponentBase />
                <Component {...otherProps} />
            </>
        );
    };
};
