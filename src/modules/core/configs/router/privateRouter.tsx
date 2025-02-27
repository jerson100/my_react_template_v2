/* eslint-disable react-refresh/only-export-components */

import { RouteObject } from "react-router";

import profileRouter from "@profile/routers";
import MainContainer from "../../components/common/MainContainer";
import { NotFoundPrivatePage } from "@/core/components/common";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainContainer />,
    children: [
      ...profileRouter,
      // {
      //   index: true,
      //   element: <HomePage />
      // },
      // {
      //   path: 'home',
      //   element: <HomePage />
      // },
      // {
      //   path: 'projects/:project/apps',
      //   element: <ApplicationsPage />
      // },
      // {
      //   path: 'head-count',
      //   element: (
      //     <Suspense fallback={<Container maxW={'8xl'}>Loading...</Container>}>
      //       <HeadCountPage />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: 'bi',
      //   element: (
      //     <Suspense fallback={<Container maxW={'8xl'}>Loading...</Container>}>
      //       <BIPage />
      //     </Suspense>
      //   )
      // },
      // ...reservationRouter,
      // ...transbankRouter,
      // ...administrationRouter,
      {
        path: "*",
        element: <NotFoundPrivatePage />,
      },
    ],
  },
];

export default routes;
