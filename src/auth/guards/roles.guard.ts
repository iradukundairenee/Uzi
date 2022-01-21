import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}

// import {Role} from '../moddles/role.enum';
// import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
// import {userInterface} from '../../user/modles/user.interface';

// const RoleGuard = (role: Role): Type<CanActivate> => {
//     class RoleGuardMixin implements CanActivate {
//       canActivate(context: ExecutionContext) {
//         const request = context.switchToHttp().getRequest<userInterface>();
//         const user = request.role;
   
//        console.log(user);
//       }
//     }
   
//     return mixin(RoleGuardMixin);
//   }
   
//   export default RoleGuard;