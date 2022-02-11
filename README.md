### Dynamic cards for your react native app
## Installation
yarn

```bash
yarn add dynacard
```
npm
```bash
npm i dynacard
```
## Usage
```javascript
import React, { Component } from 'react'
import {
    SafeAreaView,
    ScrollView
} from 'react-native'
import style from '../Style'
import Dynacard from 'dynacard'

class Project extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let links = [{
                name: "Github",
                link: "https://github.com/nigatedev/abassdev"
            },
            {
                name: "Facebook",
                link: "https://m.facebook.com/abasscheik.ben"
            },
            {
                name: "Twitter",
                link: "https://twitter.com/abasscheik1"
            },
        ]
        return(
            <SafeAreaView style={style.defaultContainer}>
	            <ScrollView showsVerticalScrollIndicator={false}>
                    <Dynacard
                        image={require("../assets/images/php_code.jpg")}
                        title="WRITE YOUR CART TITLE HERE"
                        headLinks={links}
                        lansUsed="PHP, JavaScript"
                        description="Card description, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
	            </ScrollView>
	        </SafeAreaView>
        )
    }
}

export default Project
```

## Example
<img src="screenshot.jpg" alt="screenshot" />