import { IStateSchema } from "app/providers/StoreProvider";

export const getUserInited = (state: IStateSchema) => state.user._inited;
