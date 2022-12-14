import { ThreeCircles } from 'react-loader-spinner';
import { Box } from '../Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ThreeCircles
        height="100"
        width="100"
        color="#3f51b5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Box>
  );
};
