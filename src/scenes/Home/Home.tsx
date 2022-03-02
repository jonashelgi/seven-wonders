import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { useForm, Controller } from "react-hook-form";

const test: any[] = [];
const Home = () => {
  const [info, setInfo] = useState([""]);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      score: {
        val1: 0,
        val2: 0,
        val3: 0,
      },
    },
  });

  const onSubmit = (data: any) => {
    setInfo((info) => [...info, data]);
    test.push(data);
    console.log(test);
  };

  const removePlayer = (index: any) => {
    const temp = [...info];
    temp.splice(index, 1);
    test.splice(index-1, 1);
    setInfo(temp);
  };

  return (
    <Container size={"xl"}>
      <Grid>
        <Grid.Col span={6} style={{ border: "2px solid red" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <TextInput label={"hallo"} {...field} />}
            />
            <Controller
              name="score.val1"
              control={control}
              render={({ field }) => <NumberInput label={"test"} {...field} />}
            />
            <Button type="submit" />
          </form>
        </Grid.Col>
        <Grid.Col span={6} style={{ border: "2px solid red" }}>
          <Box>
            {info.map((data: any, index: number) => (
              <div key={index}>
                {index !== 0 ? (
                  <div>
                    {data.firstName}
                    <button onClick={() => removePlayer(index)}>x</button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Box>
        </Grid.Col>
      </Grid>
      <Button onClick={() => console.log(test)} />
    </Container>
  );
};

export default Home;
