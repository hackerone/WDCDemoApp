# WDCDemoApp

> https://github.com/hackerone/WDCDemoApp

<!--
Morning everyone, welcome to react native workshop, 
Firstly, thanks for signing up. Today we'll be going through a very brief introduction to React Native and then we'll jump on to hands-on workshop where you'll be setting up React native dev environment and work on bunch of short excercises. Then finally build an app.
-->
## React Native?
<!--
So, what is react native? Why is it all hyped up (or was hyped up)?
It's a tool / framework which lets us build mobile apps using Javascript. There were a lot of frameworks before React Native, which promised to do the same, but they were using webview, which wasn't performant of smooth.

React native came up with a different approach. You write your logic in Javascript, but the actual native components are rendered, which allows the app UI to be fluid and performant.

So, why was it popular? A couple of reasons, It was based on React which was another JS View framework for the web, so if you knew React, you can easily get started with React Native, you write similar JSX to build Views. It tried to bring Web concepts to Native app development. And it was cross-platform. It's open source, so more contributors.

It ships with a bunch of native UIComponents and native APIs, but if the component you're looking for is not available out of the box, you can easily add it to the framework. There are a lot of open source projects out there which add new components.
-->
- Build native apps using React.
- Uses native components and APIs.

## Setup
<!--
As with any app development, you'll need some tools to get started with. And as with any JS development. Let's make sure everyone here is setup with the tools required for development.
-->
- Download and install `node` - https://nodejs.org/en/download/

- Download expo client on your phone (both iOS and Android supported) - https://expo.io/ (skip if you have iOS Simulator / XCode)

- Download and install Expo XDE desktop (you'll need to complete the free registration) - https://expo.io/ (skip if you have iOS Simulator / XCode)

### Mac users
- Download XCode - https://developer.apple.com/xcode/downloads/

### Getting the code
```
git clone https://github.com/hackerone/WDCDemoApp.git
npm i
```

### Running on simulator iOS
```
npm run ios
```

### Running on device (using expo XDE)
```
npm start
```

- Open `Expo XDE`
- Login / Create an account.
- `Project` > `Open Project` > select the location where you have cloned the code.
- Press `share` button on the desktop app. This will bring up a QR code.
- Open `expo` app on your phone and scan the QR code generated in the desktop app.

EX - 1
- Run the app on simulator or device.
- Modify the Text to say `Hello WebDevCon EU`

## React UI components & Style
<!--
React Native provides basic UI components which are required to build common UI.
They are comparable to the DOM elements available in the browser.
-->
Web | Native
--- | ---
`<div>` |  [`<View>`](https://facebook.github.io/react-native/docs/view.html)
`<p>, <h1>, <h2> ..` | [`<Text>`](https://facebook.github.io/react-native/docs/text.html)
`<img/>` | [`<Image>`](https://facebook.github.io/react-native/docs/image.html)
`<input/>` | [`<TextInput>`](https://facebook.github.io/react-native/docs/text-input.html)
`<button>, <a>` | [`<Button>`](https://facebook.github.io/react-native/docs/button.html) or [`<TouchableHighlight>`](https://facebook.github.io/react-native/docs/touchablehighlight.html)

https://facebook.github.io/react-native/releases/next/docs/style.html

<!--
And you can style them the way you want. We don't have classes and ids here though.
You'll be passing the style reference via style property in the component.
Layout is done using flex box. 
-->
EX - 2
- Make the App's background color `black`
- Text should be `white`
- Place the text box to the top. The text must be left aligned.

EX - 3
- Replace the text box with search box.
- Should have a `TextInput` component, where the user can type keyword.
- Should have a `Button` which says `Go`
<!-- 
```
class App extends React.Component {
  render() {
    return <View>
      <TextInput />
      <Button title='Go'>
    </View>
  }
}
```
-->
https://facebook.github.io/react-native/docs/textinput.html

https://facebook.github.io/react-native/docs/button.html

## State management
<!--
> React's states are local to the component. In an app, you'd want to have states that are at a level higher than atleast the component.

> State management systems came into play. We'll be using one such system called MobX.

> 

> MobX uses `decorators` - `observer`, `observable`, `action`, `computed`
<img src='https://raw.githubusercontent.com/mobxjs/mobx/master/docs/flow.png'/>
-->
EX - 4
- Display the text entered into the TextBox in the middle of the screen using local state.
- The text in the middle of the screen should update as the user types.
- Replace local state with MobX store.
- https://github.com/mobxjs/mobx
- https://raw.githubusercontent.com/mobxjs/mobx/master/docs/flow.png

EX - 5
- Pressing `GO` button should fetch Giphy results for the keyword entered.
- Use `getSearchResultItems` method from `./utils/api` to fetch the results.
- Refer to `sampleGiphyResponse.json` for the response format.

EX - 6
- Display results as a `FlatList`
- Display `Image` instead of plain text.

## Routing
<!--
 Adding navigation to the app
 -->

EX - 7
- Create `Trending` page.
- Use `TabBar` to switch between `Home Page` and `Trending Page`.
- Use `home.png` and `trending.png` as icons in the `TabBar`.
- https://reactnavigation.org/

EX - 8
- Populate `Trending` page with content from `getTrendingItems`


## Publishing your app

Using expo tool
- https://docs.expo.io/versions/v19.0.0/guides/exp-cli.html

Using `npm run eject` will convert it into a normal XCode / Android project which you can publish the app stores.


## References
- https://github.com/vhpoet/react-native-styling-cheat-sheet/blob/master/README.md
- http://jonibologna.com/flexbox-cheatsheet/
- https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html

- https://reactnavigation.org/
- https://github.com/mobxjs/mobx
- https://github.com/mobxjs/mobx-react
- https://expo.io/
- https://docs.expo.io/versions/v19.0.0/guides/exp-cli.html