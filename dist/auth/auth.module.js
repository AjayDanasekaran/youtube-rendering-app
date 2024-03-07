"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const twitter_strategy_1 = require("./strategy/twitter.strategy");
const oauth_service_1 = require("./oauth.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const auth_controller_1 = require("./auth.controller");
const users_module_1 = require("../users/users.module");
const instagram_strategy_1 = require("./strategy/instagram.strategy");
const google_strategy_1 = require("./strategy/google.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            users_module_1.UsersModule
        ],
        controllers: [auth_controller_1.oAuthController],
        providers: [twitter_strategy_1.TwitterStrategy, oauth_service_1.OauthService, instagram_strategy_1.InstagramStrategy, google_strategy_1.GoogleStrategy],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map