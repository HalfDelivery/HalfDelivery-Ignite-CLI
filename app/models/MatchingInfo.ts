import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */

export const MatchingInfoModel = types.model("MatchingInfo").props({
  storeId: types.number,
  storeImage: types.string,
  role: types.string,
  platform: types.string,
  location: types.string,
})
// .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
// .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type MatchingInfoType = Instance<typeof MatchingInfoModel>
export interface MatchingInfo extends MatchingInfoType {}
type MatchingInfoSnapshotType = SnapshotOut<typeof MatchingInfoModel>
export interface MatchingInfoSnapshot extends MatchingInfoSnapshotType {}
export const createMatchingInfoDefaultModel = () => types.optional(MatchingInfoModel, {})
