
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm__username: string;
	export const TERM_PROGRAM: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm_registry__email: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const OMF_CONFIG: string;
	export const TMPDIR: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm_registry__username: string;
	export const npm_package_scripts_dev: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm__email: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm_registry__username: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_registry: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm_registry__email: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const npm_package_description: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm_registry__username: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const _: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_scripts_preview: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm_registry__email: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm__email: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const OMF_PATH: string;
	export const npm_config_version_git_message: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const NVM_BIN: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm__username: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm__username: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm__email: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm__username: string;
		TERM_PROGRAM: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm_registry__email: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		OMF_CONFIG: string;
		TMPDIR: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm_registry__username: string;
		npm_package_scripts_dev: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm__email: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm_registry__username: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_registry: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm_registry__email: string;
		npm_package_readmeFilename: string;
		USER: string;
		NVM_DIR: string;
		npm_package_description: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA__packaging_vsa_external_feeds_aggregate_npm_registry__username: string;
		PATH: string;
		npm_config_argv: string;
		_: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_scripts_preview: string;
		npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm_registry__email: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm__email: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		HOME: string;
		SHLVL: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		OMF_PATH: string;
		npm_config_version_git_message: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		NVM_BIN: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		npm_config___pkgs_dev_azure_com_msi_cie_Common_Components__packaging_msiavo_npm__username: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm__username: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
		npm_config___pkgs_dev_azure_com_msi_cie_VSA_CloudIntegrationServices__packaging_acs_client_feed_npm__email: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
