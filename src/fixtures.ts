export type Slot = `G${1 | 2}-T${1 | 2 | 3 | 4 | 5}`
export type Fixture = { id: string; day: 'SATURDAY' | 'SUNDAY'; window: 'EARLY' | 'LATE'; time: string; home: string; away: string }

export const DRAW_ORDER: Slot[] = ['G1-T1','G2-T1','G1-T2','G2-T2','G1-T3','G2-T3','G1-T4','G2-T4','G1-T5','G2-T5']
export const DEFAULT_TEAMS = ['Ruhr Royals','Thunder Hawks','Rhein Legends','Nord Titans','Black Panthers','Western Kings','NRW Super IV','Süd Strikers','Dortmund Giants','East Warriors']
export const FIXTURES: Fixture[] = [
 ['M1','SATURDAY','EARLY','09:00','G1-T1','G1-T2'],['M2','SATURDAY','EARLY','09:45','G1-T1','G1-T3'],['M3','SATURDAY','EARLY','10:30','G1-T1','G1-T4'],['M4','SATURDAY','EARLY','11:15','G1-T1','G1-T5'],['M5','SATURDAY','EARLY','12:00','G1-T2','G1-T3'],['M6','SATURDAY','EARLY','12:45','G1-T2','G1-T4'],['M7','SATURDAY','EARLY','13:30','G1-T2','G1-T5'],['M8','SATURDAY','LATE','14:15','G1-T3','G1-T4'],['M9','SATURDAY','LATE','15:00','G1-T3','G1-T5'],['M10','SATURDAY','LATE','15:45','G1-T4','G1-T5'],['M11','SUNDAY','EARLY','09:00','G2-T1','G2-T2'],['M12','SUNDAY','EARLY','09:45','G2-T1','G2-T3'],['M13','SUNDAY','EARLY','10:30','G2-T1','G2-T4'],['M14','SUNDAY','EARLY','11:15','G2-T1','G2-T5'],['M15','SUNDAY','EARLY','12:00','G2-T2','G2-T3'],['M16','SUNDAY','EARLY','12:45','G2-T2','G2-T4'],['M17','SUNDAY','EARLY','13:30','G2-T2','G2-T5'],['M18','SUNDAY','LATE','14:15','G2-T3','G2-T4'],['M19','SUNDAY','LATE','15:00','G2-T3','G2-T5'],['M20','SUNDAY','LATE','15:45','G2-T4','G2-T5'],
].map(([id,day,window,time,home,away]) => ({id, day: day as Fixture['day'], window: window as Fixture['window'], time, home, away}))

export const knockout = [
  ['SF1','Group 1 Winner','Group 2 Runner-up'], ['SF2','Group 2 Winner','Group 1 Runner-up'], ['FINAL','SF1 Winner','SF2 Winner']
]
