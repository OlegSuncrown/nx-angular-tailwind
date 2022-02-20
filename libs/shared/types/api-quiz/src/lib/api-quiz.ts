export interface QuizItem {
  id: string;
  name: string;
  songTitle: string;
  image: string;
  audio: string;
  description: string;
}

export interface QuizSection {
  id: string;
  category: string;
  data: QuizItem[];
}
