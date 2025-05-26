import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import React from "react";

interface CustomBreadCrumbprops {
  breadCrumbpage: string;
  breadCrumbItems?: { link: string; label: string }[];
}
export const CustomBreadCrumb = ({
  breadCrumbpage,
  breadCrumbItems,
}: CustomBreadCrumbprops) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="flex items-center justify-center hover:text-emerald-500"
          >
            <Home className="w-3 h-3 mr-2" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadCrumbItems &&
          breadCrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.link}
                  className="hover:text-emerald-500"
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{breadCrumbpage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
