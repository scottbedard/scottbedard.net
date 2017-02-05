//
// PHP
//
export const php = (code) => {
    return code
        .replace(/<span class="token keyword">(use|extends)<\/span>/g, '<span class="token keyword $1">$1</span>');
};
