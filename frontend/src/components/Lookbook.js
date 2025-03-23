import React, { useState, useEffect, useCallback } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaInstagram } from "react-icons/fa";
import styles from "./style.component/Lookbook.module.css";

const Lookbook = () => {
  const [looks, setLooks] = useState([]);
  const [filters, setFilters] = useState({
    season: "all",
    type: "all",
    color: "all",
  });
  const [selectedLook, setSelectedLook] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchLooks = useCallback(async () => {
    const newLooks = [
      {
        id: 1,
        image: "/assets/lookbook-1.jpg",
        season: "CU",
        type: "To",
        color: "Xanh",
      },
      { 
        id: 2,
        image: "/assets/lookbook-2.jpg",
        season: "BA",
        type: "Nhỏ",
        color: "Đen",
      },
      {
        id: 3,
        image: "/assets/lookbook-3.jpg",
        season: "BA",
        type: "Nhỏ",
        color: "Xanh",
      },
      {
        id: 4,
        image: "/assets/lookbook-4.jpg",
        season: "CU",
        type: "To",
        color: "Xanh",
      },
      {
        id: 5,
        image: "/assets/lookbook-5.jpg",
        season: "CU",
        type: "To",
        color: "Trắng",
      },
    ];

    // Giả lập việc tải 6 ảnh mỗi lần
    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;
    const pageData = newLooks.slice(startIndex, endIndex);

    // Filter the looks based on the selected filters
    const filteredPageData = pageData.filter(
      (look) =>
        (filters.season === "all" || look.season === filters.season) &&
        (filters.type === "all" || look.type === filters.type) &&
        (filters.color === "all" || look.color === filters.color)
    );

    if (filteredPageData.length > 0) {
      setLooks((prevLooks) => [...prevLooks, ...filteredPageData]);
    } else {
      setHasMore(false);
    }
  }, [page, filters]);

  useEffect(() => {
    setLooks([]); // Reset looks when filters change
    setHasMore(true); // Reset "hasMore" when filters change
    setPage(1); // Reset page to 1
  }, [filters]);

  useEffect(() => {
    fetchLooks();
  }, [fetchLooks, page]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={styles.lookbookContainer}>
      <h1 className={styles.lookbookTitle}>Bộ Sưu Tập của PomDu</h1>

      <div className={styles.filterContainer}>
        <select onChange={(e) => handleFilterChange("season", e.target.value)}>
          <option value="all">Tất cả loại</option>
          <option value="CU">Cảm ứng</option>
          <option value="BA">Bấm</option>
        </select>
        <select onChange={(e) => handleFilterChange("type", e.target.value)}>
          <option value="all">Tất cả kiểu</option>
          <option value="To">To</option>
          <option value="Nhỏ">Nhỏ</option>
        </select>
        <select onChange={(e) => handleFilterChange("color", e.target.value)}>
          <option value="all">Tất cả màu</option>
          <option value="Xanh">Xanh</option>
          <option value="Đen">Đen</option>
          <option value="Vàng">Vàng</option>
        </select>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.lookbookGrid}
        columnClassName={styles.lookbookGridColumn}
      >
        {looks.map((look) => (
          <motion.div
            key={`${look.id}-${filters.season}-${filters.type}-${filters.color}`}
            className={styles.lookItem}
            layoutId={`look-${look.id}-${filters.season}-${filters.type}-${filters.color}`}
            onClick={() => setSelectedLook(look)}
          >
            <img
              src={look.image}
              alt={`Look ${look.id}`}
              className={styles.lookImage}
            />
            <div className={styles.lookOverlay}>
              <p>{look.season}</p>
              <p>{look.type}</p>
              <p>{look.color}</p>
            </div>
          </motion.div>
        ))}
      </Masonry>

      {hasMore && (
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className={styles.loadMoreButton}
        >
          Xem thêm
        </button>
      )}

      <AnimatePresence>
        {selectedLook && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              layoutId={`look-${selectedLook.id}`}
            >
              <img
                src={selectedLook.image}
                alt={`Look ${selectedLook.id}`}
                className={styles.modalImage}
              />
              <div className={styles.modalContent}>
                <h2>Chi tiết Bộ sưu tập</h2>
                <p>Loại: {selectedLook.season}</p>
                <p>Kiểu: {selectedLook.type}</p>
                <p>Màu sắc: {selectedLook.color}</p>
                <button className={styles.shopButton}>Mua ngay</button>
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedLook(null)}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       
      </div>
   
  );
};

export default Lookbook;
