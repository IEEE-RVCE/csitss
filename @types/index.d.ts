export interface Fixture {
  id?: string;
  matchId?: number;
  teamA: string;
  teamB: string;
  date: Date;
  time: string;
  round: "R1" | "R2" | "R3" | "QF" | "SF" | "F"
  status: "Scheduled" | "Progress" | "Completed"
  result: string;
  nameOfSport?: string;
}
