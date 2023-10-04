import { graphql } from "src/graphql";
import { CourtTreeQuery } from "src/graphql/graphql";
import { useQuery } from "@tanstack/react-query";
import { graphqlQueryFnHelper } from "utils/graphqlQueryFnHelper";
export type { CourtTreeQuery };

const courtTreeQuery = graphql(`
  query CourtTree {
    court(id: "1") {
      name
      id
      children(orderBy: name) {
        name
        id
        children {
          name
          id
          children {
            name
            id
            children {
              name
              id
              children {
                name
                id
              }
            }
          }
        }
      }
    }
  }
`);

export const useCourtTree = () => {
  return useQuery({
    queryKey: ["courtTreeQuery"],
    queryFn: async () => await graphqlQueryFnHelper(courtTreeQuery, {}),
  });
};

interface IItem {
  label: string;
  value: string;
  children?: IItem[];
}

export const rootCourtToItems = (court: CourtTreeQuery["court"], value?: "id" | "path"): IItem => ({
  label: court!.name ? court!.name : "Unnamed Court",
  value: value === "id" ? court!.id : `/courts/${court!.id}`,
  children: court!.children.length > 0 ? court!.children.map((child) => rootCourtToItems(child)) : undefined,
});
