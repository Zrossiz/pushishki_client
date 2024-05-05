export interface DeleteItemProps {
  idOrSlug: number | string;
  entity: string;
  name: string;
  imgName?: string;
  setOpen: (arg0: boolean) => void;
}
