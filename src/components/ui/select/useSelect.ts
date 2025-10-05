import { inject } from 'vue'
import { SELECT_KEY, type SelectContext } from './selectContext'

export function useSelect(): SelectContext {
  const ctx = inject(SELECT_KEY)
  if (!ctx) {
    throw new Error('useSelect must be used inside <Select>')
  }
  return ctx
}
