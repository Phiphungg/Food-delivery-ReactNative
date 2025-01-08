const pallete = [
  {
    //orange
    text: "#f97316",
    bgColor: (opacity) => `rgba(251,146,60, ${opacity})`,
  },
  {
    //dark gray
    text: "#334155",
    bgColor: (opacity) => `rgba(30,41,59, ${opacity})`,
  },
  {
    //purple
    text: "#f97316",
    bgColor: (opacity) => `rgba(167,139,250, ${opacity})`,
  },
  {
    //green
    text: "#f97316",
    bgColor: (opacity) => `rgba(0,179,89, ${opacity})`,
  },
  {
    //teal
    text: "#f97316",
    bgColor: (opacity) => `rgba(45,212,191, ${opacity})`,
  },
  {
    //red
    text: "#f97316",
    bgColor: (opacity) => `rgba(248,113,113, ${opacity})`,
  },
];

export const themeColors = {
  ...pallete[5],
};
