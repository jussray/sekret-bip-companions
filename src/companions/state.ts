/**
 * Companion state and memory types.
 * Extracted from jussray/Sekret-Bip · types/sekretCompanion.ts
 */

export interface MemorySummary {
  favoriteMood: string;
  favoriteSekret: string;
  commonTopics: string[];
  streakDays: number;
  lastCheckIn: string;
  comfortToolsUsed: string[];
  recurringEmotions: string[];
  recurringStruggles: string[];
  importantMilestones: string[];
  daysActive: number;
  conversations: number;
  journalsWritten: number;
  voiceBips: number;
  comfortActions: number;
  // Pattern noticing — drives companion awareness
  comfortWordPattern?: string;
  hasDeferredGoal?: boolean;
  recurringEntity?: string;
  // Growth tracking
  winMoments?: string[];
  proudMoodCount?: number;
  recentGrowth?: string;
  winningStreak?: number;
}

export interface CompanionLevel {
  level: number;
  title: string;
  progress: number;
  nextLevel: number;
  unlockedGreetings: string[];
  unlockedDepth: string[];
  encouragements: string[];
  personalityResponses: string[];
}

export interface CompanionCheckIn {
  id: string;
  message: string;
  tone: 'gentle' | 'warm' | 'protective';
}

export interface CompanionState {
  memorySummary: MemorySummary;
  companionLevel: CompanionLevel;
  greeting: string;
  presenceMessage: string;
  checkIn: CompanionCheckIn | null;
  lastUpdated: string;
  personality: string;
}

export interface CompanionActivityInput {
  selectedSekret?: string;
  mood?: string;
  journalEntries?: Array<{ id?: string | number; text?: string; mood?: string; date?: string }>;
  moodHistory?: Array<{ id?: string | number; mood?: string; date?: string }>;
  voiceNotes?: Array<{ id?: string | number; title?: string; type?: string; date?: string }>;
  comfortSessions?: Array<{ id?: string | number; type?: string; date?: string }>;
  circlePosts?: Array<{ id?: string | number; text?: string; date?: string }>;
  streakDays?: number;
  lastOpenDate?: string;
  screen?: string;
  isLateNight?: boolean;
  journalText?: string;
  oracleSignals?: {
    personalityNote?: string;
    growthEdge?: string;
    strategyLead?: string;
    strategyPole?: 'A' | 'B';
  };
}
