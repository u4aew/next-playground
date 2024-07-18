export const createPageArray = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const pages = [];
  const maxPagesToShow = 7; // Число страниц, которые мы хотим отображать

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPages = [1];
    const endPages = [totalPages];

    if (currentPage <= 4) {
      pages.push(...startPages);
      for (let i = 2; i <= 5; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(...endPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(...startPages);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages - 1; i++) {
        pages.push(i);
      }
      pages.push(...endPages);
    } else {
      pages.push(...startPages);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(...endPages);
    }
  }

  return pages;
};
