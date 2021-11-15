"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPageUrlPath(page) {
    const filePath = page.__metadata?.relSourcePath || '';
    const parts = filePath.split('/').filter(Boolean);
    const extensionsRe = /\.(?:mdx?|json|ya?ml|toml)$/;
    if (parts[parts.length - 1]) {
        parts[parts.length - 1] = parts[parts.length - 1].replace(extensionsRe, '');
        if (parts[parts.length - 1] === 'index') {
            parts.pop();
        }
    }
    return '/' + parts.join('/').toLowerCase();
}
exports.default = getPageUrlPath;
//# sourceMappingURL=get-page-url-path.js.map