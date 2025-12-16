/**
 * Get asset path with basePath support for GitHub Pages
 */
export function getAssetPath(path: string): string {
  // If path already includes basePath, return as is
  if (path.includes('/gozumunnuru-new/')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production with GitHub Pages, basePath is '/gozumunnuru-new'
  // In development, basePath is empty
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
