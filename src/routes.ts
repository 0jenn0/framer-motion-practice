import LayoutComponent1 from "./components/1.Animation/1-1.Layout/1_r/1_r";
import LayoutComponent2 from "./components/1.Animation/1-1.Layout/2_r/2_r";
import LayoutComponent3 from "./components/1.Animation/1-1.Layout/3_r/3_r";
import LayoutComponent4 from "./components/1.Animation/1-1.Layout/4_r/4_r";
import ScrollComponent1 from "./components/1.Animation/1-3.Scroll/1_r/1_r";
import ScrollComponent2 from "./components/1.Animation/1-3.Scroll/2_r/2_r";
import ScrollComponent3 from "./components/1.Animation/1-3.Scroll/3_r/3_r";
import ScrollComponent4 from "./components/1.Animation/1-3.Scroll/4_r/4_r";
import TransitionComponent1 from "./components/1.Animation/1-4.Transition/1_r/1_r";
import TransitionComponent2 from "./components/1.Animation/1-4.Transition/2_r/2_r";
import TransitionComponent3 from "./components/1.Animation/1-4.Transition/3_r/3_r";
import TransitionComponent4 from "./components/1.Animation/1-4.Transition/4_r/4_r";
import AnimatePresenceComponent1 from "./components/2.Components/2-2.AnimatePresence/1_r/1_r";
import CarouselSelf from "./components/2.Components/2-2.AnimatePresence/1_r/self/1_r";

export const routePaths = [
  "/",
  "/layout_1",
  "/layout_2",
  "/layout_3",
  "/layout_4",
  "/scroll_1",
  "/scroll_2",
  "/scroll_3",
  "/scroll_4",
  "/transition_1",
  "/transition_2",
  "/transition_3",
  "/transition_4",
  "/animatePresence_1",
  "/animatePresence_1_self",
] as const;
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: [
      "/layout_1",
      "/layout_2",
      "/layout_3",
      "/layout_4",
      "/scroll_1",
      "/scroll_2",
      "/scroll_3",
      "/scroll_4",
      "/transition_1",
      "/transition_2",
      "/transition_3",
      "/transition_4",
      "/animatePresence_1",
      "/animatePresence_1_self",
    ],
  },
  "/layout_1": {
    key: "/layout_1",
    link: "/layout_1",
    name: "01. layout_1",
    children: LayoutComponent1,
  },
  "/layout_2": {
    key: "/layout_2",
    link: "/layout_2",
    name: "02. layout_2",
    children: LayoutComponent2,
  },
  "/layout_3": {
    key: "/layout_3",
    link: "/layout_3",
    name: "03. layout_3",
    children: LayoutComponent3,
  },
  "/layout_4": {
    key: "/layout_4",
    link: "/layout_4",
    name: "04. layout_4 | LayoutGroup",
    children: LayoutComponent4,
  },
  "/scroll_1": {
    key: "/scroll_1",
    link: "/scroll_1",
    name: "01. scroll_1",
    children: ScrollComponent1,
  },
  "/scroll_2": {
    key: "/scroll_2",
    link: "/scroll_2",
    name: "02. scroll_2",
    children: ScrollComponent2,
  },
  "/scroll_3": {
    key: "/scroll_3",
    link: "/scroll_3",
    name: "03. scroll_3",
    children: ScrollComponent3,
  },
  "/scroll_4": {
    key: "/scroll_4",
    link: "/scroll_4",
    name: "04. scroll_4",
    children: ScrollComponent4,
  },
  "/transition_1": {
    key: "/transition_1",
    link: "/transition_1",
    name: "01. transition_1",
    children: TransitionComponent1,
  },
  "/transition_2": {
    key: "/transition_2",
    link: "/transition_2",
    name: "02. transition_2",
    children: TransitionComponent2,
  },
  "/transition_3": {
    key: "/transition_3",
    link: "/transition_3",
    name: "03. transition_3",
    children: TransitionComponent3,
  },
  "/transition_4": {
    key: "/transition_4",
    link: "/transition_4",
    name: "04. transition_4",
    children: TransitionComponent4,
  },
  "/animatePresence_1": {
    key: "/animatePresence_1",
    link: "/animatePresence_1",
    name: "01. animatePresence",
    children: AnimatePresenceComponent1,
  },
  "/animatePresence_1_self": {
    key: "/animatePresence_1_self",
    link: "/animatePresence_1_self",
    name: "01. animatePresence_self",
    children: CarouselSelf,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
