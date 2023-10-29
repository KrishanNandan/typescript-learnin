import { type ReactNode, type PropsWithChildren } from "react"

export type goal= {
    id: string;
    description: string;
    title: string
}

export type COURSE_GOAL_PROPS = { title: string, children?: ReactNode, id:string, handleDelete:(id:string)=>void }

export type PROP_WITH_CHILDREN = PropsWithChildren<{ img: { src: string; alt: string } }>


export type GOAL_STATE = goal[];

export type PROP_WITH_CHILDREN_NEW_GOAL = PropsWithChildren<{ handleClick:(newgoal:goal)=>void}>

