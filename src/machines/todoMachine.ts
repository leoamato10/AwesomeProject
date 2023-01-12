import { createMachine } from 'xstate';

export const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FWwAQFsCGAxgBYCWAdmAHQAyqeE5UWaGsAxC5lrfZANoAGALqJQAB0wkALiVRlRIAB6IATAHZKADgCsARgDMagQBYVu3SoHa1mgDQgAnogC0ugJwCtAldrPGAbJr6-moqKgC+4fac2PjE5FQ8DGRMMWxJjMzoXABieCQANoIiSCASsNKy8qXKCM4qmp5uuv4CugFqarqamsb2TnW6Av6UKvqaKv4ePtoCbm7+kVEgZOhwCjG4hKQUCuWVcgq1zvr6KqMtagvtasG3-S7qmqNuxl0t3lOh2pHR2bHbBI0OjJVL-PaSGSHGqPfzGSjGIK3SyaKb6OYPQYeLS6bTaUzonxTXS-ECbOI7RIgyBZVgQipQ6qgWoqNxaYz6PGNfECObWNSY1zw4weNq3CaBbzBUnkwEUYH0TKbACiACdVahVfSDkylI9ehcQtc3nd9IL2gjRbpxZNGmNFksgA */
  createMachine({
    predictableActionArguments: true,
    id: 'Todos machine',
    schema: {
      events: {} as { type: 'Todos Loaded' } | { type: 'Loading Todos Fail' },
    },
    states: {
      'Loading Todos': {
        on: {
          'Todos Loaded': {
            target: 'Loaded Todos',
          },
          'Loading Todos Fail': {
            target: 'Loading Todos Error',
          },
        },
      },
      'Loaded Todos': {},
      'Loading Todos Error': {},
    },

    initial: 'Loading Todos',
  });
