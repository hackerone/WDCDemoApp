# WDCDemoApp

## React Native?

- Bringing React concepts to building native apps.
- Reactive
- Uses native components and APIs

## Setup
- Download and install `node` - https://nodejs.org/en/download/

- Download expo client on your phone (both iOS and Android supported) - https://expo.io/

- Download and install Expo XDE desktop (you'll need to complete the free registration) - https://expo.io/ (optional for mac users)

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


## React UI

- `<div>` > `<View>`
- `<p>, <h1>, <h2> ..` > `<Text>`
- `<img/>` > `<Image>`
- `<input/>` > `<TextInput>`
- `<button>, <a>` > `<Button>` or `<TouchableHighlight>`

http://facebook.github.io/react-native/docs/getting-started.html

## Style
> RN brings in Web styles to native.

> Layout using flex box.

> Create a `TextInput` component, when the value changes in the `TextInput` update the `Text` component.

EX - 2
- Make the App's background color `black`
- Text should be `white`
- Place the text box to the top. The text must be left aligned.

EX - 3
- Replace the text box with search box.
- Create a Search Box. 
- Should have a `TextInput` component, where the user can type keyword.
- Should have a `Button` which says `Go`

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

https://facebook.github.io/react-native/docs/textinput.html
https://facebook.github.io/react-native/docs/button.html

## State management
> React's states are local to the component. In an app, you'd want to have states that are at a level higher than atleast the component.

> State management systems came into play. We'll be using one such system called MobX.

> https://github.com/mobxjs/mobx

> MobX uses `decorators` - `observer`, `observable`, `action`, `computed`
<img src='https://raw.githubusercontent.com/mobxjs/mobx/master/docs/flow.png'/>

EX - 4
- Display the text entered into the TextBox in the middle of the screen using local state.
- The text in the middle of the screen should update as the user types.
- Replace local state with MobX store.

EX - 5
- Pressing `GO` button should fetch Giphy results for the keyword entered.
- Use `getSearchResultItems` method from `./utils/api` to fetch the results.
- Refer to `sampleGiphyResponse.json` for the response format.

EX - 6
- Display results as a `FlatList`
- Display `Image` instead of plain text.

## Routing
> Adding navigation to the app -  https://reactnavigation.org/

EX - 7
- Create `Trending` page.
- Use TabBar to switch between `Home Page` and `Trending Page`.
- Use `home.png` and `trending.png` as icons in the TabBar.

EX - 8
- Populate `Trending` page with content from `getTrendingItems`

## Ref
https://github.com/vhpoet/react-native-styling-cheat-sheet/blob/master/README.md
http://jonibologna.com/flexbox-cheatsheet/
