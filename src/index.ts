export interface Action<T extends string> {
    type: T;
}
export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type: type } : { type: type, payload: payload };
}

export type FunctionType = (...args: any[]) => any;
export type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };
export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
