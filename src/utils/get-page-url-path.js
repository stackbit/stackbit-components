export default function getPageUrlPath(page) {
    const filePath = page.__metadata?.relSourcePath || '';
    const parts = filePath.split('/').filter(Boolean);
    if (parts[parts.length - 1] === 'index') {
        parts.pop();
    }
    return  '/' + parts.join('/').toLowerCase();
}
