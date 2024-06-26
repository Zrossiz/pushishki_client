import { Breadcrumb } from '@/components/client/Breadcrumbs/Breadcrumbs.props';

export interface PageTitleProps {
  counter?: string;
  title: string;
  breadcrumbs: Breadcrumb[];
}
