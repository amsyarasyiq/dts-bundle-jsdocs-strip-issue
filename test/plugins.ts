
export interface TestPlugin {
    /**
     * The unique name of the plugin
     */
    name: string;
    /**
     * Brief description of the plugin
     */
    description: string;
    /**
     * Function to be executed on plugin execution
     */
    execute(): void;
}

/**
 * Responsible of holding all installed plugins
 */
export const plugins: TestPlugin[] = [];

/**
 * Executes all plugins that are not excluded.
 *
 * @param {string[]} excluded - An array of plugin names to exclude.
 * @return {void} This function does not return a value.
 */
export function executePlugins(excluded: string[] = []): void {
    for (const plugin of plugins) {
        if (!excluded.includes(plugin.name)) {
            plugin.execute();
        }
    }
}