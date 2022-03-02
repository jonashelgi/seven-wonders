import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Button,
  NumberInput,
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
      score: {
        val1: 0,
        val2: 0,
        val3: 0,
      },
    },
  });

  const onSubmit = (data: any) => {
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
    <Container size={"xl"}>
      <SimpleGrid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Controller
            name="score.val1"
            control={control}
            render={({ field }) => <NumberInput {...field} />}
          />
          <Button type="submit">Add</Button>
        </form>
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
