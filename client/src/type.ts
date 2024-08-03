export type Column = {
    name: string | JSX.Element
    element: (row: any) => JSX.Element
}