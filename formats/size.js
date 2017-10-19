import Parchment from 'parchment';

let SizeClass = new Parchment.Attributor.Class('size', 'ql-size', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['12px','13px','14px','15px','16px','18px','20px','22px','24px','26px']
});
let SizeStyle = new Parchment.Attributor.Style('size', 'font-size', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['12px','13px','14px','15px','16px','18px','20px','22px','24px','26px']
});

export { SizeClass, SizeStyle };
