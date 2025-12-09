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
  CONTENT_MODERATION: "/content-moderation",
  SUBSCRIPTION: "/subscription",
  EXPLORE: "/explore",
  WALLETS: "/wallets",
  MEMBERS: "/member",
  TEAM: "/team",
  RESTRICTIONS: "/restrictions",
  ROLES: "/team/role",
  KYC: "/kyc",
  SETTING: "/setting",
  USERS: "/users",
  ANNOUNCEMENT: "/announcement",
  PROFILE: "/profile",
  // NEWS: {
  //   BASE: "/news",
  //   SOURCES: "/news/sources",
  //   MODERATION: "/news/moderation",
  //   AI_REWRITING: "/news/ai-rewriting",
  //   REPORTED: "/news/reported",
  // },
  REPORT: {
    BASE: "/report",
    EVIDENCE: "/evidence",
    ESCALATE: "/escalate",
  },

  COMMON: {
    CREATE: "/create",
    EDIT: "/edit",
    VIEW: "/view",
  },
} as const;
