## Prerequisites

This integration is aimed at customers who are using Google Analytics and have transitioned to the new [Google Site Tag tracking code](https://developers.google.com/analytics/devguides/collection/gtagjs/).

The below guide also implies that you plan on using 1 Google Analytics Custom Dimension per experiment. 

This guide also implies that you have also created the Custom Dimensions you plan on using in the Google Analytics interface. 

## Installation

Contrary to analytics.js, the new Global Site Tag tracking code (gtag.js) requires to reference the custom dimensions prior to using them. 

Therefore, in order to use this integration you'll need to update the Global Site Tag and add the list of custom dimensions you want to use to store Optimizely experiment data. 

By default, the Global Site Tag looks like this: 

```javascript
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_TRACKING_ID');
```

where `GA_TRACKING_ID` is your Google Analytics tracking ID. 

We'll need to update the last line of code to look like this: 

```javascript
gtag('config', 'GA_TRACKING_ID', {
  'custom_map': {'dimension<Index>': 'DIMENSION_NAME'}
});
```

where `GA_TRACKING_ID` is your Google Analytics tracking ID, `<Index>` is the custom dimension index and `DIMENSION_NAME` the name of the custom dimension. This information can be found by going into your Google Analytics dashboard->Admin->Property->Custom Definitions->Custom Dimensions. 

Note that you need to add each custom dimension you plan on using to store Optimizely data (including the ones that will be used for future experiments). 
If there are multiple custom dimensions, the code will look like this: 

```javascript
gtag('config', 'GA_TRACKING_ID', {
  'custom_map': 
  {'dimension<Index>': 'DIMENSION_NAME'},
  {'dimension<Index_2>': 'DIMENSION_NAME_2'},
  {'dimension<Index_3>': 'DIMENSION_NAME_3'},
});
```

Next, go into Optimizely, head to the experiment that you want to integrate Google Site Tag with. 

Turn on the Google Site Tag Custom Analytics extension and in the experiment integration settings, enter the Custom Dimension name as you see it in the Google Analytics interface. 

Save and you should be good to go!