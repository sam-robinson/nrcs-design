import "bootstrap/dist/css/bootstrap.min.css";
import { addDecorator } from "@storybook/react";
import { CDThemeProvider } from "@/core/theme/CDThemeProvider";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

addDecorator(storyFn => <CDThemeProvider>{storyFn()}</CDThemeProvider>);
