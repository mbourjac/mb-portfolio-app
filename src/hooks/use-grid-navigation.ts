import { useEffect, useRef, useState, type RefObject } from 'react';

export const useGridNavigation = <T extends HTMLElement>(
  gridRef: RefObject<T>,
  gridItemsCount: number,
  initialIndex?: number,
) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(initialIndex ?? 0);
  const [gridColumnsCount, setGridColumnsCount] = useState(0);
  const itemsRefs = useRef<(HTMLElement | null)[]>([]);

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
          event.preventDefault();
          setCurrentItemIndex((prevIndex) => (prevIndex + 1) % gridItemsCount);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          setCurrentItemIndex(
            (prevIndex) => (prevIndex - 1 + gridItemsCount) % gridItemsCount,
          );
          break;
        case 'ArrowDown':
          if (currentItemIndex + gridColumnsCount > gridItemsCount - 1) break; // Prevent moving down from the last row

          event.preventDefault();
          setCurrentItemIndex(
            (prevIndex) => (prevIndex + gridColumnsCount) % gridItemsCount,
          );
          break;
        case 'ArrowUp':
          if (currentItemIndex - gridColumnsCount < 0) break; // Prevent moving up from the first row

          event.preventDefault();
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

  useEffect(() => {
    const currentItem = itemsRefs.current[currentItemIndex];

    if (currentItem) {
      currentItem.focus();
    }
  }, [currentItemIndex]);

  return {
    currentItemIndex,
    setCurrentItemIndex,
    itemsRefs,
  };
};
