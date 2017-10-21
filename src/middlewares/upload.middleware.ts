import { Middleware, NestMiddleware } from '@nestjs/common';
import * as multer from 'multer';

@Middleware()
export class UploadMiddleware implements NestMiddleware {

    resolve(): (req, res, next) => void {
        const upload = multer({ dest: './upload/' });
        return upload.any();
    }

}