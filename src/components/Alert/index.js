import * as React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

export default function AlertMini({ text, isSubmit }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar(text, variant);
  };
  if (isSubmit) {
    handleClickVariant("success");
  }
  return <SnackbarProvider maxSnack={3} />;
}
