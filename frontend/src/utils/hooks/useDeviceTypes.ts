import { useBreakpointValue } from '@chakra-ui/react';

interface DeviceTypes {
  isMobile: boolean;
  isDesktop: boolean;
}

export const useDeviceTypes = (): DeviceTypes => {
  const isMobile = useBreakpointValue({ base: true, sm: false }) || false;
  const isDesktop = useBreakpointValue({ base: false, lg: true }) || false;

  return { isMobile, isDesktop };
};

interface DisplayProperties {
  device: 'mobile' | 'desktop';
  style?: string;
}

export const getDisplayStyles = ({ device, style = 'flex' }: DisplayProperties) => {
  if (device === 'mobile') {
    return { md: 'none' };
  } else {
    return { base: 'none', md: style };
  }
};
