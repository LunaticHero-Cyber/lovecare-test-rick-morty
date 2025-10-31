import { Character } from './Character';

export interface RickMortyList {
  info: Info;
  results: Character[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
