/*
 * 1. Define the properties keys and their allowed values.
 *
 * @see https://segment.com/docs/connections/spec/track/#properties
 */
export type Position = 'sidebar';
export type Context = 'overwritten-below' | 'submenu-1' | 'submenu-2';

/*
 * 2. Define the individual properties objects.
 */
type PositionGetterReturn = {
	position: Position;
};
type ContextGetterReturn = {
	context: Context;
};

/*
 * 3. Define a union of all `*GetterReturn` properties objects from the above step.
 */
type AllGetterReturnTypes = PositionGetterReturn | ContextGetterReturn;

/*
 * 4. Define the individual properties get functions.
 */
type PositionGetter = (position: Position) => PositionGetterReturn;
type ContextGetter = (context: Context) => ContextGetterReturn;

/*
 * 5. Define the individual properties get functions.
 */
export const getPosition: PositionGetter = (position: Position) => ({ position });
export const getContext: ContextGetter = (context: Context) => ({ context });

/**
 * Converts the `args` into a `JSON.stringify()`'d version so it can be used in
 * `data-analytics` HTML attributes.
 *
 * @param args AllGetterReturnTypes[] One or more allowed properties objects.
 * @returns string A `JSON.stringify()`'d version of the input arguments.
 */
export const domify = (...args: AllGetterReturnTypes[]) =>
	JSON.stringify(args.reduce((result, arg) => ({ ...result, ...arg }), {}));
