//
// PHP
//
export const php = (code) => {
    return code
        .replace(/<span class="token keyword">return<\/span>/g, '<span class="token control">return</span>')
        .replace(/<span class="token keyword">function<\/span>(.*?)</g, '<span class="token control">function</span><span class="token function">$1</span><');
};
