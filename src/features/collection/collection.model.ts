import type { CollectionConfig } from './collection.types';

export class Collection {
  constructor(readonly config: CollectionConfig) {}

  get thumbnails() {
    const sortedPaths = this.sortPathsByIndex(
      this.config.thumbnailsConfig.paths,
    );
    return sortedPaths.map((path) => ({ path }));
  }

  get pictures() {
    const sortedPaths = this.sortPathsByIndex(this.config.picturesConfig.paths);
    const { data: picturesData } = this.config.picturesConfig;

    if (picturesData.flat().length !== sortedPaths.length) {
      throw new Error(
        `The number of picture data entries (${String(picturesData.length)}) does not match the number of picture paths (${String(sortedPaths.length)}).`,
      );
    }

    let pathIndex = 0;

    return picturesData.map((picturesDataEntry) =>
      Array.isArray(picturesDataEntry) ?
        picturesDataEntry.map((subPicturesDataEntry) => ({
          ...subPicturesDataEntry,
          path: sortedPaths[pathIndex]!,
          index: String(++pathIndex).padStart(3, '0'),
        }))
      : {
          ...picturesDataEntry,
          path: sortedPaths[pathIndex]!,
          index: String(++pathIndex).padStart(3, '0'),
        },
    );
  }

  get picturesCount() {
    return this.pictures.flat().length;
  }

  get baseInfo() {
    const { index, title, date } = this.config;
    return `collection ${String(index)}, ${title ? `${title}, ` : ''}${date}`;
  }

  get fullInfo() {
    return `${this.baseInfo}. ${String(this.picturesCount)} pictures`;
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
