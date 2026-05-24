"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { careers, courses, colleges, exams, scholarships } from "../../data/mockData";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  // Merge all data
  const allData = [...careers, ...courses, ...colleges, ...exams, ...scholarships];

  // Filter suggestions
  const suggestions = allData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column align-items-center pt-5"
          style={{ zIndex: 2000 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Search Input */}
          <div
            className="d-flex align-items-center gap-3 shadow-sm p-3 rounded"
            style={{ width: "80%", maxWidth: "600px", border: "1px solid #ddd" }}
          >
            <Search size={24} />
            <input
              type="text"
              placeholder="Search careers, exams, colleges..."
              className="form-control border-0"
              style={{ fontSize: "1.2rem" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => {
                setQuery("");
                onClose();
              }}
            />
          </div>

          {/* Suggestions */}
          {query && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white mt-3 rounded shadow p-3"
              style={{ width: "80%", maxWidth: "600px", border: "1px solid #eee" }}
            >
              {suggestions.length > 0 ? (
                suggestions.map((item, i) => (
                  <div
                    key={i}
                    className="p-2 rounded hover-bg"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setQuery(item.name);
                      onClose();
                    }}
                  >
                    <strong>{item.name}</strong>
                    <div style={{ fontSize: "0.8rem", color: "gray" }}>
                      {item.type} — {item.description}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-2 text-muted">No results found</div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
