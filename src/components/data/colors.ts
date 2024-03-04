interface IColors {
    foreground: string,
    background: string,
    logo: string,
    error: string,
    warning: string,
    accent1: string,
    accent2: string,
    success: string,
}

const colors = {
    foreground: "rgba(205, 205, 205, 1)",
    background: "#0d070f",
    logo: "rgb(241, 121, 8)",
    error: "rgb(224, 53, 53)",
    warning: "rgb(241, 150, 30)",
    accent1: "rgb(218, 95, 218)",
    accent2: "rgb(69, 66, 247)",
    success: "rgb(77, 184, 77)",
} as IColors

export {
    colors,
}