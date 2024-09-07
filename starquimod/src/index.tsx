import { ModRegistrar } from "cs2/modding";
import { PanelComponent } from "mods/hello-world";

const register: ModRegistrar = (moduleRegistry) => {

    moduleRegistry.extend("game-ui/game/components/selected-info-panel/shared-components/info-row/info-row.tsx", 'InfoRow', PanelComponent);
}

export default register;