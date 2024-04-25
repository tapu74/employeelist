import type { Employee } from '../Models/Employee';
import { faker } from '@faker-js/faker';

const allowedLanguages = [
  "de", "en", "pl", "ro", "ru", "ar", "cs", "bg", "hu", "sl", "hr", "sq", "tr"
];

export function createRandomEmployee(): Employee {
  return {
    firstName: faker.internet.displayName(),
    lastName: faker.internet.userName(),
    language: allowedLanguages[faker.number.int({ max: allowedLanguages.length - 1 })],
    active: faker.datatype.boolean(),
    employeeKey: faker.string.uuid(),
  };
}