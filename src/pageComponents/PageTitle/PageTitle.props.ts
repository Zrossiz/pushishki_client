import { Breadcrumb, BreadcrumbsProps } from '@/components/clientComponents/Breadcrumbs/Breadcrumbs.props';

export interface PageTitleProps {
  counter?: string;
  title: string;
  breadcrumbs: Breadcrumb[];
}
