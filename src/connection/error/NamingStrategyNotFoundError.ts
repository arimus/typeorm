/**
 * @internal
 */
export class NamingStrategyNotFoundError extends Error {
    name = "NamingStrategyNotFoundError";

    constructor(strategyName: string|Function, connectionName: string) {
        super();
        const name = strategyName instanceof Function ? (strategyName as any).name : strategyName;
        this.message = `Naming strategy "${name}" was not found. Looks like this naming strategy does not ` +
            `exist or it was not registered in current "${connectionName}" connection?`;
    }

}