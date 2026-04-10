"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.setGlobalPrefix('api');
    app.enableVersioning({ type: common_1.VersioningType.URI, defaultVersion: '1' });
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
    console.log(`App corriendo en ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map