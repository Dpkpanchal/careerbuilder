"use client";

import React from "react";

// WhatsApp-style avatar background palette
const WHATSAPP_COLORS = [
  "#F06292", // pink
  "#BA68C8", // purple
  "#9575CD", // deep purple
  "#4FC3F7", // light blue
  "#4DD0E1", // cyan
  "#4DB6AC", // teal
  "#81C784", // green
  "#AED581", // light green
  "#FFD54F", // amber
  "#FFB74D", // orange
  "#FF8A65", // deep orange
  "#90A4AE"  // blue-grey
];

// Deterministic color selection (stable for same name)
function getColorForName(name = "") {
  if (!name) return WHATSAPP_COLORS[0];

  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash % WHATSAPP_COLORS.length);
  return WHATSAPP_COLORS[index];
}

// Extract initials
function getInitials(name = "") {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() || "?";

  return (
    (parts[0][0] || "").toUpperCase() +
    (parts[parts.length - 1][0] || "").toUpperCase()
  );
}

export default function AvatarCircle({ name, imageUrl, size = 32 }) {
  const initials = getInitials(name);
  const dimension = `${size}px`;

  // If image exists → show image
  if (imageUrl) {
    return (
      <div
        className="forum-avatar"
        style={{ width: dimension, height: dimension }}
        aria-hidden="true"
      >
        <img
          src={imageUrl}
          alt={name}
          className="forum-avatar-img"
          loading="lazy"
        />
      </div>
    );
  }

  // WhatsApp-style colored initials
  const bgColor = getColorForName(name);

  return (
    <div
      className="forum-avatar forum-avatar-initials"
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: bgColor,
      }}
      aria-hidden="true"
    >
      <span className="forum-avatar-initials-text">{initials}</span>
    </div>
  );
}
