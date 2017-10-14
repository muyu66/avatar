import { Module } from '@nestjs/common';
import * as Modules from './';

@Module({
    modules: [Modules.ShoeModule, Modules.UserFootModule],
})
export class ApplicationModule { }