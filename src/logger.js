import { initialize } from '@emartech/client-logger';

const LoggerFactory = initialize('vue-example');
export const loggerFactory = name => LoggerFactory.create(name);
