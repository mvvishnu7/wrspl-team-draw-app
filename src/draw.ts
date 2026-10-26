import { DRAW_ORDER, Slot } from './fixtures'
export type Assignment = Partial<Record<Slot, string>>
export type DrawState = { teams: string[]; assignments: Assignment; drawOrder: Array<{slot: Slot; team: string}>; phase: 'setup'|'drawing'|'results'; locked: boolean; timestamp: string | null }

export const emptyState = (teams: string[]): DrawState => ({teams, assignments:{}, drawOrder:[], phase:'setup', locked:false, timestamp:null})

export function secureIndex(maxExclusive: number, cryptoObj: Crypto = crypto): number {
  if (maxExclusive < 1) throw new Error('maxExclusive must be positive')
  const limit = Math.floor(0x100000000 / maxExclusive) * maxExclusive
  const bytes = new Uint32Array(1)
  do { cryptoObj.getRandomValues(bytes) } while (bytes[0] >= limit)
  return bytes[0] % maxExclusive
}

export function nextAssignment(state: DrawState, cryptoObj: Crypto = crypto): DrawState {
  if (state.locked || state.drawOrder.length >= DRAW_ORDER.length) return state
  const slot = DRAW_ORDER[state.drawOrder.length]
  const remaining = state.teams.filter(team => !state.drawOrder.some(item => item.team === team))
  const team = remaining[secureIndex(remaining.length, cryptoObj)]
  return {...state, phase:'drawing', assignments:{...state.assignments, [slot]:team}, drawOrder:[...state.drawOrder,{slot,team}], timestamp:new Date().toISOString()}
}

export const isComplete = (state: DrawState) => state.drawOrder.length === DRAW_ORDER.length
