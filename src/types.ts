export interface AIModel {
  id: number;
  name: string;
  isReal: boolean;
  fullNameWithCompany: string;
}

export interface AnswerRecord {
  id: string;
  roundNumber: number;
  model: AIModel;
  userGuess: boolean;
  isCorrect: boolean;
  streakAtTime: number;
  timestamp: number;
}

export interface GameStats {
  score: number;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  correctCount: number;
  incorrectCount: number;
}
