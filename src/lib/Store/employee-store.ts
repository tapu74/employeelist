import { writable } from 'svelte/store';
import type { BulkOperationState, BulkResponse, Employee } from '../Types/Employee';


const employeeData = writable<Employee[]>([]);

export const employeeStore = {
    subscribe: employeeData.subscribe,
    addEmployees: (employees: Employee[]) => {
        employeeData.update((oldEmployees: Employee[]) => {
            return [...employees, ...oldEmployees];
        })
    }
}

export const bulkData = writable<Pick<BulkResponse, 'succeeded' | 'failed' | 'total' | 'id' | 'status'> & BulkOperationState | null>(null);
