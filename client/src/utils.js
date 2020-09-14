export const colors = [
    "#ffb4bb",
    "#ffe0ba",
    "#fffebb",
    "#d3ffa5",
    "#b4e8fe",
    "#9cb5fe",
    "#e5b5ff"
];

export const getRandomMinMax = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
};

export const getColorCover = () => {
    const colorIndex = getRandomMinMax(0, 6);

    return colors[colorIndex];
};