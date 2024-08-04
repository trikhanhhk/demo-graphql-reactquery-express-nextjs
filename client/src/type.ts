export type Column = {
    name: string | JSX.Element
    element: (row: any) => JSX.Element
}

export type School = {
    id: string
    name: string
    address: string
}