"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService) => ({
            uri: configService.get('MONGODB_URI'),
        }),
        inject: [ConfigService],
    }),
    TasksModule,
], ;
//# sourceMappingURL=tasks.module.js.map