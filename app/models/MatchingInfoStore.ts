import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const MatchingInfoStoreModel = types
  .model("MatchingInfoStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type MatchingInfoStoreType = Instance<typeof MatchingInfoStoreModel>
export interface MatchingInfoStore extends MatchingInfoStoreType {}
type MatchingInfoStoreSnapshotType = SnapshotOut<typeof MatchingInfoStoreModel>
export interface MatchingInfoStoreSnapshot extends MatchingInfoStoreSnapshotType {}
export const createMatchingInfoStoreDefaultModel = () => types.optional(MatchingInfoStoreModel, {})
