import { z } from 'zod';
import type { PnpmWorkspaceSpecification } from '../pnpm-workspace-schema';

const dependencySchema = z.record(z.string(), z.string());
const catalogSchema = z.record(z.string(), z.string());

const peerDependencyMetaValueSchema = z.object({
  optional: z.boolean().optional(),
}).strict();

const peerDependencyMetaSchema = z.record(
  z.string(),
  peerDependencyMetaValueSchema,
);

const packageExtensionSchema = z.object({
  dependencies: z.record(z.string(), z.string()).optional(),
  optionalDependencies: z.record(z.string(), z.string()).optional(),
  peerDependencies: z.record(z.string(), z.string()).optional(),
  peerDependenciesMeta: peerDependencyMetaSchema.optional(),
}).strict();

const peerDependencyRulesSchema = z.object({
  ignoreMissing: z.array(z.string()).optional(),
  allowedVersions: z.record(z.string(), z.string()).optional(),
  allowAny: z.array(z.string()).optional(),
}).strict();

const updateConfigSchema = z.object({
  ignoreDependencies: z.array(z.string()).optional(),
}).strict();

const auditConfigSchema = z.object({
  ignoreCves: z.array(z.string()).optional(),
  ignoreGhsas: z.array(z.string()).optional(),
}).strict();

const supportedArchitecturesSchema = z.object({
  os: z.array(z.string()).optional(),
  cpu: z.array(z.string()).optional(),
  libc: z.array(z.string()).optional(),
}).strict();

const executionEnvSchema = z.object({
  nodeVersion: z.string().optional(),
}).strict();

export const pnpmSettingsSchema = z.object({
  packages: z.array(z.string()).optional(),
  catalog: dependencySchema.optional(),
  catalogs: z.record(z.string(), catalogSchema).optional(),
  catalogMode: z.enum(['strict', 'prefer', 'manual']).optional(),
  cleanupUnusedCatalogs: z.boolean().optional(),
  onlyBuiltDependencies: z.array(z.string()).optional(),
  overrides: z.record(z.string(), z.string()).optional(),
  packageExtensions: z.record(z.string(), packageExtensionSchema).optional(),
  peerDependencyRules: peerDependencyRulesSchema.optional(),
  neverBuiltDependencies: z.array(z.string()).optional(),
  dangerouslyAllowAllBuilds: z.boolean().optional(),
  onlyBuiltDependenciesFile: z.string().optional(),
  ignoredBuiltDependencies: z.array(z.string()).optional(),
  allowedDeprecatedVersions: z.record(z.string(), z.string()).optional(),
  patchedDependencies: z.record(z.string(), z.string()).optional(),
  allowUnusedPatches: z.boolean().optional(),
  allowNonAppliedPatches: z.boolean().optional(),
  ignorePatchFailures: z.boolean().optional(),
  updateConfig: updateConfigSchema.optional(),
  configDependencies: z.record(z.string(), z.string()).optional(),
  auditConfig: auditConfigSchema.optional(),
  requiredScripts: z.array(z.string()).optional(),
  supportedArchitectures: supportedArchitecturesSchema.optional(),
  ignoredOptionalDependencies: z.array(z.string()).optional(),
  executionEnv: executionEnvSchema.optional(),
  hoist: z.boolean().optional(),
  hoistWorkspacePackages: z.boolean().optional(),
  hoistPattern: z.array(z.string()).optional(),
  publicHoistPattern: z.array(z.string()).optional(),
  shamefullyHoist: z.boolean().optional(),
  modulesDir: z.string().optional(),
  nodeLinker: z.enum(['isolated', 'hoisted', 'pnp']).optional(),
  symlink: z.boolean().optional(),
  enableModulesDir: z.boolean().optional(),
  virtualStoreDir: z.string().optional(),
  virtualStoreDirMaxLength: z.number().optional(),
  packageImportMethod: z
    .enum(['auto', 'hardlink', 'copy', 'clone', 'clone-or-copy'])
    .optional(),
  modulesCacheMaxAge: z.number().optional(),
  dlxCacheMaxAge: z.number().optional(),
  storeDir: z.string().optional(),
  verifyStoreIntegrity: z.boolean().optional(),
  strictStorePkgContentCheck: z.boolean().optional(),
  enableGlobalVirtualStore: z.boolean().optional(),
  lockfile: z.boolean().optional(),
  preferFrozenLockfile: z.boolean().optional(),
  lockfileIncludeTarballUrl: z.boolean().optional(),
  gitBranchLockfile: z.boolean().optional(),
  mergeGitBranchLockfilesBranchPattern: z.array(z.string()).optional(),
  peersSuffixMaxLength: z.number().optional(),
  registry: z.string().optional(),
  ca: z.string().optional(),
  cafile: z.string().optional(),
  cert: z.string().optional(),
  key: z.string().optional(),
  gitShallowHosts: z.array(z.string()).optional(),
  httpsProxy: z.string().optional(),
  proxy: z.string().optional(),
  localAddress: z.string().optional(),
  maxsockets: z.number().optional(),
  noproxy: z.string().optional(),
  strictSsl: z.boolean().optional(),
  networkConcurrency: z.number().optional(),
  fetchRetries: z.number().optional(),
  fetchRetryFactor: z.number().optional(),
  fetchRetryMintimeout: z.number().optional(),
  fetchRetryMaxtimeout: z.number().optional(),
  fetchTimeout: z.number().optional(),
  autoInstallPeers: z.boolean().optional(),
  dedupePeerDependents: z.boolean().optional(),
  strictPeerDependencies: z.boolean().optional(),
  resolvePeersFromWorkspaceRoot: z.boolean().optional(),
  color: z.enum(['always', 'auto', 'never']).optional(),
  loglevel: z.enum(['debug', 'info', 'warn', 'error']).optional(),
  useBetaCli: z.boolean().optional(),
  recursiveInstall: z.boolean().optional(),
  engineStrict: z.boolean().optional(),
  npmPath: z.string().optional(),
  packageManagerStrict: z.boolean().optional(),
  packageManagerStrictVersion: z.boolean().optional(),
  managePackageManagerVersions: z.boolean().optional(),
  ignoreScripts: z.boolean().optional(),
  ignoreDepScripts: z.boolean().optional(),
  childConcurrency: z.number().optional(),
  sideEffectsCache: z.boolean().optional(),
  sideEffectsCacheReadonly: z.boolean().optional(),
  unsafePerm: z.boolean().optional(),
  nodeOptions: z.string().optional(),
  verifyDepsBeforeRun: z
    .union([
      z.enum(['install', 'warn', 'error', 'prompt']),
      z.literal(false),
    ])
    .optional(),
  strictDepBuilds: z.boolean().optional(),
  useNodeVersion: z.string().optional(),
  nodeVersion: z.string().optional(),
  linkWorkspacePackages: z.union([z.boolean(), z.literal('deep')]).optional(),
  injectWorkspacePackages: z.boolean().optional(),
  syncInjectedDepsAfterScripts: z.array(z.string()).optional(),
  preferWorkspacePackages: z.boolean().optional(),
  sharedWorkspaceLockfile: z.boolean().optional(),
  saveWorkspaceProtocol: z
    .union([z.boolean(), z.literal('rolling')])
    .optional(),
  includeWorkspaceRoot: z.boolean().optional(),
  ignoreWorkspaceCycles: z.boolean().optional(),
  ignoreWorkspaceRootCheck: z.boolean().optional(),
  disallowWorkspaceCycles: z.boolean().optional(),
  workspaceConcurrency: z.number().optional(),
  failIfNoMatch: z.boolean().optional(),
  forceLegacyDeploy: z.boolean().optional(),
  savePrefix: z.enum(['^', '~', '']).optional(),
  tag: z.string().optional(),
  globalDir: z.string().optional(),
  globalBinDir: z.string().optional(),
  stateDir: z.string().optional(),
  cacheDir: z.string().optional(),
  useStderr: z.boolean().optional(),
  updateNotifier: z.boolean().optional(),
  preferSymlinkedExecutables: z.boolean().optional(),
  ignoreCompatibilityDb: z.boolean().optional(),
  resolutionMode: z.enum(['highest', 'time-based', 'lowest-direct']).optional(),
  registrySupportsTimeField: z.boolean().optional(),
  extendNodePath: z.boolean().optional(),
  deployAllFiles: z.boolean().optional(),
  dedupeDirectDeps: z.boolean().optional(),
  dedupeInjectedDeps: z.boolean().optional(),
  optimisticRepeatInstall: z.boolean().optional(),
  gitChecks: z.boolean().optional(),
  publishBranch: z.string().optional(),
  pnpmfile: z.string().optional(),
  globalPnpmfile: z.string().optional(),
  ignorePnpmfile: z.boolean().optional(),
  patchesDir: z.string().optional(),
  enablePrePostScripts: z.boolean().optional(),
  scriptShell: z.string().optional(),
  shellEmulator: z.boolean().optional(),
  saveExact: z.boolean().optional(),
  minimumReleaseAge: z.number().optional(),
  minimumReleaseAgeExclude: z.array(z.string()).optional(),
  preferOffline: z.boolean().optional(),
  trustPolicy: z.enum(['off', 'no-downgrade']).optional(),
  trustPolicyExclude: z.array(z.string()).optional(),
  allowBuilds: z.record(z.string(), z.boolean()).optional(),
  blockExoticSubdeps: z.boolean().optional(),
  trustPolicyIgnoreAfter: z.number().optional(),
  auditLevel: z.enum(['low', 'moderate', 'high', 'critical']).optional(),
}).strict() satisfies z.ZodType<PnpmWorkspaceSpecification>;
