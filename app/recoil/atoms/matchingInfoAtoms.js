import { atom, DefaultValue } from "recoil"

export const storeIdAtom = atom({
  key: "storeId",
  default: "",
})

export const storeImageAtom = atom({
  key: "storeImage",
  default: "",
})

export const roleAtom = atom({
  key: "role",
  default: "",
})

export const platformAtom = atom({
  key: "platform",
  default: "",
})

export const locationAtom = atom({
  key: "location",
  default: "",
})
