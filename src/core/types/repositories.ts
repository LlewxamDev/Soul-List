import type { ActivityRepository } from "../../repositories/activity/ActivityRepository";
import type { AfkRepository } from "../../repositories/afk/AfkRepository";
import type { EconomyRepository } from "../../repositories/economy/EconomyRepository";
import type { GameSessionRepository } from "../../repositories/games/GameSessionRepository";
import type { GroupRepository } from "../../repositories/groups/GroupRepository";
import type { FeatureToggleRepository } from "../../repositories/features/FeatureToggleRepository";
import type { NotesRepository } from "../../repositories/notes/NotesRepository";
import type { PremiumRepository } from "../../repositories/premium/PremiumRepository";
import type { SettingsRepository } from "../../repositories/settings/SettingsRepository";
import type { UserRepository } from "../../repositories/users/UserRepository";
import type { WarningRepository } from "../../repositories/warnings/WarningRepository";

export interface BotRepositories {
  users: UserRepository;
  groups: GroupRepository;
  features: FeatureToggleRepository;
  settings: SettingsRepository;
  premium: PremiumRepository;
  afk: AfkRepository;
  warnings: WarningRepository;
  notes: NotesRepository;
  activity: ActivityRepository;
  economy: EconomyRepository;
  games: GameSessionRepository;
}
