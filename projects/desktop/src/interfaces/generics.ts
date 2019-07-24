import { ReactNode } from 'react'

/*
  File containing generics typescript interface for type checking
*/

export interface IStringTMap<T> {
  [key: string]: T
}

export interface IStringAnyMap {
  [key: string]: any
}

export interface IProps {
  children: ReactNode
}

export interface IAction {
  type: string,
  payload?: any,
}
