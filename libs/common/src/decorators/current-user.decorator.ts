import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Admin } from '../entity';

const getCurrentUserByContext = (context: ExecutionContext): Admin => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
