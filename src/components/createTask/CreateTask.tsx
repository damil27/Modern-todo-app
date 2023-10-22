import React, { FC, ReactElement, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./interface/_taskSelectField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";
import { useMutation } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interface/ICreateTask";

export const CreateTask: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>();
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest("http://localhost:4300/tasks", "POST", data)
  );

  function createTaskHandler() {
    if (!title || !description || !date) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      py={6}
    >
      {" "}
      <Alert
        severity="success"
        sx={{
          width: "100%",
          marginBottom: "16px",
        }}
      >
        <AlertTitle>Success</AlertTitle>
        The Task has been created sucessfully
      </Alert>
      <Typography variant="h6" component="h2" mb={2}>
        Create Task
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField
          disabled={createTaskMutation.isLoading}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskDescriptionField
          disabled={createTaskMutation.isLoading}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          disabled={createTaskMutation.isLoading}
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            disabled={createTaskMutation.isLoading}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          disabled={!title || !description || !date || !priority || !status}
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          {" "}
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
