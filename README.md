
# Custom Header Package

Custom header for react-native applications to reduce the hassle of creating a header for each screen.

## Installation

You can install this package using npm:

```bash
npm install @yousafzai66/customheader
```

## Example:

```jsx
import React from 'react';
import { View } from 'react-native';
import CustomHeader from '@yousafzai66/customheader';

const App = () => {
    return (
        <View>
            <CustomHeader title="Custom Header" onPress={() => console.log('Back pressed')} />
            {/* Other components */}
        </View>
    );
};

export default App;
```


## Props:

- `title` : title that will be displayed
- `onPress`: prop to call function on the icon press
- `customHeaderStyling`: prop to pass custom styling to header if required
- `addRightIcon`: prop to add icon on the right if required.
- `RightIconStyling`: prop to add styling to the right icon.
- `onRightIconPress`: prop to call a function on right icon press.



## Hope this helps! Have a great day!
