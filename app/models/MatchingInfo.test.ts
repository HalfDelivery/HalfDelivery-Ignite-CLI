import { MatchingInfoModel } from "./matching-info"

test("can be created", () => {
  const instance = MatchingInfoModel.create({})

  expect(instance).toBeTruthy()
})
