export const createSelectStyles = (theme: any, error: boolean) => ({
  control: () => ({
    display: "flex",
    minHeight: "45px",
    width: "100%",
    borderRadius: "4px",
    border: `solid 1px ${!error ? theme.colors.accent : theme.colors.errorRed}`,
    backgroundColor: theme.colors.blueGrayLight,
    fontFamily: "inherit",
    fontWeight: 500,
    justifyContent: "center",
    outline: "none",
    fontSize: "15px"
  }),
  container: (provided: any) => ({
    ...provided,
    width: "100%"
  }),
  menuList: (provided: any) => ({
    ...provided,
    overflowX: "hidden",
    maxHeight: "250px"
  }),
  option: (provided: any) => ({
    ...provided,
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }),
  placeholder: (provided: any) => ({
    ...provided,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  })
});
