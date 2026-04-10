import type { CommandCategory } from "../constants/categories";
import type { RegisteredCommand } from "./command";

export interface MenuCategoryView {
  key: CommandCategory;
  label: string;
  commands: RegisteredCommand[];
}
