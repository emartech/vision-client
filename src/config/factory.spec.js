import sinon from 'sinon';
import { expect } from 'chai';
import { configFactory } from './factory';
import { stubLogger, stubConsole } from '../test-util';

const createEmarsys = () => {
  const getConfig = sinon.stub();
  const getAuthenticationToken = sinon.stub();
  const getTranslation = sinon.stub();
  const emarsys = {
    utils: {
      getConfig, getAuthenticationToken, getTranslation
    }
  };

  return { emarsys, getConfig, getAuthenticationToken, getTranslation, ...stubConsole(), ...stubLogger() };
};

describe('configFactory', () => {
  it('should collect config from ui kit', async () => {
    const { emarsys, getConfig, getAuthenticationToken, getTranslation } = createEmarsys();
    getConfig.resolves({ customerId: 1, language: 'en' });
    getAuthenticationToken.resolves('secret');
    getTranslation.resolves({ en: { title: 'Title' } });

    const [config, token, translation] = await configFactory(emarsys);

    expect(config).to.eql({ customerId: 1, language: 'en' });
    expect(token).to.eql('secret');
    expect(translation).to.eql({ en: { title: 'Title' } });
  });

  it('should return empty translation on failure', async () => {
    const { emarsys, getConfig, getAuthenticationToken, getTranslation } = createEmarsys();
    getConfig.resolves({ customerId: 1, language: 'en' });
    getAuthenticationToken.resolves('secret');
    const error = new Error('failed loading');
    getTranslation.rejects(error);

    const [config, token, translation] = await configFactory(emarsys);

    expect(config).to.eql({ customerId: 1, language: 'en' });
    expect(token).to.eql('secret');
    expect(translation).to.eql({ example: {} });
  });

  it('should log on failure', async () => {
    const {
      emarsys, getConfig, getAuthenticationToken, getTranslation, consoleWarn, loggerFromError
    } = createEmarsys();
    getConfig.resolves({ customerId: 1, language: 'en' });
    getAuthenticationToken.resolves('secret');
    const error = new Error('failed loading');
    getTranslation.rejects(error);

    await configFactory(emarsys);

    expect(consoleWarn).to.have.been.calledWith('Failed to get translation: example', error);
    expect(loggerFromError).to.have.been.calledWith('translation', error);
  });

  it('should call ui kit with proper parameters', async () => {
    const { emarsys, getConfig, getAuthenticationToken, getTranslation } = createEmarsys();
    getConfig.resolves({ customerId: 1, language: 'en' });
    getAuthenticationToken.resolves('secret');
    getTranslation.resolves({ en: { title: 'Title' } });

    await configFactory(emarsys);

    expect(getConfig).to.have.been.calledWith();
    expect(getAuthenticationToken).to.have.been.calledWith('personalization-editor');
    expect(getTranslation).to.have.been.calledWith('example');
  });
});
