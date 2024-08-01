import { useEffect, useState, type RefObject } from 'react';

export const useGridNavigation = <T extends HTMLElement>(
  gridRef: RefObject<T>,
  gridItemsCount: number,
) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [gridColumnsCount, setGridColumnsCount] = useState(0);

  useEffect(() => {
    const updateGridColumnsCount = () => {
      const grid = gridRef.current;

      if (!grid) {
        throw new Error('gridRef is not assigned');
      }

      const gridTemplateColumns = window
        .getComputedStyle(grid)
        .getPropertyValue('grid-template-columns');

      const gridColumnsCount = gridTemplateColumns.split(' ').length;

      setGridColumnsCount(gridColumnsCount);
    };

    updateGridColumnsCount();
    window.addEventListener('resize', updateGridColumnsCount);

    return () => {
      window.removeEventListener('resize', updateGridColumnsCount);
    };
  }, [gridRef]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          setCurrentItemIndex((prevIndex) => (prevIndex + 1) % gridItemsCount);
          break;
        case 'ArrowLeft':
          setCurrentItemIndex(
            (prevIndex) => (prevIndex - 1 + gridItemsCount) % gridItemsCount,
          );
          break;
        case 'ArrowDown':
          if (currentItemIndex + gridColumnsCount > gridItemsCount - 1) break; // Prevent moving down if in the last row

          setCurrentItemIndex(
            (prevIndex) => (prevIndex + gridColumnsCount) % gridItemsCount,
          );
          break;
        case 'ArrowUp':
          if (currentItemIndex - gridColumnsCount < 0) break; // Prevent moving down if in the last row

          setCurrentItemIndex(
            (prevIndex) =>
              (prevIndex - gridColumnsCount + gridItemsCount) % gridItemsCount,
          );
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentItemIndex, gridItemsCount, gridColumnsCount]);

  return {
    currentItemIndex,
    setCurrentItemIndex,
  };
};
