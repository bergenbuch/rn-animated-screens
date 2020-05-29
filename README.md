# rn-animated-screens

This is a minimalistic demo project that incorporates getting started guidelines from [React Native](https://reactnative.dev/docs/getting-started) and [React Navigation](https://reactnavigation.org/docs/nesting-navigators) examples.

The goal was to built a simple application that illustrates transition between two screens _Home_ and _Articles_ located on the same level and transition between different levels, for instance _Home_ and _Article Detail_.

Below you'll find the navigators` map:

- Home
- Articles
  - ArticlesList
  - ArticleDetail

The transition from _Home_ to _ArticleDetail_ includes passing parameters.

The navigation is based on `StackNavigator` and has `headerMode` parameter set to `none` to maintain pure screen layout.

It's also build to run on _bare metal_ without using _expo_.
