import { createRandomEmployee } from "$lib/API/FakeData";
import type { EmployeeInput } from "$lib/Models/Employee";
import { faker } from "@faker-js/faker";

export const generateFakeData = (amount: number) => {
    const employees: EmployeeInput[] = faker.helpers.multiple(createRandomEmployee, {
        count: Number(amount)
    });

    return employees;
};


export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}