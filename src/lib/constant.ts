// Authentication constants
export const AUTH_TOKEN_KEY = "cnm_auth_token";

// Pagination limit
export const LIMIT = 10;

// API endpoint for admin
export const API_ENDPOINTS = {
  ADMIN_BLOGS: "/admin/manage-blogs",
} as const;

// frontend page/url
export const APP_ROUTES = {
  MESSAGES: "/messages",
  QUEUE: "/queue",
  // NEWS: {
  //   BASE: "/news",
  //   SOURCES: "/news/sources",
  //   MODERATION: "/news/moderation",
  //   AI_REWRITING: "/news/ai-rewriting",
  //   REPORTED: "/news/reported",
  // },

  COMMON: {
    CREATE: "/create",
    EDIT: "/edit",
    VIEW: "/view",
  },
} as const;
