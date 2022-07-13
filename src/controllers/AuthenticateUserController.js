"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateUserService_1 = require("../services/AuthenticateUserService");
class AuthenticateUserController {
    async handle(request, response) {
        const { code } = request.body;
        const service = new AuthenticateUserService_1.AuthenticateUserService();
        try {
            const result = await service.execute(code);
            return response.json(result);
        }
        catch (error) {
            return response.json({ error: error.message });
        }
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
