/**
 * Typed build configuration, detection, migration, and package assembly for custom libcascade
 * WASM builds. Container execution is exported from `@libcascade/toolchain/driver`.
 */
export {
  defineBuild,
  mergeCompilerFlags,
  validateBuildConfig,
  variantCapabilities,
  variantOutputName,
  variantRequiresThreads,
  type BuildConfig,
  type BuildVariant,
  type CompilerFlags,
  type CustomBinding,
  type EmccEnvironment,
  type EmccSettingValue,
  type EmccSettings,
  type MemorySize,
  type OcctSymbol,
  type StrictBuildConfig,
  type VariantCapability,
  type VariantEmccSettings,
} from './config/index.ts';

export {
  assemble,
  collectSymbols,
  mergePackageExports,
  renderExports,
  writePackageExports,
  type AssembleResult,
  type CollectedSymbols,
  type ExportsEntry,
  type ExportsMap,
} from './assemble/index.ts';

export { parseVariantDts, splitDeclarations, type ParsedVariantDts } from './assemble/dts.ts';

export {
  blankComments,
  CAVEATS,
  check,
  closeOverCatalog,
  collectSourceFiles,
  detect,
  expandAliases,
  loadSymbolCatalog,
  renderBindings,
  renderCheckFailure,
  resolveSymbolName,
  scanSources,
  toDetectJson,
  type CatalogSymbol,
  type CheckResult,
  type DetectOptions,
  type DetectResult,
  type Provenance,
  type ScanResult,
  type SymbolCatalog,
  type SymbolReference,
} from './detect/index.ts';

export {
  mergeSettings,
  renderBuild,
  renderEmccFlags,
  serializeSetting,
  type RenderOptions,
  type RenderedBuild,
} from './config/render.ts';
