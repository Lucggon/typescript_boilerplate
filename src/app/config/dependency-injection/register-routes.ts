import { ContainerBuilder } from 'diod';

import { RouterRegister } from '../../shared/routerRegister.interface';
import { StatusRoutes } from '../../status/Status.route';
import { StatusGetController } from '../../status/StatusGetController';

export const ROUTERS_REGISTERED = 'ROUTERS_REGISTERED';
const registerRoutesContainer = new ContainerBuilder();
registerRoutesContainer
  .registerAndUse(StatusRoutes)
  .withDependencies([StatusGetController])
  .addTag(ROUTERS_REGISTERED);
registerRoutesContainer.registerAndUse(StatusGetController);

const containerRoutes = registerRoutesContainer.build();
export function getRoutes(): RouterRegister[] {
  return containerRoutes
    .findTaggedServiceIdentifiers<RouterRegister>(ROUTERS_REGISTERED)
    .map((identifier) => {
      return containerRoutes.get(identifier);
    });
}
