import { MatchingInfoStoreModel } from "./matching-info-store"

test("can be created", () => {
  const instance = MatchingInfoStoreModel.create({})

  expect(instance).toBeTruthy()
})
