import type { InjectionKey, Ref } from 'vue'

export type SelectContext = {
  isOpenSelect: Ref<boolean>
  toggle: () => void
  close: () => void
  selectedValue: Ref<string | null>
  select: (value: string) => void
}

export const SELECT_KEY: InjectionKey<SelectContext> = Symbol('SelectContext')
