/*
  File containing generics typescript interface for type checking
*/

import { ReactNode } from 'react'

export interface IStringTMap<T> {
    [key: string]: T
}

export interface IStringAnyMap {
    [key: string]: any
}

export interface IPropsChildren {
    children: ReactNode
}

export interface IDangerousHTMLContent {
    __html: string
}
