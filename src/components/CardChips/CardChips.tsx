import { Chip } from "../Chip";
import { Gap, Space } from "../Space";

type CardChipsProps = {
  labels: string[];
};

export const CardChips: React.FC<CardChipsProps> = ({ labels }) => {
  return (
    <Space columnGap={Gap.Medium}>
      {labels.map((label) => (
        <Chip>{label}</Chip>
      ))}
    </Space>
  );
};
