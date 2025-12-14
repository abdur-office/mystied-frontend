import localFont from "next/font/local";

// primary font
const univaNova = localFont({
  src: [
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Hairline.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Hairline.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Heavy.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-univaNova",
});
/*

 src: url("060fd297f19446447a9a1325ad5b889b.eot");
    src: url("060fd297f19446447a9a1325ad5b889b.eot?#iefix")format("embedded-opentype"),
        url("060fd297f19446447a9a1325ad5b889b.woff")format("woff"),
        url("060fd297f19446447a9a1325ad5b889b.woff2")format("woff2"),
        url("060fd297f19446447a9a1325ad5b889b.ttf")format("truetype"),
        url("060fd297f19446447a9a1325ad5b889b.svg#SF Pro Rounded")format("svg");
*/
const sfProRounded = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro-rounded/sf-pro-rounded.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-rounded/sf-pro-rounded.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-rounded/sf-pro-rounded-medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sfProRounded",
});

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope",
// });

const font = {
  univaNova: univaNova.variable,
  // manrope: manrope.variable,
  // inter: inter.variable,
  sfProRounded: sfProRounded.variable,
};

export default font;
