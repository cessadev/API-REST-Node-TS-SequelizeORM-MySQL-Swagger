import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift(); // file.routes.ts => ['file'.'routes'.'ts'] return 'file'
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => { // List the files in the directory '...src/routes'
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'handler'){
        import(`./${cleanName}.routes`).then((moduleRouter) => { // import dinamic './file.routes'
            // console.log(`/${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };