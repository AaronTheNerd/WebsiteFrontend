/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateProjectModel: OnCreateProjectModelSubscription;
  onUpdateProjectModel: OnUpdateProjectModelSubscription;
  onDeleteProjectModel: OnDeleteProjectModelSubscription;
};

export type CreateProjectModelInput = {
  id?: string | null;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
};

export enum LanguageEnum {
  CPP = "CPP",
  C = "C",
  PY = "PY",
  JS = "JS",
  JAVA = "JAVA",
  MATLAB = "MATLAB",
  ARDUINO = "ARDUINO",
  VERILOG = "VERILOG"
}

export type ModelProjectModelConditionInput = {
  title?: ModelStringInput | null;
  school?: ModelBooleanInput | null;
  languages?: ModelLanguageEnumInput | null;
  description?: ModelStringInput | null;
  content?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  gitLink?: ModelStringInput | null;
  thumbnails?: ModelStringInput | null;
  favorite?: ModelBooleanInput | null;
  and?: Array<ModelProjectModelConditionInput | null> | null;
  or?: Array<ModelProjectModelConditionInput | null> | null;
  not?: ModelProjectModelConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelLanguageEnumInput = {
  eq?: LanguageEnum | null;
  ne?: LanguageEnum | null;
};

export type ProjectModel = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectModelInput = {
  id: string;
  title?: string | null;
  school?: boolean | null;
  languages?: Array<LanguageEnum> | null;
  description?: string | null;
  content?: string | null;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
};

export type DeleteProjectModelInput = {
  id: string;
};

export type ModelProjectModelFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  school?: ModelBooleanInput | null;
  languages?: ModelLanguageEnumInput | null;
  description?: ModelStringInput | null;
  content?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  gitLink?: ModelStringInput | null;
  thumbnails?: ModelStringInput | null;
  favorite?: ModelBooleanInput | null;
  and?: Array<ModelProjectModelFilterInput | null> | null;
  or?: Array<ModelProjectModelFilterInput | null> | null;
  not?: ModelProjectModelFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelProjectModelConnection = {
  __typename: "ModelProjectModelConnection";
  items: Array<ProjectModel | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionProjectModelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  school?: ModelSubscriptionBooleanInput | null;
  languages?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  content?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  gitLink?: ModelSubscriptionStringInput | null;
  thumbnails?: ModelSubscriptionStringInput | null;
  favorite?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionProjectModelFilterInput | null> | null;
  or?: Array<ModelSubscriptionProjectModelFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateProjectModelMutation = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectModelMutation = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectModelMutation = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type GetProjectModelQuery = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectModelsQuery = {
  __typename: "ModelProjectModelConnection";
  items: Array<{
    __typename: "ProjectModel";
    id: string;
    title: string;
    school: boolean;
    languages: Array<LanguageEnum>;
    description: string;
    content: string;
    tags?: Array<string> | null;
    gitLink?: string | null;
    thumbnails?: Array<string> | null;
    favorite?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateProjectModelSubscription = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectModelSubscription = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectModelSubscription = {
  __typename: "ProjectModel";
  id: string;
  title: string;
  school: boolean;
  languages: Array<LanguageEnum>;
  description: string;
  content: string;
  tags?: Array<string> | null;
  gitLink?: string | null;
  thumbnails?: Array<string> | null;
  favorite?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProjectModel(
    input: CreateProjectModelInput,
    condition?: ModelProjectModelConditionInput
  ): Promise<CreateProjectModelMutation> {
    const statement = `mutation CreateProjectModel($input: CreateProjectModelInput!, $condition: ModelProjectModelConditionInput) {
        createProjectModel(input: $input, condition: $condition) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectModelMutation>response.data.createProjectModel;
  }
  async UpdateProjectModel(
    input: UpdateProjectModelInput,
    condition?: ModelProjectModelConditionInput
  ): Promise<UpdateProjectModelMutation> {
    const statement = `mutation UpdateProjectModel($input: UpdateProjectModelInput!, $condition: ModelProjectModelConditionInput) {
        updateProjectModel(input: $input, condition: $condition) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectModelMutation>response.data.updateProjectModel;
  }
  async DeleteProjectModel(
    input: DeleteProjectModelInput,
    condition?: ModelProjectModelConditionInput
  ): Promise<DeleteProjectModelMutation> {
    const statement = `mutation DeleteProjectModel($input: DeleteProjectModelInput!, $condition: ModelProjectModelConditionInput) {
        deleteProjectModel(input: $input, condition: $condition) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectModelMutation>response.data.deleteProjectModel;
  }
  async GetProjectModel(id: string): Promise<GetProjectModelQuery> {
    const statement = `query GetProjectModel($id: ID!) {
        getProjectModel(id: $id) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectModelQuery>response.data.getProjectModel;
  }
  async ListProjectModels(
    filter?: ModelProjectModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectModelsQuery> {
    const statement = `query ListProjectModels($filter: ModelProjectModelFilterInput, $limit: Int, $nextToken: String) {
        listProjectModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            school
            languages
            description
            content
            tags
            gitLink
            thumbnails
            favorite
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectModelsQuery>response.data.listProjectModels;
  }
  OnCreateProjectModelListener(
    filter?: ModelSubscriptionProjectModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProjectModel">>
  > {
    const statement = `subscription OnCreateProjectModel($filter: ModelSubscriptionProjectModelFilterInput) {
        onCreateProjectModel(filter: $filter) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateProjectModel">
      >
    >;
  }

  OnUpdateProjectModelListener(
    filter?: ModelSubscriptionProjectModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProjectModel">>
  > {
    const statement = `subscription OnUpdateProjectModel($filter: ModelSubscriptionProjectModelFilterInput) {
        onUpdateProjectModel(filter: $filter) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateProjectModel">
      >
    >;
  }

  OnDeleteProjectModelListener(
    filter?: ModelSubscriptionProjectModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProjectModel">>
  > {
    const statement = `subscription OnDeleteProjectModel($filter: ModelSubscriptionProjectModelFilterInput) {
        onDeleteProjectModel(filter: $filter) {
          __typename
          id
          title
          school
          languages
          description
          content
          tags
          gitLink
          thumbnails
          favorite
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteProjectModel">
      >
    >;
  }
}
