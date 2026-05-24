import React, { useState, useMemo } from 'react';
import {
  Search,
  Phone,
  MapPin,
  Building,
  BookOpen,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import styles from './ITIInstitutes.module.css';

const ITIInstitutes = ({ data }) => {

  // ✅ DB DATA
  const institutes = data ?? [];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [expandedInstitutes, setExpandedInstitutes] = useState(new Set());

  // Toggle expand/collapse
  const toggleExpand = (instituteId) => {
    const newExpanded = new Set(expandedInstitutes);
    newExpanded.has(instituteId)
      ? newExpanded.delete(instituteId)
      : newExpanded.add(instituteId);
    setExpandedInstitutes(newExpanded);
  };

  const isExpanded = (id) => expandedInstitutes.has(id);

  /* =========================
     FILTER OPTIONS (UI SAME)
     ========================= */
  const instituteTypes = [
    { value: 'all', label: 'All Institutes', count: institutes.length },
    { value: 'government', label: 'Government ITIs', count: institutes.filter(i => i.type === 'government').length },
    { value: 'private', label: 'Private ITIs', count: institutes.filter(i => i.type === 'private').length },
    { value: 'sponsored', label: 'Govt Sponsored ITCs', count: institutes.filter(i => i.type === 'sponsored').length },
    { value: 'women', label: "Women's ITIs", count: institutes.filter(i => i.type === 'women').length },
    { value: 'special', label: 'Special ITIs', count: institutes.filter(i => i.type === 'special').length }
  ];

  /* =========================
     FILTER LOGIC (FIXED)
     ========================= */
  const filteredInstitutes = useMemo(() => {
    return institutes.filter(institute => {
      const matchesSearch =
        institute.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        institute.address?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedType === 'all' || institute.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType, institutes]);

  /* =========================
     HELPERS (UNCHANGED)
     ========================= */
  const getTypeBadgeColor = (type) => ({
    government: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    private: 'linear-gradient(135deg, #f59e0b, #d97706)',
    sponsored: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    women: 'linear-gradient(135deg, #ec4899, #db2777)',
    special: 'linear-gradient(135deg, #10b981, #059669)'
  }[type]);

  const getTypeLabel = (type) => ({
    government: 'Government ITI',
    private: 'Private ITI',
    sponsored: 'Govt Sponsored ITC',
    women: "Women's ITI",
    special: 'Special ITI'
  }[type]);

  const getDurationClass = (duration) => ({
    '2YR': styles.duration2yr,
    '1YR': styles.duration1yr,
    '6MO': styles.duration6mo
  }[duration] || '');

  const getDurationText = (duration) => ({
    '2YR': '2 Years',
    '1YR': '1 Year',
    '6MO': '6 Months'
  }[duration] || duration);

  /* =========================
     STATS (FIXED)
     ========================= */
  const totalTrades = institutes.reduce(
    (acc, inst) => acc + (inst.trades?.length || 0), 0
  );

  const uniqueCourses = [
    ...new Set(
      institutes.flatMap(inst => inst.trades?.map(t => t.name) || [])
    )
  ].length;

  return (
    <div className="container mt-lg-5 pt-lg-5">

      {/* HEADER (UNCHANGED) */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          ITI, ITCs & Jr Polytechnic in West Bengal
        </h1>
        <p className={styles.subtitle}>
          Name and address of govt. ITIs and Govt. sponsored ITCs and private ITCs
          with trades available under craftsmen training scheme (ncvt)
        </p>
      </div>

      <div className={styles.content}>

        {/* FILTER SECTION (UNCHANGED UI) */}
        <div className={styles.filterSection}>
          <div className="d-flex align-items-center gap-2">

            <div className={styles.searchBox}>
              <Search size={16} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search institutes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className={styles.select}
            >
              {instituteTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {(searchTerm || selectedType !== 'all') && (
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                }}
              >
                <X size={12} className="me-1" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* GRID (UNCHANGED UI) */}
        {filteredInstitutes.length > 0 ? (
          <div className={styles.instituteGrid}>
            {filteredInstitutes.map((institute, index) => {

              const trades = institute.trades || [];
              const showExpandButton = trades.length > 6;
              const isInstituteExpanded = isExpanded(institute.id);
              const visibleTrades = isInstituteExpanded
                ? trades
                : trades.slice(0, 6);

              return (
                <div
                  key={institute.id}
                  className={`${styles.instituteCard} ${styles.fadeInUp}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >

                  <div className={styles.instituteHeader}>
                    <h3 className={styles.instituteName}>{institute.name}</h3>
                    <span
                      className={styles.instituteType}
                      style={{ background: getTypeBadgeColor(institute.type) }}
                    >
                      {getTypeLabel(institute.type)}
                    </span>
                  </div>

                  <div className={styles.instituteAddress}>
                    <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                    <span className="small">{institute.address}</span>
                  </div>

                  {institute.phone && (
                    <div className={styles.contactInfo}>
                      <Phone size={14} className={styles.phoneIcon} />
                      <span className="small">{institute.phone}</span>
                    </div>
                  )}

                  <div className={styles.tradesSection}>
                    <div className={styles.tradesHeader}>
                      <BookOpen size={16} />
                      <span>{trades.length} Trades</span>

                       <div className={styles.durationLegend}>
                        <span className={styles.legendItem}>
                          <span className={`${styles.legendDot} ${styles.legend2yr}`}></span>
                          2 Years
                        </span>

                        <span className={styles.legendItem}>
                          <span className={`${styles.legendDot} ${styles.legend1yr}`}></span>
                          1 Year
                        </span>

                        <span className={styles.legendItem}>
                          <span className={`${styles.legendDot} ${styles.legend6mo}`}></span>
                          6 Months
                        </span>
                      </div>

                    </div>

                    <div className={styles.tradesGrid}>
                      {visibleTrades.map((trade, idx) => (
                        <span
                          key={idx}
                          className={`${styles.tradeBadge} ${getDurationClass(trade.duration)}`}
                          title={`${trade.name} - ${getDurationText(trade.duration)}`}
                        >
                          {trade.name}
                        </span>
                      ))}
                    </div>

                    {showExpandButton && (
                      <button
                        className={isInstituteExpanded ? styles.collapseButton : styles.expandButton}
                        onClick={() => toggleExpand(institute.id)}
                      >
                        {isInstituteExpanded ? (
                          <>
                            <ChevronUp size={14} /> Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={14} /> Show All {trades.length} Trades
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Building size={64} className={styles.emptyIcon} />
            <h4 className={styles.emptyTitle}>No institutes found</h4>
            <p className={styles.emptyText}>
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ITIInstitutes;

