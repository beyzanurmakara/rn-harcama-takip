import Metrics from './Metrics';

const type={
    bold:'OpenSans-Bold',
    extraBold:'OpenSans-ExtraBold',
    semiBold:'OpenSans-SemiBold',
    italic:'OpenSans-Itlic',
    light:'OpenSans-Light',
    regular:'OpenSans-Regular',
    logo:'Righteous-Regular',
};

const step = Metrics.width * 0.0025;
const zero = Metrics.width * 0.002;

const size = punto => zero + step * punto;

export default {
  type,
  size,
};