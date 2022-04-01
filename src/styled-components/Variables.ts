interface IColors {
    primaryColor: string;
    borderColor: string;
    activeColor: string;
    fontColor: string;
    boxShadowColor: string;
}

const Colors: IColors = {
    primaryColor: '#EA7F28',
    borderColor: '#EDEDED',
    activeColor: '#D37324',
    fontColor: '#505050',
    boxShadowColor: "#505050b3"
}

interface IFonts {
    Size: ISize;
    Weight: IWeight;
}

interface ISize {
    small: string;
    normal: string;
    large: string;
    xlarge: string;
    xxlarge: string;
}

interface IWeight {
    light: number,
    normal: number,
    bold: number
}

const Fonts: IFonts = {
    Size: {
        small: "10px",
        normal: "12px",
        large: "14px",
        xlarge: "18px",
        xxlarge: "32px"
    },
    Weight: {
        light: 300,
        normal: 400,
        bold: 900
    }
}



export const Variables = { Colors, Fonts };