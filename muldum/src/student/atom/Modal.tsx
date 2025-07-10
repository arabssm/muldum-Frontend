import { atom } from 'recoil'

export const loginModalState = atom({
  key: 'loginModalState',
  default: false,
})

export const whereismypasswordModalState = atom({
  key: 'whereismypasswordModalState',
  default: false,
})