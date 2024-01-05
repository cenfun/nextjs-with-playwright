import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import EC from 'eight-colors';
import { addCoverageReport } from 'monocart-reporter';

const globalTeardown = async (config) => {
    console.log('globalTeardown ...');

    const baseURL = config.webServer.url;
    const res = await axios.get(`${baseURL}/take-coverage`);
    const dir = res.data.dir;
    console.log(dir);

    const files = fs.readdirSync(dir);
    for (const filename of files) {
        const content = fs.readFileSync(path.resolve(dir, filename)).toString('utf-8');
        const json = JSON.parse(content);
        let coverageList = json.result;

        // filter node internal files
        coverageList = coverageList.filter((entry) => entry.url && entry.url.startsWith('file:'));

        coverageList = coverageList.filter((entry) => entry.url.includes('next/server/app'));

        if (!coverageList.length) {
            continue;
        }

        // console.log(coverageList.map((entry) => entry.url));

        // attached source content
        coverageList.forEach((entry) => {
            const filePath = fileURLToPath(entry.url);
            if (fs.existsSync(filePath)) {
                entry.source = fs.readFileSync(filePath).toString('utf8');
            } else {
                EC.logRed('not found file', filePath);
            }
        });

        // there is no test info on teardown, just mock one with required config
        const mockTestInfo = {
            config
        };
        await addCoverageReport(coverageList, mockTestInfo);
    }

};

export default globalTeardown;
