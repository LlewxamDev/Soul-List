import type { ActivityRepository } from "../../repositories/activity/ActivityRepository";
import type { AfkRepository } from "../../repositories/afk/AfkRepository";
import type { EconomyRepository } from "../../repositories/economy/EconomyRepository";
import type { GameSessionRepository } from "../../repositories/games/GameSessionRepository";
import type { GroupRepository } from "../../repositories/groups/GroupRepository";
import type { FeatureToggleRepository } from "../../repositories/features/FeatureToggleRepository";
import type { FamilyRepository } from "../../repositories/family/FamilyRepository";
import type { NotesRepository } from "../../repositories/notes/NotesRepository";
import type { PremiumRepository } from "../../repositories/premium/PremiumRepository";
import type { RpgRepository } from "../../repositories/rpg/RpgRepository";
import type { SettingsRepository } from "../../repositories/settings/SettingsRepository";
import type { UserRepository } from "../../repositories/users/UserRepository";
import type { WarningRepository } from "../../repositories/warnings/WarningRepository";

export interface BotRepositories {
  users: UserRepository;
  groups: GroupRepository;
  features: FeatureToggleRepository;
  family: FamilyRepository;
  settings: SettingsRepository;
  premium: PremiumRepository;
  rpg: RpgRepository;
  afk: AfkRepository;
  warnings: WarningRepository;
  notes: NotesRepository;
  activity: ActivityRepository;
  economy: EconomyRepository;
  games: GameSessionRepository;
}
