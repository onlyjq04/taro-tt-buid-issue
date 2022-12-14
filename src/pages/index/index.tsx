import { PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import { observer } from "mobx-react";
import { useStores } from "../../store/root-store";
import "./index.scss";

export default observer(function Index(props: PropsWithChildren) {
  const { counterStore } = useStores();
  return (
    <View>
      <Button
        onTap={() => {
          counterStore.increment();
        }}
      >
        点我增加
      </Button>
      <View>{counterStore.count}</View>
    </View>
  );
});
