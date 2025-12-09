import {
  Calendar2,
  ChartSquare,
  FavoriteChart,
  Flag,
  Image,
  MessageNotif,
  More2,
  ReceiptAdd,
  SmsNotification,
} from "iconsax-reactjs";
import { APP_ROUTES } from "./constant";

export const menuConfig = [
  {
    label: "Home",
    path: "/",
    icon: MessageNotif,
    iconVariant: "Broken",
  },
  {
    label: "Notifications",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: Flag,
    iconVariant: "Broken",
  },
  {
    label: "Messages",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: SmsNotification,
    iconVariant: "Broken",
  },
  {
    label: "Collections",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: ReceiptAdd,
    iconVariant: "Broken",
  },
  {
    label: "Vault",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: Image,
    iconVariant: "Broken",
  },
  {
    label: "Queue",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: Calendar2,
    iconVariant: "Broken",
  },
  {
    label: "Statements",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: ChartSquare,
    iconVariant: "Broken",
  },
  {
    label: "Statistics",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: FavoriteChart,
    iconVariant: "Broken",
  },
  {
    label: "My Profile",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: FavoriteChart,
    iconVariant: "Broken",
  },
  {
    label: "More",
    path: APP_ROUTES.CONTENT_MODERATION,
    icon: More2,
    iconVariant: "Broken",
  },
];
