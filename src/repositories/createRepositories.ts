import type { DatabaseClient } from "../database/client";
import type { BotRepositories } from "../core/types/repositories";
import { ActivityRepository } from "./activity/ActivityRepository";
import { AfkRepository } from "./afk/AfkRepository";
import { EconomyRepository } from "./economy/EconomyRepository";
import { GameSessionRepository } from "./games/GameSessionRepository";
import { GroupRepository } from "./groups/GroupRepository";
import { FeatureToggleRepository } from "./features/FeatureToggleRepository";
import { FamilyRepository } from "./family/FamilyRepository";
import { NotesRepository } from "./notes/NotesRepository";
import { PremiumRepository } from "./premium/PremiumRepository";
import { RpgRepository } from "./rpg/RpgRepository";
import { SettingsRepository } from "./settings/SettingsRepository";
import { UserRepository } from "./users/UserRepository";
import { WarningRepository } from "./warnings/WarningRepository";

export function createRepositories(database: DatabaseClient): BotRepositories {
  return {
    users: new UserRepository(database),
    groups: new GroupRepository(database),
    features: new FeatureToggleRepository(database),
    family: new FamilyRepository(database),
    settings: new SettingsRepository(database),
    premium: new PremiumRepository(database),
    rpg: new RpgRepository(new SettingsRepository(database)),
    afk: new AfkRepository(database),
    warnings: new WarningRepository(database),
    notes: new NotesRepository(database),
    activity: new ActivityRepository(database),
    economy: new EconomyRepository(database),
    games: new GameSessionRepository(database)
  };
}
