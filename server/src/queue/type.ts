import { BotSource } from "@prisma/client";

export interface QSource extends BotSource {
  embedding: string;
  maxDepth?: number;
  maxLinks?: number;
  chunkSize: number;
  chunkOverlap: number;
  usePuppeteerFetch?: boolean;
  doNotClosePuppeteer?: boolean;
}
