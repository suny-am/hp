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

const mailTo = "mailto:visualarea.1@gmail.com"
const galleryImage = "/assets/images/kaz-1.jpg"
const logoText1 = "carl sandberg"
const logoText2 = "designworks."
const comingSoon = "coming soon..."
const colors = {
    foreground: "rgba(255, 255, 255, 0.87)",
    background: "#0d070f",
    logo: "rgb(241, 198, 8)",
    error: "rgb(224, 53, 53)",
    warning: "rgb(241, 150, 30)",
    accent1: "rgb(218, 95, 218)",
    accent2: "rgb(69, 66, 247)",
    success: "rgb(77, 184, 77)",
} as IColors

export {
    mailTo,
    galleryImage,
    logoText1,
    logoText2,
    comingSoon,
    colors
} 
