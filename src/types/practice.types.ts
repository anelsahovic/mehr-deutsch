export interface PracticeTopic {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  path: string;
  available: boolean;
}
