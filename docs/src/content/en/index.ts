import { content as site } from "./site";
import { content as gettingStarted } from "./getting-started";
import { content as docs } from "./docs";
import { content as variables } from "./variables";
import { content as controlFlow } from "./control-flow";
import { content as loops } from "./loops";
import { content as functions } from "./functions";
import { content as classes } from "./classes";
import { content as asyncAwait } from "./async-await";
import { content as modules } from "./modules";
import { content as errorHandling } from "./error-handling";
import { content as consolePage } from "./console";
import { content as playground } from "./playground";
import { content as vscode } from "./vscode";
import { content as architecture } from "./architecture";
import { content as about } from "./about";

export const en = {
  ...site,
  ...gettingStarted,
  ...docs,
  ...variables,
  ...controlFlow,
  ...loops,
  ...functions,
  ...classes,
  ...asyncAwait,
  ...modules,
  ...errorHandling,
  ...consolePage,
  ...playground,
  ...vscode,
  ...architecture,
  ...about,
} as const;
