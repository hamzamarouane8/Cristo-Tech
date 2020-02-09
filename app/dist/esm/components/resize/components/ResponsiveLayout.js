import { useWindowDimensions } from './WindowDimensionsProvider';

var ResponsiveLayout = function ResponsiveLayout(_ref) {
  var breakpoint = _ref.breakpoint,
      renderMobile = _ref.renderMobile,
      renderDesktop = _ref.renderDesktop;

  var _useWindowDimensions = useWindowDimensions(),
      width = _useWindowDimensions.width;

  return width > breakpoint ? renderDesktop() : renderMobile();
};