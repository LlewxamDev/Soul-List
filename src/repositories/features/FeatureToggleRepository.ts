import { and, eq } from "drizzle-orm";
import type { DatabaseClient } from "../../database/client";
import { featureTogglesTable } from "../../database/schema";

export class FeatureToggleRepository {
  public constructor(private readonly database: DatabaseClient) {}

  private key(feature: string, groupId: string): string {
    return `group:${groupId}:${feature}`;
  }

  public async isEnabled(feature: string, groupId: string): Promise<boolean> {
    const record = await this.database.db.query.featureTogglesTable.findFirst({
      where: and(
        eq(featureTogglesTable.key, this.key(feature, groupId)),
        eq(featureTogglesTable.scope, "group"),
        eq(featureTogglesTable.scopeId, groupId)
      )
    });
    return record?.enabled ?? false;
  }

  public async setEnabled(feature: string, groupId: string, enabled: boolean): Promise<void> {
    await this.database.db
      .insert(featureTogglesTable)
      .values({
        key: this.key(feature, groupId),
        enabled,
        scope: "group",
        scopeId: groupId
      })
      .onConflictDoUpdate({
        target: featureTogglesTable.key,
        set: { enabled, scope: "group", scopeId: groupId, updatedAt: new Date() }
      });
  }
}
