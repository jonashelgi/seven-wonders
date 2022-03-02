import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  NumberInput,
  NumberInputField,
  Input,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

const players: any[] = [];
const Home = () => {
  const [info, setInfo] = useState([""]);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      total: 0,
      score: {
        val1: 0,
        val2: 0,
        val3: 0,
      },
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setInfo((info) => [...info, data]);
    players.push(data);
  };

  const removePlayer = (index: any) => {
    const temp = [...info];
    temp.splice(index, 1);
    players.splice(index - 1, 1);
    setInfo(temp);
  };

  return (
    <Container maxW={"8xl"}>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            <Controller
              name="score.val1"
              control={control}
              render={({ field }) => (
                <NumberInput {...field}>
                  <NumberInputField />
                </NumberInput>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Box>
        <Box>
          {info.map((data: any, index: number) => (
            <div key={index}>
              {index !== 0 ? (
                <Box>
                  <Text size="xl">{data.name}</Text>
                  <Button onClick={() => removePlayer(index)}>Remove</Button>
                </Box>
              ) : (
                <></>
              )}
            </div>
          ))}
        </Box>
      </SimpleGrid>
      <Button onClick={() => console.log(players)}>Check</Button>
    </Container>
  );
};

export default Home;
