// Sort files based on their numeric index
export const sortFilesByIndex = (filePaths: string[]): string[] => {
  const getFileIndex = (filePath: string): number => {
    const match = filePath.match(/\d+(?=\.\w+$)/);
    return match ? parseInt(match[0], 10) : Infinity;
  };

  return filePaths.sort((a, b) => getFileIndex(a) - getFileIndex(b));
};
