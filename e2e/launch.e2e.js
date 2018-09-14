import { expect } from 'chai';
import { app, startApp, stopApp } from './utils';

import packageJson from '../package.json';

describe('application launch', function () {
    before(startApp);
    after(stopApp);

    it('shows the main window', async function () {
        expect(await app.browserWindow.isVisible()).to.be.true;
        expect(await app.browserWindow.getTitle()).to.be.equal(packageJson.productName);
    });
});
