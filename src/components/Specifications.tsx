import { Item, Title } from '@/components';
import { LITERALS } from '@/data';

interface ProductProps {
  brand?: string;
  name?: string;
  description?: string;
  specs?: SpecsProps;
}

interface SpecsProps {
  screen?: string;
  resolution?: string;
  processor?: string;
  mainCamera?: string;
  selfieCamera?: string;
  battery?: string;
  os?: string;
  screenRefreshRate?: string;
}

interface SpecificationsProps {
  label?: string;
  data?: ProductProps;
}
const Specifications = ({ label, data }: SpecificationsProps) => {
  return (
    <div>
      {label && (
        <Title uppercase variant="medium" mb="20px">
          {label}
        </Title>
      )}
      <div>
        <Item name={LITERALS.BRAND} description={data?.brand} showBottomBorder={false} />
        <Item name={LITERALS.NANE} description={data?.name} showBottomBorder={false} />
        <Item
          name={LITERALS.DESCRIPTION}
          description={data?.description}
          showBottomBorder={false}
        />
        <Item
          name={LITERALS.SCREEN}
          description={data?.specs?.screen}
          showBottomBorder={false}
        />
        <Item
          name={LITERALS.RESOLUTION}
          description={data?.specs?.resolution}
          showBottomBorder={false}
        />
        <Item
          name={LITERALS.PROCESSOR}
          description={data?.specs?.processor}
          showBottomBorder={false}
        />
        <Item
          name={LITERALS.MAIN_CAMERA}
          description={data?.specs?.mainCamera}
          showBottomBorder={false}
        />
        <Item
          name={LITERALS.SELFIE_CAMERA}
          description={data?.specs?.selfieCamera}
          showBottomBorder={false}
        />
        <Item
          name={LITERALS.BATTERY}
          description={data?.specs?.battery}
          showBottomBorder={false}
        />
        <Item name={LITERALS.OS} description={data?.specs?.os} showBottomBorder={false} />
        <Item
          name={LITERALS.SCREEN_REFRESH_RATE}
          description={data?.specs?.screenRefreshRate}
        />
      </div>
    </div>
  );
};

Specifications.displayName = 'Specifications';

export default Specifications;
