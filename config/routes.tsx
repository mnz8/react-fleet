import type { RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";
import PageOne from "@/pages/PageOne";

// 通过交叉类型扩展
export type typeMyRoute = Omit<
  { [K in keyof RouteObject]: RouteObject[K] },
  "children"
> & {
  name?: string;
  children?: typeMyRoute[];
};

const routes: typeMyRoute[] = [
  {
    path: "/",
    name: "Home",
    element: <Layout />,
    children: [
      {
        path: "/page-one",
        name: "PageOne",
        element: <PageOne />,
      },
    ],
  },
];

export default routes;
