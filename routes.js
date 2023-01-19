import { Router } from '@edgio/core'
import { vue3Routes } from '@edgio/vue-3'
import getPrerenderRequests from './edgio/getPrerenderRequests'
import { API_CACHE_HANDLER, IMAGE_CACHE_HANDLER, EDGE_CACHE_HANDLER } from './edgio/cache'

export default new Router()
  /**
   * Pre-render the static home page
   * More on static prerendering: https://docs.edg.io/guides/static_prerendering
   */
  .prerender(getPrerenderRequests)
  .match('/edgio-api/:path*', API_CACHE_HANDLER)
  .match('/edgio-opt', IMAGE_CACHE_HANDLER)
  .match('/', EDGE_CACHE_HANDLER)
  .match('/about', EDGE_CACHE_HANDLER)
  .match('/commerce', EDGE_CACHE_HANDLER)
  .match('/product/:path', EDGE_CACHE_HANDLER)
  .match('/commerce/:path', EDGE_CACHE_HANDLER)
  // default vue3 routes
  .use(vue3Routes)
