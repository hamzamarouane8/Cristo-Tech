export var Sizes = {
  HERO: 'hero',
  XXS: 'xxsmall',
  XS: 'xsmall',
  SM: 'small',
  MD: 'medium',
  LG: 'large',
  XL: 'xlarge',
  XXL: 'xxlarge',
  fromProps: function fromProps(props) {
    if (!props) return Sizes.SM;
    var res = Object.values(Sizes).filter(function (size) {
      return props[size] || props.size === size;
    });
    if (res) return res[0];
    return Sizes.SM;
  },
  extract: function extract(props) {
    if (!props) return Sizes.SM;
    var res = Object.values(Sizes).filter(function (size) {
      return props[size] || props.size === size;
    });
    if (res) return res[0];
    return Sizes.SM;
  }
};