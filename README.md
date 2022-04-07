This demonstates a breaking change/issue with migrating from mui v4 -> v5. 


The `main` branch is a working v4 app. 

Run the application `yarn start` see it works. Run the tests, they pass. 


Now follow the [migration instructions](https://mui.com/guides/migration-v4/#migration-steps)

```
yarn add @mui/material @mui/styles @emotion/react @emotion/styled
npx @mui/codemod v5.0.0/preset-safe src
```

This works successfully, and the application will start fine. 

However, the tests now fail with this error: 

```

  ● <MyComponent/> › has some text

    TypeError: spacing is not a function

      10 |   ({ spacing, palette }) => ({
      11 |     root: {
    > 12 |         padding: spacing(2),
         |                  ^
      13 |         border: "solid 1px red",
      14 |     }
      15 |   })


```

