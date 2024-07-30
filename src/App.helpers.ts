// Sort files based on their numeric index
export const sortFilesByIndex = (paths: string[]): string[] => {
  const getFileIndex = (path: string): number => {
    const match = path.match(/\d+(?=\.)/);
    return match ? parseInt(match[0], 10) : Infinity;
  };

  return paths.sort((a, b) => getFileIndex(a) - getFileIndex(b));
};
