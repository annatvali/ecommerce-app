import React, { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <button
          onClick={handlePrev}
          className={`px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md border border-gray-300 hover:bg-gray-100 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={currentPage === 1}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <span className="text-sm font-normal text-gray-500 mx-4">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          className={`px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md border border-gray-300 hover:bg-gray-100 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
