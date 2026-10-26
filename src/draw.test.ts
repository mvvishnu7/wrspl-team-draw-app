import { describe, expect, it } from 'vitest'
import { DEFAULT_TEAMS, DRAW_ORDER, FIXTURES } from './fixtures'
import { emptyState, isComplete, nextAssignment, secureIndex } from './draw'

const cryptoWith = (values: number[]): Crypto => ({ getRandomValues<T extends ArrayBufferView | null>(array: T): T { (array as unknown as Uint32Array)[0] = values.shift() ?? 0; return array } } as Crypto)

describe('WRSPL draw engine', () => {
  it('uses the fixed alternating slot order and assigns every team exactly once', () => {
    let state = emptyState(DEFAULT_TEAMS)
    for (let i = 0; i < 10; i++) state = nextAssignment(state, cryptoWith([0]))
    expect(state.drawOrder.map(item => item.slot)).toEqual(DRAW_ORDER)
    expect(new Set(state.drawOrder.map(item => item.team)).size).toBe(10)
    expect(state.drawOrder.filter(item => item.slot.startsWith('G1-'))).toHaveLength(5)
    expect(state.drawOrder.filter(item => item.slot.startsWith('G2-'))).toHaveLength(5)
    expect(isComplete(state)).toBe(true)
  })

  it('rejects the modulo-biased tail before selecting an index', () => {
    const max = 3
    const limit = Math.floor(0x100000000 / max) * max
    expect(secureIndex(max, cryptoWith([0xffffffff, limit - 1]))).toBe(2)
  })

  it('keeps all official group fixtures unchanged', () => {
    expect(FIXTURES).toHaveLength(20)
    expect(FIXTURES[0]).toMatchObject({id:'M1', time:'09:00', home:'G1-T1', away:'G1-T2'})
    expect(FIXTURES[19]).toMatchObject({id:'M20', time:'13:30', home:'G2-T4', away:'G2-T5'})
    expect(FIXTURES.map(f => f.id)).toEqual(Array.from({length:20}, (_, i) => `M${i+1}`))
  })
})
