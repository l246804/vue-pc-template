import { Recordable } from "@rhao/types-base"

declare module 'virtual:generated-layouts' {
  const layouts: Recordable<RawRouteComponent>
  export { layouts }
}