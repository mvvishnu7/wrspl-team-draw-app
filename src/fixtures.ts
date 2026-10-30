export type Slot = `G${1 | 2}-T${1 | 2 | 3 | 4 | 5}`
export type Fixture = { id: string; day: 'SATURDAY' | 'SUNDAY'; window: 'EARLY' | 'LATE'; time: string; home: string; away: string }
export type KnockoutFixture = { id: 'SF1' | 'SF2' | 'FINAL'; day: 'SUNDAY'; window: 'KNOCKOUT'; time: string; home: string; away: string }

export const DRAW_ORDER: Slot[] = ['G1-T1','G2-T1','G1-T2','G2-T2','G1-T3','G2-T3','G1-T4','G2-T4','G1-T5','G2-T5']
export const DEFAULT_TEAMS = ['Ruhr Royals','Thunder Hawks','Rhein Legends','Nord Titans','Black Panthers','Western Kings','NRW Super VI','Süd Strikers','Dortmund Giants','East Warriors']
export const FIXTURES: Fixture[] = [
 ['M1','SATURDAY','EARLY','09:00','G1-T1','G1-T2'],['M2','SATURDAY','EARLY','09:45','G1-T3','G1-T4'],['M3','SATURDAY','EARLY','10:30','G1-T1','G1-T5'],['M4','SATURDAY','EARLY','11:15','G1-T2','G1-T3'],['M5','SATURDAY','EARLY','12:00','G1-T4','G1-T5'],['M6','SATURDAY','LATE','12:45','G1-T1','G1-T3'],['M7','SATURDAY','LATE','13:30','G1-T2','G1-T4'],['M8','SATURDAY','LATE','14:15','G2-T1','G2-T2'],['M9','SATURDAY','LATE','15:00','G2-T3','G2-T4'],['M10','SATURDAY','LATE','15:45','G2-T1','G2-T5'],['M11','SATURDAY','LATE','16:30','G2-T2','G2-T3'],['M12','SATURDAY','LATE','17:15','G2-T4','G2-T5'],['M13','SATURDAY','LATE','18:00','G2-T1','G2-T3'],['M14','SUNDAY','EARLY','09:00','G1-T3','G1-T5'],['M15','SUNDAY','EARLY','09:45','G1-T1','G1-T4'],['M16','SUNDAY','EARLY','10:30','G1-T2','G1-T5'],['M17','SUNDAY','EARLY','11:15','G2-T2','G2-T4'],['M18','SUNDAY','EARLY','12:00','G2-T3','G2-T5'],['M19','SUNDAY','EARLY','12:45','G2-T1','G2-T4'],['M20','SUNDAY','EARLY','13:30','G2-T2','G2-T5'],
].map(([id,day,window,time,home,away]) => ({id, day: day as Fixture['day'], window: window as Fixture['window'], time, home, away}))

export const KNOCKOUT_FIXTURES: KnockoutFixture[] = [
  {id:'SF1', day:'SUNDAY', window:'KNOCKOUT', time:'15:00', home:'Group 1 Winner', away:'Group 2 Runner-up'},
  {id:'SF2', day:'SUNDAY', window:'KNOCKOUT', time:'15:45', home:'Group 2 Winner', away:'Group 1 Runner-up'},
  {id:'FINAL', day:'SUNDAY', window:'KNOCKOUT', time:'16:30', home:'SF1 Winner', away:'SF2 Winner'},
]

export const knockout = [
  ['SF1','Group 1 Winner','Group 2 Runner-up'], ['SF2','Group 2 Winner','Group 1 Runner-up'], ['FINAL','SF1 Winner','SF2 Winner']
]
