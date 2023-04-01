import { Priority } from "../../createTask/enums/Priority";

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.normal:
      return "grey.800";
    case Priority.low:
      return "info.light";
    case Priority.high:
      return "error.light";
    default:
      return "grey.900";
  }
};
