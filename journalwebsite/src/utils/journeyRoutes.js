// src/utils/journeyRoutes.js
import PAGE_MAP from '../config/pageMap';

/**
 * Get the ordered list of page IDs for a given day.
 */
export function getDayPages(day) {
  return (PAGE_MAP[day] || []).map(p => p.id);
}

/**
 * Normalize whatever’s in the URL to a valid pageId.
 * • If rawPageId matches one of your IDs, use it
 * • If it’s missing or invalid, fall back to the very first page
 */
export function normalizePageId(day, rawPageId) {
  const pages = getDayPages(day);
  if (pages.includes(rawPageId)) return rawPageId;
  return pages[0] || null;
}

/**
 * Given the current pageId, return the previous one (or null if at the start).
 */


export function getPrevPageId(day, pageId) {
  const pages = getDayPages(day);

  // Unique exception: always back from main-1 → checkin-2
  if (pageId === `${day}-main-1`) {
    return `${day}-checkin-2`;
  }

  const idx = pages.indexOf(pageId);
  return idx > 0 ? pages[idx - 1] : null;
}

/**
 * Given the current pageId, return the next one (or null if at the end).
 */
export function getNextPageId(day, pageId) {
  const pages = getDayPages(day);
  const idx = pages.indexOf(pageId);
  return idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;
}

/**
 * Simple percent-complete: (currentIndex + 1) / totalPages.
 * E.g. page 1 of 10 → 10%, page 5 → 50%, last page → 100%.
 */
export function getProgressPercent(day, pageId) {
  const pages = getDayPages(day);
  const idx = pages.indexOf(pageId);
  if (idx < 0) return 0;
  return Math.round(((idx + 1) / pages.length) * 100);
}

export function parsePageId(pageId) {
  const [dayStr, section, pageNum] = pageId.split('-')
  return { day: +dayStr, section, pageNum: +pageNum }
}