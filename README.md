Dynacard is an open-source ReactNative library that can help you easily create beautiful cards for your ReactNative application.
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
import { SafeAreaView, ScrollView } from 'react-native'
import Dynacard from 'dynacard'
import style from '../Style'

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
       
        let links = [{
                name: "Github",
                link: "https://github.com/abass-dev"
            },
            {
                name: "Facebook",
                link: "https://m.facebook.com/abasscheik.ben"
            },
            {
                name: "Todaydevs",
                link: "https://todaydevs.com"
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
                        btnGo={{title: 'Go somewhere', link: 'https://todaydevs.com'}}
                    />
                    <Dynacard
                        image={require("../assets/images/php_code.jpg")}
                        title="WRITE YOUR CART TITLE HERE"
                        headLinks={links}
                        lansUsed="PHP, JavaScript"
                        description="Card description, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        btnGo={{title: 'Go somewhere', link: 'https://todaydevs.com'}}
                    />
	            </ScrollView>
	        </SafeAreaView>
        )
    }
}

export default Project
```

## Result
<img src="screenshot.jpg" alt="screenshot" />

## Contact
If you want to contribute to this famous project or found any bug, please contact us here abassthedev@gmail.com OR abass@todaydevs.com
