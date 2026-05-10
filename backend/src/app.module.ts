import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { StadesModule } from './stades/stades.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 60 * 60 * 6, // 6 heures
      max: 100,          // 100 entrées max en mémoire
    }),
    StadesModule,
  ],
})
export class AppModule {}