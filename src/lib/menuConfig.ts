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
    path: "",
    icon: Flag,
    iconVariant: "Broken",
  },
  {
    label: "Messages",
    path: APP_ROUTES.MESSAGES,
    icon: SmsNotification,
    iconVariant: "Broken",
  },
  {
    label: "Collections",
    path: "/collections",
    icon: ReceiptAdd,
    iconVariant: "Broken",
  },
  {
    label: "Vault",
    path: "/vault",
    icon: Image,
    iconVariant: "Broken",
  },
  {
    label: "Queue",
    path: "/queue",
    icon: Calendar2,
    iconVariant: "Broken",
  },
  {
    label: "Statements",
    path: "/statements",
    icon: ChartSquare,
    iconVariant: "Broken",
  },
  {
    label: "Statistics",
    path: "/statistics",
    icon: FavoriteChart,
    iconVariant: "Broken",
  },
  {
    label: "My Profile",
    path: "/my-profile",
    icon: FavoriteChart,
    iconVariant: "Broken",
  },
  {
    label: "More",
    path: "/more",
    icon: More2,
    iconVariant: "Broken",
  },
];
