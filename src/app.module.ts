import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule]
})
export class AppModule implements NestModule {
  configure(consumner: MiddlewareConsumer) {
    consumner
    .apply(logger)
    .forRoutes(CatsController)
  }
}