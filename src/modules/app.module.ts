import { Module } from '@nestjs/common';
import * as Modules from './';

@Module({
    modules: [
        Modules.ShoeModule,
        Modules.UserFootModule,
        Modules.PhotoModule,
    ],
})
export class ApplicationModule { }