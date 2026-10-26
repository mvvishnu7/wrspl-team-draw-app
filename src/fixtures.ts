export type Slot = `G${1 | 2}-T${1 | 2 | 3 | 4 | 5}`
export type Fixture = { id: string; day: 'SATURDAY' | 'SUNDAY'; time: string; home: string; away: string }

export const DRAW_ORDER: Slot[] = ['G1-T1','G2-T1','G1-T2','G2-T2','G1-T3','G2-T3','G1-T4','G2-T4','G1-T5','G2-T5']
export const DEFAULT_TEAMS = ['Ruhr Royals','Thunder Hawks','Rhein Legends','Nord Titans','Black Panthers','Western Kings','NRW Super IV','Süd Strikers','Dortmund Giants','East Warriors']
export const FIXTURES: Fixture[] = [
 ['M1','SATURDAY','09:00','G1-T1','G1-T2'],['M2','SATURDAY','09:45','G2-T1','G2-T2'],['M3','SATURDAY','10:30','G1-T3','G1-T4'],['M4','SATURDAY','11:15','G2-T3','G2-T4'],['M5','SATURDAY','12:00','G1-T1','G1-T3'],['M6','SATURDAY','12:45','G2-T1','G2-T3'],['M7','SATURDAY','13:30','G1-T2','G1-T5'],['M8','SATURDAY','14:15','G2-T2','G2-T5'],['M9','SATURDAY','15:00','G1-T1','G1-T4'],['M10','SATURDAY','15:45','G2-T1','G2-T4'],['M11','SATURDAY','16:30','G1-T3','G1-T5'],['M12','SATURDAY','17:15','G2-T3','G2-T5'],['M13','SATURDAY','18:00','G1-T1','G1-T5'],['M14','SUNDAY','09:00','G2-T1','G2-T5'],['M15','SUNDAY','09:45','G1-T2','G1-T4'],['M16','SUNDAY','10:30','G2-T2','G2-T4'],['M17','SUNDAY','11:15','G1-T2','G1-T3'],['M18','SUNDAY','12:00','G2-T2','G2-T3'],['M19','SUNDAY','12:45','G1-T4','G1-T5'],['M20','SUNDAY','13:30','G2-T4','G2-T5'],
].map(([id,day,time,home,away]) => ({id, day: day as Fixture['day'], time, home, away}))

export const knockout = [
  ['SF1','Group 1 Winner','Group 2 Runner-up'], ['SF2','Group 2 Winner','Group 1 Runner-up'], ['FINAL','SF1 Winner','SF2 Winner']
]
