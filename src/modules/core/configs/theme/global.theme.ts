import { SystemStyleObject } from "@chakra-ui/react";
import colors from "./colors";

const globalStyles:Record<string, SystemStyleObject> = {
  ":root": {
    "--scrollbar-thumb-color": `${colors["hub.blue"]["400"].value}`,
    "--scrollbar-track-color": `${colors["hub.blue"]["100"].value}`
  },
  "*::-webkit-scrollbar": {
    width: "10px",
    height: "10px"
  },
  "[data-theme=dark] *::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--mix-background, var(--chakra-colors-cyan-500))"
  },
  "[data-theme=dark] *::-webkit-scrollbar-track": {
    backgroundColor: "var(--mix-background, var(--chakra-colors-cyan-700))"
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--mix-background, var(--chakra-colors-cyan-500))",
    borderRadius: "5px"
  },
  "*::-webkit-scrollbar-track": {
    backgroundColor: "var(--mix-background, var(--chakra-colors-cyan-700))"
  },
  ".transbank-scrollbar::-webkit-scrollbar-track": {
    backgroundColor: "#d7006d96"
  },
  ".transbank-scrollbar::-webkit-scrollbar-thumb": {
    backgroundColor: "#D7006D"
  },
  ".uppy-Container": {
    height: "100%"
  },
  ".uppy-Root": {
    height: "100%"
  },
  ".uppy-Dashboard": {
    height: "100%"
  },
  ".uppy-Dashboard-AddFiles-list": {
    display: "none !important"
  },
  ".uppy-Dashboard-AddFiles-info": {
    display: "block !important"
  },
  ".map-tooltip": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0.25
  },
  ".map-tooltip__district": {
    margin: 0
  },
  ".popup-classname .leaflet-popup-content-wrapper": {
    backgroundColor: `${colors["hub.blue"]["400"].value}`
  },
  ".popup-classname .leaflet-popup-tip": {
    backgroundColor: `${colors["hub.blue"]["400"].value}`
  },
  ".popup-classname .map-tooltip": {
    color: "white"
  },
  ".popup-classname .leaflet-popup-close-button span": {
    color: "white"
  },
  html: {
    // overflowY: "scroll"
  },
  ".position-item": {
    pointerEvents: "bounding-box"
  },
  ".position-item path": {
    pointerEvents: "none",
    fill: `${colors["hub.blue"]["400"].value}`
  },
  ".position-item text, .position-item rect": {
    transition: "fill 0.2s ease, stroke 0.2s ease"
  },
  ".position-item rect": {
    // stroke: colors.hub.blue["400"]
    stroke: "var(--scrollbar-thumb-color)"
  },
  ".position-item.selected rect": {
    fill: "rgb(254, 176, 25)",
    stroke: "rgba(0,0,0,0.2)"
  },
  ".position-item.selected tspan": {
    fill: "#fff"
  },
  ".position-item.not-available rect": {
    fill: "red",
    stroke: "rgba(0,0,0,0.2)",
    cursor: "pointer"
  },
  ".position-item.not-available tspan": {
    fill: "#fff",
    cursor: "pointer"
  },
  // ".position-item rect, .position-item path": {
  //   transition: "fill 0.35s ease, stroke 0.35s ease",
  // },
  // ".position-item:hover": {},
  // ".position-item:hover rect": {
  //   fill: colors.hub.blue["400"],
  //   stroke: colors.hub.blue["400"],
  // },
  // ".position-item.selected rect": {
  //   fill: colors.hub.blue["400"],
  //   stroke: colors.hub.blue["400"],
  // },
  // ".position-item.selected path": {
  //   fill: "#fff",
  // },
  // ".position-item:hover path": {
  //   fill: "#fff",
  // },
  ".chakra-ui-dark .map-tiles": {
    filter: "brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7)"
  },
  ".chakra-ui-dark .leaflet-container": {
    background: "transparent"
  },
  ".chakra-ui-dark [data-uppy-theme=dark] .uppy-Dashboard-inner": {
    backgroundColor: "#222834"
  },
  ".chakra-ui-dark [data-uppy-theme=dark] .uppy-DashboardContent-bar": {
    background: "#1a202c"
  },
  ".chakra-ui-dark .uppy-Dashboard-inner": {
    borderColor: "#757575"
  },
  ".chakra-ui-dark .leaflet-control-zoom-in, .chakra-ui-dark .leaflet-control-zoom-out, .chakra-ui-dark .leaflet-control-fullscreen-button, .chakra-ui-dark .leaflet-control-zoom-in:hover, .chakra-ui-dark .leaflet-control-zoom-out:hover, .chakra-ui-dark .leaflet-control-fullscreen-button:hover,.chakra-ui-dark .leaflet-control-zoom-in:active, .chakra-ui-dark .leaflet-control-zoom-out:active, .chakra-ui-dark .leaflet-control-fullscreen-button:active,.leaflet-control-zoom-in:focus, .chakra-ui-dark .leaflet-control-zoom-out:focus, .chakra-ui-dark .leaflet-control-fullscreen-button:focus":
    {
      backgroundColor: "#1a202c !important",
      color: "#fff"
    },
  ".leaflet-control-zoom-in": {
    marginBottom: ".2rem",
    borderBottom: "none"
  },
  ".chakra-ui-dark #position-container,.chakra-ui-dark #position-container #position-container > g > rect": {
    fill: "#1a202c"
  },
  ".chakra-ui-dark #position-container tspan": {
    fill: "#fff"
  },
  ".chakra-ui-dark #position-container line, .chakra-ui-dark #position-container path, .chakra-ui-dark #position-container rect":
    {
      stroke: "#3E6CB9"
    },
  "#position-container .piso__highlighted": {
    stroke: "#FF0000 !important"
  },
  ".react-transform-component": {
    width: "100%"
  },
  ".user-form__date-picker": {
    width: "100%"
  },
  //editor

  ".editor-text-bold": {
    fontWeight: "bold"
  },
  ".editor-text-italic": {
    fontStyle: "italic"
  },
  ".editor-text-underline": {
    textDecoration: "underline"
  },
  ".editor-text-strikethrough": {
    textDecoration: "line-through"
  },
  ".editor-text-underlineStrikethrough": {
    textDecoration: "underline line-through"
  },
  ".editor-text-code": {
    backgroundColor: "rgb(240, 242, 245)",
    padding: "1px 0.25rem",
    fontFamily: "Menlo, Consolas, Monaco, monospace",
    fontSize: "94%"
  },
  ".editor-link": {
    color: "rgb(33, 111, 219)",
    textDecoration: "none"
  },
  ".tree-view-output": {
    display: "block",
    background: "#222",
    color: "#fff",
    padding: "5px",
    fontSize: "12px",
    whiteSpace: "pre-wrap",
    margin: "1px auto 10px auto",
    maxHeight: "250px",
    position: "relative",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    overflow: "auto",
    lineHeight: "14px"
  },
  ".editor-code": {
    backgroundColor: "rgb(240, 242, 245)",
    fontFamily: "Menlo, Consolas, Monaco, monospace",
    display: "block",
    padding: "8px 8px 8px 52px",
    lineHeight: "1.53",
    fontSize: "13px",
    margin: "0",
    marginTop: "8px",
    marginBottom: "8px",
    tabSize: "2",
    overflowX: "auto",
    position: "relative"
  },
  ".editor-code:before": {
    content: "attr(data-gutter)",
    position: "absolute",
    backgroundColor: "#eee",
    left: "0",
    top: "0",
    borderRight: "1px solid #ccc",
    padding: "8px",
    color: "#777",
    whiteSpace: "pre-wrap",
    textAlign: "right",
    minWidth: "25px"
  },
  ".editor-code:after": {
    content: "attr(data-highlight-language)",
    top: "0",
    right: "3px",
    padding: "3px",
    fontSize: "10px",
    textTransform: "uppercase",
    position: "absolute",
    color: "rgba(0, 0, 0, 0.5)"
  },
  ".editor-tokenComment": {
    color: "slategray"
  },
  ".editor-tokenPunctuation": {
    color: "#999"
  },
  ".editor-tokenProperty": {
    color: "#905"
  },
  ".editor-tokenSelector": {
    color: "#690"
  },
  ".editor-tokenOperator": {
    color: "#9a6e3a"
  },
  ".editor-tokenAttr": {
    color: "#07a"
  },
  ".editor-tokenVariable": {
    color: "#e90"
  },
  ".editor-tokenFunction": {
    color: "#dd4a68"
  },
  ".editor-paragraph": {
    margin: "0",
    marginBottom: "8px",
    position: "relative"
  },
  ".editor-paragraph:last-child": {
    marginBottom: "0"
  },
  ".editor-heading-h1": {
    fontSize: "24px",
    color: "rgb(5, 5, 5)",
    fontWeight: "400",
    margin: "0",
    marginBottom: "12px",
    padding: "0"
  },
  ".editor-heading-h2": {
    fontSize: "15px",
    color: "rgb(101, 103, 107)",
    fontWeight: "700",
    margin: "0",
    marginTop: "10px",
    padding: "0",
    textTransform: "uppercase"
  },
  ".editor-quote": {
    margin: "0",
    marginLeft: "20px",
    fontSize: "15px",
    color: "rgb(101, 103, 107)",
    borderLeftColor: "rgb(206, 208, 212)",
    borderLeftWidth: "4px",
    borderLeftStyle: "solid",
    paddingLeft: "16px"
  },
  ".editor-list-ol": {
    padding: "0",
    margin: "0",
    marginLeft: "16px"
  },
  ".editor-list-ul": {
    padding: "0",
    margin: "0",
    marginLeft: "16px"
  },
  ".editor-listitem": {
    margin: "8px 32px 8px 32px"
  },
  ".editor-nested-listitem": {
    listStyleType: "none"
  },
  "pre::-webkit-scrollbar": {
    background: "transparent",
    width: "10px"
  },
  "pre::-webkit-scrollbar-thumb": {
    background: "#999"
  },
  ".debug-timetravel-panel": {
    overflow: "hidden",
    padding: "0 0 10px 0",
    margin: "auto",
    display: "flex"
  },
  ".debug-timetravel-panel-slider": {
    padding: "0",
    flex: "8"
  },
  ".debug-timetravel-panel-button": {
    padding: "0",
    border: "0",
    background: "none",
    flex: "1",
    color: "#fff",
    fontSize: "12px"
  },
  ".debug-timetravel-panel-button:hover": {
    textDecoration: "underline"
  },
  ".debug-timetravel-button": {
    border: "0",
    padding: "0",
    fontSize: "12px",
    top: "10px",
    right: "15px",
    position: "absolute",
    background: "none",
    color: "#fff"
  },
  ".debug-timetravel-button:hover": {
    textDecoration: "underline"
  },
  ".editor-image": {
    maxWidth: "500px",
    userSelect: "none",
    display: "inline-block"
  },
  ".dropdown, .Modal__overlay": {
    zIndex: "10000"
  },
  ".floating-text-format-popup": {
    height: "auto"
  }
};

export default globalStyles;