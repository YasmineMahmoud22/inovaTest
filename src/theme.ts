import {
  createTheme,
  responsiveFontSizes,
  formLabelClasses,
  inputBaseClasses,
} from "@mui/material";
import BarlowRegular from "@/fonts/Barlow-Regular.ttf";
import BarlowBold from "@/fonts/Barlow-Bold.ttf";
import BarlowSemiBold from "@/fonts/Barlow-SemiBold.ttf";
import BarlowMedium from "@/fonts/Barlow-Medium.ttf";

let theme = createTheme();

const shadows = theme.shadows;
shadows[1] = "0 4px 5px 3px #0000001a";
shadows[2] = "0 4px 15px 3px #0000001a";

theme = createTheme({
  palette: {
    primary: {
      main: "#1C274C",
    },
    error: {
      main: "#FE0000",
    },
    success: {
      main: "#00CFAA",
    },
    background: { default: "#33313B", paper: "#33313B" },
    text: {
      primary: "#221C68",
      secondary: "#7c799a",
    },
    grey: {
      "50": "rgba(51, 51, 51, .5)",
      "100": "#151928",
      "200": "#4E808D",
      "300": "#9FA2B4",
      "400": "#252733",
    },
  },
  typography: {
    fontFamily: "BarlowRegular",
    fontWeightRegular: 500,
  },
  shadows,
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "label",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
        },
        textTransform: "none",
      },
      styleOverrides: {
        subtitle1: {
          textTransform: "none",
          fontFamily: "BarlowRegular",
          fontSize: 18,
        },
        subtitle2: {
          fontFamily: "BarlowBold",
          color: "#1C274C",
          fontSize: 19,
        },
        h1: {
          fontFamily: "BarlowBold",
          color: "#ffffff",
          textAlign: "left",
          [theme.breakpoints.up("xs")]: {
            fontSize: 40,
            lineHeight: "45px",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: 60,
            lineHeight: "65px",
          },
        },
        h3: {
          fontFamily: "BarlowBold",
          color: "#ffffff",
          [theme.breakpoints.up("xs")]: {
            fontSize: 20,
            lineHeight: "20px",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: 33,
            lineHeight: "45px",
          },
        },
        h4: {
          textTransform: "none",
          fontFamily: "BarlowBold",
          color: "#ffffff",
        },
        h5: {
          fontFamily: "BarlowBold",
          color: "#ffffff",
        },
        h6: {
          fontFamily: "BarlowRegular",
          color: "#ffffff",
        },
        body1: {
          fontFamily: "BarlowRegular",
          color: "#ffffff",
        },
        body2: {
          fontFamily: "BarlowRegular",
          color: "#818181",
          textAlign: "left",
          [theme.breakpoints.up("xs")]: {
            fontSize: 19,
            lineHeight: "28px",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: 25,
            lineHeight: "29px",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          },
          [theme.breakpoints.up("md")]: {
            height: 10,
            padding: 0,
            backgroundColor: "#1c1b1b",
          },
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingBlock: 0,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
            :root {
              font-size: 14px;
              backgroundColor: #FFFFFF;
            }
            @font-face {
              font-family: 'BarlowRegular';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: url(${BarlowRegular}) format('truetype');
            } 
            @font-face {
              font-family: 'BarlowBold';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: url(${BarlowBold}) format('truetype');
            } 
            @font-face {
              font-family: 'BarlowSemiBold';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: url(${BarlowSemiBold}) format('truetype');
            }
            @font-face {
              font-family: 'BarlowMedium';
              font-style: normal;
              font-display: swap;
              font-weight: 700;
              src: url(${BarlowMedium}) format('truetype');
            }
           
            
          `,
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          fontSize: "1rem",
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".MuiBackdrop-root": {
            backdropFilter: "blur(4px)",
          },
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: 4,
          ".MuiCheckbox-root": {
            padding: 5,
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: 4,
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 5,
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1rem",
          fontWeight: 700,
          color: theme.palette.grey[50],
          [`&.${formLabelClasses.focused}`]: {
            color: theme.palette.grey[100],
          },
          [`&.${formLabelClasses.filled}`]: {
            color: theme.palette.grey[100],
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
        }),
        contained: ({ theme }) => ({
          background: "#55CAF5",
          textTransform: "none",
          paddingInline: 40,
          borderRadius: 38,
          paddingBlock: 7,
          boxShadow: "none",
        }),
        outlined: ({ theme }) => ({
          textTransform: "none",
          borderRadius: 41,
          borderWidth: 1,
          borderColor: "#55CAF5",
          paddingInline: 30,
        }),
      },
    },
    MuiFab: {
      styleOverrides: {
        sizeMedium: ({ theme }) => ({
          ":not(.MuiFab-extended)": {
            height: 45,
            minWidth: 45,
            width: 45,
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: "black",
          [`&.${inputBaseClasses.focused}`]: {
            ["&::after"]: {
              borderBottom: "2px solid rgba(0, 0, 0, 0.42)", // use your color
            },
          },
          [`&.${inputBaseClasses.root}`]: {
            ["&::after"]: {
              borderBottom: "2px solid rgba(0, 0, 0, 0.42)", // use your color
            },
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          paddingTop: theme.spacing(1.375),
          paddingBottom: theme.spacing(1.375),
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.95rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          borderColor: "#989898",
          padding: "6px 25px",
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#0e0d0d",
          boxShadow: "none",
        }),
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 2,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          span: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 68,
          height: 34,
          padding: 7,
          "& .MuiSwitch-switchBase": {
            margin: 1,
            padding: 0,
            transform: "translateX(6px)",
            "&.Mui-checked": {
              transform: "translateX(30px)",
            },
          },
          "& .MuiSwitch-thumb": {
            width: 30,
            height: 30,
          },
          "& .MuiSwitch-track": {
            borderRadius: 20 / 2,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(30, 30, 30)",
            borderRadius: 0,
          },
          "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "rgb(30, 30, 30)",
              borderRadius: 0,
            },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
