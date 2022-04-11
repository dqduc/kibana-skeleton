import { EuiLink, EuiLinkButtonProps } from "@elastic/eui";
import React from "react";
import { useHref, useNavigate } from "react-router-dom";
import { _onClick } from "../utils/routing";

export default function EuiCustomLink({
  to,
  ...rest
}: { to: string } & EuiLinkButtonProps) {
  const history = useNavigate();

  // Generate the correct link href (with basename accounted for)
  const href = useHref({ pathname: to });
  const onClick = _onClick(to, history);
  const props = { ...rest, href, onClick };

  // @ts-ignore-next-line
  return <EuiLink {...props} />;
}
