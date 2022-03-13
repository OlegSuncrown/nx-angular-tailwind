export type SelectedOption = 'completed' | 'failed'

export interface QuizItem {
  id: string;
  name: string;
  songTitle: string;
  image: string;
  audio: string;
  description: string;

  isSelected?: SelectedOption;
}

export interface QuizSection {
  id: string;
  genre: string;
  data: QuizItem[];
}
