import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import * as Controllers from '../controllers';
import * as Services from '../services';
import * as Daos from '../daos';
import * as Middlewares from '../middlewares';

@Module({
    controllers: [Controllers.PhotoController],
    components: [Services.PhotoService, Daos.PhotoDao],
})
export class PhotoModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(Middlewares.UploadMiddleware).forRoutes(
            { path: '/photos', method: RequestMethod.POST },
        );
    }
}