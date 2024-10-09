import { Link, LinkProps } from 'expo-router';

import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends LinkProps<string | object> {}

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    />
  );
};
export default ThemedLink;
