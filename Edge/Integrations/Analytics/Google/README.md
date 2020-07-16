# Google Analytics Integration for Edge
## Overview
1. Instead of passing data through a custom dimension like X Web, we use GA events.  Specifically, we populate eventCategory, eventAction, and eventLabel with data specific to your Optimizely experiments. Here's some output from the [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=en) that is logged when the Optimizely Experiment activation event is fired.
![image](https://user-images.githubusercontent.com/53874398/87724980-46b94400-c771-11ea-9072-44307e96e7f0.png)

2. In GA, you can now filter your users by those who have fired an event with the Action, Category, and/or Labels above.  The label is (experimentId: variationId) and we'll send an event for each active experiment on a given page.

3. You can find the IDs for each of your experiments and variations by looking at the [API Names](https://help.optimizely.com/Troubleshoot_Problems/API_Names%3A_Find_masked_IDs_for_troubleshooting) in the Optimizely App.

*Note: The integration could be modified to include readable names if you are willing to [un-mask descriptive names](https://help.optimizely.com/Classic/Project_Settings%3A_Privacy_in_Optimizely_Classic#Masking_Descriptive_Names).*

## Project JS Code
In the projectjs.js, there are areas that will need to be configured per site.
Line # | Configuration
------------ | -------------
18| `{YOUR_DOMAIN}`
82 | `var prefix = 'tealium_0' + '.'; // Assign to ‘’ if no custom tracker`
87 | `// Needs to be customized for specific websites. Defines how we identify if GA is available`
