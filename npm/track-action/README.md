# track-action

&emsp;&emsp; Event-track is a global event trace with XMLHttpRequest requests built in

# track-action Using Process

## Installation

```
npm install track-action -S
```

## Use

```
import GlobalAction from "track-action";
const E = new GlobalAction({
    url: 'http://xxx:8080/send/request',
    data: {
        userId: 1,
    },
    headers: {}
});

Vue.prototype.$eventTrack = E.trackAction.bind(E);
React.$eventTrack = E.trackAction.bind(E);
```

## Vue Event

```
this.$eventTrack({
    userId: 2,
});

```

## React Event

```
React.$eventTrack({
    userId: 2,
});
```

## Note

data 参数采用合并策略，调用事件传递参数会覆盖初始化参数，可以在初始化增加通用参数，事件调用增加专用参数