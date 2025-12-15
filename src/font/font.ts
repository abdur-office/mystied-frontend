import localFont from "next/font/local";

// primary font
const univaNova = localFont({
  src: [
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Hairline.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/univa-nova/UnivaNova-Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
    {
      path: "../../public/fonts/univa-nova/UnivaNova-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/univa-nova/UnivaNova-Heavy.otf",
    //   weight: "700",
    //   style: "normal",
    // },
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
