import { Icon } from '@blueprintjs/core';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';

interface NavigatorFeature {
  name: string;
  enabled: () => boolean;
}

interface CheckNavigatorProps {
  fallbackComponent?: ReactNode;
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeadCell = styled.th`
  border: 1px solid #cdcdcd;
`;

const TableCell = styled.td`
  border: 1px solid #cdcdcd;
  text-align: center;
`;

const FeatureIcon = styled(Icon)<{ icon: 'tick' | 'disable' }>`
  color: ${(props) => (props.icon === 'tick' ? 'green' : 'red')};
`;

/*
- [x] List of checks (array with identifier for monitoring and callback for check)
- [ ] Do the checks before loading app
- [x] Display a fallback component if check fails, asking to use a more modern browser

On peu utiliser un Provider & context. check si les features sont activées tout en haut dans le dom via le provider.
Ici on utilise juste les informations que on a passé au provider (et que on récupère via le state) pour les afficher

ATTENTION je ne sais pas si dans ce cas, le check est fait avant le chargement de l'app.
j'imagine que si je met le provider très haut, il est chargé avant tout le reste
 */

const context = createContext<NavigatorFeature[] | null>(null);

interface CheckNavigatorProviderProps {
  features: NavigatorFeature[];
  children: ReactNode;
}

export function CheckNavigatorProvider(props: CheckNavigatorProviderProps) {
  const { children, features } = props;

  useEffect(() => {
    for (const feature of features) {
      if (!feature.enabled()) {
        console.error(`Feature "${feature.name}" is not enabled`);
      }
    }
  }, [features]);

  return <context.Provider value={features}>{children}</context.Provider>;
}

function useCheckNavigatorFeatures() {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error('CheckNavigatorProvider must be provided');
  }

  return ctx;
}

export function CheckNavigator(props: CheckNavigatorProps) {
  const { fallbackComponent } = props;

  const features = useCheckNavigatorFeatures();
  const hasFeaturesFailed = features.some((feature) => !feature.enabled());
  if (hasFeaturesFailed && fallbackComponent) {
    return fallbackComponent;
  }

  return (
    <Table>
      <thead>
        <tr>
          {features.map((feature) => (
            <TableHeadCell key={feature.name}>{feature.name}</TableHeadCell>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {features.map((feature) => (
            <TableCell key={feature.name}>
              <FeatureIcon icon={feature.enabled() ? 'tick' : 'disable'} />
            </TableCell>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}
