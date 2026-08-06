import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export type InkCTAProps = LinkProps | ButtonProps;

/**
 * InkCTA — primary action (§4). Ink-black fill / paper text on the Record;
 * inverts to light-fill / dark-ink on `.rr-field`. Verdigris focus ring.
 * NEVER a colored fill.
 */
export function InkCTA(props: InkCTAProps) {
  const { children, className } = props;
  const cls = ["rr-cta", className].filter(Boolean).join(" ");

  if (props.href !== undefined) {
    const { children: _c, className: _cn, href, ...rest } = props as LinkProps;
    void _c;
    void _cn;
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { children: _c, className: _cn, ...rest } = props as ButtonProps;
  void _c;
  void _cn;
  return (
    <button className={cls} type="button" {...rest}>
      {children}
    </button>
  );
}
