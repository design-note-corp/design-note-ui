export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  icons: {
    add_svg: '/icons/add.svg',
    bell_svg: '/icons/bell.svg',
    edit_svg: '/icons/edit.svg',
    favorite_svg: '/icons/favorite.svg',
    search_svg: '/icons/search.svg'
  },
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
