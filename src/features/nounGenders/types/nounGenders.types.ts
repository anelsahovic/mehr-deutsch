import type { IconType } from 'react-icons/lib';

export interface NounEnding {
  ending: string;
  examples: string[];
  exceptions: string[];
}

export interface NounGroup {
  group: string;
  examples: string[];
  exceptions: string[];
}

export interface NounData {
  endings: NounEnding[];
  groups: NounGroup[];
}

export interface GenderData {
  title: string;
  icon: IconType;
  description: string;
  color: 'blue' | 'rose' | 'green';
  data: NounData;
}
