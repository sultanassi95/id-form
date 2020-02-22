import React from "react";

export const darken = (hex: string, percent: number) => {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, "");

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  var r = parseInt(hex.substr(0, 2), 16),
    g = parseInt(hex.substr(2, 2), 16),
    b = parseInt(hex.substr(4, 2), 16);

  return (
    "#" +
    (0 | ((1 << 8) + r * (1 - percent / 100))).toString(16).substr(1) +
    (0 | ((1 << 8) + g * (1 - percent / 100))).toString(16).substr(1) +
    (0 | ((1 << 8) + b * (1 - percent / 100))).toString(16).substr(1)
  );
};

export const firstTruthy = (...args: any[]) => {
  // NEAT TRICK for truthy / falsy values :D
  // If you are not familiar already: Check that: https://gist.github.com/sultanassi95/8f4a7c580939b0b38807ce44fed9ed27
  return args.find(Boolean);
};

export const flex = (
  direction: string = "row",
  justify: string = "flex-start",
  align: string = "flex-start"
) =>
  ({
    display: "flex",
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction
  } as React.CSSProperties);

export const getListOfOptions = (
  arr: any,
  labelKey?: string,
  valueKey?: string,
  initialValue?: any
) => {
  return arr.reduce((accum: any[], item: any) => {
    let option;
    if (typeof item === "string" && !labelKey && !valueKey) {
      option = {
        label: item,
        value: item
      };
    } else {
      option = {
        label: item[labelKey!],
        value: item[valueKey!] || initialValue
      };
    }

    return [...accum, option];
  }, []);
};
