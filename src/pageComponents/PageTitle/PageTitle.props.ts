import { Breadcrumb, BreadcrumbsProps } from "@/components/Breadcrumbs/Breadcrumbs.props";

export interface PageTitleProps {
    counter?: string;
    title: string;
    breadcrumbs: Breadcrumb[]
}