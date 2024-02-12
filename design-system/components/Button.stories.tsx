import type { Meta, StoryObj } from "@storybook/react";

import { button } from "@styled-system/recipes";

type ButtonProps = Parameters<typeof button>[0] &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    "data-hover"?: string;
    "data-active"?: string;
    "data-focus-visible"?: string;
  };

const Button = ({ priority, size, ...props }: ButtonProps) => {
  return (
    <button className={button(button.raw({ priority, size }))} {...props} />
  );
};

const meta = {
  component: Button,
  title: "Design System/Button",
  args: {
    children: "Label",
    size: "medium",
  },
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: button.variantMap["size"],
      },
    },
    priority: {
      type: {
        name: "enum",
        value: button.variantMap["priority"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryNormal = {
  args: { priority: "primary" },
} satisfies Story;

export const PrimaryHover = {
  args: { priority: "primary", "data-hover": "" },
} satisfies Story;

export const PrimaryActive = {
  args: { priority: "primary", "data-active": "" },
} satisfies Story;

export const PrimaryFocus = {
  args: { priority: "primary", "data-focus-visible": "" },
} satisfies Story;

export const PrimaryDisabled = {
  args: { priority: "primary", disabled: true },
} satisfies Story;

const Swatch = () => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: `repeat(${button.variantMap["priority"].length}, 1fr)`,
        gridTemplateRows: `repeat(${
          button.variantMap["size"].length * 5
        }, 1fr)`,
        gap: "16px",
      }}
    >
      {button.variantMap["priority"].map((priority) =>
        button.variantMap["size"].map((size) =>
          (
            [
              null,
              { type: "data", value: "hover" },
              { type: "data", value: "active" },
              { type: "data", value: "focus-visible" },
              { type: "props", key: "disabled", value: true },
            ] as const
          ).map((status) => {
            if (status === null)
              return (
                <div key={`${priority}-${size}`}>
                  <Button priority={priority} size={size}>
                    {priority} {size} Normal
                  </Button>
                </div>
              );
            if (status.type === "data")
              return (
                <div key={`${priority}-${size}-data-${status.value}`}>
                  <Button
                    priority={priority}
                    size={size}
                    {...{ [`data-${status.value}`]: "" }}
                  >
                    {priority} {size} {status.value}
                  </Button>
                </div>
              );
            return (
              <div key={`${priority}-${size}-disabled`}>
                <Button priority={priority} size={size} disabled>
                  {priority} {size} Disabled
                </Button>
              </div>
            );
          })
        )
      )}
    </div>
  );
};

export const SwatchLight = {
  render: Swatch,
  parameters: {
    themes: { themeOverride: "light" },
  },
} satisfies Story;

export const SwatchDark = {
  render: Swatch,
  parameters: {
    themes: { themeOverride: "dark" },
    backgrounds: { default: "dark" },
  },
} satisfies Story;
