import { graphQLClient } from "@/graphql/graphql"
import { addSingleSchool } from "@/graphql/mutations/school-mutations"
import { getSchools, getSingleSchool } from "@/graphql/queries/school-queries"

export const addSchool = async (name: string, address: string) => {
    const data = await graphQLClient.request(addSingleSchool, {
        name,
        address
    })
    console.log("add school", data)
}

export const getSchoolList = async () => {
    const data = await graphQLClient.request(getSchools)
    console.log(getSchools)
}

export const getSchoolById = async (id: string) => {
    const data = await graphQLClient.request(getSingleSchool, {
        id
    })
}