import type { ReactNode } from "react";
// The prototype uses a horizontal, scrollable mobile navigation row rather than
// an overlay drawer. Keep its DOM and CSS unchanged in this reusable boundary.
export default function MobileDrawer({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
