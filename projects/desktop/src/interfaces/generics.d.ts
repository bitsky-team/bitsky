/*
  File containing generics typescript interface for type checking
*/

interface IStringTMap<T> {
  [key: string]: T
}

interface IStringAnyMap {
  [key: string]: any
}

interface IPropsChildren {
  children: ReactNode
}

interface IAction {
  type: string,
  payload?: any,
}

interface IDangerousHTMLContent {
  __html: string,
}
