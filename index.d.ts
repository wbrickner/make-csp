export interface CSPOptions {
  scripts?: string[];
  styles?: string[];
  images?: string[];
  connections?: string[];
  frames?: string[];
}

/// Generate a Content Security Policy (eliminates duplicate domains)
export function makeCSP(options: CSPOptions): string;