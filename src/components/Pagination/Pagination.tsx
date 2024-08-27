import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface PaginationProps {
  onChange: (page: number, offset: number) => void;
  count: number;
}

function Pagination({ onChange, count }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const totalItems = count;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onChange(12, (page - 1) * 12);
  };

  const getPaginationItems = () => {
    const maxVisiblePages = 10;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 4);
      const endPage = Math.min(totalPages, currentPage + 4);

      if (startPage > 1) pages.push(1, "...");
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages) pages.push("...", totalPages);
    }

    return pages;
  };

  const paginationItems = getPaginationItems();

  return (
    <PaginationRoot className="mt-10">
      <PaginationContent className="w-[800px] flex-wrap justify-center">
        <PaginationItem>
          {currentPage !== 1 && (
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className="cursor-pointer"
            />
          )}
        </PaginationItem>
        {paginationItems.map((page, index) =>
          typeof page === "number" ? (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(page)}
                isActive={page === currentPage}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink href="#">{page}</PaginationLink>
            </PaginationItem>
          )
        )}
        {currentPage !== totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationRoot>
  );
}

export default Pagination;
