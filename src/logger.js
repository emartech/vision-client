import { initialize } from '@emartech/client-logger';
import { config } from './config';

const LoggerFactory = initialize(config.serviceName);
export const loggerFactory = name => LoggerFactory.create(name);
