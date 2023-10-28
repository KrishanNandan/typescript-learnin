import { type ReactNode, type PropsWithChildren } from "react"

export type COURSE_GOAL_PROPS = { title: string, description: string, children?: ReactNode }

export type PROP_WITH_CHILDREN = PropsWithChildren<{ type: string }>