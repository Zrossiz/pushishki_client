export interface FormReviewProps {
  setOpen: (arg0: boolean) => void;
  name: string;
  rating: number;
  title: string;
  description: string;
  setName: (arg0: string) => void;
  setRating: (arg0: number) => void;
  setTitle: (arg0: string) => void;
  setDescription: (arg0: string) => void;
  sendReview: () => void;
}
