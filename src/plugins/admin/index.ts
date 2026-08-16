import type { BotPlugin } from "../../core/types/plugin";
import { adminsCommand } from "./commands/admins";
import { banCommand } from "./commands/ban";
import { closeCommand } from "./commands/close";
import { muteCommand } from "./commands/mute";
import { openCommand } from "./commands/open";
import { tagAllCommand } from "./commands/tagall";
import { unbanCommand } from "./commands/unban";
import { warnCommand } from "./commands/warn";
import {
  demoteParticipantCommand,
  groupLinkCommand,
  promoteParticipantCommand,
  removeParticipantCommand,
  revokeGroupLinkCommand
} from "./commands/groupActions";
import { groupUtilitiesCommands } from "./commands/groupUtilities";
import { groupFeatureCommands } from "./commands/groupFeatureCommands";
import { noteCommands } from "./commands/noteCommands";
import { groupMembershipCommands } from "./commands/groupMembership";
import { warningCommands } from "./commands/warningCommands";
import { groupMediaConfigurationCommands } from "./commands/groupMediaConfiguration";
import { groupIdCommand } from "./commands/groupIdentity";
import { adminExpansionCommands } from "./commands/adminMenuExpansion";

const plugin: BotPlugin = {
  manifest: {
    id: "admin",
    name: "Admin Commands",
    version: "1.0.0",
    enabledByDefault: true,
    categories: ["admin", "moderation"]
  },
  commands: [
    adminsCommand,
    tagAllCommand,
    warnCommand,
    banCommand,
    unbanCommand,
    muteCommand,
    openCommand,
    closeCommand,
    removeParticipantCommand,
    promoteParticipantCommand,
    demoteParticipantCommand,
    groupLinkCommand,
    revokeGroupLinkCommand,
    ...groupUtilitiesCommands,
    ...groupFeatureCommands,
    ...noteCommands,
    ...groupMembershipCommands,
    ...warningCommands,
    ...groupMediaConfigurationCommands,
    groupIdCommand,
    ...adminExpansionCommands
  ]
};

export default plugin;
