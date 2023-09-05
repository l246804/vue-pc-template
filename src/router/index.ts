import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { orderBy } from 'lodash-es'
import { mapTree } from '@rhao/lodash-x'
import generatedRoutes from '~pages'

function orderRoutes(routes: RouteRecordRaw[]) {
  return orderBy(routes, ['meta.index'], ['asc'])
}

const routes = mapTree(orderRoutes(setupLayouts(generatedRoutes)), (route) => {
  if (route.children?.length) route.children = orderRoutes(route.children)
  return route
})

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
