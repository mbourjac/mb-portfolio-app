import type { CollectionConfig } from './collection.types';

export class Collection {
  constructor(readonly config: CollectionConfig) {}

  get baseInfo() {
    const { index, title, date } = this.config;
    return `collection ${String(index)}, ${title ? `${title}, ` : ''}${date}`;
  }

  get fullInfo() {
    return `${this.baseInfo}. ${String(this.pictures.length)} pictures`;
  }

  get thumbnails() {
    const sortedPaths = this.sortPathsByIndex(
      this.config.thumbnailsConfig.paths,
    );
    return sortedPaths.map((path) => ({ path }));
  }

  get pictures() {
    const sortedPaths = this.sortPathsByIndex(this.config.picturesConfig.paths);
    const { data: picturesData } = this.config.picturesConfig;

    if (picturesData.length !== sortedPaths.length) {
      throw new Error(
        `The number of picture data entries (${String(picturesData.length)}) does not match the number of picture paths (${String(sortedPaths.length)}).`,
      );
    }

    return picturesData.map((picturesDataEntry, index) => ({
      ...picturesDataEntry,
      path: sortedPaths[index]!,
    }));
  }

  private sortPathsByIndex(paths: Record<string, string>) {
    const getPathIndex = (path: string): number => {
      const match = path.match(/\d+(?=\.)/);
      return match ? parseInt(match[0], 10) : Infinity;
    };

    return Object.values(paths).sort(
      (a, b) => getPathIndex(a) - getPathIndex(b),
    );
  }
}
