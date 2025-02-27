import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage<string>(() => localStorage)
export const selectedPaletteAtom = atomWithStorage<string>('selected-palette', 'cyan', storage)