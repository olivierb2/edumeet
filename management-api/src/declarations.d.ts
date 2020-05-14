import { Application as ExpressFeathers } from '@feathersjs/express';

// A mapping of service names to types. Will be extended in service files.
// eslint-disable-next-line
export interface ServiceTypes {}
// The application instance type that will be used everywhere else
export type Application = ExpressFeathers<ServiceTypes>;