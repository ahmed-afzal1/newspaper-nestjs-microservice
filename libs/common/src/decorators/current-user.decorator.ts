import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Admin } from 'apps/auth/src/users/entity/admin.entity';

const getCurrentUserByContext = (context: ExecutionContext): Admin => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
