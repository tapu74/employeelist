export interface EmployeeBulkImport {
    rows: Employee[]
}

export interface EmployeeInput {
    active:boolean;
    firstName: string;
    language: string;
    lastName: string;
}

export interface Employee extends EmployeeInput{
    firstDay?: string;
    id?: string;
    custom1? :string;
    custom2?: string;
    custom3?:string;
    employeeKey?:string;
    personalData?: unknown;
    personalDataModules?: PersonalDataModule;
    phone?: string;
    privacyConfirmed?: string;
    thirdFactor?:string;
    rollout?: boolean;
    status?: string;
    created?:string
}

export interface PersonalDataModule {
    pants: string;
    shirt: string,
    shoes: number;
    vaccination: string;
}

export interface  EmployeesResponse {
    limit: number;
    offset: number;
    rows :Employee[];
    total: number;
}

export interface ImportEmployeesBulkResponse {
    href : string;
    id: string;
}

export interface  BulkOperationState {
    bulkOperationState:  'inProgress'| 'notStarted'| 'Finished'
}

export interface BulkResponse {
    clientId: string;
    created: string;
    failed: number;
    id: string;
    method: string;
    modified: string;
    status: string;
    succeeded: number;
    total: number;
    userId: string;
    errors?: Error[];
    data?:Employee[]
  }
  
  export interface Error {
    messages: string[];
    data: Data;
  }
  
  export interface Data {
    active: boolean;
    firstName: string;
    lastName: string;
    employeeKey: string;
    language: string;
  }
  

// const data :EmployeesResponse  ={
//     limit: 0,
//     offset:0,
//     total: 10,
//     rows: [
//         {active: false, firstName: 'John', lastName:'Doe', language: 'De', }
//     ]
// }

export const bulkResponse1 : BulkResponse = {
    "clientId": "3f79c65f-cb82-4182-b5fe-fca5f98d30b8",
    "created": "2023-04-25T12:11:12.555Z",
    "failed": 0,
    "id": "cab04e80-fe07-496b-8bd3-70220999ea98",
    "method": "update",
    "modified": "2023-04-25T12:11:12.937Z",
    "status": "partly passed",
    "succeeded": 5,
    "total": 20,
    "userId": "83446c6d-85ac-44f1-970f-6a48d2efd671",
};

export const bulkResponse2 : BulkResponse = {
    "clientId": "3f79c65f-cb82-4182-b5fe-fca5f98d30b8",
    "created": "2023-04-25T12:11:12.555Z",
    "failed": 5,
    "id": "cab04e80-fe07-496b-8bd3-70220999ea98",
    "method": "update",
    "modified": "2023-04-25T12:11:12.937Z",
    "status": "partly passed",
    "succeeded": 10,
    "total": 20,
    "userId": "83446c6d-85ac-44f1-970f-6a48d2efd671",
};

export const bulkResponse3 : BulkResponse = {
    "clientId": "3f79c65f-cb82-4182-b5fe-fca5f98d30b8",
    "created": "2023-04-25T12:11:12.555Z",
    "failed": 5,
    "id": "cab04e80-fe07-496b-8bd3-70220999ea98",
    "method": "update",
    "modified": "2023-04-25T12:11:12.937Z",
    "status": "partly passed",
    "succeeded": 15,
    "total": 20,
    "userId": "83446c6d-85ac-44f1-970f-6a48d2efd671",
};