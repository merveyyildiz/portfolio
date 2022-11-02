import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
    const query = gql`
    {
        projects {
            id
            title
            description
            image {
                url
            }
            githubUrl
            tags
        }
    }
    `
    const { projects } = await graphcms.request(query);
    return projects;
}