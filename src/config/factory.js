import { config } from './index';
import { loggerFactory } from '../logger';

const logger = loggerFactory('config');

export const configFactory = emarsys => Promise
  .all([
    emarsys.utils.getConfig(),
    emarsys.utils.getAuthenticationToken(config.serviceName),
    emarsys.utils.getTranslation(config.translationName).catch(error => {
      logger.fromError('translation', error);
      console.warn(`Failed to get translation: ${config.translationName}`, error);
      return { [config.translationName]: {} };
    })
  ]);
