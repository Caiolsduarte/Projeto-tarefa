import React from "react";
import { style } from "./styles";
import { ActivityIndicator, View } from 'react-native';

type Props = {
  loading: boolean;
}

export function Loading({ loading }: Props) {
  if (!loading) return <></>;

  return (
    <View style={style.container}>
      <ActivityIndicator color={'white'} size={'large'} />
    </View>
  );
}
