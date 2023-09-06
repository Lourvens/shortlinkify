import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from './jwt-auth.guard';

/**
 * this guard act as an interceptor extend from the AuthGuard
 * it inject a user payload to the request object only if
 * the request is authenticated otherwise the request.user
 * will remain null however no error will be thrown
 */
export class InjectUserToRequest extends AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      await super.canActivate(context);
    } catch {}

    return true;
  }
}
