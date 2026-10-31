/**
 * Se'kret Bip Companions — public API
 *
 * Extracted from jussray/Sekret-Bip into a standalone module.
 * This package is the single source of truth for companion identities,
 * personalities, asset manifests, and production pipeline specs.
 */

// Identity and ID migration
export {
  NAMED_COMPANION_IDS,
  COMPANION_DISPLAY_NAMES,
  isNamedCompanionId,
  migratePersistedCompanionId,
  toLegacyPersistedCompanionId,
} from './identity';
export type {
  NamedCompanionId,
  LegacyPersistedCompanionId,
  LegacyWriteCompanionId,
} from './identity';

// Curriculum (character personalities and teaching goals)
export {
  COMPANION_CURRICULUM,
  getCompanionCurriculum,
  inferNightMode,
} from './curriculum';
export type {
  CompanionId,
  CompanionMode,
  CompanionRuntimeMode,
  CompanionCurriculum,
} from './curriculum';

// Display profiles (Suhana · Sy · Night · Cloud · Ja)
export {
  COMPANION_PROFILES,
  isSafetyTrigger,
  getCompanionGreeting,
} from './profiles';
export type {
  CompanionSurface,
  CompanionProfile,
} from './profiles';

// Teen companion asset types and manifest
export {
  TEEN_COMPANIONS,
  TEEN_COMPANION_POSES,
  TEEN_COMPANION_MANIFEST,
  getTeenCompanionAssetStatus,
} from './manifest';
export type {
  TeenCompanion,
  TeenCompanionPose,
  TeenCompanionPoseMap,
  CompanionAssetStatus,
  TeenCompanionAssetEntry,
} from './types';

// Production pipeline
export {
  PIPELINE_VERSION,
  COMPANION_DISPLAY_NAMES as PIPELINE_DISPLAY_NAMES,
  POSE_DESCRIPTIONS,
  COMPANION_BATCHES,
  PROMPT_TEMPLATE,
  buildCompanionPrompt,
} from './pipeline';
export type { CompanionBatch, CompanionBatchMember } from './pipeline';

// State and memory types
export type {
  MemorySummary,
  CompanionLevel,
  CompanionCheckIn,
  CompanionState,
  CompanionActivityInput,
} from './state';
