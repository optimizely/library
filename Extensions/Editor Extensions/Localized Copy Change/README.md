# Localized Copy Change

## Description

This extension allows you to make a copy change on your website in multiple languages. 

Simply select the element you want to change, and add the new copy for English, Spanish and German. 

The correct copy will automatically be applied based on the user's browser language preferences, and you can even preview each language in the visual editor.


## Fields

* Element
* English Text
* German Text
* Spanish Text
* Preview Language

## Customization

You can easily add more languages to this extension by:

1. Creating a new Text field for that language. You should follow the existing API naming convention of `str_{{language ISO 639-1 code}}`

2. Update the Options for the Preview Language field to include your new language. Label should be the the user-friendly name of the language, and the value should be the API name you gave to the field.

3. Update the Apply JS to include your new language in the switch statement.
  * Add a new case condition that matches the correct `navigator.language` value for your language
  * Set `str` to your new text field's API name. e.g. `extension['str_en']`

## About Language Codes

The `navigator.language` property contains a string indicating the the preferred language of the user. This is usually defined as the languge UI in use by the browser, but may be the operating system's language under certain scenarios.

This property is represented as an [IETF BCP 47 code](https://tools.ietf.org/html/bcp47). This consists of an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code, as well as a 2-letter region.

For example: 'en-US' indicates English, US.

Some browsers may return the 2 character ISO 639-1 code, others may return the full BCP 47 code, depending on the user's settings, so it is best practice to check for both, as is shown for English in the extension.