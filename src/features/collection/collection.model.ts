import type { CollectionConfig } from './collection.types';

export class Collection {
  constructor(readonly config: CollectionConfig) {}

  get thumbnails() {
    const sortedThumbnailPaths = this.sortPathsByIndex(
      this.config.thumbnailsConfig.paths,
    );
    const { data: picturesData } = this.config.picturesConfig;

    const thumbnailsCount = sortedThumbnailPaths.length;
    const picturesDataItemsCount = picturesData.length;

    if (thumbnailsCount !== picturesDataItemsCount) {
      throw new Error(
        `Collection ${String(this.config.id)}: the number of thumbnails (${String(thumbnailsCount)}) does not match the number of picture data entries (${String(picturesDataItemsCount)}).`,
      );
    }

    return sortedThumbnailPaths.map((path) => ({ path }));
  }

  get pictures() {
    const sortedPicturePaths = this.sortPathsByIndex(
      this.config.picturesConfig.paths,
    );
    const { data: picturesData } = this.config.picturesConfig;

    const picturePathsCount = sortedPicturePaths.length;
    const picturesCount = picturesData.flat().length;

    if (picturesCount !== picturePathsCount) {
      throw new Error(
        `Collection ${String(this.config.id)}: the number of pictures (${String(picturesCount)}) does not match the number of picture paths (${String(picturePathsCount)}).`,
      );
    }

    let pathIndex = 0;

    return picturesData.map((picturesDataItem) =>
      Array.isArray(picturesDataItem) ?
        picturesDataItem.map((subPicturesDataItem) => ({
          ...subPicturesDataItem,
          path: sortedPicturePaths[pathIndex]!,
          index: String(++pathIndex).padStart(3, '0'),
        }))
      : {
          ...picturesDataItem,
          path: sortedPicturePaths[pathIndex]!,
          index: String(++pathIndex).padStart(3, '0'),
        },
    );
  }

  get picturesCount() {
    return this.pictures.flat().length;
  }

  get baseInfo() {
    const { id, title, date } = this.config;
    return `collection ${String(id)}, ${title ? `${title}, ` : ''}${date}`;
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
