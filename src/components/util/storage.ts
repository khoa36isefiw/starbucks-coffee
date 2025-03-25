export const getTokenStorage = () => {
    const tokens = localStorage.getItem('tokens');
    if (tokens) return JSON.parse(tokens);
    return '';
};

export const cleanTokenStorage = () => {
    localStorage.removeItem('tokens');
};